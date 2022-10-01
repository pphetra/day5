import Todo from "../../components/todo";

export default function TodoPage() {
  const initialTodos = [
    {
      id: 1,
      name: "Eat",
      completed: false,
    },
    {
      id: 2,
      name: "Sleep",
      completed: false,
    },
    {
      id: 3,
      name: "Repeat",
      completed: false,
    },
  ];

  return (
    <div>
      <Todo initialTodos={initialTodos} />
    </div>
  );
}
