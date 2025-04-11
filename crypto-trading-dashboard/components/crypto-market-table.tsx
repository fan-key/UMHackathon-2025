"use client"

import { useState } from "react"
import { ArrowUpDown, ChevronDown, ChevronUp } from "lucide-react"
import { ResponsiveContainer, AreaChart, Area } from "recharts"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const cryptoData = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: 51432.67,
    change24h: 2.34,
    marketCap: 1000000000000,
    volume24h: 28000000000,
    sparkline: [51000, 51200, 51100, 51300, 51400, 51200, 51432.67],
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 3821.45,
    change24h: 1.56,
    marketCap: 460000000000,
    volume24h: 15000000000,
    sparkline: [3800, 3790, 3810, 3830, 3800, 3810, 3821.45],
  },
  {
    id: "binancecoin",
    name: "Binance Coin",
    symbol: "BNB",
    price: 612.34,
    change24h: -0.78,
    marketCap: 95000000000,
    volume24h: 2100000000,
    sparkline: [615, 613, 610, 608, 610, 611, 612.34],
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: 142.87,
    change24h: 3.45,
    marketCap: 60000000000,
    volume24h: 3500000000,
    sparkline: [138, 139, 140, 141, 142, 143, 142.87],
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    price: 0.58,
    change24h: -1.23,
    marketCap: 20500000000,
    volume24h: 850000000,
    sparkline: [0.59, 0.585, 0.58, 0.575, 0.577, 0.579, 0.58],
  },
]

export function CryptoMarketTable() {
  const [sortColumn, setSortColumn] = useState("marketCap")
  const [sortDirection, setSortDirection] = useState("desc")

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("desc")
    }
  }

  const sortedData = [...cryptoData].sort((a, b) => {
    const aValue = a[sortColumn as keyof typeof a]
    const bValue = b[sortColumn as keyof typeof b]

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue
    }

    return 0
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>
              <Button variant="ghost" className="p-0 h-8 font-medium" onClick={() => handleSort("price")}>
                Price
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" className="p-0 h-8 font-medium" onClick={() => handleSort("change24h")}>
                24h %
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="hidden md:table-cell">
              <Button variant="ghost" className="p-0 h-8 font-medium" onClick={() => handleSort("marketCap")}>
                Market Cap
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="hidden lg:table-cell">
              <Button variant="ghost" className="p-0 h-8 font-medium" onClick={() => handleSort("volume24h")}>
                Volume (24h)
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="hidden xl:table-cell">Last 7 Days</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((crypto, index) => (
            <TableRow key={crypto.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                    {crypto.symbol.charAt(0)}
                  </div>
                  <div className="font-medium">{crypto.name}</div>
                  <div className="text-muted-foreground">{crypto.symbol}</div>
                </div>
              </TableCell>
              <TableCell>${crypto.price.toLocaleString()}</TableCell>
              <TableCell>
                <div className={`flex items-center ${crypto.change24h >= 0 ? "text-emerald-500" : "text-red-500"}`}>
                  {crypto.change24h >= 0 ? (
                    <ChevronUp className="mr-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="mr-1 h-4 w-4" />
                  )}
                  {Math.abs(crypto.change24h)}%
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">${(crypto.marketCap / 1000000000).toFixed(1)}B</TableCell>
              <TableCell className="hidden lg:table-cell">${(crypto.volume24h / 1000000000).toFixed(1)}B</TableCell>
              <TableCell className="hidden xl:table-cell">
                <div className="h-10 w-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={crypto.sparkline.map((value, i) => ({ value, index: i }))}
                      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    >
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke={crypto.change24h >= 0 ? "#10b981" : "#ef4444"}
                        fill={crypto.change24h >= 0 ? "#10b98120" : "#ef444420"}
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
