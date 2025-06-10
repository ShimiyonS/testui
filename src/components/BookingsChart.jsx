import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { name: "Project 1", bookings: 76, top: 2 },
  { name: "Project 2", bookings: 79, top: 2 },
  { name: "Project 3", bookings: 25, top: 2 },
  { name: "Project 4", bookings: 77, top: 2 },
  { name: "Project 5", bookings: 54, top: 2 },
  { name: "Project 6", bookings: 86, top: 2 },
  { name: "Project 7", bookings: 12, top: 2 },
];

function BookingsChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Bookings by Project</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="bookings"
            stackId="a"
            fill="#7B3FE4"
            barSize={50}
            activeShape={false}
          >
            <LabelList
              dataKey="bookings"
              position="top"
              offset={10}
              fill="#000"
              fontSize={12}
            />
          </Bar>
          <Bar
            dataKey="top"
            stackId="a"
            fill="#FF4C61"
            barSize={50}
            activeShape={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BookingsChart;
