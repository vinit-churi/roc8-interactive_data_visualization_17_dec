let seeded: boolean = false;
import csv from "csv-parser";
import fs from "fs";
import path from "path";
import getDatabase from "@/lib/sqlite";
export async function GET() {
  if (!seeded) {
    const dbInstance = getDatabase();
    fs.createReadStream("./lib/data.csv")
      .pipe(csv())
      .on("data", (row) => {
        // console.log(row, "look");
        const [day, month, year] = row.Day.split("/");
        const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
          2,
          "0"
        )}`;
        console.log(formattedDate);
        dbInstance?.run(
          `
    INSERT INTO FeatureUsage (Day, Age, Gender, A, B, C, D, E, F)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
          [
            formattedDate,
            row.Age,
            row.Gender,
            row.A,
            row.B,
            row.C,
            row.D,
            row.E,
            row.F,
          ]
        );
      })
      .on("end", () => {
        console.log("CSV file successfully seeded into the database.");
        seeded = true;
      });
  }
  return Response.json({ data: "successfully seeded" });
}
