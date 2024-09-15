import React, { useState, useEffect } from "react";
import CategoricalBarChart from "@/Components/categoricalBarChart";
import TotalPieChart from "@/Components/totalPieChart";
import { Button } from "@/Components/ui/button";
import { useLocation , Link} from "react-router-dom";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import Sidebar from "@/Components/sidebar";
import { Progress } from "@/components/ui/progress";

// Set the fonts
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const genPdf = () => {
  // PDF generation logic (unchanged)
  // ...
};

export default function ResultPage() {
  const location = useLocation();

  // start of temporary code to be refactored after backend integration
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    const incrementProgress = () => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    };

    timer = setInterval(incrementProgress, 30); // Update every 20ms

    const fetchData = async () => {
      try {
        // Simulating API call
        await new Promise((resolve) => setTimeout(resolve, 3500)); // 2 second delay
        setData(location.state || {});
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error state if needed
      } finally {
        setIsLoading(false);
        clearInterval(timer);
        setProgress(100);
      }
    };

    fetchData();

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [location.state]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Progress className="w-1/2 mb-4" value={progress} />
        <p>{progress}% Complete</p>
      </div>
    );
  }

  const selectedSystemsOrGroups =
    data?.selectedSystem?.length > 0
      ? data.selectedSystem
      : data?.selectedGroups?.length > 0
      ? data.selectedGroups.join(", ")
      : "No systems or groups";

  // end of temporary code to be refactored after backend integration

  return (
    <>
      <header>
        <h2 className="text-primary text-5xl font-semibold p-4 ml-16">
          Results for Test {data.testName}
        </h2>
      </header>
      
      <main className="flex">
        <Sidebar />

        <div className="flex flex-col gap-5 ml-24 p-5">
          <div className="grid grid-cols-12 grid-rows-20 gap-3">
            <div
              className="center flex flex-col gap-4 border rounded-md shadow-md p-4 h-max col-span-4 row-span-2"
              id="TextInfo">
              <h3 className="text-accent-foreground font-medium text-3xl">
                {data?.testName || "Sample Test Name"}
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
            <div
              className="col-span-4 row-span-3 h-max shadow-md"
              id="Piechart">
              <TotalPieChart pass={111} fail={110} />
            </div>
            <div className="flex gap-2 col-span-4">
              <Button
                variant="outline"
                className="text-lg py-10"
                onClick={genPdf}>
                Download Report
              </Button>
              <Button className="text-lg py-10">
                <Link to="/remediate">Remediate Issues</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
