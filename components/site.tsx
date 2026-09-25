"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "(Condo)",
    category: "Myra ",
    image: "/slide2.webp",
    span: "md:col-span-7",
    height: "h-[420px] md:h-[620px]",
  },
  {
    title: "(BTO 4-room)",
    category: "403B Lor 1 Toa Payoh",
    image: "/slide1.webp",
    span: "md:col-span-5",
    height: "h-[420px] md:h-[510px]",
  },
  {
    title: "(BTO 2-room)",
    category: "323A Tengah Drive",
    image: "/slide3.webp",
    span: "md:col-span-5",
    height: "h-[420px] md:h-[510px]",
  },
  {
    title: "(BTO 5-room)",
    category: "422B Northshore Drive",
    image: "/slide4.webp",
    span: "md:col-span-7",
    height: "h-[420px] md:h-[620px]",
  },
];

const faqs = [
  [
    "What services do you offer?",
    "We provide end-to-end interior design and execution services, including space optimization, design conceptualization, electrical and plumbing work, hacking and demolition, tiling, flooring, and complete project management.",
  ],
  [
    "What is space optimization and how does it help?",
    "Space optimization focuses on making the best use of available space to improve functionality, comfort, and aesthetics, especially in compact or challenging layouts.",
  ],
  [
    "Can you handle electrical and plumbing work?",
    "Yes, we have experienced professionals who manage all electrical and plumbing requirements as part of the project.",
  ],
  [
    "How does the design conceptualization process work?",
    "We begin by understanding your requirements, lifestyle, and preferences. Based on this, we create design concepts, layouts, and visualizations to help you envision the final outcome before execution.",
  ],
];

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3.5 12.5 12 4m0 0H5m7 0v7" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M8 2.5v10M4.5 9 8 12.5 11.5 9" />
    </svg>
  );
}

export default function Site() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<
    number | null
  >(0);

  const testimonials = [
    [
      "Marcus Tan",
      "“We engaged Alpha Design & Consultancy for BTO, and the experience was exceptional. We were worried about the hacking regulations and safety concerns. The team didn't just design a beautiful workspace; they handled the entire 'Consultancy' side with total transparency. They found space we didn't know we had and managed the electrical and plumbing works so precisely that we had zero downtime.”",
    ],
    [
      "Jasmine & Wei Lun",
      "“We were worried about our BTO renovation timeline, but the team’s Timely Execution was impressive. They handled all the HDB permits seamlessly and handed over the keys a week earlier than expected. The final result looks exactly like the 3D renders—true Quality Craftsmanship that we are proud to show off to our friends and family!”",
    ],
    [
      "Mrs. Tan",
      "“Renovating an old resale flat felt daunting until we met this team. They provided Exceptional Value by suggesting cost-effective ways to achieve the luxury look we wanted without blowing our budget. Their eye for Timeless Design turned our dark, cramped kitchen into a bright, functional space that we know will stay stylish for years.”",
    ],
    [
      "Sarah & David Lim",
      "“Our home renovation felt overwhelming until we met the Alpha team. They listened to how our family actually lives—not just how we wanted the house to look. During the hacking and tiling phases, we were constantly updated with photos and progress reports, which took away all the stress. It’s rare to find a firm that balances high-end design with such honest, down-to-earth project management. We finally feel like we have room to breathe.”",
    ],
  ];

  const [currentIndex, setCurrentIndex] =
    useState(0);

  // Auto slide effect (Every 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + 1) % testimonials.length,
      );
    }, 4000); // 4000ms = 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-black/8 bg-white/84 px-4 py-3 shadow-[0_12px_36px_rgba(12,13,15,.07)] backdrop-blur-xl sm:px-5">
          <a
            href="#home"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
            aria-label="Alpha Design home"
          >
            <Image
              src="/logo.png"
              alt="Alpha Design"
              className="h-10 w-auto sm:h-11"
              width={44} // Jo aapki max height/width ho us hisab se padding ya aspect ratio de kar
              height={44}
            />
          </a>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary navigation"
          >
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Services", "#services"],
              ["Projects", "#projects"],
              ["FAQs", "#faqs"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-semibold text-black/80 transition-colors duration-200 hover:text-black"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-2xl bg-white border border-black px-5 py-3 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 lg:inline-flex"
          >
            Start a project{" "}
            <span className="ml-2">
              <ArrowUpRight />
            </span>
          </a>

          <button
            type="button"
            onClick={() =>
              setMenuOpen((value) => !value)
            }
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-black lg:hidden"
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
          >
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-1 h-px w-4 bg-black transition-transform ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-2.5 h-px w-4 bg-black transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-4 h-px w-4 bg-black transition-transform ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        {menuOpen && (
          <div className="mx-auto mt-2 max-w-[1440px] overflow-hidden rounded-[28px] border border-black/8 bg-white p-3 shadow-[0_18px_50px_rgba(12,13,15,.1)] lg:hidden">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Services", "#services"],
              ["Projects", "#projects"],
              ["FAQs", "#faqs"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold hover:bg-[#f5f0e7]"
              >
                <span>{label}</span>
                <ArrowUpRight />
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-between rounded-2xl border border-black bg-white px-4 py-3.5 text-base font-bold text-white"
            >
              <span>Start a project</span>
              <ArrowUpRight />
            </a>
          </div>
        )}
      </header>

      <section
        id="home"
        className="relative isolate min-h-screen bg-white px-5 pb-10 pt-28 sm:px-8 sm:pb-12 lg:px-10 lg:pt-32 lg:pl-30"
      >
        <div className="absolute inset-0 -z-10 soft-grid opacity-40" />
        <div className="mx-auto grid max-w-[1440px] items-end gap-8 sm:gap-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-14">
          <div className="max-w-[760px] self-center py-8 sm:py-10 lg:py-20">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#0d78f2] shadow-[0_0_16px_rgba(13,120,242,.72)]" />
              <span className="eyebrow text-black/80">
                Interior architecture · Singapore
              </span>
            </div>

            <h1 className="font-display text-balance reveal reveal-delay-1 mt-7 max-w-4xl text-[clamp(2.75rem,11vw,3.2rem)] font-extrabold leading-[.92] sm:text-[clamp(3.2rem,7.3vw,7.3rem)] sm:leading-[.9]">
              Spaces that feel{" "}
              <span className="text-[#0d78f2]">
                inevitable.
              </span>
            </h1>

            <p className="font-copy reveal reveal-delay-2 mt-7 max-w-xl text-lg leading-8 text-black/84 sm:text-xl">
              Alpha Design creates warm,
              architectural homes with precise
              proportion, tactile materials and a
              calm visual rhythm that lasts.
            </p>

            <div className="reveal reveal-delay-3 mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center rounded-full bg-white border border-[#0d78f2] px-6 py-3.5 text-base font-bold text-[#0d78f2] transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                <span className="text-[#0d78f2]">
                  {" "}
                  Explore projects{" "}
                </span>
                <span className="ml-2 text-[#0d78f2]">
                  <ArrowUpRight />
                </span>
              </a>
              <a
                href="#about"
                className="inline-flex w-full items-center justify-center rounded-full border border-black/15 bg-white/55 px-6 py-3.5 text-base font-bold transition-colors hover:bg-white sm:w-auto"
              >
                Our approach{" "}
                <span className="ml-2">
                  <ArrowDown />
                </span>
              </a>
            </div>

            <div className="mt-10 hidden lg:flex flex-wrap items-center gap-x-6 gap-y-4 text-sm font-semibold text-black/80 sm:mt-11 sm:gap-x-8 sm:text-base">
              <span>Residential interiors</span>
              <span className="hidden h-1 w-1 rounded-full bg-black/25 sm:block" />
              <span>Full-home design</span>
              <span className="hidden h-1 w-1 rounded-full bg-black/25 sm:block" />
              <span>Detail-led planning</span>
            </div>
          </div>

          <div className="relative min-h-[600px] sm:min-h-[590px] lg:min-h-[760px]">
            <div className="absolute right-0 top-0 h-[62%] w-[92%] overflow-hidden rounded-[28px] shadow-[0_36px_100px_rgba(12,13,15,.13)] sm:h-[72%] sm:w-[78%] sm:rounded-[36px]">
              <Image
                src="/banner.webp"
                fill
                alt="Refined contemporary living room"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="floaty absolute bottom-9 lg:bottom-0 left-0 w-[58%] overflow-hidden rounded-[24px] border-[7px] border-[#f8f6f3] shadow-[0_24px_70px_rgba(12,13,15,.17)] sm:w-[47%] sm:rounded-[30px] sm:border-[10px]">
              <Image
                src="/banner2.webp"
                width={190}
                height={190}
                alt="Minimal dining interior"
                className="aspect-[.8] h-auto w-full object-cover"
              />
            </div>
            <div className="glow-blue absolute -bottom-3 lg:flex lg:flex-col hidden right-0 max-w-[235px] rounded-[22px] border border-white/15 bg-black px-4 py-4 text-white sm:bottom-9 sm:right-0 sm:max-w-[280px] sm:rounded-[26px] sm:px-5 sm:py-5 lg:right-4">
              <div className="eyebrow text-white/50">
                Alpha principle
              </div>
              <p className="mt-2 text-lg font-bold leading-7">
                Good interiors whisper before they
                speak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Brand statement"
        className="overflow-hidden border-y border-black/8 bg-white px-5 py-5 sm:px-8"
      >
        <div className="marquee flex w-max items-center gap-7 text-sm font-bold uppercase tracking-[.16em] text-black/70 sm:gap-10 sm:tracking-[.22em] sm:text-base">
          {Array.from({ length: 2 }).flatMap(
            (_, group) =>
              [
                "Material honesty",
                "Quiet confidence",
                "Human scale",
                "Architectural clarity",
                "Alpha Design",
              ].map((item, i) => (
                <span
                  key={`${group}-${i}`}
                  className="inline-flex items-center gap-10"
                >
                  {item}
                  <span className="h-2 w-2 rounded-full bg-[#0d78f2]" />
                </span>
              )),
          )}
        </div>
      </section>

      <section
        id="about"
        className="bg-white px-5 py-20 sm:px-8 sm:py-32 lg:px-10 lg:pl-30"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 sm:gap-16 lg:grid-cols-[.83fr_1.17fr] lg:gap-24">
          {/* LEFT COLUMN: Width fixes removed, added top-24 for better top-spacing on scroll */}
          <div className="lg:sticky lg:top-24 h-fit w-full">
            <div className="eyebrow text-black/70">
              01 · About Alpha
            </div>
            <h2 className="font-display mt-6 max-w-xl text-balance text-4xl font-extrabold leading-[1.02] sm:text-6xl">
              Where imagination meets reality.
            </h2>
          </div>

          {/* RIGHT COLUMN: Content strictly untouched */}
          <div className="max-w-3xl">
            <p className="text-balance lg:flex hidden text-[1.375rem] font-bold leading-8 sm:text-3xl sm:leading-[1.32]">
              Every room starts with a simple
              question: what should it feel like
              to live here?
            </p>
            <p className="lg:mt-7 mt-0 max-w-2xl text-lg leading-8 text-black/83 sm:text-xl">
              We are a collective of visual
              architects and strategic thinkers.
              At Alpha Design, we don’t just
              follow trends; we set the pace.
              Founded on the principle that great
              design is the bridge between a
              vision and its audience, we
              specialize in creating bold,
              functional aesthetics that demand
              attention.{" "}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                [
                  "01",
                  "600+ Projects Done",
                  "A legacy built on trust, innovation, and flawless execution.",
                ],
                [
                  "02",
                  "2M+ Projects Value",
                  "Worth of architectural innovation and spatial excellence.",
                ],
                [
                  "03",
                  "22 Years Of Experience",
                  "A foundation built on time-tested expertise and innovation.",
                ],
              ].map(([num, title, text]) => (
                <div
                  key={num}
                  className="rounded-3xl border border-black/9 bg-[#f5f5f7] p-6"
                >
                  <div className="eyebrow text-black/70">
                    {num}
                  </div>
                  <h3 className="mt-4 text-xl font-extrabold">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-black/80">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-[#f5f5f7] px-5 py-20 sm:px-8 sm:py-32 lg:px-10 lg:pl-30"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="eyebrow text-black/70">
                02 · Services
              </div>
              <h2 className="font-display mt-6 text-balance text-4xl font-extrabold leading-[1.02] sm:text-6xl">
                A complete design language, not
                just a pretty room.
              </h2>
            </div>
            <p className="max-w-lg text-lg leading-8 text-black/80">
              Choose a focused room refresh or let
              Alpha Design shape the whole home
              into one coherent experience.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Timely Execution",
                "We respect your time and investment, delivering on schedule with clear communication and uncompromised quality.",
                "01",
              ],
              [
                "02",
                "Timeless Design",
                "Trends fade, but true style endures through timeless design that keeps your home elegant for decades.",
                "02",
              ],
              [
                "03",
                "Quality",
                "Excellence lives in details, where master craftsmanship and premium materials create homes both strong and stunning.",
                "03",
              ],
              [
                "04",
                "Exception Value",
                "Luxury should be accessible through clear pricing and smart design, delivering finishes without inflated markups.",
                "04",
              ],
            ].map(([num, title, text, key]) => (
              <div
                key={key}
                className="group min-h-[280px] rounded-[28px] border border-black/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 sm:min-h-[320px] sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="eyebrow text-black/70">
                    {num}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-[#f5f5f7] text-sm font-bold transition-colors duration-300 group-hover:border-[#0d78f2]/25 group-hover:text-[#0d78f2]">
                    ↗
                  </span>
                </div>
                <div className="mt-14 sm:mt-20">
                  <h3 className="text-2xl font-extrabold leading-tight">
                    {title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-black/80">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
            <div className="relative overflow-hidden rounded-[28px] bg-black px-7 py-8 text-white sm:px-9 sm:py-10">
              <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#0d78f2]/30 blur-3xl" />
              <div className="eyebrow relative text-[#f5f5f7]">
                Design note
              </div>
              <p className="relative mt-5 max-w-3xl text-2xl font-bold leading-8 sm:text-3xl sm:leading-10">
                “Luxury is not more stuff. It is
                better decisions, made in the
                right order.”
              </p>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-white  lg:flex-col hidden lg:flex p-7 sm:p-9">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-black/10 bg-[#f5f5f7] text-xl font-black">
                $
              </div>
              <h3 className="mt-7 text-2xl font-extrabold">
                Design that respects the
                investment.
              </h3>
              <p className="mt-3 text-base leading-7 text-black/80">
                We plan for longevity — choosing
                proportion, materials and pieces
                that continue to make sense as
                your home evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="bg-white px-5 py-20 sm:px-8 sm:py-32 lg:px-10 lg:pl-30"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="eyebrow text-black/70">
                03 · Selected projects
              </div>
              <h2 className="font-display mt-6 text-balance text-4xl font-extrabold leading-[1.02] sm:text-6xl">
                Spaces, without the noise.
              </h2>
            </div>
            <p className="max-w-lg text-lg leading-8 text-black/80">
              Explore our recently completed
              spaces where functionality meets
              luxury. Each project represents our
              dedication to timeless design and
              flawless execution.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-12">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`${project.span} group`}
              >
                <div
                  className={`image-card ${project.height}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-7">
                    <div className="eyebrow text-white/80  ">
                      {project.category}
                    </div>
                    <div className="mt-2 flex items-end justify-between gap-4">
                      <h3 className="text-2xl font-extrabold sm:text-3xl">
                        {project.title}
                      </h3>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-black">
                        <ArrowUpRight />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="bg-black px-5 py-20 text-white sm:px-8 sm:py-32 lg:px-10 lg:pl-30">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <div className="eyebrow text-white/45">
              04 · The Alpha standard
            </div>
            <h2 className="font-display mt-6 text-balance text-4xl font-extrabold leading-[1.02] sm:text-6xl">
              The room should still look good when
              the camera is off.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [
                "01",
                "Calm",
                "Less visual friction. More space to breathe.",
              ],
              [
                "02",
                "Considered",
                "Every finish earns its place in the story.",
              ],
              [
                "03",
                "Lasting",
                "A point of view built to age gracefully.",
              ],
            ].map(([num, title, text]) => (
              <div
                key={num}
                className="rounded-[26px] border border-white/10 bg-white/5 p-6"
              >
                <div className="eyebrow text-white/35">
                  {num}
                </div>
                <h3 className="mt-14 text-xl font-extrabold">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="bg-[#f5f5f7] px-5 py-20 sm:px-8 sm:py-32 lg:px-10 lg:pl-30">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow text-black/70">
              05 · Testimonials
            </div>

            <h2 className="font-display mt-6 text-balance text-4xl font-extrabold leading-[1.04] sm:text-6xl">
              “It finally feels like us.”
            </h2>
          </div>

          <div className="mt-10 w-full sm:mt-12">
            <div className="mx-auto w-full max-w-6xl">
              <div className="relative grid w-full">
                {testimonials.map(
                  ([name, quote], index) => (
                    <figure
                      key={name}
                      className={`col-start-1 row-start-1 w-full rounded-[28px] border border-black/9 bg-white text-center transition-all duration-500 ease-in-out
                ${
                  index === currentIndex
                    ? "relative z-10 opacity-100"
                    : "pointer-events-none invisible absolute inset-0 z-0 opacity-0"
                }
                p-6 sm:p-8
              `}
                    >
                      <div className="text-xl tracking-[.25em] text-[#0d78f2]">
                        ★★★★★
                      </div>

                      <blockquote className="mx-auto mt-6 max-w-4xl text-lg font-semibold leading-8 sm:mt-7 sm:text-xl sm:leading-9">
                        {quote}
                      </blockquote>

                      <figcaption className="mt-7 text-base font-bold sm:mt-8">
                        {name}
                      </figcaption>

                      <div className="mt-1 text-sm font-semibold text-black/70">
                        Residential client
                      </div>
                    </figure>
                  ),
                )}
              </div>

              <div className="mt-6 flex justify-center gap-2 sm:mt-7">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show testimonial ${index + 1}`}
                    onClick={() =>
                      setCurrentIndex(index)
                    }
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-6 bg-[#0d78f2]"
                        : "w-2 bg-black/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        id="faqs"
        className="bg-white px-5 py-20 sm:px-8 sm:py-32 lg:px-10 lg:pl-30 hidden lg:block"
      >
        <div className="mx-auto grid max-w-[1440px] gap-10 sm:gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <div>
            <div className="eyebrow text-black/70">
              06 · FAQs
            </div>
            <h2 className="font-display mt-6 text-balance text-4xl font-extrabold leading-[1.02] sm:text-6xl">
              Before we begin.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-black/80">
              A few answers for homeowners who
              want a clear process, thoughtful
              design and zero unnecessary drama.
            </p>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {faqs.map(
              ([question, answer], index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={question}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(
                          isOpen ? null : index,
                        )
                      }
                      className="flex w-full items-start justify-between gap-4 py-5 text-left sm:gap-5 sm:py-6"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-3 text-lg font-extrabold leading-7 sm:pr-4 sm:text-xl">
                        {question}
                      </span>
                      <span
                        className={`mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <ArrowDown />
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-7 pr-10 text-lg leading-8 text-black/80">
                          {answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </section> */}

      <section
        id="contact"
        className="bg-[#f5f5f7] px-5 pb-6 pt-6 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[34px] bg-black px-7 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div>
              <div className="eyebrow text-white/40">
                Ready when you are
              </div>
              <h2 className="font-display mt-6 max-w-4xl text-balance text-5xl font-extrabold leading-[.98] sm:text-7xl">
                Small Footprint.{" "}
                <span className="text-[#55a5ff]">
                  Grand Vision.
                </span>
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-sm text-lg leading-8 text-white/65">
                Don’t let square footage limit
                your lifestyle. We turn compact
                spaces into expansive sanctuaries
              </p>
              <a
                href="mailto:hello@alphadesign.studio"
                className="mt-6 inline-flex items-center rounded-full border border-[#0d78f2] px-6 py-3.5 text-base font-bold text-[#0d78f2] transition-transform hover:-translate-y-0.5"
              >
                <span className="text-[#0d78f2] hello">
                  help@alphadesign.sg{" "}
                </span>
                <span className="ml-2 text-[#0d78f2]">
                  <ArrowUpRight />
                </span>
              </a>
            </div>
          </div>
        </div>

        <footer className="mx-auto flex max-w-[1440px] flex-col gap-7 px-2 pb-4 pt-8 sm:px-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Image
              src="/logo.png"
              alt="Alpha Design"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-md text-base font-semibold leading-7 text-black/80">
              Specialized in{" "}
              <span className="text-[#0d78f2]">
                sustainable residential
              </span>{" "}
              and
              <span className="text-[#0d78f2]">
                commercial architecture
              </span>
            </p>
          </div>
          <div className="text-sm font-semibold text-black/80 text-center gap-3 space-y-3">
            <p>
              © 2026 Alpha Design. All rights
              reserved.
            </p>
            <p>
              Privacy Policy . Terms of Services
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}
