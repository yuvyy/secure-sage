import GroupSelector from "@/Components/groupSelector";
import Header from "@/Components/Header";
import SingleSelector from "@/Components/singleSelector";
import TestSelector from "@/Components/testSelector";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import React from "react";
import { Link } from "react-router-dom";

export default function NewTestPage() {

  const [submittedData, setSubmittedData] = React.useState('');

  // Function to handle the data passed from the child
  const handleDataFromChild = (data) => {
    setSubmittedData(data);
    console.log("Data received from child:", data);
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="mx-20 border p-4 shadow-md rounded-lg">
        <div className="flex flex-col gap-5">
          <h1 className="text-primary text-3xl font-semibold">Perform Test</h1>
          <div>
            <label className="text-lg">Test Name</label>
            <Input className="" />
          </div>
          <Tabs defaultValue="single" className="h-40 flex flex-col">
            <div className="flex justify-center">
              <TabsList className=" flex justify-around w-[400px]">
                <TabsTrigger value="single" className="flex-grow">
                  Single
                </TabsTrigger>
                <TabsTrigger value="group" className="flex-grow">
                  Group
                </TabsTrigger>
                <TabsTrigger value="all" className="flex-grow">
                  All
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="flex flex-col justify-center flex-grow">
                
            <TabsContent value="single">
              <SingleSelector />
            </TabsContent>
            <TabsContent value="group">
              <GroupSelector />
            </TabsContent>
            <TabsContent value="all">
              <label className="text-lg">Performing test on <span className="text-primary">42</span> systems</label>
            </TabsContent>
            </div>
          </Tabs>
          <div className="flex gap-2 items-center">
            <TestSelector onSubmit={handleDataFromChild} />
            <p className="text-muted-foreground">No tests selected.</p>
          </div>
          <div className='flex justify-center'>
          <Button className='text-xl' type="submit" asChild>
            <Link to='/result'>Submit</Link>
          </Button>
          </div>
        </div>
      </main>
    </>
  );
}
