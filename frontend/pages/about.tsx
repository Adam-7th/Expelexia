import { motion } from 'framer-motion';

const workflow = [
  'Ingest lab inputs: protocols, CSV measurements, notes, and optional images',
  'Run AI-assisted analysis with safety checks and confidence-aware recommendations',
  'Generate explainable outputs: text insights, chart-ready payloads, and report narratives',
  'Visualize decisions in the built-in web dashboard and export a professional research report',
];

const architectureSummary = [
  { title: 'Inputs', desc: 'CSV files, lab notes, images, IoT feeds' },
  { title: 'API Layer', desc: 'FastAPI endpoints for upload, analysis, dashboard, and reporting' },
  { title: 'Storage', desc: 'Local data folders plus Azure Blob Storage sync' },
  { title: 'AI Layer', desc: 'Azure OpenAI with Azure Cognitive Services checks' },
  { title: 'Consumption', desc: 'Web dashboard charts and downloadable PDF reports' },
];

const values = [
  'Responsible AI by design',
  'Clear and auditable next-step reasoning',
  'Modular architecture for fast expansion',
  'Research-first user experience',
];

const hackathonHighlights = [
  { title: 'Challenge Window', detail: 'March 16–27, 2026' },
  { title: 'Judging Model', detail: 'Performance 25% · Innovation 25% · Breadth of Azure Services 25% · Responsible AI 25%' },
  { title: 'Prize Structure', detail: 'Top prize $10,000 · Two second-place prizes $5,000 · Three third-place prizes $2,500' },
  { title: 'Product Position', detail: 'Company-style AI Lab Notebook Assistant for safe experiment reasoning and decision support' },
];

const keyDates = [
  'Applications open: Feb 25',
  'Application deadline: Mar 12',
  'Hackathon invites begin: Mar 16',
  'Challenge period: Mar 16–27',
  'Winners announced: Apr 3',
];

const references = [
  { label: 'Hackathon Project Page', href: 'https://innovationstudio.microsoft.com/hackathons/Innovation-Challenge-Spring-2025/project/122022' },
  { label: 'Azure Cognitive Services Studio', href: 'https://contentsafety.cognitive.azure.com/' },
  { label: 'Responsible AI Toolbox', href: 'https://github.com/microsoft/responsible-ai-toolbox' },
  { label: 'Python OpenAI Demos', href: 'https://github.com/Azure-Samples/python-openai-demos' },
];

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="card">
        <h1 className="text-2xl font-bold">About Expelexia – AI Lab Notebook Assistant</h1>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
          Expelexia is an AI-powered lab notebook assistant designed to help researchers reason through experiments safely. It analyzes experiment protocols,
          CSV measurements, and optional images, then suggests safe next steps with clear explanations.
        </p>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
          Innovation Challenge March 2026 · Start Date: March 16, 2026 · End Date: March 27, 2026
        </p>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-2">
        {workflow.map((item, index) => (
          <motion.div key={item} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="card">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary">Step {index + 1}</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{item}</p>
          </motion.div>
        ))}
      </div>

      <div className="card">
        <h2 className="section-title">Azure Architecture at a Glance</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {architectureSummary.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className="rounded-xl border border-gray-200 p-3 dark:border-gray-800"
            >
              <p className="text-sm font-semibold text-brand-primary">{item.title}</p>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="card">
          <h2 className="section-title">Dashboard Role</h2>
          <p className="text-sm text-gray-700 dark:text-gray-200">
            The web dashboard transforms model output into team-facing evidence views. It visualizes experiment progression, highlights anomalies,
            and tracks confidence over time so reviewers can validate each AI suggestion before taking action.
          </p>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
            Expelexia uses this layer to keep AI recommendations explainable, measurable, and presentation-ready without external BI tools.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="card">
          <h2 className="section-title">Challenge Reference</h2>
          <p className="text-sm text-gray-700 dark:text-gray-200">
            Microsoft and Women in Cloud invite you to participate in an exclusive AI Innovation Challenge.
          </p>
          <a
            href="https://innovationstudio.microsoft.com/hackathons/Innovation-Challenge-Spring-2025/project/122022"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            Open Hackathon Project Link
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="card">
        <h2 className="section-title">Microsoft Innovation Challenge Details</h2>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          This About section intentionally keeps all challenge context, company-style positioning, and related visual assets in one place for judges and reviewers.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {hackathonHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl border border-gray-200 p-3 dark:border-gray-800"
            >
              <p className="text-sm font-semibold text-brand-primary">{item.title}</p>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">{item.detail}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
            <img src="/assets/Innovation%20Challenge.avif" alt="Women in Cloud and Microsoft AI Innovation Challenge" className="h-auto w-full" />
          </div>
          <div className="rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
            <p className="text-sm font-semibold text-brand-primary">Key Dates & Qualification</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-200">
              {keyDates.map((dateItem) => (
                <li key={dateItem}>• {dateItem}</li>
              ))}
              <li>• Qualification: Applied Skills or Azure certifications (AI Engineer Associate, Azure Engineer Associate, Azure Data Science Associate)</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="card">
        <h2 className="section-title">Branding & Mission</h2>
        <div className="flex flex-wrap items-center gap-4">
          <img src="/assets/microsoft-hackathon.svg" alt="Microsoft Hackathon" className="h-9 w-auto" />
          <p className="text-sm text-gray-700 dark:text-gray-200">
            Built as a clean, modern, company-style AI product narrative with strong motion design, researcher-centered workflows, and trust-focused reporting.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {values.map((value) => (
            <span key={value} className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold dark:border-gray-700">
              {value}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {references.map((reference) => (
            <a
              key={reference.href}
              href={reference.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-gray-300 px-3 py-1 text-xs font-semibold hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              {reference.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
