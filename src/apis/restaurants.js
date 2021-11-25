import { apiHelper } from "./../utils/helpers"; 
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({ page , categoryId }){
    // URLSearchParams() 方法，幫你把一組物件參數直接組成網址上的 queryString
    const serachParams = new URLSearchParams({ page: page , categoryId: categoryId })
    return apiHelper.get(`/restaurants?${serachParams.toString()}` , {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopRestaurants() {
    return apiHelper.get('./restaurants/top' , {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}