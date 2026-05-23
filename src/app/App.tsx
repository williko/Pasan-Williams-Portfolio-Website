import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import {
  Mail, Download, ArrowRight, ExternalLink,
  Code2, Palette, Brain, Zap, Layers, Terminal,
  Globe, Monitor, Cpu, MapPin, Calendar, Eye, Heart,
  Smartphone, Wind, GitBranch, Sparkles, Phone, Linkedin, User,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import imgPortrait    from "@/imports/sfwfk-1.png";
import imgCastle      from "@/imports/image-2.png";
import imgSampath     from "@/imports/image-3.png";
import imgKiosks      from "@/imports/image-4.png";
import imgSpa         from "@/imports/image-5.png";
import imgWavePay     from "@/imports/image-6.png";
import imgFashion     from "@/imports/image-7.png";
import imgTaskX       from "@/imports/image-8.png";
import imgRestaurant  from "@/imports/image-9.png";
import imgDashboard   from "@/imports/image-10.png";

// ── Data ──────────────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    year: "2018",
    role: "Trainee Software Engineer",
    company: "mvv Information Technology",
    location: "Sri Lanka",
    period: "Sept 2018 – Sept 2019",
    desc: "First professional role — grounded in software fundamentals while building an eye for interface design. Contributed to internal tooling, learned version control workflows, and began exploring UI design in parallel.",
  },
  {
    year: "2020",
    role: "UI/UX Engineer",
    company: "Ingenii Lanka (Pvt) Ltd.",
    location: "Kelaniya, Sri Lanka",
    period: "Aug 2020 – Mar 2021",
    desc: "Transitioned fully into UI/UX engineering. Owned design and frontend implementation for client-facing web products, establishing component libraries and responsive layout systems.",
  },
  {
    year: "2021",
    role: "UI/UX Engineer",
    company: "Evicio (Pvt) Ltd.",
    location: "Sri Lanka",
    period: "May 2021 – Oct 2021",
    desc: "Short-term engagement delivering high-fidelity UI work for a product-focused team. Worked across wireframing, prototyping, and front-end implementation under tight delivery timelines.",
  },
  {
    year: "2022",
    role: "UI/UX Engineer",
    company: "Block-stars (Pvt) Ltd.",
    location: "Sri Lanka",
    period: "Jan 2022 – Oct 2023",
    desc: "Nearly two years designing and engineering interfaces across multiple product verticals. Led UX research cycles, built reusable design systems, and collaborated closely with engineering on production implementation.",
  },
  {
    year: "2024",
    role: "Senior UI/UX Engineer",
    company: "Overleap (Pvt) Ltd.",
    location: "Sri Lanka · Present",
    period: "Jan 2024 – Present",
    desc: "Current senior role — driving end-to-end product design from discovery to delivery. Mentoring junior designers, setting interface standards, and bridging design fidelity with engineering execution across the full product suite.",
  },
];

// Featured sticky-scroll projects
const PROJECTS = [
  {
    id: "wavepay",
    title: "Wave Pay App",
    category: "Mobile App · Banking UI Redesign",
    year: "2023",
    description:
      "Full UI redesign of the People's Bank Wave mobile payment app — login, splash, and services screens. Streamlined transaction flows, modernised visual language, and improved accessibility for a mass-market fintech audience.",
    tech: ["Figma", "Adobe XD", "Prototyping", "Material Design"],
    accent: "#00F0FF",
    image: imgWavePay,
    metrics: [
      { label: "Screens", value: "24" },
      { label: "Views", value: "144" },
      { label: "Likes", value: "4" },
    ],
    behance: "https://www.behance.net/pasanwilliams",
  },
  {
    id: "fashionweb",
    title: "Fashion Landing",
    category: "Web · E-Commerce Design",
    year: "2022",
    description:
      "High-fidelity fashion e-commerce landing page — \"Hot Amazing Stuff Is Here\" — built with bold full-bleed imagery, editorial typographic hierarchy, and a fully responsive layout across mobile and desktop.",
    tech: ["Figma", "HTML/CSS", "Bootstrap 5", "Responsive"],
    accent: "#9D4EDD",
    image: imgFashion,
    metrics: [
      { label: "Breakpoints", value: "4" },
      { label: "Views", value: "85" },
      { label: "Likes", value: "11" },
    ],
    behance: "https://www.behance.net/pasanwilliams",
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    category: "Web · Dashboard Design",
    year: "2021",
    description:
      "Clean analytics dashboard featuring KPI cards (300 total users, 40 active), user distribution donut charts, group breakdowns, monthly activity line graphs, and detailed login/failed-login audit tables.",
    tech: ["Figma", "React", "MUI", "Data Visualisation"],
    accent: "#00F0FF",
    image: imgDashboard,
    metrics: [
      { label: "Total Users", value: "300" },
      { label: "Active Users", value: "40" },
      { label: "Views", value: "29" },
    ],
    behance: "https://www.behance.net/pasanwilliams",
  },
];

// Grid of remaining projects
const MORE_PROJECTS = [
  {
    title: "Sampath Bank Website",
    category: "Web · Banking",
    views: "4,747",
    likes: "22",
    image: imgSampath,
    accent: "#00F0FF",
    tags: ["Bootstrap", "Responsive"],
    desc: "Full banking website recreated with Bootstrap — responsive across all devices with orange brand identity.",
  },
  {
    title: "Castle Landing Page",
    category: "Web · Interactive",
    views: "3,636",
    likes: "11",
    image: imgCastle,
    accent: "#9D4EDD",
    tags: ["HTML/CSS", "Bootstrap"],
    desc: "Responsive Castle page featuring an animated circular graphic element and clean two-column content layout.",
  },
  {
    title: "Kiosks System UI",
    category: "Web · Information System",
    views: "70",
    likes: "11",
    image: imgKiosks,
    accent: "#00F0FF",
    tags: ["Figma", "Kiosk UI"],
    desc: "Interactive multimedia kiosk interface with service tiles for flight schedules, maps, transport, and tourist info.",
  },
  {
    title: "Spa Landing Page",
    category: "Web · Wellness",
    views: "36",
    likes: "22",
    image: imgSpa,
    accent: "#9D4EDD",
    tags: ["Figma", "Responsive"],
    desc: "Luxury spa and wellness landing page with multi-screen responsive layouts and product showcase sections.",
  },
  {
    title: "Task X Web App",
    category: "Web · Productivity",
    views: "79",
    likes: "7",
    image: imgTaskX,
    accent: "#00F0FF",
    tags: ["React", "Dashboard"],
    desc: "Task management web application with table views, status trackers, and an orange-accented progress grid.",
  },
  {
    title: "Restaurant Mobile App",
    category: "Mobile · Food & Dining",
    views: "57",
    likes: "6",
    image: imgRestaurant,
    accent: "#9D4EDD",
    tags: ["Figma", "Mobile UI"],
    desc: "\"Yummy Yummy\" food delivery app — warm orange palette, menu browsing, food detail cards, and order flow.",
  },
];

const INTERESTS = [
  { label: "Graphic Design / Logo Design", icon: Palette },
  { label: "Youtube Vlogger", icon: Monitor },
  { label: "Outdoor Activities", icon: Globe },
  { label: "Badminton", icon: Zap },
];

const SOFT_SKILLS = [
  { label: "Leadership", pct: 92 },
  { label: "Teamwork", pct: 96 },
  { label: "Effective Communication", pct: 88 },
  { label: "Creativity", pct: 95 },
  { label: "Friendly", pct: 98 },
];

const OFFICE_PROJECTS = [
  {
    name: "Ranger Fleet Lite & Pro",
    type: "IoT Fleet Management",
    company: "Ingenii Lanka (Pvt) Ltd.",
    status: "Production · Live",
    desc: "IoT-based system for tracking, monitoring, and managing vehicle fleets with real-time location and route tracking. Built progress bar with client socket, notification module, POI, Geofence tracking, and common components.",
    tech: ["Adobe XD", "Angular 10", "Node.js", "MySQL"],
    accent: "#00F0FF",
  },
  {
    name: "Construct X",
    type: "Construction Management",
    company: "Ingenii Lanka (Pvt) Ltd.",
    status: "Jan 2021 – Feb 2021",
    desc: "Construction Management System for end-to-end project tracking and site operations.",
    tech: ["Adobe XD", "Angular 10", "Node.js", "MySQL", "MongoDB"],
    accent: "#9D4EDD",
  },
  {
    name: "EV-HRM System",
    type: "Human Resource Management",
    company: "Evicio (Pvt) Ltd.",
    status: "Internal Platform",
    desc: "Streamlined platform for managing internal human resources, payroll, and day-to-day operations.",
    tech: ["Figma", "React.js", "Laravel", "MySQL"],
    accent: "#00F0FF",
  },
  {
    name: "Ayuthaya Spa System",
    type: "UI/UX Design",
    company: "Client Project",
    status: "Design Delivery",
    desc: "Complete Spa Search and Booking System — user flows, screen designs, and interactive prototype.",
    tech: ["Adobe XD"],
    accent: "#9D4EDD",
  },
  {
    name: "BLOCKSTARS Web",
    type: "Corporate Website",
    company: "Block-stars (Pvt) Ltd.",
    status: "Official Site",
    desc: "Designed and developed the official corporate web presence from concept to production deployment.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
    accent: "#00F0FF",
  },
  {
    name: "Dig Wallet",
    type: "Crypto Wallet Application",
    company: "Block-stars (Pvt) Ltd.",
    status: "Mobile & Web",
    desc: "Secure, responsive digital crypto wallet optimised for both mobile and web platforms.",
    tech: ["React.js", "HTML", "CSS", "Bootstrap"],
    accent: "#9D4EDD",
  },
  {
    name: "PM-2 Entertainment",
    type: "Entertainment Portal",
    company: "Block-stars (Pvt) Ltd.",
    status: "Web App",
    desc: "Specialised South Korean entertainment-type web application with rich media browsing.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "Bootstrap"],
    accent: "#00F0FF",
  },
  {
    name: "Winners Application",
    type: "Gaming Portal",
    company: "Block-stars (Pvt) Ltd.",
    status: "Web App",
    desc: "South Korean casino-type web application platform with game listings and user dashboards.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "Bootstrap"],
    accent: "#9D4EDD",
  },
  {
    name: "Bitcost",
    type: "Trading Application",
    company: "Block-stars (Pvt) Ltd.",
    status: "Mobile",
    desc: "High-performance South Korean cryptocurrency and financial trading mobile application.",
    tech: ["Flutter"],
    accent: "#00F0FF",
  },
  {
    name: "Okidoki",
    type: "Fleet Logistics Management",
    company: "Overleap (Pvt) Ltd.",
    status: "Production",
    desc: "Comprehensive fleet logistics platform with live monitoring, shipping controls, and automated invoice creation.",
    tech: ["React.js", "HTML", "CSS", "React Bootstrap"],
    accent: "#9D4EDD",
  },
  {
    name: "Adastra",
    type: "Communication Platform",
    company: "Overleap (Pvt) Ltd.",
    status: "Production",
    desc: "Responsive, conversation-based application designed for real-time interactions and team communication.",
    tech: ["React.js", "HTML", "CSS", "Metronic"],
    accent: "#00F0FF",
  },
  {
    name: "SmartGas",
    type: "Utilities Management",
    company: "Overleap (Pvt) Ltd.",
    status: "Production",
    desc: "Enterprise-grade Gas Tanks Management Application for logistics, monitoring, and distribution tracking.",
    tech: ["React.js", "HTML", "CSS", "Metronic"],
    accent: "#9D4EDD",
  },
  {
    name: "Marvel",
    type: "Vehicle Tracking & Management",
    company: "Overleap (Pvt) Ltd.",
    status: "Current · Live",
    desc: "Premium, real-time Vehicle Tracking and Management Application with advanced analytics and fleet insights.",
    tech: ["Next.js", "MUI"],
    accent: "#00F0FF",
  },
];

const DESIGN_TOOLS = [
  { name: "Figma", icon: Palette, desc: "UI systems, components, variables, auto-layout" },
  { name: "Adobe XD", icon: Monitor, desc: "Wireframes, prototyping, user flows" },
  { name: "Adobe Illustrator", icon: Zap, desc: "Vector graphics, icon sets, branding" },
  { name: "Adobe Photoshop", icon: Layers, desc: "Visual compositing, image editing" },
];

const CODE_TOOLS = [
  { name: "ReactJS / Next.js", icon: Code2, desc: "App router, RSC, full-stack React apps" },
  { name: "HTML / CSS", icon: Globe, desc: "Semantic markup, modern CSS, layouts" },
  { name: "Flutter", icon: Smartphone, desc: "Cross-platform mobile development" },
  { name: "Tailwind CSS / MUI", icon: Wind, desc: "Utility-first styling & component libraries" },
  { name: "Cursor", icon: Cpu, desc: "AI-powered IDE, code generation & refactor" },
  { name: "Git", icon: GitBranch, desc: "Version control, branching, collaboration" },
];

const AI_TOOLS = [
  { name: "ReaddyAI", icon: Sparkles, desc: "AI design generation for UI screens" },
  { name: "Gemini", icon: Brain, desc: "Google AI — coding assist & reasoning" },
  { name: "Figma Make", icon: Palette, desc: "AI design-to-code, component generation" },
  { name: "ChatGPT", icon: Brain, desc: "Architecture planning, logic, copywriting" },
  { name: "GitHub Copilot", icon: Code2, desc: "In-editor AI code completion" },
  { name: "Stitch", icon: Zap, desc: "Google AI prototyping & UI generation" },
];

// ── Hooks ─────────────────────────────────────────────────────────────────────

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement;
      setP(el.scrollTop / (el.scrollHeight - el.clientHeight) || 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return p;
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── AbstractOrb ───────────────────────────────────────────────────────────────

function AbstractOrb() {
  return (
    <div className="relative w-[360px] h-[360px] select-none flex-shrink-0">
      <style>{`
        @keyframes spin-cw { to { transform: rotate(360deg); } }
        @keyframes spin-ccw { to { transform: rotate(-360deg); } }
        @keyframes orb-float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-18px); } }
        @keyframes particle-drift { 0%,100% { transform: translate(0,0); opacity:0.5; } 50% { transform: translate(6px,-10px); opacity:1; } }
        @keyframes pulse-ring { 0%,100% { opacity:0.15; } 50% { opacity:0.3; } }
      `}</style>

      <div className="absolute inset-0 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(0,240,255,0.12) 0%, rgba(157,78,221,0.07) 45%, transparent 70%)", animation: "pulse-ring 6s ease-in-out infinite" }} />

      <div className="absolute inset-0 rounded-full"
        style={{ border: "1px solid rgba(0,240,255,0.18)", animation: "spin-cw 14s linear infinite", transformOrigin: "center" }}>
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
          style={{ background: "#00F0FF", boxShadow: "0 0 12px #00F0FF, 0 0 28px rgba(0,240,255,0.5)" }} />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
          style={{ background: "rgba(0,240,255,0.35)" }} />
      </div>

      <div className="absolute inset-[45px] rounded-full"
        style={{ border: "1px solid rgba(157,78,221,0.22)", animation: "spin-ccw 9s linear infinite", transformOrigin: "center" }}>
        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
          style={{ background: "#9D4EDD", boxShadow: "0 0 10px #9D4EDD, 0 0 22px rgba(157,78,221,0.5)" }} />
      </div>

      <div className="absolute inset-[88px] rounded-full"
        style={{ border: "1px solid rgba(255,255,255,0.07)", animation: "spin-cw 18s linear infinite", transformOrigin: "center" }}>
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
          style={{ background: "rgba(0,240,255,0.45)" }} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2 w-[112px] h-[112px] rounded-2xl"
          style={{
            background: "rgba(9,11,17,0.75)",
            border: "1px solid rgba(0,240,255,0.28)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 0 40px rgba(0,240,255,0.09), inset 0 1px 0 rgba(255,255,255,0.06)",
            animation: "orb-float 5.5s ease-in-out infinite",
          }}>
          <span className="text-[13px] font-mono font-bold tracking-widest" style={{ color: "#00F0FF" }}>PW.</span>
          <div className="w-10 h-px" style={{ background: "linear-gradient(to right, transparent, #00F0FF, transparent)" }} />
          <span className="text-[8px] font-mono tracking-widest text-white/30">UI · UX · DEV</span>
        </div>
      </div>

      {[
        { top: "9%", left: "18%", size: 3, color: "#00F0FF", delay: "0s", dur: "4s" },
        { top: "78%", left: "76%", size: 2, color: "#9D4EDD", delay: "1s", dur: "5s" },
        { top: "84%", left: "22%", size: 2, color: "#00F0FF", delay: "0.5s", dur: "3.5s" },
        { top: "17%", left: "73%", size: 3, color: "#9D4EDD", delay: "2s", dur: "6s" },
        { top: "50%", left: "5%", size: 1.5, color: "rgba(0,240,255,0.6)", delay: "1.5s", dur: "4.5s" },
      ].map((p, i) => (
        <div key={i} className="absolute rounded-full"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size, background: p.color, boxShadow: `0 0 6px ${p.color}`, animation: `particle-drift ${p.dur} ease-in-out infinite`, animationDelay: p.delay }} />
      ))}
    </div>
  );
}

// ── ToolCard ──────────────────────────────────────────────────────────────────

function ToolCard({ name, icon: Icon, desc }: { name: string; icon: React.ElementType; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative rounded-xl p-4 cursor-default"
      style={{
        background: hovered ? "rgba(0,240,255,0.04)" : "rgba(255,255,255,0.025)",
        border: hovered ? "1px solid rgba(0,240,255,0.32)" : "1px solid rgba(255,255,255,0.07)",
        boxShadow: hovered ? "0 0 22px rgba(0,240,255,0.07)" : "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start gap-3">
        <div className="rounded-lg p-1.5 flex-shrink-0"
          style={{ background: hovered ? "rgba(0,240,255,0.12)" : "rgba(255,255,255,0.05)", color: hovered ? "#00F0FF" : "rgba(255,255,255,0.35)", transition: "all 0.25s ease" }}>
          <Icon size={14} />
        </div>
        <div className="min-w-0">
          <div className="text-[13px] font-medium leading-tight" style={{ color: hovered ? "#fff" : "rgba(255,255,255,0.75)", transition: "color 0.25s ease" }}>{name}</div>
          <div className="text-[11px] text-white/30 mt-0.5 leading-relaxed">{desc}</div>
        </div>
      </div>
    </div>
  );
}

// ── TimelineNode ──────────────────────────────────────────────────────────────

function TimelineNode({ item, index, isLast }: { item: (typeof TIMELINE)[0]; index: number; isLast: boolean }) {
  const { ref, inView } = useInView(0.3);
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-6">
      {!isLast && (
        <div className="absolute left-[19px] top-10 bottom-0 w-px"
          style={{ background: inView ? "linear-gradient(to bottom, rgba(0,240,255,0.25), rgba(157,78,221,0.1), rgba(255,255,255,0.04))" : "rgba(255,255,255,0.05)", transition: "background 0.8s ease" }} />
      )}
      <div className="relative flex-shrink-0 mt-0.5">
        <div className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: inView ? (isLast ? "linear-gradient(135deg, #00F0FF, #9D4EDD)" : "rgba(0,240,255,0.1)") : "rgba(255,255,255,0.04)",
            border: inView ? (isLast ? "none" : "1px solid rgba(0,240,255,0.4)") : "1px solid rgba(255,255,255,0.1)",
            boxShadow: inView ? (isLast ? "0 0 24px rgba(0,240,255,0.45), 0 0 48px rgba(0,240,255,0.2)" : "0 0 14px rgba(0,240,255,0.18)") : "none",
            transition: "all 0.6s ease",
          }}>
          <span className="text-[10px] font-mono font-bold"
            style={{ color: inView ? (isLast ? "#090B11" : "#00F0FF") : "rgba(255,255,255,0.25)", transition: "color 0.6s ease" }}>
            {item.year.slice(2)}
          </span>
        </div>
      </div>
      <div className="pb-12 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
          <h3 className="text-[15px] font-semibold text-white/90">{item.role}</h3>
          <span className="text-sm font-mono" style={{ color: "#00F0FF" }}>@ {item.company}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar size={10} className="text-white/25" />
            <span className="text-[11px] text-white/40 font-mono">{item.period}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={10} className="text-white/25" />
            <span className="text-[11px] text-white/28 font-mono">{item.location}</span>
          </div>
        </div>
        <p className="text-sm text-white/38 leading-relaxed max-w-lg">{item.desc}</p>
      </div>
    </motion.div>
  );
}

// ── ProjectCard ───────────────────────────────────────────────────────────────

function ProjectCard({ project, isActive }: { project: (typeof PROJECTS)[0]; isActive: boolean }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: (e.clientX - rect.left) / rect.width - 0.5, y: (e.clientY - rect.top) / rect.height - 0.5 });
  }, []);

  return (
    <motion.div ref={cardRef}
      animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 36, scale: 0.98 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 rounded-2xl overflow-hidden"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", pointerEvents: isActive ? "auto" : "none" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}>
      <div className="h-full flex flex-col lg:flex-row">
        {/* Left: content */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full"
              style={{ border: `1px solid ${project.accent}45`, color: project.accent, background: `${project.accent}12` }}>
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-white/20">{project.year}</span>
          </div>

          <h2 className="text-4xl lg:text-[3.25rem] font-bold leading-tight mb-4 text-white/92"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            {project.title}
          </h2>
          <p className="text-[14px] text-white/38 leading-relaxed mb-7 max-w-md">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-md"
                style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.38)", border: "1px solid rgba(255,255,255,0.07)" }}>
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-7 mb-8">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-xl font-mono font-bold" style={{ color: project.accent }}>{m.value}</div>
                <div className="text-[10px] font-mono text-white/25 uppercase tracking-wider mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          <a href={project.behance} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] font-mono transition-all duration-200"
            style={{ color: project.accent }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}>
            <ExternalLink size={13} />
            View on Behance
          </a>
        </div>

        {/* Right: real project image with parallax */}
        <div className="hidden lg:flex w-[45%] relative overflow-hidden items-center justify-center p-8"
          style={{ background: `linear-gradient(140deg, ${project.accent}09 0%, rgba(9,11,17,0.92) 70%)` }}>

          {/* Blurred ambient background */}
          <div className="absolute inset-0 overflow-hidden">
            <ImageWithFallback src={project.image} alt=""
              className="w-full h-full object-cover opacity-10 blur-2xl scale-110" />
          </div>

          {/* Browser frame with real screenshot */}
          <div className="relative w-full max-w-[300px] transition-transform duration-300"
            style={{ transform: `perspective(700px) rotateY(${mousePos.x * -9}deg) rotateX(${mousePos.y * 5}deg)` }}>
            <div className="rounded-xl overflow-hidden"
              style={{ boxShadow: `0 28px 70px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.09), 0 0 40px ${project.accent}18` }}>
              {/* Chrome bar */}
              <div className="flex items-center gap-1.5 px-3 py-2.5"
                style={{ background: "rgba(10,12,18,0.95)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-2 h-2 rounded-full bg-red-500/70" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <div className="w-2 h-2 rounded-full bg-green-500/70" />
                <div className="flex-1 mx-2 h-4 rounded-md flex items-center justify-center text-[8px] font-mono"
                  style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.22)" }}>
                  behance.net/pasanwilliams
                </div>
              </div>
              {/* Real project screenshot */}
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full object-cover block object-top"
                style={{ height: "220px" }}
              />
            </div>

            {/* Floating status badge — parallax layer */}
            <div className="absolute -bottom-3 -right-6 w-[108px] rounded-xl p-2.5"
              style={{
                background: "rgba(10,12,18,0.88)",
                border: `1px solid ${project.accent}38`,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: `0 0 24px ${project.accent}20`,
                transform: `translateX(${mousePos.x * 14}px) translateY(${mousePos.y * 9}px)`,
                transition: "transform 0.3s ease",
              }}>
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#10B981", boxShadow: "0 0 6px #10B981" }} />
                <span className="text-[8px] font-mono font-bold tracking-wider" style={{ color: "#10B981" }}>LIVE</span>
              </div>
              <div className="h-1 rounded-full mb-1" style={{ background: `${project.accent}45`, width: "82%" }} />
              <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)", width: "58%" }} />
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(9,11,17,0.22), transparent)" }} />
        </div>
      </div>
    </motion.div>
  );
}

// ── MoreProjectCard ───────────────────────────────────────────────────────────

function MoreProjectCard({ project, index, inView }: { project: (typeof MORE_PROJECTS)[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href="https://www.behance.net/pasanwilliams"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col rounded-2xl overflow-hidden cursor-pointer"
      style={{
        border: hovered ? `1px solid ${project.accent}50` : "1px solid rgba(255,255,255,0.08)",
        boxShadow: hovered
          ? `0 0 0 1px ${project.accent}20, 0 16px 48px rgba(0,0,0,0.5), 0 0 32px ${project.accent}12`
          : "0 4px 24px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.32s ease",
        background: "#0d0f17",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── IMAGE ZONE — no text ever touches this area ── */}
      <div className="relative overflow-hidden" style={{ height: "178px" }}>
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top"
          style={{
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.55s ease",
          }}
        />
        {/* Subtle vignette — top & bottom edges only, never centre */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(9,11,17,0.25) 0%, transparent 30%, transparent 65%, rgba(9,11,17,0.55) 100%)" }} />

        {/* Accent corner glow on hover */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 100% 0%, ${project.accent}22 0%, transparent 55%)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.35s ease",
          }} />

        {/* View on Behance badge — top-right, appears on hover */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg"
          style={{
            background: "rgba(9,11,17,0.82)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: `1px solid ${project.accent}35`,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0) scale(1)" : "translateY(-6px) scale(0.9)",
            transition: "all 0.3s ease",
          }}>
          <ExternalLink size={10} style={{ color: project.accent }} />
          <span className="text-[9px] font-mono font-medium" style={{ color: project.accent }}>Behance</span>
        </div>
      </div>

      {/* ── GLASS FOOTER PANEL — dedicated dark surface, always readable ── */}
      <div
        className="flex-1 flex flex-col px-4 pt-3.5 pb-4"
        style={{
          background: hovered
            ? `linear-gradient(135deg, rgba(${project.accent === "#00F0FF" ? "0,240,255" : "157,78,221"},0.07) 0%, rgba(13,15,23,0.98) 60%)`
            : "rgba(13,15,23,0.98)",
          borderTop: `1px solid ${hovered ? project.accent + "30" : "rgba(255,255,255,0.06)"}`,
          transition: "background 0.35s ease, border-color 0.35s ease",
        }}
      >
        {/* Category pill + stats row */}
        <div className="flex items-center justify-between mb-2.5">
          <span
            className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded-full"
            style={{
              border: `1px solid ${project.accent}38`,
              color: project.accent,
              background: `${project.accent}10`,
            }}
          >
            {project.category}
          </span>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1" style={{ color: "rgba(255,255,255,0.35)" }}>
              <Eye size={10} />
              <span className="text-[10px] font-mono">{project.views}</span>
            </div>
            <div className="flex items-center gap-1" style={{ color: "rgba(255,255,255,0.35)" }}>
              <Heart size={10} />
              <span className="text-[10px] font-mono">{project.likes}</span>
            </div>
          </div>
        </div>

        {/* Title — always visible, high contrast */}
        <h3
          className="text-[15px] font-bold leading-snug mb-1.5"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            color: hovered ? "#ffffff" : "rgba(255,255,255,0.88)",
            transition: "color 0.25s ease",
          }}
        >
          {project.title}
        </h3>

        {/* Description — slides in on hover */}
        <div style={{
          overflow: "hidden",
          maxHeight: hovered ? "60px" : "0px",
          opacity: hovered ? 1 : 0,
          transition: "max-height 0.4s ease, opacity 0.3s ease",
          marginBottom: hovered ? "10px" : "0",
        }}>
          <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
            {project.desc}
          </p>
        </div>

        {/* Tag chips — always visible */}
        <div className="flex gap-1.5 flex-wrap mt-auto pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-mono px-2 py-0.5 rounded-md"
              style={{
                background: hovered ? `${project.accent}12` : "rgba(255,255,255,0.05)",
                color: hovered ? project.accent : "rgba(255,255,255,0.38)",
                border: `1px solid ${hovered ? project.accent + "28" : "rgba(255,255,255,0.08)"}`,
                transition: "all 0.28s ease",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

// ── InterestChip ──────────────────────────────────────────────────────────────

function InterestChip({
  item,
  delay,
  inView,
}: {
  item: { label: string; icon: React.ElementType };
  delay: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-start gap-2.5 rounded-xl p-4 cursor-default"
      style={{
        background: hovered ? "rgba(0,240,255,0.05)" : "rgba(255,255,255,0.03)",
        border: hovered ? "1px solid rgba(0,240,255,0.35)" : "1px solid rgba(255,255,255,0.07)",
        boxShadow: hovered ? "0 0 20px rgba(0,240,255,0.08)" : "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{
          background: hovered ? "rgba(0,240,255,0.14)" : "rgba(255,255,255,0.06)",
          color: hovered ? "#00F0FF" : "rgba(255,255,255,0.4)",
          transition: "all 0.25s ease",
        }}
      >
        <Icon size={15} />
      </div>
      <span
        className="text-[12px] font-medium leading-snug"
        style={{
          color: hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.65)",
          transition: "color 0.25s ease",
        }}
      >
        {item.label}
      </span>
    </motion.div>
  );
}

// ── SoftSkillBar ───────────────────────────────────────────────────────────────

function SoftSkillBar({
  skill,
  delay,
  inView,
}: {
  skill: { label: string; pct: number };
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          {/* Glowing dot indicator */}
          <div
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{
              background: "#9D4EDD",
              boxShadow: "0 0 6px rgba(157,78,221,0.7)",
            }}
          />
          <span className="text-[13px] font-medium text-white/80">{skill.label}</span>
        </div>
        <span
          className="text-[11px] font-mono font-bold tabular-nums"
          style={{ color: "#9D4EDD" }}
        >
          {skill.pct}%
        </span>
      </div>
      {/* Track */}
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: inView ? `${skill.pct}%` : "0%",
            background: "linear-gradient(to right, #9D4EDD, #00F0FF)",
            boxShadow: "0 0 8px rgba(157,78,221,0.4)",
            transition: `width 0.9s cubic-bezier(0.16,1,0.3,1) ${delay + 0.2}s`,
          }}
        />
      </div>
    </motion.div>
  );
}

// ── OfficeProjectCard ─────────────────────────────────────────────────────────

function OfficeProjectCard({ project, index, inView }: { project: (typeof OFFICE_PROJECTS)[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const isLive = project.status.includes("Live") || project.status.includes("Current");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-xl p-5 flex flex-col gap-3 cursor-default"
      style={{
        background: hovered ? `${project.accent}05` : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? project.accent + "38" : "rgba(255,255,255,0.07)"}`,
        borderLeft: `2px solid ${hovered ? project.accent : project.accent + "40"}`,
        boxShadow: hovered ? `0 0 24px ${project.accent}0c` : "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-[14px] font-semibold leading-snug"
            style={{ color: hovered ? "#fff" : "rgba(255,255,255,0.85)", fontFamily: "'Bricolage Grotesque', sans-serif", transition: "color 0.25s ease" }}>
            {project.name}
          </h3>
          <div className="text-[10px] font-mono mt-0.5" style={{ color: project.accent, opacity: 0.8 }}>
            {project.type}
          </div>
        </div>
        <span className="flex-shrink-0 flex items-center gap-1 text-[8px] font-mono px-2 py-0.5 rounded-full whitespace-nowrap"
          style={{
            background: isLive ? "rgba(16,185,129,0.1)" : `${project.accent}0e`,
            color: isLive ? "#10B981" : project.accent,
            border: `1px solid ${isLive ? "rgba(16,185,129,0.28)" : project.accent + "25"}`,
          }}>
          {isLive && <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#10B981", boxShadow: "0 0 5px #10B981" }} />}
          {project.status}
        </span>
      </div>

      <div className="text-[10px] font-mono text-white/22">{project.company}</div>

      <p className="text-[11px] leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.38)" }}>{project.desc}</p>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {project.tech.map((t) => (
          <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded-md"
            style={{
              background: hovered ? `${project.accent}10` : "rgba(255,255,255,0.04)",
              color: hovered ? project.accent : "rgba(255,255,255,0.32)",
              border: `1px solid ${hovered ? project.accent + "22" : "rgba(255,255,255,0.07)"}`,
              transition: "all 0.22s ease",
            }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ── FooterLink ────────────────────────────────────────────────────────────────

function FooterLink({ label, href, icon: Icon, accent, glowColor }: {
  label: string; href: string; icon: React.ElementType; accent: string; glowColor: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-4 rounded-2xl"
      style={{
        background: hovered ? glowColor : "rgba(255,255,255,0.025)",
        border: hovered ? `1px solid ${accent}50` : "1px solid rgba(255,255,255,0.07)",
        boxShadow: hovered ? `0 0 32px ${glowColor}, inset 0 0 18px ${glowColor}` : "none",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        color: hovered ? accent : "rgba(255,255,255,0.38)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <Icon size={18} />
      <span className="text-sm font-mono">{label}</span>
    </a>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const scrollProgress = useScrollProgress();
  const [activeProject, setActiveProject] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);

  const ctaRef = useRef<HTMLButtonElement>(null);
  const [ctaOffset, setCtaOffset] = useState({ x: 0, y: 0 });

  const handleCtaMove = useCallback((e: React.MouseEvent) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setCtaOffset({ x: (e.clientX - cx) * 0.32, y: (e.clientY - cy) * 0.32 });
  }, []);

  useEffect(() => {
    const update = () => {
      if (!projectsRef.current) return;
      const rect = projectsRef.current.getBoundingClientRect();
      const sectionH = projectsRef.current.clientHeight;
      const scrolledIn = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolledIn / (sectionH - window.innerHeight)));
      setActiveProject(Math.min(Math.floor(progress * PROJECTS.length), PROJECTS.length - 1));
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const { ref: heroRef, inView: heroInView } = useInView(0.05);
  const { ref: skillsRef, inView: skillsInView } = useInView(0.08);
  const { ref: interestsRef, inView: interestsInView } = useInView(0.1);
  const { ref: timelineRef, inView: timelineInView } = useInView(0.05);
  const { ref: moreRef, inView: moreInView } = useInView(0.05);
  const { ref: officeRef, inView: officeInView } = useInView(0.05);

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(0,240,255,0.2); border-radius: 9999px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(0,240,255,0.4); }
        * { scrollbar-width: thin; scrollbar-color: rgba(0,240,255,0.2) transparent; }
      `}</style>

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50"
        style={{ background: "rgba(9,11,17,0.78)", backdropFilter: "blur(22px)", WebkitBackdropFilter: "blur(22px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-[13px] font-mono font-bold tracking-[0.18em]" style={{ color: "#00F0FF" }}>PW.</span>
          <ul className="hidden md:flex items-center gap-8">
            {[{ label: "Work", href: "#work" }, { label: "Skills", href: "#skills" }, { label: "Timeline", href: "#timeline" }, { label: "Connect", href: "#connect" }].map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-[12px] font-mono text-white/38 hover:text-white/75 transition-colors duration-200 tracking-wide">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a href="#" download
              className="text-[11px] font-mono px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all duration-200"
              style={{ border: "1px solid rgba(157,78,221,0.35)", color: "#9D4EDD", background: "rgba(157,78,221,0.08)" }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "rgba(157,78,221,0.16)"; el.style.boxShadow = "0 0 22px rgba(157,78,221,0.22)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "rgba(157,78,221,0.08)"; el.style.boxShadow = "none"; }}>
              <Download size={11} />
              Download CV
            </a>
            <a href="https://www.behance.net/pasanwilliams" target="_blank" rel="noopener noreferrer"
              className="text-[11px] font-mono px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all duration-200"
              style={{ border: "1px solid rgba(0,240,255,0.28)", color: "#00F0FF", background: "rgba(0,240,255,0.06)" }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "rgba(0,240,255,0.13)"; el.style.boxShadow = "0 0 22px rgba(0,240,255,0.18)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "rgba(0,240,255,0.06)"; el.style.boxShadow = "none"; }}>
              <ExternalLink size={11} />
              Behance
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background: "rgba(255,255,255,0.04)" }}>
          <div className="h-full" style={{ width: `${scrollProgress * 100}%`, background: "linear-gradient(to right, #00F0FF, #9D4EDD)", boxShadow: "0 0 6px rgba(0,240,255,0.7)", transition: "width 0.05s linear" }} />
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="min-h-screen pt-14 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `linear-gradient(rgba(0,240,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.022) 1px, transparent 1px)`, backgroundSize: "64px 64px" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 65% 50%, rgba(157,78,221,0.09) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 40% 40% at 20% 80%, rgba(0,240,255,0.06) 0%, transparent 60%)" }} />

        {/* ── Left panel — dark surface with tighter grid ── */}
        <div className="absolute left-0 top-0 bottom-0 pointer-events-none" style={{ width: "62%" }}>
          {/* Panel surface */}
          <div className="absolute inset-0"
            style={{
              background: "rgba(11,13,21,0.82)",
              backgroundImage: "linear-gradient(rgba(0,240,255,0.038) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.038) 1px, transparent 1px)",
              backgroundSize: "46px 46px",
            }} />
          {/* Right edge fade into page */}
          <div className="absolute top-0 bottom-0 right-0 w-40 pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent, #090B11)" }} />
          {/* Right edge accent line */}
          <div className="absolute top-[8%] bottom-[8%] right-0 w-px pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(0,240,255,0.22), rgba(157,78,221,0.14), transparent)" }} />
          {/* Top edge fade */}
          <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, #090B11, transparent)" }} />
          {/* Bottom edge fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
            style={{ background: "linear-gradient(to top, #090B11, transparent)" }} />
          {/* Top-left corner glow */}
          <div className="absolute top-0 left-0 pointer-events-none"
            style={{ width: 320, height: 320, background: "radial-gradient(circle at 0% 0%, rgba(0,240,255,0.06) 0%, transparent 65%)" }} />
          {/* Bottom-left glow */}
          <div className="absolute bottom-0 left-0 pointer-events-none"
            style={{ width: 260, height: 260, background: "radial-gradient(circle at 0% 100%, rgba(157,78,221,0.05) 0%, transparent 65%)" }} />
        </div>

        {/* ── Pasan portrait — right corner ── */}
        <div className="absolute bottom-0 right-0 pointer-events-none"
          style={{
            width: "44%",
            height: "94%",
            zIndex: 2,
            WebkitMaskImage: [
              "linear-gradient(to right, transparent 0%, black 22%, black 80%, transparent 100%)",
              "linear-gradient(to bottom, transparent 0%, black 14%, black 88%, transparent 100%)",
            ].join(", "),
            WebkitMaskComposite: "destination-in",
            maskImage: [
              "linear-gradient(to right, transparent 0%, black 22%, black 80%, transparent 100%)",
              "linear-gradient(to bottom, transparent 0%, black 14%, black 88%, transparent 100%)",
            ].join(", "),
            maskComposite: "intersect",
          }}>
          <ImageWithFallback
            src={imgPortrait}
            alt="Pasan Williams"
            className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
            style={{ opacity: 0.52, filter: "brightness(0.82) saturate(0.78)" }}
          />
        </div>

        {/* ── Floating items — right decorative zone ── */}
        <style>{`
          @keyframes fi-float-a { 0%,100%{transform:translateY(0px) rotate(-1deg)} 50%{transform:translateY(-10px) rotate(1deg)} }
          @keyframes fi-float-b { 0%,100%{transform:translateY(0px) rotate(1deg)}  50%{transform:translateY(-14px) rotate(-1deg)} }
          @keyframes fi-float-c { 0%,100%{transform:translateY(0px)}               50%{transform:translateY(-8px)} }
          @keyframes fi-pulse   { 0%,100%{opacity:0.45} 50%{opacity:0.9} }
          @keyframes fi-orbit   { to{transform:rotate(360deg)} }
          @keyframes fi-orbit-r { to{transform:rotate(-360deg)} }
        `}</style>
        <div className="absolute right-0 top-0 bottom-0 pointer-events-none" style={{ width: "42%", zIndex: 3 }}>

          {/* Chip — Figma Design */}
          <div className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{ top: "19%", right: "14%", background: "rgba(9,11,17,0.75)", border: "1px solid rgba(0,240,255,0.25)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", boxShadow: "0 4px 20px rgba(0,0,0,0.4)", animation: "fi-float-a 5s ease-in-out infinite" }}>
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#00F0FF", boxShadow: "0 0 6px #00F0FF" }} />
            <span className="text-[9px] font-mono font-medium" style={{ color: "#00F0FF" }}>Figma · Design System</span>
          </div>

          {/* Chip — React / Next.js */}
          <div className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{ top: "40%", right: "8%", background: "rgba(9,11,17,0.75)", border: "1px solid rgba(157,78,221,0.25)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", boxShadow: "0 4px 20px rgba(0,0,0,0.4)", animation: "fi-float-b 6.5s ease-in-out infinite" }}>
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#9D4EDD", boxShadow: "0 0 6px #9D4EDD" }} />
            <span className="text-[9px] font-mono font-medium" style={{ color: "#9D4EDD" }}>React · Next.js</span>
          </div>

          {/* Stat badge */}
          <div className="absolute flex flex-col items-center px-4 py-2.5 rounded-xl"
            style={{ top: "60%", right: "18%", background: "rgba(9,11,17,0.8)", border: "1px solid rgba(0,240,255,0.14)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", boxShadow: "0 4px 24px rgba(0,0,0,0.4), 0 0 20px rgba(0,240,255,0.06)", animation: "fi-float-c 4.5s ease-in-out infinite 0.8s" }}>
            <span className="text-xl font-mono font-bold" style={{ color: "#00F0FF" }}>6+</span>
            <span className="text-[8px] font-mono text-white/30 tracking-widest uppercase mt-0.5">Yrs Exp</span>
          </div>

          {/* Open to Work chip */}
          <div className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{ top: "28%", right: "38%", background: "rgba(9,11,17,0.75)", border: "1px solid rgba(16,185,129,0.28)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", boxShadow: "0 4px 20px rgba(0,0,0,0.35)", animation: "fi-float-b 7s ease-in-out infinite 1.2s" }}>
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#10B981", boxShadow: "0 0 6px #10B981", animation: "fi-pulse 2s ease-in-out infinite" }} />
            <span className="text-[9px] font-mono font-medium" style={{ color: "#10B981" }}>Open to Work</span>
          </div>

          {/* Outer orbit ring */}
          <div className="absolute rounded-full pointer-events-none"
            style={{ top: "38%", right: "34%", width: 56, height: 56, border: "1px solid rgba(0,240,255,0.15)", animation: "fi-orbit 12s linear infinite" }}>
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
              style={{ background: "#00F0FF", boxShadow: "0 0 10px #00F0FF, 0 0 20px rgba(0,240,255,0.4)" }} />
          </div>
          {/* Inner orbit ring */}
          <div className="absolute rounded-full pointer-events-none"
            style={{ top: "41.5%", right: "37.5%", width: 30, height: 30, border: "1px solid rgba(157,78,221,0.2)", animation: "fi-orbit-r 8s linear infinite" }}>
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
              style={{ background: "#9D4EDD", boxShadow: "0 0 6px #9D4EDD" }} />
          </div>

          {/* Particles */}
          {[
            { t: "13%", r: "32%", s: 3,   c: "#00F0FF",              d: "0s",   dur: "4s"   },
            { t: "63%", r: "26%", s: 2,   c: "#9D4EDD",              d: "1.2s", dur: "5s"   },
            { t: "75%", r: "9%",  s: 2.5, c: "#00F0FF",              d: "0.6s", dur: "3.5s" },
            { t: "21%", r: "6%",  s: 2,   c: "#9D4EDD",              d: "2s",   dur: "6s"   },
            { t: "52%", r: "24%", s: 1.5, c: "rgba(0,240,255,0.55)", d: "1.5s", dur: "4.5s" },
            { t: "82%", r: "38%", s: 2,   c: "rgba(157,78,221,0.6)", d: "0.9s", dur: "5.5s" },
          ].map((p, i) => (
            <div key={i} className="absolute rounded-full"
              style={{ top: p.t, right: p.r, width: p.s, height: p.s, background: p.c, boxShadow: `0 0 5px ${p.c}`, animation: `fi-float-a ${p.dur} ease-in-out infinite`, animationDelay: p.d }} />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 py-24 w-full relative z-10">
          <div ref={heroRef} className="lg:max-w-[52%]">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.05 }}
                className="flex items-center gap-2 mb-7">
                <div className="w-2 h-2 rounded-full" style={{ background: "#00F0FF", boxShadow: "0 0 8px #00F0FF" }} />
                <span className="text-[11px] font-mono tracking-widest text-white/35 uppercase">Available Full-time · Matara, Sri Lanka</span>
              </motion.div>

              <div className="overflow-hidden mb-2">
                <motion.p initial={{ y: 50, opacity: 0 }} animate={heroInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="text-base font-mono text-white/28 tracking-wide">
                  Hello, I&apos;m Pasan Williams
                </motion.p>
              </div>

              <h1 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-bold leading-[1.06] tracking-tight mb-7"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                {[
                  { text: "UI/UX", gradient: false },
                  { text: "Engineer &", gradient: false },
                  { text: "Graphic", gradient: false },
                  { text: "Designer.", gradient: true },
                ].map((word, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span initial={{ y: 80, opacity: 0 }} animate={heroInView ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.18 + i * 0.09 }}
                      className="block"
                      style={word.gradient ? { background: "linear-gradient(135deg, #00F0FF 20%, #9D4EDD 80%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } : { color: "rgba(255,255,255,0.88)" }}>
                      {word.text}
                    </motion.span>
                  </div>
                ))}
              </h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.58 }}
                className="text-[14px] text-white/34 leading-relaxed mb-10 max-w-[420px]">
                Crafting intuitive digital products at the intersection of design beauty and engineering precision. From banking apps to edtech platforms — based in Sri Lanka, building for the world.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 18 }} animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.68 }} className="flex items-center gap-4">
                <motion.button ref={ctaRef}
                  animate={{ x: ctaOffset.x, y: ctaOffset.y }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  onMouseMove={handleCtaMove}
                  onMouseLeave={() => setCtaOffset({ x: 0, y: 0 })}
                  className="flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-[13px]"
                  style={{ background: "linear-gradient(135deg, #00F0FF 0%, #9D4EDD 100%)", color: "#090B11", fontFamily: "'Inter', sans-serif", boxShadow: "0 0 32px rgba(0,240,255,0.28), 0 4px 20px rgba(0,0,0,0.4)" }}>
                  View My Work
                  <ArrowRight size={15} />
                </motion.button>
                <a href="mailto:pasan@ingeniilanka.com" className="flex items-center gap-2 text-[13px] font-mono text-white/35 hover:text-white/65 transition-colors duration-200">
                  <Mail size={14} />
                  Get in touch
                </a>
              </motion.div>
            </div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 28 }} animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-20 pt-9 flex flex-wrap gap-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {[
              { value: "6+", label: "Years Experience" },
              { value: "5", label: "Companies" },
              { value: "8.8k", label: "Behance Views" },
              { value: "43", label: "Appreciations" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-mono font-bold mb-1" style={{ color: "#00F0FF" }}>{s.value}</div>
                <div className="text-[10px] font-mono text-white/28 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TECH BENTO GRID ─────────────────────────────────────────────────── */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(0,240,255,0.05) 0%, transparent 65%)" }} />
        <div ref={skillsRef} className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={skillsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-14">
            <span className="text-[11px] font-mono tracking-widest text-white/22 uppercase">02 · Capabilities</span>
            <h2 className="text-4xl font-bold text-white/90 mt-3" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Technical Depth</h2>
          </motion.div>

          {/* Row 1: Design + Code (wider) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
            {[
              { title: "Design Tools", subtitle: "Visual craft & prototyping", icon: Palette, color: "#00F0FF", bg: "rgba(0,240,255,0.1)", tools: DESIGN_TOOLS, delay: 0.1 },
              { title: "Development & Code", subtitle: "Web, mobile & engineering", icon: Code2, color: "#9D4EDD", bg: "rgba(157,78,221,0.12)", tools: CODE_TOOLS, delay: 0.18 },
            ].map((col) => (
              <motion.div key={col.title}
                initial={{ opacity: 0, y: 36 }} animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: col.delay }}
                className="rounded-2xl p-6"
                style={{ background: "rgba(255,255,255,0.018)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: col.bg, color: col.color }}>
                    <col.icon size={15} />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-white/80">{col.title}</div>
                    <div className="text-[10px] font-mono text-white/25">{col.subtitle}</div>
                  </div>
                </div>
                <div className={`grid gap-2 ${col.tools.length > 4 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
                  {col.tools.map((t) => <ToolCard key={t.name} name={t.name} icon={t.icon} desc={t.desc} />)}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: AI Toolkit (full width) + UI Libraries badge strip */}
          <motion.div
            initial={{ opacity: 0, y: 36 }} animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="rounded-2xl p-6"
            style={{ background: "rgba(255,255,255,0.018)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,240,255,0.08)", color: "#00F0FF" }}>
                  <Sparkles size={15} />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white/80">AI Toolkit</div>
                  <div className="text-[10px] font-mono text-white/25">Design · Coding · Generation</div>
                </div>
              </div>
              {/* UI Libraries strip */}
              <div className="flex flex-wrap gap-2">
                {["MUI", "React Bootstrap", "Metronic", "Tailwind CSS"].map((lib) => (
                  <span key={lib} className="text-[10px] font-mono px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(157,78,221,0.1)", color: "#9D4EDD", border: "1px solid rgba(157,78,221,0.25)" }}>
                    {lib}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-6">
              {AI_TOOLS.map((t) => <ToolCard key={t.name} name={t.name} icon={t.icon} desc={t.desc} />)}
            </div>

            {/* Velocity bars */}
            <div className="rounded-xl p-4" style={{ background: "rgba(0,240,255,0.03)", border: "1px solid rgba(0,240,255,0.1)" }}>
              <div className="text-[10px] font-mono text-white/28 uppercase tracking-wider mb-4">AI-Augmented Velocity</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-3">
                {[
                  { label: "Design → Code", pct: 92 },
                  { label: "Iteration Speed", pct: 85 },
                  { label: "Visual Quality", pct: 94 },
                ].map((b) => (
                  <div key={b.label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[10px] font-mono text-white/38">{b.label}</span>
                      <span className="text-[10px] font-mono" style={{ color: "#00F0FF" }}>{b.pct}%</span>
                    </div>
                    <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div className="h-full rounded-full"
                        style={{ width: skillsInView ? `${b.pct}%` : "0%", background: "linear-gradient(to right, #00F0FF, #9D4EDD)", transition: `width 1s ease ${skillsInView ? "0.6s" : "0s"}` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INTERESTS & SOFT SKILLS ──────────────────────────────────────────── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,240,255,0.04) 0%, transparent 70%)" }} />
        <div ref={interestsRef} className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={interestsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
            <span className="text-[11px] font-mono tracking-widest text-white/22 uppercase">03 · Beyond the Screen</span>
            <h2 className="text-4xl font-bold text-white/90 mt-3" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              Interests & Soft Skills
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 32 }} animate={interestsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.018)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,240,255,0.1)", color: "#00F0FF" }}>
                  <Sparkles size={15} />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white/80">Interests</div>
                  <div className="text-[10px] font-mono text-white/25">What drives me beyond work</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {INTERESTS.map((item, i) => (
                  <InterestChip key={item.label} item={item} delay={i * 0.07} inView={interestsInView} />
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 32 }} animate={interestsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.018)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(157,78,221,0.12)", color: "#9D4EDD" }}>
                  <Brain size={15} />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white/80">Soft Skills</div>
                  <div className="text-[10px] font-mono text-white/25">How I show up for my team</div>
                </div>
              </div>
              <div className="space-y-4">
                {SOFT_SKILLS.map((skill, i) => (
                  <SoftSkillBar key={skill.label} skill={skill} delay={i * 0.09} inView={interestsInView} />
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────────────────── */}
      <section id="timeline" className="py-32 relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 60% at 15% 50%, rgba(157,78,221,0.07) 0%, transparent 65%)" }} />
        <div ref={timelineRef} className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={timelineInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-14">
            <span className="text-[11px] font-mono tracking-widest text-white/22 uppercase">04 · Journey</span>
            <h2 className="text-4xl font-bold text-white/90 mt-3" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Career Arc</h2>
          </motion.div>
          <div className="max-w-2xl">
            {TIMELINE.map((item, i) => (
              <TimelineNode key={item.year} item={item} index={i} isLast={i === TIMELINE.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS STICKY SCROLL ─────────────────────────────────── */}
      <section id="work" className="py-20">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <span className="text-[11px] font-mono tracking-widest text-white/22 uppercase">05 · Work</span>
          <h2 className="text-4xl font-bold text-white/90 mt-3" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Featured Projects</h2>
        </div>

        <div ref={projectsRef} style={{ height: `${PROJECTS.length * 100}vh` }} className="relative">
          <div className="sticky top-14 h-[calc(100vh-56px)] flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full h-[min(82vh,680px)] relative">
              {PROJECTS.map((project, i) => (
                <ProjectCard key={project.id} project={project} isActive={activeProject === i} />
              ))}
              <div className="absolute -right-2 lg:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-20">
                {PROJECTS.map((_, i) => (
                  <button key={i}
                    onClick={() => {
                      if (!projectsRef.current) return;
                      const rect = projectsRef.current.getBoundingClientRect();
                      const sectionTop = window.scrollY + rect.top;
                      const sectionH = projectsRef.current.clientHeight;
                      const segH = (sectionH - window.innerHeight) / PROJECTS.length;
                      window.scrollTo({ top: sectionTop + i * segH, behavior: "smooth" });
                    }}
                    className="rounded-full transition-all duration-300"
                    style={{ width: activeProject === i ? 7 : 4, height: activeProject === i ? 7 : 4, background: activeProject === i ? "#00F0FF" : "rgba(255,255,255,0.2)", boxShadow: activeProject === i ? "0 0 10px #00F0FF" : "none" }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MORE PROJECTS GRID ────────────────────────────────────────────────── */}
      <section className="py-24">
        <div ref={moreRef} className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={moreInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
            <span className="text-[11px] font-mono tracking-widest text-white/22 uppercase">06 · More Work</span>
            <div className="flex items-end justify-between mt-3 flex-wrap gap-4">
              <h2 className="text-4xl font-bold text-white/90" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Full Portfolio</h2>
              <a href="https://www.behance.net/pasanwilliams" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[12px] font-mono transition-colors duration-200"
                style={{ color: "#00F0FF" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.65"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}>
                <ExternalLink size={13} />
                View all on Behance
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MORE_PROJECTS.map((project, i) => (
              <MoreProjectCard key={project.title} project={project} index={i} inView={moreInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL PROJECTS ───────────────────────────────────────────── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 65% 50% at 30% 50%, rgba(157,78,221,0.05) 0%, transparent 70%)" }} />
        <div ref={officeRef} className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={officeInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
            <span className="text-[11px] font-mono tracking-widest text-white/22 uppercase">07 · Professional Work</span>
            <div className="flex items-end justify-between mt-3 flex-wrap gap-4">
              <h2 className="text-4xl font-bold text-white/90" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Corporate Projects</h2>
              <p className="text-[12px] font-mono text-white/25 max-w-xs text-right leading-relaxed">
                Production software shipped across 4 companies — IoT, dashboards, mobile & enterprise platforms.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {OFFICE_PROJECTS.map((project, i) => (
              <OfficeProjectCard key={project.name} project={project} index={i} inView={officeInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <section id="connect" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0,240,255,0.07) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(0,240,255,0.3))" }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <span className="text-[11px] font-mono tracking-widest text-white/22 uppercase">08 · Connect</span>
            <h2 className="text-[clamp(2.8rem,6vw,5rem)] font-bold mt-4 mb-5 leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", background: "linear-gradient(135deg, rgba(255,255,255,0.92) 30%, rgba(255,255,255,0.35) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Let&apos;s Build
              <br />
              Something.
            </h2>
            <p className="text-[14px] text-white/30 max-w-sm mx-auto leading-relaxed">
              Open to full-time roles, freelance UI projects, and creative collaborations globally.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <FooterLink label="Behance Portfolio" href="https://www.behance.net/pasanwilliams" icon={ExternalLink} accent="#1769FF" glowColor="rgba(23,105,255,0.18)" />
            <FooterLink label="Email Pasan" href="mailto:pasan@ingeniilanka.com" icon={Mail} accent="#00F0FF" glowColor="rgba(0,240,255,0.12)" />
            <FooterLink label="Download CV" href="#" icon={Download} accent="#9D4EDD" glowColor="rgba(157,78,221,0.15)" />
          </div>

          {/* ── Contact + Referees ── */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* Contact Me */}
            <div className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-2 mb-1" style={{ borderLeft: "3px solid #00F0FF", paddingLeft: "10px" }}>
                <span className="text-[11px] font-mono font-bold tracking-[0.18em] uppercase" style={{ color: "#00F0FF" }}>Contact Me</span>
              </div>
              <div className="w-full h-px mb-5 mt-3" style={{ background: "rgba(255,255,255,0.06)" }} />
              <div className="space-y-4">
                {[
                  { icon: Phone,    label: "Mobile",   value: "(+94)77 - 5040330",                          href: "tel:+94775040330"                              },
                  { icon: Mail,     label: "Email",    value: "123williams93@gmail.com",                     href: "mailto:123williams93@gmail.com"                },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/pasanWilliams",              href: "https://www.linkedin.com/in/pasanWilliams"     },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(0,240,255,0.08)", color: "#00F0FF", transition: "background 0.2s ease" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(0,240,255,0.16)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(0,240,255,0.08)"}>
                      <Icon size={14} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-white/28 uppercase tracking-wider mb-0.5">{label}</div>
                      <div className="text-[13px] font-mono text-white/70 group-hover:text-white/90 transition-colors duration-200">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Referees */}
            <div className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-2 mb-1" style={{ borderLeft: "3px solid #9D4EDD", paddingLeft: "10px" }}>
                <span className="text-[11px] font-mono font-bold tracking-[0.18em] uppercase" style={{ color: "#9D4EDD" }}>Referees</span>
              </div>
              <div className="w-full h-px mb-5 mt-3" style={{ background: "rgba(255,255,255,0.06)" }} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    name: "Pasindu Piyathilaka",
                    role: "CTO",
                    company: "Block-stars (Pvt) Ltd",
                    address: "Green Garden, Konpola Road, Doratiyawa, Kurunegala",
                    email: "pasindu@gl.block-stars.com",
                    phone: "+94717570140",
                  },
                  {
                    name: "Kanishka Wijesekara",
                    role: "Senior Software Engineer",
                    company: "AirCanada",
                    address: "",
                    email: "kanishka.madhuranga@aircanada.ca",
                    phone: "+94768036385",
                  },
                ].map((ref) => (
                  <div key={ref.name} className="rounded-xl p-4"
                    style={{ background: "rgba(157,78,221,0.04)", border: "1px solid rgba(157,78,221,0.12)" }}>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(157,78,221,0.14)", color: "#9D4EDD" }}>
                        <User size={13} />
                      </div>
                      <div>
                        <div className="text-[12px] font-semibold text-white/85 leading-tight">{ref.name}</div>
                        <div className="text-[10px] font-mono mt-0.5" style={{ color: "#9D4EDD" }}>{ref.role}</div>
                      </div>
                    </div>
                    <div className="space-y-1.5 text-[10px] font-mono text-white/38">
                      <div className="text-white/55">{ref.company}</div>
                      {ref.address && <div className="leading-relaxed">{ref.address}</div>}
                      <a href={`mailto:${ref.email}`} className="block hover:text-white/65 transition-colors duration-150"
                        style={{ color: "#00F0FF", opacity: 0.75 }}>
                        {ref.email}
                      </a>
                      <a href={`tel:${ref.phone}`} className="block hover:text-white/65 transition-colors duration-150">
                        {ref.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <span className="text-[11px] font-mono text-white/18">© 2025 Pasan Williams · UI/UX Engineer · Matara, Sri Lanka</span>
            <span className="text-[11px] font-mono" style={{ color: "rgba(0,240,255,0.32)" }}>React · Figma · Bricolage Grotesque</span>
          </div>
        </div>
      </section>
    </div>
  );
}
