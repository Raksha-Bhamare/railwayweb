import { useState } from "react";
import { HamburgerButton } from "./shared";
import { SendIcon } from "./moduleIcons";
import { ChevronDownIcon } from "./icons";
import { useUi } from "../context/UiContext";
import { CHAT_DPRS } from "../data/dprData";

const STATIC_REPLY =
  "This is the static build — live answers need the AiEnsured backend.";

export default function ChatBot() {
  const { openDrawer } = useUi();
  const [dpr, setDpr] = useState(CHAT_DPRS[0]);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");

  const send = (event) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages((current) => [
      ...current,
      { role: "user", text },
      { role: "bot", text: STATIC_REPLY },
    ]);
    setDraft("");
  };

  return (
    <div className="shell-bg flex h-dvh overflow-hidden font-roboto text-slate-100">
      <aside className="relative z-10 flex w-72 shrink-0 flex-col gap-4 border-r border-white/5 bg-black/40 p-4 backdrop-blur">
        <HamburgerButton onClick={openDrawer} />
        <img
          src="/assets/aiensured-logo.png"
          alt="aiensured"
          className="w-[183px] shrink-0 self-start"
        />

        <div className="relative mt-2 w-[196px]">
          <select
            value={dpr}
            onChange={(e) => setDpr(e.target.value)}
            aria-label="Select DPR"
            className="h-14 w-full appearance-none rounded-xl border border-white/10 bg-[#0d1626]/80 py-4 pl-3.5 pr-9 text-[16px] text-[#f8f9fa] outline-none transition hover:border-cyan-300/40 focus:border-cyan-300/70 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.16)]"
          >
            {CHAT_DPRS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>

        <button
          type="button"
          onClick={() => setMessages([])}
          className="h-14 w-[196px] rounded-xl border border-white/10 bg-[#0d1626]/80 px-3.5 text-left text-[16px] text-white transition hover:border-cyan-300/40 hover:bg-[#101c31]"
        >
          Clear Chat
        </button>
      </aside>

      <main className="relative z-10 flex min-w-0 flex-1 flex-col">
        <div className="flex-1 space-y-3 overflow-y-auto p-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[16px] leading-relaxed ${
                  message.role === "user"
                    ? "rounded-br-md bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] font-medium text-white shadow-[0_10px_28px_-12px_rgba(34,211,238,0.55)]"
                    : "rounded-bl-md border border-white/10 bg-[#101a2c] text-slate-300"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={send} className="flex items-center gap-3 border-t border-white/5 bg-black/20 p-4 backdrop-blur">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type here to chat..."
            className="h-[60px] min-w-0 flex-1 rounded-full border border-white/10 bg-[#0d1626]/70 px-4 text-[16px] text-[#f8f9fa] outline-none transition placeholder:text-slate-500 hover:border-cyan-300/40 focus:border-cyan-300/70 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.16)]"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-[#04101f] shadow-[0_10px_26px_-10px_rgba(34,211,238,0.75)] transition hover:brightness-110"
          >
            <SendIcon className="h-5 w-5" />
          </button>
        </form>
      </main>
    </div>
  );
}
