"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCompareStore } from "@/lib/compare-store";
import BackButton from "@/components/BackButton";

type CollegeCardProps = {
  college: any;
};

export default function CollegeCard({
  college,
}: CollegeCardProps) {
  const comparedColleges =
    useCompareStore(
      (state) => state.comparedColleges
    );

  const toggleCollege =
    useCompareStore(
      (state) =>
        state.toggleCollege
    );

  const isSelected =
    comparedColleges.some(
      (c) => c.id === college.id
    );

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group overflow-hidden rounded-3xl
        bg-white shadow-md transition-all
        duration-300 hover:shadow-2xl
        border border-gray-100
      "
    >
        
      {/* IMAGE SECTION */}
      <div className="relative overflow-hidden">
        <Link
          href={`/colleges/${college.id}`}
        >
          <Image
            src={college.image}
            alt={college.name}
            width={500}
            height={300}
            className="
              h-56 w-full object-cover
              transition duration-500
              group-hover:scale-105
            "
          />
        </Link>

        {/* TOP BADGES */}
        <div className="absolute left-4 top-4 flex gap-2">
          <div className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">
            NIRF #{college.nirfRank}
          </div>

          <div className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow">
            {college.placementPercentage}%
            Placement
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* TITLE */}
        <Link
          href={`/colleges/${college.id}`}
        >
          <h2 className="cursor-pointer text-2xl font-bold text-gray-900 transition hover:text-blue-600">
            {college.name}
          </h2>
        </Link>

        {/* LOCATION */}
        <p className="mt-2 text-gray-500">
          📍 {college.location},{" "}
          {college.state}
        </p>

        {/* DESCRIPTION */}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
          {college.description}
        </p>

        {/* STATS */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-xs text-gray-500">
              Rating
            </p>

            <p className="mt-1 text-lg font-bold text-yellow-500">
              ⭐ {college.rating}
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-xs text-gray-500">
              Avg Package
            </p>

            <p className="mt-1 text-lg font-bold text-emerald-600">
              ₹
              {(
                college.averagePackage /
                100000
              ).toFixed(1)}
              LPA
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-xs text-gray-500">
              Fees
            </p>

            <p className="mt-1 text-lg font-bold text-indigo-600">
              ₹
              {(
                college.fees / 100000
              ).toFixed(1)}
              L
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-xs text-gray-500">
              Highest Package
            </p>

            <p className="mt-1 text-lg font-bold text-pink-600">
              ₹
              {(
                college.highestPackage /
                10000000
              ).toFixed(1)}
              Cr
            </p>
          </div>
        </div>

        {/* ADMISSION */}
        <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-4">
          <p className="font-semibold text-orange-700">
            🎯 Admission Criteria
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            {
              college.admissionCriteria
            }
          </p>
        </div>

        {/* TOP RECRUITERS */}
        <div className="mt-6">
          <p className="mb-3 font-semibold text-gray-800">
            Top Recruiters
          </p>

          <div className="flex flex-wrap gap-2">
            {college.topRecruiters?.map(
              (
                recruiter: string,
                index: number
              ) => (
                <span
                  key={index}
                  className="
                    rounded-full bg-blue-50
                    px-3 py-1 text-xs
                    font-medium text-blue-700
                  "
                >
                  {recruiter}
                </span>
              )
            )}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-7 flex flex-col gap-3">
          {/* COMPARE BUTTON */}
          <motion.button
            whileTap={{
              scale: 0.96,
            }}
            onClick={() => {
              const isLoggedIn =
                document.cookie.includes(
                  "token"
                );

              if (!isLoggedIn) {
                window.location.href =
                  "/login";

                return;
              }

              toggleCollege(college);
            }}
            className={`
              rounded-2xl px-4 py-3
              font-semibold text-white
              transition-all duration-300
              ${
                isSelected
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-blue-600 hover:bg-blue-700"
              }
            `}
          >
            {isSelected
              ? "✔ Added to Compare"
              : "Compare College"}
          </motion.button>

          {/* WEBSITE BUTTON */}
          <a
            href={
              college.officialWebsite
            }
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-2xl border
              border-gray-300 bg-white
              px-4 py-3 text-center
              font-medium text-gray-700
              transition hover:bg-gray-100
            "
          >
            Visit Official Website
          </a>
        </div>
      </div>
    </motion.div>
  );
}