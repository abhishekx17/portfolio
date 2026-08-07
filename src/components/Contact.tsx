import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check, Send, Copy } from "lucide-react";
import { personalInfo } from "../data/portfolio";

interface ContactProps {
  onShowToast?: (message: string) => void;
}

export function Contact({ onShowToast }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    onShowToast?.("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      onShowToast?.("Please fill out all fields!");
      return;
    }
    
    setIsSent(true);
    onShowToast?.("Postcard sent successfully!");
    
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setIsSent(false);
    }, 4500);
  };

  return (
    <section id="contact" className="relative w-full bg-[#121212] py-20 sm:py-28 text-neutral-900 overflow-hidden select-none border-t border-zinc-900">
      <div className="absolute inset-0 bg-[#121212]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#ff8a00] bg-neutral-900 px-4 py-1 text-xs font-mono font-bold text-[#ff8a00]">
            <Mail className="h-3.5 w-3.5" />
            <span>CONTACT_POST.BIN</span>
          </div>
          <h2 className="font-sketchy text-4xl sm:text-5xl text-[#faf9f6]">
            Drop a Message
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto font-normal">
            Fill out the postcard form below. Once clicked, it will be posted straight into my inbox.
          </p>
        </div>

        {/* Postcard Form Arena */}
        <div className="relative flex justify-center w-full min-h-[500px]">
          <AnimatePresence mode="wait">
            {!isSent ? (
              <motion.div
                key="postcard"
                initial={{ opacity: 0, scale: 0.95, y: 20, rotate: 1 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: -0.5 }}
                exit={{
                  y: -600,
                  rotate: -12,
                  scale: 0.8,
                  opacity: 0,
                  transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                }}
                className="w-full max-w-3xl bg-[#faf9f6] border-4 border-neutral-900 p-6 sm:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative flex flex-col md:flex-row gap-8 md:gap-10 items-stretch"
              >
                {/* Airmail Pattern Borders */}
                <div className="absolute inset-x-0 top-0 h-2.5 bg-[repeating-linear-gradient(45deg,#ff3b30,#ff3b30_15px,#faf9f6_15px,#faf9f6_30px,#007aff_30px,#007aff_45px,#faf9f6_45px,#faf9f6_60px)]" />
                <div className="absolute inset-x-0 bottom-0 h-2.5 bg-[repeating-linear-gradient(45deg,#ff3b30,#ff3b30_15px,#faf9f6_15px,#faf9f6_30px,#007aff_30px,#007aff_45px,#faf9f6_45px,#faf9f6_60px)]" />

                {/* LEFT HALF: Message Input Form */}
                <div className="w-full md:w-1/2 flex flex-col justify-between space-y-6 pt-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="font-handwritten text-3xl font-extrabold tracking-tight text-neutral-800 rotate-[-1deg] mb-4">
                      Write your note:
                    </h3>
                    
                    {/* Name */}
                    <div className="space-y-1">
                      <label htmlFor="form-name" className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-500">
                        Sender Name
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="your name / company"
                        className="w-full bg-transparent border-b-2 border-neutral-900 pb-1 text-sm font-handwritten text-lg font-bold text-neutral-855 placeholder-neutral-400 focus:outline-none focus:border-[#ff8a00] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label htmlFor="form-email" className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-500">
                        Email Address
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@mail.com"
                        className="w-full bg-transparent border-b-2 border-neutral-900 pb-1 text-sm font-handwritten text-lg font-bold text-neutral-855 placeholder-neutral-400 focus:outline-none focus:border-[#ff8a00] transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label htmlFor="form-msg" className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-500">
                        Your Message
                      </label>
                      <textarea
                        id="form-msg"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="hey, let's build something..."
                        className="w-full bg-transparent border-b-2 border-neutral-900 pb-1 text-sm font-handwritten text-lg font-bold text-neutral-855 placeholder-neutral-400 focus:outline-none focus:border-[#ff8a00] resize-none transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 border-2 border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-850 p-3 text-xs font-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all font-mono cursor-pointer"
                      >
                        <Send className="h-4 w-4" />
                        <span>POST IT</span>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Divider Line */}
                <div className="hidden md:block w-[3px] bg-neutral-300 border-r-2 border-dashed border-neutral-400 my-4" />

                {/* RIGHT HALF: Address & Stamps info */}
                <div className="w-full md:w-1/2 flex flex-col justify-between pt-4 relative min-h-[300px]">
                  
                  {/* Stamp & Address side-by-side flex wrapper for mobile layout */}
                  <div className="flex flex-col-reverse sm:flex-row md:flex-col justify-between items-stretch gap-6 md:gap-0">
                    
                    {/* Horizontal Address Lines */}
                    <div className="space-y-4 pl-0 md:pl-4 flex-1">
                      <div className="border-b-2 border-neutral-300 pb-1 text-sm font-handwritten font-bold text-neutral-700 flex items-center gap-2">
                        <span className="font-mono text-[9px] font-black text-neutral-400">TO:</span>
                        <span>{personalInfo.fullName}</span>
                      </div>
                      <div className="border-b-2 border-neutral-300 pb-1 text-sm font-handwritten font-bold text-neutral-700 flex items-center gap-2">
                        <span className="font-mono text-[9px] font-black text-neutral-400">ROLE:</span>
                        <span>{personalInfo.title}</span>
                      </div>
                      <div className="border-b-2 border-neutral-300 pb-1 text-sm font-handwritten font-bold text-neutral-700 flex items-center gap-2">
                        <span className="font-mono text-[9px] font-black text-neutral-400">LOC:</span>
                        <span>{personalInfo.location}</span>
                      </div>
                    </div>

                    {/* Stamp Button (Copier) */}
                    <div className="md:absolute md:top-0 md:right-0 flex flex-col items-center self-end sm:self-auto shrink-0 md:h-32 mb-6 md:mb-0">
                      <button
                        type="button"
                        onClick={copyEmail}
                        title="Click to copy email address"
                        className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-dashed border-[#ff8a00] bg-white p-2 flex flex-col items-center justify-center text-center shadow-md transform rotate-[4deg] hover:scale-105 active:scale-95 transition-all relative group cursor-pointer"
                      >
                        <span className="text-[7px] font-mono font-black text-neutral-400 absolute top-1">
                          POSTAGE 2026
                        </span>
                        {copied ? (
                          <>
                            <Check className="h-6 w-6 text-emerald-600 my-1 animate-bounce" />
                            <span className="text-[8px] font-mono font-black text-emerald-600">
                              COPIED!
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-6 w-6 text-[#ff8a00] my-1 group-hover:scale-110 transition-transform" />
                            <span className="text-[7px] font-mono font-black text-neutral-600">
                              CLICK TO COPY
                            </span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>

                  <div className="hidden md:block h-12" />

                  {/* Handwriting sticker note */}
                  <div className="pt-8 text-center sm:text-right">
                    <span className="font-handwritten text-xl font-bold text-neutral-500 rotate-[-3deg] inline-block">
                      Write me a message!
                    </span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="mailbox-success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-[#faf9f6] border-4 border-neutral-900 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center space-y-6 relative"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                  <Check className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif-display text-2xl font-bold text-neutral-900">
                    Mail Posted!
                  </h3>
                  <p className="font-handwritten text-lg font-bold text-neutral-700">
                    Thank you, {name}! Your message has been sent successfully. I will read it and get back to you soon.
                  </p>
                </div>
                <div className="pt-2 border-t-2 border-neutral-200 font-mono text-[10px] font-black text-neutral-500">
                  SLIDING INBOX LOADER PROCESS... COMPLETE
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
