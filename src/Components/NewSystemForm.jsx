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
  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  const clear = () => {
    reset(); // Clears the form
  };

  return (
    <>
      <Card className="w-[400px] shadow-zinc-800 dark:shadow-slate-50 p-4">
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-5">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Name of your System"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">Name is required.</p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="macaddress">Mac Address of system</Label>
                <Input
                  id="macaddress"
                  placeholder="Enter system MAC Address"
                  {...register("macaddress", { required: true })}
                />
                {errors.macaddress && (
                  <p className="text-red-500 text-sm">
                    MAC Address is required.
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="ipaddress">
                  IP Address of system (optional)
                </Label>
                <Input
                  id="ipaddress"
                  placeholder="Enter system IP Address"
                  {...register("ipaddress")}
                />
              </div>

              {/* Uncomment and add validation for these fields if needed */}
              {/* 
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">System Username</Label>
              <Input
                id="username"
                placeholder="Enter system Username"
                {...register("username")}
              />
              required
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="pass">System Password</Label>
              <Input
                type="password"
                id="pass"
                placeholder="Enter system Password"
                {...register("password")}
              />
              required
            </div>
            */}

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Os">OS</Label>
                <Controller
                  name="os"
                  control={control}
                  defaultValue="" // Set default value
                  rules={{ required: "Operating System is required." }} // Validation rule
                  render={({ field }) => (
                    <>
                      <Select
                        {...field}
                        onValueChange={(value) => field.onChange(value)}>
                        <SelectTrigger id="Os">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="windows">Windows</SelectItem>
                          <SelectItem value="linux">
                            Linux based Distro
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.os && (
                        <p className="text-red-500 text-sm">
                          {errors.os.message}
                        </p>
                      )}
                    </>
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
    </>
  );
}
