		/*
		图层管理ztree js
		生成各部分列表
		*/
		var setting = {
			view: {
				selectedMulti: false
			},
			check: {
				enable: true
			},
			data: {
				simpleData: {
					enable: true
				}
			},
			callback: {
				beforeCheck: beforeCheck,
				onCheck: onCheck,
				onClick: onClick
			}
		};
		


		var zNodes =[
			{ id:1, pId:0, name:"3dtile数据", open:true},
			{ id:11, pId:1, name:"点云数据", open:true},
			//{ id:111, pId:11, name:"随意勾选 1-1-1"},
			//{ id:112, pId:11, name:"随意勾选 1-1-2"},
			{ id:12, pId:1, name:"正射影像"},   //禁止勾选默认加载dom
			{ id:13, pId:1, name:"dem",checked:true,doCheck:false},
			{ id:14, pId:1, name:"地名"},
			{ id:15, pId:1, name:"景点"},
			{ id:16, pId:1, name:"区域外景点距离"},
			//{ id:121, pId:12, name:"随意勾选 1-2-1"},
			//{ id:122, pId:12, name:"随意勾选 1-2-2"},
			{ id:2, pId:0, name:"地形", checked:true, open:true},
			//{ id:21, pId:2, name:"影像", open:true},
			//{ id:211, pId:21, name:"天地图"},
			//{ id:212, pId:21, name:"谷歌地图"},
			//{ id:213, pId:21, name:"dom",checked:true,doCheck:false},
			//{ id:22, pId:2, name:"地形", open:true},
			//{ id:21, pId:2, name:"全球地形"},
			{ id:21, pId:2, name:"地形", checked:true},
			//{ id:23, pId:2, name:"随意勾选 2-3"}
			{ id:3, pId:0, name:"村界"},
			{ id:31, pId:3, name:"大树村", nocheck:true},
			{ id:31, pId:3, name:"上羊昌村", nocheck:true},
			{ id:31, pId:3, name:"骂渡村", nocheck:true},
			{ id:31, pId:3, name:"陇箐村", nocheck:true},
			{ id:31, pId:3, name:"骂若村", nocheck:true},
			{ id:31, pId:3, name:"双喜村", nocheck:true},
			{ id:31, pId:3, name:"马渡下寨", nocheck:true},
			{ id:31, pId:3, name:"长田村", nocheck:true},
			{ id:31, pId:3, name:"栋青寨", nocheck:true},
			{ id:31, pId:3, name:"新华村", nocheck:true},
			{ id:31, pId:3, name:"木乃村", nocheck:true},
			{ id:31, pId:3, name:"陇嘎村", nocheck:true},
			{ id:31, pId:3, name:"地坝村", nocheck:true},
			{ id:31, pId:3, name:"三岔村", nocheck:true},
			{ id:31, pId:3, name:"对门上寨", nocheck:true},
			{ id:31, pId:3, name:"和平村", nocheck:true},
			{ id:31, pId:3, name:"小河村", nocheck:true},
			{ id:31, pId:3, name:"磨雄村", nocheck:true},
			{ id:4, pId:0, name:"公路"},
			{ id:41, pId:4, name:"对门村村道", nocheck:true},
			{ id:42, pId:4, name:"和平村村道", nocheck:true},
			{ id:43, pId:4, name:"两村路", nocheck:true},
			{ id:44, pId:4, name:"通渡路", nocheck:true},
			{ id:45, pId:4, name:"通山路", nocheck:true},
			{ id:46, pId:4, name:"通谷路", nocheck:true},
			{ id:47, pId:4, name:"通湾路", nocheck:true},
			{ id:48, pId:4, name:"安普公路", nocheck:true}
		];
		
		var code;
		
		function setCheck() {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
			py = $("#py").attr("checked")? "p":"",
			sy = $("#sy").attr("checked")? "s":"",
			pn = $("#pn").attr("checked")? "p":"",
			sn = $("#sn").attr("checked")? "s":"",
			type = { "Y":py + sy, "N":pn + sn};
			zTree.setting.check.chkboxType = type;
			showCode('setting.check.chkboxType = { "Y" : "' + type.Y + '", "N" : "' + type.N + '" };');
		}
		function showCode(str) {
			if (!code) code = $("#code");
			code.empty();
			code.append("<li>"+str+"</li>");
		}
		
		$(document).ready(function(){
			$.fn.zTree.init($("#treeDemo"), setting, zNodes);
			setCheck();
			$("#py").bind("change", setCheck);
			$("#sy").bind("change", setCheck);
			$("#pn").bind("change", setCheck);
			$("#sn").bind("change", setCheck);
		});
		
		
		function beforeCheck(treeId, treeNode) {
			//用列举函数来判断当name=咩时加载对应的东西
			var treeName = treeNode.name;
			switch (treeName) {
				case "点云数据":
					return true;           	//打勾/取消前不影响oncheck执行
					break;
				case "dem":	
					//默认加载dom函数,加一个提示框吧 同时禁止更改dom操作
					<!-- var domBtn = document.getElementById('dom-warning'); -->
					<!-- if(domBtn.style.display != 'block') -->
					<!-- { -->
						<!-- domBtn.style.display = 'block'; -->
					<!-- } -->
					return false;
					break;
				case "地名":
					return true;		//打勾/取消前不影响oncheck执行
					break;
				
				case "全球地形":
					//没打勾时可以选，打了不可以改
					break;
				case "地形":
					//默认加载dem函数,加一个提示框吧
					var domBtn = document.getElementById('dem-warning');
					if(domBtn.style.display != 'block')
					{
						domBtn.style.display = 'block';
					}
					return false;
					break;
				case "村名":
					break;
			}
		}	
		
		function onCheck(e, treeId, treeNode) {
			//用列举函数来判断当name=咩时加载对应的东西
			var treeName = treeNode.name
			switch (treeName) {
				case "点云数据":
					if(treeNode.checked == false)
					{
						pointCloudRemove();
						break;
						}
					if(treeNode.checked == true)
					{
						pointCloudLoad();             	//执行加载点云函数
						break;
						}
				case "正射影像":	
					//相关提示操作在beforecheck那边做了
					if(treeNode.checked == false)
					{
						demRemove();
						break;
						}
					if(treeNode.checked == true)
					{
						demLoad();             	//执行加载点云函数
						break;
						}
					break;
				case "dem":
					break;
				case "地名":
					if(treeNode.checked == false)
					{
						kmlRemove();
						break;
						}
					if(treeNode.checked == true)
					{
						kmlLoad();
						break;
						}
				case "景点":
					if(treeNode.checked == false)
					{
						travelRemove();
						break;
						}
					if(treeNode.checked == true)
					{
						travelLoad();
						break;
						}
				case"公路":
					if(treeNode.checked == false)
					{
						roadRemove();
						break;
						}
					if(treeNode.checked == true)
					{
						roadLoad();
						break;
						}
				case "区域内景点距离":
					if(treeNode.checked == false)
					{
						pointDistanceRemove();
						break;
						}
					if(treeNode.checked == true)
					{
						pointDistance();
						break;
						}
				case "区域外景点距离":
					if(treeNode.checked == false)
					{
						outDistanceRemove();
						break;
						}
					if(treeNode.checked == true)
					{
						outDistance();
						break;
						}
				case "天地图":
					tiandituLoad();
					break;
				case "必应地图":
					bingLoad();
					break;
				case "全地形":
					//默认加载dem函数,加一个提示框吧
					var worldBtn = document.getElementById('world-warning');
					if(worldBtn.style.display != 'block')
					{
						worldBtn.style.display = 'block';
					}
					
					worldTerrainLoad();				//勾选加载全球地形并弹出提示要刷新才可以看回自生产地形
					break;
				case "地形":
					
					break;
					
				case "村界":
					if(countrySwitch == false)
					{
						contrysideLoad();						//开关未打开，执行加载函数，打开开关
						}
					else if (countrySwitch == true)
					{
						contrysideRemove();					//开关打开，执行移除函数，关闭开关
						}
					break;
					
			}
		}	
		
		function onClick(event, treeId, treeNode, clickFlag) {
			var treeName = treeNode.name;
			switch (treeName) {
				case "点云数据":
					break;
				case "正射影像":
					break;
				case "地名":
					break;
				case "天地图":
					break;
				case "必应地图":
					break;
				case "全地形":
					break;
				case "地形":
					break;
				case "村界":
					break;
				case "大树村":
					viewer.zoomTo(dashuEntity,new Cesium.HeadingPitchRange(10.0, -1.0, 100.0));
					break;
				case "上羊昌村":
					viewer.zoomTo(shangyangEntity,new Cesium.HeadingPitchRange(10.0, -1.0, 100.0));
					break;
				case "骂渡村":
					viewer.zoomTo(maduEntity,new Cesium.HeadingPitchRange(10.0, -5.0, 100.0));
					break;
				case "陇箐村":
					viewer.zoomTo(longjingEntity,new Cesium.HeadingPitchRange(10.0, -1.0, 100.0));
					break;
				case "骂若村":
					viewer.zoomTo(maruoEntity,new Cesium.HeadingPitchRange(-120.0, -1.0, 100.0));
					break;
				case "双喜村":
					viewer.zoomTo(shuangxiEntity,new Cesium.HeadingPitchRange(-60.0, -1.0, 100.0));
					break;
				case "马渡下寨":
					viewer.zoomTo(maduxiaEntity,new Cesium.HeadingPitchRange(30.0, -1.0, 200.0));
					break;
				case "长田村":
					viewer.zoomTo(changtianEntity,new Cesium.HeadingPitchRange(-20.0, -1.0, 100.0));
					break;
				case "栋青寨":
					viewer.zoomTo(dongqingEntity,new Cesium.HeadingPitchRange(20.0, -0.5, 200.0));
					break;
				case "新华村":
					viewer.zoomTo(xinhuaEntity,new Cesium.HeadingPitchRange(10.0, -1.0, 100.0));
					break;
				case "木乃村":
					viewer.zoomTo(munaiEntity,new Cesium.HeadingPitchRange(-10.0, -0.5, 200.0));
					break;
				case "陇嘎村":
					viewer.zoomTo(longgaEntity,new Cesium.HeadingPitchRange(-100.0, -0.5, 200.0));
					break;
				case "地坝村":
					viewer.zoomTo(dibaEntity,new Cesium.HeadingPitchRange(10.0, -1.0, 100.0));
					break;
				case "三岔村":
					viewer.zoomTo(sanchaEntity,new Cesium.HeadingPitchRange(-40.0, -1.0, 100.0));
					break;
				case "对门上寨":
					viewer.zoomTo(duimenEntity,new Cesium.HeadingPitchRange(100.0, -0.8, 100.0));
					break;
				case "和平村":
					viewer.zoomTo(hepingEntity,new Cesium.HeadingPitchRange(120.0, -0.5, 200.0));
					break;
				case "小河村":
					viewer.zoomTo(xiaoheEntity,new Cesium.HeadingPitchRange(-120.0, -0.5, 200.0));
					break;
				case "磨雄村":
					viewer.zoomTo(moxiongEntity,new Cesium.HeadingPitchRange(-120.0, -0.5, 1000.0));
					break;
			}
		}