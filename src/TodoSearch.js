import "./TodoSearch.css"

function TodoSearch({searchValue, setSearchValue}) {
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