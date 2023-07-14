import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import ManageProject from '../manageproject';
import { useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';


 function Home(){
    const baseUrl = "http://localhost:4000/api"
    const[projects, setProjects] = useState([]);
    const[user, setUser] = useState([])
    const{id} = useParams();

     async function getProjects(){
        var projects = await fetchProjects()
        setProjects(projects);
    }
    /* async function getUser(){
        var user = await fetchUser()
        setUser(user);
    } */
    

    async function fetchProjects() {
        var ProjectsUrl = `${baseUrl}/projects/${id}`;
        return await fetch(ProjectsUrl)
        .then(res => res.json())

  }
  
async function fetchUser() {
    var ProjectsUrl = `${baseUrl}/uses/${id}`;
    return await fetch(ProjectsUrl)
    .then(res => res.json()) 
    }
    useEffect(() => {getProjects()}, []);
   // useEffect(() => {getUser()},[])
    
    const ProjectsHtml = projects.map((project) =>
    <div>
        <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
        <Accordion.Header>
        <Link to ={`/project/${project._id}`} > 
            <h4>
                {project.name}
            </h4>
        </Link>
        </Accordion.Header>

        <Accordion.Body>
            <p1>Team Size : {project.teamSize}<br></br></p1>
            <p1> Budget : {project.budget}<br></br></p1>
            <p1> Workload : {project.workload} <br></br></p1>
            <p1> Completion Time : {project.completionTime}<br></br></p1>
            {/*<p1>Contributors : {project.contributors.toString()}<br></br></p1>*/}
            <Task _id = {project._id}/>
       </Accordion.Body>
       </Accordion.Item>
       </Accordion>
       <ManageProject project = {project}/>
       
    </div>);

    return(
        <div className='Home'>
            {/*<section clasName= "user">
                <h4>
                    {user.name}
                </h4>
            </section>
    */}
            <h3>Projects</h3>
            {ProjectsHtml}
        </div>
    )

}
function Task(props){
    const baseUrl = "http://localhost:4000/api"
    const[tasks, setTasks] = useState([]);
     async function getTasks(){
        var tasks = await fetchProjectTask()
        setTasks(tasks);
    }
    async function fetchProjectTask() {
        var ProjectsUrl = `${baseUrl}/tasks/project/${props._id}`;
        return await fetch(ProjectsUrl)
       .then(res => res.json())
      /* var tasks = [
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
    */
  }
    useEffect(() => {getTasks()}, []);
    
    const TasksHtml = tasks.map((task) =>
        <p1>task: {task.description}<br></br></p1>);
    return(
        <div>
            {TasksHtml}
        </div>
    )

}

export default Home;