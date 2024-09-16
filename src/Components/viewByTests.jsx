import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

const remediteData = {
  1: { failedTest: "Password length policy", systems: ["PC 1", "PC 2"] },
  2: { failedTest: "Firewall Policy", systems: ["PC 1", "PC 2"] },
  3: { failedTest: "Firewall Policy", systems: ["PC 1", "PC 2"] },
  4: { failedTest: "Firewall Policy", systems: ["PC 1", "PC 2"] },
  5: { failedTest: "Firewall Policy", systems: ["PC 1", "PC 2"] },

  // Add more tests if needed
};

export default function ViewBySystems({ onSelect }) {
  const [open, setOpen] = React.useState(null);
  const [selectedSystems, setSelectedSystems] = React.useState(new Map());

  const handleSelect = (testId, value) => {
    setSelectedSystems((prev) => {
      const newSelectedSystems = new Map(prev);
      const currentSelection = newSelectedSystems.get(testId) || new Set();
      if (currentSelection.has(value)) {
        currentSelection.delete(value);
      } else {
        currentSelection.add(value);
      }
      newSelectedSystems.set(testId, currentSelection);
      if (onSelect) {
        onSelect(new Map(newSelectedSystems).entries());
      }
      return newSelectedSystems;
    });
  };

  const handleSelectAll = (testId) => {
    const systems = remediteData[testId]?.systems || [];
    setSelectedSystems((prev) => {
      const newSelectedSystems = new Map(prev);
      newSelectedSystems.set(testId, new Set(systems));
      if (onSelect) {
        onSelect(new Map(newSelectedSystems).entries());
      }
      return newSelectedSystems;
    });
  };

  const handleDeselectAll = (testId) => {
    setSelectedSystems((prev) => {
      const newSelectedSystems = new Map(prev);
      newSelectedSystems.set(testId, new Set());
      if (onSelect) {
        onSelect(new Map(newSelectedSystems).entries());
      }
      return newSelectedSystems;
    });
  };

  const handleSubmit = () => {
    const result = Object.entries(remediteData).map(
      ([testId, { failedTest }]) => ({
        testName: failedTest,
        selectedSystems: Array.from(selectedSystems.get(testId) || []),
      })
    );
    console.log(result);
  };

  return (
    <div className="flex flex-col h-[400px]">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className=" px-6 py-3">
                    Test Name
                  </TableHead>
                  <TableHead className=" px-6 py-3">
                    Systems
                  </TableHead>
                </TableRow>
              </TableHeader>
            </Table>
          </div>
          <div className="overflow-auto max-h-[300px]">
            <Table>
              <TableBody>
                {Object.entries(remediteData).map(
                  ([testId, { failedTest, systems }]) => (
                    <TableRow key={testId}>
                      <TableCell className="font-medium whitespace-nowrap px-6 py-4">
                        {failedTest}
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <Popover
                          open={open === testId}
                          onOpenChange={(isOpen) =>
                            setOpen(isOpen ? testId : null)
                          }>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={open === testId}
                              className="w-[300px] justify-between">
                              {selectedSystems.get(testId)?.size > 0
                                ? `${
                                    selectedSystems.get(testId)?.size
                                  } Systems Selected`
                                : "Select Systems"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[300px] p-0">
                            <Command>
                              <CommandInput placeholder="Search Systems" />
                              <CommandList>
                                <CommandEmpty>No systems found.</CommandEmpty>
                                <CommandGroup>
                                  <CommandItem
                                    key="select-all"
                                    onSelect={() => handleSelectAll(testId)}>
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        (
                                          selectedSystems.get(testId) ||
                                          new Set()
                                        ).size === systems.length
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    Select All
                                  </CommandItem>
                                  <CommandItem
                                    key="deselect-all"
                                    onSelect={() => handleDeselectAll(testId)}>
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        (
                                          selectedSystems.get(testId) ||
                                          new Set()
                                        ).size === 0
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    Deselect All
                                  </CommandItem>
                                  {systems.map((system) => (
                                    <CommandItem
                                      key={system}
                                      value={system}
                                      onSelect={() =>
                                        handleSelect(testId, system)
                                      }>
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          (
                                            selectedSystems.get(testId) ||
                                            new Set()
                                          ).has(system)
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {system}
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
              </TableBody>
            </Table>
          </div>
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
