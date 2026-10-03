import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Car,
  Check,
  CircuitBoard,
  Cpu,
  Eye,
  Factory,
  Gauge,
  Gem,
  HardDrive,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Microchip,
  Phone,
  Recycle,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Truck,
  Zap,
  Dumbbell,
  Palette,
  Sparkles,
  Globe,
  TrendingUp,
  Handshake,
  Settings2,
  FlaskConical,
} from "lucide-react";

import TestimonialsSection from "@/components/TestimonialSection";

export const metadata = {
  title: "Polysheets | PET & HIPS Sheets Manufacturer — Babaji Udyog Pvt. Ltd.",
  description:
    "Babaji Udyog Pvt. Ltd. manufactures ESD PET and ESD HIPS sheets, rolls and thermoformed trays for electronics, semiconductor, automotive, medical and industrial packaging.",
};

const CONTACT = {
  phone: "8076267027",
  email: "nationalhead.bupl@gmail.com",
  address: "Plot No. 88C, Sector 16, Bahadurgarh, Haryana - 124507",
};

const highlights = [
  { icon: Factory, color: "bg-red-600", value: "600+", unit: "MT", label: "Monthly production capacity" },
  { icon: ShieldCheck, color: "bg-emerald-600", value: "3", unit: "Grades", label: "Conductive · Dissipative · Anti-static" },
  { icon: Gauge, color: "bg-sky-500", value: "10³–10¹²", unit: "Ω/sq", label: "Surface resistance range" },
  { icon: Palette, color: "bg-amber-500", value: "3", unit: "Colours", label: "Clear · White · Black" },
];

const products = [
  {
    img: "/polysheets/pet-sheets.png",
    tag: "PET",
    title: "ESD PET Sheets",
    desc: "Static-safe PET sheets with high clarity and a premium finish for transparent, inspect-without-opening packaging.",
    specs: ["Clear", "White", "Black"],
  },
  {
    img: "/polysheets/hips-sheets.png",
    tag: "HIPS",
    title: "ESD HIPS Sheets",
    desc: "Rigid, impact-resistant HIPS sheets that dissipate static efficiently — the cost-effective choice for durable trays.",
    specs: ["White", "Black", "Custom grades"],
  },
  {
    img: "/polysheets/pet-hips-sheets.png",
    tag: "PET + HIPS",
    title: "PET & HIPS Sheets (Non-ESD)",
    desc: "General-purpose sheets from dedicated lines for food, pharma, cosmetics, appliance and industrial packaging.",
    specs: ["Clear", "White", "Black"],
  },
  {
    img: "/polysheets/sheets-rolls.png",
    tag: "PET + HIPS",
    title: "Sheets & Rolls",
    desc: "Supplied as cut sheets or continuous rolls to suit your thermoforming line and production volumes.",
    specs: ["Various thickness", "Custom widths"],
  },
  {
    img: "/polysheets/thermoforming.png",
    tag: "Thermoforming",
    title: "ESD Thermoformed Trays",
    desc: "Precision trays and custom packaging formed from our own ESD PET and ESD HIPS sheets.",
    specs: ["Clear trays", "Black trays", "Custom designs"],
  },
  {
    img: "/polysheets/pcb-tray.png",
    tag: "HIPS",
    title: "PCB & Component Trays",
    desc: "Safe handling, storage and transport of PCB assemblies, modules and sensitive electronic parts.",
    specs: ["Handling", "Storage", "Transport"],
  },
];

const materials = [
  {
    key: "pet",
    name: "PET",
    full: "Polyethylene Terephthalate",
    tagline: ["Clarity", "Strength", "Versatility"],
    img: "/polysheets/pet-tray-pcb.png",
    desc: "PET sheets are preferred where clarity, product visibility, a premium finish and smooth thermoforming matter. They create transparent or semi-transparent ESD-safe packaging where the packed component can be inspected without opening the tray or cover.",
    properties: [
      "High clarity and excellent surface finish",
      "Good mechanical strength, dimensionally stable",
      "Excellent thermoforming capability",
      "Good chemical resistance",
      "Lightweight and recyclable",
      "Stable surface resistance during vacuum forming (ESD grade)",
    ],
    colours: ["clear", "white", "black"],
    uses: [
      "Transparent ESD trays",
      "PCB packaging",
      "Component visibility trays",
      "Protective covers",
      "Precision thermoformed packaging",
      "Food & pharma packaging (non-ESD)",
    ],
    accent: {
      ring: "ring-blue-100",
      chip: "bg-blue-50 text-blue-900 border-blue-100",
      heading: "text-blue-900",
      icon: "bg-blue-900",
      grad: "from-blue-50 via-white to-white",
      bar: "bg-blue-900",
    },
  },
  {
    key: "hips",
    name: "HIPS",
    full: "High Impact Polystyrene",
    tagline: ["Strength", "Impact Resistance", "Cost Effective"],
    img: "/polysheets/hips-tray.png",
    desc: "HIPS sheets are preferred where strength, rigidity, impact resistance and strong tray performance are important. They are the go-to material for black ESD trays and industrial component handling trays.",
    properties: [
      "High impact strength and rigidity",
      "Good dimensional stability",
      "Easy to thermoform into custom trays",
      "Smooth surface finish",
      "Cost-effective, reliable solution",
      "Efficient static dissipation (ESD grade)",
    ],
    colours: ["white", "black"],
    uses: [
      "Black ESD trays",
      "PCB trays",
      "Electronic component trays",
      "Industrial handling trays",
      "Assembly-line trays",
      "Appliance & consumer goods packaging",
    ],
    accent: {
      ring: "ring-red-100",
      chip: "bg-red-50 text-red-700 border-red-100",
      heading: "text-red-600",
      icon: "bg-red-600",
      grad: "from-red-50 via-white to-white",
      bar: "bg-red-600",
    },
  },
];

const swatches = {
  clear: {
    label: "Clear",
    sub: "Transparent",
    className:
      "bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(191,219,254,0.55)_45%,rgba(255,255,255,0.9))] border border-blue-200",
  },
  white: {
    label: "White",
    sub: "Opaque",
    className: "bg-white border border-gray-200",
  },
  black: {
    label: "Black",
    sub: "Opaque",
    className: "bg-[linear-gradient(135deg,#3a3a3a,#0a0a0a)] border border-black",
  },
};

const esdGrades = [
  {
    name: "Conductive",
    range: ["3", "5"],
    span: 2,
    color: "bg-blue-900",
    text: "text-blue-900",
    use: "Highest level of charge drain for the most sensitive semiconductor and IC handling.",
  },
  {
    name: "Static Dissipative",
    range: ["5", "9"],
    span: 4,
    color: "bg-emerald-600",
    text: "text-emerald-700",
    use: "Controlled, gradual discharge — ideal for PCB, EMS and component trays.",
  },
  {
    name: "Anti-Static",
    range: ["9", "12"],
    span: 3,
    color: "bg-red-600",
    text: "text-red-600",
    use: "Prevents charge build-up for general electronics packaging and covers.",
  },
];

const specRows = [
  ["Material", "Polyethylene Terephthalate", "High Impact Polystyrene"],
  ["Forms available", "Sheets & Rolls", "Sheets & Rolls"],
  ["Colours", "Clear · White · Black", "White · Black"],
  ["ESD grades", "Conductive · Dissipative · Anti-static", "Conductive · Dissipative · Anti-static"],
  ["Surface resistance", "10³ – 10¹² Ω/sq", "10³ – 10¹² Ω/sq"],
  ["Transparency", "Transparent (Clear grade)", "Opaque"],
  ["Best known for", "Clarity & premium finish", "Strength & impact resistance"],
  ["Thermoforming", "Excellent, smooth forming", "Easy forming into custom trays"],
  ["Thickness & size", "Custom, on request", "Custom, on request"],
];

const industryCards = [
  { img: "/polysheets/ind-food.png", name: "Food & Beverage Packaging", tag: "PET" },
  { img: "/polysheets/ind-pharma.png", name: "Pharmaceutical Packaging", tag: "PET" },
  { img: "/polysheets/ind-consumer.png", name: "Consumer Electronics", tag: "PET" },
  { img: "/polysheets/ind-cosmetics.png", name: "Cosmetics Packaging", tag: "PET" },
  { img: "/polysheets/ind-general.png", name: "General Industrial", tag: "PET" },
  { img: "/polysheets/ind-electronics.png", name: "Electronics & Components", tag: "HIPS" },
  { img: "/polysheets/ind-appliances.png", name: "Appliances & Consumer Goods", tag: "HIPS" },
  { img: "/polysheets/ind-automotive.png", name: "Automotive Components", tag: "HIPS" },
  { img: "/polysheets/ind-medical.png", name: "Medical Devices Packaging", tag: "HIPS" },
  { img: "/polysheets/ind-tray.png", name: "Industrial & Protective Trays", tag: "HIPS" },
];

const esdSectors = [
  {
    icon: Cpu,
    name: "Electronics Manufacturing",
    items: "PCB trays, connector trays, sensor trays, electronic module trays",
  },
  {
    icon: CircuitBoard,
    name: "PCB & EMS Industry",
    items: "PCB storage trays, assembly-line trays, component handling and testing trays",
  },
  {
    icon: Microchip,
    name: "Semiconductor & IC Packaging",
    items: "IC trays, chip handling trays, component carriers, precision inserts",
  },
  {
    icon: Car,
    name: "EV & Automotive Electronics",
    items: "BMS trays, EV component trays, automotive sensor and module packaging",
  },
  {
    icon: Smartphone,
    name: "Mobile & Consumer Electronics",
    items: "Mobile component, charger module, speaker part and display part trays",
  },
  {
    icon: Lightbulb,
    name: "LED & Lighting Components",
    items: "LED PCB trays, driver packaging trays, component sorting trays",
  },
  {
    icon: Bot,
    name: "Industrial Automation",
    items: "Control board trays, robotic component trays, automation module trays",
  },
  {
    icon: Stethoscope,
    name: "Medical Electronics",
    items: "Medical PCB trays, sensor trays, diagnostic electronic component trays",
  },
  {
    icon: HardDrive,
    name: "Hard Disk Manufacturing",
    items: "Packaging, turnover and storage of hard disk heads and precision parts",
  },
];

const advantages = [
  { icon: ShieldCheck, label: "Controlled surface resistance" },
  { icon: Gem, label: "High clarity & surface finish" },
  { icon: Layers, label: "Excellent thermoforming" },
  { icon: Dumbbell, label: "Strong, durable & reliable" },
  { icon: Recycle, label: "Recyclable options" },
  { icon: Gauge, label: "Consistent quality" },
  { icon: Truck, label: "Assured supply" },
];

const manufacturing = [
  {
    img: "/polysheets/mfg-extrusion.png",
    icon: Settings2,
    title: "Modern Extrusion Lines",
    desc: "Dedicated sheet extrusion for ESD PET and ESD HIPS with tight thickness control.",
  },
  {
    img: "/polysheets/mfg-qa.png",
    icon: FlaskConical,
    title: "Quality Assurance",
    desc: "Every lot is surface-resistance tested and verified before dispatch.",
  },
];

const roadmap = [
  { icon: TrendingUp, title: "Capacity Expansion", desc: "From 400+ MT to higher capacities" },
  { icon: Sparkles, title: "Advanced Grades", desc: "New ESD, specialty & sustainable materials" },
  { icon: Globe, title: "Pan-India & Global", desc: "Serving more customers across India and exports" },
  { icon: Settings2, title: "Technology Upgradation", desc: "Smarter, more efficient manufacturing" },
  { icon: Recycle, title: "Sustainability Focus", desc: "Recyclable & eco-friendly material solutions" },
  { icon: Handshake, title: "Trusted Partner", desc: "Long-term growth with customers and industries" },
];

// Placeholder testimonials — replace with real client feedback before going live.
const testimonials = [
  {
    name: "Thermoforming Partner",
    location: "Manesar, Haryana",
    review:
      "The ESD HIPS sheets form cleanly with very little rejection. Surface resistance stays stable after forming, which matters most for our black trays.",
  },
  {
    name: "EMS Unit",
    location: "Noida, Uttar Pradesh",
    review:
      "We switched to Babaji ESD PET for our transparent PCB trays. Clarity is excellent and our QC team can inspect boards without opening the packs.",
  },
  {
    name: "Packaging Converter",
    location: "Bhiwadi, Rajasthan",
    review:
      "Consistent thickness roll after roll, and supply has always been on time. Bulk orders are handled professionally.",
  },
  {
    name: "Automotive Electronics Supplier",
    location: "Gurugram, Haryana",
    review:
      "Strong, rigid HIPS trays for our sensor modules and a good price point. The team helped us choose the right ESD grade.",
  },
  {
    name: "Pharma Packaging Buyer",
    location: "Baddi, Himachal Pradesh",
    review:
      "Their non-ESD PET sheets give us the clarity and finish we need for blister and tray packaging. Reliable quality every batch.",
  },
];

function SectionHeading({ eyebrow, title, desc, center = false, light = false }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      <span
        className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] ${
          light ? "text-red-300" : "text-red-600"
        }`}
      >
        <span className="w-8 h-0.5 bg-current" />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-3xl md:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-5 text-base md:text-lg leading-8 ${light ? "text-blue-100/80" : "text-gray-600"}`}>
          {desc}
        </p>
      )}
    </div>
  );
}

function Swatch({ type }) {
  const s = swatches[type];
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-20 h-14 md:w-24 md:h-16 rounded-xl shadow-md ${s.className}`} />
      <div className="text-center leading-tight">
        <p className="font-semibold text-gray-900 text-sm">{s.label}</p>
        <p className="text-xs text-gray-500">{s.sub}</p>
      </div>
    </div>
  );
}

export default function PolysheetsPage() {
  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="w-full bg-blue-950">
        <picture>
          <source media="(min-width: 768px)" srcSet="/polysheets/desktop-banner-image.png" />
          <img
            src="/polysheets/mobile-banner-image.png"
            alt="Babaji Udyog Pvt. Ltd. — PET & HIPS Polysheets"
            className="block w-full h-auto"
          />
        </picture>
      </section>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-blue-950 text-white">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full bg-red-600/25 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-16 md:pt-24 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                <Zap size={16} className="text-amber-300" />
                Babaji Udyog Pvt. Ltd. · Polysheets
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
                <span className="text-sky-300">PET</span> &amp;{" "}
                <span className="text-red-500">HIPS</span> Sheets
                <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90">
                  Engineered for Protection. Built for Performance.
                </span>
              </h1>

              <p className="mt-6 text-lg text-blue-100/80 leading-8 max-w-xl">
                High-performance ESD and general-purpose PET &amp; HIPS sheets
                for electronics packaging, thermoforming and industrial
                applications — manufactured in Bahadurgarh, Haryana.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Sheets", "Rolls", "Thermoforming Solutions", "ESD & Non-ESD"].map((c) => (
                  <span
                    key={c}
                    className="px-4 py-1.5 rounded-full border border-white/20 text-sm text-white/90"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:+91${CONTACT.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-red-900/40 transition"
                >
                  <Phone size={18} />
                  Get a Quote
                </a>
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 ring-1 ring-white/25 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Explore Products
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[28px] bg-white p-3 shadow-2xl shadow-black/40">
                <img
                  src="/polysheets/hero-rolls.jpg"
                  alt="ESD PET clear roll and ESD HIPS black roll with a thermoformed PCB tray"
                  className="w-full rounded-[20px] object-cover"
                />
              </div>

              <div className="absolute -bottom-8 left-4 sm:-left-6 bg-white text-gray-900 rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Surface resistance</p>
                  <p className="font-bold">10³ – 10¹² Ω/sq</p>
                </div>
              </div>

              <div className="hidden sm:flex absolute -top-6 -right-4 bg-white text-gray-900 rounded-2xl shadow-xl px-5 py-4 items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-red-600 text-white flex items-center justify-center">
                  <Factory size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Capacity</p>
                  <p className="font-bold">600+ MT / month</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-20 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden bg-white/10 ring-1 ring-white/15 backdrop-blur">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="group bg-blue-950/60 hover:bg-white/6 transition p-5 md:p-7 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${h.color} flex items-center justify-center shrink-0 shadow-lg shadow-black/30 group-hover:scale-110 transition-transform`}>
                  <h.icon size={24} />
                </div>
                <div className="min-w-0">
                  <p className="text-xl md:text-3xl font-extrabold tracking-tight leading-none">
                    {h.value}
                    {h.unit && (
                      <span className="ml-1.5 text-sm md:text-base font-semibold text-blue-200">
                        {h.unit}
                      </span>
                    )}
                  </p>
                  <p className="mt-2 text-xs md:text-sm text-blue-100/70 leading-5">{h.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tricolour stripe */}
        <div className="absolute bottom-0 inset-x-0 h-1.5 flex">
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-emerald-600" />
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section id="products" className="py-20 md:py-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What we make"
              title="Our Polysheet Products"
              desc="From raw sheet to finished tray — PET and HIPS in ESD and non-ESD grades, supplied as sheets, rolls or thermoformed packaging."
            />
            <img
              src="/polysheets/sheets-colours.jpg"
              alt="ESD sheets in white, green and black with a black ESD roll"
              className="hidden lg:block w-[340px] rounded-2xl"
            />
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((p) => (
              <article
                key={p.title}
                className="group rounded-3xl bg-white ring-1 ring-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-blue-950/90 text-white text-xs font-semibold px-3 py-1.5 backdrop-blur">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                  <p className="mt-3 text-gray-600 leading-7 flex-1">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.specs.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MATERIALS ================= */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            center
            eyebrow="Materials"
            title="PET for Clarity. HIPS for Strength."
            desc="Two materials, one standard of quality. Both are available in ESD grades for complete static safety."
          />

          <div className="mt-16 space-y-10">
            {materials.map((m, idx) => (
              <div
                key={m.key}
                className={`rounded-[32px] bg-gradient-to-br ${m.accent.grad} ring-1 ${m.accent.ring} shadow-sm overflow-hidden`}
              >
                <div className={`grid lg:grid-cols-5 gap-0 ${idx % 2 ? "lg:[direction:rtl]" : ""}`}>
                  <div className="lg:col-span-2 bg-white flex items-center justify-center p-8 [direction:ltr]">
                    <img
                      src={m.img}
                      alt={`${m.name} sheet tray`}
                      className="w-full max-w-sm rounded-2xl"
                    />
                  </div>

                  <div className="lg:col-span-3 p-8 md:p-12 [direction:ltr]">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                      {m.full}
                    </p>
                    <h3 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900">
                      <span className={m.accent.heading}>{m.name}</span> Sheets
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {m.tagline.map((t) => (
                        <span key={t} className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${m.accent.chip}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 text-gray-600 leading-8">{m.desc}</p>

                    <div className="mt-8 grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4">Key properties</h4>
                        <ul className="space-y-3">
                          {m.properties.map((p) => (
                            <li key={p} className="flex gap-3 text-gray-700 text-[15px] leading-6">
                              <span className={`mt-0.5 w-5 h-5 shrink-0 rounded-full ${m.accent.icon} text-white flex items-center justify-center`}>
                                <Check size={12} strokeWidth={3} />
                              </span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4">Key uses</h4>
                        <div className="flex flex-wrap gap-2">
                          {m.uses.map((u) => (
                            <span key={u} className="text-sm px-3 py-1.5 rounded-lg bg-white ring-1 ring-gray-200 text-gray-700">
                              {u}
                            </span>
                          ))}
                        </div>

                        <h4 className="font-bold text-gray-900 mt-8 mb-4">Colours we make</h4>
                        <div className="flex gap-5">
                          {m.colours.map((c) => (
                            <Swatch key={c} type={c} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ESD VALUES ================= */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="ESD grades & values"
                title="Controlled Surface Resistance"
                desc="ESD (electrostatic discharge) materials control static to protect sensitive components during manufacturing, handling, transport and storage. We make sheets across all three ESD classifications."
              />

              {/* Log scale bar */}
              <div className="mt-12">
                <div className="flex h-4 rounded-full overflow-hidden ring-1 ring-gray-200">
                  {esdGrades.map((g) => (
                    <div key={g.name} className={g.color} style={{ flex: g.span }} />
                  ))}
                </div>
                <div className="relative mt-2 h-5 text-xs font-semibold text-gray-500">
                  {[3, 5, 9, 12].map((exp) => (
                    <span
                      key={exp}
                      className="absolute -translate-x-1/2 first:translate-x-0 last:-translate-x-full"
                      style={{ left: `${((exp - 3) / 9) * 100}%` }}
                    >
                      10<sup>{exp}</sup>
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-xs text-gray-400">Surface resistance, Ω/sq (log scale)</p>
              </div>

              <div className="mt-10 grid sm:grid-cols-3 gap-5">
                {esdGrades.map((g) => (
                  <div key={g.name} className="rounded-2xl ring-1 ring-gray-100 bg-slate-50 p-6">
                    <span className={`block w-10 h-1.5 rounded-full ${g.color}`} />
                    <h3 className={`mt-4 font-bold text-lg ${g.text}`}>{g.name}</h3>
                    <p className="mt-1 text-2xl font-extrabold text-gray-900">
                      10<sup>{g.range[0]}</sup> – 10<sup>{g.range[1]}</sup>
                    </p>
                    <p className="text-xs text-gray-500 font-medium">Ω/sq</p>
                    <p className="mt-3 text-sm text-gray-600 leading-6">{g.use}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[28px] overflow-hidden bg-slate-900 text-white shadow-xl">
                <img
                  src="/polysheets/resistance-meter.png"
                  alt="Surface resistance meter testing an ESD sheet"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center">
                      <Gauge size={22} />
                    </div>
                    <h3 className="text-xl font-bold">Tested &amp; Verified</h3>
                  </div>
                  <p className="mt-4 text-slate-300 leading-7">
                    Every ESD lot is checked with surface resistance meters, so
                    the grade you order is the grade you receive — before and
                    after vacuum forming.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Spec table */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Specifications at a glance</h3>
            <div className="mt-8 overflow-x-auto rounded-3xl ring-1 ring-gray-200">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="bg-blue-950 text-white">
                    <th className="px-6 py-5 font-semibold">Property</th>
                    <th className="px-6 py-5 font-semibold">
                      <span className="text-sky-300">ESD PET</span> Sheets
                    </th>
                    <th className="px-6 py-5 font-semibold">
                      <span className="text-red-400">ESD HIPS</span> Sheets
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specRows.map(([prop, pet, hips]) => (
                    <tr key={prop} className="border-t border-gray-100 odd:bg-white even:bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">{prop}</td>
                      <td className="px-6 py-4 text-gray-600">{pet}</td>
                      <td className="px-6 py-4 text-gray-600">{hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-20 md:py-28 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4">
          <SectionHeading
            light
            eyebrow="Industries"
            title="Where Our Sheets Are Used"
            desc="Our sheets reach thermoformers, electronics packaging companies, PCB tray makers, EMS units, semiconductor suppliers, automotive and EV manufacturers, LED makers and industrial packaging buyers."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {esdSectors.map((s) => (
              <div
                key={s.name}
                className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-900/40">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.name}</h3>
                <p className="mt-2 text-sm text-blue-100/70 leading-6">{s.items}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-20 text-2xl font-bold">Packaging &amp; industrial applications</h3>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {industryCards.map((c) => (
              <div key={c.name} className="rounded-2xl bg-white text-gray-900 p-3 flex lg:flex-col items-center lg:items-stretch gap-4 lg:gap-3">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-24 h-20 lg:w-full lg:h-28 object-cover rounded-xl shrink-0"
                />
                <div className="lg:px-1 lg:pb-1">
                  <span
                    className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      c.tag === "PET" ? "bg-blue-100 text-blue-900" : "bg-red-100 text-red-700"
                    }`}
                  >
                    {c.tag}
                  </span>
                  <p className="mt-1.5 font-semibold text-sm leading-5">{c.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SELECTION GUIDE ================= */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            center
            eyebrow="Material selection guide"
            title="Which Sheet Is Right for You?"
          />

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Choose PET when you need",
                icon: Eye,
                color: "bg-blue-900",
                ring: "ring-blue-100",
                img: "/polysheets/clear-tray.png",
                points: [
                  "Clarity & visibility",
                  "Premium finish",
                  "Smooth thermoforming",
                  "Transparent packaging",
                  "Display-based component protection",
                ],
              },
              {
                title: "Choose HIPS when you need",
                icon: Dumbbell,
                color: "bg-red-600",
                ring: "ring-red-100",
                img: "/polysheets/black-roll.png",
                points: [
                  "Strength & durability",
                  "Impact resistance",
                  "Strong, rigid trays",
                  "Industrial handling",
                  "Heavy-duty component protection",
                ],
              },
            ].map((g) => (
              <div key={g.title} className={`relative rounded-3xl ring-1 ${g.ring} p-8 md:p-10 overflow-hidden`}>
                <img
                  src={g.img}
                  alt=""
                  className="absolute -right-6 -bottom-6 w-48 opacity-90 pointer-events-none hidden sm:block"
                />
                <div className={`w-14 h-14 rounded-2xl ${g.color} text-white flex items-center justify-center`}>
                  <g.icon size={26} />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">{g.title}</h3>
                <ul className="mt-6 space-y-3 relative">
                  {g.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-gray-700">
                      <span className={`w-6 h-6 rounded-full ${g.color} text-white flex items-center justify-center shrink-0`}>
                        <Check size={14} strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-3 rounded-2xl overflow-hidden text-white font-bold text-lg">
            <div className="bg-blue-900 px-6 py-5 flex items-center gap-3">
              <Eye size={22} /> ESD PET for Clarity
            </div>
            <div className="bg-red-600 px-6 py-5 flex items-center gap-3">
              <Dumbbell size={22} /> ESD HIPS for Strength
            </div>
            <div className="bg-emerald-700 px-6 py-5 flex items-center gap-3">
              <ShieldCheck size={22} /> Both for Static Safety
            </div>
          </div>

          {/* Advantages */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {advantages.map((a) => (
              <div key={a.label} className="rounded-2xl bg-slate-50 ring-1 ring-gray-100 p-5 text-center">
                <a.icon className="mx-auto text-blue-900" size={28} />
                <p className="mt-3 text-sm font-medium text-gray-700 leading-5">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MANUFACTURING ================= */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            center
            eyebrow="Manufacturing strength"
            title="Built to Scale With You"
            desc="Modern extrusion lines, dedicated ESD and non-ESD production and in-house testing let us supply consistent material — from sample lots to bulk monthly contracts."
          />

          {/* Bento grid */}
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-12 gap-6">

            {/* Capacity card */}
            <div className="lg:col-span-4 relative overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white p-8 md:p-10 flex flex-col">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-red-600/30 blur-3xl" />
              <div className="relative w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center shadow-lg shadow-red-900/40">
                <Factory size={26} />
              </div>
              <p className="relative mt-8 text-sm uppercase tracking-[0.2em] text-blue-200/80">
                Production capacity
              </p>
              <p className="relative mt-2 text-6xl md:text-7xl font-extrabold tracking-tight">
                600<span className="text-red-500">+</span>
              </p>
              <p className="relative text-xl font-semibold text-blue-100">MT per month</p>

              <div className="relative mt-auto pt-10 space-y-4">
                {[
                  { label: "ESD PET & ESD HIPS lines", color: "bg-emerald-500", w: "w-full" },
                  { label: "Non-ESD PET & HIPS lines", color: "bg-sky-400", w: "w-full" },
                ].map((l) => (
                  <div key={l.label}>
                    <div className="flex justify-between text-sm text-blue-100/80 mb-2">
                      <span>{l.label}</span>
                      <span className="font-semibold text-white">Dedicated</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className={`h-full rounded-full ${l.color} ${l.w}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process cards */}
            <div className="lg:col-span-4 grid gap-6">
              {manufacturing.map((m) => (
                <div
                  key={m.title}
                  className="group rounded-[28px] bg-white ring-1 ring-gray-100 shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={m.img}
                      alt={m.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white text-blue-950 flex items-center justify-center shadow">
                      <m.icon size={20} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">{m.title}</h3>
                    <p className="mt-2 text-gray-600 text-sm leading-6">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Product visual */}
            <div className="md:col-span-2 lg:col-span-4 relative overflow-hidden rounded-[28px] bg-gradient-to-br from-slate-100 to-slate-200 ring-1 ring-gray-100 shadow-sm min-h-105">
              <img
                src="/polysheets/esd-center.png"
                alt="Clear ESD PET and black ESD HIPS sheets with thermoformed trays"
                className="absolute inset-0 w-full h-full object-contain lg:object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8 text-white">
                <div className="flex gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-500/90">ESD PET</span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-600/90">ESD HIPS</span>
                </div>
                <h3 className="text-2xl font-bold">From sheet to tray</h3>
                <p className="mt-2 text-blue-100/80 text-sm leading-6">
                  Sheets, rolls and thermoformed trays — all from one manufacturer.
                </p>
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="mt-16 rounded-[28px] bg-white ring-1 ring-gray-100 shadow-sm p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h3 className="text-2xl font-bold text-gray-900">
                The future of Babaji Udyog
              </h3>
              <p className="text-sm text-gray-500">Where we&apos;re headed next</p>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {roadmap.map((r, i) => (
                <div key={r.title} className="relative">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                      <r.icon size={20} />
                    </div>
                    <span className="text-xs font-bold text-gray-300">0{i + 1}</span>
                  </div>
                  <h4 className="mt-4 font-bold text-gray-900">{r.title}</h4>
                  <p className="mt-1 text-sm text-gray-500 leading-6">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <TestimonialsSection
        theme="blue"
        badge="Client Feedback"
        title="Trusted by Industry"
        subtitle="Thermoformers, EMS units and packaging buyers rely on Babaji polysheets for consistent quality and supply."
        testimonials={testimonials}
      />

      {/* ================= CTA ================= */}
      <section className="pb-20 pt-4 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-red-600/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 p-8 md:p-14 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Need samples or a bulk quote?
                </h2>
                <p className="mt-4 text-blue-100/80 leading-8">
                  Tell us your application, thickness and quantity — our team
                  will recommend the right PET or HIPS grade and share pricing.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:+91${CONTACT.phone}`}
                    className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-7 py-4 rounded-xl font-semibold transition"
                  >
                    <Phone size={18} /> Call {CONTACT.phone}
                  </a>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 bg-white text-blue-950 hover:bg-gray-100 px-7 py-4 rounded-xl font-semibold transition"
                  >
                    Send an Enquiry <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Phone", value: `+91 ${CONTACT.phone}`, href: `tel:+91${CONTACT.phone}` },
                  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                  { icon: MapPin, label: "Works", value: CONTACT.address },
                ].map((c) => {
                  const Inner = (
                    <>
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <c.icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wider text-blue-200/70">{c.label}</p>
                        <p className="font-semibold break-words">{c.value}</p>
                      </div>
                    </>
                  );
                  return c.href ? (
                    <a key={c.label} href={c.href} className="flex items-center gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 hover:bg-white/10 transition">
                      {Inner}
                    </a>
                  ) : (
                    <div key={c.label} className="flex items-center gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                      {Inner}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
