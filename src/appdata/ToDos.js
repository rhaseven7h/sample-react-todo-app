import axios from "axios";

class ToDos {
    constructor(apiEndpointsBase) {
        if (!apiEndpointsBase)
            throw new Error('missing backend API endpoints base');
        else
            this.toDosEndpoint = apiEndpointsBase;
    }

    list() {
        return axios.get(this.toDosEndpoint);
    }

    update(toDoId, state) {
        return axios.patch(
            `${this.toDosEndpoint}/${toDoId}`,
            { done: state },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
    }

    delete(toDoId) {
        return axios.delete(
            `${this.toDosEndpoint}/${toDoId}`,
        );
    }

    create(title) {
        return axios.post(
            this.toDosEndpoint,
            {
                title: title,
                done: false,
            }
        );
    }
}

export default ToDos;
