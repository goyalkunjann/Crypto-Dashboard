import React from "react"
import { useSelector } from "react-redux"

function Footer() {
  const lastUpdated = useSelector((state) => state.crypto.lastUpdated)

  return (
    <footer className="bg-gray-200 p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>Last updated: {lastUpdated ? new Date(lastUpdated).toLocaleString() : "N/A"}</p>
      </div>
    </footer>
  )
}

export default Footer

