import { prisma } from "@/lib/prisma";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import { NextResponse } from "next/server";

const JWT_SECRET =
  process.env.JWT_SECRET ||
  "secret";

export async function POST(
  request: Request
) {
  try {
    const body =
      await request.json();

    const {
      email,
      password,
    } = body;

    console.log(
      "Login request:",
      email
    );

    const user =
      await prisma.user.findUnique({
        where: { email },
      });

    if (!user) {
      return NextResponse.json(
        {
          error:
            "User not found",
        },
        { status: 400 }
      );
    }

    const isPasswordValid =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          error:
            "Invalid password",
        },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      {
        userId: user.id,
      },
      JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const response =
      NextResponse.json({
        success: true,
        user,
      });

    response.cookies.set(
      "token",
      token,
      {
        path: "/",
      }
    );

    return response;
  } catch (error) {
    console.log(
      "LOGIN ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Internal server error",
      },
      { status: 500 }
    );
  }
}