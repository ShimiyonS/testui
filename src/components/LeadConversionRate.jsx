import { PieChart, Pie, Cell } from "recharts";

function LeadConversionRate() {
  const data = [
    { name: "Stay Confirmed", value: 35 },
    { name: "Follow Ups", value: 25 },
    { name: "Site Visits", value: 20 },
    { name: "Cancelled", value: 20 },
  ];

  const COLORS = ["#6366F1", "#F59E0B", "#3B82F6", "#EF4444"];

  // Custom center label inside donut
  const renderCenterLabel = () => {
    return (
      <foreignObject x="60" y="60" width="80" height="80">
        <div className="flex flex-col items-center justify-center w-20 h-20">
          <h1 className="text-xl font-bold">+12%</h1>
          <p className="text-[10px] text-gray-500 text-center">
            Since Last Week
          </p>
        </div>
      </foreignObject>
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">Lead Conversion Rate</h2>
      <div className=" flex flex-col items-center justify-center">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={3}
            cornerRadius={10}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          {renderCenterLabel()}
        </PieChart>

        <div className=" w-full mt-2 grid grid-cols-2 gap-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-sm text-gray-600"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              ></div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeadConversionRate;
