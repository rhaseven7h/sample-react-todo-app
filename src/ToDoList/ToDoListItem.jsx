import PropTypes from "prop-types";

const ToDoListItem = (props) => {
    return (
        <li>
            <input
                type="checkbox"
                onChange={(evt) => props.onChange(props.item.id, evt.target.checked)}
                checked={props.item.done}
            />
            <span className={props.item.done ? 'completed' : ''}>{props.item.title}</span>
            <span className="todo-delete" onClick={(evt) => props.onDelete(props.item.id)}>delete</span>
        </li>
    );
};

ToDoListItem.propTypes = {
    item: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ToDoListItem;
