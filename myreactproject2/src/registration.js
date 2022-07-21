import { Component } from "react";
import EmployeeService from "./employeeservice";

class RegistrationComponent extends Component{

    state={
        name:'',
        password:'',
        email:'',
        address:''
    }
    changeNameEvenet=(event)=>{
        this.setState({name:event.target.value});
    }
    changePasswordEvenet=(event)=>{
        this.setState({password:event.target.value});
    }
    changeEmailEvenet=(event)=>{
        this.setState({email:event.target.value});
    }
    changeAddressEvenet=(event)=>{
        this.setState({address:event.target.value});
    }

    saveRecord=(e)=>{
        let emp=({name:this.state.name,password:this.state.password,email:this.state.email,address:this.state.address});

        console.log("Employee details are "+JSON.stringify(emp));
  
        EmployeeService.createEmployee(emp).then(res=>{
            console.log("Employee Created "+res);
        })
    }

    render(){
        return(
            <div>
                <h3>Registration Page</h3>
                <form>
                    Name: <input type="text" value={this.state.name} onChange={this.changeNameEvent}></input><br></br>
                    Password: <input type="password" value={this.state.password} onChange={this.changePasswordEvent}></input><br></br>
                    Email: <input type="email" value={this.state.email} onChange={this.changeEmailEvent}></input><br></br>
                    Address: <input type="text" value={this.state.address} onChange={this.changeAddressEvent}></input><br></br>
                    <input type="button" value="Register" onClick={this.saveRecord}></input>
                </form>
            </div>
        )
    }
}

export default RegistrationComponent;