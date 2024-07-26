import { useState } from "react";

import data from "./data.json";
import "./css/App.css";

// components
import Header from "./js/Header";
import Form from "./js/Form";
import Grid from "./js/Grid";

function App() {
  const [toDos, setToDos] = useState(data); // Initiate using data from json file

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Form toDos={toDos} setToDos={setToDos} />
        <Grid toDos={toDos} setToDos={setToDos} />
      </div>
    </div>
  );
}

export default App;
