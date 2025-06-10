function OverviewCards() {
  const cards = [
    {
      title: "Total Leads",
      value: "2422",
      percentage: "+4.12%",
      color: "text-blue-500",
      dotColor: "bg-blue-500",
    },
    {
      title: "Site Visits",
      value: "124",
      percentage: "+5.12%",
      color: "text-green-500",
      dotColor: "bg-green-500",
    },
    {
      title: "Stay Confirmed",
      value: "62",
      percentage: "+3.12%",
      color: "text-purple-500",
      dotColor: "bg-purple-500",
    },
    {
      title: "Follow Ups",
      value: "12",
      percentage: "+3.12%",
      color: "text-yellow-500",
      dotColor: "bg-yellow-500",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow flex flex-col justify-between"
        >
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${card.dotColor}`}></div>
            <h2 className="text-sm font-semibold">{card.title}</h2>
          </div>  
          <div className="mt-4 flex items-center space-x-3">
            <div className="text-2xl font-bold">{card.value}</div>
            <div className={`text-xs mt-1 ${card.color}`}>
              {card.percentage} from Last Month
            </div>
          </div>
          <hr className="mt-4"/>
          <button className="mt-4 text-xs text-gray-500 hover:underline">
            See Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default OverviewCards;
