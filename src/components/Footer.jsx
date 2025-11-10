export default function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200/70 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
          <span>© {new Date().getFullYear()} FinTouch</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-zinc-700">Privacy</a>
          <a href="#" className="hover:text-zinc-700">Terms</a>
          <a href="#" className="hover:text-zinc-700">Contact</a>
        </div>
      </div>
    </footer>
  )
}
