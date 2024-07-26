import { useState } from "react";

import "../css/ToDo.css";

export default function ToDo({ id, toDos, setToDos, title, children }) {
  const [isComplete, setComplete] = useState(false);

  const handleDelete = (id) => {
    const toDosCpy = [...toDos];
    const index = toDosCpy.findIndex((item) => item.id == id);

    toDosCpy.splice(index, 1);
    setToDos(toDosCpy);
  };

  return (
    <div className={"toDo__card " + (isComplete && "complete")}>
      <h1>{title}</h1>
      <p>{children}</p>
      <div className="toDo__card-buttons">
        <button onClick={() => handleDelete(id)}>Delete</button>
        <button onClick={() => setComplete(!isComplete)}>Mark {isComplete ? "Incomplete" : "Complete"}</button>
      </div>
    </div>
  );
}
