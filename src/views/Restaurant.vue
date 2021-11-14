<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail
      :initial-restaurant="restaurant"
    />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment 
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"

    />
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail.vue'
import RestaurantComments from './../components/RestaurantComments.vue'
import CreateComment from './../components/CreateComment.vue'

const dummyData = {
  restaurant: {
    id: 1,
    name: "Maida Hahn",
    tel: "307.657.6401 x14658",
    address: "941 Streich Creek",
    opening_hours: "08:00",
    description: "Dignissimos a et ut in nostrum.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=71.89246751576634",
    viewCounts: 1,
    createdAt: "2021-11-10T13:23:38.000Z",
    updatedAt: "2021-11-13T14:18:40.790Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2021-11-10T13:23:38.000Z",
      updatedAt: "2021-11-10T13:23:38.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 1,
        text: "Dicta perspiciatis aperiam eaque dolor.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$.xT1dM.Jz2g6sq8S7ciN7.S9ktX7nF3HA8Y/IlgE7AaScnWthqxrW",
          isAdmin: false,
          image: null,
          createdAt: "2021-11-10T13:23:38.000Z",
          updatedAt: "2021-11-10T13:23:38.000Z",
        },
      },
      {
        id: 51,
        text: "Amet rerum dolores tempora quas.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$.xT1dM.Jz2g6sq8S7ciN7.S9ktX7nF3HA8Y/IlgE7AaScnWthqxrW",
          isAdmin: false,
          image: null,
          createdAt: "2021-11-10T13:23:38.000Z",
          updatedAt: "2021-11-10T13:23:38.000Z",
        },
      },
      {
        id: 101,
        text: "Ea quis consectetur.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2021-11-10T13:23:38.000Z",
        updatedAt: "2021-11-10T13:23:38.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$.xT1dM.Jz2g6sq8S7ciN7.S9ktX7nF3HA8Y/IlgE7AaScnWthqxrW",
          isAdmin: false,
          image: null,
          createdAt: "2021-11-10T13:23:38.000Z",
          updatedAt: "2021-11-10T13:23:38.000Z",
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
};
const dummyUser = {
  currentUser:{
    "id": 1,
    "name": "root",
    "email": "root@example.com",
    "image": null,
    "isAdmin": true
  },
  isAuthenticated: true
}

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data() {
    return {
      restaurant: {
        id: undefined,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      currentUser:dummyUser.currentUser
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)
      const { restaurant, isFavorited, isLiked } = dummyData;
      const {
        id,
        name,
        tel,
        address,
        opening_hours: openingHours,
        description,
        image,
        Category,
        Comments
      } = restaurant;

      this.restaurant = {
        id,
        name,
        categoryName: Category? Category.name : '未分類',
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
      };

      this.restaurantComments = Comments
    },
    afterDeleteComment(commentId){
      // commentId從子層RestaurantComments傳來
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter( comment => comment.id !== commentId)
    },
    afterCreateComment(payload) {
      const { commentId , text , restaurantId } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    }
  },
};
</script>