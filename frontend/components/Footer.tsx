export default function Footer() {
  return (
    <footer className="border-t border-white/50 bg-white/55 py-6 text-xs text-gray-600 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/65 dark:text-gray-300">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">© {new Date().getFullYear()} Expelexia Lab Assistant</p>
            <p className="mt-1">Microsoft Hackathon • Azure AI + Lab Analytics</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
            <a href="/" className="hover:text-brand-primary">Home</a>
            <a href="/upload" className="hover:text-brand-primary">Upload</a>
            <a href="/analysis" className="hover:text-brand-primary">Analysis</a>
            <a href="/reports" className="hover:text-brand-primary">Reports</a>
            <a href="/about" className="hover:text-brand-primary">About</a>
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-1 text-[11px] sm:flex-row sm:items-center sm:justify-between">
          <p>Built for safe, explainable lab-data decisions with AI support.</p>
          <a href="mailto:support.expelexia@gmail.com" className="font-medium hover:text-brand-primary">support.expelexia@gmail.com</a>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-gray-200/70 pt-3 dark:border-gray-800/80">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-300">Partners</span>
          <img src="/assets/microsoft-hackathon.svg" alt="Microsoft Partner" className="h-7 w-auto" />
          <a
            href="https://womenincloud.com/aichallenge/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-1 py-1"
          >
            <img src="/assets/women-in-cloud-logo.png" alt="Women in Cloud Partner" className="h-9 w-auto rounded-sm" />
            <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-200">Women in Cloud</span>
          </a>
          <a
            href="https://womenincloud.com/aichallenge/"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-medium text-brand-primary hover:underline"
          >
            Official Challenge Partner Context
          </a>
        </div>
      </div>
    </footer>
  );
}
