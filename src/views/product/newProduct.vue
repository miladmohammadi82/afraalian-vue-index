<template>
   <main class="client-page">
        <div class="d-flex align-items-center">
            <div class="container">

                        <div class="">
                            <form action="{{ route('storeNew.product.admin.panel') }}" method="post">
                                
                                <div class="input-fild-box form-group">
                                    <label for="">نام محصول</label>
                                    <input type="text" class="mt-2 form-control  "
                                        placeholder="نام محصول" value="{{ old('name') }}" name="name" id="">
                                    
                                    
                                </div>

                                <div class="input-fild-box form-group">
                                    <label for="">لینک</label>
                                    <input type="text" class="mt-2 form-control "
                                        placeholder="لینک" value="{{ old('slug') }}" name="slug" id="">
                                    
                                    
                                </div>

                                <div class="input-fild-box form-group">
                                    <label for="">قیمت محصول</label>
                                    <input type="text" class="mt-2 form-control "
                                        value="{{ old('price') }}" placeholder="قیمت محصول" name="price" id="">
                                    
                                    
                                </div>

                                <div class="input-fild-box form-group">
                                    <label for="">قیمت قبلی محصول</label>
                                    <input type="text" class="mt-2 form-control "
                                        value="{{ old('previous_price') }}" placeholder="قیمت قبلی محصول" name="previous_price" id="">
                                    
                                    
                                </div>

                                <div class="input-fild-box form-group">
                                    <label for="">توضیحات</label>
                                    <!-- <textarea id="editor" class="mt-2 form-control "
                                        placeholder="توضیحات" name="description" ></textarea> -->
                                    
                                    <editor

                                        placeholder="توضیحات" name="description"
                                        api-key="n0nsi1n8i73cwvpqkucdgegq6ul8eybpcyqo2z5i90f4mj7z"
                                        :init="{
                                            height: 500,
                                            menubar: false,
                                            rtl: true,
                                            plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                            ],
                                            toolbar:
                                            'undo redo | formatselect | bold italic backcolor | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist outdent indent | removeformat | help'
                                        }"
                                    />
                                </div>


                                <div class="input-fild-box form-group">
                                    <label for="">انتخاب دسته بندی</label>
                                    <select class="chosen-select form-control" value="{{ old('categories[]') }}" placeholder="دسته بندی را انتخاب کنید" name="categories[]" multiple>
                                        <!-- @foreach ($categories as $cat_id => $cat_name) -->
                                            <option value=""></option>
                                        <!-- @endforeach -->
                                    </select>
                                </div>

                                <div class="input-fild-box form-group">
                                    <label for="">تصویر شاخص</label>
                                    <div class="input-group">
                                        <span class="input-group-btn">
                                        <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
                                            <i class="fa fa-picture-o"></i> انتخاب
                                        </a>
                                        </span>
                                        <input id="thumbnail" value="{{ old('index_image') }}" class="form-control" type="text" name="index_image">
                                    </div>
                                    <img id="holder" style="margin-top:15px;max-height:100px;" />
                                    
                                    
                                </div>

                                <div class="input-fild-box form-group">
                                    <label for="">تصویر های گالری</label>
                                    <div class="list-group-item">

                                        <div class="input-group">
                                            <span class="input-group-btn">
                                            <a id="lfm-gl" data-input="thumbnail-gl" data-preview="holder" class="btn btn-primary">
                                                <i class="fa fa-picture-o"></i> انتخاب
                                            </a>
                                            </span>
                                            <input id="thumbnail-gl" value="{{ old('image_gallery1') }}" class="form-control" type="text" name="image_gallery1">
                                        </div>
                                        <img id="holder" style="margin-top:15px;max-height:100px;" />
                                        
                                        
                                    </div>
                                    <div class="list-group-item">
                                        <div class="input-group">
                                            <span class="input-group-btn">
                                            <a id="lfm-gl2" data-input="thumbnail-gl2" data-preview="holder" class="btn btn-primary">
                                                <i class="fa fa-picture-o"></i> انتخاب
                                            </a>
                                            </span>
                                            <input id="thumbnail-gl2"  value="{{ old('image_gallery2') }}" class="form-control" type="text" name="image_gallery2">
                                        </div>
                                        <img id="holder" style="margin-top:15px;max-height:100px;" />
                                       
                                       
                                    </div>
                                    <div class="list-group-item">
                                        <div class="input-group">
                                            <span class="input-group-btn">
                                            <a id="lfm-gl3" data-input="thumbnail-gl3" data-preview="holder" class="btn btn-primary">
                                                <i class="fa fa-picture-o"></i> انتخاب
                                            </a>
                                            </span>
                                            <input id="thumbnail-gl3" value="{{ old('image_gallery3') }}" class="form-control" type="text" name="image_gallery3">
                                        </div>
                                        <img id="holder" style="margin-top:15px;max-height:100px;" />
                                        
                                        
                                    </div>
                                </div>

                                <div class="input-fild-box form-group">
                                    <button type="submit" class="btn btn-success w-100">ورود</button>
                                </div>

                                <ul class="login-link">
                                    <li>
                                        <router-link to="/login"><i class="fas fa-user"></i>&nbsp;وارد شوید</router-link>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>

        </div>
    </main>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
export default {
    name: "newProduct",
    components: {
     'editor': Editor
    }
}
</script>

<style>

</style>