<template>
  <div class="header">
    <div class="nav">
      <div class="link" @click="replace('/indexpage/homepage/1')">
        <image id="image1" v-bind:src="src1" class="logo"></image>
        <text class="title" :style="{color:isactive1?'#00BBE4':'gray'}">首页{{pathchanged}}</text>
      </div>
      <div class="link" @click="replace('/indexpage/classification/2')">
        <image v-bind:src="src2" class="logo"></image>
        <text class="title" :style="{color:isactive2?'#00BBE4':'gray'}">分类</text>
        <!--<text v-bind:class="{ titleon: isActive2, title: !isActive2 }">分类</text>        -->
      </div>
      <div class="link" @click="replace('/indexpage/myaccount/4')">
        <image v-bind:src="src4" class="logo"></image>      
        <text class="title" :style="{color:isactive4?'#00BBE4':'gray'}">我的</text>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'app-header',
    data () {
      return {
        src1: "../../assets/home_btn_home_s.png",
        src2: "../../assets/home_btn_rent.png",
        src3: "../../assets/cut.png",
        src4: "../../assets/home_btn_me.png",
        isactive1: true,
        isactive2: false,
        isactive3: false,
        isactive4: false       
      }
    },        
    props: {
      path: String
    },
     computed: {    
      pathchanged(){
           var vm = this
            if(this.path === '1'){
              vm.src1 = "../../assets/home_btn_home_s.png"
              vm.src2 = "../../assets/home_btn_rent.png"
              vm.src3 = "../../assets/cut.png"
              vm.src4 = "../../assets/home_btn_me.png" 
              vm.isactive1=true
              vm.isactive2=false
              vm.isactive3=false
              vm.isactive4=false   
            }else if(this.path === '2'){
              vm.src1 = "../../assets/home_btn_home.png"
              vm.src2 = "../../assets/home_btn_rent_s.png"
              vm.src3 = "../../assets/cut.png"
              vm.src4 = "../../assets/home_btn_me.png" 
              vm.isactive1=false
              vm.isactive2=true
              vm.isactive3=false
              vm.isactive4=false               
            }else if(this.path === '3'){
              vm.src1 = "../../assets/home_btn_home.png"
              vm.src2 = "../../assets/home_btn_rent.png"
              vm.src3 = "../../assets/cut_on.png"
              vm.src4 = "../../assets/home_btn_me.png"
              vm.isactive1=false
              vm.isactive2=false
              vm.isactive3=true
              vm.isactive4=false    
            }else if(this.path==='4'){
              vm.src1 = "../../assets/home_btn_home.png"
              vm.src2 = "../../assets/home_btn_rent.png"
              vm.src3 = "../../assets/cut.png"
              vm.src4 = "../../assets/home_btn_me_s.png" 
              vm.isactive1=false
              vm.isactive2=false
              vm.isactive3=false
              vm.isactive4=true                   
            }        
        return ''
      }
     }
}
</script>

<style scoped>
  .header {
    width:750px;
    bottom:0; 
    left:0;
    height: 120px;
    border-top-width: 2px;
    border-top-style: solid;
    border-top-color: #DDDDDD;
    background-color: white;
  }
  .logo {
    position: relative;
    width: 45px;
    height: 45px;
  }
  .nav {
    position: absolute;
    width: 750px;
    top: 20px;
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
    /*color: gray;*/
  }
  .titleon {
    font-size: 25px;
    line-height: 35px;
    text-align: center;
    top: 5px;
    color: #00BBE4;
  }
</style>
