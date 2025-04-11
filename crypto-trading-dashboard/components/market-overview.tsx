"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartTooltipItem } from "@/components/ui/chart"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const marketData = [
  { date: "Jan", btc: 42000, eth: 3200, total: 2400000000000 },
  { date: "Feb", btc: 45000, eth: 3000, total: 2500000000000 },
  { date: "Mar", btc: 47000, eth: 3300, total: 2600000000000 },
  { date: "Apr", btc: 44000, eth: 3100, total: 2450000000000 },
  { date: "May", btc: 48000, eth: 3400, total: 2700000000000 },
  { date: "Jun", btc: 51000, eth: 3600, total: 2800000000000 },
  { date: "Jul", btc: 53000, eth: 3800, total: 2900000000000 },
]

export function MarketOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
        <CardDescription>Total cryptocurrency market capitalization and leading assets.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer data={marketData} tooltipClassName="bg-background border border-border shadow-lg">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={marketData}
                margin={{
                  top: 5,
                  right: 10,
                  left: 10,
                  bottom: 0,
                }}
              >
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tickFormatter={(value) => value}
                  className="text-xs text-muted-foreground"
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tickFormatter={(value) => `$${(value / 1000000000000).toFixed(1)}T`}
                  className="text-xs text-muted-foreground"
                />
                <Area
                  type="monotone"
                  dataKey="total"
                  stroke="#10b981"
                  strokeWidth={2}
                  fill="#10b98120"
                  activeDot={{ r: 6 }}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent>
                      {(props) => (
                        <>
                          <ChartTooltipItem label="Date" value={props.date} />
                          <ChartTooltipItem
                            label="Market Cap"
                            value={`$${(props.total / 1000000000000).toFixed(2)}T`}
                            valueClassName="text-emerald-500"
                          />
                          <ChartTooltipItem
                            label="Bitcoin"
                            value={`$${props.btc.toLocaleString()}`}
                            valueClassName="text-amber-500"
                          />
                          <ChartTooltipItem
                            label="Ethereum"
                            value={`$${props.eth.toLocaleString()}`}
                            valueClassName="text-indigo-400"
                          />
                        </>
                      )}
                    </ChartTooltipContent>
                  }
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
