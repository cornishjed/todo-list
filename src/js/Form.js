import { useState } from "react";
import "../css/Form.css";

export default function Form({ submitToDo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div className="todo__form">
      <h3>Create To-Do</h3>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="desc">Description</label>
      <textarea
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <button onClick={() => submitToDo(title, desc)} disabled={!title}>
        Create
      </button>
    </div>
  );
}
