"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import CTASection from "./components/CTA";
import { blogs } from "../../../public/data/blogs";

const PER_PAGE = 6;

export default function Page() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return blogs;
    return blogs.filter((b) =>
      [b.title, b.category, b.excerpt].some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PER_PAGE;
  const current = filtered.slice(start, start + PER_PAGE);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[150px] py-12 text-white pt-40">
      {/* Heading + Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4 sm:gap-0">
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-medium tracking-tight">
          More From Blog
        </h2>

        <div className="relative w-full sm:w-[240px]">
          <input
            value={query}
            onChange={(e) => {
              setPage(1);
              setQuery(e.target.value);
            }}
            placeholder="Search"
            className="bg-transparent border border-white/20 rounded-md pl-10 pr-3 py-2 w-full text-sm focus:outline-none focus:border-white/40"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">🔍</span>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {current.map((b) => (
          <Link
            href={`/casestudies/${b.slug}`}
            key={b.slug}
            className="block border border-white/10 rounded-lg p-4 hover:border-white/20 transition-colors"
          >
            <div className="w-full h-48 rounded-md overflow-hidden mb-4 bg-white/5">
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-[12px] uppercase text-white/60 mb-2">
              {b.category} •{" "}
              {new Date(b.date).toLocaleDateString(undefined, {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </div>
            <div className="font-medium mb-2">{b.title}</div>
            <div className="text-white/60 text-sm">{b.excerpt}</div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-3 py-2 border border-white/15 rounded-md text-sm disabled:opacity-40"
          disabled={safePage === 1}
        >
          Prev
        </button>
        <span className="text-white/70 text-sm">
          Page {safePage} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="px-3 py-2 border border-white/15 rounded-md text-sm disabled:opacity-40"
          disabled={safePage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
