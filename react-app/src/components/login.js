import React, {useState} from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';

function Login(props) {

    const {register,handleSubmit} = useForm();
    const baseUrl = "localhost:4000/api"
    const[user, setUser] = useState([]);
    const[isLogin, loginUser] = useState(false)
    const navigate = useNavigate();

     /* async function getUser(){
        var user = await fetchUser()
        setuser(user);
        loginUser(true);
    } */
     function fetchUser(email) {
/*      var ProjectsUrl = `${baseUrl}/User/${props.id}`;
        return await fetch(ProjectsUrl)
        .then(res => res.json()) */
      var user = 
        {
            'id' : 1,
            'email': "pwillsmaith@gmail.com",
            'password' : "guest21",
        }
    return user
  }
  function validateUser(userInfo,user){
        if(userInfo.email != user.email){
            return false;
        }
        else if (userInfo.password != user.password){
            return false;
        }
        else{
            return true;
        }
  }
       
    function login(userInfo){
       var user = fetchUser(userInfo.email)
        console.log(userInfo)
        if(validateUser(userInfo,user)){
            setUser(user);
            loginUser(true);
            console.log("UserLogin succesfully")
            navigate(`/Home/${user.id}`,{replace:true})
        }
    }
    return(
      <div className="mb-3">
        <Form className="mb-3" onSubmit={handleSubmit((data) => login(data))}>
                <Form.Label For="email">Email:</Form.Label>
                <Form.Control defaultValue="Email" {...register("email")} />
                <Form.Label For="password">Password:</Form.Label>
                <Form.Control defaultValue="Password"{...register("password")}/>
                <Form.Control type="submit" />
        </Form>
        <Link to ={`/Register`} > <Button>Sign up</Button></Link>
      </div>
    )
}
export default Login