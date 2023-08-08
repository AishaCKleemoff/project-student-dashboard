import data from "./data/data.json";
import NavBar from "./Components/NavBar";
function App() {
  console.log(data);
  return (
    <div>
      <header>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
