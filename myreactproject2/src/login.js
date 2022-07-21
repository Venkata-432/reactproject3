import { Component } from "react";

class LoginComponent extends Component{

    render(){
        return(
            <form>
                <h1>Login Page</h1>
                Email Address: <input type="text"></input><br></br>
                Password: <input type="password"></input><br></br>
                <input type="button" value="Login"></input>
           </form>
        );
    }
}
export default LoginComponent;