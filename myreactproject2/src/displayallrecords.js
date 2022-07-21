import { Component } from "react";
import EmployeeService from "./employeeservice";

class DisplayAllRecords extends Component{

    state={
       employees:[]
    }

    componentDidMount(){
        EmployeeService.getAllEmployee().then(res=>{
            console.log(res.data);
            this.setState({employees:res.data});
        })
    }

    updateEmployee=(id)=>{
        this.props.history.push(`/updateemployee/${id}`);
    }
    viewEmployee=(id)=>{
        this.props.history.push(`/viewemployee/${id}`);
    }
    deleteEmployee=(id)=>{
        EmployeeService.deleteEmployeeById(id).then(res=>{
            this.setState({employees:this.state.employees.filter(emp=>emp.email!==id)});
        })
    }

    render(){
        return (
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(emp1=>
                                <tr>
                                    <td>{emp1.name}</td>
                                    <td>{emp1.password}</td>
                                    <td>{emp1.email}</td>
                                    <td>{emp1.address}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={()=>this.updateEmployee(emp1.email)}>update</button>
                                        <button className="btn btn-info" onClick={()=>this.deleteEmployee(emp1.email)}>delete</button>
                                        <button className="btn btn-danger" onClick={()=>this.viewEmployee(emp1.email)}>view</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default DisplayAllRecords;