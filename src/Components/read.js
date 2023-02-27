import React, {useEffect} from "react";
import { Table,Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from "axios";
import {useState} from "react";

const Read = () =>{
    const [APIData, setAPIData] = useState([]);
    useEffect(() =>{
        axios.get('https://63f866ec5b0e4a127de51025.mockapi.io/fakeData')
            .then(res =>{
                setAPIData(res.data)
            })
    },[])
    console.log('APIData')
    console.log(APIData)
    const getData = () => {
        axios.get(`https://63f866ec5b0e4a127de51025.mockapi.io/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }
    const onDelete = (id) =>{
        axios.delete(`https://63f866ec5b0e4a127de51025.mockapi.io/fakeData/${id}`)
            .then(() => {
                getData();
            })
    }
    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }
    return(
        <div>
            <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Checked</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {APIData.map((data) => {
                    return (
                        <Table.Row>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                            <Link to='/update'>
                                <Table.Cell>
                                    <Button onClick={() => setData(data)}>Update</Button>
                                </Table.Cell>
                            </Link>
                            <Table.Cell>
                            <Button onClick={() => onDelete(data.id)}>Delete</Button>
                        </Table.Cell>

                        </Table.Row>
                    )})}
            </Table.Body>
        </Table>
            <Link to='/'>
                <button className='HomeButton'>Home</button>
            </Link>
        </div>
    )
}

export default Read