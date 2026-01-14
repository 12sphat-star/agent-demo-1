import AIAssistant from "./components/AIAssistant";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { agent } from "./config/agent";
import {
  Menu,
  X,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  Shield,
  Users,
  Briefcase,
  Award,
  CheckCircle,
} from "lucide-react";


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAI, setShowAI] = useState(false);

  useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 40);

    if (window.scrollY > 600) {
      setShowAI(true);
    }
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  const services = [
    {
      icon: <Shield />,
      title: "Business Insurance",
      text: "Independent guidance to protect your company and operations.",
      items: ["General Liability", "Workers Comp", "Property", "Professional Liability"],
    },
    {
      icon: <Users />,
      title: "Life & Health",
      text: "Coverage strategies built around your family’s needs.",
      items: ["Term Life", "Whole Life", "Health Plans", "Disability"],
    },
    {
      icon: <Briefcase />,
      title: "Commercial Auto",
      text: "Protection for business vehicles and fleets.",
      items: ["Fleet Coverage", "Cargo", "Liability", "Physical Damage"],
    },
    {
      icon: <Award />,
      title: "Specialty Coverage",
      text: "Solutions for complex risks and professional exposure.",
      items: ["Cyber", "E&O", "Umbrella", "Bonds"],
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-900">

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 ${scrolled ? "bg-white border-b border-slate-200" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-semibold text-xl">
            By: 12 Stone <span className="text-slate-500 font-normal">— Smart Website™</span>
          </div>

          <div className="hidden md:flex gap-8 items-center text-sm font-medium">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <Link
  to="/book"
  className="bg-blue-600 text-white px-6 py-3 rounded-lg"
>
  Book a Smart Website Walkthrough
</Link>
            <a
              href={`tel:${agent.phone.replace(/\D/g, "")}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <Phone size={16} /> Call Now
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3">
            <a href="#about" className="block">About</a>
            <a href="#services" className="block">Services</a>
            <a href="#book" className="block">Contact</a>
          </div>
        )}
      </nav>


      {/* HERO */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
  A Smart Website Built for Insurance Professionals
  <span className="block text-slate-600 font-normal mt-2">
    Not a corporate template — built around <strong>you</strong>
  </span>
</h1>

           <p className="mt-4 text-xl text-slate-600">
  See how your name, your services, and your workflow
  can be presented professionally — without relying on an IMO website.
</p>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              A professional online presence designed to help insurance professionals
              build trust, explain complex topics clearly, and engage clients with confidence.
            </p>
            <p className="mt-4 text-sm text-slate-500">
  ✔ Clients can book appointments online • ✔ Works 24/7 • ✔ No corporate branding
</p>

            <div className="mt-8 flex flex-col items-center gap-4">
  <a
  href="/book"
  className="inline-flex items-center justify-center
             bg-blue-600 hover:bg-blue-700
             text-white font-medium
             px-8 py-4 rounded-lg
             transition-colors duration-200"
>
  See How This Would Look for Your Brand
</a>
<p className="mt-3 text-sm text-slate-500">
  No obligation. Just a quick walkthrough of what’s possible.
</p>

  <a
    href={`tel:${agent.phone.replace(/\D/g, "")}`}
    className="text-slate-600 hover:text-slate-900 text-sm"
  >
    Or call {agent.name} directly
  </a>
</div>
          </div>


         <div className="bg-white rounded-2xl shadow-xl p-6 flex justify-center">
  <img
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
    className="rounded-xl w-3/4 max-w-md"
    alt="Insurance professional at work"
  />
</div>


        </div>
      </section>
{/* TRUST STRIP */}
<section className="py-8 bg-slate-50 border-t border-b border-slate-200">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <p className="text-lg text-slate-700 max-w-4xl mx-auto">
      This Smart Website is built to help insurance professionals present
      themselves clearly, professionally, and confidently — before a
      conversation ever begins.
    </p>
  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src={agent.photo} alt={agent.name} className="rounded-2xl shadow-lg" />

          <div>
            <h3 className="text-3xl font-semibold">{agent.name}</h3>
           <p className="text-lg text-slate-700 mt-3 max-w-md">
  An independent insurance professional who focuses on clarity,
  protection, and long-term confidence — not corporate scripts
  or one-size-fits-all advice.
</p>

<p className="text-sm text-slate-500 mt-2">
  Independent | Client-first | Modern approach
</p>

<div className="mt-8 max-w-xl space-y-4 text-slate-600">
  <p>
    This Smart Website is designed to support how insurance professionals
    actually work — educating clients, answering real questions, and
    building trust before the first conversation.
  </p>

  <p>
    Instead of directing prospects to a generic corporate or IMO website,
    this platform keeps the focus on <strong>you</strong> — your name,
    your expertise, and your process.
  </p>

  <p>
    The goal is simple: help clients feel informed, comfortable,
    and confident before they ever schedule a call.
  </p>


  
            </div>
          </div>
        </div>
      </section>
      {/* WHY THIS WEBSITE */}
<section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-semibold mb-6">
      Why This Smart Website Works
    </h2>

    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
      This Smart Website is designed to reflect how an independent insurance
      professional actually works — educating clients, building trust, and
      guiding decisions without pressure.
    </p>

    <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-6">
      Instead of sending prospects to a generic corporate or IMO website, this
      platform puts <strong>you</strong> at the center of the experience — your
      name, your services, your explanations, and your workflow.
    </p>

    <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-6">
      The result is a clean, modern online presence that helps clients feel
      confident before they ever pick up the phone or schedule a conversation.
    </p>
  </div>
</section>


      {/* SERVICES */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-16">
            Insurance Solutions Built Around You
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6">
                <div className="text-blue-600 mb-4">{s.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{s.text}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* CONTACT */}
<section id="contact" className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-semibold mb-6">
      Schedule a Conversation
    </h2>

    <p className="text-slate-600 mb-4">
      {agent.title}
    </p>

  

   <div className="flex gap-4 justify-center flex-wrap">
  {/* PRIMARY CTA */}
  <a
    href="/book"
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
  >
    Book a Smart Website Walkthrough
  </a>

  {/* SECONDARY CTA */}
  <a
    href={`tel:${agent.phone.replace(/\D/g, "")}`}
    className="border border-slate-300 px-6 py-3 rounded-lg text-slate-700 font-medium"
  >
    Call {agent.name}
  </a>
  </div>

  </div>
</section>

{/* FOOTER */}
<footer className="py-16 bg-slate-50 border-t border-slate-200 text-center text-sm text-slate-500">
  <p>SV Code Advisory — Independent Insurance Guidance</p>
  <p className="mt-2">Coverage subject to underwriting.</p>
</footer>
{/* AI Assistant Button */}
<div
  className="fixed bottom-6 right-6 bg-white border border-slate-200
             shadow-lg rounded-full p-4 z-50 cursor-pointer
             hover:shadow-xl transition"
  onClick={() => {
    window.open("/book", "_self");
  }}
>
  <MessageSquare className="text-blue-600" />
</div>
    </div>
  );
}
