import "./CreateTodoButton.css"
function CreateTodoButton() {
    return (
        <button
            className="CreateTodoButton"
            onClick={(event) => console.log("Click", event.target)}
        >+</button>
    );
}

export {CreateTodoButton};