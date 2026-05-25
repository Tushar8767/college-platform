"use client";

import { useCompareStore } from "@/lib/compare-store";
import BackButton from "@/components/BackButton";
export default function ComparePage() {
  const comparedColleges =
    useCompareStore(
      (state) => state.comparedColleges
    );

  const removeCollege =
    useCompareStore(
      (state) => state.removeCollege
    );

    if (comparedColleges.length === 0) {
        return (
          <main className="flex min-h-screen items-center justify-center bg-gray-100 p-10">
            <div className="w-full max-w-2xl rounded-3xl bg-white p-10 text-center shadow-xl">
            <BackButton />
              <div className="text-6xl">
                ⚖️
              </div>
      
              <h1 className="mt-6 text-4xl font-bold text-gray-900">
                Compare Colleges
              </h1>
      
              <p className="mt-4 text-lg text-gray-600">
                You haven't selected any colleges
                to compare yet.
              </p>
      
              <p className="mt-2 text-gray-500">
                Explore colleges and add them to
                comparison for side-by-side insights.
              </p>
      
              <a
                href="/colleges"
                className="mt-8 inline-block rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
              >
                Select Colleges
              </a>
            </div>
          </main>
        );
      }
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold">
          Compare Colleges
        </h1>

        <div className="overflow-x-auto rounded-2xl bg-white shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-4 text-left">
                  Feature
                </th>

                {comparedColleges.map(
                  (college) => (
                    <th
                      key={college.id}
                      className="border p-4"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <p className="text-xl font-bold">
                          {college.name}
                        </p>

                        <button
                          onClick={() =>
                            removeCollege(
                              college.id
                            )
                          }
                          className="rounded-lg bg-red-500 px-3 py-1 text-sm text-white"
                        >
                          Remove
                        </button>
                      </div>
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-4 font-semibold">
                  Rating
                </td>

                {comparedColleges.map(
                  (college) => (
                    <td
                      key={college.id}
                      className="border p-4 text-center"
                    >
                      ⭐ {college.rating}
                    </td>
                  )
                )}
              </tr>

              <tr>
                <td className="border p-4 font-semibold">
                  NIRF Rank
                </td>

                {comparedColleges.map(
                  (college) => (
                    <td
                      key={college.id}
                      className="border p-4 text-center"
                    >
                      🏆 #
                      {college.nirfRank}
                    </td>
                  )
                )}
              </tr>

              <tr>
                <td className="border p-4 font-semibold">
                  Placement %
                </td>

                {comparedColleges.map(
                  (college) => (
                    <td
                      key={college.id}
                      className="border p-4 text-center"
                    >
                      💼
                      {
                        college.placementPercentage
                      }
                      %
                    </td>
                  )
                )}
              </tr>

              <tr>
                <td className="border p-4 font-semibold">
                  Avg Package
                </td>

                {comparedColleges.map(
                  (college) => (
                    <td
                      key={college.id}
                      className="border p-4 text-center"
                    >
                      ₹
                      {college.averagePackage.toLocaleString()}
                    </td>
                  )
                )}
              </tr>

              <tr>
                <td className="border p-4 font-semibold">
                  Fees
                </td>

                {comparedColleges.map(
                  (college) => (
                    <td
                      key={college.id}
                      className="border p-4 text-center"
                    >
                      ₹
                      {college.fees.toLocaleString()}
                    </td>
                  )
                )}
              </tr>

              <tr>
                <td className="border p-4 font-semibold">
                  Location
                </td>

                {comparedColleges.map(
                  (college) => (
                    <td
                      key={college.id}
                      className="border p-4 text-center"
                    >
                      📍
                      {college.location}
                    </td>
                  )
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}