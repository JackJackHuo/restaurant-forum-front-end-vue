<template>
  <div class="card">
    <div class="card-header"><strong>{{comments.length}}</strong> 已評論餐廳</div>
    <div class="card-body">
      <router-link 
        v-for="comment in comments"
        :key="comment.id"
        :to="{ name: 'restaurant' , query: { restaurantId: comment.Restaurant.id }}"
      >
        <img
          :src="emptyImage(comment.Restaurant.image)"
          width="60"
          height="60"
          class="avatar"
        />
      </router-link >
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'

export default {
  name: 'UserCommentsCard',
  mixins:[emptyImageFilter],
  props: {
    comments: {
      type: Array,
      default: () => []
    }
  },
}
</script>