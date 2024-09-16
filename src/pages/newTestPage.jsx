import NewTestForm from "@/Components/newTestForm";
import Sidebar from "@/Components/sidebar";
import React from "react";

export default function newTestPage() {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <div className="flex-1 ml-16 p-4">
          <NewTestForm/>
        </div>
      </main>
    </>
  );
}
