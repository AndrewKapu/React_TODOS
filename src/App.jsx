import React, { useState } from "react";
import './App.scss';
import ToDoItem from "./components/ToDoItem/ToDoItem";
import Container from "./components/Container/Container";
import AddItemForm from "./components/AddItemForm/AddItemForm";

function App() {
    let tasks = [
        { id: 1, key: Date.now() % 10, name: 'Починить велосипед', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ex!', done: false },
        { id: 2, key: Date.now() % 10 + 1, name: 'Сходить к окулисту', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ex!', done: true },
    ];

    let doneTasks = [];
    let unDoneTasks = [];

    // Function to divide tasks by done property
    function divideTasks(tasks) {
        tasks.forEach(task => {
            if (task.done === false) {
                unDoneTasks.push(task);
            } else {
                doneTasks.push(task);
            }
        });
    }

    divideTasks(tasks);

    let [done, setDone] = useState(doneTasks);
    let [unDone, setUnDone] = useState(unDoneTasks);


    /**
     * Function for switching status of task
     * @param {number} id unique id to identify task in data structure array
     * @param {boolean} status if false task is undone, if true task is done
     */
    function switchDone(id, status) {
        status = status === false ? true : false;
        if (status) {
            let findedElem = unDone.find((elem) => elem.id === id);
            findedElem.done = status;
            unDone = unDone.filter((elem) => id !== elem.id);
            //setUnDone(unDone.filter((elem) => id !== elem.id));
            setDone([...done, findedElem]);
            setUnDone(unDone);
        } else if (!status) {
            let findedElem = done.find((elem) => elem.id === id);
            findedElem.done = status;
            done = done.filter((elem) => id !== elem.id);
            setUnDone([...unDone, findedElem]);
            setDone(done);
        }
    }

    function addTask(name,  desc) {
        let newTask = {id: 3, key: Date.now() % 100, name: name, desc: desc, done: false};
        setUnDone([...unDone, newTask]);
    }

    function deleteTask(id, status) {
        if (!status) {
            unDone = unDone.filter((elem) => id !== elem.id);
            setUnDone([...unDone]);
        } else {
            done = done.filter((elem) => id !== elem.id);
            setDone([...done]);
        }
    }


    return (
        <div className="App">
            <Container>
                <AddItemForm addTask={addTask} />
                <div className="todo-tasks">
                    <h2 className="">Задачи к выполнению</h2>
                    {unDone.map((task) => {
                        return <ToDoItem switchDone={switchDone} deleteTask={deleteTask} task={task} key={task.key} id={task.id} status={task.done} />
                    })}
                </div>
                <div className="done-tasks">
                    <h2 className="">Выполненные задачи</h2>
                    {done.map((task) => {
                        return <ToDoItem switchDone={switchDone} deleteTask={deleteTask} task={task} key={task.key} id={task.id} status={task.done} />
                    })}
                </div>
            </Container>
        </div>
    );
}

export default App;
