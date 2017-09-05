<template>
<!-- 菜谱列表 -->
  <div append="tree">
    <!--搜索框实现-->
    <div class="position-title-box">
      <div class="search-box">  
        <image src="../../asserts/guide_tfaccount_nm.png" class="logo"></image>            
        <text class="search" type="text" value = "请输入要搜索内容" @click="push('/search')"/>
      <!--<text style="color:#00BBE4; font-size:38px; height:50px;text-align: center; width:750px;">商品搜索</text>-->
      </div>  
      <text style="color:#00BBE4; font-size:30px; margin-top:5px;width:80px;text-align: center;">搜索</text>
    </div>  
    <!-- <text :value="classeslist" /> -->
    <div class="cartgory"  :style="{height:`${cateheight}px`}" v-if="typeof($store.state.classeslist[4]) !== 'undefined'">
        <text v-for="(item, index) in classeslist" class="goryitem" :style="{color:item.isactive? '#00BBE4':'gray'}" @click="active(index)" >{{item.name}}</text>           
        <text class="goryitem" @click="showAll()">{{menutextvalue}} </text> 
    </div>

    <nodata v-if="$store.state.productList.length === 0" style="border-top-width: 2px;border-top-style: solid; border-top-color: #DDDDDD;" @click="refresh()"/>
    <list v-if="$store.state.productList.length !== 0" style="border-top-width: 2px;border-top-style: solid; border-top-color: #DDDDDD;" :style="{height:`${totalheight}px`}"  @loadmore="loadmore" loadmoreoffset="10">
      <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
        <div class="refreshcontent" >
          <image ref="refreshimg"  src="../../asserts/loading.png" class="refreshimage"></image>            
          <text class="refreshtext">正在刷新 ...</text>
        </div>
      </refresh>        
        <!-- 没有数据情况 -->
      <cell v-for="item in $store.state.productList" :key="item.recordId" append="tree">
        <foodcell :item="item"></foodcell>
      </cell>
    </list>    
  </div>

</template>

<style>
  .search-box{
    flex-direction: row;
    flex-wrap: nowrap;     
    width: 650px;
    padding-top: 5px;
    padding-bottom: 5px; 
    padding-left: 10px;
    padding-right: 10px;
    border-width: 3px;
    border-style: solid;
    border-color: #DDDDDD;    
    border-radius:40px;
  }
  .search{
    font-size: 25px;
    width: 600px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    color: #666666;  
    border-width: 0px;
  }
  .cartgory{
    flex-direction: row;
    flex-wrap: wrap;
    height: 280px;
    width:750px;
  }
  .goryitem{
    color:gray; 
    font-size:25px; 
    padding-top:25px; 
    padding-left:5px;
    padding-right:5px;
    padding-bottom: 7px;
    margin-left:3px;
    margin-right: 3px;
    height:80px;
    width: 180px;
    text-align: center;
    border-bottom-width: 0px;
  }
  .position-title-box{
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;    
    justify-content: center;
    align-items:center;
    height:100px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
    background-color: white;    
  }
  .logo {
    position: relative;
    width: 30px;
    height: 30px;
    margin-top: 8px;
    margin-left: 10px;
  }
 
  .refresh{
    background-color: black;
  }
  .refreshtext{
    padding: 20px;
    font-size: 32px;
    color: white;
  }
  .refreshimage{
    width: 50px;
    height: 50px;
  }
  .refreshcontent{
    justify-content:center;
    flex-direction:row;
    align-items:center;
  }
</style>

<script>
  const animation = weex.requireModule('animation')
  import foodcell from '../components/food-cell.vue'
  import nodata from '../components/no-data.vue'
  export default {
    components:{foodcell,nodata},
    data () {
      return {
        loading: false,
        cateheight:80,
        selectRecordId:0,
        from:0,
        maxNum :20,
        refreshing:false,
        classid:244,
        menutextvalue:'展开'
      }
    },

    methods: {
      move () {
        var _self = this
        var refreshimg = this.$refs.refreshimg;
        animation.transition(refreshimg, {
          styles: {
            color: '#FF0000',
            transform: 'rotate(3600000deg)',
            transformOrigin: 'center center'
          },
          duration: 10000000, //ms
          timingFunction: 'ease',
          delay: 0 //ms
        }, function () {
        })
      },      
      onrefresh (event) {
        console.log('is refreshing')
        this.refreshing = true
        // this.fetchListData('/api/index.xhtml',{})
        this.loadData('0','20')
      },
      onpullingdown (event) {
        console.log('is onpulling down')
      },      
      active(select_index){ 
        var _self = this;
        _self.$store.state.productList = []
        _self.$store.state.classeslist[4].list.forEach(function(value, index, array) {
          if(select_index === index){
            _self.$store.state.classeslist[4].list[index].name = _self.$store.state.classeslist[4].list[index].name+' '
            _self.$store.state.classeslist[4].list[index].name = _self.$store.state.classeslist[4].list[index].name.replace(/(^\s*)|(\s*$)/g,'')                
            _self.$store.state.classeslist[4].list[index].isactive = true
          }else{
            // _self.$store.state.classeslist[4].list[index].name.split(" ").join("")
            _self.$store.state.classeslist[4].list[index].name = _self.$store.state.classeslist[4].list[index].name.replace(/(^\s*)|(\s*$)/g,'')          
            _self.$store.state.classeslist[4].list[index].isactive = false
          }
        });
        //请求服务器
        _self.classid =  _self.$store.state.classeslist[4].list[select_index].classid
        _self.loadData('0','20')
      },
      oninput (event) {
        modal.toast({
          message: `oninput: ${event.value}`,
          duration: 0.8
        })
      },
      loadmore (event) {
        loadData(from,maxNum)
      },
      fetchListData (type,data) {
        var _self = this;
        this.loading = true
        this.$store.dispatch('FETCH_LIST_DATA', {
          type: type,
          data: data
        }).then(data => {
          _self.loading = false
          // console.error(JSON.stringify(data.result.list))
          _self.$store.state.productList = data.result.list
          _self.from = _self.$store.state.productList.length
          this.refreshing = false
        })//需要添加错误处理
      },
      loadData(start,num){
        this.fetchListData('http://jisusrecipe.market.alicloudapi.com/recipe/byclass?classid='+this.classid+'&num='+num+'&start='+start,{})
      },
      showAll(){
        if(this.cateheight  === 80){
          // 计算高度
          this.cateheight = (this.$store.state.classeslist[4].list.length/4+1)*80
          this.menutextvalue = '收起'
        }else{
          this.cateheight = 80
          this.menutextvalue = '展开'
        }
      }
    },
    computed: {
      classeslist(){
        const _self = this
        if(this.cateheight === 80 && this.$store.state.classeslist.length !==0){
          return this.$store.state.classeslist[4].list.slice(0,3)
        }else if(this.$store.state.classeslist.length !==0){
          return this.$store.state.classeslist[4].list
        }
        return  []
      },
      totalheight(){
        const height = 750/weex.config.env.deviceWidth*weex.config.env.deviceHeight 
        return height-460
      }
    },
    created () {      
      this.loadData('0','20')
    } 
  }
</script>
