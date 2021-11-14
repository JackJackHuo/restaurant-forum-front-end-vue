<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <a
              href="#"
              class="btn btn-primary mr-2"
            >Show</a>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = {
    "restaurants": [
        {
            "id": 50,
            "name": "Connor Rohan",
            "tel": "121-030-1054 x2706",
            "address": "068 Hyatt Coves",
            "opening_hours": "08:00",
            "description": "Autem nesciunt porro vel dolorum consequatur ullam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.0620781113749773",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Abagail Gusikowski",
            "tel": "152.404.5126 x142",
            "address": "27600 Lauriane Ports",
            "opening_hours": "08:00",
            "description": "Quibusdam vitae maiores et inventore sit qui quas.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.86684004687854",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Rosalia Zieme",
            "tel": "330-683-0003",
            "address": "5682 Jast Inlet",
            "opening_hours": "08:00",
            "description": "sed",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.999374339309956",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Michel Reichert DDS",
            "tel": "387.404.6936",
            "address": "1570 Olson Rest",
            "opening_hours": "08:00",
            "description": "ut deleniti voluptas",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.21091670055219",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Rafaela Frami",
            "tel": "214-470-8504",
            "address": "103 Myrna Walk",
            "opening_hours": "08:00",
            "description": "in",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.46502204994799",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Andreane Fay",
            "tel": "1-235-887-6881",
            "address": "983 Edgar Ports",
            "opening_hours": "08:00",
            "description": "Omnis dolor laborum quia laboriosam aliquid non ut",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=17.666785861156463",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Dr. Newton Cole",
            "tel": "1-194-935-9641 x076",
            "address": "38670 Terrill Shore",
            "opening_hours": "08:00",
            "description": "Culpa molestias neque.\nRerum ut ex alias quo.\nAd v",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=49.50321525532107",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Tomas Hoeger",
            "tel": "1-727-814-2465 x68621",
            "address": "57174 Rogahn Forges",
            "opening_hours": "08:00",
            "description": "Deserunt voluptatem dolores corporis voluptate qui",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.42830918720269",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Delta Koelpin",
            "tel": "892.967.8039 x4332",
            "address": "78603 Russel Crescent",
            "opening_hours": "08:00",
            "description": "Enim ratione atque quo et excepturi et incidunt od",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=48.54105001418114",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Terrell Hackett",
            "tel": "1-444-529-6529 x598",
            "address": "2647 Hoppe Street",
            "opening_hours": "08:00",
            "description": "Accusamus optio incidunt perferendis et quam volup",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.05357680745946",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
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
      restaurants: []
    }
  },
  created() {
    this.fetchTopRestaurants()
  },
  methods: {
    fetchTopRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    addFavorite(restaurantId) {
       this.restaurants = this.restaurants.map( restaurant => {
         if(restaurant.id !== restaurantId){
           return restaurant
         }else{
           return {
             ...restaurant,
             isFavorited: true
           }
         }
       })
    },
    deleteFavorite(restaurantId) {
       this.restaurants = this.restaurants.map( restaurant => {
         if(restaurant.id !== restaurantId){
           return restaurant
         }else{
           return {
             ...restaurant,
             isFavorited: false
           }
         }
       })
    }
  }
}
</script>