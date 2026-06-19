"use client";

import { IKImage, ImageKitProvider, IKUpload, IKVideo } from "imagekitio-next";

import { useRef, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import config from "@/lib/config";

const {
  env: {
    imageKit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(
      `${config.env.apiEndpoint}/api/auth/imagekit`
    );

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();

    const { signature, expire, token } = data;

    return { token, expire, signature };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

interface Props {
  type: "image" | "video";
  accept: string;
  placeholder: string;
  folder: string;
  variant: "dark" | "light";
  onFileChange: (filePath: string) => void;
  value?: string;
}

const FileUpload = ({
  type,
  accept,
  placeholder,
  folder,
  variant,
  onFileChange,
  value,
}: Props) => {
  const ikUploadRef = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<{
    filePath: string | null;
  }>({
    filePath: value ?? null,
  });

  const [progress, setProgress] = useState(0);

  const styles = {
    button:
      variant === "dark"
        ? "bg-dark-300"
        : "bg-light-600 border border-gray-100",
    placeholder: variant === "dark" ? "text-light-100" : "text-slate-500",
    text: variant === "dark" ? "text-light-100" : "text-dark-400",
  };

  const onError = (error: any) => {
    console.error("Upload Error:", error);
     console.log({
  publicKey,
  urlEndpoint,
});

    toast.error(`${type} upload failed`, {
      description: `Your ${type} could not be uploaded. Please try again.`,
    });
  };

  const onSuccess = (res: any) => {
    setFile({
      filePath: res.filePath,
    });

    onFileChange(res.filePath);

    toast.success(`${type} uploaded successfully`, {
      description: `${res.filePath} uploaded successfully!`,
    });
  };

  const onValidate = (selectedFile: File) => {
    if (type === "image") {
      if (selectedFile.size > 20 * 1024 * 1024) {
        toast.error("File size too large", {
          description: "Please upload an image smaller than 20MB.",
        });

        return false;
      }
    }

    if (type === "video") {
      if (selectedFile.size > 50 * 1024 * 1024) {
        toast.error("File size too large", {
          description: "Please upload a video smaller than 50MB.",
        });

        return false;
      }
    }

  

    return true;
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        validateFile={onValidate}
        useUniqueFileName
        folder={folder}
        accept={accept}
        className="hidden"
        onUploadStart={() => setProgress(0)}
        onUploadProgress={({ loaded, total }: any) => {
          const percent = Math.round((loaded / total) * 100);
          setProgress(percent);
        }}
      />

      <button
        type="button"
        className={cn("upload-btn", styles.button)}
        onClick={() => {
          ikUploadRef.current?.click();
        }}
      >
        <Image
          src="/icons/upload.svg"
          alt="upload icon"
          width={20}
          height={20}
          className="object-contain"
        />

        <p className={cn("text-base", styles.placeholder)}>
          {placeholder}
        </p>

        {file.filePath && (
          <p className={cn("upload-filename", styles.text)}>
            {file.filePath}
          </p>
        )}
      </button>

      {progress > 0 && progress < 100 && (
        <div className="w-full rounded-full bg-green-200">
          <div
            className="progress"
            style={{
              width: `${progress}%`,
            }}
          >
            {progress}%
          </div>
        </div>
      )}

      {file.filePath && (
        <>
          {type === "image" ? (
            <IKImage
              path={file.filePath}
              alt="uploaded image"
              width={500}
              height={300}
            />
          ) : (
            <IKVideo
              path={file.filePath}
              controls
              className="h-96 w-full rounded-xl"
            />
          )}
        </>
      )}
    </ImageKitProvider>
  );
};

export default FileUpload;