<template>
  <div class="container py-5">
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
  </div>
</template>


<script>
import restaurantsAPI from './../apis/restaurants'
import { Toast } from "./../utils/helpers";
export default {
  name: 'RestaurantDashboard',
  data () {
    return {
      restaurant: {
        id: undefined,
        name: '',
        categoryName: '',
        commentsLength: undefined,
        viewCounts:undefined, 

      }
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchRestaurantDashoard(id)
  },
  methods: {
    async fetchRestaurantDashoard(restaurantId) {
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
      }catch(error){
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