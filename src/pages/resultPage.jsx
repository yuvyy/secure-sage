import CategoricalBarChart from "@/Components/categoricalBarChart";
import Header from "@/Components/Header";
import TotalPieChart from "@/Components/totalPieChart";
import { Button } from "@/Components/ui/button";

export default function ResultPage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="mx-20">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-12 grid-rows-20 gap-3">
              <div className="center flex flex-col gap-4 border rounded-md shadow-md p-4 h-max col-span-4 row-span-2">
                <h3 className="text-accent-foreground font-medium text-3xl">
                  This is a big test
                </h3>
                {/* <ul className="pl-6 flex flex-col gap-1">
                  <li className="text-muted-foreground font-medium">
                    Date: 09/05/2024
                  </li>
                  <li className="text-muted-foreground font-medium">
                    Time: 10:25 pm
                  </li>
                  <li className="text-muted-foreground font-medium">
                    Systems: pc1,pc2,pc3
                  </li>
                </ul> */}
              </div>
            <div className="col-span-8 row-span-8 shadow-md">
              <CategoricalBarChart />
            </div>
            <div className="col-span-4 row-span-3 h-max shadow-md">
              <TotalPieChart />
            </div>
            <div className="flex gap-2 col-span-4">
              <Button variant='outline' className='text-lg py-10'>Download Report</Button>
              <Button className='text-lg py-10'>Remediate Issues</Button>
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
}
