"use client";
import { DateRangePicker, DateRangePickerProps } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useEffect, useState } from "react";
import { set } from "date-fns";
function DatePickerWithRange({
  setDate1,
  setDate2,
  date1,
  date2,
}: {
  setDate1: any;
  setDate2: any;
  date1: string | null;
  date2: string | null;
}) {
  console.log(date1, date2, "look here");
  const [selectionRange, setSelectionRange] = useState({
    startDate: date1 ? new Date(date1) : new Date("2022-10-4"),
    endDate: date2 ? new Date(date2) : new Date("2022-10-29"),
    key: "selection",
  });
  function handleSelect(ranges: DateRangePickerProps) {
    console.log(ranges);
    // @ts-ignore
    const startDate = new Date(ranges.selection.startDate);
    // @ts-ignore
    const endDate = new Date(ranges.selection.endDate);

    const formattedStartDate = startDate.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const formattedEndDate = endDate.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    setDate1(formattedStartDate);
    setDate2(formattedEndDate);
    setSelectionRange({
      ...selectionRange,
      // @ts-ignore
      ...ranges.selection,
    });
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }
  useEffect(() => {
    console.log("useEffect");
    if (date1 && date2) {
      setSelectionRange({
        startDate: new Date(date1),
        endDate: new Date(date2),
        key: "selection",
      });
    }
  }, [date1, date2]);
  return (
    <DateRangePicker
      maxDate={new Date("2022-10-29")}
      minDate={new Date("2022-10-4")}
      ranges={[selectionRange]}
      dateDisplayFormat="yyyy-MM-dd"
      onChange={handleSelect}
    />
  );
}

export default DatePickerWithRange;
