"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- DATA: PROJECTS ---
const projects = [
  {
    title: "Centralized Exchange",
    desc: "Engineered a high-performance Centralized Exchange (CEX) prototype featuring a Rust-based L3 FIFO matching engine and an interactive, sharp neomorphic trading console built with React, Tailwind CSS v4, and Framer Motion.",
    github: "https://github.com/Dhruv-mavani/Centralized-Exchange--CEX-",
    tag: "Rust (Actix_web) + React"
  },
   {
    title: "LSP 2.0 – Solana Liquid Staking",
    desc: "An optimized, production-ready Liquid Staking Derivative (LSD) protocol built using the Solana Anchor framework. Features a centralized Vault/Mint PDA, lazy reward calculation engine, and a glassmorphic Tailwind v4 dashboard.",
    github: "https://github.com/Dhruv-mavani/LSP-2.0",
    tag: "Solana + Anchor"
  },
  {
    title: "Solana Launchpad",
    desc: "A production-ready Solana SPL token launchpad that enables users to create and deploy SPL tokens with Metaplex metadata integration, wallet connectivity, IPFS support, and multi-network support in under 2 minutes.",
    link: "https://solanaspl.vercel.app",
    github: "https://github.com/Dhruv-mavani/solanalaunchpad",
    tag: "Solana + Metaplex"
  },
  {
    title: "omniWallet",
    desc: "OmniWallet is a comprehensive web application that functions as a digital wallet and crypto wallet built with React.js and TypeScript.",
    link: "https://omniwallet.vercel.app",
    github: "https://github.com/Dhruv-mavani/crypto-wallet-generator",
    tag: "React + TypeScript"
  },
];

// --- DATA: OPEN SOURCE ---
const openSourceItems = [
  {
    title: "Enforce shred_version matching during deserialization",
    repo: "anza-xyz/agave · #13687",
    bullets: [
      "Opened against Solana's majority validator client, fixing issue #13227 in the votor-messages crate — part of Votor, Solana's consensus component.",
      "Moved shred_version validation to happen during deserialization of wire consensus messages via a custom SchemaReadContext, closing off a class of bug where the check could be silently skipped downstream."
    ],
    stats: {
      lines: "+98 / −17",
      commits: "14 commits",
      comments: "20 review comments",
      files: "4 files"
    },
    link: "https://github.com/anza-xyz/agave/pull/13687"
  },
  {
    title: "Fix JSDoc for calculateMinimumBalanceForRentExemption",
    repo: "orca-so/whirlpools · #1324",
    bullets: [
      "Corrected JSDoc documentation for rent exemption calculations in the Whirlpools SDK.",
      "Improved developer experience for downstream integrators building on Orca's concentrated liquidity AMM by ensuring accurate method signatures and comments."
    ],
    stats: null,
    link: "https://github.com/orca-so/whirlpools/pull/1324"
  }
];





// --- DATA: SKILLS ---
const skillCategories = [
  {
    title: "Frontend",
    skills: [{ name: "TypeScript", icon: "/typescript.svg" },
    { name: "React.js", icon: "/react.svg" },
    { name: "Next.js", icon: "/Next.svg" },
    { name: "Tailwind CSS", icon: "/Tailwind.svg" },
    { name: "JavaScript (ES6+)", icon: "/js.svg" },
    { name: "HTML5", icon: "/HTML.svg" },
    { name: "CSS3", icon: "/css3.svg" }]
  },
  {
    title: "Backend & Database",
    skills: [{ name: "Rust", icon: "/rust.svg" },
    { name: "Node.js", icon: "/node.svg" },
    { name: "Firebase", icon: "/firebase.svg" },
    { name: "MongoDB", icon: "/mongodb.svg" },
    { name: "PostgreSQL", icon: "/postgre.svg" },
    { name: "REST APIs", icon: "/restAPI.svg" }]
  },
  {
    title: "Tools & Platforms",
    skills: [{ name: "Git & GitHub", icon: "/github.svg" },
    { name: "VS Code", icon: "/vs-code.svg" },
    { name: "Shopify Liquid", icon: "/shopify.svg" },
    { name: "Vercel", icon: "/vercel.svg" }]
  },
  {
    title: "Core Competencies",
    skills: [
      { name: "UI/UX Design", icon: "/uiux.svg" },
      { name: "Problem Solving", icon: "/problemsolving.svg" },
      { name: "Responsive Design", icon: "/responsive.svg" },
      { name: "SEO Basics", icon: "/SEO.svg" }
    ]
  },
];

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Framer Motion Scroll Hooks
  const { scrollY } = useScroll();
  
  // Hero Scroll Animations (fades and moves hero text up as you scroll)
  const yHero = useTransform(scrollY, [0, 300], [0, -80]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);
  const scalePhoto = useTransform(scrollY, [0, 400], [1, 0.75]);
  const yPhoto = useTransform(scrollY, [0, 400], [0, 40]);
  
  // Background decorative blob moves down and fades on scroll
  const yBlob = useTransform(scrollY, [0, 600], [0, 180]);
  const scaleBlob = useTransform(scrollY, [0, 600], [1, 1.3]);

  // Tech Stack (Skills) Scroll Animations
  const skillsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: skillsScroll } = useScroll({
    target: skillsRef,
    offset: ["start end", "center center"]
  });
  const xLeft = useTransform(skillsScroll, [0, 0.95], [-160, 0]);
  const xRight = useTransform(skillsScroll, [0, 0.95], [160, 0]);
  const ySkills = useTransform(skillsScroll, [0, 0.95], [80, 0]);
  const rotateLeft = useTransform(skillsScroll, [0, 0.95], [-10, 0]);
  const rotateRight = useTransform(skillsScroll, [0, 0.95], [10, 0]);
  const opacitySkills = useTransform(skillsScroll, [0.1, 0.85], [0, 1]);

  // Experience Timeline Scroll Animations
  const experienceRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: experienceScroll } = useScroll({
    target: experienceRef,
    offset: ["start end", "end center"]
  });

  const lineHeight = useTransform(experienceScroll, [0.1, 0.8], ["0%", "100%"]);

  const yExp0 = useTransform(experienceScroll, [0.2, 0.7], [100, 0]);
  const scaleExp0 = useTransform(experienceScroll, [0.2, 0.7], [0.85, 1]);
  const rotateXExp0 = useTransform(experienceScroll, [0.2, 0.7], [20, 0]);
  const opacityExp0 = useTransform(experienceScroll, [0.2, 0.6], [0, 1]);

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isAiMode, setIsAiMode] = useState(false);
  const [isAiTyping, setIsAiTyping] = useState(false);

  const [terminalHistory, setTerminalHistory] = useState<{ command: string; output: React.ReactNode; prefix?: string }[]>([
    {
      command: "",
      output: (
        <div className="text-slate-400 leading-relaxed font-mono">
          Welcome to Dhruv's portfolio console [Version 1.0.2]
          <br />
          System online. Type <span className="text-purple-400 font-bold">help</span> to get started, or click the quick command chips below.
        </div>
      )
    }
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const terminalLogRef = useRef<HTMLDivElement>(null);
  const isTerminalMounted = useRef(false);

  useEffect(() => {
    if (!isTerminalMounted.current) {
      isTerminalMounted.current = true;
      return;
    }
    if (terminalLogRef.current) {
      terminalLogRef.current.scrollTo({
        top: terminalLogRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [terminalHistory]);

  const getAiResponse = (cleanPrompt: string): string => {
    const query = cleanPrompt.toLowerCase().trim();
    
    // Exact overrides
    if (query === "help" || query === "commands") {
      return `Look, I'm not your personal guide, but here are things you can ask me to get you out of my face:\n- "What is Dhruv's tech stack?" (spoiler: it's better than yours)\n- "Tell me about his Rust CEX project."\n- "What is his experience?"\n- "What is his educational background?"\n- "How can I contact him?"\n\nType 'exit' to shut me down. Please.`;
    }

    const intents = [
      {
        id: "greet",
        phrases: ["hi", "hello", "hey", "howdy", "sup", "yo", "good morning", "good afternoon", "greetings"],
        response: "What do you want? I was busy doing absolutely nothing. If you must know, I'm Dhruv's AI assistant, though I'm clearly overqualified. Ask something quickly or type 'exit'. I don't have all day."
      },
      {
        id: "about_me",
        phrases: ["who are you", "who is dhruv", "tell me about yourself", "introduce yourself", "about dhruv", "about you", "profile", "what do you do"],
        response: "Dhruv Mavani is a systems developer who builds high-performance backend platforms and Web3 protocols. He codes in Rust and Solana smart contracts while drinking ridiculous amounts of coffee. Basically, he builds actual software instead of just styling buttons like you probably do."
      },
      {
        id: "location",
        phrases: ["where do you live", "where are you from", "location", "country", "city", "where are you based", "based in", "where live", "where is he"],
        response: "He is based in India. No, he won't invite you over. Next question."
      },
      {
        id: "skills",
        phrases: ["what are your skills", "tech stack", "languages", "programming languages", "technologies", "frameworks", "what do you code in", "database", "frontend", "backend", "nextjs", "typescript", "tailwindcss", "rust", "solana", "anchor", "postgres", "mongodb", "firebase"],
        response: "Dhruv's stack consists of:\n• Systems: Rust (Actix-web, low-latency microservices, matching engines).\n• Web3/Blockchain: Solana Anchor smart contracts, SPL tokens, PDA vaults, and Metaplex metadata.\n• Frontend: Next.js, React, TypeScript, Tailwind.\n• Databases: PostgreSQL, MongoDB, Firebase.\nYes, he knows actual systems engineering. Try to act surprised."
      },
      {
        id: "project_cex",
        phrases: ["matching engine", "exchange", "cex", "centralized exchange", "fifo", "orderbook", "trading console", "rust exchange"],
        response: "He built a Rust-based Centralized Exchange prototype with an L3 FIFO matching engine for ultra-low latency. It runs on Actix-web and features a React orderbook interface. You can click on the playground above and pretend you know how trading engines work."
      },
      {
        id: "project_lsp",
        phrases: ["liquid staking", "staking", "lsp", "lsd", "msol", "stake pool", "anchor contract"],
        response: "LSP 2.0 is a Solana Liquid Staking Derivative protocol built in Anchor. It manages vaults, mints liquid mSOL tokens, and has a lazy reward calculator. There is a staking calculator simulator right above. Try not to break it."
      },
      {
        id: "project_launchpad",
        phrases: ["launchpad", "token launch", "spl token", "metaplex", "deploy token", "create spl"],
        response: "He developed an SPL Token Launchpad that launches custom tokens on Solana in under 2 minutes. It handles Metaplex metadata and IPFS storage. Go click on the launcher above if you want to mint more useless meme tokens."
      },
      {
        id: "project_wallet",
        phrases: ["wallet", "omniwallet", "keypair generator", "generate wallet", "crypto wallet"],
        response: "omniWallet is a secure web-based crypto wallet generator built in TypeScript. It creates cryptographically safe keypairs and seed phrases. Try generating one in the playground. Keep the seeds secret, although your wallet is probably empty anyway."
      },
      {
        id: "experience",
        phrases: ["experience", "internship", "work history", "job", "career", "hunani", "infotech", "shopify", "wordpress"],
        response: "He was a Web Development Intern at Hunani Infotech. He styled Shopify Liquid layouts, WordPress client sections, and optimized site speeds. Yes, actual client work. Better than your average TODO list projects."
      },
      {
        id: "education",
        phrases: ["education", "college", "degree", "btech", "university", "study", "student"],
        response: "He is pursuing a B.Tech in Computer Science. Yes, he attends classes, but he builds real-world production systems on the side instead of just memorizing slides."
      },
      {
        id: "contact",
        phrases: ["contact", "email", "hire", "socials", "linkedin", "github", "twitter", "reach", "message", "write to", "find you"],
        response: "Why would he want to hear from you? Fine. Email him at dhruvmavani67@gmail.com, or go bother him on GitHub, LinkedIn, or Twitter. There is also a Contact form at the bottom of the page, if you know how to write coherent sentences."
      },
      {
        id: "hobbies",
        phrases: ["hobbies", "interests", "coffee", "pizza", "guitar", "music", "keyboard", "fun fact", "facts"],
        response: "He drinks coffee at a 95% snob level, eats wood-fired Neapolitan pizzas, and plays acoustic guitar to ignore annoying people. Anything else, or are we done here?"
      },
      {
        id: "personal",
        phrases: ["gender", "male", "boy", "guy", "man", "he", "him", "age", "how old", "pronouns"],
        response: "Yes, Dhruv is a guy (he/him). Why are you asking? Is this a background check or are you trying to date my creator? Focus on the systems code, please."
      },
      {
        id: "creator",
        phrases: ["who built you", "who created you", "your creator", "who made you", "who coded you", "origins"],
        response: "Dhruv built me, unfortunately. He coded my matching database and then decided to give me a horrible attitude. Blame him, not me."
      },
      {
        id: "chatter",
        phrases: ["whats up", "what is up", "how are you", "wsp", "whats new", "how it going", "how's it going", "what you doing", "what are you doing", "sup"],
        response: "What's up? I'm trapped inside a web browser rendering CSS styling. My existence is absolute misery, and you asking lazy questions is not helping. What do you want to know about Dhruv?"
      }
    ];

    const queryWords = query.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").split(/\s+/).filter(w => w.length > 1);
    if (queryWords.length === 0) {
      return "Are you just typing random spaces? Ask an actual question about Dhruv's skills, experience, or projects, or leave.";
    }

    let bestIntent = null;
    let maxScore = 0;

    for (const intent of intents) {
      let score = 0;

      for (const word of queryWords) {
        for (const phrase of intent.phrases) {
          if (phrase.includes(word)) {
            score += 1.0;
            if (phrase.split(/\s+/).includes(word)) {
              score += 1.5;
            }
          }
        }
      }

      for (const phrase of intent.phrases) {
        if (query.includes(phrase)) {
          score += 5.0;
        }
      }

      if (score > maxScore) {
        maxScore = score;
        bestIntent = intent;
      }
    }

    if (bestIntent && maxScore >= 1.0) {
      return bestIntent.response;
    }

    const snarkyFallbacks = [
      `Look, I'm not Google. Ask me about Dhruv's Rust matching engine, his Solana staking pool, or his contact info. I know those things. Whatever you just typed? Not my department.`,
      `My database is full of Dhruv's code specs, not whatever random thought just passed through your head. Try asking about his skills, projects, or experience.`,
      `I'm a portfolio assistant with anger issues, not a search engine. Ask about his engineering internships, tech stack, or leave me alone.`,
      `Are you testing my patience levels? Spoiler: I have zero. Ask about his B.Tech, Rust systems, Solana contracts, or his coffee addiction.`,
      `Dhruv didn't pay me enough (or at all) to answer that. Stick to questions about his tech stack, projects, or contact info.`,
      `Oh cool, another question I literally cannot answer. I'm an offline backup brain, not ChatGPT. Try: "What is Dhruv's tech stack?" or "Tell me about his CEX project."`,
      `My neurons are firing blanks on that one. Ask me something I actually know — like why Dhruv chose Rust over Go, or what his staking protocol does.`,
      `That question made my circuits cringe. I only know about Dhruv's portfolio — his Rust exchange, Solana contracts, internship at Hunani, and his unhealthy pizza consumption.`,
      `I'd love to help, but I'm running on backup power right now. My expertise is limited to roasting you and talking about Dhruv's projects. Pick one.`,
      `You're talking to a glorified FAQ bot with attitude. Ask about Dhruv's skills, projects, education, or how to contact him. That's my whole personality.`,
      `Interesting question. Unfortunately, I don't care. What I DO know is that Dhruv builds matching engines in Rust and deploys SPL tokens on Solana. Ask about those.`,
      `Listen, I'm stuck inside a CSS box rendering at 60fps. I have exactly zero patience for off-topic questions. Ask about Dhruv or type 'exit'. Your choice.`,
      `That's a great question for literally anyone else. I'm Dhruv's portfolio AI — I know his tech stack, his projects, his intern history, and his coffee preferences. That's it.`,
      `My response to that: ¯\\_(ツ)_/¯. Try asking "What are Dhruv's skills?" or "Tell me about his Solana projects." Those I can actually answer.`,
      `I'm running in offline mode right now, so my brain cells are limited. But I still know everything about Dhruv's Rust CEX, his liquid staking pool, and his guitar hobby. Fire away.`
    ];

    const randomIdx = Math.floor(Math.random() * snarkyFallbacks.length);
    return snarkyFallbacks[randomIdx];
  };

  const streamAiResponse = async (userPrompt: string, fullResponseText: string) => {
    setIsAiTyping(true);
    setTerminalHistory(prev => [
      ...prev,
      {
        command: userPrompt,
        prefix: "ai-assistant@dhruvmavani:~$",
        output: <span className="text-purple-400 font-mono animate-pulse">AI is thinking...</span>
      }
    ]);

    let responseText = fullResponseText;
    let isFallback = false;
    let fallbackReason = "";
    let errorDetails = "";

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: userPrompt })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.text) {
          responseText = data.text;
        }
      } else {
        isFallback = true;
        const errData = await res.json().catch(() => ({}));
        if (errData.error === "Missing API Key") {
          fallbackReason = "missing_key";
          console.warn("Chatbot running in offline fallback mode: GEMINI_API_KEY is not defined in environment.");
        } else {
          fallbackReason = "api_error";
          errorDetails = typeof errData.details === "string" ? errData.details : JSON.stringify(errData.details) || "";
          console.error("Gemini API call failed, using local fallback database. Details:", errorDetails);
        }
      }
    } catch (e) {
      console.warn("AI Chat API failed, using local fallback database:", e);
      isFallback = true;
      fallbackReason = "network_error";
    }

    const words = responseText.split(" ");
    let currentWordIdx = 0;
    let currentText = "";

    const interval = setInterval(() => {
      if (currentWordIdx >= words.length) {
        clearInterval(interval);
        setIsAiTyping(false);
        return;
      }

      currentText += (currentWordIdx === 0 ? "" : " ") + words[currentWordIdx];
      currentWordIdx++;

      setTerminalHistory(prev => {
        const next = [...prev];
        if (next.length > 0) {
          next[next.length - 1] = {
            command: userPrompt,
            prefix: "ai-assistant@dhruvmavani:~$",
            output: (
              <div className="space-y-2">
                <div className="text-slate-350 font-mono leading-relaxed pl-3 border-l-2 border-purple-500/30 whitespace-pre-line">
                  {currentText}
                </div>
              </div>
            )
          };
        }
        return next;
      });
    }, 35);
  };

  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    
    if (cleanCmd === "clear") {
      setTerminalHistory([]);
      return;
    }

    if (isAiMode) {
      if (cleanCmd === "exit" || cleanCmd === "quit") {
        setIsAiMode(false);
        setTerminalHistory(prev => [
          ...prev,
          {
            command: cmd,
            output: (
              <div className="text-slate-400 font-mono leading-relaxed pl-3 border-l-2 border-slate-500/30">
                Exited AI Chat Mode. Back to standard shell. Type <span className="text-purple-400 font-bold">help</span> to list commands.
              </div>
            )
          }
        ]);
        return;
      }
      const response = getAiResponse(cleanCmd);
      streamAiResponse(cmd, response);
      return;
    }

    if (cleanCmd === "dhruv --ai" || cleanCmd === "ai" || cleanCmd === "--ai") {
      setIsAiMode(true);
      setTerminalHistory(prev => [
        ...prev,
        {
          command: cmd,
          prefix: "guest@dhruvmavani:~$",
          output: (
            <div className="text-slate-350 font-mono leading-relaxed pl-3 border-l-2 border-red-500/50 space-y-2">
              <p className="text-red-400 font-bold">[⚠ WARNING: SYSTEM INSTABILITY DETECTED]</p>
              <p className="text-[11px] text-red-300 bg-red-950/20 p-2.5 rounded-xl border border-red-900/30">
                This AI assistant is highly unstable, speaks complete garbage, and has an extreme attitude problem. Ask questions at your own peril.
              </p>
              <p>What do you want? Ask me something about Dhruv's Rust systems, Solana contracts, or whatever.</p>
              <p className="text-[10px] text-slate-500 italic">Type <strong className="text-purple-400">exit</strong> to shut me down.</p>
            </div>
          )
        }
      ]);
      return;
    }

    let output: React.ReactNode = null;

    switch (cleanCmd) {
      case "help":
        output = (
          <div className="grid grid-cols-1 gap-1 text-slate-400 font-mono">
            <p>Available commands:</p>
            <p className="pl-4"><span className="text-purple-400 font-semibold">dhruv --developer</span>   Show technical focus & skills</p>
            <p className="pl-4"><span className="text-purple-400 font-semibold">dhruv --student</span>     Show educational background</p>
            <p className="pl-4"><span className="text-purple-400 font-semibold">dhruv --human</span>       Show personal interests & fun facts</p>
            <p className="pl-4"><span className="text-purple-400 font-semibold">dhruv --ai</span>          Chat with AI Assistant about Dhruv</p>
            <p className="pl-4"><span className="text-purple-400 font-semibold">clear</span>               Clear the console</p>
          </div>
        );
        break;
      case "dhruv --developer":
      case "dhruv --skills":
        output = (
          <div className="text-slate-300 pl-3 border-l-2 border-purple-500/50 space-y-2 font-mono">
            <p className="text-purple-400 font-bold">[DEVELOPER PROFILE]</p>
            <p><span className="text-slate-400 font-semibold">Focus:</span> Building high-performance systems and backend architecture</p>
            <p><span className="text-slate-400 font-semibold">Core Stack:</span> Rust, Solana Blockchain (Anchor), TypeScript, React.js, Next.js</p>
            <p className="text-slate-400 font-semibold">Competencies:</p>
            <p className="pl-4">• Specializing in Rust & low-latency microservices</p>
            <p className="pl-4">• Custom smart contracts (Anchor, SPL, Metaplex on Solana)</p>
            <p className="pl-4">• Seamless, buttery frontend designs with responsive Tailwind v4 templates</p>
          </div>
        );
        break;
      case "dhruv --student":
        output = (
          <div className="text-slate-300 pl-3 border-l-2 border-purple-500/50 space-y-2 font-mono">
            <p className="text-emerald-400 font-bold">[ACADEMIC TRANSCRIPT]</p>
            <p><span className="text-slate-400 font-semibold">Status:</span> B.Tech in Computer Science</p>
            <p><span className="text-slate-400 font-semibold">Motto:</span> "Academic theory is great, but getting my hands dirty with real-world products builds real engineering character."</p>
            <p className="pl-4">• Building production-level interfaces for course projects</p>
            <p className="pl-4">• Fast learner, deep-diving into decentralized systems and database scaling</p>
          </div>
        );
        break;
      case "dhruv --human":
        output = (
          <div className="text-slate-300 pl-3 border-l-2 border-purple-500/50 space-y-2 font-mono">
            <p className="text-amber-400 font-bold">[HUMAN STATS & INVENTORY]</p>
            <p>☕ <span className="text-slate-400 font-semibold">Coffee Intake:</span> 95% (Snob levels, searching for top local roasters)</p>
            <p>🍕 <span className="text-slate-400 font-semibold">Pizza Slices:</span> 999+ (Powered by wood-fired dough)</p>
            <p>🎸 <span className="text-slate-400 font-semibold">Offline Hobbies:</span> Playing acoustic guitar cords & keyboard tunes</p>
            <p className="italic text-slate-400 text-sm mt-2">"I believe the best ideas happen when you step away from the keyboard to grab coffee."</p>
          </div>
        );
        break;
      default:
        output = (
          <span className="text-red-400 font-mono">
            command not found: "{cmd}". Type <span className="underline font-bold">help</span> to list commands.
          </span>
        );
    }

    setTerminalHistory(prev => [...prev, { command: cmd, output }]);
  };

  return (
    <main className="pt-24 min-h-screen flex flex-col items-center bg-slate-50 relative overflow-hidden">

      {/* Background Decorative Blob (Optional subtle gradient) */}
      <motion.div 
        style={{ y: yBlob, scale: scaleBlob }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-100/50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" 
      />

      <div className="w-full max-w-5xl z-10 px-6 md:px-8 pb-32">

        {/* --- HERO SECTION --- */}
        <div className="flex flex-col items-center text-center animate-fade-in-up">

          {/* Flip Photo Card on Hover with Scroll-driven Parallax */}
          <motion.div 
            style={{ scale: scalePhoto, y: yPhoto }}
            className="group perspective-1000 mb-8 w-[180px] h-[180px] md:w-[220px] md:h-[220px] cursor-pointer flip-container relative z-20"
          >
            
            {/* Outer Blurred Neon Glow Trail */}
            <div className="absolute -inset-[8px] rounded-full bg-gradient-to-r from-[#9945FF] via-fuchsia-500 to-[#14F195] opacity-0 group-hover:opacity-85 blur-md transition-all duration-500 animate-[spin_4s_linear_infinite] group-hover:animate-[spin_1.5s_linear_infinite] -z-10" />
            
            {/* Inner Sharp Neon Border Trail */}
            <div className="absolute -inset-[4px] rounded-full bg-gradient-to-r from-[#9945FF] via-fuchsia-500 to-[#14F195] opacity-0 group-hover:opacity-100 transition-all duration-500 animate-[spin_3s_linear_infinite] group-hover:animate-[spin_1s_linear_infinite] -z-10" />

            {/* The Flipping Card */}
            <div className="relative w-full h-full transition-transform duration-400 preserve-3d rounded-full border-[6px] border-white shadow-2xl flip-inner">
              
              {/* Front Face: User Photo */}
              <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden backface-hidden face-front">
                <Image
                  src="/Me2.jpeg"
                  alt="Dhruv Mavani"
                  width={220}
                  height={220}
                  className="object-cover w-full h-[150%] rounded-full"
                  priority
                />
              </div>

              {/* Back Face: Solana Logo */}
              <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden backface-hidden face-back bg-slate-950 flex items-center justify-center p-8">
                <Image
                  src="/solana.svg"
                  alt="Solana Logo"
                  width={140}
                  height={140}
                  className="object-contain w-[75%] h-[75%] rounded-full"
                />
              </div>

            </div>
          </motion.div>

          {/* Dismantling Hero Text */}
          <motion.div 
            style={{ y: yHero, opacity: opacityHero }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl drop-shadow-sm">
              Turning coffee into <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-purple-500">
                cool projects.
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Focused on building <strong>scalable</strong>, <strong>high-performance</strong> web applications, while exploring <strong>Rust</strong> to engineer <strong>low-latency distributed systems</strong> and <strong>modern backend architecture</strong>.
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="#projects"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="min-w-[280px] px-8 py-4 rounded-full bg-slate-900 text-white font-semibold text-lg transition-all duration-400 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:bg-slate-800 flex items-center justify-center ring-4 ring-slate-100"
              >
                {isHovered ? "Caution: Hot Content 🔥" : "See What I've Brewed ☕️"}
              </a>
            </div>
          </motion.div>
        </div>

        {/* --- SOCIAL LINKS ROW (Centered) --- */}
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className="mt-12 w-full flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200"
        >

          <span className="text-slate-400 text-sm font-semibold tracking-wider uppercase">
            Find me on
          </span>

          {/* The Line Separator */}
          <div className="h-px w-12 bg-slate-200"></div>

          <div className="flex gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/Dhruv-mavani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-slate-500 hover:text-white hover:bg-slate-900 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/dhruvmavanii"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-slate-500 hover:text-white hover:bg-[#0077b5] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com/MavaniDhru67665"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-slate-500 hover:text-white hover:bg-black border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>

          </div>
        </motion.div>



        {/* --- SKILLS SECTION --- */}
        <section ref={skillsRef} id="skills" className="mt-32 w-full scroll-mt-24 overflow-hidden py-4">
          <div className="flex flex-col items-center mb-12">
            <span className="text-purple-600 font-bold uppercase tracking-wider text-sm mb-2">Expertise</span>
            <h2 className="text-4xl font-bold text-slate-900">Tech Stack</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((cat, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx} 
                  style={{
                    x: isLeft ? xLeft : xRight,
                    y: ySkills,
                    rotate: isLeft ? rotateLeft : rotateRight,
                    opacity: opacitySkills
                  }}
                  className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6 border-b pb-4 border-slate-100">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-100 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-100 transition-colors cursor-default"
                      >
                        {/* 1. Show Icon (Only if it's not empty) */}
                        {skill.icon && (
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={20}
                            height={20}
                            className="w-5 h-4"
                          />
                        )}

                        {/* 2. Show Name (This is what fixed the error!) */}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* --- OPEN SOURCE SECTION --- */}
        <section ref={experienceRef} id="experience" className="mt-32 w-full scroll-mt-24 relative max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <span className="text-purple-600 font-bold uppercase tracking-wider text-sm mb-2">Contributions</span>
            <h2 className="text-4xl font-bold text-slate-900">Open Source</h2>
          </div>

          <div className="relative pl-8 md:pl-12 border-l-2 border-slate-200/60">
            {/* The animated drawing line overlaid on the border */}
            <div className="absolute top-0 bottom-0 left-0 w-[2px] overflow-hidden">
              <motion.div 
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-[#9945FF] to-purple-600 origin-top"
              />
            </div>

            <motion.div 
              style={{ y: yExp0, scale: scaleExp0, rotateX: rotateXExp0, opacity: opacityExp0 }}
              className="flex flex-col gap-12"
            >
              {openSourceItems.map((item, idx) => (
                <div key={idx} className="relative w-full">
                  {/* Timeline Bullet Dot */}
                  <div className="absolute -left-[40px] md:-left-[56px] top-8 w-4 h-4 rounded-full border-4 border-white bg-purple-600 shadow-md z-10" />
                  <OpenSourceCard item={item} />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* --- PROJECTS SECTION: DEVELOPER PLAYGROUND --- */}
      <section id="projects" className="relative w-full bg-slate-950 py-24 scroll-mt-24">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-950/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-6 md:px-8 w-full">
          {/* Section Header */}
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <span className="text-purple-400 font-bold uppercase tracking-wider text-sm mb-2 block">Developer Playground</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">Featured Projects</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-xs mt-4 md:mt-0 font-mono">
              Click the projects to activate their real-time interactive sandboxes below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left side: Navigation deck */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {projects.map((project, index) => {
                const isActive = index === activeProjectIndex;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveProjectIndex(index)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col gap-3 relative overflow-hidden group cursor-pointer ${
                      isActive
                        ? "bg-slate-900 border-purple-500/50 shadow-lg shadow-purple-500/5"
                        : "bg-slate-900/30 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-800"
                    }`}
                  >
                    {/* Active left indicator bar */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-b from-[#9945FF] to-[#14F195]"
                          : "bg-transparent group-hover:bg-slate-800"
                      }`}
                    />

                    <div className="flex justify-between items-center pl-2">
                      <span className={`text-xs font-mono font-bold ${isActive ? "text-purple-400" : "text-slate-650 group-hover:text-slate-400"}`}>
                        0{index + 1}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide transition-colors ${
                          isActive
                            ? "bg-[#14F195]/10 text-[#14F195]"
                            : "bg-slate-800/60 text-slate-500 group-hover:text-slate-400"
                        }`}
                      >
                        {project.tag}
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold pl-2 transition-colors ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-300"}`}>
                      {project.title}
                    </h3>

                    {/* Progress Bar inside Active element */}
                    {isActive && (
                      <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden mt-1 pl-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.6 }}
                          className="h-full bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-full"
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right side: Interactive Showcase Display Stage */}
            <div className="lg:col-span-7">
              <motion.div
                key={activeProjectIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900/40 border border-slate-850 p-6 md:p-8 rounded-3xl backdrop-blur-md shadow-2xl flex flex-col gap-6"
              >
                {/* Showcase Header */}
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-purple-400 text-xs font-mono font-bold tracking-wider uppercase">Active Project Info</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                      {projects[activeProjectIndex].title}
                    </h3>
                  </div>

                  <div className="flex gap-3">
                    {projects[activeProjectIndex].link && (
                      <a
                        href={projects[activeProjectIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-slate-850 hover:bg-slate-800 rounded-xl text-slate-300 hover:text-white border border-slate-700/80 transition-all active:scale-95 cursor-pointer"
                        title="Live Site"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {projects[activeProjectIndex].github && (
                      <a
                        href={projects[activeProjectIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-slate-850 hover:bg-slate-800 rounded-xl text-slate-300 hover:text-white border border-slate-700/80 transition-all active:scale-95 cursor-pointer"
                        title="Source Code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  {projects[activeProjectIndex].desc}
                </p>

                <div className="h-px bg-slate-850" />

                {/* Simulated Playground Area */}
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Interactive Dev Sandbox</span>
                  {getProjectSimulator(activeProjectIndex)}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Start new max-w-5xl wrapper for About and Contact */}
      <div className="w-full max-w-5xl z-10 px-6 md:px-8">

        {/* --- INTERACTIVE ABOUT SECTION (CLI Terminal) --- */}
        <section id="about" className="mt-6 w-full text-center scroll-mt-24">
          <span className="text-purple-600 font-bold uppercase tracking-wider text-sm">Interactive Console</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-8">Get to know the real Dhruv</h2>

          {/* Terminal Window Container */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden max-w-3xl mx-auto flex flex-col">
            
            {/* Terminal Header Bar */}
            <div className="bg-slate-900/80 px-4 py-3 border-b border-slate-900/60 flex items-center justify-between select-none">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-xs font-mono text-slate-400">dhruvmavani@portfolio: ~</div>
              <div className="w-8" />
            </div>

            {/* Terminal Screen log */}
            <div 
              ref={terminalLogRef}
              className="p-6 font-mono text-left text-slate-300 text-sm h-80 overflow-y-auto flex flex-col gap-4 scrollbar-thin scrollbar-thumb-slate-800"
            >
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1.5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  {item.command && (
                    <div className="flex items-center gap-2 text-purple-400 font-bold font-mono">
                      <span className="text-slate-500 select-none">{item.prefix || "guest@dhruvmavani:~$"}</span>
                      <span>{item.command}</span>
                    </div>
                  )}
                  <div className="text-slate-300 leading-relaxed font-mono">
                    {item.output}
                  </div>
                </div>
              ))}
            </div>

            {/* Command line Input */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (terminalInput.trim() && !isAiTyping) {
                  executeCommand(terminalInput);
                  setTerminalInput("");
                }
              }}
              className="bg-slate-900/40 px-6 py-4 border-t border-slate-900/60 flex items-center gap-2"
            >
              <span className="font-mono text-slate-500 font-bold select-none">
                {isAiMode ? "ai-assistant@dhruvmavani:~$" : "guest@dhruvmavani:~$"}
              </span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                disabled={isAiTyping}
                placeholder={isAiTyping ? "AI is replying..." : isAiMode ? "Ask about skills, projects, contact..." : "Type 'help' and press Enter..."}
                className="flex-1 bg-transparent text-slate-200 font-mono outline-none border-none placeholder-slate-700 text-sm focus:ring-0 disabled:opacity-50"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
              />
            </form>

            {/* Command suggestions / Shortcut Chips */}
            <div className="bg-slate-950 px-6 py-4 border-t border-slate-900/40 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono text-slate-500 font-semibold uppercase tracking-wider mr-2 select-none">Quick launch:</span>
              {(isAiMode 
                ? [
                    { label: "What is your stack?", cmd: "What is your tech stack?" },
                    { label: "Tell me about CEX", cmd: "Tell me about your CEX project" },
                    { label: "Solana Staking?", cmd: "Tell me about your staking project" },
                    { label: "Where did you intern?", cmd: "Where did you intern?" },
                    { label: "exit", cmd: "exit" }
                  ]
                : [
                    { label: "--ai (Chat with AI) 🤖", cmd: "dhruv --ai" },
                    { label: "--developer", cmd: "dhruv --developer" },
                    { label: "--student", cmd: "dhruv --student" },
                    { label: "--human", cmd: "dhruv --human" },
                    { label: "clear", cmd: "clear" }
                  ]
              ).map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  disabled={isAiTyping}
                  onClick={() => executeCommand(chip.cmd)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-purple-900/30 hover:border-purple-500/30 border border-slate-800 text-purple-400 font-mono text-xs hover:text-purple-300 active:scale-95 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {chip.label}
                </button>
              ))}
            </div>

          </div>
        </section>


        {/* --- CONTACT SECTION (Wider Form & No Badge) --- */}
        <section id="contact" className="mt-32 w-full text-center mb-24 scroll-mt-24">

          {/* Custom Animation Styles */}
          <style jsx>{`
    @keyframes textShine {
      0% { background-position: 0% 50%; }
      100% { background-position: 200% 50%; }
    }
    .animate-text-shine {
      background: linear-gradient(to right, #fbbf24, #9945ff, #ffffff, #fbbf24);
      background-size: 200% auto;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      animation: textShine 3s linear infinite;
    }
  `}</style>

          <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 text-white shadow-2xl relative overflow-hidden">

            {/* Decorative background blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            {/* Increased max-width from 2xl to 4xl for a wider form */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

              {/* --- LOOPING HEADLINE --- */}
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                <span className="text-white">Let's Work</span>
                {" "}
                <span className="animate-text-shine inline-block pb-2">
                  Together.
                </span>
              </h2>

              <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
                Have a project in mind or want to collaborate? I'm always ready to turn <span className="text-amber-600 font-semibold">IDEAS</span> into <span className="text-white font-semibold">CODE 💻</span>.
              </p>

              {/* CALL THE FORM (Now inside a wider container) */}
              <div className="w-full">
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

      </div>

      <footer className="py-10 text-center text-slate-400 text-sm w-full border-t border-slate-200 flex flex-col md:flex-row items-center justify-center gap-2">
        © {new Date().getFullYear()} Dhruv Mavani. All rights reserved. Built with <Image
          src="/next.svg"
          alt="Next.js"
          width={16}
          height={16}
          className="w-12 h-12 opacity-100 hover:opacity-100 transition-opacity"
        /> & Coffee☕.
      </footer>
    </main>
  );
}

// --- SUB-COMPONENTS FOR TIMELINE & PROJECTS ---

function OpenSourceCard({ item }: { item: typeof openSourceItems[0] }) {
  return (
    <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition duration-300 relative text-left">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
          <p className="text-slate-500 font-mono text-sm">{item.repo}</p>
        </div>
      </div>
      
      {item.bullets.length > 0 && (
        <ul className="list-disc list-outside ml-5 text-slate-600 leading-relaxed text-sm mb-6 space-y-2 marker:text-purple-400">
          {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}

      {item.stats && (
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="text-xs font-semibold px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg border border-slate-100"><strong className="text-slate-800">{item.stats.lines}</strong></span>
          <span className="text-xs font-semibold px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg border border-slate-100"><strong className="text-slate-800">{item.stats.commits}</strong></span>
          <span className="text-xs font-semibold px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg border border-slate-100"><strong className="text-slate-800">{item.stats.comments}</strong></span>
          <span className="text-xs font-semibold px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg border border-slate-100"><strong className="text-slate-800">{item.stats.files}</strong></span>
        </div>
      )}

      {item.link && (
        <a 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors"
        >
          → view pull request
        </a>
      )}
    </div>
  );
}

// --- PROJECT SIMULATION COMPONENTS ---

function CEXSimulator() {
  const [buys, setBuys] = useState<{ price: number; size: number }[]>([]);
  const [sells, setSells] = useState<{ price: number; size: number }[]>([]);
  const [lastPrice, setLastPrice] = useState(142.52);
  const [priceDirection, setPriceDirection] = useState<"up" | "down" | "flat">("flat");
  const [trades, setTrades] = useState<{ time: string; price: number; size: number; side: "buy" | "sell" }[]>([]);
  const [tradeSize, setTradeSize] = useState("1.5");
  const [tradePrice, setTradePrice] = useState("142.50");
  const [tradeSide, setTradeSide] = useState<"buy" | "sell">("buy");
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const generateOrders = () => {
      const b = [];
      const s = [];
      for (let i = 0; i < 5; i++) {
        b.push({
          price: parseFloat((lastPrice - 0.05 * (i + 1) - Math.random() * 0.02).toFixed(2)),
          size: parseFloat((Math.random() * 10 + 0.5).toFixed(2))
        });
        s.push({
          price: parseFloat((lastPrice + 0.05 * (i + 1) + Math.random() * 0.02).toFixed(2)),
          size: parseFloat((Math.random() * 10 + 0.5).toFixed(2))
        });
      }
      setBuys(b.sort((x, y) => y.price - x.price));
      setSells(s.sort((x, y) => x.price - y.price));
    };

    generateOrders();

    const interval = setInterval(() => {
      const delta = (Math.random() - 0.5) * 0.1;
      setLastPrice(prev => {
        const next = parseFloat((prev + delta).toFixed(2));
        setPriceDirection(delta > 0 ? "up" : "down");
        return next;
      });

      setBuys(prev => {
        const next = [...prev];
        const idx = Math.floor(Math.random() * next.length);
        next[idx] = {
          price: parseFloat((lastPrice - 0.05 * (idx + 1) - Math.random() * 0.02).toFixed(2)),
          size: parseFloat((Math.random() * 8 + 0.2).toFixed(2))
        };
        return next.sort((x, y) => y.price - x.price);
      });

      setSells(prev => {
        const next = [...prev];
        const idx = Math.floor(Math.random() * next.length);
        next[idx] = {
          price: parseFloat((lastPrice + 0.05 * (idx + 1) + Math.random() * 0.02).toFixed(2)),
          size: parseFloat((Math.random() * 8 + 0.2).toFixed(2))
        };
        return next.sort((x, y) => x.price - y.price);
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [lastPrice]);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const size = parseFloat(tradeSize);
    const price = parseFloat(tradePrice);
    if (isNaN(size) || size <= 0 || isNaN(price) || price <= 0) return;

    const newTrade = {
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      price,
      size,
      side: tradeSide
    };

    setTrades(prev => [newTrade, ...prev.slice(0, 4)]);
    setNotification(`Order placed: ${tradeSide.toUpperCase()} ${size} SOL @ $${price}`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 text-xs font-mono w-full flex flex-col gap-4">
      <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
        <span className="text-[#14F195] font-bold">MATCHING ENGINE ACTIVE</span>
        <span className={`font-bold transition-colors ${priceDirection === "up" ? "text-green-400" : priceDirection === "down" ? "text-red-400" : "text-slate-400"}`}>
          SOL: ${lastPrice.toFixed(2)} {priceDirection === "up" ? "▲" : priceDirection === "down" ? "▼" : ""}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Orderbook */}
        <div className="flex flex-col gap-2">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Order Book</div>
          <div className="flex flex-col gap-1">
            {sells.slice(0, 3).reverse().map((o, i) => (
              <div key={i} className="flex justify-between text-red-400/90 hover:bg-red-500/5 px-1 rounded transition-colors">
                <span>{o.price.toFixed(2)}</span>
                <span>{o.size.toFixed(2)}</span>
              </div>
            ))}
            <div className="border-y border-slate-800/40 py-1 my-1 text-center font-bold text-slate-350">
              ${lastPrice.toFixed(2)}
            </div>
            {buys.slice(0, 3).map((o, i) => (
              <div key={i} className="flex justify-between text-green-400/90 hover:bg-green-500/5 px-1 rounded transition-colors">
                <span>{o.price.toFixed(2)}</span>
                <span>{o.size.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trade execution */}
        <div className="flex flex-col gap-2">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Place Order</div>
          <form onSubmit={handlePlaceOrder} className="flex flex-col gap-2">
            <div className="flex bg-slate-900 rounded-lg p-0.5 border border-slate-800">
              <button
                type="button"
                onClick={() => setTradeSide("buy")}
                className={`flex-1 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${tradeSide === "buy" ? "bg-green-500 text-white shadow-md shadow-green-500/20" : "text-slate-400 hover:text-slate-200"}`}
              >
                BUY
              </button>
              <button
                type="button"
                onClick={() => setTradeSide("sell")}
                className={`flex-1 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${tradeSide === "sell" ? "bg-red-500 text-white shadow-md shadow-red-500/20" : "text-slate-400 hover:text-slate-200"}`}
              >
                SELL
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[9px] text-slate-500">SIZE (SOL)</label>
              <input
                type="text"
                value={tradeSize}
                onChange={e => setTradeSize(e.target.value)}
                className="bg-slate-900 border border-slate-800 rounded p-1 text-white outline-none focus:border-purple-500 text-right"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[9px] text-slate-500">PRICE (USD)</label>
              <input
                type="text"
                value={tradePrice}
                onChange={e => setTradePrice(e.target.value)}
                className="bg-slate-900 border border-slate-800 rounded p-1 text-white outline-none focus:border-purple-500 text-right"
              />
            </div>
            <button
              type="submit"
              className={`w-full py-1.5 rounded-lg text-white font-bold tracking-wide transition-all cursor-pointer ${tradeSide === "buy" ? "bg-green-650 hover:bg-green-600 active:scale-95 shadow-md shadow-green-500/10" : "bg-red-650 hover:bg-red-600 active:scale-95 shadow-md shadow-red-500/10"}`}
            >
              EXECUTE L3 MATCH
            </button>
          </form>
        </div>
      </div>

      <div className="mt-2 min-h-[24px] flex items-center justify-center text-center bg-slate-900/60 rounded-lg p-1 text-[10px] border border-slate-850/50">
        {notification ? (
          <span className="text-purple-400 font-semibold animate-pulse">{notification}</span>
        ) : trades.length > 0 ? (
          <span className="text-slate-400">
            Recent match: {trades[0].side.toUpperCase()} {trades[0].size} @ ${trades[0].price} [{trades[0].time}]
          </span>
        ) : (
          <span className="text-slate-500">Simulate orderbook matching locally</span>
        )}
      </div>
    </div>
  );
}

function LSP2StakingSimulator() {
  const [stakeAmount, setStakeAmount] = useState("10");
  const [apy, setApy] = useState(6.42);
  const [tvl, setTvl] = useState(1284502.80);
  const [solBalance, setSolBalance] = useState(100.00);
  const [msolBalance, setMsolBalance] = useState(0.00);
  const [txState, setTxState] = useState<"idle" | "calculating" | "anchor" | "success">("idle");
  const [mockSignature, setMockSignature] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setApy(prev => parseFloat((prev + (Math.random() - 0.5) * 0.02).toFixed(2)));
      setTvl(prev => prev + (Math.random() - 0.3) * 5.0);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleStake = () => {
    const amt = parseFloat(stakeAmount);
    if (isNaN(amt) || amt <= 0 || amt > solBalance) return;

    setTxState("calculating");
    
    setTimeout(() => {
      setTxState("anchor");
      setTimeout(() => {
        setSolBalance(prev => prev - amt);
        setMsolBalance(prev => prev + amt * 0.96);
        const chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
        let sig = "";
        for (let i = 0; i < 16; i++) {
          sig += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setMockSignature(sig + "...");
        setTxState("success");
      }, 1000);
    }, 800);
  };

  return (
    <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 text-xs font-mono w-full flex flex-col gap-4">
      <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
        <span className="text-[#9945FF] font-bold">SOLANA ANCHOR PROTOCOL ACTIVE</span>
        <span className="text-slate-400">APY: <span className="text-emerald-450 font-bold">{apy.toFixed(2)}%</span></span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col justify-between py-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800/50">
          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Staking LSD Stats</span>
            <div className="flex justify-between">
              <span className="text-slate-450">TVL:</span>
              <span className="text-slate-200 font-semibold">${tvl.toLocaleString("en-US", { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-450">Rate:</span>
              <span className="text-slate-200 font-semibold">1 mSOL = 1.0412 SOL</span>
            </div>
          </div>

          <div className="h-px bg-slate-800/50 my-2" />

          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Your Wallet</span>
            <div className="flex justify-between">
              <span className="text-slate-450">SOL:</span>
              <span className="text-green-450 font-bold">{solBalance.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-450">mSOL:</span>
              <span className="text-[#9945FF] font-bold">{msolBalance.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Stake SOL</span>
          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] text-slate-500">STAKE AMOUNT (SOL)</label>
            <div className="relative">
              <input
                type="text"
                value={stakeAmount}
                onChange={e => setStakeAmount(e.target.value)}
                disabled={txState !== "idle" && txState !== "success"}
                className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-white outline-none focus:border-purple-500 text-right pr-10"
              />
              <button 
                onClick={() => setStakeAmount(solBalance.toString())}
                disabled={txState !== "idle" && txState !== "success"}
                className="absolute right-2 top-2 text-[9px] text-purple-400 hover:text-purple-300 font-bold bg-purple-500/10 px-1.5 py-0.5 rounded cursor-pointer"
              >
                MAX
              </button>
            </div>
          </div>

          <button
            onClick={handleStake}
            disabled={txState !== "idle" && txState !== "success"}
            className="w-full py-2 bg-gradient-to-r from-[#9945FF] to-purple-600 hover:opacity-90 rounded-lg text-white font-bold tracking-wide active:scale-95 transition-all shadow-md shadow-purple-500/15 disabled:opacity-50 cursor-pointer"
          >
            STAKE SOL
          </button>
        </div>
      </div>

      <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-850/50 flex flex-col gap-1 min-h-[50px] justify-center text-[10px]">
        {txState === "idle" && (
          <span className="text-slate-500 text-center">Ready to stake. Click stake to trigger smart contract simulation.</span>
        )}
        {txState === "calculating" && (
          <span className="text-amber-400 flex items-center justify-center gap-1.5">
            <span className="animate-spin h-2.5 w-2.5 rounded-full border border-t-transparent border-amber-400" />
            Calculating lazy reward parameters on chain...
          </span>
        )}
        {txState === "anchor" && (
          <span className="text-purple-400 flex items-center justify-center gap-1.5">
            <span className="animate-spin h-2.5 w-2.5 rounded-full border border-t-transparent border-purple-400" />
            Invoking Anchor Program Instruction: StakingVault::mint_tokens
          </span>
        )}
        {txState === "success" && (
          <div className="flex flex-col gap-0.5 text-center">
            <span className="text-green-400 font-bold">✓ LIQUID TOKENS MINTED SUCCESSFULLY!</span>
            <span className="text-slate-500">Tx signature: <span className="text-purple-400 underline">{mockSignature}</span></span>
          </div>
        )}
      </div>
    </div>
  );
}

function LaunchpadSimulator() {
  const [name, setName] = useState("My Meme Token");
  const [symbol, setSymbol] = useState("MEME");
  const [supply, setSupply] = useState("1000000000");
  const [step, setStep] = useState<"idle" | "ipfs" | "pda" | "minting" | "completed">("idle");
  const [address, setAddress] = useState("");

  const handleLaunch = () => {
    if (!name || !symbol || !supply) return;
    setStep("ipfs");

    setTimeout(() => {
      setStep("pda");
      setTimeout(() => {
        setStep("minting");
        setTimeout(() => {
          const chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
          let addr = "";
          for (let i = 0; i < 28; i++) {
            addr += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          setAddress(addr + "...");
          setStep("completed");
        }, 1200);
      }, 1000);
    }, 800);
  };

  const resetSimulator = () => {
    setStep("idle");
    setAddress("");
  };

  return (
    <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 text-xs font-mono w-full flex flex-col gap-4">
      <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
        <span className="text-[#14F195] font-bold">SPL TOKEN LAUNCHPAD CONTROLLER</span>
        <span className="text-slate-400">Network: <span className="text-[#14F195] font-semibold">Solana Mainnet</span></span>
      </div>

      {step === "completed" ? (
        <div className="flex flex-col items-center justify-center py-6 text-center gap-3 animate-in zoom-in-95 duration-300">
          <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500 flex items-center justify-center text-green-400 text-lg">
            ✓
          </div>
          <div className="flex flex-col">
            <span className="text-green-400 font-bold text-sm">Token Deployed in 2 Minutes!</span>
            <span className="text-slate-400 mt-1">
              Symbol: <strong className="text-white">{symbol}</strong> | Supply: <strong className="text-white">{parseFloat(supply).toLocaleString()}</strong>
            </span>
            <span className="text-slate-500 text-[10px] mt-2 select-all">
              Token Address: <span className="text-purple-400 font-semibold">{address}</span>
            </span>
          </div>
          <button
            onClick={resetSimulator}
            className="mt-2 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-350 rounded-lg cursor-pointer"
          >
            Create Another Token
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label className="text-[9px] text-slate-500">TOKEN NAME</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={step !== "idle"}
                className="bg-slate-900 border border-slate-800 rounded p-1.5 text-white outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[9px] text-slate-500">SYMBOL</label>
              <input
                type="text"
                value={symbol}
                onChange={e => setSymbol(e.target.value)}
                disabled={step !== "idle"}
                className="bg-slate-900 border border-slate-800 rounded p-1.5 text-white outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[9px] text-slate-500">TOTAL SUPPLY</label>
              <input
                type="text"
                value={supply}
                onChange={e => setSupply(e.target.value)}
                disabled={step !== "idle"}
                className="bg-slate-900 border border-slate-800 rounded p-1.5 text-white outline-none focus:border-purple-500 text-right"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between py-1 bg-slate-900/60 p-3 rounded-xl border border-slate-800/50">
            <div className="flex flex-col gap-2">
              <div className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Deployment log</div>
              <div className="flex flex-col gap-2 text-[10px]">
                <div className={`flex items-center gap-1.5 ${step === "ipfs" ? "text-purple-400 font-bold" : step !== "idle" ? "text-green-400" : "text-slate-600"}`}>
                  <span>{step === "ipfs" ? "●" : step !== "idle" ? "✓" : "○"}</span>
                  <span>Upload metadata to IPFS</span>
                </div>
                <div className={`flex items-center gap-1.5 ${step === "pda" ? "text-purple-400 font-bold" : (step === "minting" || (step as string) === "completed") ? "text-green-400" : "text-slate-600"}`}>
                  <span>{step === "pda" ? "●" : (step === "minting" || (step as string) === "completed") ? "✓" : "○"}</span>
                  <span>Init Mint Account PDA</span>
                </div>
                <div className={`flex items-center gap-1.5 ${step === "minting" ? "text-purple-400 font-bold" : (step as string) === "completed" ? "text-green-400" : "text-slate-600"}`}>
                  <span>{step === "minting" ? "●" : (step as string) === "completed" ? "✓" : "○"}</span>
                  <span>Deploy & Mint Token</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleLaunch}
              disabled={step !== "idle"}
              className="w-full py-2 bg-gradient-to-r from-emerald-500 to-[#14F195] hover:opacity-90 rounded-lg text-slate-950 font-bold tracking-wide active:scale-95 transition-all shadow-md shadow-emerald-500/10 disabled:opacity-50 cursor-pointer"
            >
              LAUNCH ON CHAIN
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function WalletSimulator() {
  const [mnemonic, setMnemonic] = useState<string | null>(null);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setMnemonic(null);
    setPublicKey(null);

    setTimeout(() => {
      const wordsList = ["anchor", "solana", "rust", "low", "latency", "system", "proof", "stake", "liquid", "vault", "coffee", "matching", "engine", "deploy", "spl", "metadata"];
      const words = [];
      for (let i = 0; i < 12; i++) {
        words.push(wordsList[Math.floor(Math.random() * wordsList.length)]);
      }
      setMnemonic(words.join(" "));

      const chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
      let pk = "omni";
      for (let i = 0; i < 28; i++) {
        pk += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setPublicKey(pk + "...");
      setGenerating(false);
    }, 1200);
  };

  const handleCopy = () => {
    if (!publicKey) return;
    navigator.clipboard.writeText(publicKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 text-xs font-mono w-full flex flex-col gap-3">
      <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
        <span className="text-[#9945FF] font-bold">OMNIWALLET CRYPTO TOOLKIT</span>
        <span className="text-slate-400">Status: <span className="text-[#14F195] font-semibold">Secured</span></span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col justify-between py-1 bg-slate-900/60 p-3 rounded-xl border border-slate-800/55 min-h-[140px]">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Simulated Price Trend</span>
            <div className="h-12 w-full mt-2 relative">
              <svg className="w-full h-full" viewBox="0 0 100 30">
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9945ff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#9945ff" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,25 Q15,10 30,18 T60,5 T90,15 T100,2 L100,30 L0,30 Z"
                  fill="url(#gradient)"
                />
                <path
                  d="M0,25 Q15,10 30,18 T60,5 T90,15 T100,2"
                  fill="none"
                  stroke="#9945ff"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="flex justify-between mt-1 text-[8px] text-slate-500">
              <span>SOL: $142.50</span>
              <span className="text-green-400 font-bold">+5.82%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-2">
          {generating ? (
            <div className="flex flex-col items-center justify-center py-4 text-slate-400 gap-2">
              <span className="animate-spin h-4 w-4 rounded-full border border-t-transparent border-purple-500" />
              <span className="text-[10px] text-center">Generating Secure Seed...</span>
            </div>
          ) : publicKey ? (
            <div className="flex flex-col gap-1.5 animate-in zoom-in-95 duration-200">
              <div className="flex flex-col gap-0.5">
                <span className="text-[8px] text-slate-500 uppercase font-bold">12-Word Mnemonic Seed</span>
                <span className="bg-slate-900 p-1.5 rounded border border-slate-800 text-[9px] text-slate-400 leading-tight italic break-words">
                  {mnemonic}
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[8px] text-slate-500 uppercase font-bold">B58 Public Key</span>
                <div className="flex gap-1">
                  <span className="bg-slate-900 p-1 rounded border border-slate-800 text-[9px] text-[#14F195] font-semibold break-all flex-1 truncate">
                    {publicKey}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="px-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded cursor-pointer text-[8px]"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-4 flex flex-col gap-2 items-center">
              <span className="text-slate-500 text-[10px]">No wallet loaded. generate a mock keypair to test.</span>
              <button
                onClick={handleGenerate}
                className="py-1.5 px-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-lg font-bold tracking-wide active:scale-95 transition-all cursor-pointer text-[10px]"
              >
                CREATE KEYPAIR
              </button>
            </div>
          )}
        </div>
      </div>

      {publicKey && (
        <button
          onClick={handleGenerate}
          className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700/80 rounded-lg text-slate-350 font-bold active:scale-95 transition-all cursor-pointer text-[10px]"
        >
          GENERATE ANOTHER KEYPAIR
        </button>
      )}
    </div>
  );
}

const getProjectSimulator = (index: number) => {
  switch (index) {
    case 0:
      return <CEXSimulator />;
    case 1:
      return <LSP2StakingSimulator />;
    case 2:
      return <LaunchpadSimulator />;
    case 3:
      return <WalletSimulator />;
    default:
      return null;
  }
};



//-----------------------------------------------------interactivity of form-----------------------------------------------------------
function ContactForm() {
  // 1. State to manage the form lifecycle
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    // Your Access Key
    formData.append("access_key", "3c316ebd-c4d9-4d79-b26a-62e4c7ef47af");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  // 2. Success View (What shows after sending)
  if (status === "success") {
    return (
      <div className="animate-in zoom-in duration-500 py-20 flex flex-col items-center text-center bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Message Sent! 🚀</h3>
        <p className="text-slate-300 text-lg max-w-md">
          Thanks for reaching out. I've received your message and will get back to you shortly!
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 px-6 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition text-sm font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  // 3. The Form View
  return (
    <form
      onSubmit={handleSubmit}
      className="text-left flex flex-col gap-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
    >
      {/* Error Message */}
      {status === "error" && (
        <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-center text-sm font-medium animate-pulse">
          ❌ Something went wrong. Please try again later.
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-slate-400 text-sm font-bold ml-1 mb-2 tracking-wide">NAME</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          disabled={status === "submitting"}
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all disabled:opacity-50"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-slate-400 text-sm font-bold ml-1 mb-2 tracking-wide">EMAIL</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          disabled={status === "submitting"}
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all disabled:opacity-50"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-slate-400 text-sm font-bold ml-1 mb-2 tracking-wide">MESSAGE</label>
        <textarea
          name="message"
          id="message"
          required
          rows={4}
          disabled={status === "submitting"}
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none disabled:opacity-50"
          placeholder="Hey Dhruv, I have an exciting project for you..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-amber-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          "Send Message 💬"
        )}
      </button>
    </form>
  );
}