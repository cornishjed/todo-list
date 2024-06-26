import { useState } from "react";

import data from "./data.json";
import "./css/App.css";
import Header from "./js/Header";
import Form from "./js/Form";
import ToDo from "./js/ToDo";

function App() {
  const [toDos, setToDos] = useState(data); // Initiate using data from json file

  const addToDo = (toDo) => {
    setToDos([...toDos, toDo]); // makes a copy of toDos, add a new item then stores the new array. Must be in square brackets
  };

  const deleteToDo = (id) => {
    // find toDo item in array and delete
    const toDosCpy = [...toDos];

    toDosCpy.map((item, i) => {
      if (item.id == id) {
        toDosCpy.splice(i, 1);
      }
    })

    setToDos(toDosCpy);
  }

  // creates array of toDo components
  const toDoItems = toDos.map((todo) => {
    return (
      <ToDo key={todo.id} id={todo.id} deleteToDo={deleteToDo} title={todo.title}>
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
