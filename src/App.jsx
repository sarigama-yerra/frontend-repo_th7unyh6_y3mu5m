import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="pricing" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-zinc-200/70 bg-white/70 backdrop-blur p-8 shadow-sm">
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-semibold">Simple pricing</h3>
                  <p className="mt-2 text-zinc-600">Start free, scale with transparent rates. No hidden fees.</p>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                    <li>• Free virtual card issuance</li>
                    <li>• 1% + 10¢ per successful card charge</li>
                    <li>• Volume discounts available</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-zinc-200/70 bg-white/80 p-6">
                  <div className="text-4xl font-semibold tracking-tight">$0<span className="text-base align-top">/mo</span></div>
                  <p className="text-sm text-zinc-600 mt-1">Pay as you go</p>
                  <a href="#cta" className="mt-6 inline-flex items-center rounded-xl bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800 transition-colors">Create your card</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold">Built for modern finance teams</h3>
            <p className="mt-3 text-zinc-600">Fast, minimal, and secure. Designed with glassmorphism and subtle motion to keep the focus on what matters: clarity.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
