import {useState, useEffect} from "react";

const defaultTodos = [
    {text: 'Cortar cebolla', completed: false},
    {text: 'Curso React', completed: true},
    {text: 'Llorar', completed: false},
    {text: 'LALALALAL', completed: true},
]

//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

function useLocalStore(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }, 2000)
    }, []);

    const saveItem = (newItem) => {
        setItem(newItem);
        localStorage.setItem(itemName, JSON.stringify(newItem))
    }

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStore };