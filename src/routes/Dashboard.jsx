import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCurrentPrice, fetchHistoricalData } from "../store/cryptoSlice"
import PriceChart from "../components/dashboard/PriceChart"
import PriceStats from "../components/dashboard/PriceStats"

const Dashboard = () => {
  const dispatch = useDispatch()
  const { selectedCrypto, currentPrice, priceChange, historicalData } = useSelector((state) => state.crypto)

  useEffect(() => {
    dispatch(fetchCurrentPrice(selectedCrypto))
    dispatch(fetchHistoricalData(selectedCrypto))
  }, [dispatch, selectedCrypto])

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PriceStats currentPrice={currentPrice} priceChange={priceChange} />
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-gray-500 dark:text-gray-400 mb-2">Market Cap</h3>
          <span className="text-3xl font-bold">$198.45B</span>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-gray-500 dark:text-gray-400 mb-2">24h Volume</h3>
          <span className="text-3xl font-bold">$25.67B</span>
        </div>
      </div>
      <PriceChart data={historicalData} />
    </div>
  )
}

export default Dashboard

