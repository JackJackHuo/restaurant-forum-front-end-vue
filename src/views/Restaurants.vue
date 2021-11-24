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
import restaurantsAPI  from './../apis/restaurants'
import { Toast } from './../utils/helpers'


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
    const { page = '' , categoryId = '' } = this.$route.query
    this.fetchRestaurants({
        queryPage: page,
        queryCategoryId: categoryId
    })

  },
  // 使用 beforeRouteUpdate 方法取得使用者路由變化
  beforeRouteUpdate(to , from , next){
      //網址如果page或categoryId沒有值， to.query取出來的值為undefined，而且是String，導致向後端query 'undefined'內容，所以透過解構賦值可以透過 = 給變數預設值''。 
      const { page = '' , categoryId = '' } = to.query
      this.fetchRestaurants({
        queryPage: page,
        queryCategoryId: categoryId
      })
      next()
  },
  methods: {
      async fetchRestaurants ( { queryPage, queryCategoryId }) {
          try{
            const response = await restaurantsAPI.getRestaurants({
                page: queryPage,
                categoryId: queryCategoryId
            })
            const { 
                restaurants, 
                categories, 
                categoryId, 
                page,
                totalPage,
                prev,
                next
                } = response.data
                this.restaurants = restaurants

            this.categories = categories
            this.categoryId = categoryId
            this.currentPage = page
            this.totalPage = totalPage
            this.previousPage = prev
            this.nextPage = next

          }catch(error){
            Toast.fire({
                icon: 'error',
                title: '無法取得餐廳資料，請稍後再試'
            })
          }
   
        
      }
    }
};
</script>