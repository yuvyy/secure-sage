import { Button } from "@/Components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/Components/ui/command";
import { Popover, PopoverTrigger } from "@/Components/ui/popover";
import { cn } from "@/lib/utils";
import { PopoverContent } from "@radix-ui/react-popover";
import { Check, ChevronsUpDown } from "lucide-react";
import React from "react";

const groups = [
  { value: "group1", label: "Group 1" },
  { value: "group2", label: "Group 2" },
];

export default function GroupSelector({ onSelect }) {
  const [open, setOpen] = React.useState(false);
  const [selectedGroups, setSelectedGroups] = React.useState(new Set());

  const handleSelect = (value) => {
    setSelectedGroups((prev) => {
      const newSelectedGroups = new Set(prev);
      if (newSelectedGroups.has(value)) {
        newSelectedGroups.delete(value);
      } else {
        newSelectedGroups.add(value);
      }
      onSelect(Array.from(newSelectedGroups)); // Pass the selected groups to the parent
      return newSelectedGroups;
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="text-lg">Group Name</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {selectedGroups.size > 0
              ? `${selectedGroups.size} Groups Selected`
              : "Select Groups"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search Groups" />
            <CommandList>
              <CommandEmpty>No group found.</CommandEmpty>
              <CommandGroup>
                {groups.map((group) => (
                  <CommandItem
                    key={group.value}
                    value={group.value}
                    onSelect={() => handleSelect(group.value)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedGroups.has(group.value) ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {group.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
