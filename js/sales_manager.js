d3.csv("data/sales_manager.csv",function(error,data){
var m=[]
var y1=[]
var y2=[]
for(var i=0;i<data.length;i++){
	m[i]=data[i].sales_manager
	y1[i]=data[i].sales
	y2[i]=data[i].profit
}
// console.log(m)
var mychart=echarts.init(document.getElementById('data_manager'));
var option={
	title:{
		text:"{a|销售情况}{b|利润情况}",//设置多个标题
		textStyle:{
			rich:{
				a:{
					color:"#189afc",
					padding: [0, 0, 0, 52]
				},
				b:{
					color:"#189afc",
					padding: [0, 0, 0, 130]
				}
			}
		}
	},
	color:["#eaea26","#906afb","#ff4f54","#09e17e","#3ed0f9","#fead16"],
	legend: {
	    top: 'bottom',
		textStyle:{color:["#eaea26","#906afb","#ff4f54","#09e17e","#3ed0f9","#fead16"]},//文字颜色
		itemGap:3,//这个值是用来调图例之间的间距
		x:"center",//图例位置
		y:"bottom",
		itemHeight:14,//图例大小
		itemWidth:33
	},
	series:[{
		label:{
			normal:{show:false}//不显示标签
		},
		radius: [5, 85],//图的大小
		center: ['30%', '50%'],//左右上下
		roseType: 'area',
		itemStyle: {
			borderRadius: 6
		},
		type:"pie",
		data:[
			{name:m[0],value:y1[0]},
			{name:m[1],value:y1[1]},
			{name:m[2],value:y1[2]},
			{name:m[3],value:y1[3]},
			{name:m[4],value:y1[4]},
			{name:m[5],value:y1[5]}
		]
	},
	{
		label:{
			normal:{show:false}//不显示标签
		},
		radius: [5, 85],//图的大小
		center: ['82%', '50%'],
		roseType: 'area',
		itemStyle: {
			borderRadius: 6
		},
		type:"pie",
		data:[
			{name:m[0],value:y2[0]},
			{name:m[1],value:y2[1]},
			{name:m[2],value:y2[2]},
			{name:m[3],value:y2[3]},
			{name:m[4],value:y2[4]},
			{name:m[5],value:y2[5]}
		]
	}]
};
mychart.setOption(option);
})