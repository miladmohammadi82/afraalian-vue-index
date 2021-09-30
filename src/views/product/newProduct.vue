<template>
   <main class="client-page">
        <div class="d-flex align-items-center">
            <div class="container">

                        <div class="">
                            <form @submit.prevent="cerateProduct">
                                
                                <div class="input-fild-box form-group">
                                    <label for="">نام محصول</label>
                                    <input type="text" v-model="form.name" class="mt-2 form-control  "
                                        placeholder="نام محصول" name="name" id="">
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
                                    <label for="">قیمت محصول</label>
                                    <input type="text" v-model="form.price" class="mt-2 form-control "
                                         placeholder="قیمت محصول" name="price" id="">
                                    
                                    <ul v-if="errors.price" class="text-danger d-flex">
                                        <li v-for="error in errors.price" :key="error.id">
                                            <small>{{errors.price[0]}}</small>
                                        </li>
                                    </ul> 
                                </div>

                                <div class="input-fild-box form-group">
                                    <label for="">قیمت قبلی محصول</label>
                                    <input type="text" v-model="form.previous_price" class="mt-2 form-control "
                                        placeholder="قیمت قبلی محصول" name="previous_price" id="">
                                    
                                    <ul v-if="errors.previous_price" class="text-danger d-flex">
                                        <li v-for="error in errors.previous_price" :key="error.id">
                                            <small>{{errors.previous_price[0]}}</small>
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
                                        <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
                                            <i class="fa fa-picture-o"></i> انتخاب
                                        </a>
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
                                    <label for="">تصویر های گالری</label>
                                    <div class="list-group-item">

                                        <div class="input-group">
                                            <span class="input-group-btn">
                                            <a id="lfm-gl" data-input="thumbnail-gl" data-preview="holder" class="btn btn-primary">
                                                <i class="fa fa-picture-o"></i> انتخاب
                                            </a>
                                            </span>
                                            <input id="thumbnail-gl" v-model="form.image_gallery1" class="form-control" type="text" name="image_gallery1">
                                        </div>
                                        <img id="holder" style="margin-top:15px;max-height:100px;" />
                                        
                                        <ul v-if="errors.image_gallery1" class="text-danger d-flex">
                                            <li v-for="error in errors.image_gallery1" :key="error.id">
                                                <small>{{errors.image_gallery1[0]}}</small>
                                            </li>
                                        </ul> 
                                    </div>
                                    <div class="list-group-item">
                                        <div class="input-group">
                                            <span class="input-group-btn">
                                            <a id="lfm-gl2" data-input="thumbnail-gl2" data-preview="holder" class="btn btn-primary">
                                                <i class="fa fa-picture-o"></i> انتخاب
                                            </a>
                                            </span>
                                            <input id="thumbnail-gl2" v-model="form.image_gallery2"  class="form-control" type="text" name="image_gallery2">
                                        </div>
                                        <img id="holder" style="margin-top:15px;max-height:100px;" />
                                       
                                       <ul v-if="errors.image_gallery2" class="text-danger d-flex">
                                            <li v-for="error in errors.image_gallery2" :key="error.id">
                                                <small>{{errors.image_gallery2[0]}}</small>
                                            </li>
                                        </ul> 
                                    </div>
                                    <div class="list-group-item">
                                        <div class="input-group">
                                            <span class="input-group-btn">
                                            <a id="lfm-gl3" data-input="thumbnail-gl3" data-preview="holder" class="btn btn-primary">
                                                <i class="fa fa-picture-o"></i> انتخاب
                                            </a>
                                            </span>
                                            <input id="thumbnail-gl3" v-model="form.image_gallery3" class="form-control" type="text" name="image_gallery3">
                                        </div>
                                        <img id="holder" style="margin-top:15px;max-height:100px;" />
                                        
                                        <ul v-if="errors.image_gallery3" class="text-danger d-flex">
                                            <li v-for="error in errors.image_gallery3" :key="error.id">
                                                <small>{{errors.image_gallery3[0]}}</small>
                                            </li>
                                        </ul> 
                                    </div>
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
    name: "newProduct",
    data(){
        return{
            form: {
                name: "",
                slug: "",
                price: "",
                description: "",
                categories: [],
                previous_price: "",
                index_image: "",
                image_gallery1: "",
                image_gallery2: "",
                image_gallery3: "", 
            },
            errors: {},
            categories: {}
        }
    },
    methods: {
        cerateProduct(){
            apiAdmin.createProduct(this.form)
            .catch(error => {
                    if (error.response.status === 422) {
                    this.errors = error.response.data.errors
                }
            }) 
            this.$router.push({ name: 'Products' })
            this.$store.dispatch('loadProducts');
        }
    },
    components: {
     'editor': Editor
    },
    mounted(){
        apiAdmin.getCategoriesProduct()
        .then(data => {
            this.categories = data.data
            
        })
    }
}
</script>

<style>

</style>