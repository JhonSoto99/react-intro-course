import "./TodoForm.css"
import {useContext, useState} from "react";
import {TodoContext} from "../TodoContext";

function TodoForm() {
    const {
        setOpenModal,
        addTodo
    } = useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = useState('');
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
       setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="text">Escribe tu nuevo TODO</label>
            <textarea id="text" placeholder="Leer la biblia" value={newTodoValue} onChange={onChange}/>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button--cancel" type="" onClick={() => {setOpenModal(false)}}>Cancelar</button>
                <button className="TodoForm-button--add" type="submit">Añadir</button>
            </div>
        </form>
    );
}

export {TodoForm};