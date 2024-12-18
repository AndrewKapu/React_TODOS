import React from 'react'
import './ToDoItem.scss';
import Checkbox from '../../UI/Checkbox/Checkbox';

function ToDoItem() {

    //Function for checkbox to tell it's parent data(props)
    function moveToDone() {
        //moves current article from "tasks to do" to "done tasks"
        console.log('Hello from parent');
    }

    return (
        <article className="ToDoItem">
            <Checkbox moveToDone={moveToDone}  CssClasses={['ToDoItem__Checkbox']} />
            <div className="ToDoItem__text">
                <h3 className="ToDoItem__name">Починить велосипед</h3>
                <p className="ToDoItem__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ex!</p>
            </div>
        </article>
    )
}

export default ToDoItem