<template>
  <div class="container">
    <table class="content-table">
      <thead>
      <tr>
        <th>نام نویسنده</th>
        <th>متن نظر</th>
        <th>برای محصول</th>
        <th>وضغیت</th>
        <th>تاریخ</th>
        <th>عملیات</th>

      </tr>
      </thead>
      <tbody class="tbody-mobile">
      <tr class="comment-table-mobile" v-for="comment in comments" :key="comment.id">
        <td class="comment-table-mobile-td">&nbsp;
          {{ comment.name }}
        </td>
        <td class="comment-table-mobile-td">&nbsp;
          {{ comment.body }}
        </td>
        <td class="comment-table-mobile-td">&nbsp;
          {{ comment.product_id }}
        </td>
        <td class="comment-table-mobile-td">&nbsp;
          <a @click.prevent="editActive(comment.id)" href="" v-if="comment.status == 1"
             class="border-0"><span class="badge badge-success">ارسال شده</span></a>


          <a @click.prevent="editActive(comment.id)" href="" v-if="comment.status == 0"><span
              class="badge badge-danger">ارسال نشده</span></a>
        </td>
        <td class="comment-table-mobile-td">&nbsp;
          {{ comment.created_at }}
        </td>

        <td class="comment-table-mobile-td">&nbsp;
          <button @click.prevent="deleteComment(comment.id)" class="btn btn-primary"><i class="fa fa-trash-alt"></i>
          </button>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import apiAdmin from "../../../apis/api-admin";
import swal from "../../../swalAlert/success";
import Swal from "sweetalert2";

export default {
  name: "productComponents",
  data() {
    return {
      comments: {},
    }
  },
  methods: {
    loadComments() {
      apiAdmin.getCommentProduct()
          .then((response) => {
            this.comments = response.data
          })
    },
    editActive(id) {
      this.$Progress.start();
      apiAdmin.editActiveCommentProduct(id)
          .then(() => {
            this.$store.dispatch('loadArticles')
            swal.fire({
              icon: 'success',
              title: 'وضعیت با موفقیت تغییر کرد'
            })
            this.loadComments();
          })
      this.$Progress.finish();
    },
    deleteComment(id) {
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
        if (result.isConfirmed) {
          apiAdmin.deleteProductComment(id)
          .then(() => {
            Swal.fire(
                'حذف شد!',
                'این کاربر با موفقیت حذف شد',
                'success'
            )
            this.loadComments();
          })
        }
      })
    }
  },
  mounted() {
    this.loadComments();
  }
}
</script>

<style scoped>
.content-table th, .content-table td {
  padding: 12px 15px;
}

.content-table tr th {
  text-align: center;
  color: #777;
}

.content-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9rem;
  width: 100%;
}

.comment-table-mobile-td h4 {
  display: none;
}

.content-table tbody tr, .content-table tbody tr td {
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  text-align: center;
  color: #777;
}

.content-table tbody tr {
  border: 1px solid rgba(0, 0, 0, .1);
  margin: 0 0 24px -1px;
  text-align: right;
  width: 100%;
  border-collapse: separate;
  border-radius: 5px;
}

.content-table thead tr {
  border: 1px solid rgba(0, 0, 0, .1);
  margin: 0 0 24px -1px;
  text-align: right;
  width: 100%;
  border-collapse: separate;
  border-radius: 5px;
  box-shadow: inset 0px 4px 17px -6px rgb(0 0 0 / 16%);
}

@media (max-width: 992px) {
  .content-table thead {
    display: none;
  }

  .content-table tbody tr td h4 {
    display: inline-flex;
  }

  td.comment-table-mobile-td {
    display: flex !important;
    justify-content: space-between;
  }

  .content-table tbody tr {
    margin: 30px 0;
    display: block;
  }

  .content-table tbody tr td {
    display: block;
    text-align: right;
  }
}

@media (max-width: 570px) {
  tbody.tbody-mobile tr {
    border: 1px solid #c3bfbf;
  }

  td.comment-table-mobile-td {
    display: flex !important;
    justify-content: space-between;
  }
}
</style>