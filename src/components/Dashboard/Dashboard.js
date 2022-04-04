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
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";
import data from "./data.json";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-10">
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="sell" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
        </LineChart>

        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#dc2626" />
          <Bar dataKey="revenue" fill="#000" />
        </BarChart>

        <ComposedChart width={730} height={250} data={data}>
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
          <Bar dataKey="month" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="investment" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default Dashboard;
