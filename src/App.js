import { useState } from "react";

import data from "./data.json";
import "./css/App.css";

// components
import Header from "./js/Header";
import Form from "./js/Form";
import Grid from "./js/Grid";

let nextId = 4; // each item must have unique key value

function App() {
  const [toDos, setToDos] = useState(data); // Initiate using data from json file

  // keep state altering functions near state then pass as props
  const handleSubmit = (title, description) => {
    const toDo = {
      id: nextId++,
      title: title,
      description: description,
    };

    setToDos([...toDos, toDo]);
  };

  const handleDelete = (id) => {
    const toDosCpy = [...toDos];
    const index = toDosCpy.findIndex((item) => item.id == id);

    toDosCpy.splice(index, 1);
    setToDos(toDosCpy);
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Form submitToDo={handleSubmit} />
        <Grid toDos={toDos} onDeleteToDo={handleDelete} />
      </div>
    </div>
  );
}

export default App;
