import React, {useEffect,useState} from 'react';
import { useForm, SubmitHandler, get } from "react-hook-form"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';

function Registration() {
    const {register,handleSubmit} = useForm();
    const baseUrl = "http://localhost:4000/api"
    const createUserUrl = `${baseUrl}/users`
    const[user, setUser] = useState([])

    const headers = { 'Content-type': 'application/json; charset=UTF-8'}
    const navigate = useNavigate();

    async function createUser(userJson){
        var user = await PostUser(userJson)
        setUser(user);
        if(user?._id != undefined){
        navigate(`/Home/${user._id}`,{replace:false})
        }
    }
    
    async function SubmitForm(userJson){
      
        createUser(userJson); 
    }
    async function PostUser(userJson) {
        var postUserUrl = `${baseUrl}/users`;
        var postJson ={
          method: 'POST',
          body: JSON.stringify(userJson),
          headers: { 'Content-type': 'application/json; charset=UTF-8'}
      }
      return await fetch(postUserUrl,postJson)
      .then(res => res.json())
  
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
                <Form.Label For="manager">manager:</Form.Label>
                <Form.Select {...register("manager")}>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </Form.Select>
                <Form.Control type="submit" />
        </Form>
        </div>
    )
}
export default Registration