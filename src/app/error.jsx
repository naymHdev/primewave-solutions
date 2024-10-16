// app/error.jsx
"use client"; // Error components need to be client-side

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-secondary">
          Something went wrong
        </h1>
        <p className="mt-4 text-gray-600">
          We encountered an error. Please try again later.
        </p>
        <button
          onClick={() => reset()} // Reset the error boundary
          className="mt-6 mr-2 inline-block text-white font-medium bg-legendary px-4 py-2 rounded shadow"
        >
          Try Again
        </button>
        <button
          onClick={() => router.push("/")} // Navigate back to home
          className="mt-4 inline-block text-primary hover:underline"
        >
          Go back to Home
        </button>
      </div>
    </div>
  );
}
