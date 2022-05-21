import PropTypes from "prop-types";
import './AddItem.scss';
import { useState } from "react";

const AddItem = (props) => {
    const [newTitle, setNewTitle] = useState("");
    return (
        <div className="add-item">
            <form onSubmit={evt => {
                evt.preventDefault();
                props.onAdd(newTitle);
                setNewTitle('');
            }}>
                <label htmlFor="add-item">New To-Do Item:</label>
                <input type="text" id="add-item" value={newTitle} onChange={evt => setNewTitle(evt.target.value)}/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    );
}

AddItem.propTypes = {
    onAdd: PropTypes.func.isRequired,
};

export default AddItem;
