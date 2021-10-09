import Api from './api';
export default{
    // Start user APIs
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
        return Api().delete("/user/"+id)
    },
    getEmployeeUser(id){
        return Api().get("/getEmployeeUser/"+id)
    },
    // END user APIs


    // Start Product APIs

    getProducts(){
        return Api().get("/product")
    },
    editProduct(id, form){
        return Api().put("/product/"+id, form)
    },
    createProduct(form){
        return Api().post("/product", form)
    },
    getCategoriesProduct(){
        return Api().get("/getCategoriesProduct")
    },
    getEmployeeProduct(id){
        return Api().get("/getEmployeeProduct/"+id)
    },
    deleteProduct(id){
        return Api().delete("/product/"+id)
    },
    // END Product APIs

    // start categories APIs
    getCategories(){
        return Api().get("/category")
    },
    getParentCategory(){
        return Api().get("/getParentIdCategory")
    },
    createCategory(form){
        return Api().post("/category", form)
    },
    getEmployeeCategory(id){
        return Api().get("/getEmployeeCategory/"+id)
    },

    // END categories APIs

}