<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>


<script>
const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Maida Hahn",
        "tel": "307.657.6401 x14658",
        "address": "941 Streich Creek",
        "opening_hours": "08:00",
        "description": "Dignissimos a et ut in nostrum.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.89246751576634",
        "viewCounts": 1,
        "createdAt": "2021-11-10T13:23:38.000Z",
        "updatedAt": "2021-11-13T14:18:40.000Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z"
        },
        "Comments": [
            {
                "id": 1,
                "text": "Dicta perspiciatis aperiam eaque dolor.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$.xT1dM.Jz2g6sq8S7ciN7.S9ktX7nF3HA8Y/IlgE7AaScnWthqxrW",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-11-10T13:23:38.000Z",
                    "updatedAt": "2021-11-10T13:23:38.000Z"
                }
            },
            {
                "id": 51,
                "text": "Amet rerum dolores tempora quas.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$.xT1dM.Jz2g6sq8S7ciN7.S9ktX7nF3HA8Y/IlgE7AaScnWthqxrW",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-11-10T13:23:38.000Z",
                    "updatedAt": "2021-11-10T13:23:38.000Z"
                }
            },
            {
                "id": 101,
                "text": "Ea quis consectetur.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$.xT1dM.Jz2g6sq8S7ciN7.S9ktX7nF3HA8Y/IlgE7AaScnWthqxrW",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-11-10T13:23:38.000Z",
                    "updatedAt": "2021-11-10T13:23:38.000Z"
                }
            }
        ]
    }
}
export default {
  name: 'RestaurantDashboard',
  data () {
    return {
      restaurant: {
        id: undefined,
        name: '',
        categoryName: '',
        commentsLength: undefined,
        viewCounts:undefined, 

      }
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurantDashoard(restaurantId)
  },
  methods: {
    fetchRestaurantDashoard(restaurantId) {
      console.log('fetchRestaurantDashoard id: ', restaurantId)
      // 此name為restaurant的name
      const { id , name , viewCounts , Category , Comments} = dummyData.restaurant
      // 此name為Category裡面的name，將Category裡面的name在解構賦值時重新取名成data內的名稱categoryName
      const { name: categoryName } = Category
      this.restaurant = {
        id,
        name,
        categoryName: Category ? categoryName : '未分類',
        commentsLength: Comments.length,
        viewCounts
      }
    }
  }
}
</script>