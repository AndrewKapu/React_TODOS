import React, { useState } from 'react'
import './Checkbox.scss'

function Checkbox({switchDone, id, CssClasses, status}) {
    let classes = ['checkbox-container', CssClasses];
    let classesString = classes.join(' ');

    let [checked, setChecked] = useState(status === true ? true : false);

    function toggleCheckbox(e) {
        setChecked(() => {
            return checked === false ? true : false;
        });
        switchDone(id, status);
    }

    return (
        <label className={classesString}>
            <input
                className="checkbox__default"
                type="checkbox"
                checked={checked}
                onChange={toggleCheckbox}
            />
            <span className="checkbox__custom"></span>
        </label>
    )
}

export default Checkbox