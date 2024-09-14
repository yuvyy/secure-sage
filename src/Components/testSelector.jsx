import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import TestList from "./testList";
import React from "react";
import data from "../lib/data";

export default function TestSelector({ onSubmit }) {
  const [checkedItems, setCheckedItems] = React.useState({});
  const [dialogOpen, setDialogOpen] = React.useState(false);

  React.useEffect(() => {
    const initialCheckedItems = {};
    data.forEach((category) => {
      initialCheckedItems[category.category] = new Set();
    });
    setCheckedItems(initialCheckedItems);
  }, []);

  const handleSelectAll = (category) => {
    setCheckedItems((prev) => {
      const newCheckedItems = { ...prev };
      const categoryTests =
        data.find((c) => c.category === category)?.tests || [];
      if (newCheckedItems[category].size === categoryTests.length) {
        newCheckedItems[category].clear();
      } else {
        newCheckedItems[category] = new Set(categoryTests);
      }
      return newCheckedItems;
    });
  };

  const handleItemCheck = (category, item) => {
    setCheckedItems((prev) => {
      const newCheckedItems = { ...prev };
      if (newCheckedItems[category].has(item)) {
        newCheckedItems[category].delete(item);
      } else {
        newCheckedItems[category].add(item);
      }
      return newCheckedItems;
    });
  };

  const handleSubmit = () => {
    onSubmit(checkedItems);
    setDialogOpen(false); // Hide the dialog when selecting tests
  };

  return (
    <>
      <Button variant="outline" onClick={() => setDialogOpen(true)}>
        Select Tests
      </Button>
      {dialogOpen && (
        <Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
          <DialogTrigger asChild>
            <Button variant="outline" onClick={() => setDialogOpen(true)}>
              Select Tests
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl">
            <>
              <DialogHeader>
                <DialogTitle>Tests</DialogTitle>
                <DialogDescription>
                  Select tests to be performed.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Tabs defaultValue={data[0].category} className="flex gap-2">
                  <TabsList className="flex flex-col w-min gap-2 py-4 justify-start items-stretch h-auto">
                    {data.map((cat) => (
                      <TabsTrigger
                        key={cat.category}
                        value={cat.category}
                        className="flex justify-start p-2">
                        {cat.category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  <ScrollArea className="h-[350px] w-[700px]">
                    {data.map((cat) => (
                      <TabsContent key={cat.category} value={cat.category}>
                        <TestList
                          category={cat}
                          handleItemCheck={handleItemCheck}
                          handleSelectAll={handleSelectAll}
                          checkedItems={checkedItems}
                          className=""
                        />
                      </TabsContent>
                    ))}
                  </ScrollArea>
                </Tabs>
              </div>
              <DialogFooter>
                <Button onClick={handleSubmit}>Select</Button>
              </DialogFooter>
            </>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
