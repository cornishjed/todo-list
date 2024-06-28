import ToDo from "./ToDo";

export default function Grid({toDos, setToDos}) {
  return (
    <div className="toDo__grid">
      {toDos.map(({ id, title, description }) => {
        return (
          <ToDo key={id} id={id} toDos={toDos} setToDos={setToDos} title={title}>
            {description}
          </ToDo>
        );
      })}
    </div>
  );
}
