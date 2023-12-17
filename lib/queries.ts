export function createQuery(
  ageRange: string | null,
  gender: string | null,
  date1: string | null,
  date2: string | null
): string {
  let filters = [];
  console.log(ageRange);
  // if (ageRange && ageRange !== "" && ageRange !== "null" && ageRange !== null) {
  // }
  if (ageRange === "15-25") {
    filters.push("Age LIKE '15-25'");
  } else if (ageRange === ">25") {
    filters.push("Age LIKE '>25'");
  }

  // if (gender && gender !== "" && gender != "null" && gender !== null) {
  // }
  if (gender === "Male") {
    filters.push("Gender = 'Male'");
  } else if (gender === "Female") {
    filters.push("Gender =  'Female'");
  }

  if (
    date1 &&
    date2 &&
    date1 !== "" &&
    date2 !== "" &&
    date1 !== null &&
    date2 !== null
  ) {
    filters.push(`Day BETWEEN '${date1}' AND '${date2}'`);
  }

  let query = `SELECT SUM(A) AS A, SUM(B) AS B, SUM(C) AS C, SUM(D) AS D, SUM(E) AS E, SUM(F) AS F  FROM FeatureUsage`;
  if (filters.length > 0) {
    query += ` WHERE ${filters.join(" AND ")}`;
  }
  query += " ORDER BY Day;";
  console.log(query);
  return query;
}

export function createQuery2(
  ageRange: any,
  gender: any,
  date1: any,
  date2: any,
  selectedFeatures: any
) {
  let filters = [];
  console.log(ageRange);
  // if (ageRange && ageRange !== "" && ageRange !== "null" && ageRange !== null) {
  // }
  if (ageRange === "15-25") {
    filters.push("Age LIKE '15-25'");
  } else if (ageRange === ">25") {
    filters.push("Age LIKE '>25'");
  }

  // if (gender && gender !== "" && gender != "null" && gender !== null) {
  // }
  if (gender === "Male") {
    filters.push("Gender = 'Male'");
  } else if (gender === "Female") {
    filters.push("Gender =  'Female'");
  }

  if (
    date1 &&
    date2 &&
    date1 !== "" &&
    date2 !== "" &&
    date1 !== null &&
    date2 !== null
  ) {
    filters.push(`Day BETWEEN '${date1}' AND '${date2}'`);
  }

  let query = `SELECT AVG(${
    selectedFeatures ? selectedFeatures : "A"
  }) AS feature_data, Day FROM FeatureUsage GROUP BY Day`;
  if (filters.length > 0) {
    query += ` WHERE ${filters.join(" AND ")}`;
  }
  query += " ORDER BY Day;";
  console.log(query);
  return query;
}
