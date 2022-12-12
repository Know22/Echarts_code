d3.csv("data/sales_province.csv",function(error,data){

var p=[]
var y1=[]
var y2=[]
for(var i=0;i<data.length;i++){
	p[i]=data[i].province
	y1[i]=data[i].sales
	y2[i]=data[i].profit
}
// console.log(p)
var mychart=echarts.init(document.getElementById('data_province'));
var option={
	tooltip:{
		trigger:'item'
	},
	
	visualMap: {
		seriesIndex: 0, // 仅使第一个series生效
		max: 300000,
		realtime: false,
		calculable: true,
		left:'10%',
		bottom:'1%',
		textStyle:{
			color:"#fff"
		},
		color:'#fff',
		inRange: {
			color: ["#0f3677", "#133b80", "#1a4287","#24559a","#295ba0","#3f75bb"]
		}
	},
	
	
	geo:{
		map:"china",
		show:true
	},
	
	
	series:[{
		name:'销量',
		type:'map',
		mapType: 'china',
		
		label: {
			normal: {
				show:true,//省份名称
				textStyle: { color: "white" }//省份名称颜色
			}
		},
		itemStyle: {
			normal: {
				borderColor: '#3f75bb',//区域边框颜色
				areaColor: "#0f3677"//区域颜色
			}
		},
		data:[
			{name:p[0],value:y1[0]},
			{name:p[1],value:y1[1]},
			{name:p[2],value:y1[2]},
			{name:p[3],value:y1[3]},
			{name:p[4],value:y1[4]},
			{name:p[5],value:y1[5]},
			{name:p[6],value:y1[6]},
			{name:p[7],value:y1[7]},
			{name:p[8],value:y1[8]},
			{name:p[9],value:y1[9]},
			{name:p[10],value:y1[10]},
			{name:p[11],value:y1[11]},
			{name:p[12],value:y1[12]},
			{name:p[13],value:y1[13]},
			{name:p[14],value:y1[14]},
			{name:p[15],value:y1[15]},
			{name:p[16],value:y1[16]},
			{name:p[17],value:y1[17]},
			{name:p[18],value:y1[18]},
			{name:p[19],value:y1[19]},
			{name:p[20],value:y1[20]},
			{name:p[21],value:y1[21]},
			{name:p[22],value:y1[22]},
			{name:p[23],value:y1[23]},
			{name:p[24],value:y1[24]},
			{name:p[25],value:y1[25]},
			{name:p[26],value:y1[26]},
			{name:p[27],value:y1[27]},
			{name:p[28],value:y1[28]},
			{name:p[29],value:y1[29]}
			]
	},
	{
		name:'利润',
		type:'effectScatter',
		coordinateSystem:"geo",
		symbol: 'circle',
		symbolSize: 4,
		itemStyle: {color:"#feff07"},
		data:[
			{name:"合肥",value:[117.194778,31.86577,y2[0]]},
			{name:"北京",value:[116.403694,39.949459,y2[1]]},
			{name:"福州",value:[119.292069,26.144144,y2[2]]},
			{name:"兰州",value:[103.856737,36.094212,y2[3]]},
			{name:"广州",value:[113.239359,23.185545,y2[4]]},
			{name:"南宁",value:[108.345678,22.861984,y2[5]]},
			{name:"贵阳",value:[106.616332,26.707352,y2[6]]},
			{name:"海口",value:[110.350983,19.968035,y2[7]]},
			{name:"石家庄",value:[114.508772,38.083783,y2[8]]},
			{name:"郑州",value:[113.644099,34.769161,y2[9]]},
			{name:"哈尔滨",value:[126.522207,45.801617,y2[10]]},
			{name:"武汉",value:[114.361594,30.601078,y2[11]]},
			{name:"长沙",value:[112.926605,28.217167,y2[12]]},
			{name:"长春",value:[125.326383,43.797768,y2[13]]},
			{name:"南京",value:[118.832137,32.038322,y2[14]]},
			{name:"南昌",value:[115.851775,28.672488,y2[15]]},
			{name:"沈阳",value:[123.486653,41.682522,y2[16]]},
			{name:"呼和浩特",value:[111.785972,40.849642,y2[17]]},
			{name:"银川",value:[106.257585,38.482579,y2[18]]},
			{name:"济南",value:[117.194778,36.652148,y2[19]]},
			{name:"太原",value:[112.595453,37.858034,y2[20]]},
			{name:"西安",value:[109.026378,34.350591,y2[21]]},
			{name:"上海",value:[121.518142,31.211845,y2[22]]},
			{name:"成都",value:[104.132697,30.561282,y2[23]]},
			{name:"天津",value:[117.286764,39.001295,y2[24]]},
			{name:"拉萨",value:[91.144205,29.649484,y2[25]]},
			{name:"乌鲁木齐",value:[87.667116,43.817754,y2[26]]},
			{name:"昆明",value:[102.881681,24.866897,y2[27]]},
			{name:"杭州",value:[120.211934,30.274265,y2[28]]},
			{name:"重庆",value:[106.553263,29.556681,y2[29]]}
			]
	}]
};
mychart.setOption(option);

})