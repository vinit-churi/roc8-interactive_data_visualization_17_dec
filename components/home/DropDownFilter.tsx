"use client";
import { TDropdownOptions } from "@/types";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DropDownFilter = ({
  options,
  label,
  setVal,
  val,
}: {
  options: any;
  label: string;
  setVal: any;
  val: string | undefined;
}) => {
  return (
    <div>
      <Select
        defaultValue="any"
        value={val}
        onValueChange={(value) => setVal(value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {options.map(
            (option: { id: number; value: string; label: string }) => {
              return (
                <SelectItem key={option.id} value={option.value}>
                  {option.label}
                </SelectItem>
              );
            }
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropDownFilter;
