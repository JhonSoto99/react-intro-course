import '../App.css';
import {AppUI} from "./AppUI";
import {useState} from "react";
import {useLocalStore} from "./useLocalStorage";
import React from "react";

const defaultTodos = [
    {text: 'Cortar cebolla', completed: false},
    {text: 'Curso React', completed: true},
    {text: 'Llorar', completed: false},
    {text: 'LALALALAL', completed: true},
]

//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

function App() {
    const {
        item: todos,
        saveTodos,
        loading,
        error
    } = useLocalStore("TODOS_V1", []);
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

    return(
        <AppUI
            loading={loading}
            error={error}
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            searchValue={searchValue}
            searchedTodos={searchedTodos}
            setSearchValue={setSearchValue}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
        />
    );
}

export default App;
