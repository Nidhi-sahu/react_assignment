import React from "react";
import SecondPage from './SecondPage.css'
import data from'./Data.json'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import {NavLink} from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Sidebaar from "./Sidebaar";
import ProfileSecond from "./ProfileSecond";


function Secondpage()
{
	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 return(
   <>
  
    
   <div class="container"  >
   <Sidebaar/>
    <div className="pro" style={{display:'flex'}}>
    <div className="prr" style={{}}>Profile
    
    <span className="profile-details" style={{marginLeft:'720px'}} onClick={handleShow}> 
	<img src={data.users[0].profilepicture} style={{height:'35px',width:'35px',borderRadius: '50%',marginLeft:'35px'}}/><span style={{marginTop:'50px', marginLeft:'px',fontSize:'15px'}} >{data.users[0].name}</span>
     </span>
     <hr/>

 <div style={{display:'flex'}}>
     <div  style={{marginRight:'50px',backgroundColor:''}}>
      <sapn>
      <img src={data.users[0].profilepicture} style={{height:'200px',width:'200px',borderRadius: '50%',marginLeft:'40px',marginTop:'40px'}}/>
</sapn>
<div style={{marginTop:'10px',marginLeft:'23px'}}><span>{data.users[0].name}</span></div>
<div style={{color:'grey',marginRight:'90px'}}>Username : <span style={{color:'black',marginLeft:'0px',fontSize:'18px'}}>{data.users[0].username}</span></div>
<div style={{color:'grey',marginRight:'10px'}}>e-mail  : <span style={{color:'black',marginLeft:'0px',fontSize:'18px'}}>{data.users[0].email} </span> </div>
<div style={{color:'grey',marginRight:'20px'}}>phone  : <span style={{color:'black',fontSize:'18px'}}>{data.users[0].phone} </span> </div>
< div style={{color:'grey',marginRight:'20px'}}> Website : <span style={{color:'black',marginLeft:'0px',fontSize:'20px'}} > {data.users[0].website}</span></div>
<hr/>
<div style={{color:'grey'}}>Company
<div style={{color:'grey'}}>  Name : <span style={{color:'black',marginLeft:'0px',fontSize:'20px'}}> {data.users[0].company.name}</span></div></div>
<div style={{color:'grey',marginTop:'10px'}}> catchPhrase : <span style={{color:'black',marginLeft:'0px',fontSize:'20px'}}>{data.users[0].company.catchPhrase} </span></div>
<div style={{color:'grey',marginTop:'10px',marginLeft:'25px'}}> bs : <span style={{color:'black',marginLeft:'0px',fontSize:'20px'}}>{data.users[0].company.bs} </span></div>
</div>
<hr class="vertical-line" />
      <div  style={{marginLeft:'10px',width:'100%',backgroundColor:''}}>
     {/* <div style={{}}> */}
<div style={{marginTop:'20px',color:'grey',paddingRight:'370px'}}> Address:
<div style={{color:'grey',marginTop:'20px',paddingLeft:'100px'}}> Street : <span style={{color:'black',fontSize:'20px'}}>{data.users[0].address.street}</span></div>
<div style={{color:'grey',marginTop:'10px',paddingLeft:'80px'}}> Suite : <span style={{color:'black',fontSize:'20px'}}>{data.users[0].address.suite}</span></div>
<div style={{color:'grey',marginTop:'10px',paddingLeft:'95px'}}> City: <span style={{color:'black',fontSize:'20px'}}>{data.users[0].address.city}</span></div>
<div style={{color:'grey',marginTop:'10px',paddingLeft:'80px'}}> Zipcode: <span style={{color:'black',fontSize:'20px'}}>{data.users[0].address.zipcode}</span></div>
</div>

<div>
  <img src="https://snazzy-maps-cdn.azureedge.net/assets/1243-xxxxxxxxxxx.png?v=20220106114208" style={{marginTop:'20px',borderRadius:'40px',paddingLeft:'50px'}}></img>
  <span style={{fontSize:'12px',color:"grey",marginLeft:'270px'}}>Lat:<span style={{color:"black",fontSize:'12px'}}>{data.users[0].address.geo.lat}</span></span>
  <span style={{fontSize:'12px',color:"grey",marginLeft:'40px'}}>Lng :<span style={{color:"black",fontSize:'12px'}}>{data.users[0].address.geo.lng}</span></span>

</div>
</div>
</div>
</div>
</div>
{/* ---------------------------------------------model---------------------------------------------------------- */}

      <Modal show={show} onHide={handleClose} style={{marginLeft:'30%',marginTop:'50px'}}>
        
        <Modal.Body style={{borderRadius:'20px',width:'300px',height:'300px' }}>
			<Container style={{width:'40px',height:'200px'}}>
             <Card style={{border:'none'}}>
              <div>
            <div> <img src={data.users[0].profilepicture} style={{ height: '120px', width: '120px', borderRadius: '50%',marginLeft:'20px' }} /><br/></div>
            <div style={{whiteSpace: 'nowrap',marginLeft:'20px',fontSize:'20px',marginTop:'10px'}}>{data.users[0].name}</div>
            <div style={{whiteSpace: 'nowrap',marginLeft:'25px',color:'grey'}}><span>{data.users[0].email}</span> </div>

            <div style={{display:'flex',marginTop:'15px'}}><span  style={{}}><img src={data.users[2].profilepicture} style={{ height: '30px', width: '30px', borderRadius: '50%',marginLeft:'10px' }} /></span>
            <span style={{whiteSpace: 'nowrap',marginLeft:'5px',fontSize:'15px',marginTop:'3px'}}><NavLink to ="/profile" style={{color:'black',listStyle:'none',outline:'none' ,textDecoration: 'none'}}>{data.users[2].name} </NavLink></span> </div>

            <div style={{display:'flex',marginTop:'19px'}}><span  style={{}}><img src={data.users[3].profilepicture} style={{ height: '30px', width: '30px', borderRadius: '50%',marginLeft:'10px' }} /></span>
            <span style={{whiteSpace: 'nowrap',marginLeft:'5px',fontSize:'15px',marginTop:'3px'}}>{data.users[3].name}</span> </div>
          
            </div>
           
           
			 </Card>
			</Container>

		</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" style={{marginTop:'40px',marginRight:'200px',marginBottom:'20px',borderRadius:'10px'}} onClick={handleClose}>
           <NavLink to ="/"  style={{color:'white',listStyle:'none',outline:'none' ,textDecoration: 'none'}}>Sign out</NavLink> 
          </Button>
          
        </Modal.Footer>
      </Modal>

    </div>
   
		

    
   </>
 )   
}


export default Secondpage;




