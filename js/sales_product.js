d3.json("data/sales_product.json",function(error,data){
// console.log(data)
var mychart=echarts.init(document.getElementById('data_product'));
var option={
	title:{
		text:"{a|家具}{b|办公用品}{c|技术}",//设置多个标题
		textStyle:{
			rich:{
				a:{
					color:"#3ed0f9",
					padding: [135, 0, 0, 0]
				},
				b:{
					color:"#3ed0f9",
					padding: [0, 0, 130, -22]
				},
				c:{
					color:"#3ed0f9",
					padding: [135, 0, 0, 175]
				}
			}
		}
	},
	series:[{
		roam:false,//固定，不能拖拉
		breadcrumb: { show: false},//去掉小黑框
		width:"60%",
		height:"40%",
		left:"2%",
		bottom:"2%",
		type:"treemap",
		data:[{
			itemStyle:{color:"#2f57af"},//板块颜色
			name: '办公用品',
			value: 949270.224, 
			children:[
				{name: '标签', value: 18936.54},
				{name: '美术', value: 33038.096},
				{name: '器具', value: 449744.764},
				{name: '收纳具', value: 214582.2},
				{name: '系固件', value: 20045.48},
				{name: '信封', value: 51941.96},
				{name: '用品', value: 47070.128},
				{name: '纸张', value: 51413.74},
				{name: '装订机', value: 62497.316}
			]
		}]
	},
	{
		roam:false,
		breadcrumb: { show: false},
		width:"30%",
		height:"91%",
		right:"2%",
		bottom:"2%",
		type:"treemap",
		data:[{
			itemStyle:{color:"#2b7099"},//板块颜色
			name: '技术', 
			value: 937985.552, 
			children:[
				{name: '电话', value: 330951.32},
				{name: '复印机', value: 347513.264},
				{name: '配件', value: 150562.664},
				{name: '设备', value: 108958.304}
			]
		}]
	},
	{
		roam:false,
		breadcrumb: { show: false},
		width:"60%",
		height:"40%",
		left:"2%",
		top:"7%",
		type:"treemap",
		data:[{
			itemStyle:{color:"#027aaf"},//板块颜色
			name: '家具', 
			value: 1028418.503, 
			children:[
				{name: '书架', value: 366969.54},
				{name: '椅子', value: 409393.054},
				{name: '用具', value: 83848.996},
				{name: '桌子', value: 168206.913}
			]
		}]
	}]

};
mychart.setOption(option);
})