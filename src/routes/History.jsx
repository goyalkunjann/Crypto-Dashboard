import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchHistoricalData } from "../store/cryptoSlice"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Search } from 'lucide-react'

const History = () => {
  const dispatch = useDispatch()
  const { selectedCrypto, historicalData } = useSelector((state) => state.crypto)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    dispatch(fetchHistoricalData(selectedCrypto))
  }, [dispatch, selectedCrypto])

  const filteredData = historicalData.filter((data) => new Date(data[0]).toLocaleDateString().includes(searchTerm))

  return (
    <div className="p-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Historical Data</CardTitle>
          <div className="relative w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search by date..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-4 py-2 w-full rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-coral-400"
            />
          </div>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr className="text-left bg-gray-50 dark:bg-gray-700">
                <th className="p-4 font-semibold text-gray-600 dark:text-gray-200">Date</th>
                <th className="p-4 font-semibold text-gray-600 dark:text-gray-200">Price (USD)</th>
                <th className="p-4 font-semibold text-gray-600 dark:text-gray-200">24h Volume</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((data) => (
                <tr key={data[0]} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-4">{new Date(data[0]).toLocaleDateString()}</td>
                  <td className="p-4">${data[1].toLocaleString()}</td>
                  <td className="p-4">${(data[1] * Math.random() * 1000000).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}

export default History
