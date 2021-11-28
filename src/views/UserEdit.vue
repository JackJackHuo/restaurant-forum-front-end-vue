<template>
  <div class="container py-5">
    <form
      @submit.stop.prevent="handleSubmit"
    >
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="profile.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="profile.image" 
          :src="profile.image" 
          class="d-block img-thumbnail mb-2" 
          width="200"
          height="200"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"

        />
      </div>

      <button 
        type="submit" 
        class="btn btn-primary"
        :disabled="isProcessing"
      >Submit</button>
    </form>
  </div>
</template>

<script>
import userAPI from './../apis/user'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: "UserEdit",
  data() {
    return {
      profile: {
        id: undefined,
        image: '',
        name: '',
        email: ''
      },
      isProcessing: false
    }
  },
  computed:{
    ...mapState(['currentUser'])
  },
  // 判斷若使用者試圖從路由去修改其他使用者的資料，則轉址
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'not-found' })
      return
    }
    this.setUser()
    next()
  },
  created() {
    const { id } = this.$route.params
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'not-found' })
      return
    }
    this.setUser()
  },
  // 透過 watch 監控 currentUser 有無變化
  watch: {
    currentUser(){
      this.setUser()
    }
  },
  methods: {
    setUser() {
        const { name , image , email , id } = this.currentUser
        this.profile = {
          ...this.profile,
          id,
          email,
          name,
          image
        }
    },
    handleFileChange(e) {
      const { files } = e.target
      const imgURL = window.URL.createObjectURL(files[0])
      this.profile.image = imgURL
    },
    async handleSubmit(e) {
      // 避免漏填
      if(!this.profile.name){
        Toast.fire({
          type: 'warning',
          title: '您尚未填寫姓名'
        })
        return
      }
      const form = e.target
      const formData = new FormData(form)
      try{
        this.isProcessing = true
        const { data , statusText } = await userAPI.update({ userId: this.profile.id , formData})
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }
        // 更新完成後轉址到使用者詳細頁
        this.$router.push({ name: 'user', params: { id: this.profile.id } })
      }catch(error){
        this.isProcessing = false
        console.log('error' , error)
        Toast.fire({
          icon: 'error',
          title: '無法更新使用者資料，請稍後再試'
        })
      }
    }
  }
};
</script>