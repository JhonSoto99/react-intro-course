import "./TodoSearch.css"

function TodoSearch() {
    return(
        <input
            className="TodoSearch"
            placeholder="Search..."
            onChange={(event) => console.log("Search", event.target.value)}
        />
    );
}

export {TodoSearch};