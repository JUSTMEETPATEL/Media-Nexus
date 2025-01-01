'use client'

import { Bar, BarChart, Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState, useEffect } from 'react'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

interface StudentData {
  date: string
  count: number
}

interface StudentChartProps {
  data: StudentData[]
}

export function StudentChart({ data }: StudentChartProps) {
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar')
  const [isMobile, setIsMobile] = useState(true)  // Default to true for server-side rendering

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    setIsMobile(!mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setIsMobile(!e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const chartConfig = {
    count: {
      label: 'Students',
      color: 'hsl(var(--primary))',
    },
  }

  const totalStudents = data.reduce((sum, item) => sum + item.count, 0)

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
        <CardTitle className="text-lg sm:text-xl">Total Registered Students</CardTitle>
        {!isMobile && (
          <Select value={chartType} onValueChange={(value) => setChartType(value as 'bar' | 'line')}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select chart type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bar">Bar Chart</SelectItem>
              <SelectItem value="line">Line Chart</SelectItem>
            </SelectContent>
          </Select>
        )}
      </CardHeader>
      <CardContent>
        {isMobile ? (
          <div className="text-center p-4">
            <p className="text-2xl font-bold text-primary mb-2">{totalStudents}</p>
            <p className="text-sm text-gray-500">Total students registered</p>
            <p className="text-xs text-gray-400 mt-4">Detailed chart view is available on larger screens</p>
          </div>
        ) : (
          <ChartContainer config={chartConfig} className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === 'bar' ? (
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 12 }}
                    interval={0}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="count" fill="hsl(var(--primary))" />
                </BarChart>
              ) : (
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 12 }}
                    interval={0}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="count" stroke="hsl(var(--primary))" />
                </LineChart>
              )}
            </ResponsiveContainer>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}

