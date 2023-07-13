import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


 function Home(){
    var baseUrl = "localhost:4000/api"
    const[projects, setProjects] = useState([]);
     async function getProjects(){
        var projects = await fetchProjects()
        console.log(typeof(projects))
        console.log(projects)
        setProjects(projects);
    }
    async function fetchProjects() {
/*         var ProjectsUrl = `${baseUrl}/Projects`;
        return await fetch(ProjectsUrl)
      .then(res => res.json()) */
      var projects = [
        {
            'projectname': "Online Store App",
            'teamSize' : 7,
            'budget' : 8000,
            'Workload' : 'Light',
            'completionTime' : '2Weeks',
            'contributors': [
                "Akul Shah", "Willsmaith pochette"
            ]
    
        }
    ]
    console.log(projects)
    return projects
  }
    useEffect(() => {getProjects()}, []);
    
    console.log(projects)
    const ProjectsHtml = projects.map((project) =>
    <div>
        <h3>Project Name : {project[0]}</h3>
        <h3>Team Size : {project.teamSize}</h3>
        <h3> Budget : {project.budget}</h3>
        <h3> Workload : {project.workload} </h3>
        <h3> Completion Time : {project.completionTime}</h3>
       <h3>Contributors : {project.contributors.toString()}</h3>
    </div>);
    return(
        <div>
            <ManageProject/>
            {ProjectsHtml}
        </div>
    )

}
function ManageProject(){

    return (
        <div className='ManageProject'>
            ManageProject
        </div>
    )
}

export default Home;