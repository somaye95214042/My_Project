import React from 'react';
import {useState} from 'react';
import "../Styles/app.css";


const NameForm = (props) => {

    const [name, setName] = useState('');

    const CustomerName = props.CustomerList;

    function handleChange(event) {
        setName(event.target.value);
    }

   function handleAdd() {
        const newList = CustomerName.concat({ name });
        props.UpdateCustomers(newList);
        setName('');
    }


    return (
        <div>
            <label placeholder="Your name.." style={{display: "block", marginTop: 50}} >Please enter your name here : </label>
            <input type="text" className='add' value={name} onChange={handleChange} />
            <button type="button" className='insert' onClick={handleAdd}>
                Add
            </button>
        </div>
    );
}

export default NameForm;