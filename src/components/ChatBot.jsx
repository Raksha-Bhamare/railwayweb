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
    <div className="flex h-dvh overflow-hidden bg-black font-roboto text-slate-100">
      <aside className="flex w-[408px] shrink-0 flex-col bg-black p-2">
        <div className="flex items-center gap-3 pt-2">
          <HamburgerButton
            onClick={openDrawer}
            className="h-[56px] w-[56px] rounded-full bg-[#121a26] hover:bg-[#1b2534]"
          />
          <img
            src="/assets/aiensured-logo.png"
            alt="aiensured"
            className="h-[42px] w-auto shrink-0"
          />
        </div>

        <div className="relative mt-7 w-full">
          <select
            value={dpr}
            onChange={(e) => setDpr(e.target.value)}
            aria-label="Select DPR"
            className="h-14 w-full appearance-none rounded-lg bg-[#1c2126] pl-4 pr-9 text-[16px] text-[#f8f9fa] outline-none transition focus:bg-[#262c33]"
          >
            {CHAT_DPRS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6c757d]" />
        </div>

        <button
          type="button"
          onClick={() => setMessages([])}
          className="mt-6 h-14 w-full rounded-lg bg-[#1c2126] px-4 text-left text-[16px] text-white transition hover:bg-[#262c33]"
        >
          Clear Chat
        </button>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col bg-black">
        <div className="flex-1 space-y-3 overflow-y-auto bg-[#212529] p-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[16px] leading-relaxed ${
                  message.role === "user"
                    ? "bg-[#495057] text-[#f8f9fa]"
                    : "bg-[#343a40] text-[#dee2e6]"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={send} className="flex items-center gap-4 border-t border-[#26292e] px-7 pb-6 pt-3">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type here to chat..."
            className="h-16 min-w-0 flex-1 rounded-full border border-[#4d5156] bg-[#212529] px-6 text-[16px] text-[#f8f9fa] placeholder:text-[#8a8f95] outline-none transition focus:border-[#adb5bd]"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="shrink-0 text-[#d63384] transition hover:text-[#e8609e]"
          >
            <SendIcon className="h-9 w-9" />
          </button>
        </form>
      </main>
    </div>
  );
}
