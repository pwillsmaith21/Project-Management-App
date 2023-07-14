import React, {useEffect,useState} from 'react';
import { useForm, SubmitHandler, get } from "react-hook-form"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';

function Registration() {
    const {register,handleSubmit} = useForm();
    const baseUrl = "localhost:4000/api"
    const createUserUrl = `${baseUrl}/users`
    const[user, setUser] = useState([])

    const headers = { 'Content-type': 'application/json; charset=UTF-8'}
    const navigate = useNavigate();

    async function getUser(){
        var user = await fetchUser()
        setUser(user);
    }
    
    async function fetchUser() {
        /*
        var ProjectsUrl = `${baseUrl}/user/id`;
        return await fetch(ProjectsUrl)
          .then(res => res.json()) */
          var user = 
                {
                    'id' : 1,
                    'email': "pwillsmaith@gmail.com",
                    'password' : "guest21",
                    'name': "Willsmaith",
                    'role': "Non Manager",
                    'jobTitle': "Software Engineer" 
        
                }
            return user
            }
    function SubmitForm(userJson){
        PostUser(userJson);
        console.log("Usercreated succesfully")
        getUser();
        navigate(`/Home/${user.id}`,{replace:true})


    }
    function PostUser(userJson){
        var updateJson ={
            method: 'PUT',
            body: JSON.stringify(userJson),
            headers:headers
        }
        /* fetch(createUserUrl,updateJson)
        .then((response) => response.json())
        .then((json) => console.log(json)); */
        console.log(JSON.stringify(userJson))
        console.log(`User created sucessfull`)
    }

  return(
        <div className="register">
            <Form className="mb-3" onSubmit={handleSubmit((data) => SubmitForm(data))}>
                <Form.Label For="name">Name:</Form.Label>
                <Form.Control defaultValue="Name" {...register("name")} />
                <Form.Label For="email">Email:</Form.Label>
                <Form.Control defaultValue="Email" {...register("email")} />
                <Form.Label For="password">Password:</Form.Label>
                <Form.Control defaultValue="Password"{...register("password")}/>
                <Form.Label For="jobtitle">Job Title:</Form.Label>
                <Form.Control defaultValue="Job" {...register("jobtitle")} />
                <Form.Label For="Access">Acess level:</Form.Label>
                <Form.Control defaultValue="Acess"{...register("Access")}/>
                <Form.Control type="submit" />
        </Form>
        </div>
    )
}
export default Registration