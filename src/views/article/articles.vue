<template>
  <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">دسته بندی این وبسایت</h3>
                        <router-link :to="{name: 'newCategories'}" class="btn btn-success mt-4">
                            <i class="fas fa-user-plus"></i>&nbsp;افزودن دسته بندی جدید
                        </router-link>
                        <div class="card-tools">
                            <div class="input-group input-group-sm" style="width: 150px;">
                                <input type="text" name="table_search" class="form-control float-right" placeholder="جستجو">

                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                </div>
                            </div>

                        </div>


                    </div>
                    <!-- /.card-header -->

                    <div id="loading">
                        <vue-simple-spinner class="mt4" size="large" message="Loading..."></vue-simple-spinner>
                    </div>
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover" style="font-size: 16px;">
                            <tbody>
                                <tr>
                                    <th>آیدی</th>
                                    <th>تصویر</th>
                                    <th>عنوان مطلب</th>
                                    <th>نویسنده</th>
                                    <th>تعداد بازدیدها</th>
                                    <th>دسته بندی ها</th>
                                    <th>وضعیت</th>
                                </tr>
                                    <tr v-for="article in $store.state.articles" :key="article.id">
                                        <td>{{ article.id }}</td>
                                        <td><img :src="article.index_image" ></td>
                                        <td>{{ article.name }}</td>
                                        <td>{{ article.user.name }}</td>
                                        <td>{{ article.hit }}</td>
                                        <td>
                                           <span v-for="category in article.categories" :key="category.id" class="badge badge-primary m-1">{{ category.title }}</span>
                                        </td>
                                    
                                        <td>
                                           
                                            <a @click.prevent="editActive(article.id)" v-if="article.status == 1"
                                                class="border-0"><span class="badge badge-success">تایید شده</span></a>
                                    
                                        
                                            <a @click.prevent="editActive(category.id)" href="" v-if="article.status == 0"><span
                                                class="badge badge-danger">تایید نشده</span></a>
                                        
                                        </td>
                                        <td>
                                            <router-link :to="{name: 'editProduct', params: { id: product.id }}"
                                                class="btn btn-primary">
                                                <i class="fas fa-edit"></i>
                                            </router-link>&nbsp;
                                            
                                               
                                                <button @click.passive="deleteCategory(article.id)"  type="submit" class="btn btn-danger">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                           

                                        </td>
                                    </tr>
                              

                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->

            </div>



        </div>

    </div>
</template>

<script>
// import swal from '../../swalAlert/success'
// import Swal from 'sweetalert2'

// import apiAdmin from "../../apis/api-admin";

export default {
    name: "Categories",
    data(){
        return{
        }
    },
    methods: {
    },
    created(){
        this.$store.dispatch('loadArticles')
    },
}
</script>

<style scoped>

</style>