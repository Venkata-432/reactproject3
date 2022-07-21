import { Component } from "react";

class HomeComponent extends Component{

    register=()=>{
        this.props.history.push(`/registration`);
    }

    login=()=>{
        this.props.history.push(`/login`);
    }

    getAllEmployeeRecords=()=>{
        this.props.history.push(`/displayallrecords`);
    }

    render(){
        return(
            <div>
                <button className="btn btn-primary" onClick={()=>this.register()}>Register</button>&nbsp;
                <button className="btn btn-primary" onClick={()=>this.login()}>Login</button>
                <button className="btn btn-success" onClick={()=>this.getAllEmployeeRecords()}>Display All Records</button>
            </div>
        )
    }
}

export default HomeComponent;