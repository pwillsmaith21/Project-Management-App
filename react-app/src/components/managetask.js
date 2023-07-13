import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { useForm, SubmitHandler } from "react-hook-form"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';



function ManageTask(props){
    const baseUrl = "localhost:4000/api"
    const taskUrl = `${baseUrl}/task/${props.task.id}`
    const headers = { 'Content-type': 'application/json; charset=UTF-8'}
    function UpdateTask(taskJson){
        var updateJson ={
            method: 'PUT',
            body: JSON.stringify(taskJson),
            headers:headers
        }
        /* fetch(taskUrl,updateJson)
        .then((response) => response.json())
        .then((json) => console.log(json)); */
        console.log(JSON.stringify(taskJson))
        console.log(`Project edit sucessfull`)
    }
    function DeleteTask(){
        var deleteJson = {
            method: 'DELETE',
            headers: headers
        }
        /* fetch(taskUrl,deleteJson)
        .then((response) => response.json())
        .then((json) => console.log(json)); */
        alert(`task ${props.task.id}  Delete sucessfull`)
    }
    function EditForm(props){
        var task = props.task
        const {register,handleSubmit} = useForm();
        return (
        <Popup trigger={<Button>Edit</Button>} position="right center">
            <Form onSubmit={handleSubmit((data) => UpdateTask(data))}>
                
                <Form.Label For="task">Task:</Form.Label>
                <Form.Control defaultValue={task.taskname} {...register("taskname")} />
                <Form.Label For="description">Description:</Form.Label>
                <Form.Control defaultValue={task.description}   {...register("description")}/>
                <Form.Label For="personassign">Assignment:</Form.Label>
                <Form.Control defaultValue={task.personassign}   {...register("personassign")}/>
                <Form.Label For="duedate">Due Date:</Form.Label>
                <Form.Control defaultValue={task.duedate}  {...register("duedate")}/>
                <Form.Label For="estimateduration">Completion Time:</Form.Label>
                <Form.Control defaultValue={task.estimateduration}  {...register("estimateduration")} />
                <Form.Control type="submit" />
            </Form>
      </Popup>)
    }
    return (
        <div className='ManageTask'>
            <div>
            <EditForm task = {props.task}/>       
            <Button onClick = {DeleteTask}>Delete</Button>
            </div>
        </div>
    )
}
export default ManageTask