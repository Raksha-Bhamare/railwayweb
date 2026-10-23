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
    <div className="flex h-dvh overflow-hidden bg-[#0d0e12] font-roboto text-slate-100">
      <aside className="flex w-72 shrink-0 flex-col gap-4 border-r border-slate-800/60 bg-black p-4">
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
            className="h-14 w-full appearance-none rounded-md bg-[#212529] py-4 pl-3 pr-9 text-[16px] text-[#f8f9fa] outline-none transition focus:border-[#adb5bd]"
          >
            {CHAT_DPRS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#343a40]" />
        </div>

        <button
          type="button"
          onClick={() => setMessages([])}
          className="h-14 w-[196px] rounded-lg bg-[#212529] px-3 text-left text-[16px] text-white transition hover:bg-[#2c3034]"
        >
          Clear Chat
        </button>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex-1 space-y-3 overflow-y-auto p-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[16px] leading-relaxed ${
                  message.role === "user"
                    ? "bg-[#343a40] text-slate-50"
                    : "bg-[#212529] text-slate-300"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={send} className="flex items-center gap-3 border-t border-[#343a40]/60 p-4">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type here to chat..."
            className="h-[60px] min-w-0 flex-1 rounded-full border-[0.8px] border-[#6c757d] bg-[#212529] px-4 text-[16px] text-[#f8f9fa] placeholder:text-[#6c757d] outline-none transition focus:border-[#adb5bd]"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="shrink-0 text-[#d63384] transition hover:text-[#e8609e]"
          >
            <SendIcon className="h-7 w-7" />
          </button>
        </form>
      </main>
    </div>
  );
}
