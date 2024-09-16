import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/Components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
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
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/Components/ui/command";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ViewBySystems from "./viewBySystems";
import ViewByTests from "./viewByTests";

export default function Remediate() {
  // const pending = {
  //   1: { Name: "pc1", failed: ["test1", "test2"] },
  //   2: { Name: "pc2", failed: ["test1", "test2"] },
  // };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Remediation</CardTitle>
        <CardDescription>View And Remediate Systems </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-10">
            <TabsTrigger value="login">View By Systems</TabsTrigger>
            <TabsTrigger value="register">View By Tests</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <ViewBySystems />
          </TabsContent>

          <TabsContent value="register">
            <ViewByTests />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> <strong>of</strong> 10 Tests
        </div>
        {/* <Button className="mt-4 ">Generate Remediation Request</Button> */}
      </CardFooter>
    </Card>
  );
}
