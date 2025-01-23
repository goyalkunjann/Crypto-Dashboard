import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import Sidebar from "./components/layout/Sidebar"
import Header from "./components/layout/Header"
import Dashboard from "./routes/Dashboard"
import Overview from "./routes/Overview"
import History from "./routes/History"
import Wallet from "./routes/Wallet"
import Transactions from "./routes/Transactions"
import Notifications from "./routes/Notifications"
import Settings from "./routes/Settings"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <div className={`${isSidebarOpen ? "ml-64" : "ml-20"} transition-all duration-300`}>
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/history" element={<History />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App
