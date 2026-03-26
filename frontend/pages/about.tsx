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
        <h2 className="section-title">Our Team: NeuraForge</h2>
        <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">
          Our team, <b>NeuraForge</b>, brings together highly skilled and diverse professionals with a strong background in AI, cloud computing, full-stack development, and data analytics. Each member has hands-on experience from internships, research, and projects in both academic and professional settings. Our combined technical proficiency, logical problem-solving, and collaborative mindset make us capable of solving complex AI challenges effectively. We are committed to delivering innovative solutions during the challenge.
        </p>
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
      {/* Team Members as cards at the bottom */}
      <div className="mt-8">
        <h2 className="section-title mb-4">Team Members</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="card flex flex-col items-center text-center">
            <img
              src="/assets/Henok-leader.webp"
              alt="Henok Tariku"
              className="w-24 h-24 rounded-full object-cover border border-gray-300 dark:border-gray-700 mb-3"
            />
            <h3 className="text-lg font-bold mb-1">Henok Tariku</h3>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Junior Data Analyst &amp; Software Engineer</p>
            <p className="text-xs text-gray-700 dark:text-gray-200 mb-2">Financial Engineering Master's student at WorldQuant University. Strong Computer Science background. Focused on practical software engineering, API integrations, and reliable production rollouts.</p>
            <div className="text-xs text-gray-700 dark:text-gray-200 mb-1">
              <b>Universities:</b>
              <ul className="list-disc ml-4 text-left">
                <li>WorldQuant University (Financial Engineering, Feb 2026 - Present)</li>
                <li>MIPT (Computer Science, Nov 2025 - Present)</li>
                <li>University of the People (Computer Science, Dec 2023 - Jan 2026, CGPA 3.95)</li>
              </ul>
            </div>
            <a href="https://www.linkedin.com/in/henok-tariku1012/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 mt-2 text-brand-primary hover:text-blue-700 transition-colors text-xs font-semibold" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.599v5.597z"/>
              </svg>
              LinkedIn
              <span className="ml-2 text-gray-500 text-xs">| Russia</span>
            </a>
          </div>

          {/* Rocio Herrera Card */}
          <div className="card flex flex-col items-center text-center mt-8">
            <img
              src="/assets/rose-member.png"
              alt="Rocio Herrera"
              className="w-24 h-24 rounded-full object-cover object-top border border-gray-300 dark:border-gray-700 mb-3"
            />
            <h3 className="text-lg font-bold mb-1">Rocio Herrera</h3>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Cybersecurity &amp; AI Enthusiast</p>
            <p className="text-xs text-gray-700 dark:text-gray-200 mb-2">Skilled in Cybersecurity, Artificial Intelligence, Problem Solving, Data Analysis, Risk Assessment, Network Security (basic), Microsoft Excel, Communication, Operations Management, Safety &amp; Compliance. Bilingual (English/Spanish).</p>
            <div className="text-xs text-gray-700 dark:text-gray-200 mb-1">
              <b>Location:</b> Las Vegas, NV
            </div>
          </div>
          {/* Add more team member cards below as needed */}
        </div>
      </div>
    </div>
  );
}
