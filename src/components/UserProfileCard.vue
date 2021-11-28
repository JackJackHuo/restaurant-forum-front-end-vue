<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="emptyImage(profile.image)" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">{{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ profile.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ profile.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ profile.Followings.length }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong>{{ profile.Followers.length }}</strong> followers (追隨者)
            </li>
          </ul>
          <p></p>
          <form action="/following/2" method="POST" style="display: contents">
            <button
              v-if="profile.isFollowed"
              type="submit"
              class="btn btn-danger"
              @click.stop.prevent="deleteFollowing(profile.id)"
            >
              取消追蹤
            </button>

            <button 
              v-else 
              type="submit" 
              class="btn btn-primary"
              @click.stop.prevent="addFollowing(profile.id)" 
            >追蹤</button>
          </form>
          <p></p>
          <router-link
            v-if="profile.id === currentUser.id"
            :to="{ name: 'user-edit' , params: { id: currentUser.id}}"
            class="btn btn-secondary"
          >
            編輯
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import { mapState } from 'vuex'
import userAPI from './../apis/user'
import { Toast } from '../utils/helpers';


export default {
  name: "UserProfileCard",
  mixins:[emptyImageFilter],
  props: {
    initialProfile: {
      type: Object,
      required: true,
    },
  },
  watch: {
    initialProfile(newValue){
      this.profile = {
        ...this.profile,
        ...newValue
      }
    }
  },
  data() {
    return {
      profile: this.initialProfile,
    };
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async addFollowing(profileId) {
      try{
        const { data } = await userAPI.addFollowing(profileId)
        if(data.status !== 'success') throw new Error(data.message)
        this.profile = {
        ...this.profile,
        isFollowed: true,
        };
        Toast.fire({
          icon:'success',
          title:'成功追蹤!'
        }) 
      }catch(error){
        console.log('error' , error)
        Toast.fire({
          icon:'error',
          title:'無法追蹤，請稍後再試'
        })    
      }
      
    },
    async deleteFollowing(profileId) {
      try{
        const { data } = await userAPI.deleteFollowing(profileId)
        if(data.status !== 'success') throw new Error(data.message)
        this.profile = {
        ...this.profile,
        isFollowed: false,
        };
        Toast.fire({
          icon:'success',
          title:'成功取消追蹤!'
        }) 
      }catch(error){
        console.log('error' , error)
        Toast.fire({
          icon:'error',
          title:'無法追蹤，請稍後再試'
        })    
      }
      
    },
  },
};
</script>