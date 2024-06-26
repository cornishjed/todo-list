import "../css/ToDo.css";

export default function ToDo({title, children}) {
  return (
    <div className="toDo__card">
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
