const ToDoListItem = (props) => {
    return (
        <li>
            <input
                type="checkbox"
                readOnly
                checked={props.item.done}
            />
            <span className={props.item.done ? 'completed' : ''}>{props.item.title}</span>
        </li>
    );
};

export default ToDoListItem;
