import { useState } from "react";

import "../css/Form.css";

let nextId = 4; // each item must have unique key value

export default function Form({ toDos, setToDos }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    const toDo = {
      id: nextId++,
      title: title,
      description: description,
    };

    setToDos([...toDos, toDo]);
  };

  return (
    <div className="todo__form">
      <h3>Create To-Do</h3>
      <label htmlFor="title">Title</label>
      <input type="text" value={title} onChange={handleTitleChange} />
      <label htmlFor="desc">Description</label>
      <textarea value={description} onChange={handleDescriptionChange} />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
}
