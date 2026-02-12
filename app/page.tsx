"use client";

import Image from "next/image";
import { useState } from "react";

// --- DATA: PROJECTS ---
const projects = [
  {
    title: "Sangini Advanced Women’s Care",
    desc: "Built a Shopify-based hospital website with appointment booking, service pages, responsive design, and custom UI enhancements.",
    link: "https://sanginiadvancedwomenscare.myshopify.com",
    tag: "Shopify"
  },
  {
    title: "Merituno – Gamified Learning",
    desc: "Developed a React + Firebase platform featuring XP progression, quizzes, dashboards, and interactive learning modules.",
    link: "https://github.com/Dhruv-mavani/Merituno-Learn2Earn-",
    tag: "React + Firebase"
  },
  {
    title: "VTOL Bi-Copter Prototype",
    desc: "Designed and built a UAV prototype with 3D printing, aerodynamics optimization, and cost-efficient engineering.",
    link: "https://www.linkedin.com/posts/dhruvmavanii_vtol-bicopter-3dprinting-activity-7331290468707733505-C9yG",
    tag: "Engineering"
  },
  {
    title: "Shopify Client Customizations",
    desc: "Worked on real-world Shopify and WordPress projects, improving UI, navigation, responsiveness, and user experience.",
    link: "https://sanginiadvancedwomenscare.myshopify.com",
    tag: "Freelance"
  },
];





// --- DATA: SKILLS ---
const skillCategories = [
  {
    title: "Frontend",
    skills: [{name: "React.js", icon: "/react.svg"}, 
      {name: "Next.js", icon: "/Next.svg"}, 
      {name: "Tailwind CSS", icon: "/Tailwind.svg"}, 
      {name: "JavaScript (ES6+)", icon: "/js.svg"},
      {name: "HTML5", icon: "/HTML.svg"},
      {name: "CSS3", icon: "/css3.svg"}]
  },
  {
    title: "Backend & Database",
    skills: [{name: "Node.js", icon: "/node.svg"},
      {name: "Firebase", icon: "/firebase.svg"},
      {name: "MongoDB", icon: "/mongodb.svg"},
      {name: "REST APIs", icon: "/restAPI.svg"}]
  },
  {
    title: "Tools & Platforms",
    skills: [{name: "Git & GitHub", icon: "/github.svg"},
      {name: "VS Code", icon: "/vs-code.svg"},
      {name: "Shopify Liquid", icon: "/shopify.svg"},
      {name: "Vercel", icon: "/Vercel.svg"}]
  },
  {
    title: "Core Competencies",
    skills: [
      { name: "UI/UX Design", icon: "" }, 
      { name: "Problem Solving", icon: "" },
      { name: "Responsive Design", icon: "" },
      { name: "SEO Basics", icon: "" }
    ]
  },
];

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState("dev");

  return (
    <main className="pt-24 min-h-screen flex flex-col items-center px-6 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decorative Blob (Optional subtle gradient) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-100/50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />

      <div className="w-full max-w-5xl z-10">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col items-center text-center animate-fade-in-up">
          
          <div className="mb-8 w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden border-[6px] border-white shadow-2xl transform hover:scale-105 transition duration-500">
            <Image
              src="/Me.jpeg"
              alt="Dhruv Mavani"
              width={220}
              height={220}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl drop-shadow-sm">
            Turning coffee into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
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
        </div>

        {/* --- SOCIAL LINKS ROW (Centered) --- */}
<div className="mt-12 w-full flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
  
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
</div>

        

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="mt-32 w-full scroll-mt-24">
           <div className="flex flex-col items-center mb-12">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-2">Expertise</span>
            <h2 className="text-4xl font-bold text-slate-900">Tech Stack</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b pb-4 border-slate-100">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx} 
                      className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-100 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-100 transition-colors cursor-default"
                    >
                      {/* 1. Show Icon (Only if it's not empty) */}
                      {skill.icon && (
                        <Image 
                          src={skill.icon} 
                          alt={skill.name} 
                          width={20} 
                          height={20} 
                          className="w-5 h-5" 
                        />
                      )}
                      
                      {/* 2. Show Name (This is what fixed the error!) */}
                      {skill.name} 
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience" className="mt-32 w-full scroll-mt-24">
          <div className="flex flex-col items-center mb-12">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-2">Career</span>
            <h2 className="text-4xl font-bold text-slate-900">Experience</h2>
          </div>

          <div className="relative p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
            {/* Timeline dot decoration */}
            <div className="absolute top-8 left-0 w-2 h-16 bg-orange-500 rounded-r-full"></div>
            
            <div className="ml-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-2xl font-bold text-slate-900">Web Development Intern</h3>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-semibold rounded-full mt-2 md:mt-0 w-fit">
                  Jan 2026 – Mar 2026
                </span>
              </div>
              <p className="text-lg font-medium text-orange-600 mb-4">Hunani Infotech</p>
              <p className="text-slate-600 leading-relaxed">
                Worked on real client projects involving Shopify and WordPress
                customization, responsive design improvements, and user experience
                enhancements.
              </p>
            </div>
          </div>
        </section>


        {/* --- INTERACTIVE ABOUT SECTION --- */}
<section id="about" className="mt-32 w-full text-center scroll-mt-24">
  <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">About Me</span>
  <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-8">Get to know the real Dhruv</h2>

  {/* Interactive Card Container */}
  <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
    
    {/* Tab Switcher */}
    <div className="flex flex-wrap border-b border-slate-100">
      {[
        { id: "dev", label: "👨‍💻 The Developer", color: "bg-blue-50 text-blue-600" },
        { id: "student", label: "🎓 The Student", color: "bg-emerald-50 text-emerald-600" },
        { id: "human", label: "☕️ The Human", color: "bg-orange-50 text-orange-600" },
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 py-4 text-sm md:text-base font-bold transition-all duration-300 ${
            activeTab === tab.id
              ? `${tab.color} shadow-inner`
              : "text-slate-500 hover:bg-slate-50"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* Dynamic Content Area */}
    <div className="p-8 md:p-12 min-h-[250px] flex flex-col justify-center items-center transition-all duration-500">
      
      {activeTab === "dev" && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Code that means business.</h3>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            I don't just write code; I build solutions. Specializing in <strong className="text-blue-600">React.js</strong> and <strong className="text-green-600">Shopify</strong>, I bridge the gap between complex backend logic and smooth, buttery frontend experiences.
          </p>
          {/* --- FIXED BADGES (HIGH CONTRAST) --- */}
                  <div className="mt-6 flex gap-3 justify-center flex-wrap">
                     <span className="px-4 py-2 bg-slate-800 text-white rounded-full text-sm font-bold shadow-md transform hover:scale-105 transition-transform cursor-default">
                        🚀 Performance Obsessed
                     </span>
                     <span className="px-4 py-2 bg-slate-800 text-white rounded-full text-sm font-bold shadow-md transform hover:scale-105 transition-transform cursor-default">
                        💎 Pixel Perfect
                     </span>
                  </div>
                </div>
              )}

              {activeTab === "student" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Always learning, always growing.</h3>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                    Currently pursuing my <strong className="text-emerald-600">B.Tech in Computer Science</strong>. 
                    Academic theory is great, but I believe in getting my hands dirty with real-world projects. 
                    I treat every assignment like a production-level product.
                  </p>
                  {/* --- FIXED BADGES (HIGH CONTRAST) --- */}
                  <div className="mt-6 flex gap-3 justify-center flex-wrap">
                     <span className="px-4 py-2 bg-slate-800 text-white rounded-full text-sm font-bold shadow-md transform hover:scale-105 transition-transform cursor-default">
                        📚 CS Major
                     </span>
                     <span className="px-4 py-2 bg-slate-800 text-white rounded-full text-sm font-bold shadow-md transform hover:scale-105 transition-transform cursor-default">
                        🧠 Fast Learner
                     </span>
                  </div>
                </div>
              )}

              {activeTab === "human" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Powered by Pizza & Caffeine.</h3>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                    When I'm not debugging, I'm probably hunting for the best <strong className="text-orange-600">coffee</strong> in town 
                    or grabbing a slice of <strong className="text-orange-600">pizza</strong>. 
                    I believe the best ideas happen when you step away from the keyboard (usually to find food).
                  </p>
                  {/* --- FIXED BADGES (HIGH CONTRAST) --- */}
                  <div className="mt-6 flex gap-3 justify-center flex-wrap">
                     <span className="px-4 py-2 bg-slate-800 text-white rounded-full text-sm font-bold shadow-md transform hover:scale-105 transition-transform cursor-default">
                        🍕 Pizza Lover
                     </span>
                     <span className="px-4 py-2 bg-slate-800 text-white rounded-full text-sm font-bold shadow-md transform hover:scale-105 transition-transform cursor-default">
                        ☕️ Coffee Snob
                     </span>
                     <span className="px-4 py-2 bg-slate-800 text-white rounded-full text-sm font-bold shadow-md transform hover:scale-105 transition-transform cursor-default">
                        🎸 Guitar & Casio
                     </span>
          </div>
        </div>
      )}

    </div>
  </div>
</section>

        
        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="mt-32 w-full scroll-mt-24">
          <div className="flex flex-col items-center mb-12">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-2">My Work</span>
            <h2 className="text-4xl font-bold text-slate-900">Featured Projects</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <a 
                key={index}
                href={project.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold uppercase rounded-full tracking-wide">
                    {project.tag}
                  </span>
                  <span className="text-slate-300 group-hover:text-orange-500 transition-colors text-xl">↗</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {project.desc}
                </p>
              </a>
            ))}
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
      background: linear-gradient(to right, #fbbf24, #f97316, #ffffff, #fbbf24);
      background-size: 200% auto;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      animation: textShine 3s linear infinite;
    }
  `}</style>

  <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 text-white shadow-2xl relative overflow-hidden">
    
    {/* Decorative background blobs */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
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

      <footer className="py-10 text-center text-slate-400 text-sm w-full border-t border-slate-200">
        © {new Date().getFullYear()} Dhruv Mavani. All rights reserved. Built with Next.js & Coffee☕.
      </footer>
    </main>
  );
}


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
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all disabled:opacity-50"
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
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all disabled:opacity-50"
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
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none disabled:opacity-50"
          placeholder="Hey Dhruv, I have an exciting project for you..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-lg shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02] transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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