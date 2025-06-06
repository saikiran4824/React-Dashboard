import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

const allSalesDataSets = [
	[
		{ name: "Jul", sales: 4200 },
		{ name: "Aug", sales: 3800 },
		{ name: "Sep", sales: 5100 },
		{ name: "Oct", sales: 4600 },
		{ name: "Nov", sales: 5400 },
		{ name: "Dec", sales: 7200 },
		{ name: "Jan", sales: 6100 },
		{ name: "Feb", sales: 5900 },
		{ name: "Mar", sales: 6800 },
		{ name: "Apr", sales: 6300 },
		{ name: "May", sales: 7100 },
		{ name: "Jun", sales: 7500 },
	],
	[
		{ name: "Jul", sales: 3000 },
		{ name: "Aug", sales: 3500 },
		{ name: "Sep", sales: 4000 },
		{ name: "Oct", sales: 3700 },
		{ name: "Nov", sales: 4800 },
		{ name: "Dec", sales: 5600 },
		{ name: "Jan", sales: 5000 },
		{ name: "Feb", sales: 5300 },
		{ name: "Mar", sales: 6000 },
		{ name: "Apr", sales: 5800 },
		{ name: "May", sales: 6200 },
		{ name: "Jun", sales: 6600 },
	],
	[
		{ name: "Jul", sales: 5200 },
		{ name: "Aug", sales: 4800 },
		{ name: "Sep", sales: 6100 },
		{ name: "Oct", sales: 5600 },
		{ name: "Nov", sales: 6400 },
		{ name: "Dec", sales: 8200 },
		{ name: "Jan", sales: 7100 },
		{ name: "Feb", sales: 6900 },
		{ name: "Mar", sales: 7800 },
		{ name: "Apr", sales: 7300 },
		{ name: "May", sales: 8100 },
		{ name: "Jun", sales: 8500 },
	],
];

const SalesOverviewChart = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [salesData, setSalesData] = useState(allSalesDataSets[0]);

	useEffect(() => {
		const interval = setInterval(() => {
			const nextIndex = (activeIndex + 1) % allSalesDataSets.length;
			setActiveIndex(nextIndex);
			setSalesData(allSalesDataSets[nextIndex]);
		}, 1000);

		return () => clearInterval(interval);
	}, [activeIndex]);

	return (
		<div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Sales Overview</h2>

			<div className='h-80'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart data={salesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey={"name"} stroke='#9ca3af' />
						<YAxis stroke='#9ca3af' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey='sales'
							stroke='#6366F1'
							strokeWidth={3}
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default SalesOverviewChart;
