import {useState} from "react";

function useLocalStore(itemName, initialValue) {

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = [];
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = useState(parsedItem);

    const saveItem = (newItem) => {
        setItem(newItem);
        localStorage.setItem(itemName, JSON.stringify(newItem))
    }

    return [item, saveItem];
}

export { useLocalStore };