<template>
<!-- 分类信息 -->
  <div class="box" append="tree">
    <!--list 放人群分类-->
      <list class="list" :style="{height:`${totalheight}px`}">
        <cell v-for="(item, index) in peopleclasses" :key="item.recordId" >
          <text class="classitem" :style="{color:item.isactive? '#00BBE4':'gray'}" :item="item" @click="selectclass(index)">{{item.name}}</text>
        </cell>      
      </list>
    <!--list 瀑布流放食谱信息-->
    <div class="scroller" :style="{height:`${totalheight}px`}" >
      <nodata v-if="$store.state.peoplefoodList.length === 0" style="width:600px;border-top-width: 2px;border-top-style: solid; border-top-color: #DDDDDD;" @click="refresh()"/>
      <waterfall v-if="$store.state.peoplefoodList.length !== 0" style="width:600px;border-top-width: 2px;border-top-style: solid; border-top-color: #DDDDDD;" :style="{height:`${totalheight}px`}" column-width="290px" column-count="2" >      
        <!-- <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
          <loading-indicator class="indicator"></loading-indicator>
          <text class="refreshText">{{refreshText}}</text>
        </refresh>  -->
        <!-- 没有数据情况 -->
        <cell v-for="itemfood in $store.state.peoplefoodList" :key="itemfood.id" append="tree">
          <foodcellv :fooditem="itemfood"></foodcellv>
        </cell>
      </waterfall>    
    </div>
  </div>

</template>

<style>
  .refreshText {
    color: #888888;
    font-weight: bold;
  }
  .refresh {
    height: 128px;
    width: 600px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .indicator {
    color: #888888;
    height: 40;
    width: 40;
    margin-right: 30;
  }


  .box {
    flex-direction: row;
    width: 750px;
  }
  .rightbox{
    width:550px;
    flex-direction: row;
    border-top-width: 2px;
    border-top-style: solid; 
    border-top-color: #DDDDDD;
    flex-wrap:wrap;
  }
  .scroller {
    width:600px;
    margin-top: 4px;
  }
  .list{
    width:150px; 
    border-right-width: 2px;
    margin-top: 4px; 
    border-right-style: solid;
    border-right-color: #00BBE4;
    margin-left:5px;
  }
  .classitem{
    width:150px;
    padding-top:30px;
    padding-bottom:30px;
    text-align: center; 
    font-size: 32px;
  }
  /* .smallclassitem{
    width:180px;
    padding-top:30px;
    padding-bottom:30px;
    text-align: center; 
    font-size: 32px;
    color:gray;
  } */
</style>

<script>
  import foodcellv from '../components/food-cell-v.vue'
  import nodata from '../components/no-data.vue'

  export default {
    components:{foodcellv,nodata},
    data(){
      return{
        selectindex:0,
        classid: '114',
        refreshing: false,
        refreshText: '↓   下拉刷新...',        
        peopleclasses:[
            {
                "classid": "114",
                "name": "孕妇",
                "parentid": "113"
            },
            {
                "classid": "115",
                "name": "备孕期",
                "parentid": "113"
            },
            {
                "classid": "116",
                "name": "孕早期",
                "parentid": "113"
            },
            {
                "classid": "117",
                "name": "孕中期",
                "parentid": "113"
            },
            {
                "classid": "118",
                "name": "孕晚期",
                "parentid": "113"
            },
            {
                "classid": "119",
                "name": "产妇",
                "parentid": "113"
            },
            {
                "classid": "120",
                "name": "坐月子",
                "parentid": "113"
            },
            {
                "classid": "121",
                "name": "婴儿",
                "parentid": "113"
            },
            {
                "classid": "122",
                "name": "幼儿",
                "parentid": "113"
            },
            {
                "classid": "123",
                "name": "宝宝",
                "parentid": "113"
            },
            {
                "classid": "124",
                "name": "一岁宝宝",
                "parentid": "113"
            },
            {
                "classid": "125",
                "name": "两岁宝宝",
                "parentid": "113"
            },
            {
                "classid": "126",
                "name": "三岁宝宝",
                "parentid": "113"
            },
            {
                "classid": "127",
                "name": "儿童",
                "parentid": "113"
            },
            {
                "classid": "128",
                "name": "青少年",
                "parentid": "113"
            },
            {
                "classid": "129",
                "name": "学生",
                "parentid": "113"
            },
            {
                "classid": "130",
                "name": "小学生",
                "parentid": "113"
            },
            {
                "classid": "131",
                "name": "中学生",
                "parentid": "113"
            },
            {
                "classid": "132",
                "name": "考生",
                "parentid": "113"
            },
            {
                "classid": "133",
                "name": "白领",
                "parentid": "113"
            },
            {
                "classid": "134",
                "name": "中年人",
                "parentid": "113"
            },
            {
                "classid": "135",
                "name": "更年期",
                "parentid": "113"
            },
            {
                "classid": "136",
                "name": "老年人",
                "parentid": "113"
            }
        ],
      }
    },
    
    methods:{
      loadData(start,num){
        this.fetchListData('http://jisusrecipe.market.alicloudapi.com/recipe/byclass?classid='+this.classid+'&num='+num+'&start='+start,{})
      },      
      selectclass(index){
        var _self = this
        _self.selectindex=index
        for(var i=0;i<_self.$store.state.classeslist.length;i++){
           _self.peopleclasses[index].isactive = false
        }
        _self.peopleclasses[index].isactive = true
        _self.classid = _self.peopleclasses[index].classid
        _self.loadData('0','20')
      },
      fetchListData (type,data) {
        var _self = this
        this.$store.dispatch('FETCH_LIST_DATA', {
          type: type,
          data: data
        }).then(data => {
          if(data.status === '0'){
            // 请求成功 初始瀑布流信息 
            console.error(JSON.stringify(data.result))
            _self.$store.state.peoplefoodList = data.result.list
            
          }
        })
      },
      onrefresh (event) {
        weex.requireModule('modal').toast({ message: "loading...",duration: 0.8})
        this.refreshing = true
        this.refreshText = "刷新..."
        setTimeout(() => {
          this.refreshing = false
          this.refreshText = '↓   下拉刷新...'
        }, 2000)
      },

      onpullingdown (event) {
        if (event.pullingDistance < -64) {
          this.refreshText = '↑   松开刷新...'
        } else {
          this.refreshText = '↓   下拉刷新...'
        }
      }      
    },
    created(){
      this.loadData('0','20')
      this.peopleclasses[0].isactive = true
    },
    computed: {
      totalheight(){
        const height = 750/weex.config.env.deviceWidth*weex.config.env.deviceHeight 
        return height-288
      }
    }
  }
</script>
