<template>
  <main class="client-page">
        <div class="d-flex align-items-center">
            <div class="container">
                <div class="justify-content-center anime fade-in-y fast forgot row">
                    <div class="box-input-auth p-3 rounded col-9 col-sm-7 col-md-5 col-lg-4">
                        <div class="">
                            <form @submit.prevent="createUser">
                               
                                <div class="input-fild-box form-group">
                                    <label for="">نام</label>
                                    <input type="text" v-model="form.name" class="mt-2 form-control " placeholder="نام"
                                        name="name" id="">
                                    <ul v-if="errors.name" class="text-danger d-flex">
                                        <li v-for="error in errors.name" :key="error.id">
                                            <small>{{errors.name[0]}}</small>
                                        </li>
                                    </ul> 
                                </div>
                                <div class="input-fild-box form-group">
                                    <label for="">ایمیل</label>
                                    <input type="email" v-model="form.email" class="mt-2 form-control " placeholder="ایمیل" 
                                        name="email" id="">
                                    <ul v-if="errors.email" class="text-danger d-flex">
                                        <li v-for="error in errors.email" :key="error.id">
                                            <small>{{errors.email[0]}}</small>
                                        </li>
                                    </ul> 
                                </div>

                                <div class="input-fild-box form-group">
                                    <label for="">تلفن همراه</label>
                                    <input type="text" v-model="form.phone" class="mt-2 form-control "
                                        placeholder="نام کاربری" name="phone" id="">
                                    <ul v-if="errors.phone" class="text-danger d-flex">
                                        <li v-for="error in errors.phone" :key="error.id">
                                            <small>{{errors.phone[0]}}</small>
                                        </li>
                                    </ul> 
                                </div>

                                <div class="input-fild-box form-group">
                                    <label for="">چیکارست ؟</label>
                                    <select class="form-control" name="role" id="cars">
                                        <optgroup label="Swedish Cars">
                                            <option value="3"  selected id="cars">کاربر ساده</option>
                                            <option value="2" id="cars">ادمین</option>
                                        </optgroup>
                                    </select>
                                </div>

                                <div class="input-fild-box form-group">
                                    <label for="">رمز عبور</label>
                                    <input type="password" v-model="form.password" class="mt-2 form-control"
                                        placeholder="رمز عبور" name="password" id="">
                                    <ul v-if="errors.password" class="text-danger d-flex">
                                        <li v-for="error in errors.password" :key="error.id">
                                            <small>{{errors.password[0]}}</small>
                                        </li>
                                    </ul> 
                                </div>
                                <div class="input-fild-box form-group">
                                    <button type="submit" class="btn btn-success w-100">ورود</button>
                                </div>

                                <ul class="login-link">
                                    <li>
                                        <router to="/login"><i class="fas fa-user"></i>&nbsp;وارد شوید</router>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

</template>

<script>
import apiAdmin from "../../apis/api-admin";
export default {
    name: 'Newusers',
    data(){
        return{
            form: {
                name: "",
                email: "",
                phone: "",
                password: "",
                role: "",
            },
            errors: {}
        }
    },
    methods: {
        createUser(){
            apiAdmin.createUser(this.form)
                .then(()=>{
                    this.$router.push({ name: 'Login' })
                    this.$store.dispatch('loadUsers');
                })
                .catch(error => {
                  if (error.response.status === 422) {
                      this.errors = error.response.data.errors
                  }
                }) 
        }
    }
}
</script>

<style scoped>
    li{
        list-style: none;
    }
</style>