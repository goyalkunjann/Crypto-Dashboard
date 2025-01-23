import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Bell, ArrowUpRight, ArrowDownRight, Zap } from 'lucide-react'

const notifications = [
  {
    id: 1,
    type: "price_alert",
    title: "Bitcoin Price Alert",
    message: "BTC has increased by 5% in the last hour",
    time: "2 hours ago",
    icon: Zap
  },
  {
    id: 2,
    type: "transaction",
    title: "Transaction Complete",
    message: "Successfully purchased 0.245 BTC",
    time: "5 hours ago",
    icon: ArrowDownRight
  },
  // Add more notification data as needed
]

const Notifications = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-coral-400 rounded-full" />
        </button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map(notification => (
              <div 
                key={notification.id}
                className="flex items-start gap-4 p-4 border rounded-lg"
              >
                <notification.icon className="h-5 w-5 text-coral-400 mt-1" />
                <div>
                  <p className="font-medium">{notification.title}</p>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Notifications
