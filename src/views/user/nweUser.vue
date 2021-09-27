<template>
<br>
<br>
<br>
<br>
<br>
<br>
<h1>dcjshuc</h1>
<br>
<br>

  <main class="client-page">
        <div class="d-flex align-items-center">
            <div class="container">
                <div class="justify-content-center anime fade-in-y fast forgot row">
                    <div class="box-input-auth p-3 rounded col-9 col-sm-7 col-md-5 col-lg-4">
                        <div class="">
                            <form >
                               
                                <div class="input-fild-box form-group">
                                    <label for="">نام</label>
                                    <input type="text" class="mt-2 form-control " placeholder="نام"
                                        name="name" id="">
                                </div>
                                <div class="input-fild-box form-group">
                                    <label for="">ایمیل</label>
                                    <input type="email"  class="mt-2 form-control " placeholder="ایمیل" 
                                        name="email" id="">
                                </div>

                                <div class="input-fild-box form-group">
                                    <label for="">تلفن همراه</label>
                                    <input type="text" class="mt-2 form-control "
                                        placeholder="نام کاربری" name="phone" id="">
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
                                    <input type="password"  class="mt-2 form-control"
                                        placeholder="رمز عبور" name="password" id="">
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
export default {
    name: 'Newusers',
    data(){
        return{
            // form: {
            //     name: "",
            //     email: "",
            //     phone: "",
            //     password: "",
            // }
        }
    }
}
</script>

<style>

</style>