import "./TodoItem.css"
import {CompleteIcon} from "../TodoIcon/CompleteIcon";
import {DeleteIcon} from "../TodoIcon/DeleteIcon";

function TodoItem({completed, text, onComplete, onDelete}) {
    return (
        <li className="TodoItem">
            <CompleteIcon completed={completed} onClick={onComplete} />
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
            <DeleteIcon onClick={onDelete} />
        </li>
    );
}

export {TodoItem};