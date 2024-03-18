import { useState } from "react";
import "./App.css";
import Filter from "./Filter";

function App() {
  const [filterBtn, setFilterBtn] = useState("Filters");
  const [newName, setNewName] = useState("");
  const content = [
    {
      name: "Date of registration",
      type: "registation",
    },
    {
      name: "Vender score",
      type: "vender_score",
    },
    {
      name: "Rating",
      type: "rating",
    },
    {
      name: "Status",
      type: "status",
    },
    {
      name: "Type of business",
      type: "business",
    },
    {
      name: "Location",
      type: "location",
    },
  ];

  return (
    <div className="App">
      <h1>Online Task & Interview</h1>
      <Filter content={content} filterBtn={filterBtn} />

      <br />
      <br />
      <br />
      <h3>Change Filter Button Name</h3>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={() => setFilterBtn(newName)}>Change Button Name</button>
    </div>
  );
}

export default App;
