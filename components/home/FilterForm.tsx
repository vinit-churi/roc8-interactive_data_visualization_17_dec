"use client";

import DatePickerWithRange from "./DatePickerWithRange";
import Divider from "./Divider";
import {
  genderDropdownOptions,
  ageDropdownOptions,
} from "@/constants/formOptions";
import DropDownFilter from "./DropDownFilter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TUrlFilter } from "@/types";

const FilterForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [date1, setDate1] = useState<null | string>(
    searchParams.get("date1") || null
  );
  const [date2, setDate2] = useState<null | string>(
    searchParams.get("date2") || null
  );
  const [ageRange, setAgeRange] = useState<null | string>(
    searchParams.get("ageRange") || null
  );
  const [gender, setGender] = useState<null | string>(
    searchParams.get("gender") || null
  );

  useEffect(() => {
    if (doesUrlHaveSearchParams()) {
      const localObject: any = {};
      const params = new URLSearchParams(searchParams);
      if (params.has("date1")) {
        localObject["date1"] = params.get("date1");
        setDate1(params.get("date1"));
      }
      if (params.has("date2")) {
        localObject["date2"] = params.get("date2");
        setDate2(params.get("date2"));
      }
      if (params.has("ageRange")) {
        localObject["ageRange"] = params.get("ageRange");
        setAgeRange(params.get("ageRange"));
      }
      if (params.has("gender")) {
        localObject["gender"] = params.get("gender");
        setGender(params.get("gender"));
      }
      saveLocalData(localObject);
    } else {
      // If there are no search params, check if there is local data, if local data exists then modify the url according to the local data
      if (window !== undefined) {
        const filters = localStorage.getItem("filters");
        const params = new URLSearchParams(searchParams);
        if (filters) {
          // loop over the keys and generate an new url and then push it to the router
          const localObject = JSON.parse(filters);
          const keys = Object.keys(localObject);
          keys.forEach((key) => {
            params.set(key, localObject[key]);
          });
          const newUrl = `${pathname}?${params.toString()}`;
          console.log(newUrl);
          router.push(newUrl);
        }
      }
    }

    function saveLocalData(data: TUrlFilter) {
      if (window !== undefined) {
        localStorage.setItem("filters", JSON.stringify(data));
      }
    }

    function doesUrlHaveSearchParams() {
      const params = new URLSearchParams(searchParams);
      if (
        params.has("date1") ||
        params.has("date2") ||
        params.has("ageRange") ||
        params.has("gender")
      ) {
        return true;
      }
      return false;
    }
  }, [searchParams, pathname, router]);

  // useEffect(() => {
  //   // Create a new URLSearchParams instance
  //   if (firstRender.current) {
  //     const params = new URLSearchParams();

  //     // Set the new values
  //     if (date1) params.set("date1", date1);
  //     if (date2) params.set("date2", date2);
  //     if (ageRange) params.set("ageRange", ageRange);
  //     if (gender) params.set("gender", gender);

  //     // Create the new URL
  //     const newUrl = `${pathname}?${params.toString()}`;

  //     // Push the new URL to the router
  //     router.push(newUrl);
  //   }
  //   firstRender.current = true;
  // }, [date1, date2, ageRange, gender, pathname, router]); // Depend on these variables

  function setURLDate1(date: string) {
    const params = new URLSearchParams(searchParams);
    params.set("date1", date);
    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl);
  }

  function setURLDate2(date: string) {
    const params = new URLSearchParams(searchParams);
    params.set("date2", date);
    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl);
  }

  function setURLAgeRange(ageRange: string) {
    if (ageRange === "All") {
      const params = new URLSearchParams(searchParams);
      params.delete("ageRange");
      const newUrl = `${pathname}?${params.toString()}`;
      router.push(newUrl);
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.set("ageRange", ageRange);
    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl);
  }

  function setURLGender(gender: string) {
    if (gender === "All") {
      const params = new URLSearchParams(searchParams);
      params.delete("gender");
      const newUrl = `${pathname}?${params.toString()}`;
      router.push(newUrl);
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.set("gender", gender);
    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl);
  }

  return (
    <div>
      <Divider className="w-full mx-auto" />
      <div>
        <h1 className="font-normal text-2xl py-3">Pick date range</h1>
        <DatePickerWithRange
          date1={date1}
          date2={date2}
          setDate1={setURLDate1}
          setDate2={setURLDate2}
        />
      </div>
      <Divider className="w-full mx-auto" />
      <div className="flex justify-center gap-5">
        <div className="p-2">
          <h1 className="font-normal text-2xl py-3">Pick age range</h1>
          <DropDownFilter
            label="Select age"
            options={ageDropdownOptions}
            setVal={setURLAgeRange}
            val={ageRange || undefined}
          />
        </div>
        <div className="p-2">
          <h1 className="font-normal text-2xl py-3">Pick a gender</h1>
          <DropDownFilter
            label="Select gender"
            options={genderDropdownOptions}
            setVal={setURLGender}
            val={gender || undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
