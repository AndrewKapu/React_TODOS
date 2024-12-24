import React, { useState } from 'react'
import './AddItemForm.scss'


function AddItemForm({addTask, deleteTask}) {
    let [name, setName] = useState('Название');
    let [desc, setDesc] = useState('Описание');

    function changeName(event) {
        let value = event.target.value;
        setName(value);
    }

    function changeDesc(event) {
        let value = event.target.value;
        setDesc(value);
    }

    function forwardTask() {
        addTask(name, desc);
        setName('');
        setDesc('');
    }

    let btnClasses = ['Btn', 'AddItemForm__Btn'].join(' ');

    return (
        <div className="AddItemForm-wrapper">
            <h2 className="AddItemForm__heading">Добавить задачу</h2>
            <form className="AddItemForm">
                <label className="AddItemForm__label" htmlFor="name">Название задачи</label>
                <input className="AddItemForm__input" type="text" id="name" value={name} onChange={changeName}/>
                <label htmlFor="desc">Описание задачи</label>
                <textarea className="AddItemForm__input AddItemForm__desc" id="desc" value={desc} onChange={changeDesc}></textarea>
                <button onClick={forwardTask} className={btnClasses} type="button">Добавить задачу</button>
            </form>
        </div>
    )
}

export default AddItemForm