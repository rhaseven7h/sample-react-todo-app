import './ToDoList.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import ToDoListItem from "./ToDoListItem";

const toDosEndpoint = 'http://localhost:3001/todos';

function ToDoList(props) {
    const [items, setItems] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    useEffect(() => {
        axios
            .get(toDosEndpoint)
            .then((todos) => {
                setItems(todos.data);
            })
            .catch((err) => {
                setItems([]);
                setFetchError(`Error fetching to-do list: ${err}`);
            });
    }, []);
    const itemsList = items.map(item => <ToDoListItem key={item.id} item={item}/>);
    return (
        <div className="to-do-list">
            <p className={fetchError ? 'fetch-error' : 'hidden'}>{fetchError}</p>
            <ul className={fetchError ? 'hidden' : ''}>
                {itemsList}
            </ul>
        </div>
    )
}

export default ToDoList;
