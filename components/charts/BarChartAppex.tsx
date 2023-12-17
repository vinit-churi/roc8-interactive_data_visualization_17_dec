"use client";
import { FilterType } from "@/types";
import React from "react";
import Chart from "react-apexcharts";
import { useState } from "react";
import FeatureLineChart from "./FeatureLineChart";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const BarChartAppex = ({ result, lineChartResult }: FilterType) => {
  // const [selectedBar, setSelectedBar] = useState(null);
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  console.log(params.get("selectedBar"));
  if (result === null) return <div>loading...</div>;
  const categories = ["A", "B", "C", "D", "E", "F"];
  const options = {
    chart: {
      id: "basic-bar",
      events: {
        click: function (event: any, chartContext: any, config: any) {
          const clickedSeriesIndex = config.seriesIndex;
          const clickedDataPointIndex = config.dataPointIndex;
          try {
            const clickedXValue =
              chartContext.w.globals.labels[clickedDataPointIndex];
            const clickedYValue =
              chartContext.w.globals.series[clickedSeriesIndex][
                clickedDataPointIndex
              ];

            console.log("Clicked bar X value:", clickedXValue);
            if (clickedXValue) {
              // setSelectedBar(clickedXValue);
              const newParams = new URLSearchParams(params);
              newParams.set("selectedBar", clickedXValue);
              const newUrl = `${pathname}?${newParams.toString()}`;
              router.push(newUrl);
            }
            console.log("Clicked bar Y value:", clickedYValue);
          } catch (err) {
            console.log("use did not click on the bar ");
          }
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: categories,
    },
  };
  const series = [
    {
      name: "time spend",
      data: [
        result["A"],
        result["B"],
        result["C"],
        result["D"],
        result["E"],
        result["F"],
      ],
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" width="500" />
      {params.get("selectedBar") && (
        <FeatureLineChart
          lineChartResult={lineChartResult}
          selectedBar={params.get("selectedBar")}
        />
      )}
    </div>
  );
};

export default BarChartAppex;
