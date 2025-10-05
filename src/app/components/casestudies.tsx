"use client";

import Image from "next/image";
import Link from "next/link";
import { blogs } from "../../../public/data/blogs";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

export default function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Properly typed variants
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
    id="case-studies"
      className="flex flex-col items-center justify-center px-6 md:px-20 py-12 gap-12 bg-black"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.div
        className="max-w-[934px] mx-auto text-center flex flex-col items-center gap-4"
        variants={cardVariants}
      >
        <h2 className="text-white font-inter font-normal text-[48px] leading-[52px] tracking-[-1px]">
          Proven Results. Real Impact.
        </h2>
        <p className="text-white/70 font-poppins font-light text-[18.4748px] leading-[150%] text-center max-w-[578.26px]">
          Discover how we have helped businesses across industries automate their
          operations, improve efficiency, and drive growth through innovative AI
          solutions.
        </p>
      </motion.div>

      {/* ---------- DESKTOP: Centered cards (top 3 from blogs) ---------- */}
      <motion.div
        className="hidden lg:flex justify-center gap-6 w-full"
        variants={containerVariants}
      >
        {blogs.slice(0, 3).map((item) => (
          <motion.div
            key={item.slug}
            className="flex flex-col items-start gap-4 w-[364px]"
            variants={cardVariants}
          >
            <Link href={`/casestudies/${item.slug}`} className="block w-full">
              <div className="relative w-full h-[190px] rounded-[8px] overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
            </Link>

            <div className="flex flex-col items-start gap-2 w-full">
              <Link href={`/casestudies/${item.slug}`} className="hover:underline">
                <h3 className="font-poppins text-[18px] font-normal text-white">{item.title}</h3>
              </Link>
              <p className="font-roboto text-[16px] text-white/60">{item.excerpt}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ---------- TABLET: Horizontal scroll with arrows (top 3 from blogs) ---------- */}
      <div className="hidden md:flex lg:hidden relative items-center w-full">
        <button
          className="absolute left-0 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
          onClick={scrollLeft}
        >
          <FiChevronLeft className="text-white w-6 h-6" />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth py-2"
        >
          {blogs.slice(0, 3).map((item) => (
            <motion.div
              key={item.slug}
              className="flex-shrink-0 w-[300px] flex flex-col gap-4"
              variants={cardVariants}
            >
              <Link href={`/casestudies/${item.slug}`} className="block w-full">
                <div className="relative w-full h-[190px] rounded-[8px] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              </Link>

              <div className="flex flex-col items-start gap-2">
                <Link href={`/casestudies/${item.slug}`} className="hover:underline">
                  <h3 className="font-poppins text-[18px] font-normal text-white">{item.title}</h3>
                </Link>
                <p className="font-roboto text-[16px] text-white/60">{item.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          className="absolute right-0 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
          onClick={scrollRight}
        >
          <FiChevronRight className="text-white w-6 h-6" />
        </button>
      </div>

      {/* ---------- MOBILE: Horizontal scroll without arrows (top 3 from blogs) ---------- */}
      <div className="md:hidden relative w-full">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory px-4 py-2 scrollbar-hide"
        >
          {blogs.slice(0, 3).map((item) => (
            <motion.div
              key={item.slug}
              className="flex-shrink-0 w-[90vw] snap-start flex flex-col gap-4"
              variants={cardVariants}
            >
              <Link href={`/casestudies/${item.slug}`} className="block w-full">
                <div className="relative w-full h-[160px] rounded-[8px] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              </Link>

              <div className="flex flex-col items-start gap-2">
                <Link href={`/casestudies/${item.slug}`} className="hover:underline">
                  <h3 className="font-poppins text-[16px] font-normal text-white">{item.title}</h3>
                </Link>
                <p className="font-roboto text-[14px] text-white/60">{item.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learn more */}
      <motion.a
        href="/casestudies"
        className="relative flex items-center gap-2 w-[117.61px] h-[26px] text-white font-poppins font-medium text-[16px] leading-[26px] hover:underline"
        variants={cardVariants}
      >
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-[12px] h-[12px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.a>
    </motion.section>
  );
}
