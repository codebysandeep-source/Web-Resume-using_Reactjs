import React, { Component, Fragment } from 'react'
import Appleft from './components/Appleft'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Resume from './components/Resume'
import About from './components/About'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'


export default class App extends Component {
    
    render() {
        return (
            <Fragment>
         <div className="container-fluid">
             
                 <div className="row">
                     <div className="col-lg-3 bg-light leftmv">
                        <div className="app-left text-center">
                        <Appleft/>
                        </div>
                     </div>
                   
                     <Router>
                     <div className="col-lg-9 bg-white pt-3">
                     <div className="app-right">
                        <Navbar/>
                        <Switch>
                        <Route exact path="/">
                            <Projects/>
                        </Route>
                        <Route exact path="/resume">
                            <Resume/>
                        </Route>
                        <Route exact path="/about" component={About} />
                        {/*or
                         <Route exact path="/about">
                            <About/>
                        </Route> */}
                        <Route>
                            <Redirect to="/" />
                        </Route>
                        </Switch>
                       </div>
                     </div>
                     </Router>
                     <div className="bottom-border"/>
                 </div>
             </div>
         
        
        </Fragment>
        )
    }
}
