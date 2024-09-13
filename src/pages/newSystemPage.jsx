import Header from "../Components/Header";
import NewSystemForm from "@/Components/NewSystemForm";

export default function NewSystemPage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex items-center justify-center p-4">
        <NewSystemForm />
      </main>
    </>
  );
}
