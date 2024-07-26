import ToDo from "./ToDo";

export default function Grid({toDos, onDeleteToDo}) {
  return (
    <div className="toDo__grid">
      {toDos.map(({ id, title, description }) => {
        return (
          <ToDo key={id} id={id} title={title} onDeleteToDo={onDeleteToDo} >
            {description}
          </ToDo>
        );
      })}
    </div>
  );
}
