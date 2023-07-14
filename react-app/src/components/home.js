import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import ManageProject from '../manageproject';


 function Home(){
    const baseUrl = "localhost:4000/api"
    const[projects, setProjects] = useState([]);
     async function getProjects(){
        var projects = await fetchProjects()
        setProjects(projects);
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


export default Home;