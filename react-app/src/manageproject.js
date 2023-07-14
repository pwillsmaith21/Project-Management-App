import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import { useForm, SubmitHandler } from "react-hook-form"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';


function ManageProject(props){
    const baseUrl = "localhost:4000/api"
    const projectsUrl = `${baseUrl}/Projects/${props.project.id}`
    const headers = { 'Content-type': 'application/json; charset=UTF-8'}
    function UpdateProject(projectJson){
        var updateJson ={
            method: 'PUT',
            body: JSON.stringify(projectJson),
            headers:headers
        }
        /* fetch(projectsUrl,updateJson)
        .then((response) => response.json())
        .then((json) => console.log(json)); */
        //alert("Project edit sucessfull")
        console.log(JSON.stringify(projectJson))
        console.log(`Project edit sucessfull`)
    }
    function DeleteProject(){
        var deleteJson = {
            method: 'DELETE',
            headers: headers
        }
        /* fetch(projectsUrl,deleteJson)
        .then((response) => response.json())
        .then((json) => console.log(json)); */
        alert(`project ${props.project.id}  Delete sucessfull`)
    }
    function EditForm(props){
        var project = props.project
        const {register,handleSubmit} = useForm();
        return (
        <Popup trigger={<Button>Edit</Button>} position="right center">
            <Form onSubmit={handleSubmit((data) => UpdateProject(data))}>
                
                <Form.Label For="projectname">Project Name:</Form.Label>
                <Form.Control defaultValue={project.projectname} {...register("projectname")} />
                <Form.Label For="teamSize">Team Size:</Form.Label>
                <Form.Control defaultValue={project.teamSize}   {...register("teamSize")}/>
                <Form.Label For="budget">Project Budget:</Form.Label>
                <Form.Control defaultValue={project.budget}   {...register("budget")}/>
                <Form.Label For="workload">Workload:</Form.Label>
                <Form.Control defaultValue={project.workload}  {...register("workload")}/>
                <Form.Label For="completionTime">Completion Time:</Form.Label>
                <Form.Control defaultValue={project.completionTime}  {...register("completionTime")} />
                <Form.Label For="contributors">contributors:</Form.Label>
                <Form.Control defaultValue={project.contributors?.toString()} {...register("contributors")} />
                <Form.Control type="submit" />
            </Form>
      </Popup>)
    }
    return (
        <div className='ManageProject'>
            <div>
            <Task id = {props.project.id}/>
            <EditForm project = {props.project}/>       
            <Button onClick = {DeleteProject}>Delete</Button>
            </div>
        </div>
    )
}
function Task(props){
    const baseUrl = "localhost:4000/api"
    const[tasks, setTasks] = useState([]);
     async function getTasks(){
        var tasks = await fetchProjectTask()
        setTasks(tasks);
    }
    async function fetchProjectTask() {
/*         var ProjectsUrl = `${baseUrl}/Projects/id/Task`;
        return await fetch(ProjectsUrl)
      .then(res => res.json()) */
      var tasks = [
        {
            'id' : 1,
            'taskname': "add css to application"

        },
        {
            'id' : 2,
            'taskname': "create api to acess star war data base",
        }
    ]
    return tasks
  }
    useEffect(() => {getTasks()}, []);
    
    const TasksHtml = tasks.map((task) =>
        <h4>task: {task.taskname}</h4>);
    return(
        <div>
            {TasksHtml}
        </div>
    )

}
export default ManageProject