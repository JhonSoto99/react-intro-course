import "./CreateTodoButton.css"
function CreateTodoButton({onShowHiddenModal}) {
    return (
        <button
            className="CreateTodoButton"
            onClick={onShowHiddenModal}
        >+</button>
    );
}

export {CreateTodoButton};