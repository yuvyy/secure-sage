import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// export const description = "A stacked bar chart with a legend"

const chartData = [
  { category: "Cat 1", pass: 186, fail: 80 },
  { category: "Cat 2", pass: 305, fail: 200 },
  { category: "Cat 3", pass: 237, fail: 120 },
  { category: "Cat 4", pass: 73, fail: 190 },
  { category: "Cat 5", pass: 209, fail: 130 },
  { category: "Cat 6", pass: 214, fail: 140 },
  { category: "Cat 7", pass: 214, fail: 140 },
  { category: "Cat 8", pass: 214, fail: 140 },
  { category: "Cat 9", pass: 214, fail: 140 },
  { category: "Cat 10", pass: 214, fail: 140 },
  { category: "Cat 11", pass: 214, fail: 140 },
  { category: "Cat 12", pass: 214, fail: 140 },
  { category: "Cat 13", pass: 214, fail: 140 },
  { category: "Cat 14", pass: 214, fail: 140 },
];

const chartConfig = {
  pass: {
    label: "Pass",
    color: "hsl(var(--primary))",
  },
  fail: {
    label: "Fail",
    color: "hsl(var(--destructive))",
  },
}

export default function CategoricalBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Categorical Bar Chart</CardTitle>
        <CardDescription>Date and Time Stamp</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="pass"
              stackId="a"
              fill="var(--color-pass)"
              radius={[0, 0, 4, 4]}
              barSize={75}
            />
            <Bar
              dataKey="fail"
              stackId="a"
              fill="var(--color-fail)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this cat <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 categorys
        </div>
      </CardFooter> */}
    </Card>
  )
}
