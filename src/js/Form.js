import "../css/Form.css"

let nextId = 4; // each item must have unique key value

export default function Form({addToDo}) {
  const handleSubmit = (e, addToDo) => {
    e.preventDefault();
    const toDo = {
      id: nextId++,
      title: e.target.title.value,
      description: e.target.desc.value
    }
    
    addToDo(toDo);
    return;
  }

  return (
    <div className="todo__form">
      <h3>Create To-Do</h3>
      <form onSubmit={(e) => handleSubmit(e, addToDo)}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
        <label htmlFor="desc">Description</label>
        <textarea name="desc"></textarea>
        <button>Create</button>
      </form>
    </div>
  );
}
