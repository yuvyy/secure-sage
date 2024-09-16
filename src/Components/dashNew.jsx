import React from "react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Pencil } from "lucide-react";
import NewSystemForm from "./NewSystemForm";
import NewGroupForm from "./NewGroupForm";
import EditGroupForm from "./EditGroupForm";
import NewCategoryForm from "./NewCategoryForm";
import EditCategoryForm from "./EditCategoryForm";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function DashNew() {
  return (
    <>
      {/* Tabs for System and Test Configuration */}
      <Tabs defaultValue="system" className="w-[350px] ml-4 p-6">
        <TabsList className="max-w-fit">
          <TabsTrigger value="system">System Configuration</TabsTrigger>
          <TabsTrigger value="test">Test Configuration</TabsTrigger>
        </TabsList>

        {/* System Configuration Tab */}
        <TabsContent value="system">
          <Table>
            <TableCaption>Manage your systems</TableCaption>
            <TableBody>
              {/* Add New Systems Row */}
              <TableRow>
                <TableCell className="font-bold text-lg">
                  Add New Systems
                </TableCell>
                <TableCell className="text-right">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button className="text-sm py-1 px-3" variant="secondary">
                        <Plus />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="w-max">
                      <AlertDialogHeader>
                        <AlertDialogTitle>New System Form</AlertDialogTitle>
                        <AlertDialogDescription>
                          <NewSystemForm />
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>

              {/* Add New Groups Row */}
              <TableRow>
                <TableCell className="font-bold text-lg">
                  Add New Groups
                </TableCell>
                <TableCell className="text-right">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button className="text-sm py-1 px-3" variant="secondary">
                        <Plus />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="w-max">
                      <AlertDialogHeader>
                        <AlertDialogTitle>New Group Form</AlertDialogTitle>
                        <AlertDialogDescription>
                          <NewGroupForm />
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>

              {/* Edit Groups Row */}
              <TableRow>
                <TableCell className="font-bold text-lg">Edit Groups</TableCell>
                <TableCell className="text-right">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button className="text-sm py-1 px-3" variant="secondary">
                        <Pencil />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="w-max">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Edit Group Form</AlertDialogTitle>
                        <AlertDialogDescription>
                          <EditGroupForm />
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>

        {/* Test Configuration Tab */}
        <TabsContent value="test">
          <Table>
            <TableCaption>Manage your tests</TableCaption>
            <TableBody>
              {/* Add New Category Row */}
              <TableRow>
                <TableCell className="font-bold text-lg">
                  Add New Category
                </TableCell>
                <TableCell className="text-right">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button className="text-sm py-1 px-3" variant="secondary">
                        <Plus />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="w-max">
                      <AlertDialogHeader>
                        <AlertDialogTitle>New Category Form</AlertDialogTitle>
                        <AlertDialogDescription>
                          <NewCategoryForm />
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>

              {/* Edit Category Row */}
              <TableRow>
                <TableCell className="font-bold text-lg">
                  Edit Category
                </TableCell>
                <TableCell className="text-right">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button className="text-sm py-1 px-3" variant="secondary">
                        <Pencil />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="w-max">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Edit Category Form</AlertDialogTitle>
                        <AlertDialogDescription>
                          <EditCategoryForm />
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </>
  );
}
