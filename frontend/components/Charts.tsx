import { motion } from 'framer-motion';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	LineElement,
	PointElement,
	ArcElement,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Tooltip, Legend);

type StatsItem = { mean?: number };
type Summary = { stats?: Record<string, StatsItem> };
type ChartPoint = { x: string | number; y: number };
type LineSeries = { metric: string; points?: ChartPoint[] };
type PieSeries = { label: string; value: number };
type ChartsPayload = { line?: LineSeries[]; pie?: PieSeries[] };
type ChartsProps = { summary?: Summary; chartsData?: ChartsPayload };

function buildStatsBarData(summary: Summary = {}) {
	const stats = summary?.stats || {};
	const labels = Object.keys(stats);
	const means = labels.map((name) => Number(stats[name]?.mean || 0));

	return {
		labels,
		datasets: [
			{
				label: 'Mean by Metric',
				data: means,
				backgroundColor: 'rgba(10,132,255,0.6)',
				borderRadius: 8,
			},
		],
	};
}

function buildLineData(chartsData: ChartsPayload = {}) {
	const lineSeries = chartsData?.line || [];
	if (!lineSeries.length) return null;

	const xLabels = lineSeries[0]?.points?.map((point) => point.x) || [];
	return {
		labels: xLabels,
		datasets: lineSeries.map((series, index) => ({
			label: series.metric,
			data: (series.points || []).map((point) => point.y),
			borderColor: index % 2 === 0 ? '#0a84ff' : '#38bdf8',
			backgroundColor: 'rgba(10,132,255,0.18)',
			tension: 0.35,
			fill: true,
		})),
	};
}

function buildPieData(chartsData: ChartsPayload = {}) {
	const pieSeries = chartsData?.pie || [];
	if (!pieSeries.length) return null;

	return {
		labels: pieSeries.map((item) => item.label),
		datasets: [
			{
				data: pieSeries.map((item) => item.value),
				backgroundColor: ['#0a84ff', '#38bdf8', '#86efac', '#facc15'],
			},
		],
	};
}

export default function Charts({ summary, chartsData }: ChartsProps) {
	const barData = buildStatsBarData(summary);
	const lineData = buildLineData(chartsData);
	const pieData = buildPieData(chartsData);

	return (
		<div className="grid gap-5 lg:grid-cols-2">
			<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="card">
				<h3 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-200">Metric Means</h3>
				<Bar data={barData} />
			</motion.div>

			{lineData ? (
				<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="card">
					<h3 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-200">Trend Line</h3>
					<Line data={lineData} />
				</motion.div>
			) : null}

			{pieData ? (
				<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="card lg:col-span-2">
					<h3 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-200">Focus Distribution</h3>
					<div className="mx-auto max-w-sm">
						<Pie data={pieData} />
					</div>
				</motion.div>
			) : null}
		</div>
	);
}
