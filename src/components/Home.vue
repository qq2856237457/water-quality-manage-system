<template>
  <!-- 页面主体 -->
  <section class="mainbox">
    <!-- 左侧盒子 -->
    <div class="column">
      <div class="panel bar">
        <h2>水质指标比重</h2>
        <!-- 图表放置盒子 -->
        <div class="chart"></div>
        <!-- 伪元素绘制盒子下边角 -->
        <div class="panel-footer"></div>
      </div>
      <div class="panel line">
        <h2>指标变化
          <a class="a-active" href="javascript:;" >ph值</a>
          <a  href="javascript:;">电导率</a>
          <a  href="javascript:;">温度</a>
          <a  href="javascript:;">浊度</a>
          <a  href="javascript:;">溶解氧</a>
        </h2>
        <div class="chart"></div>
        <div class="panel-footer"></div>
      </div>
      <div class="panel pie">
        <h2>水质分类饼状图</h2>
        <div class="chart"></div>
        <div class="panel-footer"></div>
      </div>
    </div>
    <!-- 中间盒子 -->
    <div class="column">
      <!-- 头部 no模块 -->
      <div class="no">
        <div class="no-hd">
          <ul>
            <li>50</li>
            <li>23</li>
          </ul>
        </div>
        <div class="no-bd">
          <ul>
            <li>监测设备需求人数</li>
            <li>监测设备供应数量</li>
          </ul>
        </div>
      </div>
      <!-- map模块 -->
      <div class="map">
        <div class="map1"></div>
        <div class="map2"></div>
        <div class="map3"></div>
        <div id="aaaa">水质参数评分详情</div>
        <div class="chart"></div>
        </div>

        </div>


    <!-- 右侧盒子 -->
    <div class="column">
      <div class="panel bar2">
        <h2>水质参数雷达图</h2>
        <div class="chart"></div>
        <div class="panel-footer"></div>
      </div>
      <div class="panel line2">
        <h2>水质评分变化</h2>
        <div class="chart"></div>
        <div class="panel-footer"></div>
      </div>
      <div class="panel pie2">
        <h2>设备分布饼状图</h2>
        <div class="chart"></div>
        <div class="panel-footer"></div>
      </div>
    </div>
  </section>
</template>

<script>

import { echarts } from "../assets/js/echarts.js"
import { flexible } from "../assets/js/flexible.js"
import { index } from "../assets/js/index.js"
import { jquery } from "../assets/js/jquery.js"

export default {
  name: "Home",
  mounted() {
    flexible()
    echarts()
    jquery()
    index()
  },
  data() {
    return {}
  },
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#aaaa{
  height: 0.6rem;
  color: rgb(241, 241, 247);
  line-height: 0.6rem;
  text-align: center;
  margin-top:10px;
  font-size: 0.5rem;
  font-weight: 400;
}
.mainbox {
  display: flex;
}
li {
  list-style: none;
}
@font-face {
  font-family: electronicFont;
  src: url(../assets/font/DS-DIGIT.TTF);
}
section {
  /* background: url(../assets/images/bg.jpg) no-repeat top center; */
  background-color: rgb(34, 33, 33);
  line-height: 1.15;
}
header {
  position: relative;
  height: 1.25rem;
  background: url(../assets/images/head_bg.png) no-repeat;
  background-size: 100% 100%;
}
header h1 {
  font-size: 0.475rem;
  color: rgba(255, 255, 255, 0.87);
  text-align: center;
  line-height: 1rem;
}
header .show-time {
  position: absolute;
  top: 0;
  right: 0.375rem;
  line-height: 0.9375rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.25rem;
}
.mainbox {
  display: flex;
  min-width: 1024px;
  max-height: 1920px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
}
.mainbox .column {
  flex: 3;
}
.mainbox .column:nth-child(2) {
  flex: 5;
  margin: 0 0.125rem 0.1875rem;
  overflow: hidden;
}
.mainbox .panel {
  position: relative;
  height: 3.875rem;
  padding: 0 0.1875rem 0.5rem;
  margin-bottom: 0.1875rem;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: url(../assets/images/line.png) rgba(255, 255, 255, 0.03);
}
.mainbox .panel::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-left: 2px solid #02a6b5;
  border-top: 2px solid #02a6b5;
  content: "";
}
.mainbox .panel::after {
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-right: 2px solid #02a6b5;
  border-top: 2px solid #02a6b5;
  content: "";
}
.mainbox .panel .panel-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.mainbox .panel .panel-footer::before {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-left: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
  content: "";
}
.mainbox .panel .panel-footer::after {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-right: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
  content: "";
}
.mainbox .panel h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.25rem;
  font-weight: 400;
}
.mainbox .panel h2 a {
  color: #a7a7a7;
  text-decoration: none;
  margin: 0 0.125rem;
}
.mainbox .panel h2 .a-active {
  color: #fff;
}
.mainbox .panel .chart {
  height: 3rem;
  margin-top: 5px;
}
.no {
  background-color: rgba(101, 132, 226, 0.1);
  padding: 0.1875rem;
}
.no .no-hd {
  position: relative;
  border: 1px solid rgba(25, 186, 139, 0.17);
}
.no .no-hd::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.375rem;
  height: 0.125rem;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
  content: "";
}
.no .no-hd::after {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0.375rem;
  height: 0.125rem;
  border-bottom: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
  content: "";
}
.no .no-hd ul {
  display: flex;
}
.no .no-hd ul li {
  position: relative;
  flex: 1;
  line-height: 1rem;
  font-size: 0.875rem;
  color: #ffeb7b;
  text-align: center;
  font-family: electronicFont;
}
.no .no-hd ul li:first-child::after {
  content: "";
  position: absolute;
  top: 25%;
  right: 0;
  height: 50%;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.3);
}
.no .no-bd ul {
  display: flex;
}
.no .no-bd ul li {
  flex: 1;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.225rem;
  height: 0.5rem;
  line-height: 0.5rem;
  padding-top: 0.125rem;
}
.map {
  position: relative;
  height: 10.125rem;
}
.map .map1 {
  width: 6.475rem;
  height: 6.475rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(../assets/images/map.png);
  background-size: 100% 100%;
  opacity: 0.3;
}
.map .map2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8.0375rem;
  height: 8.0375rem;
  background: url(../assets/images/lbx.png);
  background-size: 100% 100%;
  animation: rotate1 15s linear infinite;
  opacity: 0.6;
}
.map .map3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 7.075rem;
  height: 7.075rem;
  background: url(../assets/images/jt.png);
  background-size: 100% 100%;
  animation: rotate2 15s linear infinite;
}
.map .chart {
  position: absolute;
  top: 10px;
  left: 0;
  height: 10.125rem;
  width: 100%;
  background-size: 100% 100%;
  background-color: rgb(159, 216, 238,0.01);
}
@keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes rotate2 {
  from {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}
/* 约束屏幕尺寸 */
@media screen and (max-width: 1024px) {
  html {
    font-size: 42px !important;
  }
}
@media screen and (min-width: 1920px) {
  html {
    font-size: 80px !important;
  }
}
</style>
