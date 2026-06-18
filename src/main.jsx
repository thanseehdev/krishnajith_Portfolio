import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Mail, Phone, MapPin, Plus, X, Award, Camera, PenTool, Video, Bot, Quote } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './styles.css'

const img = {
  hero: '/profile2.png',
  profile: '/model.png',
  project1: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85',
  project2: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85',
  project3: 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?auto=format&fit=crop&w=900&q=85',
  project4: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85',
  award: '/award.png',
  cert: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=85',
  social: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85',
  brand: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85',
  ui: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=85',
  ai: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=700&q=85',
  script: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=85',
  video: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=700&q=85',
}

const socialLinks = [
  ['Facebook', <FaFacebookF />],
  ['Instagram', <FaInstagram />],
  ['LinkedIn', <FaLinkedinIn />],
  ['WhatsApp', <FaWhatsapp />],
  ['Email', <MdEmail />]
];

const projects = [
  { title: 'RJ Atlas Digital AI Campaign', type: 'Poster design', image: img.project1, role: 'Copy + Creative' },
  { title: 'Adroom Social Reel Series', type: 'Video edit', image: img.project2, role: 'Media Manager' },
  { title: 'Brand Growth Content Pack', type: 'Social media', image: img.project3, role: 'Content Creator' },
  { title: 'AI Powered Ad Concepts', type: 'Prompt engineering', image: img.project4, role: 'AI Creator' },
]

const skills = [
  { no: '01', icon: PenTool, title: 'Writing', desc: 'Writing clear messages, blog posts, video scripts, and search-friendly content.', tags: ['Writing', 'Copywriting', 'SEO', 'Scripts'] },
  { no: '02', icon: Camera, title: 'Design', desc: 'Creating clean posters and social media posts using Canva.', tags: ['Canva', 'Posters', 'Social Media'] },
  { no: '03', icon: Video, title: 'Video Editing', desc: 'Shooting videos on iPhone and editing short reels using CapCut and InShot.', tags: ['iPhone', 'CapCut', 'InShot', 'Reels'] },
  { no: '04', icon: Bot, title: 'AI Tools', desc: 'Using AI tools to write copy, make ads, and edit videos faster.', tags: ['ChatGPT', 'Gemini', 'Claude', 'AI Video'] },
]

const gallery = [
  { no: '01', title: 'Poster Design Showcase', sub: '6–10 posters', image: img.brand },
  { no: '02', title: 'Video Portfolio', sub: 'Reels + QR links', image: img.video },
  { no: '03', title: 'Script Writing Portfolio', sub: 'Hooks, story, CTA', image: img.script },
  { no: '04', title: 'Social Media Projects', sub: 'Calendars + campaigns', image: img.social },
  { no: '05', title: 'AI Content Creation', sub: 'Ads, AI videos, prompts', image: img.ai },
]

const faqs = [
  ['What kind of projects do you work on?', 'I write posts, design posters, edit reels, and make AI content.'],
  ['Which tools do you use?', 'I use Canva, CapCut, ChatGPT, Claude, and other AI tools.'],
  ['Where are you located?', 'I live in Kannur, Kerala. I am open to remote and freelance work.'],
  ['What languages do you know?', 'I speak Malayalam and English.'],
]

function Pill({ children, dark = false }) {
  return (
    <span
      className={
        dark
          ? 'inline-flex rounded-full bg-[#eceff2] text-[#3f4650] px-3 py-1.5 text-[11px] font-semibold'
          : 'inline-flex rounded-full bg-[#eef0f1] text-[#5b626c] px-3 py-1.5 text-[11px] font-semibold'
      }
    >
      {children}
    </span>
  )
}

function SectionLabel({ children }) {
  return (
    <div className="text-[13px] font-semibold flex items-center gap-[7px] text-brand-ink">
      <span className="w-2 h-2 rounded-full bg-brand-red inline-block"></span>
      {children}
    </div>
  )
}

function Header() {
  return (
    <header className="flex items-center justify-between h-auto min-h-[56px] px-1 gap-2 md:h-[54px] md:px-[18px] lg:px-[36px]">
      <a className="font-montserrat font-extrabold italic text-[17px] tracking-[-1px] md:text-[19px] text-brand-ink" href="#top">
        krishnajith
      </a>
      <nav className="hidden md:flex items-center gap-6 lg:gap-[42px] text-[12px] font-semibold text-brand-ink">
        <a href="#projects" className="hover:text-brand-red transition-colors">Projects</a>
        <a href="#about" className="hover:text-brand-red transition-colors">About</a>
        <a href="#services" className="hover:text-brand-red transition-colors">Services</a>
      </nav>
    <div className="flex items-center gap-2">
  <a
    className="inline-flex items-center gap-2 rounded-full bg-[#05070a] text-white text-[11px] px-3 py-[9px] md:text-[12px] md:px-5 md:py-3 font-semibold whitespace-nowrap hover:bg-[#1f2937] transition-colors"
    href="/ThanseehCV-R.pdf"
    download
  >
    Download CV
  </a>

  <a
    className="w-[36px] h-[36px] rounded-full bg-brand-red text-white inline-flex items-center justify-center shrink-0 hover:bg-red-700 transition-colors"
    href="#contact"
  >
    <ArrowUpRight size={15} />
  </a>
</div>
    </header>
  )
}

function Hero() {
  return (
    <section
      className="relative h-[520px] min-[421px]:h-[min(620px,92vh)] md:h-[clamp(560px,70vh,700px)] rounded-[13px] md:rounded-[18px] overflow-hidden bg-[#cfd7d9]"
      id="top"
    >
      {/* Background Image */}
      <img
        className="w-full h-full object-cover object-[center_20%] saturate-[1.02] contrast-[1.02]"
        src={img.hero}
        alt="Professional portrait"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.08)_40%,rgba(255,255,255,0.5)_88%)] pointer-events-none" />

      {/* Bottom Fade (for readability 🔥) */}
      <div className="absolute inset-x-0 bottom-0 h-[140px] bg-gradient-to-t from-black/70 to-transparent z-[5]" />

      {/* Top Card */}
      <div className="absolute z-10 bg-white rounded-lg flex items-center gap-2.5 shadow-[0_20px_45px_rgba(0,0,0,0.1)] left-2.5 top-3.5 p-2 min-w-0 max-w-[calc(100%-20px)] min-[421px]:left-[14px] min-[421px]:top-[22px] min-[421px]:max-w-[calc(100%-28px)] md:left-[28px] md:top-[46px] md:p-[10px_13px] md:min-w-[220px]">
        <div className="w-[32px] h-[32px] md:w-[38px] md:h-[38px] rounded-lg bg-brand-red grid place-items-center text-white font-extrabold">
          K
        </div>
        <div>
          <b className="text-[12px] block font-bold text-brand-ink">
            KRISHNAJITH KR
          </b>
          <small className="text-[9px] text-[#777] block">
            Content creator
          </small>
        </div>
      </div>

      {/* Time */}
      <div className="absolute z-10 right-[34px] top-[60px] text-white hidden md:flex gap-[18px] text-[12px] leading-[1.1]">
        <b>
          {new Date().toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
          <br />
          {new Date().toLocaleDateString("en-IN", {
            timeZone: "Asia/Kolkata",
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </b>
      </div>

      {/* ✅ TEXT NOW INSIDE IMAGE (BOTTOM) */}
      <div className="absolute z-10 left-1/2 -translate-x-1/2 bottom-[20px] md:bottom-[40px] text-center text-white w-[min(88%,420px)] md:w-[min(530px,80%)] px-2">
        <p className="text-[13px] md:text-[15px] leading-[1.5] mb-4 [text-shadow:0_4px_16px_rgba(0,0,0,0.5)]">
          Helping brands grow with storytelling, simple designs, and social media.
        </p>

        
      </div>
    </section>
  );
}

function SocialBar() {
  return (
    <div className="grid grid-cols-2 gap-2.5 my-[18px] mb-[78px] md:grid-cols-3 md:gap-3 md:mb-[112px] lg:grid-cols-5">
      {socialLinks.map(([name, icon], idx) => (
        <a
          href="#contact"
          key={name}
          className={`${idx >= 4 ? 'hidden md:flex' : 'flex'} h-[50px] bg-white rounded-lg items-center gap-2.5 px-3 text-[12px] font-semibold text-brand-ink md:px-[18px] md:text-[13px] hover:shadow-md hover:-translate-y-[1px] transition-all`}
        >
          <b className="w-[18px] h-[18px] rounded bg-[#05070a] text-white inline-grid place-items-center text-[10px] font-extrabold font-montserrat shrink-0">{icon}</b>
          <span>{name}</span>
        </a>
      ))}
    </div>
  )
}

function AboutProjects() {
  return (
    <section id="about" className="grid grid-cols-1 gap-[22px] sm:gap-[28px] mx-2 mb-[72px] md:grid-cols-[1fr_1.2fr] md:gap-9 md:mx-[clamp(28px,4.2vw,64px)] lg:gap-[70px]">
      <div>
        <SectionLabel>About me</SectionLabel>
      </div>
      <div className="flex flex-col">
        <h2 className="text-[22px] min-[421px]:text-[24px] md:text-[30px] leading-[1.02] tracking-[-1.3px] m-0 mb-3 font-semibold text-brand-ink">
          Hello, I'm Krishnajith KR. I write content and design graphics.
        </h2>
        <p className="text-[14px] leading-[1.55] text-brand-muted m-0">
          I write posts, design posters, edit videos, and use AI tools. I make simple and clean content that helps brands connect with people.
        </p>
        <div className="flex gap-[7px] mt-[18px] flex-wrap">
          <Pill>Kannur, Kerala</Pill>
          <Pill>Malayalam</Pill>
          <Pill>English</Pill>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="mx-2 mb-[96px] md:mx-[clamp(28px,4.2vw,64px)]">
      <div className="grid grid-cols-1 gap-[22px] sm:gap-[28px] mx-2 mb-7 md:grid-cols-[1fr_1.2fr] md:gap-9 md:mx-0 lg:gap-[70px]">
        <SectionLabel>Selected projects</SectionLabel>
        <div>
          <h2 className="text-[22px] min-[421px]:text-[24px] md:text-[30px] leading-[1.02] tracking-[-1.3px] m-0 mb-3 font-semibold text-brand-ink">
            Here are some of my projects that turn ideas into clean and simple designs.
          </h2>
        </div>
      </div>
      <div className="flex gap-2 mt-[34px] mb-6">
        <button className="inline-flex items-center gap-2 rounded-full bg-[#05070a] text-white text-[12px] px-[14px] py-2.5 md:px-5 md:py-3 font-semibold whitespace-nowrap hover:bg-[#1f2937] transition-colors">
          View All Projects
        </button>
        <button className="w-[36px] h-[36px] rounded-full bg-brand-red text-white inline-flex items-center justify-center shrink-0 hover:bg-red-700 transition-colors">
          <ArrowUpRight size={14}/>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article className="bg-white rounded-[18px] p-[14px] shadow-[0_8px_20px_rgba(21,24,27,0.035)] hover:shadow-md transition-shadow" key={p.title}>
            <img className="w-full h-[190px] md:h-[218px] xl:h-[240px] object-cover rounded-[13px] block" src={p.image} alt={p.title}/>
            <div className="flex flex-col min-[421px]:flex-row justify-between gap-2.5 mt-3.5">
              <h3 className="text-[16px] m-0 font-medium text-brand-ink">{p.title}</h3>
              <small className="text-[10px] font-bold flex items-center gap-[3px] whitespace-nowrap text-[#20242a]">
                {p.type} <ArrowUpRight size={11}/>
              </small>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Awards() {
  return (
    <section className="mx-2 mb-[96px] md:mx-[clamp(28px,4.2vw,64px)]">
      <div className="grid grid-cols-1 gap-[22px] sm:gap-[28px] mx-2 mb-7 md:grid-cols-[1fr_1.2fr] md:gap-9 md:mx-0 lg:gap-[70px]">
        <SectionLabel>Awards & certifications</SectionLabel>
        <div>
          <h2 className="text-[22px] min-[421px]:text-[24px] md:text-[30px] leading-[1.02] tracking-[-1.3px] m-0 mb-3 font-semibold text-brand-ink">
            Certificates and learning
          </h2>
          <p className="text-[14px] leading-[1.55] text-brand-muted m-0">
            Certificates and skills I learned to make better designs.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-[22px] sm:gap-7 md:gap-5">
        <div className="flex flex-col gap-[18px]">
          <div className="bg-white rounded-2xl p-6 min-h-[230px] flex flex-col justify-between shadow-[0_8px_20px_rgba(21,24,27,0.02)]">
            <div>
              <Award size={28} className="text-brand-red mb-3" />
              <h3 className="text-[19px] leading-[1.1] my-2.5 mt-3 font-semibold text-brand-ink">Python Full Stack Development</h3>
              <p className="text-brand-muted text-[13px] leading-[1.55] mb-4">
                A section for certificates. You can add links or screenshots here.
              </p>
            </div>
            <div>
              <button className="inline-flex items-center gap-2 rounded-full bg-[#05070a] text-white text-[12px] px-[14px] py-2.5 md:px-5 md:py-3 font-semibold whitespace-nowrap hover:bg-[#1f2937] transition-colors">
                Add certificate link
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_20px_rgba(21,24,27,0.02)]">
              <h3 className="text-[19px] leading-[1.1] my-2.5 mt-3 font-semibold text-brand-ink">Content Marketing</h3>
              <p className="text-brand-muted text-[13px] leading-[1.55]">
                Learning about writing and social media.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-[0_8px_20px_rgba(21,24,27,0.02)]">
              <h3 className="text-[19px] leading-[1.1] my-2.5 mt-3 font-semibold text-brand-ink">Canva Certifications</h3>
              <img className="w-full h-[132px] rounded-xl object-cover mt-2" src={img.cert} alt="Certification placeholder"/>
            </div>
          </div>
        </div>
        
        <div className="relative rounded-[18px] overflow-hidden min-h-[498px] group">
          <img className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105" src={img.award} alt="Award visual placeholder"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <p className="absolute top-6 left-6 right-6 text-white text-[15px] leading-[1.4] font-medium [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
            A mix of writing, design, and new tools.
          </p>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="bg-brand-panel text-white rounded-[14px] p-[26px_18px] mb-[94px] md:rounded-[16px] md:p-[34px_54px]">
      <div className="flex flex-col md:flex-row justify-between gap-[30px] items-start mb-[34px]">
        <div>
          <div className="text-[13px] font-semibold flex items-center gap-[7px] text-white">
      <span className="w-2 h-2 rounded-full bg-brand-red inline-block"></span>
      SKILLS
    </div>
          {/* <h2 className="text-[22px] min-[421px]:text-[24px] md:text-[30px] leading-[1.07] tracking-[-1px] max-w-[720px] font-semibold mt-3">
            Simple and clean designs made for your brand
          </h2> */}
        </div>
        <a className="inline-flex items-center gap-2 rounded-full bg-white text-[#07090c] text-[12px] px-[14px] py-2.5 md:px-5 md:py-3 font-semibold whitespace-nowrap hover:bg-gray-100 transition-colors shrink-0" href="#contact">
          Explore Services <ArrowUpRight size={13}/>
        </a>
      </div>
      <div className="border-t border-white/15">
        {skills.map((s) => (
          <article className="grid grid-cols-[38px_1fr] gap-[14px] py-[34px] border-b border-white/15 md:grid-cols-[48px_180px_1fr_84px] md:gap-[18px] lg:grid-cols-[54px_230px_1fr_110px] lg:gap-[25px] items-center" key={s.title}>
            <div className="w-[34px] h-[34px] bg-brand-red rounded-full grid place-items-center text-[11px] font-bold text-white shrink-0">
              {s.no}
            </div>
            <h3 className="text-[20px] md:text-[24px] font-medium m-0">{s.title}</h3>
            <div className="col-start-2 md:col-auto">
              <p className="text-[13px] text-[#c9d0d8] m-0 mb-3 leading-[1.45]">
                {s.desc}
              </p>
              <div className="flex gap-1.5 flex-wrap">
                {s.tags.map(t => <Pill dark key={t}>{t}</Pill>)}
              </div>
            </div>
            <s.icon className="col-start-2 md:col-auto justify-self-start md:justify-self-end rounded-xl bg-gradient-to-br from-[#f6d8b2] to-[#3d6b80] p-1.5 text-white w-[86px] h-[74px] object-cover shrink-0" size={46}/>
          </article>
        ))}
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="mx-2 mb-[84px] md:mx-[clamp(28px,4.2vw,64px)]">
      <div className="grid grid-cols-1 gap-[22px] sm:gap-[28px] mx-2 mb-7 md:grid-cols-[1fr_1.2fr] md:gap-9 md:mx-0 lg:gap-[70px]">
        <SectionLabel>Work in my gallery</SectionLabel>
        <div>
          <h2 className="text-[22px] min-[421px]:text-[24px] md:text-[30px] leading-[1.02] tracking-[-1.3px] m-0 mb-3 font-semibold text-brand-ink">
            A collection of clean layouts, posters, and designs
          </h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1.25fr_1fr] gap-[18px] items-start">
        {gallery.map((g, i) => (
          <article className={`bg-white rounded-[14px] p-[15px] shadow-[0_8px_20px_rgba(21,24,27,0.02)] ${i === 1 ? 'sm:row-span-2 md:row-span-2' : ''}`} key={g.title}>
            <div className="flex gap-2.5 items-start">
              <span className="w-[25px] h-[25px] bg-brand-red text-white rounded-full grid place-items-center text-[10px] shrink-0">
                {g.no}
              </span>
              <div>
                <h3 className="text-[15px] m-0 mb-[2px] font-semibold text-brand-ink">{g.title}</h3>
                <small className="text-[9px] text-[#6f7780]">{g.sub}</small>
              </div>
              <ArrowUpRight size={14} className="ml-auto text-brand-red" />
            </div>
            <img className={`w-full object-cover rounded-[10px] mt-3 ${i === 1 ? 'h-[220px] md:h-[390px]' : 'h-[178px]'}`} src={g.image} alt={g.title}/>
            {i === 1 && (
              <p className="text-[12px] leading-[1.45] text-[#59616c] mt-3">
                A preview of my design work, roles, and results.
              </p>
            )}
          </article>
        ))}
      </div>
      
      <div className="flex gap-2 mt-[34px] mb-6">
        <button className="inline-flex items-center gap-2 rounded-full bg-[#05070a] text-white text-[12px] px-[14px] py-2.5 md:px-5 md:py-3 font-semibold whitespace-nowrap hover:bg-[#1f2937] transition-colors">
          Load More
        </button>
        <button className="w-[36px] h-[36px] rounded-full bg-brand-red text-white inline-flex items-center justify-center shrink-0 hover:bg-red-700 transition-colors">
          <ArrowUpRight size={14}/>
        </button>
      </div>
    </section>
  )
}

function ExperienceScripts() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-[22px] sm:gap-[28px] md:gap-5 mx-2 md:mx-[clamp(28px,4.2vw,64px)] mb-[96px]">
      <div className="bg-white rounded-[18px] p-8 shadow-[0_8px_20px_rgba(21,24,27,0.02)]">
        <SectionLabel>Work experience</SectionLabel>
        <div className="flex gap-[18px] border-t border-[#e6e8eb] py-[26px] mt-[22px]">
          <span className="w-[34px] h-[34px] rounded-full bg-brand-red text-white grid place-items-center text-[11px] font-bold shrink-0">01</span>
          <div>
            <h3 className="text-[22px] leading-[1.05] m-0 mb-2 font-semibold text-brand-ink">RJ Atlas Digital AI</h3>
            <p className="text-brand-muted text-[13px] leading-[1.5] m-0">Content Writer, Poster Designer, and AI Creator</p>
          </div>
        </div>
        <div className="flex gap-[18px] border-t border-[#e6e8eb] py-[26px]">
          <span className="w-[34px] h-[34px] rounded-full bg-brand-red text-white grid place-items-center text-[11px] font-bold shrink-0">02</span>
          <div>
            <h3 className="text-[22px] leading-[1.05] m-0 mb-2 font-semibold text-brand-ink">Adroom</h3>
            <p className="text-brand-muted text-[13px] leading-[1.5] m-0">Media Manager and Video Editor</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-[18px] p-8 flex flex-col justify-between shadow-[0_8px_20px_rgba(21,24,27,0.02)]">
        <div>
          <SectionLabel>Script writing samples</SectionLabel>
          <h2 className="text-[22px] leading-[1.05] m-0 mb-2 mt-4 font-semibold text-brand-ink">
            Restaurant Promo, Real Estate, Event Videos, and Holiday Ads
          </h2>
        </div>
        <p className="text-brand-muted text-[13px] leading-[1.5] m-0">
          <b className="text-brand-ink">Format:</b> Hook, Story, Call to Action. Add your video scripts here.
        </p>
      </div>
    </section>
  )
}

function FAQContact() {
  const [openFaq, setOpenFaq] = React.useState(0)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-[22px] sm:gap-[28px] md:gap-[48px] mx-2 md:mx-[clamp(28px,4.2vw,64px)] mb-[92px]">
      <div className="flex flex-col gap-4">
        <SectionLabel>Frequently asked questions</SectionLabel>
        <h2 className="text-[22px] min-[421px]:text-[24px] md:text-[30px] leading-[1.05] tracking-[-1.2px] font-semibold text-brand-ink">
          Frequently asked questions about my work and tools
        </h2>
        <img className="w-full h-[350px] object-cover rounded-[14px]" src={img.profile} alt="Profile placeholder"/>
      </div>

      <div className="flex flex-col gap-2.5">
        {faqs.map((f, i) => {
          const isOpen = openFaq === i

          return (
            <button
              type="button"
              className={`w-full bg-white rounded-xl p-5 flex justify-between items-start gap-4 text-left cursor-pointer border-0 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(21,24,27,0.06)] ${
                isOpen ? 'shadow-[0_14px_32px_rgba(21,24,27,0.08)]' : ''
              }`}
              key={f[0]}
              onClick={() => toggleFaq(i)}
              aria-expanded={isOpen}
            >
              <div className="flex-1">
                <small className="text-[#9ca3aa] font-bold">{String(i + 1).padStart(2, '0')}</small>
                <h3 className="text-[15px] leading-[1.2] my-1 font-semibold text-brand-ink">{f[0]}</h3>
                {isOpen && <p className="text-[12px] text-[#5d6570] leading-[1.45] mt-2">{f[1]}</p>}
              </div>

              {isOpen ? (
                <X size={16} className="shrink-0 mt-1 text-brand-red" />
              ) : (
                <Plus size={16} className="shrink-0 mt-1 text-brand-muted" />
              )}
            </button>
          )
        })}
      </div>
    </section>
  )
}



function Footer() {
  return (
    <footer id="contact" className="bg-[#0d1218] text-white overflow-hidden mx-[-12px] px-[22px] pb-[34px] md:mx-[-22px] md:px-[64px] md:pb-[44px]">
 <div className="w-full flex justify-center">
  <h2 className="text-center font-montserrat text-[clamp(56px,20vw,82px)] md:text-[clamp(85px,18vw,220px)] tracking-[-5px] md:tracking-[-12px] leading-[0.72] mb-10 font-black">
    Krishnajith
  </h2>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr] gap-9 lg:gap-[60px]">
        <div className="flex flex-col gap-4">
          
          <div className="text-[13px] font-semibold flex items-center gap-[7px] text-white">
      <span className="w-2 h-2 rounded-full bg-brand-red inline-block"></span>
      Let's work together
    </div>
          <h3 className="text-[24px] leading-[1.1] max-w-[370px] font-semibold">
            Open for freelance work and projects
          </h3>
          <form className="flex gap-2">
            <input
              className="h-[42px] w-[min(100%,260px)] md:w-[220px] bg-white border-0 rounded-full px-[18px] text-black outline-none"
              placeholder="Email"
            />
            <button className="w-[36px] h-[36px] rounded-full bg-brand-red text-white inline-flex items-center justify-center shrink-0 hover:bg-red-700 transition-colors">
              <ArrowUpRight size={14}/>
            </button>
          </form>
        </div>
        
        <div>
          <h4 className="text-[14px] m-0 mb-[18px] font-semibold text-white">Quick links</h4>
          <div className="flex flex-col gap-2">
            <a href="#top" className="flex items-center gap-2 text-[#d5dae0] text-[13px] hover:text-white transition-colors">Home</a>
            <a href="#projects" className="flex items-center gap-2 text-[#d5dae0] text-[13px] hover:text-white transition-colors">Projects</a>
            <a href="#services" className="flex items-center gap-2 text-[#d5dae0] text-[13px] hover:text-white transition-colors">Services</a>
            <a href="#about" className="flex items-center gap-2 text-[#d5dae0] text-[13px] hover:text-white transition-colors">About</a>
            <a href="#contact" className="flex items-center gap-2 text-[#d5dae0] text-[13px] hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div>
          <h4 className="text-[14px] m-0 mb-[18px] font-semibold text-white">Contact</h4>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-[#d5dae0] text-[13px]">
              <Phone size={14} className="text-[#aab0b8]" /> +91 00000 00000
            </p>
            <p className="flex items-center gap-2 text-[#d5dae0] text-[13px]">
              <Mail size={14} className="text-[#aab0b8]" /> yourmail@example.com
            </p>
            <p className="flex items-center gap-2 text-[#d5dae0] text-[13px]">
              <span className="w-[14px] h-[14px] rounded bg-[#aab0b8] text-[#0d1218] inline-grid place-items-center text-[8px] font-extrabold font-montserrat shrink-0">
                in
              </span>{' '}
              linkedin.com/in/krishnajith
            </p>
            <p className="flex items-center gap-2 text-[#d5dae0] text-[13px]">
              <MapPin size={14} className="text-[#aab0b8]" /> Kannur, Kerala
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-[60px] flex justify-between items-center text-[#aab0b8] text-[11px] gap-4 flex-wrap border-t border-white/10 pt-6">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>©2026 portfolio</span>
      </div>
    </footer>
  )
}

function App() {
  return (
    <main className="min-h-screen w-full py-0 md:py-6 bg-[#e9ebed]">
      <div className="mx-auto bg-brand-bg rounded-[2px] shadow-[0_12px_40px_rgba(20,20,20,0.04)] w-full max-w-none p-3 pb-0 sm:w-[96%] sm:max-w-[920px] sm:p-[22px] sm:pb-0 md:w-[94%] md:max-w-[1180px] lg:w-[92%] lg:max-w-[1260px] xl:w-[90%] xl:max-w-[1360px]">
        <Header />
        <Hero />
        <SocialBar />
        <AboutProjects />
        <Projects />
        <Awards />
        <Services />
        <Gallery />
        <ExperienceScripts />
        <FAQContact />
    
        <Footer />
      </div>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
