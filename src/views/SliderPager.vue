<template>
  <div :style="{height:`${totalheight}px`}">
    <slider style="flex:1;" @change="onchange" :index="page">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
        <text class="contenttext">这是第{{page+1}}页</text>
      </div>
    </slider>
    <text style="background-color:gray;height:2px;bottom:100px;"/>
    <div class="nav">
      <div class="link" @click="changepage(0)">
        <image id="image1" v-bind:src="src1" class="logo"></image>
        <text class="title" :style="{color:page === 0?'#00BBE4':'gray'}">首页{{pathchanged}}</text>
      </div>
      <div class="link" @click="changepage(1)">
        <image v-bind:src="src2" class="logo"></image>
        <text class="title" :style="{color:page === 1?'#00BBE4':'gray'}">分类</text>
      </div>
      <div class="link" @click="changepage(2)">
        <image v-bind:src="src3" class="logo"></image>      
        <text class="title" :style="{color:page === 2?'#00BBE4':'gray'}">我的</text>
      </div>
    </div>
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
  .logo {
    position: relative;
    width: 45px;
    height: 45px;
  }
  .nav {
    position: absolute;
    width: 750px;
    bottom: 0px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }
  .link {
    width: 162.5px;
    flex-shrink: 1;
    text-align: center;
    margin:0 auto;
    padding: 3px;
    align-items: center;
  }
  .title {
    font-size: 25px;
    line-height: 35px;
    text-align: center;
    top: 5px;
  }
  .contenttext {
    font-size: 32px;
    line-height: 35px;
    text-align: center;
    top: 25px;
    color: 38px;
    color: red;
  }  
</style>
<script>
  export default {
    data () {
      return {
        page:0,
        imageList: [
          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
        ],
        src1: "../../../assets/home_btn_home_s.png",
        src2: "../../../assets/home_btn_rent.png",
        src3: "../../../assets/cut.png"
      }
    },
    methods:{
      onchange(evtValue){
         this.page=evtValue.index     
      },
      changepage(page){
        this.page=page
      }
    },
    computed: {
      totalheight(){
        const height = 750/weex.config.env.deviceWidth*weex.config.env.deviceHeight 
        return height-180
      },
      pathchanged(){        
           var self = this
            if(self.page === 0){
              self.src1 = "../../../assets/home_btn_home_s.png"
              self.src2 = "../../../assets/home_btn_rent.png"
              self.src3 = "../../../assets/cut.png"
            }else if(self.page === 1){
              self.src1 = "../../../assets/home_btn_home.png"
              self.src2 = "../../../assets/home_btn_rent_s.png"
              self.src3 = "../../../assets/cut.png"
            }else if(this.page === 2){
              self.src1 = "../../../assets/home_btn_home.png"
              self.src2 = "../../../assets/home_btn_rent.png"
              self.src3 = "../../../assets/cut_on.png"
            }     
        return ''
      }      
    }
  }
</script>