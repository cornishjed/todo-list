import "../css/Form.css"

export default function Form() {
  function onSubmit() {
    console.log("submitted");
  }

  return (
    <div className="todo__form">
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
        <label htmlFor="desc">Description</label>
        <textarea name="desc"></textarea>
        <button onSubmit={onSubmit}>Create</button>
      </form>
    </div>
  );
}
