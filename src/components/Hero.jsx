import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.20)_0%,rgba(236,72,153,0.15)_45%,rgba(255,255,255,0)_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-600 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Now with 3D Spline cards
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900">
              Modern payments, reimagined
            </h1>
            <p className="mt-4 text-zinc-600 text-base sm:text-lg">
              A sleek, minimalist fintech experience built with glassmorphism and smooth motion. Issue virtual cards, manage spend, and get insights in real time.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center rounded-xl bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800 transition-colors">
                Get started free
              </a>
              <a href="#features" className="inline-flex items-center rounded-xl border border-zinc-300 px-5 py-3 text-zinc-800 hover:bg-zinc-50">
                Explore features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-zinc-500">
              <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-400" /> No hidden fees</div>
              <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-400" /> Live support</div>
              <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-400" /> Bank-grade security</div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-3xl overflow-hidden border border-white/20 bg-white/60 shadow-xl backdrop-blur">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
