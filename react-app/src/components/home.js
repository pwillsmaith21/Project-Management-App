import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import { useForm, SubmitHandler } from "react-hook-form"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';


 function Home(){
    const baseUrl = "localhost:4000/api"
    const[projects, setProjects] = useState([]);
     async function getProjects(){
        var projects = await fetchProjects()
        setProjects(projects);
    }
    async function fetchProjects() {
/*         var ProjectsUrl = `${baseUrl}/Projects`;
        return await fetch(ProjectsUrl)
      .then(res => res.json()) */
      var projects = [
        {
            'id' : 1,
            'projectname': "Online Store App",
            'teamSize' : 7,
            'budget' : 8000,
            'workload' : 'Light',
            'completionTime' : '2Weeks',
            'contributors': [
                "Akul Shah", "Willsmaith pochette"
            ]
    
        },
        {
            'id' : 2,
            'projectname': "Star War app",
            'teamSize' : 17,
            'budget' : 80000,
            'workload' : 'Heavy',
            'completionTime' : '3 Weeks',
            'contributors': [
                "james paul", "William pochette"
            ]
    
        }
    ]
    return projects
  }
    useEffect(() => {getProjects()}, []);
    
    const ProjectsHtml = projects.map((project) =>
    <div>
        <h3>Project Name : {project.projectname}</h3>
        <h3>Team Size : {project.teamSize}</h3>
        <h3> Budget : {project.budget}</h3>
        <h3> Workload : {project.workload} </h3>
        <h3> Completion Time : {project.completionTime}</h3>
       <h3>Contributors : {project.contributors.toString()}</h3>
       <ManageProject project = {project}/>
    </div>);
    return(
        <div>
            <h1>Projects</h1>
            {ProjectsHtml}
        </div>
    )

}
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
            <EditForm project = {props.project}/>
            <Button onClick = {DeleteProject}>Delete</Button>
            </div>
        </div>
    )
}

export default Home;