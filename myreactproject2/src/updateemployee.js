import { Component } from "react";
import EmployeeService from "./employeeservice";

class UpdateEmployee extends Component{

    state={
        id:this.props.match.params.id,
        name:'',
        password:'',
        email:'',
        address:''
        
    }

    changeNameEvent=(event)=>{
        this.setState({name:event.target.value});
    }
    changePasswordEvent=(event)=>{
        this.setState({password:event.target.value});
    }
    changeEmailEvent=(event)=>{
        this.setState({email:event.target.value});
    }
    changeAddressEvent=(event)=>{
        this.setState({address:event.target.value});
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(res=>{
            let employee=res.data;
            this.setState({name:employee.name,password:employee.password,email:employee.email,address:employee.address});
        })
    }

    saveRecord=(e)=>{
        let emp={name:this.state.name,password:this.state.password,email:this.state.email,address:this.state.address}

        console.log("Employee details are "+JSON.stringify(emp));
  
        EmployeeService.updateEmployeeById(this.state.id,emp).then(res=>{
           this.props.history.push(`/displayallrecords`);
        })
    }

    render(){
        return(
            <div>
                <h1>Edit Employee Details</h1>
                <div>
                    <form>
                        Name: <input type="text" value={this.state.name} onChange={this.changeNameEvent}></input><br></br>
                        Password: <input type="password" value={this.state.password} onChange={this.changePasswordEvent}></input><br></br>
                        Email: <input type="email" value={this.state.email} onChange={this.changeEmailEvent}></input><br></br>
                        Address: <input type="text" value={this.state.address} onChange={this.changeAddressEvent}></input><br></br>
                        <input type="button" value="Submit" onClick={this.saveRecord}></input>
                    </form>
                </div>
            </div>
        )
    }

}
export default UpdateEmployee;