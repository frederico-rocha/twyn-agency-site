import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Squiggle, Star, ArrowDoodle } from "@/components/twyn/Squiggle";
import { useState, useEffect } from "react";

import logo from "@/assets/twyn-logo.png.asset.json";
import heroTable from "@/assets/hero-table.jpg.asset.json";
import mariana from "@/assets/mariana.jpg.asset.json";
import cryptoAi from "@/assets/crypto-ai.jpg.asset.json";
import wowGala from "@/assets/wow-gala.jpg.asset.json";
import freakingHot from "@/assets/freaking-hot.jpg.asset.json";
import yogaMaat from "@/assets/yoga-maat.jpg.asset.json";
import yogaOcean from "@/assets/yoga-ocean.jpg.asset.json";
import privasea from "@/assets/privasea.jpg.asset.json";
import bamboo from "@/assets/bamboo.jpg.asset.json";
import catering from "@/assets/catering.jpg.asset.json";
import networking from "@/assets/networking.jpg.asset.json";
import signArrow from "@/assets/sign-arrow.jpg.asset.json";
import heroVideo from "@/assets/hero.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TWYN Events Agency — From Concept to Experience" },
      {
        name: "description",
        content:
          "Lisbon-based events production agency. Fun, flexible, solution-driven. From concept to experience — just great events, done right.",
      },
      { property: "og:title", content: "TWYN Events Agency" },
      {
        property: "og:description",
        content: "From concept to experience. Events production based in Lisbon.",
      },
      { property: "og:image", content: heroTable.url },
      { name: "twitter:image", content: heroTable.url },
    ],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const projects = [
  {
    name: "Crypto AI Conference",
    type: "2-Day Conference",
    desc: "Full-scale production for a leading AI × crypto event. 2,000 attendees.",
    img: cryptoAi.url,
    color: "lilac",
    rotate: "-rotate-1",
  },
  {
    name: "WOW Gala Lisboa",
    type: "Luxury Gala",
    desc: "300-guest immersive gala at Palácio do Grilo. Feathers, fizz & freedom.",
    img: wowGala.url,
    color: "lime",
    rotate: "rotate-2",
  },
  {
    name: "Block Party Lisbon",
    type: "3-Day Music Festival",
    desc: "End-to-end production of a 3-day festival at MAAT — food, art & market.",
    img: signArrow.url,
    color: "lime",
    rotate: "-rotate-2",
  },
  {
    name: "Adidas Retreat",
    type: "Sports Retreat",
    desc: "International retreat — a hotel transformed into a fully immersive brand environment.",
    img: yogaOcean.url,
    color: "lilac",
    rotate: "rotate-1",
  },
  {
    name: "Freaking Hot Launch",
    type: "Brand Activation",
    desc: "Fitness brand launch event with 20 influencers in a custom-built beachside space.",
    img: freakingHot.url,
    color: "lilac",
    rotate: "rotate-1",
  },
  {
    name: "Yoga at MAAT",
    type: "Sports Event",
    desc: "Production & curation of yoga classes inside the MAAT museum.",
    img: yogaMaat.url,
    color: "lime",
    rotate: "-rotate-1",
  },
];

const services = [
  { t: "Corporate Events", d: "Conferences, summits, off-sites." },
  { t: "Brand Activations", d: "Pop-ups, launches, immersive builds." },
  { t: "Private & Social", d: "Galas, weddings, intimate dinners." },
  { t: "Creative Concept", d: "From a one-line brief to a full story." },
  { t: "Event Production", d: "Schedules, crew, run-of-show." },
  { t: "Logistics & Ops", d: "The unglamorous parts, done well." },
  { t: "Venue & Suppliers", d: "Sourcing what fits — not what's nearby." },
];

const capabilities = [
  "Activation Builds",
  "AV & Lighting",
  "Staging",
  "Set Design",
  "Decoration",
  "Catering",
  "Bar Experiences",
  "Photography",
  "Video",
  "Merchandising",
  "Performers",
  "Strategic Partnerships",
];

const marqueeItems = [
  "Adidas",
  "MAAT Museum",
  "Crypto AI Con",
  "WOW Gala Lisboa",
  "Tezos",
  "Michelin Guide",
  "Palácio do Grilo",
  "Privasea",
  "Block Party",
  "The Freaking Hot",
];

function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-500 ease-out ${
          scrolled
            ? "backdrop-blur-md bg-background/85 border-border/50"
            : "bg-transparent border-transparent backdrop-blur-0"
        }`}
      >
        <nav className={`mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}>
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logo.url} alt="TWYN Events Agency" className="h-10 w-10 rounded-full" />
            <span className="font-display text-xl tracking-tight font-semibold">TWYN</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#work" className="hover:text-primary transition">Work</a>
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>
          <a
            href="#contact"
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${scrolled ? "bg-foreground text-background hover:bg-primary" : "bg-lime text-ink hover:bg-lime-deep"}`}
          >
            Let's talk
          </a>
        </nav>
      </header>


      {/* HERO */}
      <section id="top" className="relative min-h-[100dvh] overflow-hidden bg-black">
        <div className="absolute inset-[18px] overflow-hidden rounded-[1.75rem] sm:inset-0 sm:rounded-none">
          <video
            src={heroVideo.url}
            poster={heroTable.url}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-fill sm:object-cover"
          />
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="px-5 sm:px-8 py-24 sm:py-32 bg-lilac/30 relative">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight font-light max-w-4xl"
          >
            "Tell us <em className="italic text-primary">what</em> you need."
            <span className="block text-2xl sm:text-3xl text-muted-foreground mt-6 not-italic font-sans">
              — and we'll handle the rest.
            </span>
          </motion.h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Simple communication", bg: "bg-lime" },
              { t: "Solution-driven", bg: "bg-card" },
              { t: "Strong execution", bg: "bg-card" },
              { t: "Stress-free delivery", bg: "bg-lime" },
            ].map((c, i) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, y: 20, rotate: i % 2 ? 2 : -2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`${c.bg} rounded-3xl p-6 text-center shadow-sm border border-border/60`}
              >
                <Star className="w-5 h-5 mx-auto mb-3 text-lilac-deep" />
                <p className="font-display text-xl">{c.t}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 text-center text-muted-foreground text-lg italic">No noise. Just great events.</p>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="px-5 sm:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-muted-foreground flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-lime-deep" /> Selected work
              </p>
              <h2 className="font-display text-5xl sm:text-7xl leading-[0.95] tracking-tight mt-3 font-light">
                Events we've <em className="italic text-primary">produced</em>.
              </h2>
            </div>
            <ArrowDoodle className="w-28 text-lilac-deep" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                className={`group relative ${i % 4 === 1 ? "lg:mt-12" : ""} ${i % 4 === 2 ? "lg:-mt-6" : ""}`}
              >
                <div className={`rounded-[2rem] overflow-hidden aspect-[4/5] bg-muted shadow-md transition-transform duration-500 group-hover:${p.rotate} group-hover:scale-[1.02]`}>
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl leading-tight">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                  </div>
                  <span className={`shrink-0 ${p.color === "lime" ? "bg-lime" : "bg-lilac"} rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap`}>
                    {p.type}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-5 sm:px-8 py-24 sm:py-32 bg-lime/40 relative overflow-hidden">
        <Squiggle className="absolute top-10 -left-10 w-72 text-lilac-deep opacity-40" />
        <div className="mx-auto max-w-7xl relative">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.25em] text-sm text-muted-foreground">What we do</p>
            <h2 className="font-display text-5xl sm:text-7xl leading-[0.95] tracking-tight mt-3 font-light">
              Services, <em className="italic text-primary">end to end</em>.
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {services.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-background p-8 hover:bg-lilac/20 transition-colors"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                  <h3 className="font-display text-2xl">{s.t}</h3>
                </div>
                <p className="text-muted-foreground mt-3">{s.d}</p>
              </motion.div>
            ))}
            <div className="bg-foreground text-background p-8 flex flex-col justify-between">
              <p className="font-display text-2xl leading-tight">Something not on the list?</p>
              <a href="#contact" className="mt-4 text-lime font-medium underline-offset-4 hover:underline">
                Tell us what you need →
              </a>
            </div>
          </div>

          {/* Capabilities chips */}
          <div className="mt-20">
            <p className="uppercase tracking-[0.25em] text-sm text-muted-foreground mb-6">Production capabilities</p>
            <div className="flex flex-wrap gap-3">
              {capabilities.map((c, i) => (
                <span
                  key={c}
                  className={`${i % 2 ? "bg-lilac" : "bg-card border border-border"} rounded-full px-5 py-2.5 text-sm font-medium`}
                  style={{ transform: `rotate(${(i % 3 - 1) * 0.8}deg)` }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* small image strip */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[bamboo.url, catering.url, networking.url, privasea.url].map((u, i) => (
              <div key={u} className={`rounded-2xl overflow-hidden aspect-square ${i % 2 ? "translate-y-4" : ""}`}>
                <img src={u} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-5 sm:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-xl">
              <img src={mariana.url} alt="Mariana Martinho, founder of TWYN" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-3 sm:right-6 rotate-[6deg] bg-lime px-5 py-3 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
              <Star className="w-4 h-4 text-lilac-deep" /> Founder & Producer
            </div>
          </motion.div>

          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-muted-foreground">About TWYN</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[1] tracking-tight mt-3 font-light">
              Led by hands-on <em className="italic text-primary">production</em> experience.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              TWYN is founded and directed by <strong className="text-foreground">Mariana Martinho</strong>, an event producer with a background spanning music festivals, international conferences, brand activations, and major film and TV productions across Europe.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Music festivals & public events",
                "International conferences & brand activations",
                "Major film & TV productions in Europe",
                "Complex logistics & tight timelines",
                "Multidisciplinary teams & international crews",
                "High-budget productions where precision matters",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Star className="w-4 h-4 mt-1.5 shrink-0 text-lime-deep" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-10 bg-foreground text-background overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((m, i) => (
            <span key={i} className="font-display text-3xl sm:text-5xl mx-8 flex items-center gap-8">
              {m}
              <Star className="w-5 h-5 text-lime inline-block" />
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 sm:px-8 py-24 sm:py-32 bg-lilac/40">
        <div className="mx-auto max-w-5xl text-center">
          <Star className="w-8 h-8 mx-auto text-lilac-deep" />
          <h2 className="font-display text-6xl sm:text-8xl leading-[0.95] tracking-tight font-light mt-6">
            Tell us <em className="italic text-primary">what</em>
            <br />
            you need.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            We reply within 24 hours. Bring us a brief, a date, a budget — or just a feeling.
          </p>

          <div className="mt-12 inline-flex flex-col sm:flex-row gap-4 items-center bg-background rounded-3xl p-6 sm:p-8 shadow-md border border-border">
            <div className="text-left">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Mariana Martinho</p>
              <a href="mailto:mariana@twynagency.com" className="font-display text-2xl block mt-1 hover:text-primary transition">
                mariana@twynagency.com
              </a>
              <a href="tel:+351914932082" className="text-muted-foreground hover:text-foreground transition block mt-1">
                +351 914 932 082
              </a>
            </div>
            <a
              href="mailto:mariana@twynagency.com"
              className="rounded-full bg-foreground text-background px-8 py-4 font-medium hover:bg-primary transition whitespace-nowrap"
            >
              Send a brief →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 sm:px-8 py-12 border-t border-border">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" className="h-9 w-9 rounded-full" />
            <span className="font-display text-lg">TWYN Events Agency</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TWYN · Lisbon, Portugal
          </p>
        </div>
      </footer>
    </div>
  );
}
