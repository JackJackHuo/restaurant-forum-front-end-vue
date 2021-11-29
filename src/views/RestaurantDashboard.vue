<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <div>
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>

      <hr>

      <ul>
        <li>評論數： {{ restaurant.commentsLength }} </li>
        <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
      </ul>

      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >
        回上一頁
      </button>
    </template>
  </div>
</template>


<script>
import Spinner from './../components/Spinner.vue'
import restaurantsAPI from './../apis/restaurants'
import { Toast } from "./../utils/helpers";
export default {
  name: 'RestaurantDashboard',
  components: {
    Spinner
  },
  data () {
    return {
      restaurant: {
        id: undefined,
        name: '',
        categoryName: '',
        commentsLength: undefined,
        viewCounts:undefined, 
      },
      isLoading:true
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchRestaurantDashoard(id)
  },
  methods: {
    async fetchRestaurantDashoard(restaurantId) {
      this.isLoading = true
      try{
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId })
        if(!data) throw new Error('無法取得餐廳資料') 
        // 此name為restaurant的name
        const { id , name , viewCounts , Category , Comments} = data.restaurant
        // 此name為Category裡面的name，將Category裡面的name在解構賦值時重新取名成data內的名稱categoryName
        const { name: categoryName } = Category
        this.restaurant = {
          id,
          name,
          categoryName: Category ? categoryName : '未分類',
          commentsLength: Comments.length,
          viewCounts
        }
        this.isLoading = false
      }catch(error){
        this.isLoading = false
        console.log('error',error)
        Toast.fire({
          icon: 'error',
          title: "無法取得餐廳資料，請稍後再試",
        })
      }
    }
  }
}
</script>