import "./css/App.css";
import Header from "./js/Header";
import Form from "./js/Form";
import ToDo from "./js/ToDo";

const todos = [
  { id: 1, title: "item1", description: "item1 description" },
  { id: 2, title: "item2", description: "item2 description" },
  { id: 3, title: "item3", description: "item3 description" },
];

function App() {
  const toDoItems = todos.map((todo) => {
    return (
      <ToDo key={todo.id} title={todo.title}>
        {todo.description}
      </ToDo>
    );
  });

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Form />
        <div className="toDo__grid">{toDoItems}</div>
      </div>
    </div>
  );
}

export default App;
