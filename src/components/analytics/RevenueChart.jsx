import { useState } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const weeklyRevenueData = [
  { day: "Mon", revenue: 500, target: 450 },
  { day: "Tue", revenue: 600, target: 550 },
  { day: "Wed", revenue: 700, target: 650 },
  { day: "Thu", revenue: 750, target: 700 },
  { day: "Fri", revenue: 800, target: 750 },
  { day: "Sat", revenue: 650, target: 600 },
  { day: "Sun", revenue: 750, target: 700 },
];

const monthlyRevenueData = [
  { month: "Jan", revenue: 4000, target: 3800 },
  { month: "Feb", revenue: 3000, target: 3200 },
  { month: "Mar", revenue: 5000, target: 4500 },
  { month: "Apr", revenue: 4500, target: 4200 },
  { month: "May", revenue: 6000, target: 5500 },
  { month: "Jun", revenue: 5500, target: 5800 },
  { month: "Jul", revenue: 7000, target: 6500 },
];

const quarterlyRevenueData = [
  { quarter: "Q1", revenue: 12000, target: 11000 },
  { quarter: "Q2", revenue: 13500, target: 13000 },
  { quarter: "Q3", revenue: 15000, target: 14500 },
  { quarter: "Q4", revenue: 14000, target: 13500 },
];

const yearlyRevenueData = [
  { year: "2021", revenue: 45000, target: 42000 },
  { year: "2022", revenue: 50000, target: 48000 },
  { year: "2023", revenue: 55000, target: 53000 },
  { year: "2024", revenue: 60000, target: 59000 },
];

const RevenueChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

  // Determine which dataset to use based on the selected time range
  const getChartData = () => {
    switch (selectedTimeRange) {
      case "This Week":
        return weeklyRevenueData;
      case "This Month":
        return monthlyRevenueData;
      case "This Quarter":
        return quarterlyRevenueData;
      case "This Year":
        return yearlyRevenueData;
      default:
        return monthlyRevenueData;
    }
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Revenue vs Target</h2>
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

      <div style={{ width: "100%", height: 400 }}>
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
            <Legend />
            <Area type="monotone" dataKey="revenue" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
            <Area type="monotone" dataKey="target" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RevenueChart;
