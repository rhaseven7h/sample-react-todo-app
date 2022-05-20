import './ToDoList.scss';
import { useEffect, useMemo, useState } from "react";
import ToDos from "../appdata/ToDos";
import ToDoListItem from "./ToDoListItem";
import AddItem from "./AddItem";
import PropTypes from "prop-types";

function ToDoList(props) {
    const toDos = useMemo(() => new ToDos(props.apiBase), [props.apiBase]);
    const [items, setItems] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [updateNeeded, setUpdateNeeded] = useState(false);
    useEffect(() => {
        toDos
            .list()
            .then((todos) => {
                setItems(todos.data);
                setUpdateNeeded(false);
            })
            .catch((err) => {
                setItems([]);
                setUpdateNeeded(false);
                setFetchError(`Error fetching to-do list: ${err}`);
            });
    }, [updateNeeded, toDos]);
    const updateToDo = (toDoId, state) => {
        toDos
            .update(toDoId, state)
            .then((res) => {
                setUpdateNeeded(true);
            })
            .catch((err) => {
                setFetchError(`Error updating to-do state: ${err}`);
            });
    };
    const deleteToDo = (toDoId) => {
        toDos
            .delete(toDoId)
            .then((res) => {
                setUpdateNeeded(true);
            })
            .catch((err) => {
                setFetchError(`Error deleting to-do: ${err}`);
            });
    };
    const addToDo = (title) => {
        toDos
            .create(title)
            .then((res) => {
                setUpdateNeeded(true);
            })
            .catch((err) => {
                setFetchError(`Error adding new to-do: ${err}`);
            })
    };
    const itemsList = items.map(item =>
        <ToDoListItem
            key={item.id}
            item={item}
            onChange={updateToDo}
            onDelete={deleteToDo}
        />
    );
    return (
        <div className="to-do-list">
            <AddItem onAdd={addToDo}/>
            <p className={fetchError ? 'fetch-error' : 'hidden'}>{fetchError}</p>
            <ul className={fetchError ? 'hidden' : ''}>
                {itemsList}
            </ul>
        </div>
    );
}

ToDoList.propTypes = {
    apiBase: PropTypes.string.isRequired,
};

export default ToDoList;
