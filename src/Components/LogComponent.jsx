"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
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
import { Button } from "./ui/button";

export default function LogComponent() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Remediation Logs</CardTitle>
        <CardDescription>Some Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Test Name</TableHead>
              <TableHead className="hidden sm:table-cell">Number of Systems</TableHead>
              <TableHead className="hidden md:table-cell">Result</TableHead>
              <TableHead className="">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-medium">Sample Test 1</div>
                {/* <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div> */}
              </TableCell>
              <TableCell className="hidden sm:table-cell">10</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-sm" variant="secondary">
                 20%
                </Badge>
              </TableCell>
              {/* <TableCell className="hidden md:table-cell">Retest</TableCell> */}
              <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
              <TableCell className="text-right">
                <Button variant="secondary">View Details</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Olivia Smith</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  olivia@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">15</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-sm" variant="outline">
                 90%
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
              <TableCell className="text-right">
                <Button variant="secondary">View Details</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
