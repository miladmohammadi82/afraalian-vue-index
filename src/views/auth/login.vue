<template>
  <div class="login-box">
    <div class="login-logo">
      <a><b>ورود به پنل مدیرت</b></a>
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">فرم زیر را تکمیل کنید و ورود بزنید</p>

        <form method="post">
          <div class="input-group mb-3">
            <input type="email" v-model="form.email" name="email" class="form-control" placeholder="ایمیل">
            <div class="input-group-append">
              <span class="fa fa-envelope input-group-text"></span>
            </div>
            <ul v-if="errors.email" class="text-danger d-flex">
              <li v-for="error in errors.email" :key="error.id">
                <small>{{errors.email[0]}}</small>
              </li>
            </ul>
          </div>
          <div class="input-group mb-3">
            <input type="password" v-model="form.password" name="password" class="form-control" placeholder="رمز عبور">
            <div class="input-group-append">
              <span class="fa fa-lock input-group-text"></span>
            </div>
            <ul v-if="errors.password" class="text-danger d-flex">
              <li v-for="error in errors.password" :key="error.id">
                <small>{{errors.password[0]}}</small>
              </li>
            </ul>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="checkbox icheck">
                <label>
                  <input type="checkbox"> یاد آوری من
                </label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-4">
              <button @click.prevent="login" type="submit" class="btn btn-primary btn-block btn-flat">ورود</button>
            </div>
            <!-- /.col -->
          </div>
        </form>
        <p class="mb-1">
          <a href="#">رمز عبورم را فراموش کرده ام.</a>
        </p>
      </div>
      <!-- /.login-card-body -->
    </div>
  </div>
</template>

<script>
import apiAdmin from "../../apis/api-admin";

export default {
  name: "login",
  data(){
    return{
      form: {
        email: "",
        password: "",
      },
      errors: {},
    }
  },
  methods: {
    login(){
      apiAdmin.login(this.form)
      .then((response)=> {
        localStorage.setItem('token', response.data.token);
        let user_serialized = JSON.stringify(response.data.user);
        localStorage.setItem('user', user_serialized);
        this.$router.push({name: "Home"});
        this.emitter.emit("login", true);
      });
    }
  },
}
</script>

<style scoped>

</style>