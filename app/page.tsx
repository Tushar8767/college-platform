import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-l from-neon-400 to-indigo-700 px-10 py-24 text-white shadow-2xl">
        <div>
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            🎓 India’s Smart College Discovery Platform
          </div>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
            Discover Your
            <span className="text-blue-600">
              {' '}Perfect College
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white-600">
            Search, compare and explore top colleges based on
            NIRF rankings, placements, admission criteria,
            fee structure and campus insights.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/login"
              className="rounded-2xl bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-700"
            >
              Explore More
            </Link>

            <Link
              href="/colleges"
              className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-blue-700"
            >
              Explore Colleges
            </Link>

            <Link
              href="/compare"
              className="rounded-2xl border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Compare Colleges
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h3 className="text-3xl font-bold text-blue-600">
                500+
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Colleges Listed
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h3 className="text-3xl font-bold text-blue-600">
                50K+
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Students Guided
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h3 className="text-3xl font-bold text-blue-600">
                98%
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Placement Insights
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h3 className="text-3xl font-bold text-blue-600">
                24/7
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Smart Search
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[32px] bg-white p-8 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
              alt="College Campus"
              className="h-[500px] w-full rounded-3xl object-cover"
            />

            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-sm text-gray-500">
                Top Ranked College
              </p>

              <h3 className="mt-1 text-2xl font-bold">
                IIT Bombay
              </h3>

              <p className="mt-2 text-blue-600">
                ⭐ 4.9 Rating
              </p>
            </div>

            <div className="absolute -right-6 top-10 rounded-2xl bg-blue-600 p-5 text-white shadow-xl">
              <p className="text-sm text-blue-100">
                Avg Package
              </p>

              <h3 className="mt-1 text-3xl font-bold">
                ₹32 LPA
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose CollegeFinder?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Everything you need to make the right college decision.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2">
            <div className="text-5xl">🏆</div>

            <h3 className="mt-6 text-2xl font-bold">
              NIRF Rankings
            </h3>

            <p className="mt-4 text-gray-600">
              Explore colleges ranked nationally,
              by state and by city.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2">
            <div className="text-5xl">💼</div>

            <h3 className="mt-6 text-2xl font-bold">
              Placement Insights
            </h3>

            <p className="mt-4 text-gray-600">
              Analyze average packages,
              placement percentages and recruiters.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2">
            <div className="text-5xl">⚖️</div>

            <h3 className="mt-6 text-2xl font-bold">
              Smart Comparison
            </h3>

            <p className="mt-4 text-gray-600">
              Compare colleges side-by-side
              based on fees, rankings and placements.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}