<template>
  <div class="container">
    <table class="content-table">
    <thead>
      <tr>
        <th>نام نویسنده</th>
        <th>ایمیل نویسنده</th>
        <th>متن نظر</th>
        <th>وضغیت</th>
      </tr>
    </thead>
    <tbody class="tbody-mobile">
    <tr class="comment-table-mobile">
      <td class="comment-table-mobile-td"><h4>نام نویسنده</h4>&nbsp;
        علی محمدی 2
      </td>
      <td class="comment-table-mobile-td"><h4>ایمیل نویسنده</h4>&nbsp;
        ali@gmail.com
      </td>
      <td class="comment-table-mobile-td"><h4>متن نظر</h4>
        عااالی بود
      </td>
      <td class="comment-table-mobile-td"><h4>وضغیت</h4>&nbsp;
        <span><span class="badge badge-success">تایید شده</span></span></td>
    </tr>

    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: "productComponents"
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
.comment-table-mobile-td h4{
  display: none;
}
.content-table tbody tr, .content-table tbody tr td {
  border-bottom: 1px solid rgba(0,0,0,.1);
  text-align: center;
  color: #777;
}
.content-table tbody tr {
  border: 1px solid rgba(0,0,0,.1);
  margin: 0 0 24px -1px;
  text-align: right;
  width: 100%;
  border-collapse: separate;
  border-radius: 5px;
}
.content-table thead tr {
  border: 1px solid rgba(0,0,0,.1);
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