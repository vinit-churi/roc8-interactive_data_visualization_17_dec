import { getFeatureData, getServerData } from "@/lib/actions/data.action";
import React, { Suspense } from "react";
// import BarChartAppex from "@/components/charts/BarChartAppex";
import { FilterType } from "@/types";

import dynamic from "next/dynamic";
// import BarChartAppex from "../charts/BarChartAppex";
const BarChartAppex = dynamic(() => import("../charts/BarChartAppex"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const BarChart = async ({
  ageRange = null,
  gender = null,
  date1 = null,
  date2 = null,
  selectedBar = null,
}: FilterType) => {
  const result = await getServerData({ ageRange, gender, date1, date2 });
  console.log(result);
  //
  let result2 = null;
  // if()
  result2 = await getFeatureData({
    selectedFeatures: selectedBar,
  });
  console.log(result2);
  //
  return (
    <div>
      <BarChartAppex result={result} lineChartResult={result2} />
    </div>
  );
};

export default BarChart;
