"server only";

import { createQuery, createQuery2 } from "../queries";
import getDatabase from "../sqlite";

type TEntry = {
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  F: number;
  Day: string;
  Gender: string;
  Age: String;
};

interface IServerData {
  ageRange: null | string;
  gender: null | string;
  date1: null | string;
  date2: null | string;
}
interface IFeatureData {
  ageRange?: null | string;
  gender?: null | string;
  date1?: null | string;
  date2?: null | string;
  selectedFeatures?: null | string;
}

export async function getServerData({
  ageRange,
  gender,
  date1,
  date2,
}: IServerData) {
  let query = createQuery(ageRange, gender, date1, date2);

  let result: null | TEntry[] = null;
  try {
    result = await new Promise((resolve, reject) => {
      console.log(query);
      getDatabase().all(query, [], (err, rows: TEntry[]) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(rows);
      });
    });
  } catch (err) {
    console.log(err);
  }
  if (result && result.length > 0) {
    return result[0];
  }
  return {
    data: null,
  };
}

export async function getFeatureData({
  ageRange,
  gender,
  date1,
  date2,
  selectedFeatures,
}: IFeatureData) {
  let query = createQuery2(ageRange, gender, date1, date2, selectedFeatures);

  let result: null | TEntry[] = null;
  try {
    result = await new Promise((resolve, reject) => {
      console.log(query);
      getDatabase().all(query, [], (err, rows: TEntry[]) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(rows);
      });
    });
  } catch (err) {
    console.log(err);
  }
  console.log(result);
  if (result && result.length > 0) {
    return result;
  }
  return {
    data: null,
  };
}
