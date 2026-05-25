"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BackButton from "@/components/BackButton";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const response =
      await fetch(
        "/api/auth/login",
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
          "Login failed"
      );

      return;
    }


    window.location.href =
      "/colleges";
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="hidden flex-col justify-center bg-blue-700 p-14 text-white lg:flex">
            
          <div className="max-w-lg">
            <h1 className="text-6xl font-bold leading-tight">
              Find Your
              Dream College
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Compare top colleges based on
              NIRF rankings, placements,
              fees, admission criteria and
              student reviews.
            </p>

            <div className="mt-10 space-y-5">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold">
                  500+ Colleges
                </h3>

                <p className="mt-2 text-blue-100">
                  Explore engineering,
                  medical and management
                  colleges across India.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold">
                  Smart Comparison
                </h3>

                <p className="mt-2 text-blue-100">
                  Compare colleges side by
                  side with placement and
                  fee insights.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">
            <div className="mb-8 text-center">
            <BackButton />
              <h1 className="text-4xl font-bold text-gray-900">
                Welcome Back
              </h1>

              <p className="mt-3 text-gray-500">
                Login to continue your
                college search journey.
              </p>
            </div>

            <form
              onSubmit={handleLogin}
              className="space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email:
                        e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password:
                        e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
                Login
              </button>
            </form>

            <p className="mt-8 text-center text-gray-600">
              Don’t have an account?{' '}
              <Link
                href="/signup"
                className="font-semibold text-blue-600 hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
