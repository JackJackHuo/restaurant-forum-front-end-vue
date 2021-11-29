<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />
    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="createCategory()"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <Spinner v-if="isLoading" />
    <table 
      v-else
      class="table"
    >
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div 
              v-show="!category.isEditing" 
              class="category-name"
            >
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              class="form-control"
              type="text"
            />
            <span 
              v-show="category.isEditing" 
              class="cancel"
              @click.stop.prevent="handleCancel(category.id)"
            > ✕ </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="updateCategory( category.id , category.name )"
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategories(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import AdminNav from "./../components/AdminNav.vue";
import Spinner from './../components/Spinner.vue'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
import admin from './../apis/admin';
// import { v4 as uuidv4 } from "uuid";

export default {
  name: "AdminCategories",
  components: {
    AdminNav,
    Spinner
  },
  data() {
    return {
      categories: [],
      newCategoryName: "",
      isLoading:true
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try{
        this.isLoading = true
        const { data } = await adminAPI.categories.get()
        // AJAX餐廳類別資料時，加入isEditing跟nameCached屬性
        this.categories = data.categories.map((category) => ({
          ...category,
          isEditing: false,
          nameCached:''
        }));
        this.isLoading = false
      }catch(error){
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳類別，請稍後再試'
        })
      }
    },
    async createCategory() {
      try{
        // TODO: 透過 API 告知伺服器欲新增的餐廳類別...
        const { data } = await adminAPI.categories.create({ name:this.newCategoryName })
        if(data.status !== 'success') throw new Error(data.message)
        this.newCategoryName = "";
        Toast.fire({
          icon: 'success',
          title: '成功新增餐廳類別!'
        })
        this.fetchCategories()
      }catch(error){
        Toast.fire({
          icon: 'error',
          title: '無法新增餐廳類別，請稍後再試'
        })
      }
    },
    async deleteCategories(categoryId) {
      try{
        const { data } = await admin.categories.delete(categoryId)
        if(data.status !== 'success') throw new Error(data.message)
        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        );
        Toast.fire({
          icon: 'success',
          title: '成功刪除餐廳類別!'
        })
      }catch(error){
        Toast.fire({
          icon: 'error',
          title: '無法刪除餐廳類別，請稍後再試'
        })
      }
    },
    // 切換Editing模式時，先將原本的category name存在nameCached裡，如果取消編輯時可以復原回來。
    toggleIsEditing (categoryId) {
      this.categories = this.categories.map ( category => {
        if(category.id === categoryId){
          return {
            ...category,
            isEditing:!category.isEditing,
            nameCached: category.name
          }
        }else{
          return category
        }
      })
    },
    async updateCategory( categoryId , name ){
      try{
        // TODO: 透過 API 去向伺服器更新餐廳類別名稱
        const { data } = await adminAPI.categories.update({ categoryId , name })
        if(data.status !== 'success') throw new Error(data.message)
        // 切換isEditing
        this.toggleIsEditing(categoryId)
        Toast.fire({
          icon: 'success',
          title: '成功編輯餐廳類別!'
        })
      }catch(error){
        Toast.fire({
          icon: 'error',
          title: '無法編輯餐廳類別，請稍後再試'
        })
      }
    },
    handleCancel (categoryId) {
      this.categories = this.categories.map( category => {
        if(category.id === categoryId) {
          return {
            ...category,
            name: category.nameCached
          }
        }else{
          return category
        }
      })
    }
  },
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>