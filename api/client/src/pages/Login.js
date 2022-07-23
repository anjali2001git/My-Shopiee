import { useSelector } from 'react-redux'
import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { login } from "../redux/apiCalls"
import { mobile } from "../responsive"

const Container=styled.div`
   weight:100vw;
   height:100vh;
   background-image:linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.2)),url("https://wallpaperaccess.com/full/16692.jpg");
   background-repeat:no-repeat;
   background-size:cover;
   display:flex;
   justify-content:center;
   align-items:center;
   object-fit:cover;
   
`
const Wrapper=styled.div`
    width:25%;
    padding:20px;
    background-color:white;
    ${mobile({
        width:"75%",
     })}
`
const Form=styled.form`
     display:flex;
     flex-direction:column;
`
const Title=styled.h1`
    font-size:24px;
    font-weight:500;
`
const Input=styled.input`
     flex:1;
     min-width:40%;
     margin:10px 0px;
     padding:10px;
`

const Button=styled.button`
   width:40%;
   bordeer:none;
   padding:15px 20px;
   background-color:teal;
   color:white;
   cursor:pointer;
   margin-botton:10px;
   &:disabled{
   color:green;
   cursor:not-allowed;
  
}
`
const Link=styled.a`
    margin:5px 0px;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;

`
const Error=styled.span`
color:red;
`

const Login = () => {
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
    const {isFetching,error}=useSelector((state)=>state.user);
    

    const handleClick=(e)=>{
    e.preventDefault();
    login(dispatch,{username,password});
  }

  return (
     <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username"
             onChange={(e)=>setUserName(e.target.value)}
            />
            <Input placeholder="password"
            type="password"
             onChange={(e)=>setPassword(e.target.value)}
            />
            <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
            { error && <Error>Something went wrong...</Error>}
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login