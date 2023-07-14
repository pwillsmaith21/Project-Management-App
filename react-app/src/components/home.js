import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import ManageProject from '../manageproject';
import { useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';


 function Home(){
    const baseUrl = "localhost:4000/api"
    const[projects, setProjects] = useState([]);
    const[user, setUser] = useState([])
    const{userId} = useParams();
     async function getProjects(){
        var projects = await fetchProjects()
        setProjects(projects);
    }
    async function getUser(){
        var user = await fetchUser()
        setUser(user);
    }
    

    async function fetchProjects() {
/*       var ProjectsUrl = `${baseUrl}/Projects/id`;
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
  
async function fetchUser() {
/*       var ProjectsUrl = `${baseUrl}/User/id`;
    return await fetch(ProjectsUrl)
  .then(res => res.json()) */
  var user = 
        {
            'id' : 1,
            'email': "pwillsmaith@gmail.com",
            'password' : "guest21",
            'name': "Willsmaith pochette",
            'role': "Non Manager",
            'jobTitle': "Software Engineer" 

        }
    return user
    }
    useEffect(() => {getProjects()}, []);
    useEffect(() => {getUser()},[])
    
    const ProjectsHtml = projects.map((project) =>
    <div>
        <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
        <Accordion.Header>
        <Link to ={`/project/${project.id}`} > 
            <h4>
                {project.projectname}
            </h4>
        </Link>
        </Accordion.Header>

        <Accordion.Body>
            <p1>Team Size : {project.teamSize}<br></br></p1>
            <p1> Budget : {project.budget}<br></br></p1>
            <p1> Workload : {project.workload} <br></br></p1>
            <p1> Completion Time : {project.completionTime}<br></br></p1>
            <p1>Contributors : {project.contributors.toString()}<br></br></p1>
            <Task id = {project.id}/>
       </Accordion.Body>
       </Accordion.Item>
       </Accordion>
       <ManageProject project = {project}/>
       
    </div>);

    return(
        <div className='Home'>
            <section clasName= "user">
                <h4>
                    {user.name}
                </h4>
            </section>
            <h3>Projects</h3>
            {ProjectsHtml}
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
/*         var ProjectsUrl = `${baseUrl}/Projects/props.id/Tasks`;
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
        <p1>task: {task.taskname}<br></br></p1>);
    return(
        <div>
            {TasksHtml}
        </div>
    )

}

export default Home;