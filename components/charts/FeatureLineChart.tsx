"use client";
import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { useSearchParams } from "next/navigation";
import { getFeatureData } from "@/lib/actions/data.action";
const FeatureLineChart = ({
  selectedBar,
  lineChartResult,
}: {
  selectedBar: string;
}) => {
  const params = useSearchParams();
  console.log(lineChartResult);
  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        categories: lineChartResult.map((item: any) => item.Day),
      },
    },
    series: [
      {
        name: "series-1",
        // data: [30, 40, 45, 50, 49, 60, 70, 91],
        data: lineChartResult.map((item: any) => item.feature_data),
      },
    ],
  };

  useEffect(() => {
    async function fetchData() {
      try {
        // const searchParams = new URLSearchParams(params);
        // const ageRange = searchParams.get("ageRange");
        // const gender = searchParams.get("gender");
        // const date1 = searchParams.get("date1");
        // const date2 = searchParams.get("date2");
        // const selectedFeatures = selectedBar;
        // const result = await getFeatureData({
        //   ageRange,
        //   gender,
        //   date1,
        //   date2,
        //   selectedFeatures,
        // });
        // const result = await getFeatureData({
        //   selectedFeatures: selectedBar,
        // });
        // console.log(result);
      } catch (err) {
        // console.log(err);
        console.log(err);
      }
    }
    fetchData();
  }, [selectedBar]);
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureLineChart;
