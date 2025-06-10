import {
  FaChartBar,
  FaUsers,
  FaSignOutAlt,
  FaFolderOpen,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUserShield,
  FaUserFriends,
  FaTasks,
  FaCogs,
  FaChartPie,
  FaRedo,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-60 bg-purple-700 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-8">AdUnity</h1>
      <nav className="space-y-4">
        <button className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <FaChartBar />
          <span>Overview</span>
        </button>
        <button className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <FaUsers />
          <span>Leads</span>
        </button>
        <button className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <FaFolderOpen />
          <span>Projects</span>
        </button>
        <button className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <FaMapMarkerAlt />
          <span>Site Visits</span>
        </button>
        <button className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <FaPhoneAlt />
          <span>Calls</span>
        </button>
        <button className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <FaEnvelope />
          <span>Emails</span>
        </button>
        <button className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <FaUserShield />
          <span>Roles</span>
        </button>
        <button className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <FaUserFriends />
          <span>Users</span>
        </button>
        <button className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <FaTasks />
          <span>Tasks</span>
        </button>
        <button className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <FaCogs />
          <span>Master</span>
        </button>
        <button className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <FaChartPie />
          <span>Reports</span>
        </button>
        <button className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded">
          <FaRedo />
          <span>Re Engaged</span>
        </button>
      </nav>
      <div className="mt-auto">
        MAIN MANU
        <button className="flex items-center space-x-2 p-2 hover:bg-purple-600 rounded">
          <FaCog />
          <span>Settings</span>
        </button>
        <button className="flex items-center space-x-2 p-2 hover:bg-purple-600 rounded">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
