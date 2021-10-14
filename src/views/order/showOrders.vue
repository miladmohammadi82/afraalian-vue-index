<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12">
          
        <div class="card">
          <div class="card-header">
            <div class="card-tools">
              <div class="input-group input-group-sm" style="width: 150px;">
                <input type="text" name="table_search" class="form-control float-right" placeholder="جستجو">

                <div class="input-group-append">
                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                </div>
              </div>
            </div>
            <br>
            <br>
            <table class="table table-bordered table-striped">
              <tbody>
                <tr class="comment-table-mobile">
                  <td class="comment-table-mobile-td">
                    <h4>آیدی</h4>&nbsp;
                    {{ order.id }}
                  </td>
                  <td class="comment-table-mobile-td">
                    <h4>آیدی سفارش دهنده</h4>&nbsp;
                    {{ order.user_id }}
                  </td>
                  <td class="comment-table-mobile-td">
                    <h4>مبلغ پرداختی</h4>&nbsp;
                    {{ new Intl.NumberFormat().format(order.grand_total) }} تومان 
                  </td>
                  <td class="comment-table-mobile-td">
                    <h4>وضعیت</h4>&nbsp;
                    <a @click.prevent="editActive(order.id)" v-if="order.status == 'paid'"
                      class="border-0"><span class="badge badge-success">پرداخت شده</span></a>
          
              
                    <a @click.prevent="editActive(order.id)" v-if="order.status == 'pending'"><span
                      class="badge badge-danger">در انتضار پرداخت</span></a> 
                  </td>
                  <td class="comment-table-mobile-td">
                    <h4>وضعیت حمل ونقل</h4>&nbsp;
                    <a @click.prevent="editActive(order.id)" href="" v-if="order.Shipping_status == 1"
                      class="border-0"><span class="badge badge-success">ارسال شده</span></a>
          
              
                    <a @click.prevent="editActive(order.id)" href="" v-if="order.Shipping_status == 0"><span
                      class="badge badge-danger">ارسال نشده</span></a>
                  </td>
                  <td class="comment-table-mobile-td">
                    <h4>نام سفارش دهنده</h4>&nbsp;
                    {{ order.shopping_fullname }}
                  </td>
                  <td class="comment-table-mobile-td">
                    <h4>آدرس</h4>&nbsp;
                    {{ order.shopping_address }}
                  </td>
                  <td class="comment-table-mobile-td">
                    <h4>شهر</h4>&nbsp;
                    {{ order.shopping_city }}
                  </td>
                  <td class="comment-table-mobile-td">
                    <h4>استان</h4>&nbsp;
                    {{ order.shopping_state }}
                  </td>
                  <td class="comment-table-mobile-td">
                    <h4>تلفن</h4>&nbsp;
                    {{ order.shopping_phone }}
                  </td>
                  <td class="comment-table-mobile-td">
                    <h4>کدپستی</h4>&nbsp;
                    {{ order.shopping_zipcode }}
                  </td>
                  <td class="comment-table-mobile-td">
                    <h4>تارییخ</h4>&nbsp;
                    {{ order.created_at }}
                  </td>
                  
                  

                </tr>                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  td.comment-table-mobile-td {
    display: flex !important;
    justify-content: space-between;
  }
  .content-table th, .content-table td {
    padding: 12px 15px;
  }
  h4{
    font-size: 18px;
  }
</style>

<script>
import apiAdmin from "../../apis/api-admin";

export default {
  name: "showOrders",
  data(){
    return{
      order: {},
    }
  },
  methods: {
    getEmployeeOrder(){
      apiAdmin.getEmployeeOrder(this.$route.params.id)
      .then((response) => {
        this.order = response.data
        console.log(response.data)
      })
      .catch((errors) => {
        console.log(errors)
      })
    },
  },
  mounted() {
    this.getEmployeeOrder();
  }
}

</script>

