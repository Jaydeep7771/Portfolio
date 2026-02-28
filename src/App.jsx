import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Download, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Navbar from './components/Navbar'
import ProjectModal from './components/ProjectModal'
import ScrollProgress from './components/ScrollProgress'
import SectionHeader from './components/SectionHeader'
import { experience, functionalSkills, projects, stats, strengths, technicalSkills } from './data'

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.45 }
}

export default function App() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-hidden pt-16">
        <section id="home" className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-100/80 via-transparent to-transparent dark:from-brand-900/20" />
          <div className="section grid min-h-[88vh] items-center gap-12 py-20 lg:grid-cols-2">
            <motion.div {...reveal}>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-1 text-sm text-brand-700 dark:border-brand-800 dark:bg-slate-900/60 dark:text-brand-200">
                <MapPin size={14} /> Chennai, India
              </p>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">Jaydeep Manchanda</h1>
              <p className="mt-3 text-xl font-medium text-brand-600 dark:text-brand-300">Junior Business Analyst</p>
              <p className="mt-6 max-w-xl text-slate-600 dark:text-slate-300">Detail-oriented Business Analyst with hands-on experience in data analysis, dashboard development, and process improvement. Passionate about building practical, data-driven solutions.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/Jaydeep_Manchanda_Resume.pdf" download className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700"><Download size={16} /> Download Resume</a>
                <a href="#projects" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold dark:border-slate-700">View Projects <ArrowRight size={16} /></a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold dark:border-slate-700">Contact Me</a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-slate-600 dark:text-slate-300">
                <a href="https://www.linkedin.com/in/jaydeepmanchanda/" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 p-2 dark:border-slate-700"><Linkedin size={16} /></a>
                <a href="mailto:manchandajaydeep@gmail.com" className="rounded-full border border-slate-300 p-2 dark:border-slate-700"><Mail size={16} /></a>
              </div>
            </motion.div>
            <motion.div {...reveal} className="glass-card p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                    <p className="text-2xl font-bold text-brand-600 dark:text-brand-300">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section id="about" className="section py-20" {...reveal}>
          <SectionHeader eyebrow="About" title="Business-first, data-driven mindset" subtitle="I translate business goals into actionable requirements, dashboards, and operational improvements that create measurable impact." />
          <div className="glass-card p-8">
            <p className="text-slate-600 dark:text-slate-300">As a Junior Business Analyst, I enjoy working at the intersection of business, technology, and operations. My focus is to deliver clear requirements, practical workflows, and reliable analytics that support better decision-making.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {strengths.map((strength) => (
                <span key={strength} className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-200">{strength}</span>
              ))}
            </div>
          </div>
        </motion.section>

        <section id="skills" className="section py-20">
          <SectionHeader eyebrow="Skills" title="Technical and functional capabilities" />
          <div className="grid gap-8 lg:grid-cols-2">
            {[['Technical Skills', technicalSkills], ['Functional Skills', functionalSkills]].map(([title, items]) => (
              <motion.div key={title} {...reveal} className="glass-card p-6">
                <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {items.map((skill) => (
                    <div key={skill.name} className="group rounded-xl border border-slate-200 p-3 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md dark:border-slate-800">
                      <skill.icon size={18} className="text-brand-600 dark:text-brand-300" />
                      <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="section py-20">
          <SectionHeader eyebrow="Experience" title="Career timeline" />
          <div className="relative ml-3 border-l border-slate-300 pl-6 dark:border-slate-700">
            {experience.map((job) => (
              <motion.div key={job.company} {...reveal} className="relative mb-8">
                <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-brand-500" />
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                  <p className="text-brand-600 dark:text-brand-300">{job.company}</p>
                  <p className="mt-1 text-sm text-slate-500">{job.duration}</p>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-300">
                    {job.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="section py-20">
          <SectionHeader eyebrow="Projects" title="Selected business impact initiatives" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <motion.article key={project.name} {...reveal} className="glass-card flex flex-col p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  {project.metrics.map((metric) => (
                    <li key={metric} className="rounded-lg bg-slate-100 px-3 py-2 dark:bg-slate-800">{metric}</li>
                  ))}
                </ul>
                <button onClick={() => setActiveProject(project)} className="mt-5 w-fit rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:border-brand-400 dark:border-slate-700">View Details</button>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section id="education" className="section py-20" {...reveal}>
          <SectionHeader eyebrow="Education" title="Academic foundation" />
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Bachelor’s Degree in Computer Science</h3>
            <p className="mt-1 text-brand-600 dark:text-brand-300">Chandigarh University</p>
            <p className="mt-2 text-slate-600 dark:text-slate-300">GPA: 8.1/10 • 2020 – 2024</p>
          </div>
        </motion.section>

        <section id="contact" className="section pb-20 pt-20">
          <SectionHeader eyebrow="Contact" title="Let’s connect" subtitle="Open to Business Analyst opportunities and collaboration." />
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.form {...reveal} className="glass-card space-y-4 p-6">
              <input type="text" placeholder="Name" className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 outline-none focus:border-brand-500 dark:border-slate-700" />
              <input type="email" placeholder="Email" className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 outline-none focus:border-brand-500 dark:border-slate-700" />
              <textarea rows="5" placeholder="Message" className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 outline-none focus:border-brand-500 dark:border-slate-700" />
              <button type="submit" className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white">Send Message</button>
            </motion.form>
            <motion.div {...reveal} className="glass-card space-y-4 p-6 text-slate-700 dark:text-slate-200">
              <p className="inline-flex items-center gap-2"><Mail size={16} /> manchandajaydeep@gmail.com</p>
              <p className="inline-flex items-center gap-2"><Phone size={16} /> +91-9915641031</p>
              <a href="https://www.linkedin.com/in/jaydeepmanchanda/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-300"><Linkedin size={16} /> LinkedIn Profile</a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800">© {new Date().getFullYear()} Jaydeep Manchanda. Built with React, Tailwind, and Framer Motion.</footer>

      <AnimatePresence>
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      </AnimatePresence>
    </>
  )
}
