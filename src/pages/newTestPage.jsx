import GroupSelector from "@/Components/groupSelector";
import Header from "@/Components/Header";
import SingleSelector from "@/Components/singleSelector";
import TestSelector from "@/Components/testSelector";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewTestPage() {
  // Form and test data state
  const [testName, setTestName] = React.useState("");
  const [submittedData, setSubmittedData] = React.useState({});
  const [selectedSystem, setSelectedSystem] = React.useState([]);
  const [selectedGroups, setSelectedGroups] = React.useState([]);
  const [activeTab, setActiveTab] = React.useState("single");

  const navigate = useNavigate();

  // List of all PCs
  const allPcs = ["pc1", "pc2"];

  // Function to get the number of tests selected
  const getNumberOfSelectedTests = () => {
    return Object.values(submittedData).reduce((total, selectedTests) => {
      return total + selectedTests.size;
    }, 0);
  };

  // Function to handle data from child component
  const handleDataFromChild = (data) => {
    setSubmittedData(data);
    console.log("Data received from child:", data);
  };

  // Function to handle system selection
  const handleSystemSelect = (systems) => {
    setSelectedSystem(systems);
  };

  // Function to handle group selection
  const handleGroupSelect = (groups) => {
    setSelectedGroups(groups);
  };

  // Function to handle form input changes
  const handleInputChange = (event) => {
    setTestName(event.target.value);
  };

  // Function to handle tab change
  const handleTabChange = (value) => {
    setActiveTab(value);
    if (value === "all") {
      setSelectedSystem(allPcs);
      setSelectedGroups([]);
    } else {
      setSelectedSystem([]);
    }
  };

  // Function to handle form submission
  const handleSubmit = () => {
    const formData = {
      testName,
      selectedTests: getNumberOfSelectedTests(),
      testDetails: submittedData,
      selectedSystem,
      selectedGroups,
    };
    console.log("Form Data Submitted:", formData);
    // Navigate to result page or any other action
    navigate("/result", { state: formData });
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
            <Input value={testName} onChange={handleInputChange} className="" />
          </div>
          <Tabs
            defaultValue="single"
            className="h-40 flex flex-col"
            onValueChange={handleTabChange}>
            <div className="flex justify-center">
              <TabsList className="flex justify-around w-[400px]">
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
                <SingleSelector onSelect={handleSystemSelect} />
              </TabsContent>
              <TabsContent value="group">
                <GroupSelector onSelect={handleGroupSelect} />
              </TabsContent>
              <TabsContent value="all">
                <label className="text-lg">
                  Performing test on{" "}
                  <span className="text-primary">{allPcs.length}</span> systems
                </label>
              </TabsContent>
            </div>
          </Tabs>
          <div className="flex gap-2 items-center">
            <TestSelector onSubmit={handleDataFromChild} />
            <p className="text-muted-foreground">
              {getNumberOfSelectedTests()} tests selected.
            </p>
          </div>
          <div className="flex justify-center">
            <Button className="text-xl" onClick={handleSubmit} type="button">
              Submit
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
