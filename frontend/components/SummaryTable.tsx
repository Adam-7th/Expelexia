import { motion } from 'framer-motion';

type SummaryTableProps = {
	rows?: Array<Array<string | number>>;
};

export default function SummaryTable({ rows = [] }: SummaryTableProps) {
	if (!rows?.length) {
		return (
			<div className="card">
				<p className="text-sm text-gray-500 dark:text-gray-300">No tabular summary available yet.</p>
			</div>
		);
	}

	const [headers, ...bodyRows] = rows;

	return (
		<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="card overflow-x-auto">
			<h3 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-200">Summary Table</h3>
			<table className="min-w-full text-left text-sm">
				<thead>
					<tr className="border-b border-gray-200 dark:border-gray-800">
						{headers.map((header) => (
							<th key={header} className="px-2 py-2 font-semibold text-gray-700 dark:text-gray-200">
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{bodyRows.map((row, rowIndex) => (
						<tr key={`row-${rowIndex}`} className="border-b border-gray-100 dark:border-gray-900">
							{row.map((cell, cellIndex) => (
								<td key={`cell-${rowIndex}-${cellIndex}`} className="px-2 py-2 text-gray-700 dark:text-gray-300">
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</motion.div>
	);
}
