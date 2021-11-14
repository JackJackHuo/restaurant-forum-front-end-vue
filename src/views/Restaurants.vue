<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills
        :categories="categories"
    />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard 
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination 
        v-if="totalPage.length > 1"
        :current-page="currentPage"
        :total-page="totalPage"
        :category-id="categoryId"
        :previous-page="previousPage"
        :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'
import RestaurantsPagination from './../components/RestaurantsPagination.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Maida Hahn",
            "tel": "307.657.6401 x14658",
            "address": "941 Streich Creek",
            "opening_hours": "08:00",
            "description": "Dignissimos a et ut in nostrum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.89246751576634",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Leopoldo White V",
            "tel": "(178) 892-3747 x4993",
            "address": "207 Gunnar Forge",
            "opening_hours": "08:00",
            "description": "omnis velit ut",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.58816530725819",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Adrianna Ankunding",
            "tel": "781.015.5511 x0779",
            "address": "72941 Nikolaus Viaduct",
            "opening_hours": "08:00",
            "description": "Sint molestiae labore recusandae necessitatibus qu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=88.03308398001211",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Mrs. Larue Schinner",
            "tel": "(246) 768-7115 x904",
            "address": "34756 Turcotte Island",
            "opening_hours": "08:00",
            "description": "In aperiam earum nemo in. Veniam laborum possimus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.85198307873978",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Kari Schultz",
            "tel": "846-801-7427",
            "address": "37651 Prohaska Knolls",
            "opening_hours": "08:00",
            "description": "Porro dicta doloribus voluptas modi et tempora qui",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.495358874949545",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Moriah Erdman",
            "tel": "(879) 135-7687",
            "address": "75968 Raynor Stravenue",
            "opening_hours": "08:00",
            "description": "Sunt asperiores voluptate nihil quo animi.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.337053238413985",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Leanne Waelchi Jr.",
            "tel": "437.778.1848 x4378",
            "address": "0135 Maybell Viaduct",
            "opening_hours": "08:00",
            "description": "Numquam cum aperiam qui sunt ratione.\nFuga nihil a",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.868238467900007",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Gisselle VonRueden DVM",
            "tel": "1-926-970-0118 x5726",
            "address": "666 Ashley Place",
            "opening_hours": "08:00",
            "description": "neque",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.58253420193429",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Dr. Zella Armstrong",
            "tel": "(882) 248-9173",
            "address": "1718 McClure Lake",
            "opening_hours": "08:00",
            "description": "Nesciunt architecto sed porro. Aut aut odio cupidi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=91.66215823648123",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Linda Jenkins",
            "tel": "1-262-272-6846 x49263",
            "address": "23373 Macejkovic Bypass",
            "opening_hours": "08:00",
            "description": "Et dolorem doloremque porro soluta exercitationem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.32017154873381",
            "viewCounts": 0,
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T13:23:38.000Z",
                "updatedAt": "2021-11-10T13:23:38.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2021-11-10T13:23:38.000Z",
            "updatedAt": "2021-11-10T13:23:38.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}
export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data(){
    return {
      restaurants: [],
      categories: [],
      categoryId: undefined,
      currentPage: 1,
      totalPage: [],
      previousPage: undefined,
      nextPage: undefined
    }
  },
  created(){
    this.fetchRestaurants()
  },
  methods: {
      fetchRestaurants () {
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next
        } = dummyData
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
      }
    }
};
</script>