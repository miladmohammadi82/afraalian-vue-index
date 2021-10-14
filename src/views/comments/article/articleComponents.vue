<template>
  <div class="container">
    <table class="content-table">
      <thead>
      <tr>
        <th>نام نویسنده</th>
        <th>متن نظر</th>
        <th>برای طلب</th>
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
export default {
  name: "articleComments"
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