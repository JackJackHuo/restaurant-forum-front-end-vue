<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link
      class="navbar-brand"
      to="/"
    >
      餐廳評論網
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div
      id="navbarSupportedContent" 
      class="navbar-collapse collapse"
    >
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link
             v-if="currentUser.isAdmin"
             to="/admin" 
             class="text-white mr-3"
        >
         管理員後台
       </router-link>

        <!-- is user is login -->
         <template v-if="isAuthenticated">
          <router-link
            to="#"
            class="text-white mr-3"
          >
            {{ currentUser.name || '使用者' }} 您好
          </router-link>
          <button
            type="button"
            class="btn btn-sm btn-outline-success my-2 my-sm-0"
          >
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
// 透過mapState將Vuex store裡的資料取出
import { mapState } from 'vuex'


export default {
computed: {
    // 透過computed指定取出Vuex store中currentUser及isAuthenticated兩筆資料，就可以在template中被取用
    // ...解構賦值將mapState還原成computed裡面應有的格式 => currentUser(){} 、 isAuthenticated(){} 
    ...mapState(['currentUser', 'isAuthenticated'])
  },

}
</script>