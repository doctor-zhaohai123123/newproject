<template>
  <div class="error">
    <h3>百度地图</h3>
    <h3>百度地图</h3>
    <h3>百度地图</h3>
    <div id='allmap' style='height:300px'></div>
    <input type="text" value="" v-model='start'>
    <input type="text" value="" v-model='end'>
    <input type="button" value="搜索" @click="search">
    <input type="text" value="" v-model='near'>
    <input type="button" value="周边搜" @click="nearby">
  </div>
</template>

<script>
export default{
    data(){
        return{
            map:null,
            marker:null,
            start:'上海 智慧七立方',
            end:'上海 人民广场',
            near:'餐厅',
            point:null
        }
    },
    mounted(){
        this.map = new BMap.Map("allmap");    // 创建Map实例
        this.point = new BMap.Point(121.4981201000,31.3845163011)
        this.map.centerAndZoom(this.point, 16); //初始化地图,设置中心点坐标和地图级别
        this.map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
        this.marker = new BMap.Marker(this.point);  // 创建标注
	    this.map.addOverlay(this.marker);               // 将标注添加到地图中
	    this.marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    },
    methods:{
        search(){
            this.map.clearOverlays();
            var walking = new BMap.WalkingRoute(this.map, {renderOptions:{map: this.map, autoViewport: true}});
	        walking.search(this.start, this.end);
        },
        nearby(){
            this.map.clearOverlays();
            var local =  new BMap.LocalSearch(this.map, {renderOptions: {map: this.map, autoViewport: false}});  
            local.searchNearby(this.near,this.point,1000);
        }
    }

}

</script>
<style scoped>

</style>

