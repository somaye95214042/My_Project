import React, {useState} from 'react';
import NameForm from "./NameForm";
import JasonData from "../data";
import '../Styles/app.css';

const Customers = () => {

    const [list, updateList] = useState(JasonData);
    const [name, setName] = React.useState('');


    function handleRemoveItem (index) {
        const temp = [...list];

        // removing the element using splice
        temp.splice(index, 1);

        // updating the list
        updateList(temp);
    }


    function handleChange(event) {
        setName(event.target.value);
    }

    function handleAdd() {
        const newList = list.concat({ name });
        updateList(newList);
        setName('');
    }

    return (
        <div>
            <ul>
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>
                            <button onClick={() => handleRemoveItem(index)}> x </button>
                            <span>{item.name} {item.family}</span>
                        </li>
                    ))}
                </ul>
                <NameForm CustomerList = {list} UpdateCustomers = {updateList}/>
                {/* B jaye in code ha baraye gereftan name, man ye component jadid b esme Name Form sakhtam vali baraye update shodan list,
                function inja ro ba prop bara un Component ferestadam, okaye ? ya b jash hamin ja code bezanam behtare ? */}
                {/*<div>*/}
                {/*    <input type="text" value={name} onChange={handleChange} />*/}
                {/*    <button type="button" className='insert' onClick={handleAdd}>*/}
                {/*        Add*/}
                    {/*</button>*/}
                {/*</div>*/}
            </ul>
        </div>
    );
}

export default Customers;

