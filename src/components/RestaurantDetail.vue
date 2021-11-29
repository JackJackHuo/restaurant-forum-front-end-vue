<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{restaurant.name}}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{restaurant.categoryName}}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block" 
        :src="restaurant.image"
        style="width: 250px;margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{restaurant.openingHours}}
          </li>
          <li>
            <strong>Tel:</strong>
            {{restaurant.tel}}

          </li>
          <li>
            <strong>Address:</strong>
            {{restaurant.address}}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{ name: 'restaurant-dashboard' , params: { id: restaurant.id }}"
      >Dashboard
      </router-link>

      <button
        v-if="restaurant.isFavorited"
        type="button"
        class="btn btn-danger btn-border mr-2"
        @click.stop.prevent="deleteFavorite(restaurant.id)"
      >
        移除最愛
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary btn-border mr-2"
        @click.stop.prevent="addFavorite(restaurant.id)"

      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        type="button"
        class="btn btn-danger like mr-2"
        @click.stop.prevent="deleteLike(restaurant.id)"

      >
        Unlike
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary like mr-2"
        @click.stop.prevent="addLike(restaurant.id)"

      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import userAPI from './../apis/user'
import { Toast } from './../utils/helpers'

export default {
  name: 'RestaurantDetail',
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  // 使用非同步方法呼叫 API 時，在拿到後端回應之前，父元件Restaurant就直接把 initialRestaurant 傳給子元件了，因此子元件沒有拿到 API 資料。
  // 在子元件 RestaurantDetail使用 Vue 的 watch 屬性監控 initialRestaurant 的內容變動，若新的資料傳入，就把資料寫入元件
  watch: {
    initialRestaurant(newValue){
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant
    }
  },
  methods: {
    async addFavorite(restaurantId) {
      try{
        const { data } = await userAPI.addFavorite(restaurantId)
        if(data.status !== 'success') throw new Error(data.message)
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
        }
        Toast.fire({
          icon: 'success',
          title: '成功將餐廳新增最愛!'
        })
      }catch(error){
        console.log('error' , error)
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳新增最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite(restaurantId) {
      try{
        const { data } = await userAPI.deleteFavorite(restaurantId)
        if(data.status !== 'success') throw new Error(data.message)
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
        }
        Toast.fire({
          icon: 'success',
          title: '成功將餐廳移除最愛!'
        })
      }catch(error){
        console.log('error' , error)
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除最愛，請稍後再試'
        })
      }
    },
    async addLike(restaurantId) {
      try{
        const { data } = await userAPI.addLike(restaurantId)
        if(data.status !== 'success') throw new Error(data.message)
        this.restaurant = {
        ...this.restaurant,
        isLiked: true
        }
        Toast.fire({
          icon: 'success',
          title: String.fromCodePoint(0x1F49E).repeat(10)

        })
      }catch(error){
        console.log('error' , error)
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳按讚，請稍後再試'
        })
      }
    },
    async deleteLike (restaurantId) {
      try{
        const { data } = await userAPI.deleteLike(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }
        Toast.fire({
          icon: 'success',
          title: String.fromCodePoint(0x1F494).repeat(10)
        })
      }catch(error){
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳取消按讚，請稍後再試'
        })
        console.log('error', error)
      }   
    },
  }
}
</script>

<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>