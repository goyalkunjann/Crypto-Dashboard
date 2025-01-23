import React from "react"
import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, LineChart, History, Settings, Menu, Bitcoin, Wallet, ArrowRightLeft, Bell } from 'lucide-react'

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation()

  const menuItems = [
    { title: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    { title: "Overview", icon: <LineChart size={20} />, path: "/overview" },
    { title: "History", icon: <History size={20} />, path: "/history" },
    { title: "Wallet", icon: <Wallet size={20} />, path: "/wallet" },
    { title: "Transactions", icon: <ArrowRightLeft size={20} />, path: "/transactions" },
    { title: "Notifications", icon: <Bell size={20} />, path: "/notifications" },
    { title: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ]

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out z-20 border-r
        ${isSidebarOpen ? "w-64" : "w-20"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className={`flex items-center gap-2 ${!isSidebarOpen && "hidden"}`}>
            <Bitcoin className="h-8 w-8 text-coral-400" />
            <h1 className="font-bold text-xl">Cryptos</h1>
          </div>
          <button 
            onClick={toggleSidebar} 
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>
        <nav className="p-4">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className={`flex items-center gap-4 p-3 rounded-lg mb-2 transition-all duration-200
                ${location.pathname === item.path 
                  ? "bg-coral-400 text-white" 
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
            >
              {item.icon}
              <span className={`${!isSidebarOpen && "hidden"}`}>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className={`${isSidebarOpen ? "ml-64" : "ml-20"} transition-all duration-300`} />
    </>
  )
}

export default Sidebar
