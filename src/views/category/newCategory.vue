<template>
  <main class="client-page">
    <div class="d-flex align-items-center">
        <div class="container">
            <div class="justify-content-center anime fade-in-y fast forgot row">
                <div class="box-input-auth p-3 rounded col-9 col-sm-7 col-md-5 col-lg-4">
                    <div class="">
                        <form @submit.prevent="createUser">
                            <div class="input-fild-box form-group">
                                <label for="">عنوان</label>
                                <input type="text" v-model="form.title" class="mt-2 form-control " placeholder="نام"
                                    name="title" id="">
                                <ul v-if="errors.title" class="text-danger d-flex">
                                    <li v-for="error in errors.title" :key="error.id">
                                        <small>{{errors.title[0]}}</small>
                                    </li>
                                </ul> 
                            </div>
                            <div class="input-fild-box form-group">
                                <label for="">لینک</label>
                                <input type="text" v-model="form.slug" class="mt-2 form-control " placeholder="نام"
                                    name="slug" id="">
                                <ul v-if="errors.slug" class="text-danger d-flex">
                                    <li v-for="error in errors.slug" :key="error.id">
                                        <small>{{errors.slug[0]}}</small>
                                    </li>
                                </ul> 
                            </div>
                            <div class="input-fild-box form-group">
                                <label for="">توضیحات</label>
                                <input type="text" v-model="form.description" class="mt-2 form-control " placeholder="نام"
                                    name="title" id="">
                                <ul v-if="errors.description" class="text-danger d-flex">
                                    <li v-for="error in errors.description" :key="error.id">
                                        <small>{{errors.description[0]}}</small>
                                    </li>
                                </ul> 
                            </div>

                            <div class="input-fild-box form-group">
                                <label for="">چیکارست ؟</label>
                                <select class="form-control" name="role" id="cars" v-model="parents">
                                    <option value="3"  selected id="cars">کاربر ساده</option>
                                    <option value="2" id="cars">ادمین</option>
                                </select>
                            </div>

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
    name: "newCategories",
    data(){
        return{
            form: {
                title: "",
                slug: "",
                description: "",
            },
            errors: {},
            parents: {}
        }
    }
}
</script>

<style>

</style>