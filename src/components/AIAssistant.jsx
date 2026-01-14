import { MessageSquare, X } from "lucide-react";
import { useState } from "react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white
                   p-4 rounded-full shadow-lg hover:bg-blue-700"
        aria-label="Open AI assistant"
      >
        <MessageSquare />
      </button>

      {/* Assistant Panel */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-80 bg-white
                        border border-slate-200 rounded-xl shadow-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-slate-900">AI Assistant</h4>
            <button onClick={() => setOpen(false)}>
              <X className="text-slate-500 hover:text-slate-700" size={18} />
            </button>
          </div>

          <p className="text-sm text-slate-600">
            I can help answer insurance questions or help book a walkthrough.
          </p>

          <a
            href="/book"
            className="inline-block mt-3 text-sm font-medium text-blue-600 hover:underline"
          >
            Schedule a conversation →
          </a>
        </div>
      )}
    </>
  );
}
