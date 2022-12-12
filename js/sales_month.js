d3.csv("data/sales_month.csv",function(error,data){
var m=[]
var y1=[]
var y2=[]
for(var i=0;i<data.length;i++){
	m[i]=data[i].month
	y1[i]=data[i].sales/10000
	y2[i]=data[i].profit/10000
}
 var mychart=echarts.init(document.getElementById('data_month'));
 var option={
 	tooltip:{
 		trigger:'axis'
 	},
	grid:{
		show:false
	},
	color:["#ff8025","#189afc"],//图例颜色
	legend:{
		data:[
			{name:"销售额（万元）",textStyle:{color:'#ff8025'}},
			{name:"利润（万元）",textStyle:{color:'#189afc'}}
		]
	},
 	xAxis:{
		show:true,
 		type:"category",//类目轴
 		boundaryGap:false,//坐标轴两边留白
 		data:m,
		axisLine: {
			lineStyle: {
				color: '#267297',
				width: 1 
			}
		}
 	},
 	yAxis:{
		/*改变y轴颜色*/
		axisLine: {
			lineStyle: {
				color: '#267297',
				width: 1 
			}
		},
		type:"value",
		splitLine:{show:false}//网格线
	},
 	series:[{
		symbol:'circle', //变为实心圆
		name:"销售额（万元）",
		type:'line',
 		data:y1,
 		areaStyle:{color:"#6d524b"},
 		lineStyle:{color:"#ab7954"}
 	},
	{
		symbol:'circle', //变为实心圆
		name:"利润（万元）",
		type:'line',
		data:y2,
		areaStyle:{color:"#1073d2"},
		lineStyle:{color:"#3f608a"}
	}]
 };
 mychart.setOption(option);
})