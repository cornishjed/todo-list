import { useState } from "react";

import "../css/ToDo.css";

export default function ToDo({ id, toDos, setToDos, title, children }) {
  const [isComplete, setComplete] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();

    const id = e.target.id.value;

    // find toDo item in array and delete
    const toDosCpy = [...toDos];

    toDosCpy.map((item, i) => {
      if (item.id == id) {
        toDosCpy.splice(i, 1);
      }
    });

    setToDos(toDosCpy);

    return;
  };

  return (
    <div className={isComplete ? "toDo__card complete" : "toDo__card"}>
      <form onSubmit={(e) => handleDelete(e)}>
        <input type="hidden" name="id" value={id} />
        <h1>{title}</h1>
        <p>{children}</p>
        <button>Delete</button>
      </form>
      <button onClick={isComplete ? () => setComplete(false) : () => setComplete(true)}>Mark {isComplete ? "Incomplete" : "Complete"}</button>
    </div>
  );
}