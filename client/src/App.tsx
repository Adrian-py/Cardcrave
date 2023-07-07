import Navbar from "./components/Navbar";
import CollectionsList from "./components/CollectionsList";

function App() {
  return (
    <section className="w-full h-[100vh] bg-surface">
      <Navbar />
      <main className="text-on-surface px-[4.167vw]">
        <div className="mb-[1.875rem]">
          <h2 className="mb-[0.5rem] font-bold text-[1.75rem]">
            Flashcards Collections
          </h2>
          <p className="text-[1.25rem] text-on-surface-1">
            A list of all flashcard collections you have made.
          </p>
        </div>

        <CollectionsList />
      </main>
    </section>
  );
}

export default App;
