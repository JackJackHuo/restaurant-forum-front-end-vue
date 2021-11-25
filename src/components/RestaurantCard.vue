<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link 
            :to="{name: 'restaurant' , params: { id: restaurant.id }}"
          >{{ restaurant.name }}</router-link>
        </p>
        <span class="badge badge-secondary">{{ restaurant.Category? restaurant.Category.name : '未分類' }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          v-if="restaurant.isFavorited"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
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
  </div>
</template>

<script>
import userAPI from './../apis/user'
import { Toast } from './../utils/helpers'

export default {
  name: 'RestaurantCard',
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      restaurant: this.initialRestaurant
    }
  },
  methods: {
    async addFavorite(restaurantId) {
      try{
        const { data } = await userAPI.addFavorite(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true
        }
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
    async deleteFavorite(restaurantId) {
      try{
        const { data } = await userAPI.deleteFavorite(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false
        }
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
    async addLike (restaurantId) {
      try{
        const { data } = await userAPI.addLike(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        }
        Toast.fire({
          icon: 'success',
          title: String.fromCodePoint(0x1F49E).repeat(10)
        })
      }catch(error){
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳按讚，請稍後再試'
        })
        console.log('error', error)
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