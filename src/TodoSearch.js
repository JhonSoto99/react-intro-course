import {useState} from 'react';
import "./TodoSearch.css"

function TodoSearch() {
    const [searchValue, setSearchValue] = useState("");
    console.log('Search state', searchValue)

    return(
        <input
            className="TodoSearch"
            placeholder="Search..."
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
        />
    );
}

export {TodoSearch};