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

export default function Header() {
  return (
    <div className="p-2 shadow-lg flex justify-between items-center mb-4">
      <div className="border-primary rounded-lg p-2 pb-3">
        <h2 className="font-semibold text-4xl text-primary">SecureSage</h2>
      </div>
      <nav>
        <ul className="flex gap-10">
          <Button variant="link" className="text-lg text-blue-500" asChild>
            <Link to="/" className="text-lg">
              Home
            </Link>
          </Button>
          <Button variant="link" className="text-lg text-blue-500" asChild>
            <Link to="/reports" className="text-lg">
              Reports
            </Link>
          </Button>
          <Button variant="link" className="text-lg text-blue-500" asChild>
            <Link to="/aboutUs" className="text-lg">
              About Us
            </Link>
          </Button>

          {/* Navigation Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg text-blue-500">
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex justify-around py-2">
                    <h4 className="font-bold">Sytems Congfiguration</h4>
                    <h4 className="font-bold">Tests Congfiguration</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-6 w-96">
                    <ul className="flex flex-col gap-2">
                      <li>
                        <NavigationMenuLink className="hover:text-gray-500">
                          <Link to="/newSystem"  className="block px-4 py-2">
                            Add New System
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink className="hover:text-gray-500">
                          <Link to="/newGroup" className="block px-4 py-2">
                            Add New Group
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink className="hover:text-gray-500">
                          <Link to="/editGroup" className="block px-4 py-2">
                            Edit Group
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                      <li>
                        <NavigationMenuLink className="hover:text-gray-500">
                          <Link to="/customCategory" className="block px-4 py-1">
                            Create Custom category
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink className="hover:text-gray-500">
                          <Link to="/editCategory" className="block px-4 py-1">
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
      <div className="border-primary rounded-lg p-2 pb-3">
        <h2 className="font-semibold text-4xl text-card">SecureSage</h2>
      </div>
    </div>
  );
}
