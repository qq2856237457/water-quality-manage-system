// 立即执行函数，防止变量污染 (function() {})();
import * as echarts from 'echarts'
// 柱状图模块1
function index() {
  (function () {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 2.指定配置项和数据
    var option = {
      title: {
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 350, name: 'ph值' },
            { value: 310, name: 'COD' },
            { value: 150, name: '浊度' },
            { value: 274, name: 'SS' },
            { value: 235, name: '溶解氧' },
            { value: 400, name: '温度' },
            { value: 190, name: '电导率' },
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: 'radius',
          label: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          labelLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    
    };
    // 3.把配置项给实例对象
    myChart.setOption(option);

    // 4.让图表随屏幕自适应
    window.addEventListener('resize', function () {
      myChart.resize();
    })
  })();

  // 柱状图模块2
  (function () {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));

    // 声明颜色数组
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    // 2.指定配置项和数据
    var option = {
      title: {
        text: ''
      },
      legend: {
        data: ['outfall1', 'outfall2','outfall3','outfall4']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'ph值', max: 10 },
          { name: '浊度', max: 5 },
          { name: '电导率', max: 2000 },
          { name: 'COD', max: 500 },
          { name: 'SS', max: 500 },
          { name: '温度', max: 100 },
          { name: '溶解氧', max: 5 },
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [6.5,2.5,1000,450,250,70,2.2],
              name: 'outfall1'
            },
            {
              value: [8.2,3.5,1600,250,90,80,1.1],
              name: 'outfall2'
            },
            {
              value: [7.0,1.1,500,100,60,60,2.5],
              name: 'outfall3'
            },
            {
              value: [5.6,4.5,1300,380,350,80,0.4],
              name: 'outfall4'
            },
          ]
        }
      ]
    };
    // 3.把配置项给实例对象
    myChart.setOption(option);

    // 4.让图表随屏幕自适应
    window.addEventListener('resize', function () {
      myChart.resize();
    })
  })();

  // 折线图模块1
  (function () {
    // 年份对应数据
    var yearData = [{
      year: "ph值", // 年份
      data: [
        // 两个数组是因为有两条线
        [6.2,6.3,6.3,6.4,6.5,6.7,6.3,6.4,6.2,6.3,6.2,6.2],
        [8.2,8.6,8.7,8.5,8.6,9.0,9.1,8.9,8.9,8.7,9.0,9.2],
        [7.2,7.0,7.1,7.3,6.9,6.8,7.0,7.0,7.1,7.2,7.0,7.1],
        [5.5,5.8,5.2,5.6,5.7,5.8,5.8,5.7,5.2,5.1,5.3,5.4]
      ]
    },
    {
      year: "电导率", // 年份
      data: [
        [855,	870,	960,	1020,	1080,	1150,	1200,	1100,	1040,	1060,	1020,	980],
        [1550	,1580,	1620,	1630,	1500,	1450,	1400	,1600	,1560,	1650,	1500,	1550],
        [600,	650	,620,	600	,580,	590,	620,	620	,610,	580	,580,	600],
        [1200	,1300	,1250	,1300,	1260,	1280,	1300,	1320	,1350,	1320,	1300,	1290]
      ]
    },
    {
      year: "温度", // 年份
      data: [
        // 两个数组是因为有两条线
        [62	,65	,67	,65	,68,	72,	78	,76	,69,	64,	62,	61],
        [88	,92	,95,	84,	84,	83,	80,	79,76,	76,	72,	70],
        [50	,55	,60,	65,	60,	55,	58,	55,	54,	52,	50,	50],
        [80,	85,	80,	80	,82	,83,	80,	78,	79	,78	,76	,78]
      ]
    },
    {
      year: "浊度", // 年份
      data: [
        // 两个数组是因为有两条线
        [2.2,	2.1,	2.3,	2.1,	2.2,	2.3,	2.4,	2.6,	2.2,	2.3,	2.4,	2.1],
        [3.2,	3.3,	3.5	,3.1,	3.2,	3.5	,3.6,	3.4,	3.4	,3.2,	3.1,	3.3],
        [1.2,	1.0,	1.1,	1.3	,1.0,	0.9	,0.9,	1.0	,1.0,	1.2,	1.0,	1.1],
        [3.5,	3.8	,3.8,	3.9,	4.2	,4.3,	4.0	,4.2,	4.1	,3.9,	3.9	,3.8]
      ]
    },
    {
      year: "溶氧量", // 年份
      data: [
        // 两个数组是因为有两条线
        [1.5,	1.2	,1.4,	1.6	,1.8	,1.9,	1.8	,2.1,	2.2,	2.5,	2.4	,2.6],
        [0.9,	0.7	,1.1,	1.2	,0.9,	1.2,	1.1	,1.0,	1.0,0.9	,0.9	,1.1],
        [2.5,	2.5	,2.6,	2.8,	2.5,	2.7	,2.5	,2.5,	2.6	,2.3,	2.4	,2.6],
        [0.2,	0.5	,0.3	,0.4,	0.2,	0.2,	0.3	,0.5,	0.6,	0.2,	0.2,	0.3]
      ]
    },
    {
      year: "COD", // 年份
      data: [
        // 两个数组是因为有两条线
        [550,	580,	680	,620	,520,	410	,420,	320	,350,	450	,430,	450],
        [255,	265	,255,	280	,290,	260	,250,	245,	246	,255,	240	,260],
        [80	,90	,95	,110,	100	,120,	120	,110,	115	,110,	100,	90],
        [350,	350,	360	,380,	380	,390,	380,	370,	370	,380	,380,	385]
      ],
    },
    {
      year: "悬浮物", // 年份
      data: [
        // 两个数组是因为有两条线
        [210,	190,	180	,190,	210	,220,	225	,240,	220	,240,	245,	255],
        [80	,70	,90	,50	,80	,110,	115	,100,	95	,90	,90	,95],
        [50,	55,	55	,60	,60	,60	,70	,65,	65,	60	,60	,50],
        [320,	300	,320	,350,	320,	355,	360	,350,	340	,340,	335,	320]
      ]
    },
    ];

    var myChart = echarts.init(document.querySelector(".line .chart"));

    var option = {
      // 修改线的颜色
      color: ['#00f2f1', '#ed3f35','#00d887','#0096ff'],
      tooltip: {
        trigger: 'axis'
      },
      // 图例组件
      legend: {
        // 当serise 有name值时， legend 不需要写data
        // 修改图例组件文字颜色
        textStyle: {
          color: '#4c9bfd'
        },
        right: '10%',
      },
      grid: {
        top: "20%",
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        show: true, // 显示边框
        borderColor: '#012f4a' // 边框颜色
      },
      xAxis: {
        type: 'category',
        boundaryGap: false, // 去除轴间距
        data: ['8:00', '8:10', '8:20', '8:30', '8:40', '8:50', '9:00', '9:10', '9:20', '9:30', '9:40', '9:50'],
        // 去除刻度线
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#4c9bfb" // x轴文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        }
      },
      yAxis: {
        type: 'value',
        // 去除刻度线
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#4c9bfb" // x轴文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        },
        splitLine: {
          lineStyle: {
            color: "#012f4a"
          }
        }
      },
      series: [
        {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '排水口1',
        data: yearData[0].data[0]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '排水口2',
        data: yearData[0].data[1]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '排水口3',
        data: yearData[0].data[2]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '排水口4',
        data: yearData[0].data[3]
      },
      
      ]
    };

    myChart.setOption(option);

    // 4.让图表随屏幕自适应
    window.addEventListener('resize', function () {
      myChart.resize();
    })

    // 5.点击切换2020 和 2021 的数据
    $('.line h2 a').on('click', function () {
      // console.log($(this).index());
      // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
      // console.log(yearData[$(this).index()]);
      var obj = yearData[$(this).index()];
      option.series[0].data = obj.data[0];
      option.series[1].data = obj.data[1];
      option.series[2].data = obj.data[2];
      option.series[3].data = obj.data[3];
      // 选中年份高亮
      $('.line h2 a').removeClass('a-active');
      $(this).addClass('a-active');

      // 需要重新渲染
      myChart.setOption(option);
    })
  })();

  // 折线图模块2
  (function () {
    var myChart = echarts.init(document.querySelector('.line2 .chart'));

    var option = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        top: "0%",
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
      grid: {
        top: '30',
        left: '10',
        right: '30',
        bottom: '10',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },
        data: ["8:00", "8:10", "8:20", "8:30", "8:40", "8:50", "9:00", "9:10", "9:20", "9:30", "9:40", "9:50"]
      }],
      yAxis: [{
        type: 'value',
        axisTick: {
          // 不显示刻度线
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }],
      series: [{
        name: '排水口1',
        type: 'line',
        smooth: true, // 圆滑的线
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        // 填充区域渐变透明颜色
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
              offset: 0,
              color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
            },
            {
              offset: 0.8,
              color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
            }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 拐点设置为小圆点
        symbol: 'circle',
        // 设置拐点大小
        symbolSize: 5,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [70,72,75,74,73,72,75,76,75,73,72,71]
      },
      {
        name: '排水口2',
        type: 'line',
        smooth: true, // 圆滑的线
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#585898",
          width: 2
        },
        // 填充区域渐变透明颜色
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
              offset: 0,
              color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
            },
            {
              offset: 0.8,
              color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
            }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 拐点设置为小圆点
        symbol: 'circle',
        // 设置拐点大小
        symbolSize: 5,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [62,65,63,60,60,62,63,65,65,67,65,62]
      },
      {
        name: '排水口3',
        type: 'line',
        smooth: true, // 圆滑的线
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#654578",
          width: 2
        },
        // 填充区域渐变透明颜色
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
              offset: 0,
              color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
            },
            {
              offset: 0.8,
              color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
            }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 拐点设置为小圆点
        symbol: 'circle',
        // 设置拐点大小
        symbolSize: 5,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [90,92,95,96,95,94,92,91,89,87,87,90]
      },
      {
        name: "排水口4",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                offset: 0,
                color: "rgba(0, 216, 135, 0.4)"
              },
              {
                offset: 0.8,
                color: "rgba(0, 216, 135, 0.1)"
              }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [65,55,70,65,62,61,55,54,52,53,60,57]
      }
      ]
    };

    myChart.setOption(option);

    window.addEventListener('resize', function () {
      myChart.resize();
    })
  })();

  // 饼形图1
  (function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
      color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        // 垂直居中,默认水平居中
        // orient: 'vertical',

        bottom: 0,
        left: 10,
        // 小图标的宽度和高度
        itemWidth: 10,
        itemHeight: 10,
        // 修改图例组件的文字为 12px
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "10"
        }
      },
      series: [{
        name: 'shuzhi',
        type: 'pie',
        // 设置饼形图在容器中的位置
        center: ["50%", "42%"],
        // 修改饼形图大小，第一个为内圆半径，第二个为外圆半径
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        // 图形上的文字
        label: {
          show: false,
          position: 'center'
        },
        // 链接文字和图形的线
        labelLine: {
          show: false
        },
        data: [{
          value: 1,
          name: "一级水质"
        },
        {
          value: 0,
          name: "二级水质"
        },
        {
          value: 1,
          name: "三级水质"
        },
        {
          value: 1,
          name: "四级水质"
        },
        {
          value: 1,
          name: "五级水质"
        },
        ]
      }]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {
      myChart.resize();
    })
  })();

  // 饼形图2
  (function () {
    var myChart = echarts.init(document.querySelector('.pie2 .chart'));
    var option = {
      color: ['#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        bottom: 0,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: 10
        }
      },
      series: [{
        name: '地区分布',
        type: 'pie',
        radius: ["10%", "60%"],
        center: ['50%', '40%'],
        // 半径模式  area面积模式
        roseType: 'radius',
        // 图形的文字标签
        label: {
          fontsize: 10
        },
        // 引导线调整
        labelLine: {
          // 连接扇形图线长(斜线)
          length: 6,
          // 连接文字线长(横线)
          length2: 8
        },
        data: [{
          value: 20,
          name: '污水池1:  2台'
        },
        {
          value: 40,
          name: '污水池2:  4台'
        },
        {
          value: 30,
          name: '污水池3:  3台'
        },
        {
          value: 10,
          name: '污水池4:  1台'
        },
        ]
      }]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {
      myChart.resize();
    })
  })();


  // 模拟飞行路线地图
  (function () {
    var myChart = echarts.init(document.querySelector('.map .chart'));
    var option;
    option = {
      xAxis: {
        data: ['outfall1', 'outfall2', 'outfall3','outfall4']
      },
      yAxis: {
        max:100
      },
      dataGroupId: '',
      animationDurationUpdate: 500,
      series: {
        type: 'bar',
        id: 'sales',
        data: [
          {
            value: 75,
            groupId: 'outfall1'
          },
          {
            value: 68,
            groupId: 'outfall2'
          },
          {
            value: 92,
            groupId: 'outfall3'
          },
          {
            value: 55,
            groupId: 'outfall4'
          }
        ],
        universalTransition: {
          enabled: true,
          divideShape: 'clone'
        }
      }
    };
    const drilldownData = [
      {
        dataGroupId: 'outfall1',
        data: [
          ['ph值', 65],
          ['电导率', 70],
          ['温度', 70],
          ['浊度', 50],
          ['溶解氧', 40],
          ['COD', 70],
          ['SS', 50],
        ]
      },
      
      {
        dataGroupId: 'outfall2',
        data: [
          ['ph值', 60],
          ['电导率', 65],
          ['温度', 60],
          ['浊度', 55],
          ['溶解氧', 60],
          ['COD', 60],
          ['SS', 80],
        ]
      },
      {
        dataGroupId: 'outfall3',
        data: [
          ['ph值', 95],
          ['电导率', 85],
          ['温度', 90],
          ['浊度', 85],
          ['溶解氧', 90],
          ['COD', 95],
          ['SS', 95],
        ]
      },
      {
        dataGroupId: 'outfall4',
        data: [
          ['ph值', 65],
          ['电导率', 70],
          ['温度', 70],
          ['浊度', 50],
          ['溶解氧', 40],
          ['COD', 70],
          ['SS', 50],
        ]
      }
    ];
    myChart.on('click', function (event) {
      if (event.data) {
        var subData = drilldownData.find(function (data) {
          return data.dataGroupId === event.data.groupId;
        });
        if (!subData) {
          return;
        }
        myChart.setOption({
          xAxis: {
            data: subData.data.map(function (item) {
              return item[0];
            })
          },
          series: {
            type: 'bar',
            id: 'sales',
            dataGroupId: subData.dataGroupId,
            data: subData.data.map(function (item) {
              return item[1];
            }),
            universalTransition: {
              enabled: true,
              divideShape: 'clone'
            }
          },
          graphic: [
            {
              type: 'text',
              left: 50,
              top: 20,
              style: {
                text: 'Back',
                fontSize:20,
              },
              onclick: function () {
                myChart.setOption(option);
              }
            }
          ]
        });
      }
    });
    myChart.setOption(option);
    window.addEventListener('resize', function () {
      myChart.resize();
    })
  })();
}

export {
  index
}