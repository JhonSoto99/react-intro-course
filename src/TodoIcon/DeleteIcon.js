import {TodoIcon} from "./index";

function DeleteIcon({onClick}) {
    return  <TodoIcon type="delete" color="gray" onClick={onClick}/>;
}

export {DeleteIcon};