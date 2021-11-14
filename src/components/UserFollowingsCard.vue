<template>
  <div class="card">
    <div class="card-header"><strong>2</strong> followings (追蹤者)</div>
    <div class="card-body">
      <router-link 
        v-for="following in followings"
        :key="following.id"
        :to="{ name: 'user' , query: { userId: following.id }}"
      >
        <img
          :src="following.image"
          width="60"
          height="60"
          class="avatar"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserFollowingsCard',
  props: {
    followings: {
      type: Array,
      required: true
    }
  },
}
</script>