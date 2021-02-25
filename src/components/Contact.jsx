import React, {useReducer, useEffect, useState} from 'react';

const initialState = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    cellPhone: '',
}

const reducer = (state, {field, value}) => {
    return {
        ...state,
        [field]: value
    }
}
const Contact = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const onChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value })
    }

    const { username, password, firstName, lastName, cellPhone} = state
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const [color, setColor] = useState('darkBlue')

    useEffect(() => {
        document.body.style.background = (color);
        document.body.style.color = 'white';
    }, [color])

    const changeColor = () => {
        setColor('darkGreen')
    }

    return (
        <div className='container my-5'>
            <h1 className='my-4'>Programming Guide for 2021</h1>
            <p>Here we have used 3 hooks to bring the form live. Use of reducer hook was paramount for form content but useState and useEffect hooks were the ones responsible for changing the screen color. Without useState one cannot employ useEffect hook as the latter hook provides side effects.</p>
            <div>
                <form className="form-control" onSubmit={handleSubmit}>
                    <input type="text" name="username" id="username" autocomplete='off' value={username} onChange={onChange}  />
                
                <div className="form-control">
                    <input type="text" name="password" id="password" autocomplete='off' value={password} onChange={onChange} />
                </div>
                <div className="form-control">
                    <input type="text" name="firstName" id="firstName" autocomplete='off' value={firstName} onChange={onChange} />
                </div>
                <div className="form-control">
                    <input type="text" name="lastName" id="lastName" autocomplete='off' value={lastName} onChange={onChange} />
                </div>
                <div className="form-control">
                    <input type="number" name="cellPhone" id="cellPhone" autocomplete='off' value={cellPhone} onChange={onChange} />
                </div>
                <br/>
                    <button onClick={changeColor}>click here</button>
                    <button type="submit">Registration</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
