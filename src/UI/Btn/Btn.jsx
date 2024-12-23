import React from 'react'
import './Btn.scss'

function Btn({btnFunc, btnClass, id, status }) {
    let classesString = ['Btn', btnClass].join(' ');

    function deleteTask() {
        btnFunc(id, status);
    }

    return (
        <button onClick={deleteTask} className={classesString} type="button">Удалить задачу</button>
    )
}

export default Btn