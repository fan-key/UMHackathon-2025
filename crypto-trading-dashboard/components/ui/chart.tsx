import type * as React from "react"

export const Chart = () => {
  return null
}

export const ChartContainer = ({
  children,
  data,
  tooltipClassName,
}: {
  children: React.ReactNode
  data: any[]
  tooltipClassName?: string
}) => {
  return <>{children}</>
}

export const ChartTooltip = () => {
  return null
}

export const ChartTooltipContent = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export const ChartTooltipItem = ({
  label,
  value,
  valueClassName,
}: {
  label: string
  value: string
  valueClassName?: string
}) => {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className={`font-medium ${valueClassName}`}>{value}</span>
    </div>
  )
}
