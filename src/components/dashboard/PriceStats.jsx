import React from "react"
import { ArrowUp, ArrowDown } from "lucide-react"

const PriceStats = ({ currentPrice, priceChange }) => {
  const isPositive = priceChange >= 0

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-gray-500 dark:text-gray-400 mb-2">Current Price</h3>
      <div className="flex items-end gap-4">
        <span className="text-3xl font-bold">${currentPrice.toLocaleString()}</span>
        <span className={`flex items-center ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {isPositive ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
          {Math.abs(priceChange).toFixed(2)}%
        </span>
      </div>
    </div>
  )
}

export default PriceStats

