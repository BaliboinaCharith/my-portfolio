import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, Code, BookOpen, Briefcase } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Hero Section */}
      <header className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
          Charith Baliboina [cite: 2]
        </h1>
        <p className="text-xl text-slate-400 mb-8 italic">"Darling"</p>
        <div className="flex justify-center gap-6 mb-10">
          <a href="mailto:baliboinacharith@gmail.com" className="hover:text-blue-400 transition-colors"><Mail size={24} /></a>
          <a href="https://linkedin.com/in/charith" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
          <a href="https://github.com/charith" className="hover:text-blue-400 transition-colors"><Github size={24} /></a>
        </div>
        <p className="text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto">
          AI Sales and Marketing Analyst at ThinkByte with a B.Tech in Computer Science specialized in AI & ML[cite: 7]. 
          Focused on automating B2B cycles and developing high-accuracy machine learning models.
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-20 space-y-24">
        
        {/* Experience Section */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-2">
            <Briefcase className="text-blue-400" />
            <h2 className="text-2xl font-semibold">Professional Experience</h2>
          </div>
          <div className="space-y-12">
            <div className="relative pl-6 border-l-2 border-slate-800">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></span>
              <h3 className="text-xl font-bold text-white">AI Marketing and SM Executive [cite: 22]</h3>
              <p className="text-blue-400 font-medium">Think Byte AI | Nov 2025 - Present [cite: 22, 23]</p>
              <ul className="mt-4 space-y-2 text-slate-400 list-disc ml-4">
                <li>Built a smart, self-operating Sales Agent to automate lead information organization[cite: 24].</li>
                <li>Leveraged Claude Code and Gemini to automate daily marketing tasks and content creation[cite: 25].</li>
                <li>Developed website frameworks and visual assets using Nano Banana and Figma[cite: 26].</li>
              </ul>
            </div>
            
            <div className="relative pl-6 border-l-2 border-slate-800">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-700"></span>
              <h3 className="text-xl font-bold text-white">Machine Learning Engineer Intern [cite: 13, 15]</h3>
              <p className="text-blue-400 font-medium">Intrain Tech | Oct 2023 - Nov 2023 [cite: 14, 20]</p>
              <p className="mt-2 text-slate-400">Deployed Retail Price Optimization models using Flask and created data visualizations[cite: 21].</p>
            </div>
          </div>
        </section>

        {/* Research & Projects */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-2">
            <BookOpen className="text-emerald-400" />
            <h2 className="text-2xl font-semibold">Research Contributions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Rice Leaf Disease Detection",
                desc: "CNN & Inception V3 model for plant disease classification with data augmentation[cite: 28, 31].",
                link: "https://bpasjournals.com/zoology/index.php/journal/article/view/243/133"
              },
              {
                title: "Bank Customer Churn",
                desc: "Utilized ANN, XGBoost, and Random Forest to achieve high prediction accuracy[cite: 38, 41].",
                link: "https://bpasjournals.com/zoology/index.php/journal/article/view/242/132"
              }
            ].map((project, i) => (
              <div key={i} className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all group">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400">{project.title}</h3>
                <p className="text-sm text-slate-400 my-3">{project.desc}</p>
                <a href={project.link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-white transition-colors">
                  View Publication <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-2">
            <Code className="text-purple-400" />
            <h2 className="text-2xl font-semibold">Technical Arsenal</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Python", "Machine Learning", "Deep Learning", "NLP", "Flask", "Claude Code", "Nano Banana", "Figma", "HTML/CSS"].map(skill => (
              <span key={skill} className="px-4 py-2 bg-slate-800 rounded-full text-sm font-medium border border-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education & Certs */}
        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-2">
              <Award className="text-yellow-400" />
              <h2 className="text-2xl font-semibold">Education</h2>
            </div>
            <div className="space-y-4 text-slate-400">
              <div>
                <p className="text-white font-bold">VIT Amaravathi [cite: 6]</p>
                <p>B.Tech in CS (AI & ML) [cite: 7]</p>
                <p className="text-sm italic">CGPA: 8.57/10 [cite: 17]</p>
              </div>
              <p>MPC State Board (9.7/10) [cite: 9, 19]</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-2">
              <Award className="text-orange-400" />
              <h2 className="text-2xl font-semibold">Languages</h2>
            </div>
            <p className="text-slate-400">English, Telugu, Hindi [cite: 58]</p>
          </div>
        </section>

      </main>

      <footer className="py-10 text-center border-t border-slate-900 text-slate-500 text-sm">
        © 2026 Charith Baliboina. Built for the future of AI.
      </footer>
    </div>
  );
};

export default Portfolio;