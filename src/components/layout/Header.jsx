import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Bell, Search, Sun, Moon } from 'lucide-react'
import { setSelectedCrypto } from "../../store/cryptoSlice"

const cryptocurrencies = [
  { id: "bitcoin", name: "Bitcoin", symbol: "BTC" },
  { id: "ethereum", name: "Ethereum", symbol: "ETH" },
  { id: "ripple", name: "Ripple", symbol: "XRP" },
  { id: "cardano", name: "Cardano", symbol: "ADA" },
  { id: "solana", name: "Solana", symbol: "SOL" },
  { id: "polkadot", name: "Polkadot", symbol: "DOT" },
  { id: "dogecoin", name: "Dogecoin", symbol: "DOGE" },
  { id: "avalanche-2", name: "Avalanche", symbol: "AVAX" },
  { id: "chainlink", name: "Chainlink", symbol: "LINK" },
  { id: "uniswap", name: "Uniswap", symbol: "UNI" },
]

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const dispatch = useDispatch()
  const selectedCrypto = useSelector((state) => state.crypto.selectedCrypto)

  // Toggle theme mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  return (
    <header className={`bg-white dark:bg-gray-900 border-b p-4 ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-coral-400 transition-all"
            />
          </div>
          <select
            value={selectedCrypto}
            onChange={(e) => dispatch(setSelectedCrypto(e.target.value))}
            className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-coral-400 transition-all"
          >
            {cryptocurrencies.map((crypto) => (
              <option key={crypto.id} value={crypto.id}>
                {crypto.symbol} - {crypto.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-coral-400 rounded-full animate-pulse-slow" />
          </button>
          <button onClick={toggleTheme} className="p-2 rounded-lg">
            {isDarkMode ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-gray-400" />
            )}
          </button>
          <div className="w-10 h-10 rounded-full bg-coral-100 dark:bg-gray-800 flex items-center justify-center">
            <span className="text-coral-400 font-medium">JD</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
