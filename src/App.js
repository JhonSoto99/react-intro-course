import './App.css';
import { TodoCounter } from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import {TodoList} from "./TodoList";
import {useState} from "react";

const defaultTodos = [
    {text: 'Cortar cebolla', completed: false},
    {text: 'Curso React', completed: true},
    {text: 'Llorar', completed: false},
    {text: 'LALALALAL', completed: true},
]

function App() {
    const [todos, setTodos] = useState(defaultTodos);
    const [searchValue, setSearchValue] = useState("");

    // Estados derivados.
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    })

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos[todoIndex].completed = true;
        setTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    }


    return (
        <>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />

        <TodoList>
            {searchedTodos.map(todo =>(
                <TodoItem
                    key={todo.text}
                    completed={todo.completed}
                    text={todo.text}
                    onComplete={() => completeTodo(todo.text)} // Encapsula la función en otra para que no se ejecute aún.
                    onDelete={() => deleteTodo(todo.text)} // Encapsula la función en otra para que no se ejecute aún.
                />
            ))}
        </TodoList>

        <CreateTodoButton />

    </>
    );
}

export default App;
