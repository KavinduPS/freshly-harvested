"use client";
import { SignIn } from "@/components/SignIn";

export default function Home() {
  return (
    <div className="bg-gray-950 h-screen flex items-center justify-center">
      <div className="bg-gray-900 w-4/12 h-8/12 rounded-2xl">
        <SignIn></SignIn>
      </div>
    </div>
  );
}
