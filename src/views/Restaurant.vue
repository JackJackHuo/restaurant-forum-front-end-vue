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
import restaurantsAPI from './../apis/restaurants'
import  { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

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
      }catch(error){
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