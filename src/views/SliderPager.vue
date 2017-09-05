<template>
  <div :style="{height:`${totalheight}px`}">
    <slider style="flex:1;" @change="onchange" :index="page">
      <div class="frame" :style="{height:`${totalheight}px`}" v-for="(item, index) in menulist">
        <!-- 这里面放每一个菜单 '分类','列表','宝宝食谱'  -->
        <classes v-if="index === 0"></classes>
        <listview v-if="index === 1"></listview>
        <babyfoods v-if="index === 2"></babyfoods>
      </div>
    </slider>
    <text style="background-color:gray;height:2px;bottom:100px;"/>
    <div class="nav">
      <div class="link" @click="changepage(0)">
        <image id="image1" v-bind:src="src1" class="logo"></image>
        <text class="title" :style="{color:page === 0?'#00BBE4':'gray'}">{{menulist[0]}}{{pathchanged}}</text>
      </div>
      <div class="link" @click="changepage(1)">
        <image v-bind:src="src2" class="logo"></image>
        <text class="title" :style="{color:page === 1?'#00BBE4':'gray'}">{{menulist[1]}}</text>
      </div>
      <div class="link" @click="changepage(2)">
        <image v-bind:src="src3" class="logo"></image>      
        <text class="title" :style="{color:page === 2?'#00BBE4':'gray'}">{{menulist[2]}}</text>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .image {
    width: 750px;
    height: 700px;
  }
  /* .slider {
    width: 750px;
    height: 700px;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  } */
  .frame {
    width: 750px;
    /* height: 700px; */
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
    background-color:white;
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
  import classes from './ClassView.vue'
  import listview from './ListView.vue'
  import babyfoods from './BabyFoods.vue'

  export default {
    components:{classes,listview,babyfoods},    
    data () {
      return {
        page:0,
        menulist: ['分类','菜系','宝宝食谱'],
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
        return height
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
    },
    created(){
      const _self = this
      // 获取菜谱分类信息
    }
  }
</script>