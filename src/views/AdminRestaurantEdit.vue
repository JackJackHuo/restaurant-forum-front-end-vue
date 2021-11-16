<template>
  <div class="container py-5">
    <AdminRestaurantForm :initial-restaurant="restaurant" @after-submit="handleAfterSubmit"/>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 2,
    name: "Leopoldo White V",
    tel: "(178) 892-3747 x4993",
    address: "207 Gunnar Forge",
    opening_hours: "08:00",
    description: "omnis velit ut",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=11.58816530725819",
    viewCounts: 0,
    createdAt: "2021-11-10T13:23:38.000Z",
    updatedAt: "2021-11-10T13:23:38.000Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
    },
  },
};
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
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
    };
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log( 'fetchRestaurant id' , restaurantId)
      const { restaurant } = dummyData
      const { id , name , tel , address , opening_hours: openingHours , description , image , CategoryId: categoryId } = restaurant
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        tel,
        address,
        openingHours,
        description,
        image,
        categoryId,
      }
    },
    handleAfterSubmit(formData) {
      for (let [ key , value ] of formData.entries()){
        console.log(key , value)
      }
    }
  }
};
</script>