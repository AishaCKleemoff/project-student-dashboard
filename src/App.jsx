import { useState } from "react";
import data from "./data/data.json";
import StudentList from "./Components/StudentList";

import NavBar from "./Components/NavBar";
function App() {
  console.log(data);
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <MenuCohortList data={data} setCohortName={setCohortName} />
        <StudentList data={data} students={students} cohortName={cohortName} />
      </main>
    </div>
  );
}

export default App;
