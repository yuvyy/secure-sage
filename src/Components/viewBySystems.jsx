import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { PopoverContent } from "@radix-ui/react-popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const remediteData = {
  1: { system: "PC 1", User: "Olmo", failedTests: ["Test 1", "Test 2"] },
  2: { system: "PC 2", User: "User 2", failedTests: ["Test 1", "Test 2"] },
  3: { system: "PC 2", User: "User 2", failedTests: ["Test 1", "Test 2"] },
  4: { system: "PC 2", User: "User 2", failedTests: ["Test 1", "Test 2"] },
  5: { system: "PC 2", User: "User 2", failedTests: ["Test 1", "Test 2"] },

  // Add more groups if needed
};

export default function ViewBySystems({ onSelect }) {
  const [open, setOpen] = React.useState(null); // Track open popover by system ID
  const [selectedTests, setSelectedTests] = React.useState(new Map());

  const handleSelect = (systemId, value) => {
    setSelectedTests((prev) => {
      const newSelectedTests = new Map(prev);
      const currentSelection = newSelectedTests.get(systemId) || new Set();
      if (currentSelection.has(value)) {
        currentSelection.delete(value);
      } else {
        currentSelection.add(value);
      }
      newSelectedTests.set(systemId, currentSelection);
      if (onSelect) {
        onSelect(new Map(newSelectedTests).entries()); // Pass updated selections to onSelect
      }
      return newSelectedTests;
    });
  };

  const handleSelectAll = (systemId) => {
    const failedTests = remediteData[systemId]?.failedTests || [];
    setSelectedTests((prev) => {
      const newSelectedTests = new Map(prev);
      newSelectedTests.set(systemId, new Set(failedTests));
      if (onSelect) {
        onSelect(new Map(newSelectedTests).entries()); // Pass updated selections to onSelect
      }
      return newSelectedTests;
    });
  };

  const handleDeselectAll = (systemId) => {
    setSelectedTests((prev) => {
      const newSelectedTests = new Map(prev);
      newSelectedTests.set(systemId, new Set());
      if (onSelect) {
        onSelect(new Map(newSelectedTests).entries()); // Pass updated selections to onSelect
      }
      return newSelectedTests;
    });
  };

  const handleSubmit = () => {
    const result = Object.entries(remediteData).map(
      ([systemId, { system }]) => ({
        systemName: system,
        selectedGroups: Array.from(selectedTests.get(systemId) || []),
      })
    );
    console.log(result); // Or handle the result as needed (e.g., send it to a server or pass it to a parent component)
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Table className="min-w-full">
          <TableHeader className="sticky top-0 z-10">
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead className="w-1/5">System Name</TableHead>
              <TableHead className="w-1/5">User</TableHead>
              <TableHead className="hidden w-1/5 md:table-cell">
                Created at
              </TableHead>
              <TableHead className="w-2/5">Failed Tests</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="max-h-[300px] overflow-auto">
          <Table>
            <TableBody>
              <ScrollArea className="h-[300px]">
                {Object.entries(remediteData).map(
                  ([systemId, { system, User, failedTests }]) => (
                    <TableRow key={systemId}>
                      <TableCell className="hidden w-[100px] sm:table-cell"></TableCell>
                      <TableCell className="w-1/5 font-medium">
                        {system}
                      </TableCell>
                      <TableCell className="w-1/5">{User}</TableCell>
                      <TableCell className="hidden w-1/5 md:table-cell">
                        15th Sep, 3:45 PM
                      </TableCell>
                      <TableCell className="w-2/5">
                        <Popover
                          open={open === systemId}
                          onOpenChange={(isOpen) =>
                            setOpen(isOpen ? systemId : null)
                          }>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={open === systemId}
                              className="w-[500px] justify-between">
                              {selectedTests.get(systemId)?.size > 0
                                ? `${
                                    selectedTests.get(systemId)?.size
                                  } Tests Selected`
                                : "Select Tests"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[500px] p-0">
                            <Command>
                              <CommandInput placeholder="Search Tests" />
                              <CommandList>
                                <CommandEmpty>No tests found.</CommandEmpty>
                                <CommandGroup>
                                  <CommandItem
                                    key="select-all"
                                    onSelect={() => handleSelectAll(systemId)}>
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        (
                                          selectedTests.get(systemId) ||
                                          new Set()
                                        ).size === failedTests.length
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    Select All
                                  </CommandItem>
                                  <CommandItem
                                    key="deselect-all"
                                    onSelect={() =>
                                      handleDeselectAll(systemId)
                                    }>
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        (
                                          selectedTests.get(systemId) ||
                                          new Set()
                                        ).size === 0
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    Deselect All
                                  </CommandItem>
                                  {failedTests.map((test) => (
                                    <CommandItem
                                      key={test}
                                      value={test}
                                      onSelect={() =>
                                        handleSelect(systemId, test)
                                      }>
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          (
                                            selectedTests.get(systemId) ||
                                            new Set()
                                          ).has(test)
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {test}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </ScrollArea>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="mt-4">
        <Button onClick={handleSubmit} variant="secondary">
          Submit
        </Button>
      </div>
    </div>
  );
}
