import Api from './api';
export default{
    createUser(form){
        return Api().post("/user", form)
    },
    getUsers(){
        return Api().get("/user")
    },
    editUser(id, form){
        return Api().put("/user/"+id, form)
    },
    deleteUser(id){
        return Api().delete("/user"+id)
    },
    getEmployeeUser(id){
        return Api().get("/getEmployeeUser/"+id)
    }
}