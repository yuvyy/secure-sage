import React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  visitors: {
    label: "Pass",
  },
  chrome: {
    label: "Pass",
    color: "hsl(var(--primary))",
  },
  safari: {
    label: "Fail",
    color: "hsl(var(--destructive))",
  },
};

export default function TotalPieChart({ pass, fail }) {
  const chartData = [
    { result: "pass", number: pass, fill: "#1E5128" },
    { result: "fail", number: fail, fill: "var(--color-safari)" },
  ];

  const totalTests = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.number, 0);
  }, [chartData]);

  console.log("Chart Data:", chartData);
  console.log("Total Tests:", totalTests);

  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="number"
              nameKey="result"
              innerRadius={65}
              strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle">
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold">
                          {totalTests.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy + 24}
                          className="fill-muted-foreground">
                          Tests
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">

        <div className="leading-none text-muted-foreground">
          Showing results for the most recent test
        </div>
      </CardFooter>
    </Card>
  );
}
