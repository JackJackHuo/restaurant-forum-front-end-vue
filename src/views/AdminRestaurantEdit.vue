<template>
  <div class="container py-5">
    <AdminRestaurantForm 
    :initial-restaurant="restaurant"
    :is-processing="isProcessing"
    @after-submit="handleAfterSubmit"/>
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  name: "AdminRestaurantEdit",
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: undefined,
        name: "",
        tel: "",
        address: "",
        openingHours: "",
        description: "",
        image: "",
        categoryId: undefined,   
      },
      isProcessing: false
    };
  },
  beforeRouteUpdate(to , from , next ) {
    const { id: restaurantId } = to.params
    this.fetchRestaurant(restaurantId)
    next()
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    // Ajax拿到資料後會發現adminRestaurantForm沒有資料，因為是非同步的關係。必須去adminRestaurantForm用watch監聽。
    async fetchRestaurant(restaurantId) {
      try{
        const { data } = await adminAPI.restaurants.getDetail(restaurantId)
        const {
          id,
          name,
          tel,
          address,
          opening_hours: openingHours,
          description,
          image,
          CategoryId: categoryId
        } = data.restaurant
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          tel,
          address,
          openingHours,
          description,
          image,
          categoryId
        }
      }catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    async handleAfterSubmit (formData) {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.$router.push({ name: 'admin-restaurants' })
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳資料，請稍後再試'
        })
      }
    }
  }
};
</script>