export default {
  methods: {
    push (to) {
      if (this.$router) {     
        this.$router.push(to)
      }
    },
    back () {
      if (this.$router) {
        this.$router.back()
      }
    },    
    replace (to) {
      if (this.$router) {
        this.$router.replace(to)
      }
    }
  }
}
