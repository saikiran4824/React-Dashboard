import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

const weeklySalesData = [
  { day: "Mon", sales: 200 },
  { day: "Tue", sales: 600 },
  { day: "Wed", sales: 550 },
  { day: "Thu", sales: 700 },
  { day: "Fri", sales: 800 },
  { day: "Sat", sales: 650 },
  { day: "Sun", sales: 750 },
];

const monthlySalesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
  { month: "Jul", sales: 7000 },
];

const quarterlySalesData = [
  { quarter: "Q1", sales: 12000 },
  { quarter: "Q2", sales: 13500 },
  { quarter: "Q3", sales: 15000 },
  { quarter: "Q4", sales: 14000 },
];

const yearlySalesData = [
  { year: "2021", sales: 35000 },
  { year: "2022", sales: 50000 },
  { year: "2023", sales: 45000 },
  { year: "2024", sales: 60000 },
];

const SalesOverviewChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

  // Determine which dataset to use based on the selected time range
  const getChartData = () => {
    switch (selectedTimeRange) {
      case "This Week":
        return weeklySalesData;
      case "This Month":
        return monthlySalesData;
      case "This Quarter":
        return quarterlySalesData;
      case "This Year":
        return yearlySalesData;
      default:
        return monthlySalesData;
    }
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Sales Overview</h2>

        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer>
          <AreaChart data={getChartData()}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey={selectedTimeRange === "This Week" ? "day" : selectedTimeRange === "This Month" ? "month" : selectedTimeRange === "This Quarter" ? "quarter" : "year"}
              stroke="#9CA3AF"
            />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
