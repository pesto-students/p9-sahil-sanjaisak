import logo from "./logo.svg";
import "./App.css";
import ItemsList from "./item-list/items-list";
import AddItem from "./add-item/add-item";
import { useState } from "react";

function App() {
  const items = [
    { content: "this is a sample items", name: "item 1", notCompleted: true },
    { content: "this is a sample items", name: "items 2", notCompleted: true },
    { content: "this is a sample items", name: "items 3", notCompleted: true },
    { content: "this is a sample items", name: "items 4", notCompleted: true },
  ];
  const [list, setLists] = useState(items);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="appTitle">TO Do App</h1>
        <AddItem setLists={setLists} />
        <ItemsList setLists={setLists} list={list} />
      </header>
    </div>
  );
}

export default App;
