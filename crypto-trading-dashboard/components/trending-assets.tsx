"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartTooltipItem } from "@/components/ui/chart"
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts"

const trendingData = [
  { name: "BTC", value: 51432.67, change: 2.34, color: "#f7931a" },
  { name: "ETH", value: 3821.45, change: 1.56, color: "#627eea" },
  { name: "SOL", value: 142.87, change: 3.45, color: "#00ffbd" },
  { name: "AAPL", value: 187.32, change: 1.24, color: "#a2aaad" },
  { name: "MSFT", value: 412.65, change: 0.87, color: "#7fba00" },
  { name: "AMZN", value: 178.12, change: 1.56, color: "#ff9900" },
]

export function TrendingAssets() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trending Assets</CardTitle>
        <CardDescription>The most popular assets in the last 24 hours.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer data={trendingData} tooltipClassName="bg-background border border-border shadow-lg">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={trendingData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  className="text-xs text-muted-foreground"
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tickFormatter={(value) => (value >= 1000 ? `$${(value / 1000).toFixed(1)}K` : `$${value}`)}
                  className="text-xs text-muted-foreground"
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {trendingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
                <ChartTooltip
                  content={
                    <ChartTooltipContent>
                      {(props) => (
                        <>
                          <ChartTooltipItem label="Asset" value={props.name} />
                          <ChartTooltipItem label="Price" value={`$${props.value.toLocaleString()}`} />
                          <ChartTooltipItem
                            label="24h Change"
                            value={`${props.change > 0 ? "+" : ""}${props.change}%`}
                            valueClassName={props.change >= 0 ? "text-emerald-500" : "text-red-500"}
                          />
                        </>
                      )}
                    </ChartTooltipContent>
                  }
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
