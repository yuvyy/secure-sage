import React from "react";

export default function Header() {
  return (
    <div className="p-2 shadow-lg flex justify-between items-center">
      <div className="bg-blue-800 rounded-lg p-2 pb-3">
        <h2 className=" font-semibold text-4xl">SecureSage</h2>
      </div>
      <nav>
        <ul className="flex gap-10">
          <li className="text-blue-900 text-xl">Home</li>
          <li className="text-blue-900 text-xl">Reports</li>
          <li className="text-blue-900 text-xl">About Us</li>
        </ul>
      </nav>
      <div></div>
      {/* <h2 className="text-blue-900 text-2xl font-medium">SIH</h2> */}
    </div>
  );
}
