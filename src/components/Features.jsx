export default function Features() {
  const items = [
    {
      title: 'Glassmorphic Cards',
      desc: 'Issue virtual and physical cards with dynamic spending rules.',
    },
    {
      title: 'Real-time Insights',
      desc: 'Track spend, subscriptions, and budgets live with alerts.',
    },
    {
      title: 'Seamless Integrations',
      desc: 'Plug into your stack with webhooks and accounting tools.',
    },
  ]

  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-zinc-200/70 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 border border-white/50" />
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{it.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{it.desc}</p>
              <button className="mt-4 text-sm text-zinc-900/70 hover:text-zinc-900">Learn more →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
