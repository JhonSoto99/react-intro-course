import {TodoIcon} from "./index";

function CompleteIcon({completed, onClick}) {
    return (
        <TodoIcon type="check" color={completed ? 'green' : 'gray'} onClick={onClick}/>
    );
}

export {CompleteIcon};