//import $ from "jquery";
import { useState } from "react";

import "../css/ToDo.css";

export default function ToDo({ id, deleteToDo, title, children }) {
  const [isComplete, setComplete] = useState(false);

  const handleDelete = (e, deleteToDo) => {
    e.preventDefault();

    const id = e.target.id.value;

    deleteToDo(id);

    return;
  };

  return (
    <div className={isComplete ? "toDo__card complete" : "toDo__card"}>
      <form onSubmit={(e) => handleDelete(e, deleteToDo)}>
        <input type="hidden" name="id" value={id} />
        <h1>{title}</h1>
        <p>{children}</p>
        <button>Delete</button>
      </form>
      <button onClick={isComplete ? () => setComplete(false) : () => setComplete(true)}>Mark {isComplete ? "Incomplete" : "Complete"}</button>
    </div>
  );
}
