import React from "react";
import LoginForm from "@/Components/loginForm";
import ThemeToggle from "@/Components/themeToggle";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <LoginForm />
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  );
}

