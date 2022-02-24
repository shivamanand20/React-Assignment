
import React from 'react';
import Axios from "axios"



export default class StockComponents extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    

    render() {
        return (
            
                <div>
                    <form>
                    <input type="text" placeholder=" Enter Employeeid">Enter Employee id</input><br></br>
                    <input type="text" placeholder=" Enter Employeename">Enter Employee name</input><br></br>
                    <input type="text" placeholder=" Enter Employee sslary">Enter Employee salary</input><br></br>
                    <input type="text" placeholder=" Enter Employee age">Enter Employee age</input><br></br>
    
                    </form>
                </div>
            );
        
    }
    
   
}
//export default PostForm
