import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Menu from './Menu';
import Error from './Error'
const Home = ()=>{
  return (
    <div>
<h1>Inside Home</h1>
    </div>
  )
}
const About = ()=>{
  return (
    <div>
<h1>Inside About</h1>
    </div>
  )
}
const Contact = ()=>{
  return (
    <div>
<h1>Inside Contact</h1>
    </div>
  )
}
const Routing = ()=>{
return (
  <BrowserRouter>
<Menu/>
<Switch>
<Route path="/" exact component={Home}/>
<Route path="/contact" component={Contact}/> 
<Route path="/about" component={About}/>
<Route component={Error}/>
</Switch>
  </BrowserRouter>
)
}



export default Routing;