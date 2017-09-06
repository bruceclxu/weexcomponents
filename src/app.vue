<template>
<!-- 分类信息 -->
  <div class="box" append="tree">
      <router-view style="flex:1;"></router-view> 
      <!-- <list class="classlist" append="tree">
        <cell v-for="(item, index) in $store.state.classeslist" :key="item.recordId" >
          <text class="classitem" :style="{color:item.isactive? '#00BBE4':'gray'}" :item="item" @click="selectclass(index)">{{item.name}}</text>
        </cell>      
      </list> -->

    <!-- <scroller class="scroller" v-if="typeof($store.state.classeslist[selectindex]) !== 'undefined'">
      <div class="rightbox"  >     
          <text class="smallclassitem" v-for="item in $store.state.classeslist[selectindex].list"  :item="item">{{item.name}}</text>
      </div>
    </scroller> -->
  </div>

</template>

<style>
  .box {
    flex-direction: row;
    /* width: 375; */
  }

</style>

<script>
  export default {

  }
</script>
