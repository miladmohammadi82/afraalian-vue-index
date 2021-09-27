import Api from './api';
export default{
    createUser(form){
        return Api().post("/user", form)
    },
    getUsers(){
        return Api().get("/user")
    },
    deleteUser(id){
        return Api().delete("/user"+id)
    }
}