import React from 'react';
import '../../UI/Btn/Btn.scss';
import './ToDoItem.scss';
import Checkbox from '../../UI/Checkbox/Checkbox';
import Btn from '../../UI/Btn/Btn';

function ToDoItem({ switchDone, deleteTask, task, status, id }) {
    let btnClass= 'ToDoItem__Btn';

    return (
        <article className="ToDoItem">
            <Checkbox switchDone={switchDone} id={task.id} CssClasses={['ToDoItem__Checkbox']} status={status} />
            <div className="ToDoItem__text">
                <h3 className="ToDoItem__name">{task.name}</h3>
                <p className="ToDoItem__description">{task.desc}</p>
            </div>
            <Btn btnFunc={deleteTask} btnClass={btnClass} id={id} status={status}/>
        </article>
    )
}

export default ToDoItem