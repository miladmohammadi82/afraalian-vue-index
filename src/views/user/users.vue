<template>
  <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">کاربران وبسایت</h3>
                        <router-link to="/users/newUser" append class="btn btn-success mt-4">
                            <i class="fas fa-user-plus"></i>&nbsp;افزودن کاربر
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
                                    <th>ایدی</th>
                                    <th>کاربر</th>
                                    <th>تاریخ ثبت نام</th>
                                    <th>نقش</th>
                                    <th>عملیات</th>
                                </tr>
                                
                                    <tr v-for="user in $store.state.users" :key="user.id">
                                        <td>{{ user.id }}</td>
                                        <td>{{ user.name }}</td>
                                        <td>{{ user.created_at }}</td>
                                        <td>
                                            <span v-if="user.role == 3" class="badge badge-secondary">کاربر ساده</span>
                                            <span v-if="user.role == 2" class="badge badge-info">ادمین</span>
                                            <span v-if="user.role == 1" class="badge badge-warning">مالک</span>
                                        </td>
                                        <td>
                                            <router-link @click.prevent="this.$store.commit('editUser', user)" :to="{name: 'editUser', params: { id: user.id }}" class="btn btn-primary">
                                                <i class="fas fa-edit"></i>
                                            </router-link>&nbsp;
                                          
                                                <button @click.passive="deleteUser" type="submit" class="btn btn-danger">
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
    name: 'Users', 
    created(){
        this.$store.dispatch('loadUsers')
    }
}
</script>

<style>

</style>