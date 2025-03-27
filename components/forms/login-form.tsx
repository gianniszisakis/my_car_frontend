"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export default function LoginForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-semibold">
          Login to My Car App
        </h2>
        <Button
          onClick={() => signIn("github", { callbackUrl: "/" })} //Initiates GitHub login
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-900"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.704-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465-.907-.62.069-.608.069-.608 1.003.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.088 2.91.832.092-.646.35-1.088.636-1.34-2.22-.252-4.555-1.112-4.555-4.946 0-1.092.39-1.986 1.03-2.682-.103-.253-.447-1.268.097-2.64 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.84c.85.004 1.707.114 2.506.334 1.91-1.294 2.748-1.025 2.748-1.025.546 1.372.202 2.387.1 2.64.64.696 1.03 1.59 1.03 2.682 0 3.844-2.339 4.69-4.567 4.938.36.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.481A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z"
            />
          </svg>
          Login with GitHub
        </Button>
      </div>
    </div>
  );
}
