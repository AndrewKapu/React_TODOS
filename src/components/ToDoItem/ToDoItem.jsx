import React from 'react'
import './ToDoItem.scss';
import Checkbox from '../../UI/Checkbox/Checkbox';

function ToDoItem({switchDone, task, id, status}) {
    //Function for checkbox to tell it's parent data(props)
    function moveToDone() {
        //moves current article from "tasks to do" to "done tasks"
        //console.log('Hello from parent');
    }

    return (
        <article className="ToDoItem">
            <Checkbox switchDone={switchDone} moveToDone={moveToDone} id={task.id} CssClasses={['ToDoItem__Checkbox']} status={status}/>
            <div className="ToDoItem__text">
                <h3 className="ToDoItem__name">{task.name}</h3>
                <p className="ToDoItem__description">{task.desc}</p>
            </div>
        </article>
    )
}

export default ToDoItem