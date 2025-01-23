import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

const transactions = [
  {
    id: 1,
    type: "buy",
    crypto: "Bitcoin",
    amount: "0.245 BTC",
    value: "$8,234.56",
    date: "2024-01-22",
    status: "completed"
  },
  {
    id: 2,
    type: "sell",
    crypto: "Ethereum",
    amount: "2.5 ETH",
    value: "$4,567.89",
    date: "2024-01-21",
    status: "completed"
  },
  // Add more transaction data as needed
]

const Transactions = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold">Transactions</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map(transaction => (
              <div 
                key={transaction.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  {transaction.type === "buy" ? (
                    <ArrowDownRight className="h-5 w-5 text-green-500" />
                  ) : (
                    <ArrowUpRight className="h-5 w-5 text-red-500" />
                  )}
                  <div>
                    <p className="font-medium">{transaction.crypto}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{transaction.amount}</p>
                  <p className="text-sm text-muted-foreground">{transaction.value}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Transactions
