// src/components/BarsDataset.js
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const dataset = [
  { month: 'Jan', newYork: 86, seoul: 21 },
  { month: 'Feb', newYork: 78, seoul: 28 },
  { month: 'Mar', newYork: 106, seoul: 41 },
  { month: 'Apr', newYork: 92, seoul: 73 },
  { month: 'May', newYork: 92, seoul: 99 },
  { month: 'Jun', newYork: 103, seoul: 144 },
  { month: 'Jul', newYork: 105, seoul: 319 },
  { month: 'Aug', newYork: 106, seoul: 249 },
  { month: 'Sep', newYork: 95, seoul: 131 },
  { month: 'Oct', newYork: 97, seoul: 55 },
  { month: 'Nov', newYork: 76, seoul: 48 },
  { month: 'Dec', newYork: 103, seoul: 25 },
];

const BarsDataset = () => {
  return (
    <ResponsiveContainer width="100%" height={400} >
      <BarChart data={dataset}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="newYork" fill="#8884d8" name="Debit" />
        <Bar dataKey="seoul" fill="#82ca9d" name="Credit" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarsDataset;
