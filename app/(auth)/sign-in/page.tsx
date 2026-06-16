"use client";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validation";


const Page = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={async (data) => {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demonstration, we assume the sign-in is always successful
      return { success: true };
    }}
  />
);

export default Page;