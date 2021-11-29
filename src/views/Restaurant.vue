<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
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
    </template>
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail.vue'
import RestaurantComments from './../components/RestaurantComments.vue'
import CreateComment from './../components/CreateComment.vue'
import Spinner from './../components/Spinner.vue'
import restaurantsAPI from './../apis/restaurants'
import  { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
    Spinner
  },
  data() {
    return {
      // 這裡如果id設成undefined的話會出現warning，因為在子元件RestaurantDetail接收initialRestaurant時，props設定是required，所以必須給值，不能設定undefined。
      restaurant: {
        id: -1,
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
      isLoading: true
    };
  },
  // 如果使用者直接在瀏覽器上輸入網址，就不會觸發 created ，也不會向後端發送新的請求。
  // 透過 Vue router 的 beforeRouteUpdate 方法監聽路由事件
  beforeRouteUpdate( to , from , next ) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      this.isLoading = true
      try {
        const { data } = await restaurantsAPI.getRestaurant( {restaurantId} )
        const { restaurant, isFavorited, isLiked } = data;
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
        this.isLoading = false
      }catch(error){
        this.isLoading = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
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