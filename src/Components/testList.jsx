import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "./ui/separator";

export default function testList({
  category,
  handleItemCheck,
  handleSelectAll,
  checkedItems,
}) {
  return (
    <div className="flex flex-col">
      <div>
        <div className="flex gap-4 items-center">
          <Checkbox
            id={`selectAll-${category.category}`}
            checked={
              checkedItems[category.category]?.size === category.tests.length
            }
            onCheckedChange={() => handleSelectAll(category.category)}
            F
          />
          <p>Select All</p>
        </div>
        <Separator className="my-2" />
      </div>
      <div className="flex flex-col gap-1">
        {category.tests.map((test) => (
          <div key={test} className="flex gap-4 items-center">
            <Checkbox
              id={`${category.category}-${test}`}
              checked={checkedItems[category.category]?.has(test)}
              onCheckedChange={() => handleItemCheck(category.category, test)}
            />
            <label>{test}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
