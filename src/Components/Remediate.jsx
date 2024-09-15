import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/Components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/Components/ui/command";

export default function Remediate() {
  const [openPopover, setOpenPopover] = useState(null);
  const [selectedItems, setSelectedItems] = useState({});

  const pending = {
    1: { Name: "pc1", failed: ["test1", "test2"] },
    2: { Name: "pc2", failed: ["test1", "test2"] },
  };

  // Toggle selection of items
  const handleToggleItem = (pcKey, item) => {
    setSelectedItems((prev) => {
      const newSelected = { ...prev };
      if (!newSelected[pcKey]) newSelected[pcKey] = new Set();
      if (newSelected[pcKey].has(item)) {
        newSelected[pcKey].delete(item);
      } else {
        newSelected[pcKey].add(item);
      }
      return newSelected;
    });
  };

  // Generate remediationRequest object
  const generateRemediationRequest = () => {
    const request = Object.entries(pending).map(([key, { Name }]) => ({
      pcName: Name,
      selectedTests: Array.from(selectedItems[key] || []),
    }));
    console.log("Remediation Request:", request);
    return request;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription>
          Manage your products and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>System Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>User</TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Object.entries(pending).map(([key, { Name, failed }]) => (
              <TableRow key={key}>
                <TableCell className="hidden sm:table-cell"></TableCell>
                <TableCell className="font-medium">{Name}</TableCell>
                <TableCell>
                  <Badge variant="outline">Draft</Badge>
                </TableCell>
                <TableCell>$499.99</TableCell>
                <TableCell className="hidden md:table-cell">
                  2023-07-12 10:42 AM
                </TableCell>
                <TableCell>
                  <Popover
                    open={openPopover === key}
                    onOpenChange={(isOpen) =>
                      setOpenPopover(isOpen ? key : null)
                    }>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openPopover === key}
                        className="w-[200px] justify-between">
                        {selectedItems[key] && selectedItems[key].size > 0
                          ? `${selectedItems[key].size} Items Selected`
                          : "Select Items"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search Tests" />
                        <CommandList>
                          <CommandEmpty>No group found.</CommandEmpty>
                          <CommandGroup>
                            {failed.map((item, index) => (
                              <CommandItem
                                key={index}
                                value={item}
                                onSelect={() => handleToggleItem(key, item)}
                                className="flex items-center cursor-pointer p-2 rounded hover:bg-gray-100">
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedItems[key] &&
                                      selectedItems[key].has(item)
                                      ? "text-green-500 opacity-100"
                                      : "text-gray-400 opacity-50"
                                  )}
                                />
                                {item}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of{" "}
          <strong>{Object.keys(pending).length}</strong> products
        </div>
        <Button onClick={generateRemediationRequest} className="mt-4">
          Generate Remediation Request
        </Button>
      </CardFooter>
    </Card>
  );
}
