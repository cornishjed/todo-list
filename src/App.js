import "./css/App.css";
import Header from "./js/Header";
import Form from "./js/Form";
import ToDo from "./js/ToDo";
import { useState } from "react";
import data from "./data.json";

function App() {
  const [toDos, setToDos] = useState(data); // Initiate using data from json file

  const addToDo = (toDo) => {
    setToDos([...toDos, toDo]); // makes a copy of toDos, add a new item then stores the new array. Must be in square brackets
  };

  const deleteToDo = (toDo) => {
    // find toDo item in array and delete
  }

  // creates array of toDo components
  const toDoItems = toDos.map((todo) => {
    return (
      <ToDo key={todo.id} title={todo.title}>
        {todo.description}
      </ToDo>
    );
  });

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Form addToDo={addToDo} />
        <div className="toDo__grid">{toDoItems}</div> /*React processes array of components in a block.*/
      </div>
    </div>
  );
}

export default App;
