<template>
  <div class="cell-item" @click="push(`/detail/${item.recordId}`)">

    <div class="picpart">
      <image v-bind:src="fooditem.pic" class="logo"/>
    </div>
    <div class="rightpat">
      <text class="description1">{{fooditem.name}}</text>
      <text class="description2" lines="3">{{fooditem.content}}</text>
      <div style="width:290px;flex-direction: row;flex-wrap:wrap;margin-top:10px;align-items: center;">
          <text  v-for="name in tags" style="padding:10px;text-align: center; font-size: 22px;color:gray;background-color:#00BBE4;color:white;border-radius: 15px;margin-left:5px;margin-right:5px;">{{name}}</text>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .cell-item {
    flex-wrap: nowrap;        
    position: relative;    
    align-items: center;
    width: 300px;
    margin-top: 10px;
    margin-bottom: 10px;
    /* border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color:#d9d9d9; */
    background-color: white;     
  }
  .picpart{
    align-items: center;  
    width: 300px;  
  }
  .rightpat{
    justify-content: space-between;
    margin-left: 20px;
    width: 300px; 
  }
  .description1{
    font-family:iconfont4;
    position: relative; 
    font-weight:bold;
    color:#262626;  
    line-height:40px;     
    font-size: 28px;
    width: 290px;
    text-align: center;
    padding: 2px;
  }
  .description2{
    font-family:iconfont2;
    color:#666666;  
    position: relative;    
    line-height:32px;  
    font-size: 23px;
    width: 290px;
    padding: 10px;   
    lines:3;
    text-overflow:ellipsis; 
  } 
  .logo {
    position: relative;
    resize :stretch;
    width: 200px;
    height: 200px;
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
      fooditem: {
        type: Object,
        required: true
      }
    },
    // data:{
    //   tags:[]
    // },
    computed: {
      tags(){
        console.error(this.fooditem)
        console.error(JSON.stringify(this.fooditem))
        return this.fooditem.tag.split(",")
      }
    }
  }
</script>
