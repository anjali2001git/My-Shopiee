import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../data";
import {mobile} from "../responsive"
const Container=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
    ${mobile({
      display:"none",
   })}
    `
const Arrow=styled.div`
   z-index:2;
   height:50px;
   width:50px;
   background-color:#fff7f7;
   border-radius:50%;
   display:flex;
   align-items:center;
   justify-content:center;
   position:absolute;
   top:0;
   bottom:0;
   left:${props=>props.direction === "left" && "10px"};
   right:${props=>props.direction === "right" && "10px"};
   margin:auto;
   cursor:pointer;
   opacity:0.5;
`
const Wrapper=styled.div`
  height:100%;
  display:flex;
  transition:all 1.5s ease;
  transform:translate(${(props)=>props.slideIndex* -100}vw);
  `
const Slide=styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;  
  background-color:#${props=>props.bg}
`
const ImgContainer=styled.div`
  flex:1;
  margin-left:70px;
  height:100%;
`
const Image=styled.img`
    height:90%;
`
const InfoContainer=styled.div`
  flex:1;
  padding:50px;
`
const Title=styled.h1`
font-size:70px;
`
const Desc=styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
`
const Button=styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
`

const Slider = () => {
    const [slideIndex, setslideIndex] = useState(0);
     const handleClick=(direction)=>{
         if(direction==="left"){
             setslideIndex(slideIndex>0?slideIndex-1:2)
         }else{
             setslideIndex(slideIndex<2?slideIndex+1:0)
         }
     }

    return (
    <Container>
       <Arrow direction="left" onClick={()=>handleClick("left")}>
          <ArrowLeftOutlined/>
       </Arrow>
       <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item)=>(
       <Slide bg={item.bg} key={item.id}>
         <ImgContainer>
           <Image src={item.img}/>
         </ImgContainer>
        <InfoContainer>
           <Title> {item.title}</Title>
           <Desc> {item.desc}</Desc>
           <Button> SHOP NOW</Button>
        </InfoContainer>
       </Slide>
         ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("left")}>
          <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider