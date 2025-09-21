import Entry from "./Components/Entry";
import Header from "./Components/Header";
import data from "./data";

function App() {
  const entryElement = data.map((entry) => {
    return <Entry key={entry.id} entry={entry} />;
  });
  return (
    <main className="journalbody">
      <Header />
      <main className="container">{entryElement}</main>
    </main>
  );
}

export default App;
