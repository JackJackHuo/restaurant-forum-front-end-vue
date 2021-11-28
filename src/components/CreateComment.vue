<template>
  <form
    @submit.stop.prevent="handleSubmit(restaurantId)"
  >
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        v-model="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
// import { v4 as uuidv4} from 'uuid'
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'
export default {
    name: 'CreateComment',
    props: {
      restaurantId: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        text: ''
      }
    },
    methods: {
      async handleSubmit (restaurantId) {
        try{
          // TODO: 向 API 發送 POST 請求
          const { data } = await restaurantsAPI.comments.create({ restaurantId , text: this.text})
          if(data.status !== 'success') throw new Error(data.message)
          // 伺服器新增 Comment 成功後...
          this.$emit('after-create-comment' , {
            commentId: data.commentId,
            text: this.text,
            restaurantId
          })
          this.text = '' // 將表單內的資料清空
        }catch(error){
          console.log('error' , error)
          Toast.fire({
            icon: 'error',
            title:'無法新增評論，請稍後再試'
          })
        }
      }
    }
}
</script>