<template>
<!-- 分类信息 -->
  <div class="box" append="tree">
      <list class="list" :style="{height:`${totalheight}px`}">
        <cell v-for="(item, index) in $store.state.classeslist" :key="item.recordId" >
          <text class="classitem" :style="{color:item.isactive? '#00BBE4':'gray'}" :item="item" @click="selectclass(index)">{{item.name}}</text>
        </cell>      
      </list>

    <scroller class="scroller" :style="{height:`${totalheight}px`}" v-if="typeof($store.state.classeslist[selectindex]) !== 'undefined'">
      <div class="rightbox"  >     
          <text class="smallclassitem" v-for="item in $store.state.classeslist[selectindex].list"  :item="item">{{item.name}}</text>
      </div>
    </scroller>
  </div>

</template>

<style>
  .box {
    flex-direction: row;
    width: 750px;
  }
  .rightbox{
    width:550px;
    flex-direction: row;
    flex-wrap:wrap;
  }
  .scroller {
    width:540px;
    margin-top: 4px;
  }
  .list{
    width:200px; 
    border-right-width: 2px;
    margin-top: 4px; 
    border-right-color: #00BBE4;
    border-right-style: solid;
    margin-left:5px;
  }
  .classitem{
    width:200px;
    padding-top:50px;
    padding-bottom:50px;
    text-align: center; 
    font-size: 42px;
  }
  .smallclassitem{
    padding:20px;
    margin: 20px;
    text-align: center; 
    font-size: 32px;
    background-color: #FF00FF;
    border-radius: 25px;
    color:white;
  }
</style>

<script>
  export default {
    data(){
      return{
        selectindex:0,
      }
    },
    methods:{
      selectclass(index){
        var _self = this
        _self.selectindex=index
        for(var i=0;i<_self.$store.state.classeslist.length;i++){
           _self.$store.state.classeslist[i].isactive = false
        }
        _self.$store.state.classeslist[index].isactive = true
      },
      fetchClassesData (type,data) {
        var _self = this
        this.$store.dispatch('FETCH_LIST_DATA', {
          type: type,
          data: data
        }).then(data => {
          if(data.status === '0'){
            // 请求成功 初始化列表信息
            data.result[_self.selectindex].isactive = true
            _self.$store.state.classeslist = data.result
            console.error(JSON.stringify(data))
          }
        })
      },
    },
    created(){
      var _self = this
      if(this.$store.state.classeslist.length === 0){
        _self.fetchClassesData('http://jisusrecipe.market.alicloudapi.com/recipe/class',{})
      }
    },
    computed: {
      totalheight(){
        const height = 750/weex.config.env.deviceWidth*weex.config.env.deviceHeight 
        return height-288
      }
    }
  }
</script>
