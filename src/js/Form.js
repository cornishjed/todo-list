import { useState } from "react";

import "../css/Form.css";

export default function Form({ onSubmitToDo }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="todo__form">
      <h3>Create To-Do</h3>
      <label htmlFor="title">Title</label>
      <input type="text" value={title} onChange={handleTitleChange} />
      <label htmlFor="desc">Description</label>
      <textarea value={description} onChange={handleDescriptionChange} />
      <button onClick={() => onSubmitToDo(title, description)}>Create</button>
    </div>
  );
}
