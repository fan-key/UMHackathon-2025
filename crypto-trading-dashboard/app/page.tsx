import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { CryptoMarketTable } from "@/components/crypto-market-table"
import { DashboardNav } from "@/components/dashboard-nav"
import { MarketAnalysis } from "@/components/market-analysis"
import { MarketOverview } from "@/components/market-overview"
import { StockMarketTable } from "@/components/stock-market-table"
import { TrendingAssets } from "@/components/trending-assets"

export const metadata: Metadata = {
  title: "CryptoTrack - Cryptocurrency and Stock Market Dashboard",
  description: "Monitor cryptocurrency and stock markets with real-time data and analysis",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                <span className="font-bold">CryptoTrack</span>
              </Link>
              <div className="grid gap-1">
                <Link href="#" className="flex items-center gap-2 rounded-lg px-3 py-2 text-primary hover:bg-muted">
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
                >
                  Cryptocurrencies
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
                >
                  Stocks
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
                >
                  Watchlist
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
                >
                  Portfolio
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
                >
                  News
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-xl">
          <span className="font-bold">CryptoTrack</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link href="#" className="text-sm font-medium text-primary">
            Dashboard
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Cryptocurrencies
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Stocks
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Watchlist
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Portfolio
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
            News
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4 md:ml-0">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button size="sm" className="hidden md:flex">
            Sign Up
          </Button>
        </div>
      </header>
      <div className="grid flex-1 md:grid-cols-[240px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <DashboardNav />
        </div>
        <main className="flex flex-col gap-6 p-4 md:gap-8 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Monitor cryptocurrency and stock markets with real-time data and analysis.
              </p>
            </div>
            <MarketAnalysis />
          </div>
          <div className="grid gap-6">
            <MarketOverview />
            <Tabs defaultValue="crypto" className="w-full">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="crypto">Cryptocurrencies</TabsTrigger>
                  <TabsTrigger value="stocks">Stocks</TabsTrigger>
                </TabsList>
                <Button variant="outline" size="sm" className="ml-auto gap-1">
                  View All <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <TabsContent value="crypto" className="mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Cryptocurrency Markets</CardTitle>
                    <CardDescription>Real-time cryptocurrency prices, market cap, and 24h change.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CryptoMarketTable />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="stocks" className="mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Stock Markets</CardTitle>
                    <CardDescription>Real-time stock prices, market cap, and daily change.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <StockMarketTable />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <TrendingAssets />
          </div>
        </main>
      </div>
    </div>
  )
}
