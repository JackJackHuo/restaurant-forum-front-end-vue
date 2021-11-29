<template>
  <div class="col-md-6 col-lg-4">
    <div 
      v-show="!isLoading"
      class="card mb-4"
    >
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        @load="changeLoading"
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
          :disabled="isProcessing"
        >
          移除最愛
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          @click.stop.prevent="addFavorite(restaurant.id)"
          :disabled="isProcessing"
        >
          加到最愛
        </button>
        <button
          v-if="restaurant.isLiked"
          type="button"
          class="btn btn-danger like mr-2"
          @click.stop.prevent="deleteLike(restaurant.id)"
          :disabled="isProcessing"
        >
          Unlike
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary like mr-2"
          @click.stop.prevent="addLike(restaurant.id)"
          :disabled="isProcessing"
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
      restaurant: this.initialRestaurant,
      isLoading: true,
      isProcessing: false
    }
  },
  methods: {
    changeLoading(){
      this.isLoading = false
    },
    async addFavorite(restaurantId) {
      try{
        this.isProcessing = true
        const { data } = await userAPI.addFavorite(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true
        }
        this.isProcessing = false
        Toast.fire({
          icon: 'success',
          title: '成功將餐廳加入最愛清單'
        })
      }catch(error){
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛清單，請稍後再試'
        })
        console.log('error', error)
      }   
    },
    async deleteFavorite(restaurantId) {
      try{
        this.isProcessing = true
        const { data } = await userAPI.deleteFavorite(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false
        }
        this.isProcessing = false
        Toast.fire({
          icon: 'success',
          title: '成功將餐廳移除最愛清單'
        })
      }catch(error){
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除最愛清單，請稍後再試'
        })
        console.log('error', error)
      }   
    },
    async addLike (restaurantId) {
      try{
        this.isProcessing = true
        const { data } = await userAPI.addLike(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        }
        this.isProcessing = false
        Toast.fire({
          icon: 'success',
          title: String.fromCodePoint(0x1F49E).repeat(10)
        })
      }catch(error){
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳按讚，請稍後再試'
        })
        console.log('error', error)
      }   
    },
    async deleteLike (restaurantId) {
      try{
        this.isProcessing = true
        const { data } = await userAPI.deleteLike(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }
        this.isProcessing = false
        Toast.fire({
          icon: 'success',
          title: String.fromCodePoint(0x1F494).repeat(10)
        })
      }catch(error){
        this.isProcessing = false
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
.badge.badge-secondary {
  padding: 0;
  margin: 8px 0;
  color: #bd2333;
  background-color: transparent;
}

.btn,
.btn-border.btn:hover {
  margin: 7px 14px 7px 0;
}

.card {
  margin-bottom: 2rem !important;
}
.card-img-top {
  background-color: #EFEFEF;
}

.card-body {
  padding: 17.5px;
}

.card-footer {
  padding: 9px 17.5px;
  border-color: rgb(232, 232, 232);
  background: white;
}
</style>