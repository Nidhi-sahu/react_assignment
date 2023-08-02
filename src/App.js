import Firstpage from './Firstpage';
 import './App.css';
import Secondpage from './Secondpage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import{Routes} from 'react-router-dom'
import Post from './Post';
import Gallery from './Gallery';
import Todo from './Todo';
import ProfileSecond from './ProfileSecond';

function App() {
  return (
    <>
    <div className="App">
    <Routes> 
    <Route path="/" element={<Firstpage/>}/>
    <Route path="/profile" element={<ProfileSecond/>}/>
    <Route path="/second" element={<Secondpage/>}/>
    <Route path= "/post" element={<Post/>}/>
    <Route path= "/gallery" element={<Gallery/>}/>
    <Route path= "/Todo" element={<Todo/>}/>
   </Routes>
     
    </div>
    
    
    
   
   </>
  );
}

export default App;
