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
            @click.stop.prevent="createCategory"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
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
              @click.stop.prevent="updateCategory(category.id)"
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
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
import { v4 as uuidv4 } from "uuid";
const dummyData = {
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
    },
  ],
};
export default {
  name: "AdminCategories",
  components: {
    AdminNav,
  },
  data() {
    return {
      categories: [],
      newCategoryName: "",
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      this.categories = dummyData.categories.map((category) => ({
        ...category,
        isEditing: false,
        nameCached:''
      }));
    },
    createCategory(name) {
      // TODO: 透過 API 告知伺服器欲新增的餐廳類別...
      console.log(name)
      // 將新的類別添加到陣列中
      this.categories.push({
        id: uuidv4(),
        name: this.newCategoryName,
      });
      this.newCategoryName = "";
    },
    deleteCategories(categoryId) {
      this.categories = this.categories.filter(
        (category) => category.id !== categoryId
      );
    },
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
    updateCategory({ categoryId , name }){
      // TODO: 透過 API 去向伺服器更新餐廳類別名稱
      console.log(name)
      // 切換isEditing
      this.toggleIsEditing(categoryId)
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