import React from "react";
import './App.scss';
import ToDoItem from "./components/ToDoItem/ToDoItem";
import Container from "./components/Container/Container";

function App() {
    return (
        <div className="App">
            <Container>
                <h2 className="">Задачи к выполнению</h2>
                <ToDoItem />
            </Container>
        </div>
    );
}

export default App;
