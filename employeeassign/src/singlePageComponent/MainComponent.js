import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import AddEmployeeComponent from './AddEmployeeComponent';
import UpdateComponent from './UpdateComponent';
import GetEmployeeComponent from './GetEmployeeComponent'

export default class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Mayank"
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <HeaderComponent></HeaderComponent>
                    <ContentComponent></ContentComponent>
                    <FooterComponent></FooterComponent>
                </div>
            </BrowserRouter>
        )
    }
}

function ContentComponent() {
    return (
        <div style={{border: "5px solid red", padding: "10px", margin: "20px", height: "600px", overflow: "auto"}}>
        <nav>
        <Link style={{margin: "10px"}} to="post">Add Employee</Link>
        </nav>

            <Route exact path="/" component={GetEmployeeComponent}></Route>
            <Route exact path="/about" component={AboutComponent}></Route>
            <Route exact path="/help" component={HelpComponent}></Route>
             <Route exact path="/update/:employeeid" component={UpdateComponent}></Route> 
             <Route exact path="/post" component={AddEmployeeComponent}></Route>
           
        </div>
    )
}

function HeaderComponent() {
    return (
        <div>
            <h1>This is Header Component</h1>
            <nav>
                <Link style={{margin: "10px"}} to="/">Home</Link>
                <Link style={{margin: "10px"}} to="help">Get</Link>
                <Link style={{margin: "10px"}} to="about">About</Link>
            </nav>
        </div>
    )
}

function FooterComponent() {
    return <h3>This is Footer Component</h3>
}

// function HomeComponent() {
//     return <h3>This is Home Component</h3>
// }

function AboutComponent() {
    return <h3>This is About Component</h3>
}

function HelpComponent() {
    return <h3>This is Help Component</h3>
}

