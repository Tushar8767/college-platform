"use client";

import { useState } from "react";
import BackButton from "@/components/BackButton";
import CollegeCard from "@/components/CollegeCard";
import { colleges } from "@/data/colleges";
import { motion } from "framer-motion";

export default function CollegesPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredColleges = colleges
    .filter(
      (college) =>
        college.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        college.location
          .toLowerCase()
          .includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      if (sortBy === "fees") {
        return a.fees - b.fees;
      }

      if (sortBy === "nirf") {
        return a.nirfRank - b.nirfRank;
      }

      if (sortBy === "placement") {
        return (
          b.placementPercentage -
          a.placementPercentage
        );
      }
      
      if (sortBy === "package") {
        return (
          b.averagePackage -
          a.averagePackage
        );
      }

      return 0;
    });

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-7xl">
      <BackButton />
        <h1 className="mb-8 text-4xl font-bold">
          Top Colleges
        </h1>

        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Search colleges..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-xl border p-3"
          />

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="rounded-xl border p-3"
          >
            <option value="">
              Sort By
            </option>

            <option value="rating">
              Highest Rating
            </option>

            <option value="fees">
              Lowest Fees
            </option>

            <option value="nirf">
              Best NIRF Rank
            </option>

            <option value="placement">
              Best Placements
            </option>

            <option value="package">
            Highest Avg Package
          </option>
          </select>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredColleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
            />
          ))}
        </motion.div>
      </div>
    </main>
  );
}   