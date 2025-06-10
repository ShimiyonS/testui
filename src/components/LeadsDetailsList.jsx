function LeadsDetailsList() {
  const leads = [
    {
      name: "Kadin Stanton",
      status: "Confirmed",
      source: "Instagram",
      project: "Bedford Getaways",
      date: "12 January 2023",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      name: "Kierra Aminoff",
      status: "Cancelled",
      source: "Instagram",
      project: "Bedford Getaways",
      date: "12 January 2023",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      name: "Haylie Philips",
      status: "Confirmed",
      source: "Instagram",
      project: "Bedford Getaways",
      date: "12 January 2023",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      name: "Ruben Stanton",
      status: "Pending",
      source: "Instagram",
      project: "Bedford Getaways",
      date: "12 January 2023",
      avatar: "https://i.pravatar.cc/40?img=4",
    },
    {
      name: "Chance Herwitz",
      status: "Confirmed",
      source: "Instagram",
      project: "Bedford Getaways",
      date: "12 January 2023",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
    {
      name: "Chance Herwitz",
      status: "Confirmed",
      source: "Instagram",
      project: "Bedford Getaways",
      date: "12 January 2023",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
    {
      name: "Chance Herwitz",
      status: "Confirmed",
      source: "Instagram",
      project: "Bedford Getaways",
      date: "12 January 2023",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
  ];

  const statusColor = {
    Confirmed: "bg-green-100 text-green-600",
    Cancelled: "bg-red-100 text-red-600",
    Pending: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className=" bg-gray-100  rounded-lg shadow h-full overflow-y-auto">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-semibold">Leads Details</h2>
        <button className="text-sm text-gray-500 hover:underline">
          View All
        </button>
      </div>

      <div className="divide-y divide-gray-200">
        {leads.map((lead, index) => (
          <div className="px-4">
            <div
              key={index}
              className="flex items-center space-x-4 py-3 min-h-[90px]"
            >
              <img
                src={lead.avatar}
                alt={lead.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{lead.name}</h3>
                <h5 className=" font-light text-sm">{lead.date}</h5>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  statusColor[lead.status]
                }`}
              >
                {lead.status}
              </span>
            </div>
            <p className="text-xs text-gray-500 flex justify-between pb-2">
              <span>
                Source : <span className=" font-semibold">{lead.source}</span>{" "}
              </span>
              <span>
                Project : <span className=" font-semibold">{lead.project}</span>
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeadsDetailsList;
