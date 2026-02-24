import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/70 p-4" onClick={onClose}>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.name}</h3>
              <button onClick={onClose} className="rounded-full border border-slate-300 p-2 dark:border-slate-700"><X size={16} /></button>
            </div>
            <p className="text-slate-600 dark:text-slate-300">{project.summary}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-200">
              {project.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
