import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import OverviewCards from "./components/OverviewCards";
import LeadTrendsChart from "./components/LeadTrendsChart";
import BookingsChart from "./components/BookingsChart";
import LeadSourceProgress from "./components/LeadSourceProgress";
import LeadConversionRate from "./components/LeadConversionRate";
import LeadsDetailsList from "./components/LeadsDetailsList";

function App() {
  return (
    <div className="flex bg-gray-100 overflow-scroll">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-scroll">
        <Topbar />

        <div className=" w-full flex flex-1 overflow-hidden bg-white">
          <main className="flex-1 p-4 space-y-6 overflow-y-hidden">
            <OverviewCards />
            <div className="flex gap-6">
              <div className="flex-[1.3]">
                <LeadTrendsChart />
              </div>
              <div className="flex-[0.7]">
                <LeadSourceProgress />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-[1.3]">
                <BookingsChart />
              </div>
              <div className="flex-[0.7]">
                <LeadConversionRate />
              </div>
            </div>
          </main>

          <div className="w-96 p-4 border-l overflow-y-auto ">
            <LeadsDetailsList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
