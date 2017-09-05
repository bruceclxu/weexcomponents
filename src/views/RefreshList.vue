<template>
  <scroller class="scroller">
    <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
      <loading-indicator class="indicator" ></loading-indicator>  
      <text class="indicator">Refreshing ...</text>
      <!-- <loading-indicator class="indicator"></loading-indicator> -->
    </refresh>
    <div class="cell" v-for="num in lists">
      <div class="panel">
        <text class="text">{{num}}</text>
      </div>
    </div>
  </scroller>
</template>
<script>
  const modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        refreshing: false,
        lists: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      fetchListData (type,data) {
        var _self = this
        this.$store.dispatch('FETCH_LIST_DATA', {
          type: type,
          data: data
        }).then(data => {
          console.error(JSON.stringify(data))
        })
      },
      onrefresh (event) {
        console.log('is refreshing')
        modal.toast({ message: 'refresh', duration: 1 })
        this.refreshing = true
        setTimeout(() => {
          this.refreshing = false
        }, 3000)
      },
      onpullingdown (event) {
        console.log('is onpulling down')
        modal.toast({ message: 'pulling down', duration: 1 })
      }
    },
    created () {
      const _self = this
      // if(_self.$store.state.tuijianlist.length === 0){
      //   _self.loading = true
        _self.fetchListData('http://jisusrecipe.market.alicloudapi.com/recipe/class',{})
    }
  }
</script>
<style scoped>
  .indicator {
    color: #888888;
    font-size: 42px;
    text-align: center;
  }
  .panel {
    width: 600px;
    height: 250px;
    margin-left: 75px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: #DDDDDD;
    background-color: #F5F5F5;
  }
  .text {
    font-size: 50px;
    text-align: center;
    color: #41B883;
  }
  .refresh{
    background-color: black;
  }
</style>