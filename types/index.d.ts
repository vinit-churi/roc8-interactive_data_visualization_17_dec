export type RecordType = {
  Day: Date;
  Age: string;
  Gender: boolean;
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  F: number;
};

export type FilterType = {
  ageRange: string | null;
  gender: string | null;
  date1: string | null;
  date2: string | null;
};

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export type TDropdownOptions = {
  id: number;
  value: string;
  label: string;
}[];

export type TUrlFilter = {
  date1?: string;
  date2?: string;
  ageRange?: string;
  gender?: string;
};
