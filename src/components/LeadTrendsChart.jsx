import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Jan 24", leads: 40 },
  { name: "Mar 24", leads: 20 },
  { name: "May 24", leads: 85 },
  { name: "Sep 24", leads: 60 },
  { name: "Nov 24", leads: 30 },
  { name: "Jan 25", leads: 45 },
];

function LeadTrendsChart() {
  const colors = ["#7B3FE4", "#D6BBFB"];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Leads Trends</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />

          {/* <Tooltip cursor={{ fill: "transparent" }} /> */}
          <Bar dataKey="leads" barSize={50} radius={[6, 6, 6, 6]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 2]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LeadTrendsChart;
