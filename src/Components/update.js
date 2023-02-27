import React, {useState,useEffect} from "react";
import {Table, Button, Form, Checkbox} from 'semantic-ui-react';
import {useNavigate} from "react-router";

import axios from "axios";
import {Link} from "react-router-dom";

const Update = () =>{
    let navigate = useNavigate();
    const [id, setID] = useState(3);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);


    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);
    const updateAPIData = () => {
        console.log(id)
        axios.put(`https://63f866ec5b0e4a127de51025.mockapi.io/fakeData/${id}`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            navigate('/read', {replace: true});
        })
    }
    return (
        <div>
        <Form className='create-form'>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' value = {firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' value = {lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' value = {checkbox} onChange={(e)=>setCheckbox(!checkbox)}/>
            </Form.Field>
            <Button onClick={updateAPIData} type='submit'>Update</Button>
        </Form>
            <Link to='/'>
                <button className='HomeButton'>Home</button>
            </Link>
        </div>
    )
}

export default Update