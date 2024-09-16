import React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function ProfileDropDown() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full">
            <Avatar>
              <AvatarImage src="./assets/userIcon.jsx" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* <userIcon /> */}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <Link to="/profile">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
          </Link>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem>Settings</DropdownMenuItem> */}
          {/* <DropdownMenuItem>Support</DropdownMenuItem> */}
          {/* <DropdownMenuSeparator /> */}
          <Link to="/">
            <DropdownMenuLabel>Logout</DropdownMenuLabel>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
