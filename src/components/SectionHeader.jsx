export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{subtitle}</p> : null}
    </div>
  )
}
