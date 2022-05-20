import PropTypes from "prop-types";
import './AddItem.scss';

const AddItem = (props) => {
    return (
        <div className="add-item">
            <form onSubmit={(evt) => {
                evt.preventDefault();
                props.onAdd(evt.target["add-item"].value);
                evt.target["add-item"].value = "";
            }}>
                <label htmlFor="add-item">New To-Do Item:</label>
                <input type="text" id="add-item" name="add-item" placeholder="Enter your To-Do title here."/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    );
}

AddItem.propTypes = {
    onAdd: PropTypes.func.isRequired,
};

export default AddItem;
