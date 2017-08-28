<template>
  <div >
    <text class="title" @click="update" >{{date}}</text>
      <selectvue class="list-mask" v-if="isselectaddress" :proviceList="proviceList" :cityListMap="cityListMap" :disListMap="disListMap"  @haveselectedaddress="selectedaddress"></selectvue>
  </div>

</template>

<style>
  .title { font-size: 48px; }
  .list-mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 750px;
    z-index: 10;
    background-color: black;
    opacity: 0.65;
  }  
</style>

<script>
  import selectvue from '../components/select_address.vue'

  export default {
    components:{selectvue},
    methods: {
      update(e) {
        this.isselectaddress = true
      },
      
      selectedaddress(evtValue){
        const self = this
        self.isselectaddress = false
        if(evtValue !== ''){
          self.date = evtValue
        }      
      }
    },
    data(){
      return{
        proviceList:[],
        cityListMap:{},
        disListMap:{},
        isselectaddress: false,
        date:'点击选择地址'
      }
    },
    mounted(){
      // console.error(global.proviceList)

      this.proviceList = global.proviceList
      this.cityListMap = global.cityListMap
      this.disListMap = global.disListMap         
      
      // var tempPath = "webos\s07549e09be07417c@-1\jreport-webstudio\webreport\s07549e09c33ec190\Link.pdf";
      // tempPath = tempPath.replace(/\\/g, '/');
      // console.log('----------1>' +tempPath)     
      // console.log('----------2>' +tempPath.replace(/\\/g, '/'))
    }
  }
</script>
