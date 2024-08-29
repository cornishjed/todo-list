import { useState } from "react";
import "../css/Form.css";

let nextId = 4; // each item must have unique key value

export default function Form({ toDos, setToDos }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
     
    const toDo = {
      id: nextId++,
      title: title,
      description: desc
    };

    setToDos([...toDos, toDo]);

    return;
  };

  return (
    <div className="todo__form">
      <h3>Create To-Do</h3>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="desc">Description</label>
      <textarea name="desc" onChange={(e) => setDesc(e.target.value)}></textarea>
      <button onClick={handleSubmit} disabled={!title}>Create</button>
    </div>
  );
}
