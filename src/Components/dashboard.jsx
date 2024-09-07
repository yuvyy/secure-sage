import "react-circular-progressbar/dist/styles.css";
import TotalPieChart from "./totalPieChart";
import { Button } from "./ui/button";
import { Plus, Repeat } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  var Number_systems;

  //add api route here
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setDataIsLoaded(true);
        // Number_systems = items.systems.length
      });
  }, []);

  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Please wait some time...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-primary text-3xl font-semibold">Dashboard</h2>
      <div className="flex gap-4">
        <div className="bg-accent shadow-md rounded-lg p-5 flex justify-around items-center flex-grow">
          <div className="flex flex-col gap-4">
            <h3 className="text-accent-foreground font-medium text-4xl">
              {items.name}
            </h3>
            <ul className="pl-6 flex flex-col gap-1">
              <li className="text-muted-foreground font-medium">
                Date: {items.date}
              </li>
              <li className="text-muted-foreground font-medium">
                Time: {items.time}
              </li>
              {/* <li className="text-muted-foreground font-medium">Systems: {items.systems.join(",")}</li> */}
            </ul>
          </div>
          <div>
            <TotalPieChart pass={items.pass} fail={items.fail} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-accent rounded-lg h-max p-5 shadow-md flex-grow">
            <h3 className="text-3xl font-semibold">Available Systems</h3>
            <div className="text-9xl text-primary text-center font-semibold">
              {Number_systems}
            </div>
          </div>
          <div className="flex gap-4 self-center flex-grow">
            <Button variant="outline" className="size-38">
              <div className="flex flex-col gap-2">
                <Repeat className="text-primary h-24 w-24" />
                <label>Repeat Test</label>
              </div>
            </Button>
            <Button variant="outline" className="size-38" asChild>
              <Link to="/newTest">
                <div>
                  <Plus className="text-primary h-24 w-24" />
                  <label>New Test</label>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
