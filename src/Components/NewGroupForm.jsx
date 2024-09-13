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

export default function NewSystemForm() {
  const { control, handleSubmit, reset, register } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  const clear = () => {
    reset(); // Clears the form
  };

  return (
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle>Create new Group</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name"> Group Name</Label>
              <Input
                id="name"
                placeholder="Name for group"
                {...register("name")}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Os">Os</Label>
              <Controller
                name="os"
                control={control}
                defaultValue="" // Make sure to set a default value
                render={({ field }) => (
                  <Select
                    {...field}
                    onValueChange={(value) => field.onChange(value)}>
                    <SelectTrigger id="Os">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="windows">Windows</SelectItem>
                      <SelectItem value="linux">Linux based Distro</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
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
