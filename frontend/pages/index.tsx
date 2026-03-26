import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroScene from '../components/HeroScene';

const sampleFiles = ['IOT-temp.csv', 'patient-notes.docx', 'equipment-checklist.xlsx', 'lab-microscope-image.jpg'];

const toolsUsed = [
	{ name: 'Azure Blob Storage', logo: '☁️' },
	{ name: 'Azure OpenAI (GPT)', logo: '🤖' },
	{ name: 'Azure Cognitive Services', logo: '🛡️' },
	{ name: 'FastAPI + Uvicorn', logo: '⚡' },
	{ name: 'Python + Pandas + NumPy', logo: '🐍' },
	{ name: 'Next.js + TailwindCSS', logo: '▲' },
	{ name: 'Framer Motion + Chart.js', logo: '📈' },
];

const marqueeTools = [...toolsUsed, ...toolsUsed];

const architectureColumns = [
	{
		title: 'Inputs & Data Sources',
		items: ['CSV files', 'Lab notes', 'Images', 'IoT feeds'],
	},
	{
		title: 'API Layer',
		items: ['FastAPI routes', 'Upload / Analyze / Dashboard / Report APIs'],
	},
	{
		title: 'Storage',
		items: ['Local files (raw/processed/reports)', 'Azure Blob Storage'],
	},
	{
		title: 'AI & Safety',
		items: ['Azure OpenAI', 'Azure Cognitive Services'],
	},
	{
		title: 'Consumption & Visualization',
		items: ['Web app dashboard', 'Chart.js visualizations', 'PDF report output'],
	},
];

const crossCutting = ['Monitoring', 'Security', 'Governance', 'CI/CD', 'Cost Management'];

const resources = [
	{ label: 'OpenML', href: 'https://www.openml.org/' },
	{ label: 'Kaggle Sensor Datasets', href: 'https://www.kaggle.com/datasets?search=sensor' },
	{ label: 'Python OpenAI Demos', href: 'https://github.com/Azure-Samples/python-openai-demos' },
	{ label: 'Azure Cognitive Services Studio', href: 'https://contentsafety.cognitive.azure.com/' },
	{ label: 'Responsible AI Toolbox', href: 'https://github.com/microsoft/responsible-ai-toolbox' },
];

const workflowSteps = [
	{ title: '1. Load Experimental Data', desc: 'Bring in experiment protocol text, CSV measurements, and optional image evidence.' },
	{ title: '2. Generate Next Steps', desc: 'Connect AI reasoning to propose safe and practical next actions with confidence.' },
	{ title: '3. Visualize in Web Dashboard', desc: 'Render metrics, trends, and anomaly views directly in the Expelexia web app.' },
	{ title: '4. Validate Safety & Explainability', desc: 'Apply Content Safety and transparent reporting before sharing recommendations.' },
];

export default function HomePage() {
	return (
		<div className="space-y-8">
			<section className="rounded-3xl bg-hero-light p-6 dark:bg-hero-dark sm:p-10">
				<div className="grid items-center gap-8 lg:grid-cols-2">
					<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
						<p className="text-sm font-semibold text-brand-primary">Expelexia – AI Lab Notebook Assistant</p>
						<h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">AI-powered assistant for safe experimental reasoning</h1>
						<p className="mt-4 max-w-xl text-gray-700 dark:text-gray-200">
							AI-powered assistant to help researchers safely analyze experiments, suggest next steps, and visualize results.
						</p>
						<div className="mt-6 flex flex-wrap gap-3">
							<motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
								<Link href="/upload" className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white">Upload Data</Link>
							</motion.div>
							<motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
								<Link href="/about" className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">About Expelexia</Link>
							</motion.div>
							<motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
								<Link href="/reports" className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">Generate Report</Link>
							</motion.div>
							<motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
								<Link href="/analysis" className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">Explore Dashboard</Link>
							</motion.div>
						</div>
					</motion.div>
					<HeroScene />
				</div>
			</section>

			<section className="grid gap-4 lg:grid-cols-2">
				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="card">
					<h2 className="section-title">Sample Files in Project</h2>
					<p className="section-subtitle">Use these examples to quickly test upload, analysis, safety checks, dashboard, and report generation.</p>
					<ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-200">
						{sampleFiles.map((file) => (
							<li key={file} className="rounded-lg border border-gray-200 px-3 py-2 dark:border-gray-800">📄 {file}</li>
						))}
					</ul>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="card">
					<h2 className="section-title">Tools Flow</h2>
					<p className="section-subtitle">Core tools used in this project, flowing horizontally with logo motion.</p>
					<div className="mt-4 overflow-hidden rounded-2xl border border-white/60 bg-white/60 py-3 dark:border-slate-700/70 dark:bg-slate-900/60">
						<motion.div
							className="flex w-max gap-3 px-3"
							animate={{ x: ['0%', '-50%'] }}
							transition={{ repeat: Infinity, ease: 'linear', duration: 18 }}
						>
							{marqueeTools.map((tool, index) => (
								<motion.div
									key={`${tool.name}-${index}`}
									whileHover={{ y: -2, scale: 1.02 }}
									className="flex shrink-0 items-center gap-2 rounded-full border border-gray-200/80 bg-white/85 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-insetSoft dark:border-gray-700/80 dark:bg-slate-900/80 dark:text-gray-200"
								>
									<span className="grid h-5 w-5 place-items-center rounded-full bg-brand-primary/12 text-[11px] dark:bg-brand-primary/20">{tool.logo}</span>
									<span>{tool.name}</span>
								</motion.div>
							))}
						</motion.div>
					</div>
					<div className="mt-4 rounded-xl border border-gray-200 p-3 text-sm text-gray-700 dark:border-gray-800 dark:text-gray-200">
						<span className="font-semibold">Challenge:</span> Lab Notebook AI Assistant for researchers to analyze experiments, suggest safe next actions, and communicate results.
					</div>
				</motion.div>
			</section>

			<section className="card">
				<h2 className="section-title">Azure Reference Architecture</h2>
				<p className="section-subtitle">Clean left-to-right data pipeline for Expelexia AI Lab Notebook Assistant.</p>
				<div className="mt-4 grid gap-3 lg:grid-cols-5">
					{architectureColumns.map((column, index) => (
						<motion.div
							key={column.title}
							initial={{ opacity: 0, x: -12 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.06 }}
							whileHover={{ y: -3 }}
							className="rounded-xl border border-gray-200 p-4 dark:border-gray-800"
						>
							<p className="text-sm font-semibold text-brand-primary">{column.title}</p>
							<ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-200">
								{column.items.map((item) => (
									<li key={item}>• {item}</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
				<div className="mt-4 rounded-xl border border-gray-200 p-4 dark:border-gray-800">
					<p className="text-sm font-semibold text-brand-primary">Cross-Cutting Capabilities</p>
					<div className="mt-3 flex flex-wrap gap-2">
						{crossCutting.map((item, index) => (
							<motion.span
								key={item}
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.2 + index * 0.04 }}
								className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-200"
							>
								{item}
							</motion.span>
						))}
					</div>
				</div>
			</section>

			<section className="card">
				<h2 className="section-title">Expelexia AI Lab Notebook Architecture</h2>
				<p className="section-subtitle">Visual overview of how data flows from ingestion to AI-assisted recommendation and report delivery.</p>
				<div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
					<img
						src="/assets/Expelexia%20AI%20Lab%20Notebook%20Architecture.png"
						alt="Expelexia AI Lab Notebook Architecture"
						className="h-auto w-full"
					/>
				</div>
				<div className="mt-4 grid gap-3 md:grid-cols-2">
					<div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
						<p className="text-sm font-semibold text-brand-primary">What this architecture shows</p>
						<ul className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-200">
							<li>• Data ingestion from experiment files, notes, images, and IoT streams.</li>
							<li>• Processing and summarization through secure remote backend services.</li>
							<li>• AI reasoning with Azure OpenAI and safety checks via Azure Cognitive Services.</li>
							<li>• Dashboard and PDF outputs for explainable lab decisions.</li>
						</ul>
					</div>
					<div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
						<p className="text-sm font-semibold text-brand-primary">Why it matters</p>
						<p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
							The architecture makes Expelexia production-oriented: each recommendation is tied to data evidence, routed through safety controls,
							and delivered in a format teams can audit, review, and act on.
						</p>
					</div>
				</div>
			</section>

			<section className="card">
				<h2 className="section-title">Project Workflow</h2>
				<p className="section-subtitle">End-to-end plan to run Expelexia from raw inputs to trustworthy next-step guidance.</p>
				<div className="mt-4 grid gap-3 md:grid-cols-2">
					{workflowSteps.map((step, idx) => (
						<motion.div
							key={step.title}
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: idx * 0.05 }}
							whileHover={{ y: -3 }}
							className="rounded-xl border border-gray-200 p-4 dark:border-gray-800"
						>
							<p className="text-sm font-semibold text-brand-primary">{step.title}</p>
							<p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{step.desc}</p>
						</motion.div>
					))}
				</div>
			</section>

			<section className="grid gap-4 lg:grid-cols-1">
				<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="card">
					<h2 className="section-title">Web Dashboard in Expelexia</h2>
					<p className="text-sm text-gray-700 dark:text-gray-200">
						   The decision layer is built into the web app itself. The remote backend generates chart-ready metrics and summary tables, and the frontend renders trends,
						anomaly views, and confidence context using Chart.js components.
					</p>
					<p className="mt-3 text-sm text-gray-700 dark:text-gray-200">
						This keeps explanations and visuals aligned in one place: AI suggests the next safe step, and the web dashboard displays the supporting evidence.
					</p>
				</motion.div>
			</section>

			<section className="card">
				<h2 className="section-title">References</h2>
				<p className="section-subtitle">Data and implementation references used in this project.</p>
				<div className="mt-4 grid gap-3 md:grid-cols-2">
					{resources.map((resource, index) => (
						<motion.a
							key={resource.href}
							href={resource.href}
							target="_blank"
							rel="noreferrer"
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.04 }}
							whileHover={{ y: -2 }}
							className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-800"
						>
							{resource.label}
						</motion.a>
					))}
				</div>
			</section>
		</div>
	);
}
