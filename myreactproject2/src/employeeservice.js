import axios from "axios";

const url="http://localhost:10000/whatsappboot";

class EmployeeService{

    createEmployee(emp){
        return axios.post(url+"/createProfile",emp);
    }

    getAllEmployee(){
        return axios.get(url+"/allProfile");
    }

    getEmployeeById(id){
        return axios.get(url+"/viewProfile/"+id);
    }

    updateEmployeeById(id,emp){
        return axios.put(url+"/editProfile/"+id,emp);
    }

    deleteEmployeeById(id){
        return axios.delete(url+"/deleteProfile/"+id);
    }
}

export default new EmployeeService();