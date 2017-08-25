<template>
  <div :style="{height:`${totalheight}px`}">
    <slider style="flex:1;">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
    </slider>
    <app-footer class="footer" :path="path"></app-footer>  
  </div>
</template>
<style scoped>
  .image {
    width: 750px;
    height: 700px;
  }
  .slider {
    width: 750px;
    height: 700px;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
  .frame {
    width: 750px;
    height: 700px;
    position: relative;
  }
  .footer{
    position: absolute;
    /* top: 1000px; */
    bottom: 0px;
  }
</style>
<script>
  import AppFooter from './components/app-footer.vue'

  export default {
    components: { AppFooter },

    data () {
      return {
        path:'1',
        imageList: [
          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
        ]
      }
    },
    computed: {
      totalheight(){
        const height = 750/weex.config.env.deviceWidth*weex.config.env.deviceHeight 
        console.error('height:'+height)
        return height
      }
    },    
  }
</script>