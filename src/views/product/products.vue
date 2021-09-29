<template>
  <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">محصولات این وبسایت</h3>
                        <a href="{{ route('newProductPage.admin.panel') }}" class="btn btn-success mt-4">
                            <i class="fas fa-user-plus"></i>&nbsp;افزودن محصول جدید
                        </a>
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
                                    <th>تارییخ ساخت</th>
                                </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td><img width="50px" height="50px" src=""></td>
                                        <td></td>
                                        <td>
                                        
                                           
                                           
                                        </td>
                                        <td>
                                           
                                                <a href=""
                                                    class="border-0"><span class="badge badge-success">تایید شده</span></a>
                                     
                                           
                                                <a href=""><span
                                                        class="badge badge-danger">تایید نشده</span></a>
                                            
                                        </td>
                                        <td></td>
                                        <td>
                                            <a href=""
                                                class="btn btn-primary">
                                                <i class="fas fa-edit"></i>
                                            </a>&nbsp;
                                            
                                               
                                                <button type="submit" class="btn btn-danger">
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
export default {

}
</script>

<style>

</style>