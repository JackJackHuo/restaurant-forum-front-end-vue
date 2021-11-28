<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <!-- UserProfileCard -->
      <UserProfileCard 
        :initial-profile="profile"
      />
      <div class="row">
        <div class="col-md-4">
          <!-- UserFollowingsCard -->
          <UserFollowingsCard 
            :followings="profile.Followings"
          />
          <br />
          <!-- UserFollowersCard -->
          <UserFollowersCard 
            :followers="profile.Followers"
          />
        </div>
        <div class="col-md-8">
          <!-- UserCommentsCard -->
          <UserCommentsCard 
            :comments="profile.Comments"
          />
          <br />
          <!-- UserFavoritedRestaurantsCard -->
          <UserFavoritedRestaurantsCard 
            :favoritedRestaurants="profile.FavoritedRestaurants"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "./../components/UserProfileCard.vue";
import UserFollowingsCard from "./../components/UserFollowingsCard.vue";
import UserFollowersCard from "./../components/UserFollowersCard.vue";
import UserCommentsCard from "./../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard.vue";
import userAPI from './../apis/user'
import { Toast } from './../utils/helpers'

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      profile: {
        id: undefined,
        name: "",
        email: "",
        isAdmin: false,
        image: "",
        createdAt: "",
        Comments: [],
        FavoritedRestaurants: [],
        Followers: [],
        Followings: [],
        isFollowed: false,
      },
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUserProfile(userId);
  },
  beforeRouteUpdate( to , from , next ) {
    const { id } = to.params
    this.fetchUserProfile(id)
    next()
  },
  methods: {
    async fetchUserProfile(userId) {
      try{
        const { data } = await userAPI.get({ userId })
        if(!data) throw new Error('無法取得使用者資料')
        const {
          id,
          name,
          email,
          isAdmin,
          image,
          createdAt,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        } = data.profile;
        this.profile = {
          ...this.profile,
          id,
          name,
          email,
          isAdmin,
          image,
          createdAt,
          Comments: Comments.filter(comment => comment.Restaurant) ,
          FavoritedRestaurants,
          Followers,
          Followings,
          isFollowed: data.isFollowed,
        };
      }catch(error){
        console.log('error' , error)
        Toast.fire({
          icon: 'error',
          title: "無法取得使用者資料，請稍後再試",
        })
      }
    },
  },
};
</script>