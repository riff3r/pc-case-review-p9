import React from "react";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";
import data from "./data.json";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ComposedChart width={600} height={250} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area
            type="monotone"
            dataKey="investment"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="investment" stroke="#ff7300" />
        </ComposedChart>

        <BarChart width={600} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#dc2626" />
          <Bar dataKey="revenue" fill="#000" />
        </BarChart>

        <LineChart className="w-full" width={600} height={300} data={data}>
          <Line type="monotone" dataKey="sell" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
          <XAxis dataKey="month" />
          <YAxis />
          <Legend />
        </LineChart>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              dataKey="investment"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
            />
            <Pie
              data={data}
              dataKey="revenue"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
