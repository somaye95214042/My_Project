import React from 'react';
import {useState} from 'react';
import '../Styles/app.css';

const Contact = () => {

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        age: 1,
        bio: "",
        country: "australia",
        level: "master",
        bike: true,
        car: false,
        boat: false
    })

    function handleChange(evt) {

        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    function handleSubmit(event) {
        console.log(state);
        event.preventDefault();
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Your name.."
                    value={state.firstName}
                    onChange={handleChange}
                />

                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Your last name.."
                    value={state.lastName}
                    onChange={handleChange}
                />

                <label>Age</label>
                <input type="number"
                       name="age"
                       value={state.age}
                       onChange={handleChange}
                />

                <label>Country</label>
                <select
                    name="country"
                    onChange={handleChange}
                    value={state.country}>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>

                <div>
                    <label style={{display: "block", marginTop: 20}} >Select all vehicles you have :</label>
                    <label className="form-control">
                        <input type="checkbox"
                               name="bike"
                               value="bike"
                               checked={state.bike}
                               onChange={handleChange}/>
                        I have a bike
                    </label>

                    <label className="form-control">
                        <input type="checkbox"
                               name="car"
                               value="cart"
                               checked={state.car}
                               onChange={handleChange}/>
                        I have a car
                    </label>

                    <label className="form-control">
                        <input type="checkbox"
                               name="boat"
                               value="boat"
                               checked={state.boat}
                               onChange={handleChange}/>
                        I have a boat
                    </label>
                </div>

                <label style={{display: "block", marginTop: 20}} >Select your graduated level :</label>

                <label className="form-control">
                    <input
                        type="radio"
                        name="level"
                        value="master"
                        checked={state.level === "master"}
                        onChange={handleChange}
                    />
                    Master
                </label>

                <label className="form-control">
                    <input
                    type="radio"
                    name="level"
                    value="acolyte"
                    checked={state.level === "acolyte"}
                    onChange={handleChange}
                    />
                    Acolyte
                </label>

                <textarea
                    name="bio"
                          placeholder="Write something.."
                          value={state.bio}
                          onChange={handleChange} />

                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}


export default Contact;