<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>      
      <h1 class="mt-5">
        人氣餐廳
      </h1>

      <hr>
      <div
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        class="card mb-3"
        style="max-width: 540px; margin: auto;"
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <a href="#">
              <img
                class="card-img"
                :src="restaurant.image"
              >
            </a>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                {{restaurant.name}}
              </h5>
              <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
              <p class="card-text">
                {{restaurant.description}}
              </p>
              <a
                href="#"
                class="btn btn-primary mr-2"
              >Show</a>

              <button
                v-if="restaurant.isFavorited"
                type="button"
                class="btn btn-danger mr-2"
                @click.stop.prevent="removeFavorite(restaurant.id)"
              >
                移除最愛
              </button>
              <button
                v-else
                type="button"
                class="btn btn-primary"
                @click.stop.prevent="addFavorite(restaurant.id)"
              >
                加到最愛
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import Spinner from './../components/Spinner.vue'
import restaurantsAPI from './../apis/restaurants'
import userAPI from './../apis/user'
import { Toast } from './../utils/helpers'

export default {
  components:{
    NavTabs,
    Spinner
  },
  data() {
    return {
      restaurants: [],
      isLoading:true
    }
  },
  created() {
    this.fetchTopRestaurants()
  },
  methods: {
    async fetchTopRestaurants () {
      this.isLoading = true
      try{
        const { data } = await restaurantsAPI.getTopRestaurants()
        this.restaurants = [...data.restaurants]
        this.isLoading = false
      }catch(error){
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得人氣餐廳資料，請稍後再試'
        })
      }
    },
    async addFavorite(restaurantId) {
      try{
        const { data } = await userAPI.addFavorite(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurants = this.restaurants.map( restaurant => {
          if(restaurant.id !== restaurantId){
            return restaurant
          }else{
            return {
              ...restaurant,
              FavoriteCount: restaurant.FavoriteCount + 1,
              isFavorited: true
            }
          }
        })
        Toast.fire({
          icon: 'success',
          title: '成功將餐廳加入最愛清單'
        })
      }catch(error){
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛清單，請稍後再試'
        })
        console.log('error', error)
      }   
    },
    async removeFavorite(restaurantId) {
      try{
        const { data } = await userAPI.deleteFavorite(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurants = this.restaurants.map( restaurant => {
         if(restaurant.id !== restaurantId){
           return restaurant
         }else{
           return {
             ...restaurant,
              FavoriteCount: restaurant.FavoriteCount - 1,
             isFavorited: false
           }
         }
       })
        Toast.fire({
          icon: 'success',
          title: '成功將餐廳移除最愛清單'
        })
      }catch(error){
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除最愛清單，請稍後再試'
        })
        console.log('error', error)
      }   
    },       
  }
}
</script>