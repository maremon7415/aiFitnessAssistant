"use client";

import { SignedIn, SignedOut, SignIn, SignInButton } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

const HomePage = () => {
  return (
    <div>
      HomePage
      <div>
        <SignedIn>
          <SignOutButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </div>
  );
};

export default HomePage;
