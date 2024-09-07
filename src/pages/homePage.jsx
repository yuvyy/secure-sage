import Header from "../components/header";
import Dashboard from "../components/dashboard";
import { Button } from "@/Components/ui/button";
import { Plus, Repeat } from "lucide-react";
function HomePage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="p-4 flex flex-col gap-8 mx-16">
        <Dashboard />
        <div className="flex gap-8 self-center">
          <Button variant="outline" className="size-38">
            <div className="flex flex-col">
              <Repeat className="text-primary h-24 w-24" />
              <label>Repeat Test</label>
            </div>
          </Button>
          <Button variant="outline" className="size-38">
            <div>
              <Plus className="text-primary h-24 w-24" />
              <label>New Test</label>
            </div>
          </Button>
        </div>
      </main>
    </>
  );
}

export default HomePage;
