d3.csv("data/sales_region.csv",function(error,data){
var lab=[]
var x1=[]
var x2=[]
for(var i=0;i<data.length;i++){
	lab[i]=data[i].region
	x1[i]=data[i].sales/10000
	x2[i]=data[i].profit/10000
}
// console.log(lab)
var mychart=echarts.init(document.getElementById('data_region'));
var option={
	tooltip:{
		trigger:'axis'
	},
	color:["#f5b110","#51c999"],//图例颜色
	legend:{
		itemHeight:10,//图例大小
		itemWidth:10,
		x:"center",//图例位置
		y:"25px",
		data:[
			{name:"销售额（万元）",textStyle:{color:'#f5b110'}},
			{name:"利润（万元）",textStyle:{color:'#51c999'}}
		]
	},
	xAxis:{
		type:"category",//类目轴
		/*改变x轴颜色*/
		axisLine: {
			lineStyle: {
				color: '#267297',
				width: 1 
			}
		},
		data:lab
	},
	yAxis:{
		minInterval:1, //设置坐标轴分割显示成整数
		/*改变y轴颜色*/
		axisLine: {
			lineStyle: {
				color: '#267297',
				width: 1 
			}
		}
	},
	series:[{
		name:'销售额（万元）',
		type:'bar',
		barWidth: 7,
		itemStyle: {
			normal: {barBorderRadius:[13, 13, 13, 13]}//柱形图圆角，初始化效果
		},
		data:x1
	},
	{
		name:"利润（万元）",
		type:"bar",
		barWidth: 7,
		itemStyle: {
			normal: {barBorderRadius:[13, 13, 13, 13]}//柱形图圆角，初始化效果
		},
		data:x2
	}]
};
mychart.setOption(option);
})