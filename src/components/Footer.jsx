"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const socials = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
];

const columns = [
  {
    title: "Food Products",
    links: [
      { label: "Edible Oils", href: "/category/edible-oils" },
      { label: "Flour & Mixes", href: "/category/flour-mixes" },
      { label: "Pulses", href: "/category/pulses" },
      { label: "Detergent Bar", href: "/category/detergent" },
      { label: "All Products", href: "/products" },
    ],
  },
  {
    title: "Polysheets",
    links: [
      { label: "ESD PET Sheets", href: "/polysheets#products" },
      { label: "ESD HIPS Sheets", href: "/polysheets#products" },
      { label: "Sheets & Rolls", href: "/polysheets#products" },
      { label: "Thermoformed Trays", href: "/polysheets#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "Blogs", href: "/blog" },
    ],
  },
];

const contacts = [
  {
    icon: Phone,
    label: "Call us",
    lines: ["+91 83840 39200", "+91 80762 67027"],
  },
  {
    icon: Mail,
    label: "Email us",
    lines: ["babajigroupofficial@gmail.com", "nationalhead.bupl@gmail.com"],
  },
  {
    icon: MapPin,
    label: "Visit us",
    lines: ["Najafgarh, Delhi", "Sector 16, Bahadurgarh, Haryana"],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b0f1a] text-white">

      {/* Tricolour top accent */}
      <div className="flex h-1.5">
        <div className="flex-1 bg-red-600" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-emerald-600" />
      </div>

      {/* Background glow + pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-4 pt-14">
          {contacts.map((c) => (
            <div
              key={c.label}
              className="flex items-start gap-4 rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-5 hover:bg-white/[0.07] transition"
            >
              <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center shrink-0 shadow-lg shadow-red-900/40">
                <c.icon size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
                  {c.label}
                </p>
                {c.lines.map((l) => (
                  <p key={l} className="mt-1 font-medium text-gray-100 break-words">
                    {l}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 py-14 border-b border-white/10">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-5">
            <div className="flex items-center gap-4">
              <img
                src="/logo.webp"
                alt="Babaji Group"
                className="h-16 w-auto"
              />
              <div className="leading-none">
                <p className="text-3xl font-extrabold tracking-tight">Babaji</p>
                <p className="text-xs font-semibold tracking-[0.4em] text-red-500 mt-1">
                  GROUP
                </p>
              </div>
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              One Trust, One Tradition.
            </h3>

            <p className="mt-3 text-gray-400 leading-7 max-w-md">
              Since 1983, Babaji has delivered premium edible oils, atta,
              besan and pulses to households across India — and today,
              through Babaji Udyog Pvt. Ltd., PET &amp; HIPS polysheets for
              industry.
            </p>

            <div className="flex gap-3 mt-7">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full bg-white/5 ring-1 ring-white/15 flex items-center justify-center text-gray-300 hover:bg-red-600 hover:ring-red-600 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2 last:col-span-2 sm:last:col-span-1 lg:last:col-span-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                {col.title}
              </h4>
              <span className="block w-8 h-0.5 bg-red-600 mt-3 mb-6" />
              <ul className="space-y-3.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition"
                    >
                      <ArrowRight
                        size={14}
                        className="-ml-5 opacity-0 group-hover:ml-0 group-hover:opacity-100 text-red-500 transition-all duration-300"
                      />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Babaji Group. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/about-us" className="hover:text-white transition">
              About
            </Link>
            <Link href="/contact-us" className="hover:text-white transition">
              Contact
            </Link>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-1.5 text-white hover:text-red-500 transition"
            >
              Back to top <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
