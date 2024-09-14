import React from "react";
import CategoricalBarChart from "@/Components/categoricalBarChart";
import Header from "@/Components/Header";
import TotalPieChart from "@/Components/totalPieChart";
import { Button } from "@/Components/ui/button";
import { useLocation } from "react-router-dom";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts"; // Import fonts

// Set the fonts
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const genPdf = () => {
  const docDefinition = {
    content: [
      {
        table: {
          widths: ["*"],
          body: [
            [
              {
                stack: [
                  { text: "Audit Report", fontSize: 15, margin: [0, 0, 0, 10] },
                  { text: "This is a Report.", margin: [0, 10] },
                ],
                margin: [10, 10, 10, 10], // Margin inside the cell
              },
            ],
          ],
        },
        layout: {
          hLineWidth: () => 1,
          vLineWidth: () => 1,
          hLineColor: () => "#000",
          vLineColor: () => "#000",
          paddingLeft: () => 10,
          paddingRight: () => 10,
        },
      },
    ],
    pageMargins: [40, 60, 40, 60], // Adjust page margins if necessary
    defaultStyle: {
      font: "Roboto",
    },
  };

  pdfMake.createPdf(docDefinition).download("example.pdf");
};

export default function ResultPage() {
  const location = useLocation();
  const data = location.state || {};

  console.log("Received data:", data); // Check if data is logged correctly

  const selectedSystemsOrGroups = data.selectedSystem?.length > 0
    ? data.selectedSystem
    : data.selectedGroups?.length > 0
    ? data.selectedGroups.join(", ")
    : "No systems or groups";

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="mx-20">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-12 grid-rows-20 gap-3">
            <div
              className="center flex flex-col gap-4 border rounded-md shadow-md p-4 h-max col-span-4 row-span-2"
              id="TextInfo">
              <h3 className="text-accent-foreground font-medium text-3xl">
                {data.testName || "Sample Test Name"}
              </h3>
              <ul className="pl-6 flex flex-col gap-1">
                <li className="text-muted-foreground font-medium">
                  Date: 09/05/2024
                </li>
                <li className="text-muted-foreground font-medium">
                  Time: 10:25 pm
                </li>
                <li className="text-muted-foreground font-medium">
                  Systems: {selectedSystemsOrGroups}
                </li>
              </ul>
            </div>
            <div className="col-span-8 row-span-8 shadow-md" id="BarChart">
              <CategoricalBarChart />
            </div>
            <div className="col-span-4 row-span-3 h-max shadow-md" id="Piechart">
              <TotalPieChart pass={500} fail={500} />
            </div>
            <div className="flex gap-2 col-span-4">
              <Button
                variant="outline"
                className="text-lg py-10"
                onClick={genPdf}>
                Download Report
              </Button>
              <Button className="text-lg py-10">Remediate Issues</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
