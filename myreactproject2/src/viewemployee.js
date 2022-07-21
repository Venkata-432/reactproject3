import { Component } from "react";
import EmployeeService from "./employeeservice";


class ViewEmployee extends Component{

    state={
     id:this.props.match.params.id,
     employee:{}
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(res=>{
            console.log("employee details by id = ",res.data);
             this.setState({employee:res.data});
        })
    }

    render(){
        return(
            <div>
                <div>Employee details</div>
                <div>
                    <label>Name : </label>
                    <div>{this.state.employee.name}</div>
                </div>
                <div>
                    <label>Password : </label>
                    <div>{this.state.employee.password}</div>
                </div>
                <div>
                    <label>Email : </label>
                    <div>{this.state.employee.email}</div>
                </div>
                <div>
                    <label>Adrress : </label>
                    <div>{this.state.employee.address}</div>
                </div>
            </div>
        );
    }
    
}
export default ViewEmployee;