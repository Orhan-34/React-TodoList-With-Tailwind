import React, { useState } from "react";
import { Todo } from "../types/index";
import "../index.css";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">ToDo List</h1>
        <form onSubmit={addTodo} className="flex mb-4">
            <input
                type="text"
                className="flex-grow p-2 border rounded"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}    
            />
            <button
                type="submit"
                className="ml-2 p-2 bg-blue-500 text-white rounded"
            >
                Add
            </button>
        </form>
        <ul>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="flex items-center justify-between p-2 border-b"
                >
                    <span>{todo.text}</span>
                    <button
                        onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
                        className="px-3 py-3 bg-red-500 text-white rounded"
                    >
                        X
                    </button>
                </li>
            ))}
        </ul>
        {/* TodoItem bileşenini kullanmak istiyorsanız, ilgili fonksiyonları tanımlamalısınız */}
        {/* <ul>
                                {todos.map(todo => (
                                <TodoItem
                                        key={todo.id}
                                        todo={todo}
                                        toggleTodo={toggleTodo}
                                        deleteTodo={deleteTodo}
                                />
                                ))}
                        </ul> */}
    </div>
);
};

export default TodoList;
