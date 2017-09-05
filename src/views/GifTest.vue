<template>
  <div style="margin:20px;">
    <text>版本号为{{version}}</text>
    <!-- 否则用 image-->
    <image src="../../assets/loading.gif" style="width:268px;height:200px;margin-top:50px;"></image>
    <image src="../../assets/account.png" style="width:268px;height:200px;margin-top:50px;"></image>
    <gifimage src="loading.gif" style="width:268px;height:200px;margin-top:50px;" ></gifimage>
 </div>
</template>
<style scoped>

</style>
<script>
  export default {
    data(){
      return {
        version:'0.0.0'
      }
    },
    created(){
      const _self = this
      //本来是不需要传递一个 参数给 getVersionName 方法的，由于ios有个蛋疼的问题，如果不传参数就拿不到数据，所以习惯性的给一个空过去
      weex.requireModule('poneInfo').getVersionName('',function(info){
        //info 为版本号信息
        _self.version = info
      });
    }
  }
</script>