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
        <a href="#">
          <img
            :src="user.image"
          >
        </a>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
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
const dummyData = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$JGZcnJDgRAfGF6WZKrPq0uhH1XPb7/Nz1EetunLNx26xhh9AS94WC",
            "isAdmin": true,
            "image": "https://randomuser.me/api/portraits/women/12.jpg",
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$.xT1dM.Jz2g6sq8S7ciN7.S9ktX7nF3HA8Y/IlgE7AaScnWthqxrW",
            "isAdmin": false,
            "image": "https://randomuser.me/api/portraits/women/75.jpg",
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$tfrcolMkx6rgrFrtL639mOxqDoNwioenxwT7oKG9t9NJ/YxtCGYgy",
            "isAdmin": false,
            "image": "https://randomuser.me/api/portraits/men/75.jpg",
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}
import NavTabs from './../components/NavTabs.vue'
export default {
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
    fetchUsers() {
      const { users } = dummyData
      this.users = users
    },
    follow(userId){
      this.users = this.users.map( user => {
        if(user.id === userId) {
          return { ...user, isFollowed: true}
        }else{
          return user
        }
      })
    },
    unfollow(userId){
      this.users = this.users.map( user => {
        if(user.id === userId) {
          return { ...user, isFollowed: false}
        }else{
          return user
        }
      })
    }
  }
}
</script>