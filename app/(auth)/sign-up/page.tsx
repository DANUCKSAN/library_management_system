"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validation";



const Page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={async (data) => {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demonstration, we assume the sign-up is always successful
      return { success: true };
    }}  
  />
);

export default Page;