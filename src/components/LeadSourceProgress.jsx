function LeadSourceProgress() {
  const sources = [
    { name: "Instagram", value: 1211, percentage: 50, color: "bg-green-500" },
    { name: "Facebook", value: 605, percentage: 25, color: "bg-blue-500" },
    { name: "Youtube", value: 303, percentage: 12.5, color: "bg-red-400" },
    { name: "Others", value: 302, percentage: 12.5, color: "bg-gray-400" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow h-full">
      <h2 className="text-lg font-semibold mb-4">Leads Source</h2>
      <div className="space-y-4">
        {sources.map((source, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span>{source.name}</span>
              <span className="text-gray-500">
                {source.value} ({source.percentage}%)
              </span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded">
              <div
                className={`h-3 rounded ${source.color}`}
                style={{ width: `${source.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeadSourceProgress;
