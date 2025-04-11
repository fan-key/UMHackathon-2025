"use client"

import { useState } from "react"
import { ArrowUpDown, ChevronDown, ChevronUp } from "lucide-react"
import { ResponsiveContainer, AreaChart, Area } from "recharts"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const stockData = [
  {
    id: "aapl",
    name: "Apple Inc.",
    symbol: "AAPL",
    price: 187.32,
    change24h: 1.24,
    marketCap: 2900000000000,
    volume24h: 58000000000,
    sparkline: [185, 186, 187, 186.5, 187.1, 187.3, 187.32],
  },
  {
    id: "msft",
    name: "Microsoft Corporation",
    symbol: "MSFT",
    price: 412.65,
    change24h: 0.87,
    marketCap: 3100000000000,
    volume24h: 32000000000,
    sparkline: [410, 411, 412, 411.5, 412.3, 412.5, 412.65],
  },
  {
    id: "googl",
    name: "Alphabet Inc.",
    symbol: "GOOGL",
    price: 152.87,
    change24h: -0.32,
    marketCap: 1900000000000,
    volume24h: 25000000000,
    sparkline: [153.2, 153.1, 152.9, 152.7, 152.8, 152.9, 152.87],
  },
  {
    id: "amzn",
    name: "Amazon.com Inc.",
    symbol: "AMZN",
    price: 178.12,
    change24h: 1.56,
    marketCap: 1850000000000,
    volume24h: 42000000000,
    sparkline: [175, 176, 177, 177.5, 178, 178.1, 178.12],
  },
  {
    id: "tsla",
    name: "Tesla, Inc.",
    symbol: "TSLA",
    price: 175.34,
    change24h: -2.13,
    marketCap: 560000000000,
    volume24h: 38000000000,
    sparkline: [179, 178, 177, 176, 175.5, 175.4, 175.34],
  },
]

export function StockMarketTable() {
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

  const sortedData = [...stockData].sort((a, b) => {
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
          {sortedData.map((stock, index) => (
            <TableRow key={stock.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                    {stock.symbol.charAt(0)}
                  </div>
                  <div className="font-medium">{stock.name}</div>
                  <div className="text-muted-foreground">{stock.symbol}</div>
                </div>
              </TableCell>
              <TableCell>${stock.price.toLocaleString()}</TableCell>
              <TableCell>
                <div className={`flex items-center ${stock.change24h >= 0 ? "text-emerald-500" : "text-red-500"}`}>
                  {stock.change24h >= 0 ? (
                    <ChevronUp className="mr-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="mr-1 h-4 w-4" />
                  )}
                  {Math.abs(stock.change24h)}%
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">${(stock.marketCap / 1000000000).toFixed(1)}B</TableCell>
              <TableCell className="hidden lg:table-cell">${(stock.volume24h / 1000000000).toFixed(1)}B</TableCell>
              <TableCell className="hidden xl:table-cell">
                <div className="h-10 w-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={stock.sparkline.map((value, i) => ({ value, index: i }))}
                      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    >
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke={stock.change24h >= 0 ? "#10b981" : "#ef4444"}
                        fill={stock.change24h >= 0 ? "#10b98120" : "#ef444420"}
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
