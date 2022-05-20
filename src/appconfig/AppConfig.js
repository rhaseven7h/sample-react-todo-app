const AppConfig = {
    apiEndpointBase: process.env.API_BASE
        ? process.env.API_BASE
        : 'http://localhost:3001/todos'
}

export default AppConfig;
