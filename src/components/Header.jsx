import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setSelectedCrypto } from "../store/cryptoSlice"

const cryptocurrencies = ["bitcoin", "ethereum", "ripple"]

function Header() {
  const dispatch = useDispatch()
  const selectedCrypto = useSelector((state) => state.crypto.selectedCrypto)

  const handleCryptoChange = (e) => {
    dispatch(setSelectedCrypto(e.target.value))
  }

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Crypto Dashboard</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/overview">Overview</Link>
            </li>
            <li>
              <Link to="/history">History</Link>
            </li>
          </ul>
        </nav>
        <select value={selectedCrypto} onChange={handleCryptoChange} className="bg-white text-black p-2 rounded">
          {cryptocurrencies.map((crypto) => (
            <option key={crypto} value={crypto}>
              {crypto.charAt(0).toUpperCase() + crypto.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </header>
  )
}

export default Header

