import '../App.css';
import { TodoCounter } from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";
import {TodoList} from "../TodoList";
import {useState} from "react";
import {useLocalStore} from "./useLocalStorage";

//const defaultTodos = [
//    {text: 'Cortar cebolla', completed: false},
//    {text: 'Curso React', completed: true},
//    {text: 'Llorar', completed: false},
//    {text: 'LALALALAL', completed: true},
//]

//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

function App() {
    const [todos, saveTodos] = useLocalStore("TODOS_V1", []);
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
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
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
