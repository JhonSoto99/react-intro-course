import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";

function AppUI({
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        searchedTodos,
        setSearchValue,
        completeTodo,
        deleteTodo
}) {
    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {loading && <p>Estamos cargando...</p>}
                {error && <p>Hubo un error.</p>}
                {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO.</p>}
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

export {AppUI};