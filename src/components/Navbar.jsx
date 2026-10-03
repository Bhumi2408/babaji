"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const categories = [
  { name: "Edible Oils", slug: "edible-oils" },
  { name: "Flour & mixes", slug: "flour-mixes" },
  { name: "Pulses", slug: "pulses" },
  { name: "Detergent Bar", slug: "detergent" },
];

const links = [
  { label: "Home", href: "/" },
  { label: "Category", dropdown: true },
  { label: "Polysheets", href: "/polysheets" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Buy Now", href: "/products" },
  { label: "Blogs", href: "#" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : href !== "#" && pathname?.startsWith(href);
  const categoryActive = pathname?.startsWith("/category");

  const linkClass = (active) =>
    `relative px-3 py-2 text-[13px] xl:text-sm font-semibold tracking-wide rounded-full transition-colors ${
      active ? "bg-white/15 text-white" : "text-white/90 hover:text-white hover:bg-white/10"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-red-600 text-white transition-shadow ${
        scrolled ? "shadow-lg shadow-red-900/20" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between gap-6 transition-all duration-300 ${scrolled ? "h-18" : "h-20 lg:h-24"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.webp"
              alt="Babaji Udyog Logo"
              width={60}
              height={60}
              className={`object-contain transition-all duration-300 ${scrolled ? "w-12 h-12" : "w-12 h-12 lg:w-15 lg:h-15"}`}
            />
            <div className="flex flex-col leading-none">
              <span className="text-3xl lg:text-4xl font-extrabold tracking-tight">Babaji</span>
              <span className="text-xs lg:text-sm font-semibold tracking-[0.45em] pl-0.5 text-red-100">
                UDYOG
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) =>
              l.dropdown ? (
                <div key={l.label} className="relative group">
                  <button className={`${linkClass(categoryActive)} inline-flex items-center gap-1 uppercase`}>
                    {l.label}
                    <ChevronDown size={15} className="transition-transform group-hover:rotate-180" />
                  </button>

                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                    <div className="w-60 bg-white text-gray-800 rounded-2xl shadow-2xl ring-1 ring-black/5 p-2">
                      {categories.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/category/${c.slug}`}
                          className="group/item flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium hover:bg-red-50 hover:text-red-600 transition"
                        >
                          {c.name}
                          <ArrowRight size={14} className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={l.label} href={l.href} className={`${linkClass(isActive(l.href))} uppercase`}>
                  {l.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <Link
            href="/contact-us"
            className="hidden lg:inline-flex items-center gap-2 bg-white text-red-600 font-bold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-red-50 transition shrink-0"
          >
            ENQUIRE NOW
            <ArrowRight size={16} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 bg-red-700 ${
          mobileMenu ? "max-h-160" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {links.map((l) =>
            l.dropdown ? (
              <div key={l.label}>
                <button
                  onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold uppercase text-sm tracking-wide ${
                    categoryActive ? "bg-white/15" : "hover:bg-white/10"
                  }`}
                >
                  {l.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${mobileCategoryOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileCategoryOpen && (
                  <div className="mt-1 ml-4 pl-3 border-l-2 border-white/20 flex flex-col">
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/category/${c.slug}`}
                        className="px-3 py-2.5 rounded-lg text-sm text-red-50 hover:bg-white/10"
                        onClick={() => setMobileMenu(false)}
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setMobileMenu(false)}
                className={`px-4 py-3 rounded-xl font-semibold uppercase text-sm tracking-wide ${
                  isActive(l.href) ? "bg-white/15" : "hover:bg-white/10"
                }`}
              >
                {l.label}
              </Link>
            )
          )}

          <Link
            href="/contact-us"
            onClick={() => setMobileMenu(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 bg-white text-red-600 font-bold py-3 rounded-full"
          >
            ENQUIRE NOW <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
