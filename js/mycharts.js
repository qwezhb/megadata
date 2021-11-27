/*柱状图*/
var worldMapContainer5 = document.getElementById('map1');
//		box04 = document.getElementById("box03");
//		box04_h = box04.offsetHeight;
//		box04_w = box04.offsetWidth;
//		
////		用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
//		var resizeWorldMapContainer5 = function() {
//			worldMapContainer5.style.width = box04_w * 0.96 + 'px';
//			worldMapContainer5.style.height = box04_h * 0.96-17 + 'px';
//		};
////		设置容器高宽
//		resizeWorldMapContainer5();
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(worldMapContainer5);
        var xAxisData = ['学校1', '学校2', '学校3', '学校4', '学校5','学校6', '学校7', '学校8', '学校9', '学校10','学校1', '学校2', '学校3', '学校4', '学校5','学校6', '学校7', '学校8', '学校9', '学校10'];
		// 指定图表的配置项和数据
        var endPercent = (13/ xAxisData.length) * 100;
		var option = {
			//  title : {
			//      text: '某地区蒸发量和降水量',
			//      subtext: '纯属虚构'
			//  },
			color: ['#38b5f4', '#ff7d4e'],
			tooltip: {
				trigger: 'axis',

			},
			legend: {
				data: ['当年', '历年'],
				right:'5%',
//				data: res.data.legendList5,
				textStyle: {
					color: '#ccc',
					
			
				}
			},
			grid: {
				top: '15%',
				left: '3%',
				right: '3%',
				bottom: '20%',
				containLabel: true
			},
			calculable: true,
			textStyle: {
				color: '#ccc'
			},
			xAxis: [{
				type: 'category',
				 axisLabel:{
                clickable:true,
                interval:0,
                rotate:30,
                show:false
            },
//				data: res.data.titleList5,
                data: ['学校1', '学校2', '学校3', '学校4', '学校5','学校6', '学校7', '学校8', '学校9', '学校10','学校1', '学校2', '学校3', '学校4', '学校5','学校6', '学校7', '学校8', '学校9', '学校10']
			}],
			yAxis: [{
				type: 'value'
			}],
//			series: function() {
//				var serie = [];
//				for(var i = 0; i < res.data.legendList5.length; i++) {
//					var item = {
//						name: res.data.legendList5[i],
//						type: 'bar',
//						data: res.data.dataList5[i]
//					};
//					serie.push(item);
//				}
//				return serie;
//			}()
          series:[
           {
            name: '当年',
            type: 'bar',
            barGap: 0,
            barMaxWidth:'13px',
//          label: labelOption,
            data: [320, 332, 301, 334, 390,320, 332, 301, 334, 390,320, 332, 301, 334, 390,320, 332, 301, 334, 390],
            barCategoryGap: '1px'  // 柱形的间距
        },
        {
            name: '历年',
            type: 'bar',
            barMaxWidth:'13px',
//          label: labelOption,
            data: [220, 182, 191, 234, 290,320, 332, 301, 334, 390,320, 332, 301, 334, 390,320, 332, 301, 334, 390],
            barCategoryGap: '1px' // 柱形的间距
        }
        
          ],
//      dataZoom: {
//      show: true, // 为true 滚动条出现
//      realtime: true,  
//      type:'slider', // 有type这个属性，滚动条在最下面，也可以不行，写y：36，这表示距离顶端36px，一般就是在图上面。
//      borderColor: '#010b35',  
//      backgroundColor: '#012a60',
//      fillerColor: "#023e8d",  
//      height: 20, // 表示滚动条的高度，也就是粗细
//      start: 0, // 表示默认展示20%～80%这一段。
//      end: 60
//      }

       dataZoom: [//给x轴设置滚动条  
                           {  
                               start:0,//默认为0  
                               end: endPercent,  
                               type: 'slider',  
                               show: true,  
                               xAxisIndex: [0],  
                               handleSize: 0,//滑动条的 左右2个滑动条的大小  
                               height: 15,//组件高度  
                               left: 30, //左边的距离  
                               right: 30,//右边的距离  
                               bottom: 5,//右边的距离  
                               borderColor: '#010b35', 
                               handleColor: 'red',//h滑动图标的颜色  
                               handleStyle: {  
                                   borderColor: '#010b35', 
                                   borderWidth: "1",  
                                   shadowBlur: 2,  
                                   background: "red",  
                                   shadowColor: "red",  
                               },  
                               fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{  
                                   //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变  
                                   //给第一个设置0，第四个设置1，就是垂直渐变  
                                   offset: 0,  
                                   color: '#023e8d'  
                               }, {  
                                   offset: 1,  
                                   color: '#023e8d'  
                               }]),  
                               backgroundColor: '#012a60',//两边未选中的滑动条区域的颜色  
                               showDataShadow: false,//是否显示数据阴影 默认auto  
                               showDetail: false,//即拖拽时候是否显示详细数值信息 默认true  
                               handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',  
                               filterMode: 'filter'
                           },  
                           //下面这个属性是里面拖到  
                           {  
                               type: 'inside',  
                               show: true,  
                               xAxisIndex: [0],  
                               start: 0,//默认为1  
                               end: 50
                           },  
                       ]


		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);

		//用于使chart自适应高度和宽度
//		window.onresize = function() {
//			//重置容器高宽
//			resizeWorldMapContainer5();
//			myChart.resize();
//		};
		 window.addEventListener("resize", function() {
		 	//重置容器高宽
//          resizeWorldMapContainer5();
			myChart.resize();
        });
/*柱状图结束*/

/*折线图*/
var dom2 = document.getElementById("map2");
var myChart2 = echarts.init(dom2);
var app2 = {};
option2 = null;

var datax=['学校1','学校2','学校3','学校4','学校5','学校6','学校7'];
var endPercent2=(13/ datax.length) * 100;
option2 = {
//  title: {
//      text: '堆叠区域图'
//  },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['评估分数'],
        show:false
    },
    toolbox: {
        feature: {
            saveAsImage: {},
        },
        show:false
    },
    grid: {
    	top:'10%',
        left: '3%',
        right: '4%',
        bottom: '12%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['学校1','学校2','学校3','学校4','学校5','学校6','学校7'],
            show:false
        }
       
    ],
    yAxis : [
        {
            type : 'value',
            color:'#ffffff',
            axisLabel: {
		  color: "#177bf2" //刻度线标签颜色
		}
        }
         
    ],
    series : [
        {
            name:'评估分数',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[120, 132, 101, 134, 90, 230, 210],
//          color:'#177bf2'
            color:'#ff7c50'
        }
//      {
//          name:'搜索引擎',
//          type:'line',
//          stack: '总量',
//          label: {
//              normal: {
//                  show: true,
//                  position: 'top'
//              }
//          },
//          areaStyle: {normal: {}},
//          data:[820, 932, 901, 934, 1290, 1330, 1320]
//      }
    ],

      dataZoom: [//给x轴设置滚动条  
                           {  
                               start:0,//默认为0  
                               end: endPercent2,  
                               type: 'slider',  
                               show: true,  
                               xAxisIndex: [0],  
                               handleSize: 0,//滑动条的 左右2个滑动条的大小  
                               height: 15,//组件高度  
                               left: 30, //左边的距离  
                               right: 30,//右边的距离  
                               bottom: 10,//右边的距离   
                               borderColor: '#010b35', 
                               handleColor: 'red',//h滑动图标的颜色  
                               handleStyle: {  
                                   borderColor: '#010b35', 
                                   borderWidth: "1",  
                                   shadowBlur: 2,  
                                   background: "red",  
                                   shadowColor: "red",  
                               },  
                               fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{  
                                   //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变  
                                   //给第一个设置0，第四个设置1，就是垂直渐变  
                                   offset: 0,  
                                   color: '#023e8d'  
                               }, {  
                                   offset: 1,  
                                   color: '#023e8d'  
                               }]),  
                               backgroundColor: '#012a60',//两边未选中的滑动条区域的颜色  
                               showDataShadow: false,//是否显示数据阴影 默认auto  
                               showDetail: false,//即拖拽时候是否显示详细数值信息 默认true  
                               handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',  
                               filterMode: 'filter'
                           },  
                           //下面这个属性是里面拖到  
                           {  
                               type: 'inside',  
                               show: true,  
                               xAxisIndex: [0],  
                               start: 0,//默认为1  
                               end: 50
                           },  
                       ]

};
;
if (option2 && typeof option2 === "object") {
    myChart2.setOption(option2, true);
}
		 window.addEventListener("resize", function() {
		 	//重置容器高宽
//          resizeWorldMapContainer5();
			myChart2.resize();
        });
/*折线图结束*/


/*柱状图*/
 // 指定图表的配置项和数据
 var dataxx=['学校1', '学校2', '学校3', '学校4', '学校5', '学校6', '学校7', '学校8', '学校9', '学校10', '学校11', '学校12','学校1', '学校2', '学校3', '学校4', '学校5', '学校6', '学校7', '学校8', '学校9', '学校10', '学校11', '学校12'];
var endPercent3=(48/ dataxx.length) * 100;
var option3 = {
  // ----  标题 -----
//backgroundColor:'#fff',
  color: ['#3398DB'],
  title: {
    text: '',
    textStyle: {
      color: '#a0a0a2'
    },
    subtext: '',
    subtextStyle: {
      color: 'blue'
    },
    padding: [0, 0, 5, 5]  // 位置
  },
  // ---- legend ----
  legend: {
    type: 'plain',  // 图列类型，默认为 'plain'
    top: '0',  // 图列相对容器的位置 top\bottom\left\right
    selected: {
      // '销量': true  // 图列选择，图形加载出来会显示选择的图列，默认为true
    },
    textStyle: {  // 图列内容样式
      color: '#fff',  // 字体颜色
      backgroundColor: 'black'  // 字体背景色
    },
    tooltip: {  // 图列提示框，默认不显示
      show: true,
      color: 'red'  
    },
    data: [   // 图列内容
      {
//      name: '销量',
        icon: 'circle',
        textStyle: {
          color: '#a0a0a2',  // 单独设置某一个图列的颜色
          backgroundColor: '#fff' // 单独设置某一个图列的字体背景色
        }
      }
    ]
  },
  // ---  提示框 ----
  tooltip: {
    show: true,   // 是否显示提示框，默认为true
    trigger: 'item', // 数据项图形触发
    axisPointer: {   // 指示样式
      type: 'shadow',
      axis: 'auto'
    },
    padding: 5,
    textStyle: {   // 提示框内容的样式
      color: '#fff'  
    }
  },
  // ---- gird区域 ---
  grid: {
    show: false,    // 是否显示直角坐标系网格
        top:'8%',
        left: '5%',
        right: '4%',
        bottom: '25%',
    containLabel: false, // gird 区域是否包含坐标轴的刻度标签
    tooltip: {
      show: true,
      trigger: 'item',   // 触发类型
      textStyle: {
        color: '#ffffff'
      }
    }
  },
  //  ------  X轴 ------
  xAxis: {
    show: true,  // 是否显示
    position: 'bottom',  // x轴的位置
    offset: 0, // x轴相对于默认位置的偏移
    type: 'category',   // 轴类型， 默认为 'category'
//  name: '月份',    // 轴名称
    nameLocation: 'end',  // 轴名称相对位置
    nameTextStyle: {   // 坐标轴名称样式
      color: '#a0a0a2',
      padding: [5, 0, 0, 5]
    },
    nameGap: 15, // 坐标轴名称与轴线之间的距离
    nameRotate: 0,  // 坐标轴名字旋转
    axisLine: {       // 坐标轴 轴线
      show: true,  // 是否显示
      symbol: ['none', 'none'],  // 是否显示轴线箭头
      symbolSize: [8, 8], // 箭头大小
      symbolOffset: [0, 7],  // 箭头位置
      // ------   线 ---------
      lineStyle: {
        color: '#cdd0d3',
        width: 1,
        type: 'solid'
      }
    },
    axisTick: {    // 坐标轴 刻度
      show: true,  // 是否显示
      inside: true,  // 是否朝内
      length: 3,     // 长度
      lineStyle: {   // 默认取轴线的样式
        color: '#a0a0a2',
        width: 1,
        type: 'solid'
      }
    },
    axisLabel: {    // 坐标轴标签
      show: true,  // 是否显示
      inside: false, // 是否朝内
      rotate: 0, // 旋转角度
      margin: 5, // 刻度标签与轴线之间的距离
      color: '#979799'  // 默认取轴线的颜色 
    },
    splitLine: {    // gird区域中的分割线
      show: false,  // 是否显示
      lineStyle: {
           color: 'red',
           width: 1,
           type: 'solid'
      }
    },
    splitArea: {    // 网格区域
      show: false  // 是否显示，默认为false
    },
    data: ['学校1', '学校2', '学校3', '学校4', '学校5', '学校6', '学校7', '学校8', '学校9', '学校10', '学校11', '学校12','学校1', '学校2', '学校3', '学校4', '学校5', '学校6', '学校7', '学校8', '学校9', '学校10', '学校11', '学校12']
    ,show:false
  },
  //   ------   y轴  ----------
  yAxis: {
    show: true,  // 是否显示
    position: 'left', // y轴位置
    offset: 0, // y轴相对于默认位置的偏移
    type: 'value',  // 轴类型，默认为 ‘category’
//  name: '销量',   // 轴名称
    nameLocation: 'end', // 轴名称相对位置value
    nameTextStyle: {    // 坐标轴名称样式
      color: '#fff',
      padding: [5, 0, 0, 5]  // 坐标轴名称相对位置
    },
    nameGap: 15, // 坐标轴名称与轴线之间的距离
    nameRotate: 270,  // 坐标轴名字旋转

    axisLine: {    // 坐标轴 轴线
      show: true,  // 是否显示
      //  -----   箭头 -----
      symbol: ['none', 'none'],  // 是否显示轴线箭头
      symbolSize: [8, 8],  // 箭头大小
      symbolOffset: [0, 7], // 箭头位置

      // ----- 线 -------
      lineStyle: {
        color: '#cdd0d3',
        width: 1,
        type: 'solid'
      }
    },
    axisTick: {      // 坐标轴的刻度
      show: true,    // 是否显示
      inside: true,  // 是否朝内
      length: 3,      // 长度
      lineStyle: {
//      color: 'red',  // 默认取轴线的颜色
        width: 1,
        type: 'solid'
      }
    },
    axisLabel: {      // 坐标轴的标签
      show: true,    // 是否显示
      inside: false,  // 是否朝内
      rotate: 0,     // 旋转角度
      margin: 8,     // 刻度标签与轴线之间的距离
      color: '#cccccc',  // 默认轴线的颜色
    },
    splitLine: {    // gird 区域中的分割线
      show: true,   // 是否显示
      lineStyle: {
        color: '#cccccc',
        width: 1,
        type: 'solid'
      }
    },
    splitArea: {     // 网格区域
      show: false   // 是否显示，默认为false
    }
  },
  //  -------   内容数据 -------
  series: [
    {
      name: '',      // 序列名称
      type: 'bar',      // 类型
      legendHoverLink: true,  // 是否启用图列 hover 时的联动高亮
      label: {   // 图形上的文本标签
        show: false,
        position: 'insideTop', // 相对位置
        rotate: 0,  // 旋转角度
        color: '#eee'
      },
//    itemStyle: {    // 图形的形状
//      color: 'blue',
//      barBorderRadius:[18,18,0,0]
//    },
      itemStyle: {

            normal: {
                barBorderRadius: [18,18,0,0],
                color:'#308dd4'//柱状图颜色
            },
            emphasis: {
                barBorderRadius: [18,18,0,0]
            }
        },
      barWidth: 10,  // 柱形的宽度
//    barCategoryGap: '5%',  // 柱形的间距
      data: [3000, 4000, 4200, 4500, 6000, 5600, 4500, 5020, 4500, 5400, 4300, 1200,3000, 4000, 4200, 4500, 6000, 5600, 4500, 5020, 4500, 5400, 4300, 1200],
    }
  ],
  
   dataZoom: [//给x轴设置滚动条  
                           {  
                               start:0,//默认为0  
                               end: endPercent3,  
                               type: 'slider',  
                               show: true,  
                               xAxisIndex: [0],  
                               handleSize: 0,//滑动条的 左右2个滑动条的大小  
                               height: 15,//组件高度  
                               left: 30, //左边的距离  
                               right: 30,//右边的距离  
                               bottom: 12,//右边的距离  
                               borderColor: '#010b35', 
                               handleColor: 'red',//h滑动图标的颜色  
                               handleStyle: {  
                                   borderColor: '#010b35', 
                                   borderWidth: "1",  
                                   shadowBlur: 2,  
                                   background: "red",  
                                   shadowColor: "red",  
                               },  
                               fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{  
                                   //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变  
                                   //给第一个设置0，第四个设置1，就是垂直渐变  
                                   offset: 0,  
                                   color: '#023e8d'  
                               }, {  
                                   offset: 1,  
                                   color: '#023e8d'  
                               }]),  
                               backgroundColor: '#012a60',//两边未选中的滑动条区域的颜色  
                               showDataShadow: false,//是否显示数据阴影 默认auto  
                               showDetail: false,//即拖拽时候是否显示详细数值信息 默认true  
                               handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',  
                               filterMode: 'filter'
                           },  
                           //下面这个属性是里面拖到  
                           {  
                               type: 'inside',  
                               show: true,  
                               xAxisIndex: [0],  
                               start: 0,//默认为1  
                               end: 50
                           },  
                       ]
};
    
      // 基于准备好的dom，初始化echarts实例
        var myChart3 = echarts.init(document.getElementById('map3'));
        // 使用刚指定的配置项和数据显示图表。
        
//       myChart3.setOption(option3);
         
         myChart3.on('datazoom', function (params){
        // 事件有很多，参见http://echarts.baidu.com/api.html#events
        //params是个好东西，里面有什么，可以打印出来看一下就明白
        alert(1)
        console.log(params);
        //可以通过params获取缩放的起止百分比，但是鼠标滚轮和伸缩条拖动触发的params格式不同，所以用另一种方法
        //获得图表数据数组下标
        var startValue = myChart3.getModel().option.dataZoom[0].startValue;
        var endValue = myChart3.getModel().option.dataZoom[0].endValue;
        //获得起止位置百分比
        var startPercent = myChart3.getModel().option.dataZoom[0].start;
        var endPercent = myChart3.getModel().option.dataZoom[0].end;
   
        console.log(startValue,endValue,startPercent,endPercent);
   
//      option2.dataZoom[0].start = startPercent;
//      option2.dataZoom[0].end = endPercent;
//      traffic2.setOption(option2);


   
    });


        myChart3.setOption(option3);
         window.addEventListener("resize", function() {
            myChart3.resize();
        });
//      myChart.setOption(option);
/*柱状图结束*/