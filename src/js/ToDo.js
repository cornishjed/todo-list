import $ from "jquery";

import "../css/ToDo.css";

export default function ToDo({id, deleteToDo, title, children}) {
  const handleDelete = (e, deleteToDo) => {
    e.preventDefault();

    const id = e.target.id.value;

    deleteToDo(id);

    return;
  }

  const toggleComplete = (e) => {
    e.preventDefault();

    const toDoCard = $(e.target).parent();
    const button = $(e.target);
    
    if ($(toDoCard).hasClass("complete")) {
      $(toDoCard).removeClass("complete");
      $(button).text("Mark Complete");
    }
    else {
      $(toDoCard).addClass("complete");
      $(button).text("Mark Incomplete");
    }
  }

  return (
    <div className="toDo__card" >
      <form onSubmit={(e) => handleDelete(e, deleteToDo)}>
        <input type="hidden" name="id" value={id} />
        <h1>{title}</h1>
        <p>{children}</p>
        <button>Delete</button>
      </form>
      <button onClick={toggleComplete}>Mark Complete</button>
    </div>
  );
}
