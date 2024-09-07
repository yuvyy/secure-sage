import Header from "../components/header";
import Dashboard from "../components/dashboard";
function HomePage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-col gap-8 mx-20">
        <Dashboard />
        
      </main>
    </>
  );
}

export default HomePage;
