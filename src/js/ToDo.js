import { useState } from "react";

import "../css/ToDo.css";

export default function ToDo({ id, onDeleteToDo, title, children }) {
  const [isComplete, setComplete] = useState(false);

  return (
    <div className={"toDo__card " + (isComplete && "complete")}>
      <h1>{title}</h1>
      <p>{children}</p>
      <div className="toDo__card-buttons">
        <button onClick={() => onDeleteToDo(id)}>Delete</button>
        <button onClick={() => setComplete(!isComplete)}>Mark {isComplete ? "Incomplete" : "Complete"}</button>
      </div>
    </div>
  );
}
