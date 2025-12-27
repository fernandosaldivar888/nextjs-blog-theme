import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-16 pb-12 text-center">
      <Link
        href="/"
        className="inline-flex items-center gap-4 rounded-full border border-amber-400/40 bg-amber-400/10 px-6 py-3 text-left transition hover:border-amber-300/70 hover:bg-amber-400/20"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-amber-300 to-orange-500 text-lg font-semibold text-slate-900 shadow-[0_16px_30px_-16px_rgba(251,191,36,0.75)]">
          F
        </span>
        <span className="text-xl font-semibold text-white">{name}</span>
      </Link>
    </header>
  );
}
