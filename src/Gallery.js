import React from 'react';
import  './SecondPage.css'
import { NavLink } from 'react-router-dom';
import  Sidebaar from './Sidebaar';
import data from'./Data.json'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Gallery()
{const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <div class="container"  >
   <Sidebaar/>
    <div className="proo" style={{display:'flex',flexGrow: '1', marginRight: '20px', padding: '20px'}}>
    <div className="prr" style={{backgroundColor:''}}><span style={{marginRight:'900px',marginTop: '5px',backgroundColor:'',marginTop:'100px'}}>Gallery</span> 
    <span className="profile-details" style={{marginLeft:'720px',backgroundColor:''}} onClick={handleShow}> 
	<img src={data.users[0].profilepicture} style={{height:'35px',width:'35px',borderRadius: '50%',marginLeft:'35px'}}/>
    <span style={{marginTop:'50px', marginLeft:'px',fontSize:'15px'}} >{data.users[0].name}</span>
     </span>
     <hr/>

     <div style={{marginTop:'250px',fontSize:'70px',color:'lightgray'}}>Coming Soon</div>
     </div>
     </div>
    
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

export default Gallery;