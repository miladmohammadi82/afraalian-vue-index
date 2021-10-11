<template>
   <main class="client-page">
        <div class="d-flex align-items-center">
            <div class="container">

                        <div class="">
                            <form @submit.prevent="cerateArticle">
                                
                                <div class="input-fild-box form-group">
                                    <label for="">عنوان مطلب</label>
                                    <input type="text" v-model="form.name" class="mt-2 form-control  "
                                        placeholder="عنوان مطلب" name="name" id="">
                                    <ul v-if="errors.name" class="text-danger d-flex">
                                        <li v-for="error in errors.name" :key="error.id">
                                            <small>{{errors.name[0]}}</small>
                                        </li>
                                    </ul> 
                                    
                                </div>

                                <div class="input-fild-box form-group">
                                    <label for="">لینک</label>
                                    <input type="text" v-model="form.slug" class="mt-2 form-control "
                                        placeholder="لینک" name="slug" id="">
                                    
                                    <ul v-if="errors.slug" class="text-danger d-flex">
                                        <li v-for="error in errors.slug" :key="error.id">
                                            <small>{{errors.slug[0]}}</small>
                                        </li>
                                    </ul> 
                                </div>

                                <div class="input-fild-box form-group">
                                    <label for="">بازدیدها</label>
                                    <input type="text" v-model="form.hit" class="mt-2 form-control "
                                         placeholder="بازدیدها" name="price" id="">
                                    
                                    <ul v-if="errors.hit" class="text-danger d-flex">
                                        <li v-for="error in errors.hit" :key="error.id">
                                            <small>{{errors.hit[0]}}</small>
                                        </li>
                                    </ul> 
                                </div>

                                <div class="input-fild-box form-group">
                                    <label for="">توضیحات</label>
                                    <!-- <textarea id="editor" class="mt-2 form-control "
                                        placeholder="توضیحات" name="description" ></textarea> -->
                                    
                                    <editor
                                        v-model="form.description"
                                        placeholder="توضیحات" name="description"
                                        api-key="n0nsi1n8i73cwvpqkucdgegq6ul8eybpcyqo2z5i90f4mj7z"
                                        :init="{
                                            height: 500,
                                            menubar: false,
                                            rtl: true,
                                            plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                            ],
                                            toolbar:
                                            'undo redo | formatselect | bold italic backcolor | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist outdent indent | removeformat | help'
                                        }"
                                    />
                                    <ul v-if="errors.description" class="text-danger d-flex">
                                        <li v-for="error in errors.description" :key="error.id">
                                            <small>{{errors.description[0]}}</small>
                                        </li>
                                    </ul> 
                                </div>


                                <div class="input-fild-box form-group">
                                    <label for="">انتخاب دسته بندی</label>
                                    <select class="chosen-select form-control" v-model="form.categories" placeholder="دسته بندی را انتخاب کنید" name="categories[]" multiple>
                                        <!-- @foreach ($categories as $cat_id => $cat_name) -->
                                            <option v-for="(cat_name, cat_id) in categories" :key="cat_name.id" :value="cat_id">{{ cat_name }}</option>
                                        <!-- @endforeach -->
                                    </select>
                                     
                                </div>

                                <div class="input-fild-box form-group">
                                    <label for="">تصویر شاخص</label>
                                    <div class="input-group">
                                        <span class="input-group-btn">
                                        <input id="lfm" type="file" @change="changeIndex_image" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
                                            <i class="fa fa-picture-o"></i> انتخاب
                                        
                                        </span>
                                        <input id="thumbnail" v-model="form.index_image" class="form-control" type="text" name="index_image">
                                    </div>
                                    <img id="holder" style="margin-top:15px;max-height:100px;" />
                                    
                                    <ul v-if="errors.index_image" class="text-danger d-flex">
                                        <li v-for="error in errors.index_image" :key="error.id">
                                            <small>{{errors.index_image[0]}}</small>
                                        </li>
                                    </ul> 
                                </div>

                                

                                <div class="input-fild-box form-group">
                                    <button type="submit" class="btn btn-success w-100">ورود</button>
                                </div>

                                <ul class="login-link">
                                    <li>
                                        <router-link to="/login"><i class="fas fa-user"></i>&nbsp;وارد شوید</router-link>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>

        </div>
    </main>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import apiAdmin from "../../apis/api-admin";

export default {
    name: "newArticle",
    data(){
        return{
            form: {
                name: "",
                slug: "",
                index_image: "",
                description: "",
                hit: "",
                categories: {},
            },
            errors: {},
            categories: {}
        }
    },
    methods: {
        cerateArticle(){
            apiAdmin.cerateArticle(this.form)
            .then(()=>{
                this.$router.push({ name: 'Articles' })
                this.$store.dispatch('loadArticles');
            })
            .catch(error => {
                    if (error.response.status === 422) {
                    this.errors = error.response.data.errors
                }
            }) 
        },
        changeIndex_image(e){
            let file = e.target.files[0];
            let reader  = new FileReader();
            reader.onloadend = () => {
                this.form.index_image = reader.result
            }

            reader.readAsDataURL(file)
        },
        getCategories(){
            apiAdmin.getCategoriesArticle()
            .then(data => {
                this.categories = data.data 
            })
        }
    },
    components: {
     'editor': Editor
    },
    mounted(){
        this.getCategories();
    }
}
</script>

<style>

</style>