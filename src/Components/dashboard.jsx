import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
            <li className="text-accent-foreground font-medium">Date: 09/05/2024</li>
            <li className="text-accent-foreground font-medium">Time: 10:25 pm</li>
            <li className="text-accent-foreground font-medium">Systems: pc1,pc2,pc3</li>
          </ul>
          </div>
          <div className="w-36">
            <CircularProgressbar value={60} text={`60%`} />
          </div>
        </div>
        <div className="bg-accent rounded-lg p-5 shadow-md">
          <h3 className="text-3xl font-semibold">Available Systems</h3>
          <div className="text-9xl text-primary text-center">42</div>
        </div>
        </div>
      
    </div>
  );
}
