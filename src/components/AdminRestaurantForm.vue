<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        v-model="restaurant.categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option value="" selected disabled>--請選擇--</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        v-model="restaurant.tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        v-model="restaurant.address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        v-model="restaurant.openingHours"
        type="time"
        class="form-control"
        name="opening_hours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="restaurant.description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>
    <!-- input type="file" 可添加multiple屬性新增多筆檔案 -->
    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      />
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>

    <button type="submit" class="btn btn-primary">送出</button>
  </form>
</template>

<script>
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
  name: "AdminRestaurantForm",
  props: {
    initialRestaurant: {
      type: Object,
      default: () => {
        return {
          name: "",
          categoryId: "",
          tel: "",
          address: "",
          description: "",
          image: "",
          openingHours: "",
        };
      },
    },
  },
  data() {
    return {
      restaurant: {
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      categories: [],
    };
  },
  created() {
    this.fetchCategories();
    this.restaurant = {
      ...this.restaurant,
      ...this.initialRestaurant
    }
  },
  methods: {
    fetchCategories() {
      this.categories = dummyData.categories;
    },
    handleFileChange(e) {
      const { files } = e.target;
      // e.target.files 會是一個陣列，裡面可以取得使用者所有想要上傳的檔案，陣列裡都是該檔案的 Blob 物件，而不是一般的物件，但從中可以透過 name, size, type 取得該檔案的資訊。
      if (files.length === 0) {
        this.restaurant.image = "";
      } else {
        // window.URL.createObjectURL()為你的本機檔案來產生一個暫存的 URL，這並不是一個真正的網址，但是可以讓我們存取到本機圖片，並且暫時將圖片呈現在畫面上。
        const imgUrl = window.URL.createObjectURL(files[0]);
        this.restaurant.image = imgUrl;
      }
    },
    handleSubmit(e) {
      const form = e.target;
      const formData = new FormData(form);
      this.$emit("after-submit", formData);
    },
  },
};
</script>