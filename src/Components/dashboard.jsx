import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      {/* <h2 className="text-blue-800 text-3xl font-semibold mx-12">Recent Audit</h2> */}
      <div className="mx-16">
        <div className="bg-blue-100 shadow-lg rounded-lg p-5 flex justify-around items-center">
          <h3 className="text-sky-600 font-medium text-4xl">
            This is a big test
          </h3>
          <div className="w-36">
            <CircularProgressbar value={60} text={`60%`} />;
          </div>
          <ul className="pl-6 flex flex-col gap-1">
            <li className="text-sky-800 font-medium">Date: 09/05/2024</li>
            <li className="text-sky-800 font-medium">Time: 10:25 pm</li>
            <li className="text-sky-800 font-medium">Systems: pc1,pc2,pc3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
