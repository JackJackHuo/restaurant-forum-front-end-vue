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

