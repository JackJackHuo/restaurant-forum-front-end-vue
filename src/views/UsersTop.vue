<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div 
        v-for="user in users"
        :key="user.id"
        class="col-3"
      >
        <router-link 
          :to="{ name: 'user' , params: { id: user.id }}"
        >
          <img
            :src="emptyImage(user.image)"
          >
        </router-link>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.followerCount}}</span>
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="unfollow(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="follow(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import NavTabs from './../components/NavTabs.vue'
import userAPI from './../apis/user'
import { Toast } from './../utils/helpers'
import {emptyImageFilter} from './../utils/mixins'

export default {
  name: 'UserTop',
  mixins:[emptyImageFilter],
  components:{
    NavTabs
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try{
        const { data } = await userAPI.getTopUsers()
        this.users = data.users.map(user => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed
        }))
      }catch(error){
        Toast.fire({
          icon: 'error',
          title: '無法取得美食達人資料，請稍後再試'
        })
        console.log('error', error)
      }
      
    },
    async follow(userId){
      try{
        const { data } = await userAPI.addFollowing(userId)
        if(data.status !== 'success') throw new Error(data.message)
        this.users = this.users.map( user => {
          if(user.id === userId) {
            return { 
              ...user,
              followerCount: user.followerCount + 1, 
              isFollowed: true
              }
          }else{
            return user
          }
        })
      }catch{
        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
      }
      
    },
    async unfollow(userId){
      try{
        const { data } = await userAPI.deleteFollowing(userId)
        if(data.status !== 'success') throw new Error(data.message)
        this.users = this.users.map( user => {
          if(user.id === userId) {
            return { 
              ...user, 
              followerCount: user.followerCount - 1,
              isFollowed: false
              }
          }else{
            return user
          }
        })
      }catch(error){
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }    
    }
  }
}
</script>