<template>
  <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">دسته بندی این وبسایت</h3>
                        <router-link :to="{name: 'newArticle'}" class="btn btn-success mt-4">
                            <i class="fas fa-user-plus"></i>&nbsp;افزودن
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
                                    <th>مبلغ پرداختی</th>
                                    <th>وضعیت</th>
                                    <th>وضعیت حمل ونقل</th>
                                    <th>نام سفارش دهنده</th>
                                    <th>تلفن</th>
                                    <th>تارییخ</th>
                                </tr>
                                    <tr v-for="order in $store.state.orders" :key="order.id">
                                        <td>{{ order.id }}</td>
                                        <td>{{ new Intl.NumberFormat().format(order.grand_total) }}</td>
                                        <td>
                                           <a @click.prevent="editActive(order.id)" v-if="order.status == 'paid'"
                                                class="border-0"><span class="badge badge-success">پرداخت شده</span></a>
                                    
                                        
                                            <a @click.prevent="editActive(order.id)" v-if="order.status == 'pending'"><span
                                                class="badge badge-danger">در انتضار پرداخت</span></a> 
                                        </td>
                                        <td>
                                            <a @click.prevent="editActive(order.id)" href="" v-if="order.Shipping_status == 1"
                                                class="border-0"><span class="badge badge-success">ارسال شده</span></a>
                                    
                                        
                                            <a @click.prevent="editActive(order.id)" href="" v-if="order.Shipping_status == 0"><span
                                                class="badge badge-danger">ارسال نشده</span></a> 
                                        </td>
                                        
                                        <td>{{ order.shopping_fullname }}</td>
                                        <td>{{ order.shopping_phone }}</td>
                                        <td>{{ order.created_at }}</td>
                                        
                                        <td>
                                            <router-link :to="{name: 'showOrders', params: { id: order.id }}"
                                                class="btn btn-primary">
                                                <i class="fas fa-eye"></i>
                                            </router-link>&nbsp;
                                        </td>
                                        <!-- <code>{{ order.items }}</code> -->
                                        <table class="table table-hover" style="font-size: 16px; width: 100%;">
                                            <ul v-for="item in order.items" :key="item.id" class="order-table-list">
                                                <li><span>آیدی محصول</span>: {{ item.id }}</li>
                                                <li><span>نام محصول</span>: {{ item.name }}</li>
                                                <li><span>قیمت محصول</span>: {{ new Intl.NumberFormat().format(item.price) }} تومان</li>
                                            </ul>
                                        </table>
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
import swal from '../../swalAlert/success'
// import Swal from 'sweetalert2'

import apiAdmin from "../../apis/api-admin";

export default {
    name: "Categories",
    data(){
        return{
        }
    },
    methods: {
        editActive(id){
            this.$Progress.start();
            apiAdmin.editActiveArticle(id)
            .then(() => {
                this.$store.dispatch('loadArticles')
                swal.fire({
                    icon: 'success',
                    title: 'وضعیت با موفقیت تغییر کرد'
                })
            })
            this.$Progress.finish();
        },
        
    },
    created(){
        this.$store.dispatch('loadOrders')
    },
}
</script>

<style scoped>
    img{
        width: 50px;
        height: 50px;
    }
    .order-table-list {
        background: #ffc107;
        padding: 21px;
    }
</style>