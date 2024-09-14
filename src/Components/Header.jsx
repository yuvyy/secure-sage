import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ThemeToggle from "./themeToggle";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col">
      {/* Sidebar Brand */}
      <div className="p-4 border-b dark:border-gray-700">
        <h2 className="font-semibold text-3xl text-primary">SecureSage</h2>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="flex flex-col gap-4 p-4">
          <Button variant="link" className="text-lg w-full" asChild>
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              Home
            </Link>
          </Button>
          <Button variant="link" className="text-lg w-full" asChild>
            <Link
              to="/reports"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              Reports
            </Link>
          </Button>
          <Button variant="link" className="text-lg w-full" asChild>
            <Link
              to="/aboutUs"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              About Us
            </Link>
          </Button>

          {/* Navigation Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg w-full">
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 rounded-lg shadow-lg dark:shadow-lg">
                  <div className="flex flex-col gap-4 py-2">
                    <h4 className="font-bold dark:text-white">
                      Systems Configuration
                    </h4>
                    <h4 className="font-bold dark:text-white">
                      Tests Configuration
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 gap-6 w-full">
                    <ul className="flex flex-col gap-2">
                      <li>
                        <NavigationMenuLink className="hover:text-gray-500 dark:hover:text-gray-300">
                          <Link to="/newSystem" className="block px-4 py-2">
                            Add New System
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink className="hover:text-gray-500 dark:hover:text-gray-300">
                          <Link to="/newGroup" className="block px-4 py-2">
                            Add New Group
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink className="hover:text-gray-500 dark:hover:text-gray-300">
                          <Link to="/editGroup" className="block px-4 py-2">
                            Edit Group
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                      <li>
                        <NavigationMenuLink className="hover:text-gray-500 dark:hover:text-gray-300">
                          <Link
                            to="/customCategory"
                            className="block px-4 py-2">
                            Create Custom Category
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink className="hover:text-gray-500 dark:hover:text-gray-300">
                          <Link to="/editCategory" className="block px-4 py-2">
                            Edit Category
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ul>
      </nav>

      {/* Theme Toggle */}
      <div className="p-4 border-t dark:border-gray-700">
        <ThemeToggle />
      </div>
    </div>
  );
}
