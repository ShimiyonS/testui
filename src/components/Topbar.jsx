import {
  FaBell,
  FaChevronDown,
  FaEnvelope,
  FaRedo,
  FaUserCircle,
} from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

function TopBar() {
  return (
    <div className=" flex items-center justify-between p-4 bg-white border-b">
      <div className="font-semibold text-lg">Overview</div>
      <div className="flex items-center justify-end ">
        <div className="flex items-center space-x-2 border px-3 py-1 rounded-lg text-sm">
          <FiCalendar />
          <span>16 Jan 24 - 16 Jan 25</span>
          <FaChevronDown className="text-xs" />
        </div>

        <button className="ml-4 p-2 hover:bg-gray-100 rounded">
          <FaEnvelope className="w-5 h-5" />
        </button>

        {/* Notification Icon */}
        <button className="ml-2 p-2 hover:bg-gray-100 rounded relative">
          <FaBell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="ml-4 w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
          <FaUserCircle className="w-full h-full text-gray-600" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
