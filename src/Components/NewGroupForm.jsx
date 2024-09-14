import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

// Example PC list
const pcs = [
  { value: "pc1", label: "PC 1" },
  { value: "pc2", label: "PC 2" },
  { value: "pc3", label: "PC 3" },
  { value: "pc4", label: "PC 4" },
];

export default function NewGroupForm() {
  const { control, handleSubmit, reset, register, setValue, getValues } =
    useForm();
  const [open, setOpen] = React.useState(false);
  const [selectedPCs, setSelectedPCs] = React.useState(new Set());

  const onSubmit = (data) => {
    // Combine selected PCs with form data
    const formData = {
      ...data,
      pcs: Array.from(selectedPCs), // Convert Set to Array
    };
    console.log("Form submitted with data:", formData);
  };

  const clear = () => {
    reset(); // Clears the form
    setSelectedPCs(new Set()); // Clear selected PCs
  };

  const handleSelect = (value) => {
    setSelectedPCs((prev) => {
      const updated = new Set(prev);
      if (updated.has(value)) {
        updated.delete(value);
      } else {
        updated.add(value);
      }
      return updated;
    });
  };

  return (
    <Card className="w-[400px]  shadow-zinc-800 dark:shadow-slate-50">
      <CardHeader>
        <CardTitle>Create new Group</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Group Name</Label>
              <Input
                id="name"
                placeholder="Name for group"
                {...register("name")}
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-lg">Select PCs</label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between">
                    {selectedPCs.size > 0
                      ? `${selectedPCs.size} PCs Selected`
                      : "Select PCs"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search PCs" />
                    <CommandList>
                      <CommandEmpty>No PC found.</CommandEmpty>
                      <CommandGroup>
                        {pcs.map((pc) => (
                          <CommandItem
                            key={pc.value}
                            value={pc.value}
                            onSelect={() => handleSelect(pc.value)}>
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedPCs.has(pc.value)
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {pc.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <CardFooter className="flex justify-between mt-4">
            <Button type="button" variant="outline" onClick={clear}>
              Clear
            </Button>
            <Button type="submit">Add</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
