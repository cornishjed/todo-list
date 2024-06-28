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
    });

    setToDos(toDosCpy);
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Form addToDo={addToDo} />
        <div className="toDo__grid">
          {toDos.map(({ id, title, description }) => {
            return (
              <ToDo key={id} id={id} deleteToDo={deleteToDo} title={title}>
                {description}
              </ToDo>
            );
          })}
        </div>{" "}
        /*React processes array of components in a block.*/
      </div>
    </div>
  );
}

export default App;
