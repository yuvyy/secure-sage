import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";


export default function TestTable({tests}) {
  return (
    <Table className=''>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center"><Checkbox/></TableHead>
          <TableHead className="text-center">Tests</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {tests.map((test) => (
        <TableRow key={test}>
          <TableCell className="font-medium text-center"><Checkbox/></TableCell>
          <TableCell>{test}</TableCell>
        </TableRow>
      ))}
      </TableBody>
    </Table>
  );
}
