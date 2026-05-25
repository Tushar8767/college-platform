import { colleges } from "@/data/colleges";
import BackButton from "@/components/BackButton";
export default async function CollegeDetailPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const college =
    colleges.find(
      (c) => c.id === id
    );

  if (!college) {
    return (
      <main className="p-10">
        College not found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-xl">
      <BackButton />
        <img
          src={college.image}
          alt={college.name}
          className="h-[400px] w-full rounded-3xl object-cover"
        />

        <h1 className="mt-8 text-5xl font-bold">
          {college.name}
        </h1>

        <p className="mt-3 text-lg text-gray-500">
          {college.location},{" "}
          {college.state}
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-blue-50 p-5">
          <h3 className="font-bold">
            NIRF Rank
          </h3>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            #{college.nirfRank}
          </p>
        </div>

        <div className="rounded-2xl bg-green-50 p-5">
          <h3 className="font-bold">
            Avg Package
          </h3>

          <p className="mt-2 text-3xl font-bold text-green-600">
            ₹
            {college.averagePackage.toLocaleString()}
          </p>
        </div>

        <div className="rounded-2xl bg-purple-50 p-5">
          <h3 className="font-bold">
            Placements
          </h3>

          <p className="mt-2 text-3xl font-bold text-purple-600">
            {college.placementPercentage}%
          </p>
        </div>

        <div className="rounded-2xl bg-red-50 p-5">
          <h3 className="font-bold">
            Highest Package
          </h3>

          <p className="mt-2 text-2xl font-bold text-red-600">
            ₹
            {college.highestPackage.toLocaleString()}
          </p>
        </div>
      </div>
        <h2 className="mt-10 text-3xl font-bold">
          About College
        </h2>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          {college.description}
        </p>

        <h2 className="mt-10 text-3xl font-bold">
          Courses Offered
        </h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {college.courses.map(
            (course) => (
              <span
                key={course}
                className="rounded-full bg-blue-100 px-5 py-2 text-blue-700"
              >
                {course}
              </span>
            )
          )}
        </div>

        <h2 className="mt-10 text-3xl font-bold">
          Top Recruiters
        </h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {college.topRecruiters.map(
            (company) => (
              <span
                key={company}
                className="rounded-full bg-green-100 px-5 py-2 text-green-700"
              >
                {company}
              </span>
            )
          )}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <h3 className="text-2xl font-bold text-orange-700">
              🎯 Admission Criteria
            </h3>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              {college.admissionCriteria}
            </p>

            <div className="mt-5 rounded-xl bg-white p-4">
              <p className="font-semibold text-gray-800">
                Important:
              </p>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                Cutoffs vary every year depending on:
                competition level, reservation category,
                branch demand, and seat intake.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <h3 className="text-xl font-bold">
              Established
            </h3>

            <p className="mt-3 text-gray-600">
              {college.established}
            </p>
          </div>
        </div>

        <a
          href={
            college.officialWebsite
          }
          target="_blank"
          className="mt-10 inline-block rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
        >
          Visit Official Website
        </a>
      </div>
    </main>
  );
}