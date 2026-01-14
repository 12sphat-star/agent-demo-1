import React from "react";
import { agent } from "../config/agent";

export default function Book() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Book a Smart Website Walkthrough
          </h1>

          <p className="text-lg text-slate-600 mb-6">
            See how this website is designed to showcase <strong>you</strong> —
            your brand, your approach, and how clients connect with you.
          </p>

          <p className="text-slate-600 mb-10">
            Walk through the features, ask questions, and see how this can be
            customized for your business.
          </p>

  {/* GHL BOOKING CALENDAR */}
<div className="max-w-3xl mx-auto">
  <iframe
    src="https://api.leadconnectorhq.com/widget/booking/Ag1H6yuBP7fTkgqLqeBM"
    style={{
      width: "100%",
      height: "560px",
      border: "none",
      borderRadius: "12px"
    }}
    title="Schedule a Smart Website Walkthrough"
  />
</div>


          <p className="text-sm text-slate-500 mt-6">
            Prefer to talk now?{" "}
            <a
              href={`tel:${agent.phone.replace(/\D/g, "")}`}
              className="text-blue-600 font-medium"
            >
              Call {agent.phone}
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}
