<template>
  <div class="cell-item" @click="push(`/detail/${item.recordId}`)">

    <div class="picpart">
      <image v-bind:src="item.pic" class="logo"/>
    </div>
    <div class="rightpat">
      <div style="flex-direction: row;margin-top:10px;">
        <text class="description1">{{item.name}}</text>
        <text class="description2" lines="3">{{item.content}}</text>
      </div>
      <div style="flex-direction: row;flex-wrap:wrap;margin-top:10px;">
          <text  v-for="name in tags" style="padding:10px;text-align: center; font-size: 22px;color:gray;background-color:#00BBE4;color:white;border-radius: 15px;margin-left:5px;margin-right:5px;">{{name}}</text>
      </div>
      <!-- 所有tag -->
      <!-- <text class="description2">{{item.describer}}</text>
      <div style="width:430px; flex-direction: row; justify-content: space-between;padding-top:15px;">
        <text class="description3">￥{{item.price}}元 /{{unit}}</text>
        <text class="zubotton"> 立即租赁</text>      
      </div> -->
    </div>
  </div>
</template>

<style scoped>
  .cell-item {
    flex-direction: row;
    flex-wrap: nowrap;        
    position: relative;    
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color:#d9d9d9;
    background-color: white;     
  }
  .picpart{
    align-items: center;  
    width: 250px;  
  }
  .rightpat{
    justify-content: space-between;
    margin-left: 20px;
    width: 450px; 
  }
  .descriptiontitle{
    position: relative;
    width: 450px;
    height: 30px;
    font-size: 25px;
    color: white;
    text-align: center;   
    background-color: red;
  }
  .description1{
    font-family:iconfont4;
    position: relative; 
    font-weight:bold;
    color:#262626;  
    width: 150px;
    line-height:40px;     
    font-size: 28px;
    padding: 2px;
  }
  .description2{
    font-family:iconfont2;
    color:#666666;  
    position: relative;    
    line-height:32px;  
    font-size: 23px;
    margin-left: 20px;
    width: 250px;
    padding: 10px;   
    lines:3;
    text-overflow:ellipsis; 
  }
  .description3{
    font-family:iconfont4;    
    position: relative;    
    width: 250px;
    font-size: 28px;
    padding: 2px;    
    color: red;   
  }    
  .logo {
    position: relative;
    resize :stretch;
    width: 200px;
    height: 200px;
    border-radius:100px;
  }
  .cartitem {
    position: relative;
    align-self:flex-end;
    flex-grow: 1;
    width: 60px;
    height: 60px;
    bottom: 0; 
    right: 0;    
    margin-bottom: 20px;
  }
  .zubotton {
    border-radius:15px;
    color: white;
    width: 150px;
    text-align: center;
    font-size: 28px;
    background-color: red;
    border-width: 2px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-style: solid;
    border-color:red;
    align-self:flex-end;
  }
 	.icon-close{
		position:absolute;
		left:20px;
		top:20px;
		width:40px;
    height: 40px;
		color:#aaa;
	}
</style>

<script>

  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    // data:{
    //   tags:[]
    // },
    computed: {
      tags(){
        return this.item.tag.split(",")
      }
    }
  }
</script>
