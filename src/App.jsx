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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
              Personal Insurance Advice
              <span className="block text-slate-600 font-normal mt-2">
                Supported by Modern Intelligence
              </span>
            </h1>

            <p className="mt-4 text-xl text-slate-600">
              With {agent.name}, {agent.title}
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
    Schedule a Smart Website Walkthrough
  </a>

  <a
    href={`tel:${agent.phone.replace(/\D/g, "")}`}
    className="text-slate-600 hover:text-slate-900 text-sm"
  >
    Or call {agent.name} directly
  </a>
</div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
              className="rounded-xl"
              alt="Advisory"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src={agent.photo} alt={agent.name} className="rounded-2xl shadow-lg" />

          <div>
            <h3 className="text-3xl font-semibold">{agent.name}</h3>
            <p className="mt-3 text-slate-700">
              A client-first insurance professional focused on clarity,
              protection, and long-term confidence — not corporate scripts.
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Independent | Personalized guidance | Modern approach
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href={`tel:${agent.phone.replace(/\D/g, "")}`}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Call {agent.name}
              </a>

              <Link
  to="/book"
  className="bg-blue-600 text-white px-6 py-3 rounded-lg"
>
  Book a Smart Website Walkthrough
</Link>
            </div>
          </div>
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

  

    <div className="mt-8 flex flex-col items-center gap-4">
  <a
    href="/book"
    className="inline-flex items-center justify-center
               bg-blue-600 hover:bg-blue-700
               text-white font-medium
               px-8 py-4 rounded-lg
               transition-colors duration-200"
  >
    Schedule a Smart Website Walkthrough
  </a>

  <a
    href={`tel:${agent.phone.replace(/\D/g, "")}`}
    className="text-slate-600 hover:text-slate-900 text-sm"
  >
    Or call {agent.name} directly
  </a>
</div>


  </div>
</section>


      {/* FOOTER */}
      <footer className="py-16 bg-slate-50 border-t border-slate-200 text-center text-sm text-slate-500">
        <p>SV Code Advisory — Independent Insurance Guidance</p>
        <p className="mt-2">Coverage subject to underwriting.</p>
      </footer>

      {/* AI CHAT */}
      <div className="fixed bottom-6 right-6 bg-white border border-slate-200 shadow-lg rounded-full p-4">
        <MessageSquare className="text-blue-600" />
      </div>
    </div>
  );
}

