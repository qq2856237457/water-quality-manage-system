<template>
  <div id="container"></div>
</template>

<script>
import AMap from 'AMap' // 引入高德地图

let map = {};

export default {
  name: 'Map',
  mounted () {
    this.createMap()
  },
  methods: {
    createMap () {
      map = new AMap.Map("container", {
        center: ['118.543265', '32.054690'],
        resizeEnable: true,
        zoom: 12
      });

      this.addMarker()
    },
    async addMarker () {
      // const { data } = await this.$http.get('/apis/markers.json')
      
      const data = [
          {
            "id": 1,
            "name": "江苏省南京市南京邮电大学校内湖",
            "coordinate": ["118.555598", "32.062651"],
            "waterSourceType": "地表水",
            "waterQaulityType": "Ⅰ类",
            "equipmentStatus":"正常",
          },
          {
            "id": 2,
            "name": "江苏省南京市玄武湖公园",
            "coordinate": ["118.475575", "32.041979"],
            "waterSourceType": "地表水",
            "waterQaulityType": "Ⅰ类",
            "equipmentStatus":"正常",
          },
          {
            "id": 3,
            "name": "江苏省南京市经济技术开发区",
            "coordinate":["118.524417", "32.084897"],
            "waterSourceType": "地下水",
            "waterQaulityType": "Ⅳ类",
            "equipmentStatus":"正常",
          },
          {
            "id": 4,
            "name": "江苏省南京市大黄水库",
            "coordinate": ["118.32914", "32.015949"],
            "waterSourceType": "地表水",
            "waterQaulityType": "Ⅱ类",
            "equipmentStatus":"正常",
          },
          {
            "id": 5,
            "name": "江苏省南京市新合民营工业园",
            "coordinate": ["118.543541", "32.09194"],
            "waterSourceType": "地下水",
            "waterQaulityType": "劣Ⅴ类",
            "equipmentStatus":"正常",
          }
      ];
      
      data.forEach(e => {
        var marker = new AMap.Marker({
          position: e.coordinate,
          icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
        });
        marker.setMap(map);

        var infoWindow = new AMap.InfoWindow({
            content: this.createInfoWindow(e).join(""),
            offset: new AMap.Pixel(0, -35)
        });

        // 因为添加到infoWindow中绑定的是window的全局方法，所以这里需要将组件的局部方法赋值给全局方法
        if (!window.viewDetailInfo) {
          window.viewDetailInfo = this.viewDetailInfo;
        }

        //鼠标悬停marker弹出信息窗体
        AMap.event.addListener(marker, 'mouseover', function () {
          infoWindow.open(map, marker.getPosition());
        });

        //鼠标离开marker关闭信息窗体
        AMap.event.addListener(marker, 'mouseout', function () {
          infoWindow.close(map, marker.getPosition());
        });

        //鼠标点击marker
        AMap.event.addListener(marker, 'click', function () {
          viewDetailInfo()
        });
        
      });
    },
    //构建自定义信息窗体
    createInfoWindow(e) {
      var info = [];
      info.push("<div class='content-window-card'>");
      info.push("<div style=\"padding:7px 0px 0px 0px;\">");
      info.push("<h4>" + e.name + "</h4>");
      info.push("<p class='input-item'>水源类型: " + e.waterSourceType + "</p>");
      info.push("<p class='input-item'>水质类别: " + e.waterQaulityType + "</p>");
      // info.push("<p class='input-item'>监测参数:</p>");
      info.push("<p class='input-item'>监测设备运行状态："+e.equipmentStatus+"</p>");
      info.push("</div>");
      info.push("</div>");
      return info;
    },
    // 信息窗体中详细信息跳转
    viewDetailInfo(id) {
      this.$router.push({ path: '/layout/monitor' })
    }
  }
}
</script>

<style lang="less" scoped>
#container {
  width:100%; 
  height:100%; 
  border-radius: 4px;
  background-color: #FFFFFF;
}

/deep/ .content-window-card {
  position: relative;
  width: 23rem;
  padding: 0.75rem 0 0 0.75rem;
  box-shadow: none;
  bottom: 0;
  left: 0;

  p {
    height: 1rem;
    font-size: 12px;
  }

  h4 {
    margin: 0 0 0 0;
  }
}

</style>