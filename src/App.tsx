import Header from "./components/Header";
import Work from "./components/Work";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen pt-10 flex justify-center">
      <div className="w-full lg:w-[40%] p-6">
        <main className="text-gray-900 space-y-12">
          <Header />
          <Work />
          <Projects />
        </main>
      </div>
    </div>
  );
}

export default App;
