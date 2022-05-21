import axios from "axios";

class ToDos {
    toDosEndpoint;

    constructor(apiEndpointsBase) {
        if (!apiEndpointsBase)
            throw new Error('missing backend API endpoints base');
        else
            this.toDosEndpoint = apiEndpointsBase;
    }

    list = () => axios.get(this.toDosEndpoint);

    update = (toDoId, state) => axios.patch(
        `${this.toDosEndpoint}/${toDoId}`,
        { done: state },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    );

    delete = toDoId => axios.delete(
        `${this.toDosEndpoint}/${toDoId}`,
    );

    create = title => axios.post(
        this.toDosEndpoint,
        {
            title: title,
            done: false,
        }
    );
}

export default ToDos;
