import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignupPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <SignUp />
    </main>
  );
};

export default SignupPage;
