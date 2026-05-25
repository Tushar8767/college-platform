"use client";

import Link from "next/link";

import {
  useEffect,
  useState,
} from "react";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const router = useRouter();

  useEffect(() => {
    const token =
      document.cookie.includes(
        "token"
      );

    setIsLoggedIn(token);
  }, []);

  function handleLogout() {
    document.cookie =
      "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    setIsLoggedIn(false);

    router.push("/");
  }

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          CollegeFinder
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/colleges">
            Colleges
          </Link>

          {isLoggedIn && (
            <Link href="/compare">
              Compare
            </Link>
          )}

          {!isLoggedIn ? (
            <>
              <Link href="/signup">
                Signup
              </Link>

              <Link href="/login">
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-500 px-4 py-2 text-white"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}