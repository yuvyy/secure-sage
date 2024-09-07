import "react-circular-progressbar/dist/styles.css";
import TotalPieChart from "./totalPieChart";
import { Button } from "./ui/button";
import { Plus, Repeat } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-primary text-3xl font-semibold">Dashboard</h2>
      <div className="flex gap-4">
        <div className="bg-accent shadow-md rounded-lg p-5 flex justify-around items-center flex-grow">
          <div className="flex flex-col gap-4">
            <h3 className="text-accent-foreground font-medium text-4xl">
              This is a big test
            </h3>
            <ul className="pl-6 flex flex-col gap-1">
              <li className="text-muted-foreground font-medium">
                Date: 09/05/2024
              </li>
              <li className="text-muted-foreground font-medium">
                Time: 10:25 pm
              </li>
              <li className="text-muted-foreground font-medium">
                Systems: pc1,pc2,pc3
              </li>
            </ul>
          </div>
          <div>
            <TotalPieChart pass={100} fail={200} />
             {/* data tp be fetched from db */}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-accent rounded-lg h-max p-5 shadow-md flex-grow">
            <h3 className="text-3xl font-semibold">Available Systems</h3>
            <div className="text-9xl text-primary text-center font-semibold">
              69
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
