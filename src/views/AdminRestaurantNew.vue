<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit"/>
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'
export default {
  name: 'AdminRestaurantNew',
  components: {
    AdminRestaurantForm
  },
  methods:{
    handleAfterSubmit(formData) {
      for (let [ key , value ] of formData.entries()){
        console.log(key , value)
      }
    }
  }
}
</script>