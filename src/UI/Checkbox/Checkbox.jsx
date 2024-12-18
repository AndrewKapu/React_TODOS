import React, { useState } from 'react'
import './Checkbox.scss'

function Checkbox({moveToDone, CssClasses}) {
    moveToDone();
    let classes = ['checkbox-container', CssClasses];
    let classesString = classes.join(' ');

    let [checked, setChecked] = useState(false);

    function toggleCheckbox() {
        setChecked(() => {
            return checked === false ? true : false;
        });
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