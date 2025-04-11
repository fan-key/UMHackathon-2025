"use client"

import { useState } from "react"
import { LineChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartTooltipItem } from "@/components/ui/chart"
import { Line, LineChart as RechartsLineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const btcAnalysisData = [
  { date: "Jan", price: 42000, prediction: 43000, support: 41000, resistance: 44000 },
  { date: "Feb", price: 45000, prediction: 46000, support: 44000, resistance: 47000 },
  { date: "Mar", price: 47000, prediction: 48000, support: 46000, resistance: 49000 },
  { date: "Apr", price: 44000, prediction: 45000, support: 43000, resistance: 46000 },
  { date: "May", price: 48000, prediction: 49000, support: 47000, resistance: 50000 },
  { date: "Jun", price: 51000, prediction: 52000, support: 50000, resistance: 53000 },
  { date: "Jul", price: 53000, prediction: 55000, support: 52000, resistance: 56000 },
  { date: "Aug", price: null, prediction: 57000, support: 54000, resistance: 58000 },
  { date: "Sep", price: null, prediction: 59000, support: 56000, resistance: 60000 },
]

const ethAnalysisData = [
  { date: "Jan", price: 3200, prediction: 3300, support: 3100, resistance: 3400 },
  { date: "Feb", price: 3000, prediction: 3100, support: 2900, resistance: 3200 },
  { date: "Mar", price: 3300, prediction: 3400, support: 3200, resistance: 3500 },
  { date: "Apr", price: 3100, prediction: 3200, support: 3000, resistance: 3300 },
  { date: "May", price: 3400, prediction: 3500, support: 3300, resistance: 3600 },
  { date: "Jun", price: 3600, prediction: 3700, support: 3500, resistance: 3800 },
  { date: "Jul", price: 3800, prediction: 3900, support: 3700, resistance: 4000 },
  { date: "Aug", price: null, prediction: 4100, support: 3900, resistance: 4200 },
  { date: "Sep", price: null, prediction: 4300, support: 4100, resistance: 4400 },
]

export function MarketAnalysis() {
  const [open, setOpen] = useState(false)
  const [asset, setAsset] = useState("btc")

  const analysisData = asset === "btc" ? btcAnalysisData : ethAnalysisData
  const assetName = asset === "btc" ? "Bitcoin" : "Ethereum"
  const assetSymbol = asset === "btc" ? "BTC" : "ETH"
  const currentPrice = asset === "btc" ? "$53,000" : "$3,800"
  const prediction = asset === "btc" ? "$57,000" : "$4,100"
  const support = asset === "btc" ? "$52,000" : "$3,700"
  const resistance = asset === "btc" ? "$56,000" : "$4,000"
  const recommendation = asset === "btc" ? "Buy" : "Hold"
  const recommendationColor = recommendation === "Buy" ? "text-emerald-500" : "text-amber-500"

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <LineChart className="mr-2 h-4 w-4" />
          Market Analysis
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[95vw] md:max-w-[600px] lg:max-w-[700px] overflow-y-auto max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Market Analysis</DialogTitle>
          <DialogDescription>Technical analysis and price predictions for major assets.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="btc" className="w-full" onValueChange={setAsset}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="btc">Bitcoin (BTC)</TabsTrigger>
            <TabsTrigger value="eth">Ethereum (ETH)</TabsTrigger>
          </TabsList>
          <TabsContent value="btc" className="mt-4">
            <div className="h-[250px] mb-4">
              <ChartContainer data={analysisData} tooltipClassName="bg-background border border-border shadow-lg">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart
                    data={analysisData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      className="text-xs text-muted-foreground"
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      domain={["dataMin - 2000", "dataMax + 2000"]}
                      tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                      className="text-xs text-muted-foreground"
                    />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="prediction"
                      stroke="#8884d8"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="support"
                      stroke="#10b981"
                      strokeWidth={1}
                      strokeDasharray="3 3"
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="resistance"
                      stroke="#ef4444"
                      strokeWidth={1}
                      strokeDasharray="3 3"
                      dot={false}
                    />
                    <ChartTooltip
                      content={
                        <ChartTooltipContent>
                          {(props) => (
                            <>
                              <ChartTooltipItem label="Date" value={props.date} />
                              {props.price !== null && (
                                <ChartTooltipItem
                                  label="Price"
                                  value={`$${props.price.toLocaleString()}`}
                                  valueClassName="text-emerald-500"
                                />
                              )}
                              <ChartTooltipItem
                                label="Prediction"
                                value={`$${props.prediction.toLocaleString()}`}
                                valueClassName="text-purple-500"
                              />
                              <ChartTooltipItem
                                label="Support"
                                value={`$${props.support.toLocaleString()}`}
                                valueClassName="text-emerald-500"
                              />
                              <ChartTooltipItem
                                label="Resistance"
                                value={`$${props.resistance.toLocaleString()}`}
                                valueClassName="text-red-500"
                              />
                            </>
                          )}
                        </ChartTooltipContent>
                      }
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="border rounded-lg p-3">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Technical Analysis</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Price</p>
                    <p className="text-lg font-medium">{currentPrice}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Prediction (30d)</p>
                    <p className="text-lg font-medium text-purple-500">{prediction}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Support</p>
                    <p className="text-lg font-medium text-emerald-500">{support}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Resistance</p>
                    <p className="text-lg font-medium text-red-500">{resistance}</p>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-3">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Market Sentiment</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Recommendation</p>
                    <p className={`text-lg font-medium ${recommendationColor}`}>{recommendation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Risk Level</p>
                    <p className="text-lg font-medium text-amber-500">Medium</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Volatility</p>
                    <p className="text-lg font-medium">High</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Trend</p>
                    <p className="text-lg font-medium text-emerald-500">Bullish</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-3">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Analysis Summary</h3>
              <p className="text-xs sm:text-sm">
                {assetName} ({assetSymbol}) is showing strong bullish momentum with a solid support level at {support}.
                Technical indicators suggest a potential rise to {prediction} in the next 30 days, with resistance
                around {resistance}. The current market sentiment is positive, with increasing institutional interest
                and favorable regulatory developments. Our recommendation is to{" "}
                <span className={recommendationColor}>{recommendation}</span> with a medium-term horizon.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="eth" className="mt-4">
            <div className="h-[250px] mb-4">
              <ChartContainer data={analysisData} tooltipClassName="bg-background border border-border shadow-lg">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart
                    data={analysisData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      className="text-xs text-muted-foreground"
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      domain={["dataMin - 200", "dataMax + 200"]}
                      tickFormatter={(value) => `$${value}`}
                      className="text-xs text-muted-foreground"
                    />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="prediction"
                      stroke="#8884d8"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="support"
                      stroke="#10b981"
                      strokeWidth={1}
                      strokeDasharray="3 3"
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="resistance"
                      stroke="#ef4444"
                      strokeWidth={1}
                      strokeDasharray="3 3"
                      dot={false}
                    />
                    <ChartTooltip
                      content={
                        <ChartTooltipContent>
                          {(props) => (
                            <>
                              <ChartTooltipItem label="Date" value={props.date} />
                              {props.price !== null && (
                                <ChartTooltipItem
                                  label="Price"
                                  value={`$${props.price.toLocaleString()}`}
                                  valueClassName="text-emerald-500"
                                />
                              )}
                              <ChartTooltipItem
                                label="Prediction"
                                value={`$${props.prediction.toLocaleString()}`}
                                valueClassName="text-purple-500"
                              />
                              <ChartTooltipItem
                                label="Support"
                                value={`$${props.support.toLocaleString()}`}
                                valueClassName="text-emerald-500"
                              />
                              <ChartTooltipItem
                                label="Resistance"
                                value={`$${props.resistance.toLocaleString()}`}
                                valueClassName="text-red-500"
                              />
                            </>
                          )}
                        </ChartTooltipContent>
                      }
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="border rounded-lg p-3">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Technical Analysis</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Price</p>
                    <p className="text-lg font-medium">{currentPrice}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Prediction (30d)</p>
                    <p className="text-lg font-medium text-purple-500">{prediction}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Support</p>
                    <p className="text-lg font-medium text-emerald-500">{support}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Resistance</p>
                    <p className="text-lg font-medium text-red-500">{resistance}</p>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-3">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Market Sentiment</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Recommendation</p>
                    <p className={`text-lg font-medium ${recommendationColor}`}>{recommendation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Risk Level</p>
                    <p className="text-lg font-medium text-amber-500">Medium</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Volatility</p>
                    <p className="text-lg font-medium">Medium</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Trend</p>
                    <p className="text-lg font-medium text-amber-500">Neutral</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-3">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Analysis Summary</h3>
              <p className="text-xs sm:text-sm">
                {assetName} ({assetSymbol}) is currently in a consolidation phase after recent gains. Support at{" "}
                {support} appears strong, while resistance at {resistance} has been tested multiple times. Technical
                indicators suggest a potential move to {prediction} in the next 30 days if market conditions remain
                favorable. Given the upcoming network upgrades and increasing adoption, our recommendation is to{" "}
                <span className={recommendationColor}>{recommendation}</span> current positions.
              </p>
            </div>
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
