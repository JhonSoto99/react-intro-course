import { createContext, useState } from 'react';
import {useLocalStore} from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider({children}) {
    const {
        item: todos,
        saveTodos,
        loading,
        error
    } = useLocalStore("TODOS_V1", []);
    const [searchValue, setSearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false);

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

    const showHiddenModal = () => {
        setOpenModal(!openModal);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            searchedTodos,
            setSearchValue,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            showHiddenModal
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoProvider, TodoContext};