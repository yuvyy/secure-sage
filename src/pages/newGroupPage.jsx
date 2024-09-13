import NewGroupForm from "@/Components/NewGroupForm";
import  Header  from "@/Components/Header";
export default function NewGroupPage() {
 return (
   <>
     <header>
       <Header />
     </header>
     <main className="flex items-center justify-center p-4">
       <NewGroupForm/>
     </main>
   </>
 );
}
