import { apiHelper } from "./../utils/helpers"; 


export default {
  comments:{
    create( { restaurantId , text } ) {
      return apiHelper.post('/comments', { restaurantId, text })
    },
    delete( { commentId }){
      return apiHelper.delete(`/comments/${commentId}`)
    }
  },
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${ restaurantId }`)
  },
  getRestaurants({ page , categoryId }){
    // URLSearchParams() 方法，幫你把一組物件參數直接組成網址上的 queryString
    const serachParams = new URLSearchParams({ page: page , categoryId: categoryId })
    return apiHelper.get(`/restaurants?${serachParams.toString()}`)
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds')
  },
  getTopRestaurants() {
    return apiHelper.get('./restaurants/top')
  }
}