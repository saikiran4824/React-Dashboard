import { useEffect, useState } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
	Cell,
} from "recharts";

// Color palette
const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B", "#3B82F6", "#EF4444"];

// Initial data
const INITIAL_DATA = [
	{ name: "Website", value: 45600 },
	{ name: "Mobile App", value: 38200 },
	{ name: "Marketplace", value: 29800 },
	{ name: "Social Media", value: 18700 },
	{ name: "Retail Store", value: 23200 },
	{ name: "Affiliate", value: 14500 },
	{ name: "Email Campaign", value: 17600 },
];

const SalesChannelChart = () => {
	const [data, setData] = useState(INITIAL_DATA);

	useEffect(() => {
		const interval = setInterval(() => {
			// Simulate dynamic changes by modifying values randomly
			const updated = data.map((item) => ({
				...item,
				value: Math.max(10000, item.value + Math.floor(Math.random() * 2000 - 1000)),
			}));
			setData(updated);
		}, 500);

		return () => clearInterval(interval);
	}, [data]);

	return (
		<div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700'>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Sales by Channel</h2>
			<div className='h-80'>
				<ResponsiveContainer>
					<BarChart data={data}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Bar dataKey='value'>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default SalesChannelChart;
