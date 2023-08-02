import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import data from'./Data.json'
import {NavLink} from 'react-router-dom'

const Firstpage =() =>
{
 
 return(
    <>
<div style={{ position: 'relative' }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"  style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}><path fill="#5000ca" fill-opacity="1" d="M0,128L60,160C120,192,240,256,360,288C480,320,600,320,720,293.3C840,267,960,213,1080,202.7C1200,192,1320,224,1380,240L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    <div className="body">
<Container className="con" style={{ position: 'relative', zIndex: 1 }}>
<Card className="car" style={{width:'45%', height:'550px',marginTop:'60px',marginLeft:'330px',borderRadius:"25px",boxShadow:'0px 0px 4px grey', position: 'absolute', zIndex: '1'}}>
    <h4 style={{marginTop:'40px', textAlign: "center"}} >
        Select an account</h4>
      <Card.Body>
       
      <div style={{borderBottom:'1px solid #d3d3d3',height: '50px', display: 'flex', alignItems: 'center'}}><span style={{ marginLeft: '20px' }} ><img src={data.users[0].profilepicture} style={{height:'35px',width:'35px',borderRadius: '50%',marginRight:'20px',marginTop:'10px'}}/><NavLink to ="/second" style={{color:'black',listStyle:'none',outline:'none' ,textDecoration: 'none'}}>{data.users[0].name}</NavLink></span></div>
      <br></br>
      <div style={{borderBottom:'1px solid #d3d3d3',height: '44px',display: 'flex', alignItems: 'center'}}><span style={{ marginLeft: '20px'  }} ><img src={data.users[1].profilepicture} style={{height:'35px',width:'35px',borderRadius: '50%',marginRight:'40px'}}/><span style={{ marginRight:'10px' }}>{data.users[1].name}</span></span></div>
      <br></br>
      <div style={{borderBottom:'1px solid #d3d3d3',height: '44px',display: 'flex', alignItems: 'center'}}><span style={{ marginLeft: '20px' }} ><img src={data.users[2].profilepicture} style={{height:'35px',width:'35px',borderRadius: '50%',marginRight:'7px'}}/><span style={{ marginLeft:'15px' }}>{data.users[2].name}</span></span></div>
      <br></br>
      <div style={{borderBottom:'1px solid #d3d3d3',height: '44px',display: 'flex', alignItems: 'center'}}><span style={{ marginLeft: '20px' }} ><img src={data.users[3].profilepicture} style={{height:'35px',width:'35px',borderRadius: '50%',marginRight:'20px'}}/>{data.users[3].name}</span></div>
      <br></br>
      <div style={{borderBottom:'1px solid #d3d3d3',height: '44px',display: 'flex', alignItems: 'center'}}><span style={{ marginLeft: '20px' }} ><img src={data.users[4].profilepicture} style={{height:'35px',width:'35px',borderRadius: '50%',marginRight:'20px'}}/>{data.users[4].name}</span></div>
      <br></br>
      <div style={{borderBottom:'1px solid #d3d3d3',height: '44px',display: 'flex', alignItems: 'center'}}><span style={{ marginLeft: '20px' }} ><img src={data.users[5].profilepicture} style={{height:'35px',width:'35px',borderRadius: '50%',marginRight:'20px'}}/>{data.users[5].name}</span></div>
      <br></br>
      <div style={{borderBottom:'1px solid #d3d3d3',height: '44px',display: 'flex', alignItems: 'center'}}><span style={{ marginLeft: '20px' }} ><img src={data.users[6].profilepicture} style={{height:'35px',width:'35px',borderRadius: '50%',marginRight:'20px'}}/>{data.users[6].name}</span></div>
      <br></br>
      </Card.Body>
    </Card>
</Container> 
</div>
</div>

</>
)   
}


export default  Firstpage;