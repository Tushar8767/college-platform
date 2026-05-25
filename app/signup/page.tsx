"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";

export default function SignupPage() {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

    async function handleSignup(
        e: React.FormEvent
      ) {
        e.preventDefault();
      
        const response =
          await fetch(
            "/api/auth/signup",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify(
                formData
              ),
            }
          );
      
        const data =
          await response.json();
      
        if (!response.ok) {
          alert(
            data.error ||
              "Signup failed"
          );
      
          return;
        }
      
        alert("Signup successful");
      
        router.push("/login");
      }
  const router = useRouter();
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-3xl font-bold">
          Signup
        </h1>
        <BackButton />
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-xl border p-3"
            onChange={(e) =>
              setFormData({
                ...formData,
                name:
                  e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border p-3"
            onChange={(e) =>
              setFormData({
                ...formData,
                email:
                  e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border p-3"
            onChange={(e) =>
              setFormData({
                ...formData,
                password:
                  e.target.value,
              })
            }
          />

          <button className="w-full rounded-xl bg-blue-600 py-3 text-white">
            Create Account
          </button>
        </div>
      </form>
    </main>
  );
}