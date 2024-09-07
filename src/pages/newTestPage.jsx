import GroupSelector from "@/Components/groupSelector";
import Header from "@/Components/Header";
import SingleSelector from "@/Components/singleSelector";
import TestSelector from "@/Components/testSelector";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";

export default function NewTestPage() {
  return (
    <>
      <header className="mb-4">
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
            <TestSelector />
            <p className="text-muted-foreground">No tests selected.</p>
          </div>
          <div className='flex justify-center'>
          <Button className='text-xl'>Submit</Button>
          </div>
        </div>
      </main>
    </>
  );
}
