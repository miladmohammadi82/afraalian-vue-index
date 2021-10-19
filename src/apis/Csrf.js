import Api from './api';

export default {
    getCookie(){
         Api().get("/csrf-cookie");
    }
}