import './App.scss';
import ToDoList from "./ToDoList/ToDoList";

function App() {
    return (
        <div className="container mx-auto mt-12">
            <div className="text-center">
                <h1 className="text-red-600">Jest/Enzyme Testing Challenge</h1>
                <h2 className="text-red-800 mt-8">To-Do List</h2>
                <hr/>
                <p className="text-gray-500 my-4 mt-14"><em>Hey! Don't forget the milk!</em></p>
            </div>
            <ToDoList/>
        </div>
    );
}

export default App;
