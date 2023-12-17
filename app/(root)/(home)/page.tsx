import BarChart from "@/components/home/BarChart";
// Dynamically import BarChart with ssr set to false

import FilterForm from "@/components/home/FilterForm";
import { SearchParamsProps } from "@/types";
import { Suspense, useEffect } from "react";
export default function Home({ searchParams }: SearchParamsProps) {
  console.log(searchParams);
  console.log();
  return (
    <div className="content mt-9">
      {/* <Suspense fallback={<div>loading...</div>}> */}
      <BarChart
        ageRange={searchParams["ageRange"] || null}
        gender={searchParams["gender"] || null}
        date1={searchParams["date1"] || null}
        date2={searchParams["date2"] || null}
        selectedBar={searchParams["selectedBar"] || null}
      />
      {/* </Suspense> */}
    </div>
  );
}
