import styled from "styled-components"
import { mobile } from "../responsive"

const Container=styled.div`
   weight:100vw;
   height:100vh;
   background-image:linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.2)),url("https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80");
   background-repeat:no-repeat;
   background-size: cover;
   display:flex;
   justify-content:center;
   align-items:center;
   object-fit:cover;

`
const Wrapper=styled.div`
    width:40%;
    padding:20px;
    background-color:white;
    ${mobile({
        width:"75%",
     })}
`
const Form=styled.form`
     display:flex;
     flex-wrap:wrap;
`
const Title=styled.h1`
    font-size:24px;
    font-weight:500;
`
const Input=styled.input`
     flex:1;
     min-width:40%;
     margin:20px 10px 0px 0px;
     padding:10px;
`
const Agreement=styled.span`
   font-size:12px;
   margin:20px; 0px;
`
const Button=styled.button`
   width:40%;
   bordeer:none;
   padding:15px 20px;
   background-color:teal;
   color:white;
   cursor:pointer;

`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account,I cannot to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register