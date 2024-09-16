import "react-circular-progressbar/dist/styles.css";
import TotalPieChart from "./totalPieChart";
import { Button } from "./ui/button";
import { Plus, Repeat, FileText, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LogComponent from "./LogComponent";
import DashNew from "./dashNew";
import ProfileDropDown from "./ProfileDropDown";
;
// import TestSelector from "./testSelector";
import NewTestForm from "./newTestForm";
export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [numberSystems, setNumberSystems] = useState(0);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        // const response = await fetch("/api/your-endpoint"); // Replace with your actual API endpoint
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        // const data = await response.json();
        const data = {
          name: "Test Report A",
          date: "2024-09-14",
          time: "15:30",
          systems: ["System1", "System2", "System3"],
          pass: 100,
          fail: 200,
        };

        setItems(data);
        setDataIsLoaded(true);
        setNumberSystems(data.systems.length); // Assuming data.systems is an array
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setDataIsLoaded(true); // Ensure loading state is updated even on error
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on mount

  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Please wait some time...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-row align-middle justify-between p-5">
        <h2 className="text-primary text-5xl font-semibold">Dashboard</h2>
        <ProfileDropDown />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div
            className="bg-accent shadow-md rounded-lg p-5 flex items-center
           w-[900]px ">
            <div className="flex flex-col gap-4">
              <h3 className="text-accent-foreground font-medium text-2xl">
                {items.name}
              </h3>
              <ul className="pl-1 flex flex-col gap-1">
                <li className="text-muted-foreground font-medium">
                  Date: {items.date}
                </li>
                <li className="text-muted-foreground font-medium">
                  Time: {items.time}
                </li>
                {/* <li className="text-muted-foreground font-medium">
                  Systems Tested: 23
                </li> */}
              </ul>
            </div>
            <div className="pl-5">
              <TotalPieChart pass={items.pass} fail={items.fail} />
            </div>
          </div>
          <div className="flex flex-col gap-4 pl-3">
            <div className="bg-accent rounded-lg h-max p-3 shadow-md flex-grow">
              <h3 className="text-3xl text-center font-semibold">
                Tested Systems
              </h3>
              <div className="text-9xl text-primary text-center font-semibold">
                {numberSystems}
              </div>
            </div>
            <div className="flex gap-4 self-center flex-grow">
              <Button variant="outline" className="size-38">
                <div className="flex flex-col items-center gap-2">
                  <FileText className="text-primary h-24 w-24" />
                  <label className="text-center">
                    View latest test details
                  </label>
                </div>
              </Button>
              <Link to="/newTest" >
                <Button variant="outline" className="size-38" asChild>
                  <div className="flex flex-col items-center gap-2">
                    <Plus className="text-primary h-24 w-24" />
                    <label className="text-center">New Test</label>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <DashNew />
        </div>
        <LogComponent />
      </div>
    </>
  );
}

{
  /* <div className="bg-accent rounded-lg h-max p-5 shadow-md flex-grow">
            <h3 className="text-3xl text-center font-semibold">Some numbers</h3>
            <div className="text-9xl text-primary text-center font-semibold">
              Stats
            </div>
          </div> */
}
