<template>
  <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">محصولات این وبسایت</h3>
                        <router-link :to="{name: 'newProduct'}" class="btn btn-success mt-4">
                            <i class="fas fa-user-plus"></i>&nbsp;افزودن محصول جدید
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
                                    <th>عنوان</th>
                                    <th>تصویر</th>
                                    <th>لینک</th>
                                    <th>دسته بندی ها</th>
                                    <th>وضعیت</th>
                                </tr>
                                    <tr v-for="product in $store.state.products" :key="product.id">
                                        <td>{{ product.id }}</td>
                                        <td>{{ product.name }}</td>
                                        <td><img width="50px" height="50px" :src="product.index_image"></td>
                                        <td>{{ product.slug }}</td>
                                        <td>
                                        
                                           <span v-for="category in product.categories" :key="category.id" class="badge badge-success m-1">{{ category.title }}</span>
                                           
                                        </td>
                                        <td>
                                           
                                            <a href="" v-if="product.active == 1"
                                                class="border-0"><span class="badge badge-success">تایید شده</span></a>
                                    
                                        
                                            <a href="" v-if="product.active == 0"><span
                                                class="badge badge-danger">تایید نشده</span></a>
                                        
                                        </td>
                                        <td>
                                            <router-link :to="{name: 'editProduct', params: { id: product.id }}"
                                                class="btn btn-primary">
                                                <i class="fas fa-edit"></i>
                                            </router-link>&nbsp;
                                            
                                               
                                                <button @click.passive="deleteProduct(product.id)" type="submit" class="btn btn-danger">
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
import Swal from 'sweetalert2'
import apiAdmin from "../../apis/api-admin";

export default {
    methods: {
        deleteProduct(id){
            Swal.fire({
                title: 'آیا این کاربر حذف شود ؟',
                text: "این کار غیر قابل بازگشت است!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'بله, خذف کن',
                cancelButtonText: 'انصراف'
            }).then((result) => {
                apiAdmin.deleteProduct(id)
                 .then(()=> {
                    
                    if (result.isConfirmed) {
                        Swal.fire(
                            'حذف شد!',
                            'این کاربر با موفقیت حذف شد',
                            'success'
                        )
                    }
                    
                    this.$store.dispatch('loadProducts')
                  })
                
            })

        }
    },
    name: 'Products',
    created(){
        this.$store.dispatch('loadProducts')
    }
}
</script>

<style scoped>
img{
    width: 50px !important;
    height: 50px !important;
} 
</style>