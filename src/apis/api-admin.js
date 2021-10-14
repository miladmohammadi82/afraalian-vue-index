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
    editCategory(id, form){
        return Api().put("/category/"+id, form)
    },
    editActiveCategory(id){
        return Api().get('/'+id)
    },
    deleteCategory(id){
        return Api().delete("/category/"+id)
    },
    // END categories APIs

    // start Articles APIs
    getArticles(){
        return Api().get("/article")
    },
    getCategoriesArticle(){
        return Api().get("/getCategoriesProduct")
    },
    cerateArticle(form){
        return Api().post("/article", form)
    },
    getEmployeeArticle(id){
        return Api().get("/getEmployeeArticle/"+id)
    },
    editArticle(id, form){
        return Api().put("/article/"+id, form)
    },
    editActiveArticle(id){
        return Api().get('/'+id)
    },
    deleteArticle(id){
        return Api().delete("/article/"+id)
    },
    // END Articles APIs

    // start Order APIs
    getOrder(){
        return Api().get("/getOrders")
    },
    getEmployeeOrder(id){
        return Api().get("/getEmployeeOrder/"+id)
    },
    // start Order APIs

    // start comment product APIs
    getCommentProduct(){
        return Api().get("/commentsProduct")
    },
    editActiveCommentProduct(id){
        return Api().get('/commentsProduct/'+id)
    },
    deleteProductComment(id){
        return Api().delete("/commentsProduct/delete/"+id)
    },
    // END comment product APIs


    // start comment article APIs
    getCommentArticle(){
        return Api().get("/commentsArticle")
    },
    editActiveCommentArticle(id){
        return Api().get('/commentsArticle/'+id)
    },
    // END comment article APIs
}