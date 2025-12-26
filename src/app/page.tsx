const qualityOptions = [
  {
    title: "Fast",
    detail: "Best for quick concepts and fit checks.",
    time: "1-2 days",
  },
  {
    title: "Standard",
    detail: "Balanced detail and speed for most parts.",
    time: "3-4 days",
  },
  {
    title: "High Detail",
    detail: "Fine surfaces for customer-ready parts.",
    time: "5-7 days",
  },
];

const strengthOptions = [
  {
    title: "Decorative",
    detail: "Display pieces, models, mockups.",
  },
  {
    title: "Functional",
    detail: "Light mechanical use and prototypes.",
  },
  {
    title: "Heavy-Duty",
    detail: "High stress parts and fixtures.",
  },
];

const materialOptions = [
  {
    title: "Matte Polymer",
    detail: "Clean finish for everyday parts.",
  },
  {
    title: "Tough Nylon",
    detail: "Flexible, impact-resistant builds.",
  },
  {
    title: "Carbon Blend",
    detail: "Rigid, lightweight, premium feel.",
  },
];

const dashboardOrders = [
  {
    name: "Tooling Bracket Set",
    status: "Printing",
    action: "Re-order",
  },
  {
    name: "Handle Prototype V4",
    status: "Ready",
    action: "Re-order",
  },
  {
    name: "Retail Display Stand",
    status: "In review",
    action: "View details",
  },
];

const adminJobs = [
  {
    job: "Large enclosure panel",
    status: "Needs review",
    note: "Thin walls detected, clarify use case.",
  },
  {
    job: "Consumer product casing",
    status: "Submitted",
    note: "Waiting on auto-quote confirmation.",
  },
  {
    job: "Batch of 24 clips",
    status: "Printing",
    note: "Queued on nylon line.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen text-[#1b242f]">
      <div className="relative overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#f1e4d4] blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#d7f0e8] blur-[110px]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-8">
          <header className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#132635] text-xs font-semibold uppercase tracking-[0.2em] text-white">
                C3D
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4a5a6a]">
                  Cunsolo3D
                </p>
                <p className="text-xs text-[#6b7785]">
                  Print + Product Development
                </p>
              </div>
            </div>
            <nav className="hidden items-center gap-6 text-sm font-medium text-[#4a5a6a] md:flex">
              <a className="transition hover:text-[#132635]" href="#flow">
                How it works
              </a>
              <a className="transition hover:text-[#132635]" href="#quote">
                Quote
              </a>
              <a className="transition hover:text-[#132635]" href="#dashboard">
                Dashboard
              </a>
              <a className="transition hover:text-[#132635]" href="#admin">
                Admin view
              </a>
            </nav>
            <button
              className="rounded-full bg-[#132635] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#132635]/20 transition hover:-translate-y-0.5"
              type="button"
            >
              Start a quote
            </button>
          </header>

          <section className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d5dde5] bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#4a5a6a]">
                Instant quote + human review when needed
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-[#0f1720] sm:text-5xl">
                Upload a model, understand pricing instantly, and order with
                confidence.
              </h1>
              <p className="max-w-xl text-lg text-[#4a5a6a]">
                Cunsolo3D makes professional 3D printing easy for non-technical
                teams. Simple choices, clear pricing, and a fast path to
                production-ready parts.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  className="rounded-full bg-[#c58b3a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c58b3a]/30 transition hover:-translate-y-0.5"
                  type="button"
                >
                  Build a quote
                </button>
                <button
                  className="rounded-full border border-[#c9d3dd] bg-white/70 px-6 py-3 text-sm font-semibold text-[#132635] transition hover:border-[#132635]"
                  type="button"
                >
                  Ask a question
                </button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#6b7785]">
                    Typical turnaround
                  </p>
                  <p className="text-xl font-semibold text-[#132635]">
                    2-5 days
                  </p>
                </div>
                <div className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#6b7785]">
                    Materials
                  </p>
                  <p className="text-xl font-semibold text-[#132635]">12+</p>
                </div>
                <div className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#6b7785]">
                    Repeat orders
                  </p>
                  <p className="text-xl font-semibold text-[#132635]">
                    One click
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl shadow-[#132635]/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#6b7785]">
                      Quote snapshot
                    </p>
                    <p className="text-3xl font-semibold text-[#132635]">
                      $148.00
                    </p>
                    <p className="text-sm text-[#6b7785]">Estimated 3-4 days</p>
                  </div>
                  <div className="rounded-2xl bg-[#132635] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                    Ready
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-sm text-[#4a5a6a]">
                  <div className="flex items-center justify-between">
                    <span>Quality</span>
                    <span className="font-semibold text-[#132635]">
                      Standard
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Strength</span>
                    <span className="font-semibold text-[#132635]">
                      Functional
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Material</span>
                    <span className="font-semibold text-[#132635]">
                      Matte Polymer
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Quantity</span>
                    <span className="font-semibold text-[#132635]">6 pcs</span>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/70 bg-[#132635] p-6 text-white shadow-xl shadow-[#132635]/20">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#cfd8e3]">
                  Smart review
                </p>
                <p className="mt-3 text-lg font-semibold">
                  Complex or fragile parts get a quick human check.
                </p>
                <p className="mt-2 text-sm text-[#cfd8e3]">
                  We flag risky jobs automatically so you never waste time or
                  materials.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 pb-24">
        <section
          id="flow"
          className="grid gap-6 border-t border-white/40 pt-14 md:grid-cols-3"
        >
          {[
            {
              title: "Upload",
              detail:
                "Drop in your file, add a short note, and tell us if you are unsure.",
            },
            {
              title: "Preview + feedback",
              detail:
                "We show a live preview, dimensions, and plain-language status.",
            },
            {
              title: "Quote + decide",
              detail:
                "Adjust a few human-friendly options, see price instantly, then order or save.",
            },
          ].map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/70 bg-white/70 p-6 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#132635] text-sm font-semibold uppercase tracking-[0.2em] text-white">
                {step.title.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-[#132635]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[#4a5a6a]">{step.detail}</p>
            </div>
          ))}
        </section>

        <section id="quote" className="mt-16">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7785]">
                Core customer flow
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-[#0f1720]">
                Quote builder
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-[#4a5a6a]">
                This workflow keeps pricing clear, highlights issues early, and
                escalates complex jobs without blocking your customer.
              </p>
            </div>
            <div className="hidden rounded-full border border-[#d5dde5] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#4a5a6a] md:inline-flex">
              Self-serve when simple, human review when needed
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#132635]">
                    1. Upload
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7785]">
                    Step 1
                  </span>
                </div>
                <div className="mt-5 rounded-2xl border border-dashed border-[#c9d3dd] bg-[#f8fbff] p-8 text-center">
                  <p className="text-sm font-semibold text-[#132635]">
                    Drag and drop STL, OBJ, or 3MF
                  </p>
                  <p className="mt-2 text-xs text-[#6b7785]">
                    Max 250 MB per file
                  </p>
                  <button
                    className="mt-4 rounded-full border border-[#132635] px-4 py-2 text-xs font-semibold text-[#132635]"
                    type="button"
                  >
                    Choose file
                  </button>
                </div>
                <div className="mt-6 space-y-4">
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7785]">
                    Short description (optional)
                  </label>
                  <div className="rounded-2xl border border-[#d5dde5] bg-white px-4 py-3 text-sm text-[#4a5a6a]">
                    Example: Bracket for mounting a small sensor to a panel.
                  </div>
                  <label className="flex items-center gap-3 text-sm text-[#4a5a6a]">
                    <input
                      className="h-4 w-4 rounded border-[#c9d3dd]"
                      type="checkbox"
                    />
                    I am not sure what settings I need
                  </label>
                </div>
              </div>

              <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#132635]">
                    2. Preview + feedback
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7785]">
                    Step 2
                  </span>
                </div>
                <div className="mt-5 rounded-2xl border border-[#d5dde5] bg-gradient-to-br from-[#eef3f7] to-white p-6">
                  <div className="flex items-center justify-between text-xs text-[#6b7785]">
                    <span>Interactive preview</span>
                    <span>Rotate | Zoom | Measure</span>
                  </div>
                  <div className="mt-4 flex h-52 items-center justify-center rounded-2xl bg-white shadow-inner">
                    <svg
                      aria-hidden="true"
                      className="h-32 w-32 text-[#c9d3dd]"
                      viewBox="0 0 120 120"
                    >
                      <path
                        d="M25 40 L60 20 L95 40 L60 60 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M25 40 L25 80 L60 100 L60 60 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M95 40 L95 80 L60 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#d5dde5] bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#6b7785]">
                      Dimensions
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#132635]">
                      120 x 80 x 46 mm
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#d5dde5] bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#6b7785]">
                      Status
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#132635]">
                      Ready to print
                    </p>
                    <p className="mt-1 text-xs text-[#6b7785]">
                      Walls and supports look stable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#132635]">
                    3. Quote controls
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7785]">
                    Step 3
                  </span>
                </div>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7785]">
                      Quality
                    </p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      {qualityOptions.map((option) => (
                        <div
                          key={option.title}
                          className="rounded-2xl border border-[#d5dde5] bg-white p-4 text-left shadow-sm transition hover:border-[#132635]"
                        >
                          <p className="text-sm font-semibold text-[#132635]">
                            {option.title}
                          </p>
                          <p className="mt-1 text-xs text-[#6b7785]">
                            {option.detail}
                          </p>
                          <p className="mt-3 text-xs font-semibold text-[#c58b3a]">
                            {option.time}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7785]">
                      Strength
                    </p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      {strengthOptions.map((option) => (
                        <div
                          key={option.title}
                          className="rounded-2xl border border-[#d5dde5] bg-white p-4 text-left shadow-sm transition hover:border-[#132635]"
                        >
                          <p className="text-sm font-semibold text-[#132635]">
                            {option.title}
                          </p>
                          <p className="mt-1 text-xs text-[#6b7785]">
                            {option.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7785]">
                      Material
                    </p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      {materialOptions.map((option) => (
                        <div
                          key={option.title}
                          className="rounded-2xl border border-[#d5dde5] bg-white p-4 text-left shadow-sm transition hover:border-[#132635]"
                        >
                          <p className="text-sm font-semibold text-[#132635]">
                            {option.title}
                          </p>
                          <p className="mt-1 text-xs text-[#6b7785]">
                            {option.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7785]">
                        Quantity
                      </p>
                      <span className="text-xs font-semibold text-[#c58b3a]">
                        10% off at 10+
                      </span>
                    </div>
                    <div className="mt-3 rounded-2xl border border-[#d5dde5] bg-white p-4">
                      <input
                        className="w-full accent-[#132635]"
                        type="range"
                        min="1"
                        max="50"
                        defaultValue="6"
                      />
                      <div className="mt-3 flex items-center justify-between text-xs text-[#6b7785]">
                        <span>1</span>
                        <span>10</span>
                        <span>25</span>
                        <span>50</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/70 bg-[#132635] p-6 text-white shadow-xl shadow-[#132635]/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#cfd8e3]">
                      Total price
                    </p>
                    <p className="mt-2 text-3xl font-semibold">$148.00</p>
                    <p className="mt-1 text-sm text-[#cfd8e3]">
                      Estimated turnaround: 3-4 days
                    </p>
                  </div>
                  <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Live update
                  </div>
                </div>
                <div className="mt-5 rounded-2xl bg-white/10 p-4 text-sm text-[#e4ebf3]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#cfd8e3]">
                    What affects price
                  </p>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>Material volume and surface detail.</li>
                    <li>Quality level and finish time.</li>
                    <li>Quantity discounts applied instantly.</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl border border-[#d5dde5] bg-white/80 p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7785]">
                  5. Decision
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <button
                    className="rounded-2xl bg-[#c58b3a] px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                    type="button"
                  >
                    Order now
                  </button>
                  <button
                    className="rounded-2xl border border-[#c9d3dd] bg-white px-4 py-3 text-sm font-semibold text-[#132635] transition hover:border-[#132635]"
                    type="button"
                  >
                    Save quote
                  </button>
                  <button
                    className="rounded-2xl border border-[#c9d3dd] bg-white px-4 py-3 text-sm font-semibold text-[#132635] transition hover:border-[#132635]"
                    type="button"
                  >
                    Ask a question
                  </button>
                </div>
              </div>

              <div className="rounded-3xl border border-[#f0d9b4] bg-[#fff5e6] p-6 text-sm text-[#6b4b1f]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b4701d]">
                  Auto-escalation
                </p>
                <p className="mt-3 font-semibold text-[#6b4b1f]">
                  This looks like a custom job. We will review it and get back
                  to you.
                </p>
                <p className="mt-2 text-xs text-[#8a5c1d]">
                  Triggered by large dimensions, thin walls, or the "I am not
                  sure" selection.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="dashboard" className="mt-16">
          <div className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7785]">
                  Customer account
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#0f1720]">
                  Dashboard built for repeat orders
                </h2>
                <p className="mt-2 text-sm text-[#4a5a6a]">
                  Save quotes, track status, and reorder in seconds.
                </p>
              </div>
              <button
                className="rounded-full border border-[#132635] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#132635]"
                type="button"
              >
                View account
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {dashboardOrders.map((order) => (
                <div
                  key={order.name}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#d5dde5] bg-white px-5 py-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#132635]">
                      {order.name}
                    </p>
                    <p className="text-xs text-[#6b7785]">{order.status}</p>
                  </div>
                  <button
                    className="rounded-full bg-[#132635] px-4 py-2 text-xs font-semibold text-white"
                    type="button"
                  >
                    {order.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="admin" className="mt-16">
          <div className="rounded-3xl border border-white/70 bg-[#132635] p-8 text-white shadow-xl shadow-[#132635]/20">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#cfd8e3]">
                  Admin view
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Every job, all in one place
                </h2>
                <p className="mt-2 text-sm text-[#cfd8e3]">
                  See models, adjust pricing, and send revised quotes without
                  leaving the portal.
                </p>
              </div>
              <button
                className="rounded-full border border-white/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                type="button"
              >
                Open admin
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {adminJobs.map((job) => (
                <div
                  key={job.job}
                  className="rounded-2xl border border-white/20 bg-white/5 px-5 py-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold">{job.job}</p>
                      <p className="text-xs text-[#cfd8e3]">{job.note}</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#cfd8e3]">
                      {job.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/40 bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-xs text-[#6b7785]">
          <p>Trusted 3D manufacturing for product teams and small businesses.</p>
          <div className="flex items-center gap-6">
            <span>support@cunsolo3d.com</span>
            <span>New Jersey, USA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
