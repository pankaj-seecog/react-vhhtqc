import React from 'react';
import {BrowserRouter,Link} from 'react-router-dom';
const Menu = ()=>{
return (
  <div>
<Link to="">Home</Link> | 
<Link to="/about">About</Link> | 
<Link to="/contact">Contact</Link> 
  </div>
)
}
export default Menu;
