import React from 'react';
import {NavLink} from 'react-router-dom'
import './SecondPage.css'
function Sidebaar()
{
    return(
      <>
      <div  class="container">
        <div class="sidebar" >
  <nav class="sidebar_menu" >
				<span className="sp">
						
						<span className="sp"><p><NavLink to ="/second" style={{color:'white',listStyle:'none',outline:'none' ,textDecoration: 'none'}}>Profile</NavLink></p></span>
					</span>
				
					<span className="sp">
						
						<span className="sp"><p><NavLink to ="/Post" style={{color:'white',listStyle:'none',outline:'none' ,textDecoration: 'none'}}>Posts</NavLink></p></span>
					</span>
				
					<span className="sp">
					
						<span className="sp"><p><NavLink to ="/gallery" style={{color:'white',listStyle:'none',outline:'none' ,textDecoration: 'none'}}>Gallery</NavLink></p></span>
					</span>
				
					<span className="sp">
						
						<span className="sp"><NavLink to ="/Todo" style={{color:'white',listStyle:'none',outline:'none' ,textDecoration: 'none'}}>ToDo</NavLink></span>
					</span>
		</nav>
    </div>
    </div>
      
      </> 
        
    )
}

export default Sidebaar;