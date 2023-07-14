import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Managetask from './managetask.js'
import { useParams } from 'react-router-dom';


 function Project(){
    const baseUrl = "localhost:4000/api"
    const[project, setProject] = useState([]);
    const{projectId} = useParams();

     async function getProject(){
        var project = await fetchProject()
        setProject(project);
    }
    async function fetchProject() {
/*      var ProjectsUrl = `${baseUrl}/Project/${projectId}`;
        return await fetch(ProjectsUrl)
        .then(res => res.json()) */
      var project = 
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
    
        }
    return project
  }
    useEffect(() => {getProject()}, []);
    
    return(
        <div>
        <h3>Project Name : {project.projectname}</h3>
        <h3>Team Size : {project.teamSize}</h3>
        <h3> Budget : {project.budget}</h3>
        <h3> Workload : {project.workload} </h3>
        <h3> Completion Time : {project.completionTime}</h3>
       <h3>Contributors : {project.contributors?.toString()}</h3>
        <Tasks projectId = {project.id}/>
        </div>
    )

}

function Tasks(props){
    const baseUrl = "localhost:4000/api"
    const projectTasksUrl   = `${baseUrl}/projects/${props.projectId}`
    const[tasks, setTasks] = useState([]);
     async function getTasks(){
        var tasks = await fetchProjectTask()
        setTasks(tasks);
    }
    async function fetchProjectTask() {
        /*
        return await fetch(projectTasksUrl)
      .then(res => res.json()) */
      var tasks = [
        {
            'id' : 1,
            'taskname': "add css to application",
            'description': "to increase the aesthetic",
            'personassign': "Willsmaith Pochette",
            'duedate': "7/13/2023",
            'estimateduration': "2 weeks"

        },
        {
            'id' : 2,
            'taskname': "create api to acess star war data base",
            'description': "to obtain star war data for website",
            'personassign': "Akul Shah",
            'duedate': "7/13/2023",
            'estimateduration': "2 weeks"
        }
    ]
    return tasks
  }
    useEffect(() => {getTasks()}, []);
    
    const TasksHtml = tasks.map((task) =>
        <div>
            <h3>task: {task.taskname}</h3>
            <h3>desciption: {task.description}</h3>
            <h3> Assignment: {task.personassign}</h3>
            <h3> Due Date: {task.duedate} </h3>
            <h3> Duration (estimated): {task.estimateduration}</h3>
            <Managetask task = {task}/>
        </div>)
    return(
        <div>
            {TasksHtml}
        </div>
    )

}

export default Project;