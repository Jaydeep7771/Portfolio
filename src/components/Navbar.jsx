import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="section flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-tight text-brand-700 dark:text-brand-100">JM</a>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <a key={item} href={`#${item}`} className="text-sm font-medium capitalize text-slate-600 transition hover:text-brand-600 dark:text-slate-300">
              {item}
            </a>
          ))}
          <button onClick={() => setDark((prev) => !prev)} className="rounded-full border border-slate-300 p-2 dark:border-slate-700" aria-label="Toggle theme">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
        <button className="rounded-md border border-slate-300 p-2 md:hidden dark:border-slate-700" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="section flex flex-col gap-2 pb-4 md:hidden">
          {navLinks.map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 capitalize text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
              {item}
            </a>
          ))}
          <button onClick={() => setDark((prev) => !prev)} className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm dark:border-slate-700">
            {dark ? <Sun size={15} /> : <Moon size={15} />} {dark ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      )}
    </header>
  )
}
