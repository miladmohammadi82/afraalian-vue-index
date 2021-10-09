<template>
  <main class="client-page">
    <div class="d-flex align-items-center">
        <div class="container">
            <div class="justify-content-center anime fade-in-y fast forgot row">
                <div class="box-input-auth p-3 rounded col-9 col-sm-7 col-md-5 col-lg-4">
                    <div class="">
                        <form @submit.prevent="createCategory" method="POST">
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
                                <label for="">انخاب دسته بندی پدر</label>
                                <select class="form-control" name="role" id="cars" v-model="form.parent_id">
                                    <option v-for="(parent_title, parent_id) in parents" :key="parent_title.id" :value="parent_id" id="cars">{{ parent_title }}</option>
                                </select>
                            </div>

                            <div class="input-fild-box form-group">
                                <button type="submit" class="btn btn-success w-100">ورود</button>
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
import apiAdmin from "../../apis/api-admin";
import swal from '../../swal'

export default {
    name: "newCategories",
    data(){
        return{
            form: {
                title: "",
                slug: "",
                description: "",
                parent_id: "",
            },
            errors: {},
            parents: {}
        }
    },
    methods: {
        getParents(){
            apiAdmin.getParentCategory()
            .then(data => {
                this.parents = data.data 
            })
        },
        createCategory(){
            apiAdmin.createCategory(this.form)
            .then(()=> {
                this.$router.push({ name: 'Categories' })
                this.$store.dispatch('loadCategories');
                swal.fire({
                    icon: 'success',
                    title: 'دسته بندی با موفقیت ایجاد شد'
                })
            })
            .catch(error => {
                    if (error.response.status === 422) {
                    this.errors = error.response.data.errors
                }
            }) 
        }
    }, 
    mounted(){
        this.getParents();
    },
}
</script>

<style>

</style>