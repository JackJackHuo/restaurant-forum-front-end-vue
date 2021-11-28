import { createStore } from 'vuex'
import userAPI from './../apis/user'

export default createStore({
  // data
  state: {
    currentUser: {
      id: undefined,
      name: '',
      email: '',
      image: '',
      isAdmin: ''
    },
    isAuthenticated: false,
    // 新增 token 屬性，為了要跟localStorage裡面的token比較是否一樣
    token:''
  },
  // commit 發動 mutatations
  mutations: {
    // 傳入上方的 state 物件，準備變更物件內容
    // 接收從 Vue component 傳入的資料，通常會以「想要更新的 state 屬性」來命名這組參數
    setCurrentUser( state , currentUser ){
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
      // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem('token')
    },
    revokeAuthentication (state){
      state.currentUser = {}
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  // dispatch 發動 actions
  actions: {
    // 在 actions 中可以透過參數的方式取得 commit 的方法
    async fetchCurrentUser( { commit } ) {
      try{
        const { data } = await userAPI.getCurrentUser()
        commit( 'setCurrentUser' , data)
        // 拿到currentUser代表狀態為已登入，回傳true給router.beforeEach
        return true
      }catch(error) {
        console.log('error', error)
        console.error('can not fetch user information')
        // 驗證失敗的話一併觸發登出的行為，以清除 state 中的 token
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {
  }
})
