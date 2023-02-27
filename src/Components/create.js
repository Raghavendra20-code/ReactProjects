import React, {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from "axios";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
const Create = () => {
    const [firstName, setFirsetName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    let navigate = useNavigate();
    const postData = () => {
        axios.post(`https://63f866ec5b0e4a127de51025.mockapi.io/fakeData`, {
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
                <input placeholder='First Name' onChange={(e)=>{setFirsetName(e.target.value)}}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' onChange={(e)=>{setLastName(e.target.value)}}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=>setCheckbox(!checkbox)}/>
            </Form.Field>
            <Button onClick={postData} type='submit'>Submit</Button>
        </Form>
            <Link to='/'>
                <button className='HomeButton'>Home</button>
            </Link>
        </div>
    )
}

export default Create;