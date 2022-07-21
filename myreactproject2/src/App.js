import './App.css';
import { Route, BrowserRouter as Router ,Switch } from 'react-router-dom';
import RegistrationComponent from './registration';
import HomeComponent from './home';
import LoginComponent from './login';
import DisplayAllRecords from './displayallrecords';
import ViewEmployee from './viewemployee';
import UpdateEmployee from './updateemployee';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={HomeComponent}></Route>
            <Route path="/registration" exact component={RegistrationComponent}></Route>
            <Route path="/login" exact component={LoginComponent}></Route>
            <Route path="/displayallrecords" exact component={DisplayAllRecords}></Route>
            <Route path="/viewemployee/:id" exact component={ViewEmployee}></Route>
            <Route path="/updateemployee/:id" exact component={UpdateEmployee}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
