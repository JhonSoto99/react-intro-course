import './App.css';
import { TodoCounter } from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import {TodoList} from "./TodoList";

function App() {
  return (
    <div className="App">
        <TodoCounter />
        <TodoSearch />

        <TodoList>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </TodoList>

        <CreateTodoButton />

    </div>
  );
}

export default App;
