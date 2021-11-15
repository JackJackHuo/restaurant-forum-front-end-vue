import moment from 'moment'

export const fromNowFilter = {
  computed: {
    fromNow() {
      return (datetime) => {
        if (!datetime) return '-'
        return moment(datetime).fromNow()
      }
    }
  }
}

export const emptyImageFilter = {
  computed: {
    emptyImage() {
      return (src) => {
        return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
      }
    }
  }
}



