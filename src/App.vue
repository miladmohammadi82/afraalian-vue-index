<template>
<div class="content-wrapper">
  <div class="wrapper">

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand bg-white navbar-light border-bottom">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fa fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">خانه</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">تماس</a>
      </li>
    </ul>

    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="جستجو" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </form>

    <!-- Right navbar links -->
    <ul class="navbar-nav mr-auto">
      <!-- Messages Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="fa fa-comments-o"></i>
          <span class="badge badge-danger navbar-badge">3</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-left">
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 ml-3 img-circle">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  حسام موسوی
                  <span class="float-left text-sm text-danger"><i class="fa fa-star"></i></span>
                </h3>
                <p class="text-sm">با من تماس بگیر لطفا...</p>
                <p class="text-sm text-muted"><i class="fa fa-clock-o mr-1"></i> 4 ساعت قبل</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle ml-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  پیمان احمدی
                  <span class="float-left text-sm text-muted"><i class="fa fa-star"></i></span>
                </h3>
                <p class="text-sm">من پیامتو دریافت کردم</p>
                <p class="text-sm text-muted"><i class="fa fa-clock-o mr-1"></i> 4 ساعت قبل</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle ml-3">
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  سارا وکیلی
                  <span class="float-left text-sm text-warning"><i class="fa fa-star"></i></span>
                </h3>
                <p class="text-sm">پروژه اتون عالی بود مرسی واقعا</p>
                <p class="text-sm text-muted"><i class="fa fa-clock-o mr-1"></i>4 ساعت قبل</p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">مشاهده همه پیام‌ها</a>
        </div>
      </li>
      <!-- Notifications Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="fa fa-bell-o"></i>
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-left">
          <span class="dropdown-item dropdown-header">15 نوتیفیکیشن</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fa fa-envelope ml-2"></i> 4 پیام جدید
            <span class="float-left text-muted text-sm">3 دقیقه</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fa fa-users ml-2"></i> 8 درخواست دوستی
            <span class="float-left text-muted text-sm">12 ساعت</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fa fa-file ml-2"></i> 3 گزارش جدید
            <span class="float-left text-muted text-sm">2 روز</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">مشاهده همه نوتیفیکیشن</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#"><i
                class="fa fa-th-large"></i></a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4" v-show="$store.state.isLogin">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">پنل مدیریت</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar" style="direction: ltr" >
      <div style="direction: rtl">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img v-if="$store.state.currentUser" :src="$store.state.currentUser.profile_photo_url" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <a href="#" class="d-block" v-if="$store.state.currentUser">{{ $store.state.currentUser.name }}</a>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library -->
            <li class="nav-item has-treeview menu-open">
              <router-link :to="{name: 'Home'}" class="nav-link">
                <i class="nav-icon fa fa-dashboard"></i>
                <p>
                  داشبورد
                </p>
              </router-link>
              
            </li>
            
            <li class="nav-item has-treeview">
              <a @click.prevent="openaLisetings = !openaLisetings" href="#" class="nav-link">
                <i class="nav-icon fa fa-cogs"></i>
                <p>
                  مدیریت
                  <i class="right fa fa-angle-left"></i>
                </p>
              </a>
              <ul v-show="openaLisetings" class="nav nav-treeview">
                <li class="nav-item">
                  <router-link :to="{name: 'Users'}" class="nav-link">
                    <i class="fa fa-circle-o nav-icon"></i>
                    <p>کاربران</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{name: 'Categories'}" class="nav-link">
                    <i class="fa fa-circle-o nav-icon"></i>
                    <p>دسته بندی ها</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <a href="pages/charts/flot.html" class="nav-link">
                    <i class="fa fa-circle-o nav-icon"></i>
                    <p>محصولات</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/charts/inline.html" class="nav-link">
                    <i class="fa fa-circle-o nav-icon"></i>
                    <p>مقالات</p>
                  </a>
                </li>
              </ul>
            </li>
            
            <li class="nav-item has-treeview menu-open">
              <router-link :to="{name: 'Orders'}" class="nav-link">
                <i class="nav-icon fa fa-jedi-order"></i>
                <p>
                  سفارشات
                </p>
              </router-link>
            </li>

            <li class="nav-item has-treeview">
              <a @click.prevent="openaListComment = !openaListComment" href="#" class="nav-link">
                <i class="nav-icon fa fa-comments-alt"></i>
                <p>
                  نظرات
                  <i class="right fa fa-angle-left"></i>
                </p>
              </a>
              <ul v-show="openaListComment" class="nav nav-treeview">
                <li class="nav-item">
                  <router-link :to="{name: 'productComments'}" class="nav-link">
                    <i class="fa fa-circle-o nav-icon"></i>
                    <p>محصولات</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{name: 'articleComments'}" class="nav-link">
                    <i class="fa fa-circle-o nav-icon"></i>
                    <p>مقالات</p>
                  </router-link>
                </li>

              </ul>
            </li>


            <li class="nav-item has-treeview menu-open">
              <router-link :to="{name: 'Address'}" class="nav-link">
                <i class="nav-icon fa fa-address-book"></i>
                <p>
                  آدرس ها
                </p>
              </router-link>
            </li>

            <li class="nav-item">
              <a class="nav-link text-danger" style="cursor: pointer" @click.prevent="logout">
                <i class="nav-icon fa fa-portal-exit"></i>
                <p>
                  خروج
                </p>
              </a>
            </li>

          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
    </div>
    <!-- /.sidebar -->
  </aside>

<router-view></router-view>
 
  <footer class="main-footer">
    <strong>CopyLeft &copy; 2018 <a href="http://github.com/hesammousavi/">حسام موسوی</a>.</strong>
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
  </div>
</div>
</template>
<script>
// @ is an alias to /src
import apiAdmin from "./apis/api-admin";

export default {
  data(){
    return{
      openaLisetings: false,
      openaListComment: false,
    }
  },
  methods: {
    logout(){
      apiAdmin.logout()
          .then(()=> {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            this.$router.push({ name: 'Login' });
          })
    }
  }
}
</script>


<style lang="stylus" >
  .router-link-active{
    color: #ffffff;
    background-color: #007bff !important;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  }
</style>
