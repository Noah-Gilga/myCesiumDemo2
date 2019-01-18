		var tileset;
		var tileset2;
		var tileset3;
		var tileset4;
		var tileset5;
		var tileset6;
		var tileset7;
		var tileset8;
		
		
		
		
		//kml的全局变量
		var kmlLayer = new Cesium.KmlDataSource();
		
		//旅游kml
		var travelLayer = new Cesium.KmlDataSource();
		
		//天地图的全局变量
		var tianLayer;
		
		//bing地图的全局变量
		var Binglayer;
		
		//全球地形的全局变量
		var worldTerrain;
		
		//dom的全局变量
		var domLayer;
		
		//dem的全局变量；
		var demLayer;
		
		//村界的全局变量
		
		var dashuEntity;			//大树村
		var shangyangEntity;		//上羊昌村
		var maduEntity;				//骂渡村
		var longjingEntity;			//陇箐村
		var maruoEntity;			//骂若村
		var shuangxiEntity;			//双喜村
		var maduxiaEntity;			//马渡下寨
		var changtianEntity;		//长田村
		var dongqingEntity;			//栋青寨
		var xinhuaEntity;			//新华村
		var munaiEntity;			//木乃村
		var longgaEntity;			//陇嘎村
		var dibaEntity;				//堤坝村
		var sanchaEntity;			//三岔村
		var duimenEntity;			//对门上寨
		var hepingEntity;			//和平村
		var xiaoheEntity;			//小河村
		var countrySwitch = false;			//用来判断是否已经加载entity的
		
		//村的泰森多边形边界-42
		var lineEntity1;				//line 因为outline没有height不能显示
		var lineEntity2;
		var lineEntity3;
		var lineEntity4;
		var lineEntity5;
		var lineEntity6;
		var lineEntity7;
		var lineEntity8;
		var lineEntity9;
		var lineEntity10;
		var lineEntity11;
		var lineEntity12;
		var lineEntity13;
		var lineEntity14;
		var lineEntity15;
		var lineEntity16;
		var lineEntity17;
		var lineEntity18;
		var lineEntity19;
		var lineEntity20;
		var lineEntity21;
		var lineEntity22;
		var lineEntity23;
		var lineEntity24;
		var lineEntity25;
		var lineEntity26;
		var lineEntity27;
		var lineEntity28;
		var lineEntity29;
		var lineEntity30;
		var lineEntity31;
		var lineEntity32;
		var lineEntity33;
		var lineEntity34;
		var lineEntity35;
		var lineEntity36;
		var lineEntity37;
		var lineEntity38;
		var lineEntity39;
		var lineEntity40;
		var lineEntity41;
		var lineEntity42;
		
		
		//山和渡口
		var cyanLine1 = new Cesium.Entity();
		//山和罗家湾
		var cyanLine2 = new Cesium.Entity();
		//山和桃花岛
		var cyanLine3 = new Cesium.Entity();
		//山和夜郎湖
		var cyanLine4 = new Cesium.Entity();
		//山和老鹰岩 
		var cyanLine5 = new Cesium.Entity();
		//罗家湾和渡口
		var cyanLine6 = new Cesium.Entity();
		//罗家湾和桃花岛
		var cyanLine7 = new Cesium.Entity();
		//罗家湾和夜郎湖
		var cyanLine8 = new Cesium.Entity();
		//罗家湾和老鹰岩
		var cyanLine9 = new Cesium.Entity();
		//桃花岛和渡口
		var cyanLine10 = new Cesium.Entity();
		//桃花岛和夜郎湖
		var cyanLine11 = new Cesium.Entity();
		//桃花岛和老鹰岩
		var cyanLine12 = new Cesium.Entity();
		//夜郎湖和渡口
		var cyanLine13 = new Cesium.Entity();
		//夜郎湖和老鹰岩
		var cyanLine14 = new Cesium.Entity();
		//老鹰岩和渡口
		var cyanLine15 = new Cesium.Entity();
		
		
		
		
		
		
		function pointCloudLoad(){
			//将tilset变全局变量
		//1.
		tileset = new Cesium.Cesium3DTileset({
			url: 
			'pointCloud/29140/tileset.json'
		});
			
		//2.
		tileset2 = new Cesium.Cesium3DTileset({
			url: 
			'pointCloud/29150/29150-3/tileset.json'
		});
		
		//3.
		tileset3 = new Cesium.Cesium3DTileset({
			url: 
			'pointCloud/29160/29160/tileset.json'
		});
		
		//4.
		tileset4 = new Cesium.Cesium3DTileset({
			url:
			'pointCloud/29170/29170/tileset.json'
		});
		
		//5.
		tileset5 = new Cesium.Cesium3DTileset({
			url: 
			'pointCloud/29180/29180/tileset.json'
		});
		
		//6.
		tileset6 = new Cesium.Cesium3DTileset({
			url: 
			'pointCloud/29190/29190/tileset.json'
		});
		
		//7.
		tileset7 = new Cesium.Cesium3DTileset({
			url: 
			'pointCloud/29200/29200/tileset.json'
		});
		
		//8.
		tileset8 = new Cesium.Cesium3DTileset({
			url: 
			'pointCloud/29210/29210/tileset.json'
		});	
			
			var longitude = 105.7112028497739;
			var latitude = 26.338204809001507;
			var height = 1340.2249999986425;
			var heading = 0;
					
			//这句可以让点云变密集，0已经是最大值啦
			tileset.maximumScreenSpaceError = 0; // For better performance, due to how this tileset treats geometric error.
					
					
			//设置点云像素大小
			tileset.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : '2'
			});
			viewer.scene.primitives.add(tileset);
			tileset.readyPromise.then(function(argument) {
			var position = Cesium.Cartesian3.fromDegrees(longitude, latitude, height);
			var mat = Cesium.Transforms.eastNorthUpToFixedFrame(position);
			var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(heading)));
			Cesium.Matrix4.multiply(mat, rotationX, mat);
			tileset._root.transform = mat;
			//viewer.camera.flyTo({destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height + 1000)});
			});
					
			//加载29150区域的点云
			var longitude2 = 105.71125802746994;
			var latitude2 = 26.347229929770933;
			var height2 = 1338.3599999973678;
			var heading2 = 0;
			
			//设置点云像素大小
			tileset2.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : '2'
			});
			viewer.scene.primitives.add(tileset2);
			tileset2.readyPromise.then(function(argument) {
			var position = Cesium.Cartesian3.fromDegrees(longitude2, latitude2, height2);
			var mat = Cesium.Transforms.eastNorthUpToFixedFrame(position);
			var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(heading2)));
			Cesium.Matrix4.multiply(mat, rotationX, mat);
			tileset2._root.transform = mat;
			//viewer.camera.flyTo({destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height + 1000)});
			});
					
			//3.加载29160区域
			var longitude3 = 105.71131323128427;
			var latitude3 = 26.3562550390631;
			var height3 = 1339.5600000020381;
			var heading3 = 0;
			
			//设置点云像素大小
			tileset3.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : '2'
			});
			viewer.scene.primitives.add(tileset3);
			tileset3.readyPromise.then(function(argument) {
			var position = Cesium.Cartesian3.fromDegrees(longitude3, latitude3, height3);
			var mat = Cesium.Transforms.eastNorthUpToFixedFrame(position);
			var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(heading3)));
			Cesium.Matrix4.multiply(mat, rotationX, mat);
			tileset3._root.transform = mat;
			//viewer.camera.flyTo({destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height + 1000)});
			});
			
			//4.加载29170区域
			var longitude4 = 105.7113684612256;
			var latitude4 = 26.365280136875246;
			var height4 = 1678.0250000005644;
			var heading4 = 0;
			
			//设置点云像素大小
			tileset4.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : '2'
			});
			viewer.scene.primitives.add(tileset4);
			tileset4.readyPromise.then(function(argument) {
			var position = Cesium.Cartesian3.fromDegrees(longitude4, latitude4, height4);
			var mat = Cesium.Transforms.eastNorthUpToFixedFrame(position);
			var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(heading4)));
			Cesium.Matrix4.multiply(mat, rotationX, mat);
			tileset4._root.transform = mat;
			//viewer.camera.flyTo({destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height + 1000)});
			});
			
			//5.加载29180区域
			var longitude5 = 105.71142371730295;
			var latitude5 = 26.374305223204637;
			var height5 = 1339.6400000025153;
			var heading5 = 0;
			
			//设置点云像素大小
			tileset5.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : '2'
			});
			viewer.scene.primitives.add(tileset5);
			tileset5.readyPromise.then(function(argument) {
			var position = Cesium.Cartesian3.fromDegrees(longitude5, latitude5, height5);
			var mat = Cesium.Transforms.eastNorthUpToFixedFrame(position);
			var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(heading5)));
			Cesium.Matrix4.multiply(mat, rotationX, mat);
			tileset5._root.transform = mat;
			//viewer.camera.flyTo({destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height + 1000)});
			});
			
			//6.加载29190区域
			var longitude6 = 105.71147899952484;
			var latitude6 = 26.383330298048588;
			var height6 = 1323.0950000004336;
			var heading6 = 0;
			
			//设置点云像素大小
			tileset6.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : '2'
			});
			viewer.scene.primitives.add(tileset6);
			tileset6.readyPromise.then(function(argument) {
			var position = Cesium.Cartesian3.fromDegrees(longitude6, latitude6, height6);
			var mat = Cesium.Transforms.eastNorthUpToFixedFrame(position);
			var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(heading6)));
			Cesium.Matrix4.multiply(mat, rotationX, mat);
			tileset6._root.transform = mat;
			//viewer.camera.flyTo({destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height + 1000)});
			});
			
			//7.加载29200区域
			var longitude7 = 105.71153430790028;
			var latitude7 = 26.392355361404224;
			var height7 = 1352.075000000081;
			var heading7 = 0;
			
			//设置点云像素大小
			tileset7.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : '2'
			});
			viewer.scene.primitives.add(tileset7);
			tileset7.readyPromise.then(function(argument) {
			var position = Cesium.Cartesian3.fromDegrees(longitude7, latitude7, height7);
			var mat = Cesium.Transforms.eastNorthUpToFixedFrame(position);
			var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(heading7)));
			Cesium.Matrix4.multiply(mat, rotationX, mat);
			tileset7._root.transform = mat;
			//viewer.camera.flyTo({destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height + 1000)});
			});
			
			//8.加载29210区域
			var longitude8 = 105.7115896424379;
			var latitude8 = 26.401380413268875;
			var height8 = 1350.4250000017296;
			var heading8 = 0;
			
			//设置点云像素大小
			tileset8.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : '2'
				});
			viewer.scene.primitives.add(tileset8);
			tileset8.readyPromise.then(function(argument) {
			var position = Cesium.Cartesian3.fromDegrees(longitude8, latitude8, height8);
			var mat = Cesium.Transforms.eastNorthUpToFixedFrame(position);
			var rotationX = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(heading8)));
			Cesium.Matrix4.multiply(mat, rotationX, mat);
			tileset8._root.transform = mat;
			//viewer.camera.flyTo({destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height + 1000)});
			});
			
			viewer.scene.primitives.show = true;
		};
		
		var options = {
		camera : viewer.scene.camera,
		canvas : viewer.scene.canvas
		};
		
		function kmlDataLoad(kmlName,kmlPath){
			kmlName.load(kmlPath,options);
		}
		
		/*
		控制加载地名kml
		*/
		// function kmlLoad(){
			// kmlLayer.load('kml/placename.kml',
		 // {
			  // camera: viewer.scene.camera,
			  // canvas: viewer.scene.canvas
		 // });
			// viewer.dataSources.add(kmlLayer);
			
		// }
		
		function kmlLoad(){
			kmlDataLoad(kmlLayer,'kml/placename.kml')
			viewer.dataSources.add(kmlLayer);
		}
		
		//加载景点Km
		function travelLoad(){
			kmlDataLoad(travelLayer,'kml/travel.kml')
			viewer.dataSources.add(travelLayer);
		}
		
		/*
		加载天地图
		要先lower bing地图
		*/
		function tiandituLoad(){
			viewer.imageryLayers.lower(Binglayer);
			var tianMap = new Cesium.WebMapTileServiceImageryProvider({
					url : 'http://t0.tianditu.com/img_w/wmts',
					layer : 'img',
					style : 'default',
					format : 'tiles',
					tileMatrixSetID : 'w',
					credit : new Cesium.Credit('天地图全球影像服务'),
					maximumLevel : 18
				});
			tianLayer = new Cesium.ImageryLayer(tianMap);
			viewer.imageryLayers.add(tianLayer);
			}
		
		
		/*
		加载bing地图
		要先lower天地图
		*/
		function bingLoad(){
			viewer.imageryLayers.lower(tianLayer);
			var bingMap = new Cesium.BingMapsImageryProvider({
					url:'//dev.virtualearth.net',
					key:'RrtMfihZkhPO5yZ7oToT~FpWsSrdQKKlR785PhRAunA~AsteAHRBCGbAimkt8u-n8F_FXnohAU39WqwuVyC7ux5Ei9_ojXWbtX-ycCeU1YD2'
				});
			Binglayer = new Cesium.ImageryLayer(bingMap);
			viewer.imageryLayers.add(Binglayer);	
		}
		
		/*
		加载dom
		要先lower天地图和Bing地图
		*/
		function domLoad(){
			var domMap  =new Cesium.UrlTemplateImageryProvider({
				url:'./img/1109/{z}/{x}/{y}.png',
				//url:'http://localhost:8090/cesiumMap2/img/08061003/{z}/{x}/{y}.png',
				//查看官网api上的UrlTemplateImagery的接口条件是一定要写zxy
				//url:'http://localhost:9002/api/wmts/gettile/8a21d00917cf41e39e74c9413663a126/{z}/{x}/{y}',
				tilingScheme: new Cesium.WebMercatorTilingScheme(),
				minimumLevel: 0,
				maximumLevel: 20,
			});
			domLayer=new Cesium.ImageryLayer(domMap);
			viewer.imageryLayers.add(domLayer);
		}
		
		//加载dem
		function demLoad(){
			var demMap = new Cesium.UrlTemplateImageryProvider({
				//url:'http://localhost:8090/cesiumProject/img/08061003/{z}/{x}/{y}.png',
				url:'./img/08061003/{z}/{x}/{y}.png',
				//查看官网api上的UrlTemplateImagery的接口条件是一定要写zxy
				//url:'http://localhost:9002/api/wmts/gettile/8a21d00917cf41e39e74c9413663a126/{z}/{x}/{y}',
				tilingScheme: new Cesium.WebMercatorTilingScheme(),
				minimumLevel: 0,
				maximumLevel: 20,
				});
			demLayer=new Cesium.ImageryLayer(demMap);
			viewer.imageryLayers.add(demLayer);
		}
		
		//取消dem加载
		function demRemove(){
			viewer.imageryLayers.remove(demLayer);
		}
		
		
		/*
		加载世界地形
		*/
		function worldTerrainLoad(){
			worldTerrain = new Cesium.CesiumTerrainProvider({
				url : Cesium.IonResource.fromAssetId(3956),
				requestVertexNormals : true
			});
			viewer.terrainProvider = worldTerrain;
		}
		
		//区域内各景点之间的距离
		function pointDistance(){
			cyanLine1 = viewer.entities.add({
				name : '歪头山与渡口的距离',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.7008299587312,26.37269875608343,1500,
																		   105.6886092182557,26.38055120513366,1300]),
					width :2,
					material : new Cesium.PolylineDashMaterialProperty({
						color : Cesium.Color.RED,
						dashPattern: parseInt('110000001111', 2)
					})
				},
				description:'歪头山与渡口的距离:	1.5km'
			});
			
			cyanLine2 = viewer.entities.add({
				name : '歪头山与罗家湾的距离',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.69811703, 26.373189, 1500,
																		   105.703029, 26.3458195, 1300]),
					width :2,
					material : new Cesium.PolylineDashMaterialProperty({
						color : Cesium.Color.RED,
						dashPattern: parseInt('110000001111', 2)
					})
				},
				description:'歪头山与罗家湾的距离:	3.2km'
			});
			
			cyanLine3 = viewer.entities.add({
				name : '歪头山与桃花岛的距离',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.69811703, 26.373189, 1500,
																		  105.722517606113, 26.36976811915665, 1300]),
					width :2,
					material : new Cesium.PolylineDashMaterialProperty({
						color : Cesium.Color.RED,
						dashPattern: parseInt('110000001111', 2)
					})
				},
				description:'歪头山与桃花岛的距离:	2.2km'
			});
			
			cyanLine4 = viewer.entities.add({
				name : '歪头山与夜郎湖的距离',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.69811703, 26.373189, 1500,
																		   105.7238819573921, 26.38152512601619, 1300]),
					width :2,
					material : new Cesium.PolylineDashMaterialProperty({
						color : Cesium.Color.RED,
						dashPattern: parseInt('110000001111', 2)
					})
				},
				description:'歪头山与夜郎湖的距离:	2.5km'
			});
			
			cyanLine5 = viewer.entities.add({
				name : '歪头山与老鹰岩的距离',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.69811703, 26.373189, 1500,
																		   105.7456711187, 26.39422260, 1300]),
					width :2,
					material : new Cesium.PolylineDashMaterialProperty({
						color : Cesium.Color.RED,
						dashPattern: parseInt('110000001111', 2)
					})
				},
				description:'歪头山与老鹰岩的距离:	5.1km'
			});
			
			cyanLine6 = viewer.entities.add({
				name : '罗家湾与渡口的距离',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.7039123218261,26.34572745330459,1400,
																		   105.6886092182557,26.38055120513366,1300]),
					width :2,
					material : new Cesium.PolylineDashMaterialProperty({
						color : Cesium.Color.RED,
						dashPattern: parseInt('110000001111', 2)
					})
				},
				description:'罗家湾与渡口的距离:	4.2km'
			});
			
			cyanLine7 = viewer.entities.add({
				name : '罗家湾与桃花岛的距离',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.7039123218261,26.34572745330459,1300,
																		   105.722517606113,26.36976811915665,1300]),
					width :2,
					material : new Cesium.PolylineDashMaterialProperty({
						color : Cesium.Color.RED,
						dashPattern: parseInt('110000001111', 2)
					})
				},
				description:'罗家湾与桃花岛的距离:	3.3km'
			});
			
			cyanLine8 = viewer.entities.add({
				name : '罗家湾与夜郎湖的距离',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.7039123218261,26.34572745330459,1300,
																		   105.7238819573921,26.38152512601619,1300]),
					width :2,
					material : new Cesium.PolylineDashMaterialProperty({
						color : Cesium.Color.RED,
						dashPattern: parseInt('110000001111', 2)
					})
				},
				description:'罗家湾与夜郎湖的距离:	4.4km'
			});
			
			cyanLine9 = viewer.entities.add({
				name : '罗家湾与老鹰岩的距离',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.7039123218261,26.34572745330459,1300,
																		   105.7456711690625,26.39422260767652,1350]),
					width :2,
					material : new Cesium.PolylineDashMaterialProperty({
						color : Cesium.Color.RED,
						dashPattern: parseInt('110000001111', 2)
					})
				},
				description:'罗家湾与老鹰岩的距离:	7.0km'
			});
			
			cyanLine10 = viewer.entities.add({
				name : '渡口与桃花岛的距离',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.6886092182557,26.38055120513366,1300,
																		   105.722517606113,26.36976811915665,1300]),
					width :2,
					material : new Cesium.PolylineDashMaterialProperty({
						color : Cesium.Color.RED,
						dashPattern: parseInt('110000001111', 2)
					})
				},
				description:'渡口与桃花岛的距离:	3.5km'
			});
			
			cyanLine11 = viewer.entities.add({
				name : '夜郎湖与桃花岛的距离',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.7238819573921,26.38152512601619,1300,
																		   105.722517606113,26.36976811915665,1300]),
					width :2,
					material : new Cesium.PolylineDashMaterialProperty({
						color : Cesium.Color.RED,
						dashPattern: parseInt('110000001111', 2)
					})
				},
				description:'夜郎湖与桃花岛的距离:	1.4km'
			});
			
			cyanLine12 = viewer.entities.add({
				name : '老鹰岩与桃花岛的距离',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.7456711690625,26.39422260767652,1350,
																		   105.722517606113,26.36976811915665,1300]),
					width :2,
					material : new Cesium.PolylineDashMaterialProperty({
						color : Cesium.Color.RED,
						dashPattern: parseInt('110000001111', 2)
					})
				},
				description:'老鹰岩与桃花岛的距离:	3.7km'
			});
			
			cyanLine13 = viewer.entities.add({
				name : '夜郎湖与渡口的距离',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.7238819573921,26.38152512601619,1300,
																		   105.6886092182557,26.38055120513366,1300]),
					width :2,
					material : new Cesium.PolylineDashMaterialProperty({
						color : Cesium.Color.RED,
						dashPattern: parseInt('110000001111', 2)
					})
				},
				description:'渡口与夜郎湖的距离:	3.5km'
			});
			
			cyanLine14 = viewer.entities.add({
				name : '夜郎湖与老鹰岩的距离',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.7238819573921,26.38152512601619,1300,
																		   105.7456711690625,26.39422260767652,1350]),
					width :2,
					material : new Cesium.PolylineDashMaterialProperty({
						color : Cesium.Color.RED,
						dashPattern: parseInt('110000001111', 2)
					})
				},
				description:'夜郎湖与老鹰岩的距离:	2.8km'
			});
			
			cyanLine15 = viewer.entities.add({
				name : '渡口与老鹰岩的距离',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.6886092182557,26.38055120513366,1300,
																		   105.7456711690625,26.39422260767652,1350]),
					width :2,
					material : new Cesium.PolylineDashMaterialProperty({
						color : Cesium.Color.RED,
						dashPattern: parseInt('110000001111', 2)
					})
				},
				description:'渡口与老鹰岩的距离:	6.1km'
			});

		}
		
		//区域外景观距离
		
		//距离黄果树瀑布旅游区
		var purpleArrow1 = new Cesium.Entity();
		var purpleArrow2 = new Cesium.Entity();
		var purpleArrow3 = new Cesium.Entity();
		var purpleArrow4 = new Cesium.Entity();
		
		
		function outDistance(){
			
			purpleArrow1 = viewer.entities.add({
				name : '与紫云格凸河国家级风景区距离',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.7397822497431,26.33798951000875,1400, 105.7409447373048,26.33638278971897,1400]),
					width :50,
					followSurface :true,
					material : new Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE)
				},
				description:'距离紫云格凸河国家级风景区距离：34.5km <br/> 安顺龙宫风景区：34.6km<br/>' + '距离旧州古镇：27.5km'
			});
			
			
			purpleArrow2 = viewer.entities.add({
				name : '与夜郎洞',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.6917257171695,26.33705612393293,1400,105.6911958990165,26.33672834353157,1400]),
					width :50,
					followSurface :true,
					material : new Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE)
				},
				description:'距离夜郎洞：32.9km<br/>' + '距离黄果树瀑布水帘洞：41.7km<br/>' + '距离关岭化石群国家地质公园：62.5km<br/>' + '距离安顺华严洞：41.7km'
			});
			
			purpleArrow3 = viewer.entities.add({
				name : '与天台山风景区',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.7460814730592,26.37343003641716,1400, 105.747783229782,26.37332410413987,1400]),
					width :50,
					followSurface :true,
					material : new Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE)
				},
				description:'距离天台山风景区：48.9km<br/>' + '距离天龙屯堡古镇：44.4km<br/>' + '距离天台山伍龙寺：40.8km<br/>' + '距离明代遗址云山屯：42.4km'
			});
			
			purpleArrow4 = viewer.entities.add({
				name : '与天星桥景区',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArrayHeights([105.7023968865354,26.33572005365163,1400,105.7022691757554,26.3350636877731,1400]),
					width :50,
					followSurface :true,
					material : new Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE)
				},
				description:'距离天星桥景区：49.8km<br/>' + '距离黄果树瀑布旅游区：40.5km<br/>' + '距离普定穿洞古人类文化遗址：9.2km'
			});
			
		}
		
		//取消区域内距离加载
		function pointDistanceRemove(){
			viewer.entities.remove(cyanLine1);
			viewer.entities.remove(cyanLine2);
			viewer.entities.remove(cyanLine3);
			viewer.entities.remove(cyanLine4);
			viewer.entities.remove(cyanLine5);
			viewer.entities.remove(cyanLine6);
			viewer.entities.remove(cyanLine7);
			viewer.entities.remove(cyanLine8);
			viewer.entities.remove(cyanLine9);
			viewer.entities.remove(cyanLine10);
			viewer.entities.remove(cyanLine11);
			viewer.entities.remove(cyanLine12);
			viewer.entities.remove(cyanLine13);
			viewer.entities.remove(cyanLine14);
			viewer.entities.remove(cyanLine15);
		}
		
		//取消区域外距离
		function outDistanceRemove(){
			viewer.entities.remove(purpleArrow1);
			viewer.entities.remove(purpleArrow2);
			viewer.entities.remove(purpleArrow3);
			viewer.entities.remove(purpleArrow4);
		}
		
		//取消点云加载
		function pointCloudRemove(){
			//viewer.scene.primitives.removeAll();
			//viewer.scene.primitives.show = false;
			viewer.scene.primitives.remove(tileset);
			viewer.scene.primitives.remove(tileset2);
			viewer.scene.primitives.remove(tileset3);
			viewer.scene.primitives.remove(tileset4);
			viewer.scene.primitives.remove(tileset5);
			viewer.scene.primitives.remove(tileset6);
			viewer.scene.primitives.remove(tileset7);
			viewer.scene.primitives.remove(tileset8);
		}
		
		//取消地名加载
		function kmlRemove(){
			viewer.dataSources.remove(kmlLayer,false);
		}
		
		function travelRemove(){
			viewer.dataSources.remove(travelLayer,false);
		}
		
		
		/*
		加载村界
		*/
		function contrysideLoad(){
			
			
			//设定大树村的范围
			dashuEntity = viewer.entities.add({
				name : '大树村实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.6723347780811,26.35539798946476,105.6727399685982,26.34834945375648,105.6735656374318,26.34892698006986,105.6741666824,26.349424695,105.6749318668,26.35031128010001,105.6755422725,26.350719259,105.676038081,26.3510250621,105.6765356847,26.3516389966,105.6766542717,26.3524259098,105.676658057,26.3530764132,105.6768148482,26.3538973836,105.6769706449,26.3545471686,105.6777750853,26.3556389792,105.6777798754,26.3564606671,105.6774810371,26.3573522672,105.6768729814,26.3573551417,105.6763777409,26.3571520534,105.6762247315,26.35698158610001,105.6751594441,26.3567811833,105.6747408116,26.356680442,105.6743975904,26.3564766305,105.6740917781,26.3561699283,105.6736707681,26.3556583395,105.672758499,26.3556283887,105.672377691256,26.35562863953194,105.6723347780811,26.35539798946476]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.6723347780811,26.35539798946476,105.6727399685982,26.34834945375648,105.6735656374318,26.34892698006986,105.6741666824,26.349424695,105.6749318668,26.35031128010001,105.6755422725,26.350719259,105.676038081,26.3510250621,105.6765356847,26.3516389966,105.6766542717,26.3524259098,105.676658057,26.3530764132,105.6768148482,26.3538973836,105.6769706449,26.3545471686,105.6777750853,26.3556389792,105.6777798754,26.3564606671,105.6774810371,26.3573522672,105.6768729814,26.3573551417,105.6763777409,26.3571520534,105.6762247315,26.35698158610001,105.6751594441,26.3567811833,105.6747408116,26.356680442,105.6743975904,26.3564766305,105.6740917781,26.3561699283,105.6736707681,26.3556583395,105.672758499,26.3556283887,105.672377691256,26.35562863953194,105.6723347780811,26.35539798946476]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene1.jpg'/></div>"
			});
			
			//设定上羊昌村的范围
			shangyangEntity = viewer.entities.add({
				name : '上羊昌村实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.6752589171,26.3608207914,105.6745348423,26.3604818239,105.6739996027,26.3599365365,105.6736177736,26.3596301912,105.6739196243,26.359252154,105.6748307296,26.3590766747,105.6753241857,26.3589716352,105.6766885439,26.3583146754,105.6776002359,26.3582418897,105.6783219079,26.3581699982,105.6787787523,26.3583047858,105.6794652216,26.3587123862,105.680075287,26.3590518702,105.6802277037,26.3591196223,105.6808363698,26.3592194443,105.6814068321,26.3592852074,105.6818252786,26.359351692,105.6828155971,26.3597235915,105.6836699981,26.3607503239,105.6846096586,26.3610503056,105.6850293237,26.3613222022,105.6852955585,26.3613551665,105.6858630032,26.3609073579,105.6862792343,26.3605972232,105.6871895199,26.3602847178,105.687568551,26.3601117095,105.6885202807,26.3603810407,105.6885595019,26.3605862794,105.688979783,26.360960875,105.6888295907,26.3612697382,105.6882623588,26.3617517952,105.6873518624,26.3620300706,105.6860220937,26.3621049218,105.6852991919,26.361971431,105.6840440217,26.3618062417,105.6831695068,26.3617419399,105.682674438,26.3615731109,105.6822921792,26.3611983155,105.6820239366,26.3608229762,105.6813004449,26.360586754,105.680427744,26.3608305678,105.6799348859,26.3610383358,105.6794032207,26.3611093345,105.6785679169,26.361250246,105.6778840311,26.3612877222,105.6777700168,26.3612882618,105.6765152616,26.3611914801,105.6765152616,26.3611914801,105.6752589171,26.3608207914]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.6752589171,26.3608207914,105.6745348423,26.3604818239,105.6739996027,26.3599365365,105.6736177736,26.3596301912,105.6739196243,26.359252154,105.6748307296,26.3590766747,105.6753241857,26.3589716352,105.6766885439,26.3583146754,105.6776002359,26.3582418897,105.6783219079,26.3581699982,105.6787787523,26.3583047858,105.6794652216,26.3587123862,105.680075287,26.3590518702,105.6802277037,26.3591196223,105.6808363698,26.3592194443,105.6814068321,26.3592852074,105.6818252786,26.359351692,105.6828155971,26.3597235915,105.6836699981,26.3607503239,105.6846096586,26.3610503056,105.6850293237,26.3613222022,105.6852955585,26.3613551665,105.6858630032,26.3609073579,105.6862792343,26.3605972232,105.6871895199,26.3602847178,105.687568551,26.3601117095,105.6885202807,26.3603810407,105.6885595019,26.3605862794,105.688979783,26.360960875,105.6888295907,26.3612697382,105.6882623588,26.3617517952,105.6873518624,26.3620300706,105.6860220937,26.3621049218,105.6852991919,26.361971431,105.6840440217,26.3618062417,105.6831695068,26.3617419399,105.682674438,26.3615731109,105.6822921792,26.3611983155,105.6820239366,26.3608229762,105.6813004449,26.360586754,105.680427744,26.3608305678,105.6799348859,26.3610383358,105.6794032207,26.3611093345,105.6785679169,26.361250246,105.6778840311,26.3612877222,105.6777700168,26.3612882618,105.6765152616,26.3611914801,105.6765152616,26.3611914801,105.6752589171,26.3608207914]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene2.jpg'/></div>"
			});
			
			//设定骂渡村的范围
			maduEntity = viewer.entities.add({
				name : '骂渡村实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.676744628,26.3809970079,105.6752534317,26.3794975847,105.6741829702,26.3784412564,105.6733787971,26.3774179054,105.6728430863,26.3768041425,105.6726100709,26.37594929060001,105.6724906907,26.3750254288,105.6724093215,26.3741013883,105.6726613101,26.3716693148,105.67374707,26.368822465,105.6740839714,26.3679306941,105.6745378689,26.3675519399,105.6756414605,26.3677864027,105.6766716341,26.3684662965,105.6779684704,26.369247634,105.6794145517,26.3695489211,105.681090893,26.3702257151,105.6817776424,26.3706675391,105.6827314585,26.3712792759,105.6838395339,26.3722668858,105.6844889025,26.3728115884,105.6854027217,26.3730811197,105.686278941,26.373419301,105.6868151103,26.3741014865,105.6868955817,26.37485433240001,105.6864414952,26.3751988883,105.6855308896,26.3754771538,105.6849635757,26.3759591984,105.6853458926,26.3763339848,105.6860696931,26.3766044207,105.6865692831,26.3775264466,105.6862346772,26.3787948495,105.6855575625,26.3799964165,105.6849162242,26.3808211935,105.6844240975,26.3811659251,105.6838149101,26.3809976474,105.6832791281,26.3803839252,105.6829702085,26.379563692,105.6823204062,26.3789505098,105.6816718163,26.3785427458,105.6806083281,26.3786847569,105.679964155,26.3790301961,105.6793921943,26.3787247711,105.6789364691,26.3787954087,105.6786727964,26.3792075129,105.6782196678,26.3797232277,105.6776885155,26.3798969322,105.6772353799,26.38041264410001,105.676744628,26.3809970079,105.6773127996,26.3806519426,105.676744628,26.3809970079]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.676744628,26.3809970079,105.6752534317,26.3794975847,105.6741829702,26.3784412564,105.6733787971,26.3774179054,105.6728430863,26.3768041425,105.6726100709,26.37594929060001,105.6724906907,26.3750254288,105.6724093215,26.3741013883,105.6726613101,26.3716693148,105.67374707,26.368822465,105.6740839714,26.3679306941,105.6745378689,26.3675519399,105.6756414605,26.3677864027,105.6766716341,26.3684662965,105.6779684704,26.369247634,105.6794145517,26.3695489211,105.681090893,26.3702257151,105.6817776424,26.3706675391,105.6827314585,26.3712792759,105.6838395339,26.3722668858,105.6844889025,26.3728115884,105.6854027217,26.3730811197,105.686278941,26.373419301,105.6868151103,26.3741014865,105.6868955817,26.37485433240001,105.6864414952,26.3751988883,105.6855308896,26.3754771538,105.6849635757,26.3759591984,105.6853458926,26.3763339848,105.6860696931,26.3766044207,105.6865692831,26.3775264466,105.6862346772,26.3787948495,105.6855575625,26.3799964165,105.6849162242,26.3808211935,105.6844240975,26.3811659251,105.6838149101,26.3809976474,105.6832791281,26.3803839252,105.6829702085,26.379563692,105.6823204062,26.3789505098,105.6816718163,26.3785427458,105.6806083281,26.3786847569,105.679964155,26.3790301961,105.6793921943,26.3787247711,105.6789364691,26.3787954087,105.6786727964,26.3792075129,105.6782196678,26.3797232277,105.6776885155,26.3798969322,105.6772353799,26.38041264410001,105.676744628,26.3809970079,105.6773127996,26.3806519426,105.676744628,26.3809970079]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene3.jpg'/></div>"
			});
			
			//设定陇箐村的范围
			longjingEntity = viewer.entities.add({
				name : '陇箐村实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.6850137253,26.384281393,105.6857431532,26.38391181940001,105.6857431532,26.38391181940001,105.6859857181,26.38369100850001,105.6860252804,26.3835077783,105.6863882599,26.3830301328,105.6868772801,26.3832474358,105.6875688697,26.3833539399,105.6882993683,26.3831673887,105.6900022603,26.3824636367,105.6903676138,26.3823886589,105.6908559851,26.3824961271,105.6911848347,26.3831168772,105.6910674793,26.3838862137,105.6913146105,26.3844341416,105.695208874,26.3899430965,105.6953745269,26.3904548042,105.6954564767,26.3905642301,105.6954182429,26.3909671043,105.6953376085,26.3910773201,105.6946466236,26.3910806757,105.6936698029,26.3908657653,105.6930574887,26.3904294353,105.6926899277,26.3901383504,105.6921176119,26.3895919984,105.6915031298,26.3887895914,105.6908091085,26.38828043,105.6897925428,26.3882121167,105.6895888819,26.3881398819,105.6893852212,26.3880676469,105.6889772489,26.3878133548,105.6885681929,26.3873760263,105.6884027916,26.3869009169,105.6881567533,26.3865360191,105.6876670664,26.3862088998,105.6872599711,26.3861010308,105.6861217088,26.3860698835,105.6857139668,26.38585218880001,105.6853462224,26.3855244771,105.6851408408,26.3851593793,105.6850163168,26.384720678,105.6850137253,26.384281393]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.6850137253,26.384281393,105.6857431532,26.38391181940001,105.6857431532,26.38391181940001,105.6859857181,26.38369100850001,105.6860252804,26.3835077783,105.6863882599,26.3830301328,105.6868772801,26.3832474358,105.6875688697,26.3833539399,105.6882993683,26.3831673887,105.6900022603,26.3824636367,105.6903676138,26.3823886589,105.6908559851,26.3824961271,105.6911848347,26.3831168772,105.6910674793,26.3838862137,105.6913146105,26.3844341416,105.695208874,26.3899430965,105.6953745269,26.3904548042,105.6954564767,26.3905642301,105.6954182429,26.3909671043,105.6953376085,26.3910773201,105.6946466236,26.3910806757,105.6936698029,26.3908657653,105.6930574887,26.3904294353,105.6926899277,26.3901383504,105.6921176119,26.3895919984,105.6915031298,26.3887895914,105.6908091085,26.38828043,105.6897925428,26.3882121167,105.6895888819,26.3881398819,105.6893852212,26.3880676469,105.6889772489,26.3878133548,105.6885681929,26.3873760263,105.6884027916,26.3869009169,105.6881567533,26.3865360191,105.6876670664,26.3862088998,105.6872599711,26.3861010308,105.6861217088,26.3860698835,105.6857139668,26.38585218880001,105.6853462224,26.3855244771,105.6851408408,26.3851593793,105.6850163168,26.384720678,105.6850137253,26.384281393]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene4.jpg'/></div>"
			});
			
			//设定骂若村的范围
			maruoEntity = viewer.entities.add({
				name : '骂若村实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.6726510347899,26.40101449587994,105.6727170814175,26.39429698010969,105.6726813058788,26.39167102015932,105.6726277377517,26.39020806988052,105.6727075360154,26.38933535272767,105.6727002617574,26.38898406595778,105.6727480907645,26.38862146103112,105.6728491695059,26.38790167568302,105.6729746012,26.3875437483,105.6729943632,26.3878365206,105.6729060208,26.388178612,105.672962195,26.3885200239,105.6731441621,26.38874695220001,105.6736885573,26.3891674182,105.673799212,26.3895573841,105.6739991528,26.3897679564,105.6743983751,26.3900752111,105.6746349204,26.3903669613,105.6747260961,26.390512964,105.6747462416,26.3908708152,105.674657524,26.3911478282,105.674280426,26.391540092,105.6743376457,26.3920604713,105.6766810966,26.394286572,105.6771883553,26.3945282265,105.677334399,26.3947878595,105.677552231,26.3949658012,105.6780381022,26.3946380947,105.6784897418,26.394635954,105.6796643854,26.394695461,105.6802802363,26.3949691291,105.6805343952,26.395179434,105.6810057251,26.3954537861,105.6813324358,26.395712555,105.6816771182,26.3959549672,105.6817876155,26.3963123864,105.6819515463,26.3965393887,105.6820613757,26.396782919,105.6821539047,26.3971566937,105.6822097285,26.3974330218,105.6822283684,26.3975305544,105.6822494951,26.3980511016,105.6822155627,26.3984254791,105.6821631814,26.3987348635,105.6820387261,26.3990771319,105.6817878058,26.3994200029,105.6817539672,26.39981065,105.6817914383,26.4000382549,105.6815940457,26.4002669787,105.6811430531,26.4003830181,105.6809807414,26.4004326014,105.6797521257,26.4004221734,105.6792459787,26.4003757664,105.6788302595,26.4003451988,105.6786499754,26.400411135,105.6784521954,26.4005747754,105.6784533369,26.400770013,105.6785089636,26.401013803,105.6787090282,26.4012406375,105.67885556,26.40158161760001,105.6788035491,26.40195608,105.678660538,26.40221708230001,105.6784272873,26.4024947827,105.6781393596,26.4026913907,105.677688734,26.4028724985,105.6771654596,26.4029888679,105.6759557364,26.4031247505,105.6749249759,26.4029669142,105.6747076056,26.4028703179,105.6745804753,26.4027570256,105.6742897036,26.4024655317,105.674071295,26.40218996660001,105.6735460363,26.4019646567,105.6733829636,26.40188407300001,105.6730574793,26.4018367938,105.6728060547,26.4020983004,105.6728357990163,26.40243545150104,105.6726677116332,26.40255377681039,105.6725301031572,26.40232740218085,105.6726510347899,26.40101449587994]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.6726510347899,26.40101449587994,105.6727170814175,26.39429698010969,105.6726813058788,26.39167102015932,105.6726277377517,26.39020806988052,105.6727075360154,26.38933535272767,105.6727002617574,26.38898406595778,105.6727480907645,26.38862146103112,105.6728491695059,26.38790167568302,105.6729746012,26.3875437483,105.6729943632,26.3878365206,105.6729060208,26.388178612,105.672962195,26.3885200239,105.6731441621,26.38874695220001,105.6736885573,26.3891674182,105.673799212,26.3895573841,105.6739991528,26.3897679564,105.6743983751,26.3900752111,105.6746349204,26.3903669613,105.6747260961,26.390512964,105.6747462416,26.3908708152,105.674657524,26.3911478282,105.674280426,26.391540092,105.6743376457,26.3920604713,105.6766810966,26.394286572,105.6771883553,26.3945282265,105.677334399,26.3947878595,105.677552231,26.3949658012,105.6780381022,26.3946380947,105.6784897418,26.394635954,105.6796643854,26.394695461,105.6802802363,26.3949691291,105.6805343952,26.395179434,105.6810057251,26.3954537861,105.6813324358,26.395712555,105.6816771182,26.3959549672,105.6817876155,26.3963123864,105.6819515463,26.3965393887,105.6820613757,26.396782919,105.6821539047,26.3971566937,105.6822097285,26.3974330218,105.6822283684,26.3975305544,105.6822494951,26.3980511016,105.6822155627,26.3984254791,105.6821631814,26.3987348635,105.6820387261,26.3990771319,105.6817878058,26.3994200029,105.6817539672,26.39981065,105.6817914383,26.4000382549,105.6815940457,26.4002669787,105.6811430531,26.4003830181,105.6809807414,26.4004326014,105.6797521257,26.4004221734,105.6792459787,26.4003757664,105.6788302595,26.4003451988,105.6786499754,26.400411135,105.6784521954,26.4005747754,105.6784533369,26.400770013,105.6785089636,26.401013803,105.6787090282,26.4012406375,105.67885556,26.40158161760001,105.6788035491,26.40195608,105.678660538,26.40221708230001,105.6784272873,26.4024947827,105.6781393596,26.4026913907,105.677688734,26.4028724985,105.6771654596,26.4029888679,105.6759557364,26.4031247505,105.6749249759,26.4029669142,105.6747076056,26.4028703179,105.6745804753,26.4027570256,105.6742897036,26.4024655317,105.674071295,26.40218996660001,105.6735460363,26.4019646567,105.6733829636,26.40188407300001,105.6730574793,26.4018367938,105.6728060547,26.4020983004,105.6728357990163,26.40243545150104,105.6726677116332,26.40255377681039,105.6725301031572,26.40232740218085,105.6726510347899,26.40101449587994]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene5.jpg'/></div>"
			});
			
			//设定双喜村的范围
			shuangxiEntity = viewer.entities.add({
				name : '双喜村实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.697411982,26.4048318292,105.6966343382,26.403957027,105.6966343382,26.403957027,105.6962256348,26.4035929369,105.6961001691,26.4030078199,105.6960166724,26.4026421465,105.695887257,26.4013981049,105.6955981002,26.4006307435,105.6955552564,26.40026487200001,105.6953047797,26.3991678498,105.6950182635,26.3988397698,105.6942059427,26.3989535372,105.6934340504,26.3990304961,105.6933114474,26.3989212662,105.6928579709,26.3978618306,105.692528195,26.3970946588,105.6926038115,26.3961424844,105.6919073402,26.3952306532,105.6919471149,26.3950840287,105.6920616365,26.393838802,105.6921816132,26.3935087494,105.6927454284,26.3926274285,105.6934342359,26.39225801230001,105.6941236957,26.3919984137,105.695017261,26.3918842529,105.6955856531,26.3917716673,105.696115154,26.3919521329,105.6964809722,26.391950353,105.6972952207,26.3921660361,105.6982333937,26.39271058210001,105.6986835923,26.3932208969,105.6998018051,26.3966565842,105.7000892123,26.3971310821,105.7001327316,26.3976067728,105.7003777266,26.3977886137,105.7010718466,26.3982977261,105.7014867419,26.3996867952,105.7017341786,26.4002713092,105.7016564216,26.4008574178,105.7014978071,26.4015171386,105.701338527,26.4020670387,105.7014644605,26.4027253643,105.701671475,26.4033466842,105.7018371768,26.4038583825,105.7017578684,26.404188243,105.7011903073,26.4044472813,105.700906194,26.4045218894,105.7003797222,26.4048539392,105.6996086787,26.4050773594,105.698796099,26.4051545467,105.6980646,26.4051947258,105.6976982999,26.4051232967,105.697411982,26.4048318292]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.697411982,26.4048318292,105.6966343382,26.403957027,105.6966343382,26.403957027,105.6962256348,26.4035929369,105.6961001691,26.4030078199,105.6960166724,26.4026421465,105.695887257,26.4013981049,105.6955981002,26.4006307435,105.6955552564,26.40026487200001,105.6953047797,26.3991678498,105.6950182635,26.3988397698,105.6942059427,26.3989535372,105.6934340504,26.3990304961,105.6933114474,26.3989212662,105.6928579709,26.3978618306,105.692528195,26.3970946588,105.6926038115,26.3961424844,105.6919073402,26.3952306532,105.6919471149,26.3950840287,105.6920616365,26.393838802,105.6921816132,26.3935087494,105.6927454284,26.3926274285,105.6934342359,26.39225801230001,105.6941236957,26.3919984137,105.695017261,26.3918842529,105.6955856531,26.3917716673,105.696115154,26.3919521329,105.6964809722,26.391950353,105.6972952207,26.3921660361,105.6982333937,26.39271058210001,105.6986835923,26.3932208969,105.6998018051,26.3966565842,105.7000892123,26.3971310821,105.7001327316,26.3976067728,105.7003777266,26.3977886137,105.7010718466,26.3982977261,105.7014867419,26.3996867952,105.7017341786,26.4002713092,105.7016564216,26.4008574178,105.7014978071,26.4015171386,105.701338527,26.4020670387,105.7014644605,26.4027253643,105.701671475,26.4033466842,105.7018371768,26.4038583825,105.7017578684,26.404188243,105.7011903073,26.4044472813,105.700906194,26.4045218894,105.7003797222,26.4048539392,105.6996086787,26.4050773594,105.698796099,26.4051545467,105.6980646,26.4051947258,105.6976982999,26.4051232967,105.697411982,26.4048318292]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene6.jpg'/></div>"
			});
			
			//设定马渡下寨的范围
			maduxiaEntity = viewer.entities.add({
				name : '马渡下寨实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.6841893768,26.367129537,105.6850231006,26.3667146971,105.68532796,26.3668501899,105.6855194064,26.3670889386,105.6863593936,26.3677354344,105.6869309123,26.367972359,105.6873869948,26.3679701705,105.688566222,26.3681356945,105.6896342762,26.36878107380001,105.6900944282,26.3694636136,105.6903627172,26.3698389365,105.6922708411,26.3711307614,105.6925436307,26.3722592898,105.6931924262,26.37270124180001,105.6935759845,26.3732814269,105.6940357688,26.3738954792,105.6945329529,26.3744066351,105.6950716329,26.3754996299,105.6951523638,26.3762867068,105.6952706958,26.3770051253,105.6956924941,26.3776193561,105.6963427685,26.3783009499,105.6967273884,26.3790523092,105.6966565015,26.3799085979,105.6964689117,26.3803203637,105.6957099253,26.38052948070001,105.6946846544,26.3807056484,105.6938465719,26.380401573,105.693004408,26.3794127572,105.6912432885,26.3772985292,105.6907078927,26.3767533085,105.6887834524,26.3727225186,105.6866440541,26.3708839512,105.6850800804,26.3699327827,105.6848880247,26.3695913229,105.6841545952,26.367677509,105.6841529826,26.3674036138,105.6841893768,26.367129537]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.6841893768,26.367129537,105.6850231006,26.3667146971,105.68532796,26.3668501899,105.6855194064,26.3670889386,105.6863593936,26.3677354344,105.6869309123,26.367972359,105.6873869948,26.3679701705,105.688566222,26.3681356945,105.6896342762,26.36878107380001,105.6900944282,26.3694636136,105.6903627172,26.3698389365,105.6922708411,26.3711307614,105.6925436307,26.3722592898,105.6931924262,26.37270124180001,105.6935759845,26.3732814269,105.6940357688,26.3738954792,105.6945329529,26.3744066351,105.6950716329,26.3754996299,105.6951523638,26.3762867068,105.6952706958,26.3770051253,105.6956924941,26.3776193561,105.6963427685,26.3783009499,105.6967273884,26.3790523092,105.6966565015,26.3799085979,105.6964689117,26.3803203637,105.6957099253,26.38052948070001,105.6946846544,26.3807056484,105.6938465719,26.380401573,105.693004408,26.3794127572,105.6912432885,26.3772985292,105.6907078927,26.3767533085,105.6887834524,26.3727225186,105.6866440541,26.3708839512,105.6850800804,26.3699327827,105.6848880247,26.3695913229,105.6841545952,26.367677509,105.6841529826,26.3674036138,105.6841893768,26.367129537]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene7.jpg'/></div>"
			});
			
			//设定长田村的范围
			changtianEntity = viewer.entities.add({
				name : '长田村实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.7048744787,26.3686041549,105.7033803954,26.3666599482,105.7019691982,26.3658451655,105.7014722263,26.3653682715,105.6977961,26.3544643604,105.6955219112,26.3491171909,105.6952528366,26.3486049284,105.6951735614,26.3480575066,105.6962714708,26.3473674174,105.6974472144,26.3469850823,105.6990401247,26.3464637513,105.6997185592,26.3455360167,105.7000184339,26.3448497941,105.7005460929,26.3441282196,105.7009238134,26.3437497556,105.7019464766,26.3431969433,105.7026678307,26.3430906942,105.7033924955,26.3435322315,105.7036611791,26.3439760049,105.7053545143,26.3474941802,105.7052106103,26.3488301651,105.7052882722,26.3491036857,105.7058998139,26.3496827174,105.7064764806,26.3507754861,105.7063286352,26.3514609718,105.7062540881,26.3517010042,105.7065965167,26.3517677914,105.7076590979,26.3515228819,105.7083447902,26.3517933959,105.7088074852,26.3528867178,105.7086625726,26.3540515205,105.7084765254,26.3547029593,105.7087076699,26.3552153831,105.7091672503,26.3557951514,105.7101565755,26.3559956771,105.7104624806,26.3563023004,105.7097452331,26.3570933253,105.7091069064,26.3583632851,105.7092612183,26.3587391368,105.7102131926,26.3590425599,105.7108241837,26.3595188581,105.7110557674,26.3600997508,105.7090510515,26.3616675079,105.7093953916,26.36204241840001,105.7124374497,26.3623012209,105.7129732973,26.3629148341,105.7118012223,26.3639135589,105.7116909799,26.3645303864,105.7127958705,26.3649699823,105.7137491664,26.3654788005,105.7137901162,26.3659579248,105.7123498753,26.366615613,105.7101075073,26.3666267495,105.7098414636,26.3666280684,105.7080562124,26.366808095,105.707149894,26.3677712305,105.7069640266,26.3684569034,105.7060917407,26.3687693469,105.7057883087,26.368873556,105.7057883087,26.368873556,105.7048744787,26.3686041549]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.7048744787,26.3686041549,105.7033803954,26.3666599482,105.7019691982,26.3658451655,105.7014722263,26.3653682715,105.6977961,26.3544643604,105.6955219112,26.3491171909,105.6952528366,26.3486049284,105.6951735614,26.3480575066,105.6962714708,26.3473674174,105.6974472144,26.3469850823,105.6990401247,26.3464637513,105.6997185592,26.3455360167,105.7000184339,26.3448497941,105.7005460929,26.3441282196,105.7009238134,26.3437497556,105.7019464766,26.3431969433,105.7026678307,26.3430906942,105.7033924955,26.3435322315,105.7036611791,26.3439760049,105.7053545143,26.3474941802,105.7052106103,26.3488301651,105.7052882722,26.3491036857,105.7058998139,26.3496827174,105.7064764806,26.3507754861,105.7063286352,26.3514609718,105.7062540881,26.3517010042,105.7065965167,26.3517677914,105.7076590979,26.3515228819,105.7083447902,26.3517933959,105.7088074852,26.3528867178,105.7086625726,26.3540515205,105.7084765254,26.3547029593,105.7087076699,26.3552153831,105.7091672503,26.3557951514,105.7101565755,26.3559956771,105.7104624806,26.3563023004,105.7097452331,26.3570933253,105.7091069064,26.3583632851,105.7092612183,26.3587391368,105.7102131926,26.3590425599,105.7108241837,26.3595188581,105.7110557674,26.3600997508,105.7090510515,26.3616675079,105.7093953916,26.36204241840001,105.7124374497,26.3623012209,105.7129732973,26.3629148341,105.7118012223,26.3639135589,105.7116909799,26.3645303864,105.7127958705,26.3649699823,105.7137491664,26.3654788005,105.7137901162,26.3659579248,105.7123498753,26.366615613,105.7101075073,26.3666267495,105.7098414636,26.3666280684,105.7080562124,26.366808095,105.707149894,26.3677712305,105.7069640266,26.3684569034,105.7060917407,26.3687693469,105.7057883087,26.368873556,105.7057883087,26.368873556,105.7048744787,26.3686041549]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene8.jpg'/></div>"
			});
			
			//设定栋青寨的范围
			dongqingEntity = viewer.entities.add({
				name : '栋青寨实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.6937243236,26.3599279571,105.6919385093,26.3536154271,105.6919385093,26.3536154271,105.6908052275,26.3483653772,105.6904563131,26.3472029695,105.68988022,26.3461786064,105.6894553232,26.3450165616,105.6878055608,26.3423539294,105.687185451,26.3403026261,105.6871846421,26.3401656781,105.6873705856,26.3394800268,105.6875536947,26.3383150571,105.6869026897,26.337462229,105.6857947258,26.3364403951,105.6849531582,26.3354857553,105.6847595506,26.3348703962,105.6927030155,26.3352174033,105.6928182269,26.3354222743,105.6930124896,26.3361403325,105.6932081825,26.3370980492,105.6936345145,26.3384997429,105.6940244932,26.3401755144,105.6939916011,26.3410316224,105.6928577774,26.342064247,105.6927501025,26.3431261437,105.6929443788,26.3438442011,105.6931770648,26.3446305481,105.6934502029,26.3458275539,105.6934540811,26.3464780556,105.6936122054,26.3475044278,105.6939211089,26.3483246419,105.6945757033,26.349759462,105.6978951477,26.3583027972,105.6983187405,26.3592251544,105.698285261,26.35997855,105.69802211,26.3604591624,105.6973400859,26.3608048628,105.6969236791,26.3610807922,105.6962022079,26.3611870145,105.6956705535,26.3612580734,105.6950996654,26.3611238937,105.6946041738,26.3608866326,105.6937243236,26.3599279571]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.6937243236,26.3599279571,105.6919385093,26.3536154271,105.6919385093,26.3536154271,105.6908052275,26.3483653772,105.6904563131,26.3472029695,105.68988022,26.3461786064,105.6894553232,26.3450165616,105.6878055608,26.3423539294,105.687185451,26.3403026261,105.6871846421,26.3401656781,105.6873705856,26.3394800268,105.6875536947,26.3383150571,105.6869026897,26.337462229,105.6857947258,26.3364403951,105.6849531582,26.3354857553,105.6847595506,26.3348703962,105.6927030155,26.3352174033,105.6928182269,26.3354222743,105.6930124896,26.3361403325,105.6932081825,26.3370980492,105.6936345145,26.3384997429,105.6940244932,26.3401755144,105.6939916011,26.3410316224,105.6928577774,26.342064247,105.6927501025,26.3431261437,105.6929443788,26.3438442011,105.6931770648,26.3446305481,105.6934502029,26.3458275539,105.6934540811,26.3464780556,105.6936122054,26.3475044278,105.6939211089,26.3483246419,105.6945757033,26.349759462,105.6978951477,26.3583027972,105.6983187405,26.3592251544,105.698285261,26.35997855,105.69802211,26.3604591624,105.6973400859,26.3608048628,105.6969236791,26.3610807922,105.6962022079,26.3611870145,105.6956705535,26.3612580734,105.6950996654,26.3611238937,105.6946041738,26.3608866326,105.6937243236,26.3599279571]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene9.jpg'/></div>"
			});
			
			
			//设定新华村的范围
			xinhuaEntity = viewer.entities.add({
				name : '新华村实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.7079845302,26.3394324566,105.7076038623,26.3393202103,105.7076031682,26.3392060875,105.7077266327,26.3386804968,105.7082051513,26.3382216277,105.7088867329,26.3378302286,105.7096944088,26.337346901,105.7107299176,26.3368396139,105.711370249156,26.33654067189293,105.7117890172017,26.33630428611315,105.7122328952814,26.33612028276759,105.7125666972696,26.33596538808197,105.7128717384327,26.33587642691694,105.7132139326781,26.33573242177786,105.7138040140877,26.33559345372808,105.7141495005466,26.33541362040549,105.7145313201428,26.33525363322018,105.7149183684246,26.33503105888876,105.7156692287311,26.33474762273281,105.716592411736,26.33463931697947,105.7172366502733,26.33454464684547,105.7178705885312,26.33462581087732,105.7184102881739,26.3347713101384,105.7190774341,26.334903481,105.7200409831,26.3350584203,105.7205246663,26.3354440186,105.721059297,26.3358750093,105.7216460088,26.336533988,105.722181782,26.3371475703,105.7229976216,26.3379879901,105.7239125263,26.33846270120001,105.7243189636,26.3386432494,105.7249528155,26.3387313453,105.7259417344,26.3388861159,105.7265503998,26.3389971575,105.7274379972,26.3391524313,105.7276665509,26.3392425718,105.7279221501,26.3396064769,105.7279244349,26.3399716685,105.7278000614,26.3403375033,105.7271209562,26.3411170072,105.7266692599,26.3418040542,105.7264432672,26.3421247528,105.7258122439,26.3424931534,105.7253334945,26.342906431,105.7249812612,26.3432962417,105.7247568253,26.3438680069,105.7242037741,26.3445555589,105.7236239638,26.345014992,105.7233990922,26.3455182817,105.7229715552,26.3460225937,105.7223145996,26.3462998093,105.7217084487,26.3465995912,105.7214817252,26.3468061598,105.7209504371,26.34692296,105.7203171084,26.3469261453,105.7195827294,26.3469754857,105.7188984518,26.3469332702,105.7185419545,26.3466383307,105.7186135823,26.3459303902,105.718688735,26.345793062,105.718839604,26.3456097036,105.7186863375,26.3454050455,105.7183813568,26.3452467984,105.7181269016,26.3450654722,105.7178969347,26.3447470716,105.7178430297,26.3442223618,105.7174852764,26.3437219988,105.716774139,26.3434288299,105.7163935906,26.343339432,105.7160642695,26.343341078,105.7153802949,26.3433444942,105.7151776357,26.3433455058,105.7146956189,26.3432337846,105.7142129024,26.343007939,105.7135037371,26.3430342971,105.7131509033,26.3433327814,105.7128243793,26.3437909107,105.712319546,26.3440901491,105.7118135928,26.3442067895,105.71090134,26.3441656678,105.7107738402,26.3440293488,105.7106702788,26.3436646587,105.7105664393,26.3432543194,105.7105153563,26.343186097,105.7104869571,26.3426840825,105.710863594,26.3421344088,105.711038408,26.3417226872,105.7111347137,26.3409005006,105.7110553701,26.3403530884,105.7107483212,26.3398524561,105.7095055385,26.3396075365,105.708922355,26.3395191215,105.708922355,26.3395191215,105.7079845302,26.3394324566]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.7079845302,26.3394324566,105.7076038623,26.3393202103,105.7076031682,26.3392060875,105.7077266327,26.3386804968,105.7082051513,26.3382216277,105.7088867329,26.3378302286,105.7096944088,26.337346901,105.7107299176,26.3368396139,105.711370249156,26.33654067189293,105.7117890172017,26.33630428611315,105.7122328952814,26.33612028276759,105.7125666972696,26.33596538808197,105.7128717384327,26.33587642691694,105.7132139326781,26.33573242177786,105.7138040140877,26.33559345372808,105.7141495005466,26.33541362040549,105.7145313201428,26.33525363322018,105.7149183684246,26.33503105888876,105.7156692287311,26.33474762273281,105.716592411736,26.33463931697947,105.7172366502733,26.33454464684547,105.7178705885312,26.33462581087732,105.7184102881739,26.3347713101384,105.7190774341,26.334903481,105.7200409831,26.3350584203,105.7205246663,26.3354440186,105.721059297,26.3358750093,105.7216460088,26.336533988,105.722181782,26.3371475703,105.7229976216,26.3379879901,105.7239125263,26.33846270120001,105.7243189636,26.3386432494,105.7249528155,26.3387313453,105.7259417344,26.3388861159,105.7265503998,26.3389971575,105.7274379972,26.3391524313,105.7276665509,26.3392425718,105.7279221501,26.3396064769,105.7279244349,26.3399716685,105.7278000614,26.3403375033,105.7271209562,26.3411170072,105.7266692599,26.3418040542,105.7264432672,26.3421247528,105.7258122439,26.3424931534,105.7253334945,26.342906431,105.7249812612,26.3432962417,105.7247568253,26.3438680069,105.7242037741,26.3445555589,105.7236239638,26.345014992,105.7233990922,26.3455182817,105.7229715552,26.3460225937,105.7223145996,26.3462998093,105.7217084487,26.3465995912,105.7214817252,26.3468061598,105.7209504371,26.34692296,105.7203171084,26.3469261453,105.7195827294,26.3469754857,105.7188984518,26.3469332702,105.7185419545,26.3466383307,105.7186135823,26.3459303902,105.718688735,26.345793062,105.718839604,26.3456097036,105.7186863375,26.3454050455,105.7183813568,26.3452467984,105.7181269016,26.3450654722,105.7178969347,26.3447470716,105.7178430297,26.3442223618,105.7174852764,26.3437219988,105.716774139,26.3434288299,105.7163935906,26.343339432,105.7160642695,26.343341078,105.7153802949,26.3433444942,105.7151776357,26.3433455058,105.7146956189,26.3432337846,105.7142129024,26.343007939,105.7135037371,26.3430342971,105.7131509033,26.3433327814,105.7128243793,26.3437909107,105.712319546,26.3440901491,105.7118135928,26.3442067895,105.71090134,26.3441656678,105.7107738402,26.3440293488,105.7106702788,26.3436646587,105.7105664393,26.3432543194,105.7105153563,26.343186097,105.7104869571,26.3426840825,105.710863594,26.3421344088,105.711038408,26.3417226872,105.7111347137,26.3409005006,105.7110553701,26.3403530884,105.7107483212,26.3398524561,105.7095055385,26.3396075365,105.708922355,26.3395191215,105.708922355,26.3395191215,105.7079845302,26.3394324566]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene10.jpg'/></div>"
			});
			
			//设定木乃村的范围
			munaiEntity = viewer.entities.add({
				name : '木乃村实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.7410031457,26.3411029603,105.7394736648,26.3396044004,105.7394227118,26.339559013,105.7393703084,26.3392853814,105.7394441267,26.3389426231,105.7397968783,26.3386440755,105.740150354,26.3384596491,105.7406316467,26.3384571626,105.741010597,26.3382954276,105.7411106132,26.33808948400001,105.7410320034,26.3376790376,105.7405713965,26.3369510132,105.7405952747,26.3367226381,105.7407193135,26.3363111441,105.7411499358,26.3363089179,105.7416053068,26.3362152617,105.7417289051,26.3357352937,105.7416507313,26.3353933207,105.7412154365194,26.33523092994126,105.7407724512546,26.33481772418548,105.7405974726507,26.3345102351435,105.7412859999395,26.33445763882824,105.741976328805,26.33438819769916,105.7425833846236,26.33440954722254,105.7488977037993,26.33417882538166,105.7494503657075,26.33418482186663,105.7495655928668,26.33469561757657,105.7496065357994,26.33504745565755,105.7496755482927,26.33546940307308,105.7497628291296,26.3361379350091,105.7498874588137,26.33793865764255,105.7499208113676,26.33849973690939,105.7498454056387,26.33870554881628,105.7497494807438,26.33873756872593,105.7495258244,26.3388674254,105.7493493878,26.3390052988,105.7488199286,26.3393960935,105.7484165356,26.3396949275,105.7481901674,26.3399471859,105.747889711,26.3404965574,105.7478406617,26.3407478899,105.7477148836,26.340885497,105.7475628935,26.3408862899,105.7464682127,26.3400474662,105.7461883951,26.3398663223,105.7460617378,26.3398669817,105.7456057714,26.3398693547,105.7451246196,26.3398946824,105.7446440519,26.34001130600001,105.7433051274,26.3405888855,105.7424450168,26.3407759454,105.742116724,26.3409374219,105.7415352582,26.3411230331,105.7412315678,26.3411702545,105.7410031457,26.3411029603]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.7410031457,26.3411029603,105.7394736648,26.3396044004,105.7394227118,26.339559013,105.7393703084,26.3392853814,105.7394441267,26.3389426231,105.7397968783,26.3386440755,105.740150354,26.3384596491,105.7406316467,26.3384571626,105.741010597,26.3382954276,105.7411106132,26.33808948400001,105.7410320034,26.3376790376,105.7405713965,26.3369510132,105.7405952747,26.3367226381,105.7407193135,26.3363111441,105.7411499358,26.3363089179,105.7416053068,26.3362152617,105.7417289051,26.3357352937,105.7416507313,26.3353933207,105.7412154365194,26.33523092994126,105.7407724512546,26.33481772418548,105.7405974726507,26.3345102351435,105.7412859999395,26.33445763882824,105.741976328805,26.33438819769916,105.7425833846236,26.33440954722254,105.7488977037993,26.33417882538166,105.7494503657075,26.33418482186663,105.7495655928668,26.33469561757657,105.7496065357994,26.33504745565755,105.7496755482927,26.33546940307308,105.7497628291296,26.3361379350091,105.7498874588137,26.33793865764255,105.7499208113676,26.33849973690939,105.7498454056387,26.33870554881628,105.7497494807438,26.33873756872593,105.7495258244,26.3388674254,105.7493493878,26.3390052988,105.7488199286,26.3393960935,105.7484165356,26.3396949275,105.7481901674,26.3399471859,105.747889711,26.3404965574,105.7478406617,26.3407478899,105.7477148836,26.340885497,105.7475628935,26.3408862899,105.7464682127,26.3400474662,105.7461883951,26.3398663223,105.7460617378,26.3398669817,105.7456057714,26.3398693547,105.7451246196,26.3398946824,105.7446440519,26.34001130600001,105.7433051274,26.3405888855,105.7424450168,26.3407759454,105.742116724,26.3409374219,105.7415352582,26.3411230331,105.7412315678,26.3411702545,105.7410031457,26.3411029603]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene11.jpg'/></div>"
			});
			
			
			//设定陇嘎村的范围
			longgaEntity = viewer.entities.add({
				name : '陇嘎村实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.7490289074,26.3716055875,105.7482974077,26.3716094121,105.7480516889,26.371317833,105.7449655245,26.3653668346,105.743979932,26.3637612093,105.7435627975,26.3620794106,105.7445350032,26.3615984568,105.7455851839,26.3606045796,105.7459471407,26.360016968,105.7459844867,26.3595042623,105.7460638765,26.3592109853,105.7460598826,26.3585886711,105.7454853678,26.3577130715,105.7450752736,26.3571294779,105.7449493845,26.3565077974,105.7450259602,26.3557752399,105.7452246689,26.3550786549,105.7453848546,26.3547117418,105.7455823859,26.3538321226,105.7461099061,26.3537195523,105.7468800451,26.3534226754,105.7471203122,26.3528723031,105.7468720508,26.3521780461,105.7457702886,26.3514516261,105.7449116262,26.3506141096,105.7444186578,26.349774688,105.7443759178,26.3494454381,105.7442054287,26.3482016516,105.7457825155,26.3470219953,105.7460258277,26.3469475126,105.7478511299,26.3464620933,105.7483797921,26.3465325491,105.7494784561,26.3467830624,105.7498448357,26.3468909694,105.7498534592705,26.3472567830221,105.7498738885678,26.34812759716258,105.7500643747642,26.3694446170513,105.7500387967717,26.37071608476214,105.7497304846662,26.37116634944063,105.7490289074,26.3716055875]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.7490289074,26.3716055875,105.7482974077,26.3716094121,105.7480516889,26.371317833,105.7449655245,26.3653668346,105.743979932,26.3637612093,105.7435627975,26.3620794106,105.7445350032,26.3615984568,105.7455851839,26.3606045796,105.7459471407,26.360016968,105.7459844867,26.3595042623,105.7460638765,26.3592109853,105.7460598826,26.3585886711,105.7454853678,26.3577130715,105.7450752736,26.3571294779,105.7449493845,26.3565077974,105.7450259602,26.3557752399,105.7452246689,26.3550786549,105.7453848546,26.3547117418,105.7455823859,26.3538321226,105.7461099061,26.3537195523,105.7468800451,26.3534226754,105.7471203122,26.3528723031,105.7468720508,26.3521780461,105.7457702886,26.3514516261,105.7449116262,26.3506141096,105.7444186578,26.349774688,105.7443759178,26.3494454381,105.7442054287,26.3482016516,105.7457825155,26.3470219953,105.7460258277,26.3469475126,105.7478511299,26.3464620933,105.7483797921,26.3465325491,105.7494784561,26.3467830624,105.7498448357,26.3468909694,105.7498534592705,26.3472567830221,105.7498738885678,26.34812759716258,105.7500643747642,26.3694446170513,105.7500387967717,26.37071608476214,105.7497304846662,26.37116634944063,105.7490289074,26.3716055875]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene12.jpg'/></div>"
			});
			
			//设定地坝村的范围
			dibaEntity = viewer.entities.add({
				name : '地坝村实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.7171055343,26.348486282,105.7173883713,26.3482286092,105.717997836,26.3482255563,105.7188106817,26.3482580888,105.7199097575,26.3485820438,105.7201948551,26.3486904354,105.720560762,26.3487252038,105.7213720222,26.3485014728,105.7218169189,26.3481697591,105.7223019892,26.3477646252,105.7226642543,26.3472136768,105.7229881612,26.3470290021,105.7238779316,26.3463655636,105.7247295706,26.3461050018,105.7258254431,26.3459164142,105.7264374095,26.3463160022,105.7265618156,26.3467180605,105.7278768786,26.3490909119,105.7289814929,26.3502933624,105.7299649234,26.3516062455,105.7309038323,26.3522970115,105.7316776883,26.35258592570001,105.7323730499,26.3533145334,105.7331926273,26.3544085822,105.7369267743,26.3601551814,105.737419503,26.360958021,105.7380782676,26.36230912270001,105.7382038947,26.3628942027,105.7382573195,26.3649073649,105.7382635982,26.3658957472,105.737661247,26.3670336975,105.7374192811,26.3673278072,105.7370159245,26.367805787,105.736366186,26.3678823454,105.7352274043,26.3677417648,105.7338436435,26.3674193908,105.7324171762,26.3667677501,105.7318013922,26.3657824827,105.7319595595,26.3650861228,105.7325261665,26.3647171459,105.7329311475,26.36449542600001,105.733170579,26.3637986489,105.7332084441,26.3633591592,105.7328371794,26.3624824676,105.7321020453,26.3619004993,105.7314059415,26.3610620716,105.7301023913,26.3605562102,105.7292485931,26.3604873437,105.7283950252,26.360455079,105.7279480384,26.3604573514,105.7272563245,26.3603144331,105.727011369,26.3601326365,105.7266034167,26.3598784503,105.7252544687,26.3586040054,105.7260173804,26.3571358186,105.7263002176,26.3568781284,105.7271902715,26.3562512759,105.7274320123,26.3559205761,105.7277935898,26.3552597946,105.7279115938,26.3546368581,105.7279887345,26.3539775211,105.7277828204,26.3535392706,105.7270881723,26.3529204607,105.7264339352,26.3522648344,105.725822394,26.3519384613,105.7242758618,26.3515435992,105.7239925768,26.3517280715,105.7239551353,26.3522407739,105.7237124805,26.3524250404,105.7228968741,26.351953253,105.7225277721,26.3514059936,105.7222796598,26.3507116907,105.7221150868,26.3503830474,105.7217863979,26.3497989739,105.7209730871,26.3496932446,105.7196349668,26.3501392695,105.7184584586,26.3504380391,105.7176056435,26.3505155294,105.7171593712,26.3506275884,105.7171593712,26.3506275884,105.7171055343,26.348486282]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.7171055343,26.348486282,105.7173883713,26.3482286092,105.717997836,26.3482255563,105.7188106817,26.3482580888,105.7199097575,26.3485820438,105.7201948551,26.3486904354,105.720560762,26.3487252038,105.7213720222,26.3485014728,105.7218169189,26.3481697591,105.7223019892,26.3477646252,105.7226642543,26.3472136768,105.7229881612,26.3470290021,105.7238779316,26.3463655636,105.7247295706,26.3461050018,105.7258254431,26.3459164142,105.7264374095,26.3463160022,105.7265618156,26.3467180605,105.7278768786,26.3490909119,105.7289814929,26.3502933624,105.7299649234,26.3516062455,105.7309038323,26.3522970115,105.7316776883,26.35258592570001,105.7323730499,26.3533145334,105.7331926273,26.3544085822,105.7369267743,26.3601551814,105.737419503,26.360958021,105.7380782676,26.36230912270001,105.7382038947,26.3628942027,105.7382573195,26.3649073649,105.7382635982,26.3658957472,105.737661247,26.3670336975,105.7374192811,26.3673278072,105.7370159245,26.367805787,105.736366186,26.3678823454,105.7352274043,26.3677417648,105.7338436435,26.3674193908,105.7324171762,26.3667677501,105.7318013922,26.3657824827,105.7319595595,26.3650861228,105.7325261665,26.3647171459,105.7329311475,26.36449542600001,105.733170579,26.3637986489,105.7332084441,26.3633591592,105.7328371794,26.3624824676,105.7321020453,26.3619004993,105.7314059415,26.3610620716,105.7301023913,26.3605562102,105.7292485931,26.3604873437,105.7283950252,26.360455079,105.7279480384,26.3604573514,105.7272563245,26.3603144331,105.727011369,26.3601326365,105.7266034167,26.3598784503,105.7252544687,26.3586040054,105.7260173804,26.3571358186,105.7263002176,26.3568781284,105.7271902715,26.3562512759,105.7274320123,26.3559205761,105.7277935898,26.3552597946,105.7279115938,26.3546368581,105.7279887345,26.3539775211,105.7277828204,26.3535392706,105.7270881723,26.3529204607,105.7264339352,26.3522648344,105.725822394,26.3519384613,105.7242758618,26.3515435992,105.7239925768,26.3517280715,105.7239551353,26.3522407739,105.7237124805,26.3524250404,105.7228968741,26.351953253,105.7225277721,26.3514059936,105.7222796598,26.3507116907,105.7221150868,26.3503830474,105.7217863979,26.3497989739,105.7209730871,26.3496932446,105.7196349668,26.3501392695,105.7184584586,26.3504380391,105.7176056435,26.3505155294,105.7171593712,26.3506275884,105.7171593712,26.3506275884,105.7171055343,26.348486282]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene13.jpg'/></div>"
			});
			
			
			//设定三岔村的范围
			sanchaEntity = viewer.entities.add({
				name : '三岔村实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.7308890823,26.3757994186,105.7267827862,26.3755640664,105.7267827862,26.3755640664,105.7248706283,26.3752442884,105.724380433,26.3748440817,105.7201677105,26.3705455889,105.7187971931,26.3657934309,105.7187956082,26.3655371825,105.7190730459,26.3644009403,105.7199205193,26.3634448735,105.7206882958,26.3627454592,105.7212962459,26.3624861424,105.7213770634,26.3624125192,105.7224320041,26.3621509456,105.7230826324,26.3622208785,105.7236138608,26.3626941,105.7237800521,26.3632789888,105.7238250199,26.3639743141,105.7245996225,26.3643730855,105.7263453928,26.3641079861,105.7267099764,26.3639230965,105.7275603614,26.3634428749,105.7279217312,26.3627454864,105.7280385947,26.361939516,105.7288072296,26.3613864867,105.7291729489,26.3613846252,105.730110094,26.3617825393,105.7306845155,26.3626582021,105.7308091853,26.363096862,105.7305307152,26.3640500906,105.7300860144,26.36441843820001,105.7290310719,26.3646800682,105.7283425433,26.3650496515,105.7287114876,26.3655602866,105.7292820128,26.3658136384,105.7294073703,26.3663621199,105.7300180783,26.366542048,105.7305463628,26.366539354,105.7309571103,26.3672328097,105.7315708211,26.3678886194,105.7318178751,26.3683998686,105.7317795425,26.3687661442,105.7312521695,26.36891527,105.7302800036,26.3689168184,105.7302800036,26.3689168184,105.7302410483,26.3696891972,105.7305686871,26.3700902136,105.7313008713,26.3701963001,105.7326015352,26.3702262596,105.7332124992,26.37044278020001,105.7336620665,26.3708431649,105.7338694221,26.3715010453,105.7343624115,26.3723405004,105.7358718605,26.373247949,105.7358365538,26.3740901126,105.7353100893,26.3743856807,105.7348256514,26.3749006786,105.7343398208,26.3751960346,105.7336489363,26.3751995764,105.7333644545,26.3752010339,105.7325128554,26.3754982568,105.7320683488,26.3759032175,105.7308890823,26.3757994186]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.7308890823,26.3757994186,105.7267827862,26.3755640664,105.7267827862,26.3755640664,105.7248706283,26.3752442884,105.724380433,26.3748440817,105.7201677105,26.3705455889,105.7187971931,26.3657934309,105.7187956082,26.3655371825,105.7190730459,26.3644009403,105.7199205193,26.3634448735,105.7206882958,26.3627454592,105.7212962459,26.3624861424,105.7213770634,26.3624125192,105.7224320041,26.3621509456,105.7230826324,26.3622208785,105.7236138608,26.3626941,105.7237800521,26.3632789888,105.7238250199,26.3639743141,105.7245996225,26.3643730855,105.7263453928,26.3641079861,105.7267099764,26.3639230965,105.7275603614,26.3634428749,105.7279217312,26.3627454864,105.7280385947,26.361939516,105.7288072296,26.3613864867,105.7291729489,26.3613846252,105.730110094,26.3617825393,105.7306845155,26.3626582021,105.7308091853,26.363096862,105.7305307152,26.3640500906,105.7300860144,26.36441843820001,105.7290310719,26.3646800682,105.7283425433,26.3650496515,105.7287114876,26.3655602866,105.7292820128,26.3658136384,105.7294073703,26.3663621199,105.7300180783,26.366542048,105.7305463628,26.366539354,105.7309571103,26.3672328097,105.7315708211,26.3678886194,105.7318178751,26.3683998686,105.7317795425,26.3687661442,105.7312521695,26.36891527,105.7302800036,26.3689168184,105.7302800036,26.3689168184,105.7302410483,26.3696891972,105.7305686871,26.3700902136,105.7313008713,26.3701963001,105.7326015352,26.3702262596,105.7332124992,26.37044278020001,105.7336620665,26.3708431649,105.7338694221,26.3715010453,105.7343624115,26.3723405004,105.7358718605,26.373247949,105.7358365538,26.3740901126,105.7353100893,26.3743856807,105.7348256514,26.3749006786,105.7343398208,26.3751960346,105.7336489363,26.3751995764,105.7333644545,26.3752010339,105.7325128554,26.3754982568,105.7320683488,26.3759032175,105.7308890823,26.3757994186]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene14.jpg'/></div>"
			});
			
			
			//设定对门上寨的范围
			duimenEntity = viewer.entities.add({
				name : '对门上寨实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.7272123507,26.4052142674,105.7266012125,26.4049977258,105.726479031,26.4049617385,105.7263143653,26.4046331042,105.7267477642,26.4024344344,105.7270727337,26.4023961755,105.7273983914,26.4024677358,105.7277229016,26.4023562621,105.7278418658,26.4018797554,105.7278797598,26.4014402688,105.7282012801,26.4008529076,105.729169732,26.3997131329,105.7294917014,26.3991989823,105.729649923,26.3985026269,105.7296462404,26.3979169204,105.7293173735,26.3973328717,105.7290709555,26.3969314412,105.7281282447,26.3956915745,105.7277162612,26.3948150818,105.7274687071,26.3942306148,105.727017463,26.3935739664,105.726771978,26.3933189583,105.7251810399,26.3924118321,105.7246103912,26.3921584674,105.7234686446,26.3915785176,105.7221618207,26.3905967045,105.721096845,26.3892841896,105.7199862545,26.3871665211,105.7199029225,26.3868374688,105.7199394813,26.3861783421,105.7202646351,26.3861767063,105.7208338815,26.3862104486,105.7219321862,26.3863513449,105.7226240501,26.38649428540001,105.722746211,26.3865302765,105.7231901065,26.3860155235,105.7233508586,26.3857218478,105.7238358487,26.385280101,105.7253421875,26.3856751627,105.7257506868,26.3860025632,105.7263630966,26.3864387516,105.7268145375,26.3871320101,105.7272232754,26.3874960129,105.7278347806,26.3877857677,105.7281617751,26.3880769676,105.7286541079,26.3888066196,105.7293152376,26.3905238222,105.7295212265,26.3909620668,105.7296452348,26.3912909054,105.7300528452,26.391471866,105.7307045637,26.3916881871,105.7313211735,26.392783273,105.7325211746,26.3961450562,105.7326853827,26.3964004703,105.7330530617,26.3966914498,105.7335835655,26.3970182014,105.7335861109,26.3974208743,105.7318996716,26.4007242134,105.7318188349,26.4007978425,105.7312899333,26.4007273311,105.7312084041,26.40069114,105.7309217843,26.4003631342,105.730596822,26.40040140170001,105.7302330533,26.400732729,105.7299103923,26.4011370613,105.7296283787,26.4015411857,105.7291846847,26.4020925648,105.7297528598,26.4019432367,105.7309718883,26.4018637983,105.7312564357,26.4018623442,105.731500795,26.4019343107,105.7319906692,26.4022612754,105.7323581344,26.4025156495,105.7324408206,26.402734873,105.7328108316,26.4033919184,105.7334245177,26.4040111061,105.7333852557,26.404230954,105.733264924,26.4044878253,105.732901613,26.4048923725,105.7323756963,26.4052977513,105.7272123507,26.4052142674]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.7272123507,26.4052142674,105.7266012125,26.4049977258,105.726479031,26.4049617385,105.7263143653,26.4046331042,105.7267477642,26.4024344344,105.7270727337,26.4023961755,105.7273983914,26.4024677358,105.7277229016,26.4023562621,105.7278418658,26.4018797554,105.7278797598,26.4014402688,105.7282012801,26.4008529076,105.729169732,26.3997131329,105.7294917014,26.3991989823,105.729649923,26.3985026269,105.7296462404,26.3979169204,105.7293173735,26.3973328717,105.7290709555,26.3969314412,105.7281282447,26.3956915745,105.7277162612,26.3948150818,105.7274687071,26.3942306148,105.727017463,26.3935739664,105.726771978,26.3933189583,105.7251810399,26.3924118321,105.7246103912,26.3921584674,105.7234686446,26.3915785176,105.7221618207,26.3905967045,105.721096845,26.3892841896,105.7199862545,26.3871665211,105.7199029225,26.3868374688,105.7199394813,26.3861783421,105.7202646351,26.3861767063,105.7208338815,26.3862104486,105.7219321862,26.3863513449,105.7226240501,26.38649428540001,105.722746211,26.3865302765,105.7231901065,26.3860155235,105.7233508586,26.3857218478,105.7238358487,26.385280101,105.7253421875,26.3856751627,105.7257506868,26.3860025632,105.7263630966,26.3864387516,105.7268145375,26.3871320101,105.7272232754,26.3874960129,105.7278347806,26.3877857677,105.7281617751,26.3880769676,105.7286541079,26.3888066196,105.7293152376,26.3905238222,105.7295212265,26.3909620668,105.7296452348,26.3912909054,105.7300528452,26.391471866,105.7307045637,26.3916881871,105.7313211735,26.392783273,105.7325211746,26.3961450562,105.7326853827,26.3964004703,105.7330530617,26.3966914498,105.7335835655,26.3970182014,105.7335861109,26.3974208743,105.7318996716,26.4007242134,105.7318188349,26.4007978425,105.7312899333,26.4007273311,105.7312084041,26.40069114,105.7309217843,26.4003631342,105.730596822,26.40040140170001,105.7302330533,26.400732729,105.7299103923,26.4011370613,105.7296283787,26.4015411857,105.7291846847,26.4020925648,105.7297528598,26.4019432367,105.7309718883,26.4018637983,105.7312564357,26.4018623442,105.731500795,26.4019343107,105.7319906692,26.4022612754,105.7323581344,26.4025156495,105.7324408206,26.402734873,105.7328108316,26.4033919184,105.7334245177,26.4040111061,105.7333852557,26.404230954,105.733264924,26.4044878253,105.732901613,26.4048923725,105.7323756963,26.4052977513,105.7272123507,26.4052142674]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene15.jpg'/></div>"
			});
			
			
			//设定和平村的范围
			hepingEntity = viewer.entities.add({
				name : '和平村实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.7160701712027,26.40458425050706,105.7154177212,26.404321931,105.7152510565,26.4036638227,105.7151659197,26.4030419145,105.7154870578,26.4023813671,105.7156065241,26.401978083,105.715604718,26.401685229,105.7156002027,26.4009530939,105.7150607065,26.3991620046,105.7151323039,26.3975875071,105.7147228903,26.3971136499,105.7137843814,26.3965326079,105.7131721882,26.3961329732,105.7114182749,26.3951532896,105.7088534604,26.3945070744,105.7083634593,26.3941434213,105.7077517434,26.3938169763,105.7073428193,26.3934163106,105.7070976001,26.3931978746,105.7055329967,26.3899108787,105.7052826734,26.3888504807,105.7057199808,26.3872375733,105.7060737624,26.38525899640001,105.7063138411,26.3846354758,105.7067540161,26.3834984547,105.7071973037,26.3828739292,105.7082479986,26.3818803182,105.7090601846,26.3817664735,105.709752678,26.3820192978,105.7106075221,26.3822347049,105.7117895326,26.3827779523,105.7137965712,26.3852939088,105.7146552767,26.3861316072,105.7159624391,26.3871867054,105.7174331099,26.3883874033,105.7190280147,26.3899535406,105.7197673517,26.3911944934,105.7211214042,26.3932377195,105.7226088431,26.3971106516,105.7246031514,26.4040194486,105.7248920502,26.4047135337,105.724303674574,26.40475752674745,105.7233777481468,26.40457625030253,105.7160701712027,26.40458425050706]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.7160701712027,26.40458425050706,105.7154177212,26.404321931,105.7152510565,26.4036638227,105.7151659197,26.4030419145,105.7154870578,26.4023813671,105.7156065241,26.401978083,105.715604718,26.401685229,105.7156002027,26.4009530939,105.7150607065,26.3991620046,105.7151323039,26.3975875071,105.7147228903,26.3971136499,105.7137843814,26.3965326079,105.7131721882,26.3961329732,105.7114182749,26.3951532896,105.7088534604,26.3945070744,105.7083634593,26.3941434213,105.7077517434,26.3938169763,105.7073428193,26.3934163106,105.7070976001,26.3931978746,105.7055329967,26.3899108787,105.7052826734,26.3888504807,105.7057199808,26.3872375733,105.7060737624,26.38525899640001,105.7063138411,26.3846354758,105.7067540161,26.3834984547,105.7071973037,26.3828739292,105.7082479986,26.3818803182,105.7090601846,26.3817664735,105.709752678,26.3820192978,105.7106075221,26.3822347049,105.7117895326,26.3827779523,105.7137965712,26.3852939088,105.7146552767,26.3861316072,105.7159624391,26.3871867054,105.7174331099,26.3883874033,105.7190280147,26.3899535406,105.7197673517,26.3911944934,105.7211214042,26.3932377195,105.7226088431,26.3971106516,105.7246031514,26.4040194486,105.7248920502,26.4047135337,105.724303674574,26.40475752674745,105.7233777481468,26.40457625030253,105.7160701712027,26.40458425050706]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene16.jpg'/></div>"
			});
			
			
			//设定小河村的范围
			xiaoheEntity = viewer.entities.add({
				name : '小河村实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.7367048577832,26.40470614403189,105.7362442787342,26.40472914730961,105.7359422558327,26.40471565790335,105.7353185005944,26.4046940842211,105.7350951249,26.4046248641,105.7353766623,26.4041475162,105.7354972211,26.4039272499,105.7357390337,26.4035965366,105.7357371766,26.403303684,105.7356935089,26.4028280075,105.7352024624,26.4023180228,105.7348340645,26.4019172298,105.7345467363,26.4014794118,105.7345021475,26.4008573083,105.7347002946,26.4000509195,105.7349002937,26.3995373833,105.7351801967,26.3988037895,105.7349744038,26.39840216090001,105.7349307417,26.3979264838,105.7353764802,26.3977045469,105.735987595,26.3979210517,105.7361950161,26.398578925,105.7362795646,26.399090999,105.7373132246,26.4018312597,105.738751109,26.4042033469,105.7392818965,26.4045666826,105.7390303812669,26.40470771984585,105.7385413033511,26.40471170971876,105.7378285295103,26.40470518467328,105.7371062804035,26.40469144532913,105.7367048577832,26.40470614403189]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.7367048577832,26.40470614403189,105.7362442787342,26.40472914730961,105.7359422558327,26.40471565790335,105.7353185005944,26.4046940842211,105.7350951249,26.4046248641,105.7353766623,26.4041475162,105.7354972211,26.4039272499,105.7357390337,26.4035965366,105.7357371766,26.403303684,105.7356935089,26.4028280075,105.7352024624,26.4023180228,105.7348340645,26.4019172298,105.7345467363,26.4014794118,105.7345021475,26.4008573083,105.7347002946,26.4000509195,105.7349002937,26.3995373833,105.7351801967,26.3988037895,105.7349744038,26.39840216090001,105.7349307417,26.3979264838,105.7353764802,26.3977045469,105.735987595,26.3979210517,105.7361950161,26.398578925,105.7362795646,26.399090999,105.7373132246,26.4018312597,105.738751109,26.4042033469,105.7392818965,26.4045666826,105.7390303812669,26.40470771984585,105.7385413033511,26.40471170971876,105.7378285295103,26.40470518467328,105.7371062804035,26.40469144532913,105.7367048577832,26.40470614403189]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene17.jpg'/></div>"
			});
			
			
			//设定磨雄村的范围
			moxiongEntity = viewer.entities.add({
				name : '磨雄村实景',
				polygon : {
					hierarchy : Cesium.Cartesian3.fromDegreesArray([105.6749966419,26.34837652870001,105.6726772499228,26.34708345300562,105.6726391105669,26.34642720264424,105.6725664667725,26.34511662096762,105.6725763937948,26.34410987898574,105.672563830505,26.34345098186743,105.6726144709829,26.3429549891981,105.6726045432997,26.34249053946487,105.6726711921253,26.34223424859343,105.6726814205922,26.34190783349829,105.6731498034291,26.34223033239019,105.6737081183,26.3424251794,105.6744686864,26.3425243158,105.6750008662,26.342556048,105.6753054518,26.342657327,105.6758760289,26.34275735110001,105.6761430149,26.3429272817,105.67678999,26.3430954176,105.6771721705,26.3434702301,105.6774399575,26.3437771064,105.6776329444,26.3442897639,105.6776349388,26.3446321345,105.6776361355,26.3448375568,105.6776387284,26.3452826385,105.677679321,26.3457275404,105.6776457094,26.3464809351,105.6776461084,26.3465494092,105.6776093052,26.3467550112,105.6772340894,26.3475784968,105.676932279,26.3479565409,105.6766674713,26.3481632196,105.6764780663,26.348266828,105.6759478498,26.3485774722,105.6749966419,26.34837652870001]),
					material : Cesium.Color.YELLOW.withAlpha(0.3),
					clampToGround:true,   									//实现贴地
					classificationType : Cesium.ClassificationType.BOTH		//实现选中3dtile
				},
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.6749966419,26.34837652870001,105.6726772499228,26.34708345300562,105.6726391105669,26.34642720264424,105.6725664667725,26.34511662096762,105.6725763937948,26.34410987898574,105.672563830505,26.34345098186743,105.6726144709829,26.3429549891981,105.6726045432997,26.34249053946487,105.6726711921253,26.34223424859343,105.6726814205922,26.34190783349829,105.6731498034291,26.34223033239019,105.6737081183,26.3424251794,105.6744686864,26.3425243158,105.6750008662,26.342556048,105.6753054518,26.342657327,105.6758760289,26.34275735110001,105.6761430149,26.3429272817,105.67678999,26.3430954176,105.6771721705,26.3434702301,105.6774399575,26.3437771064,105.6776329444,26.3442897639,105.6776349388,26.3446321345,105.6776361355,26.3448375568,105.6776387284,26.3452826385,105.677679321,26.3457275404,105.6776457094,26.3464809351,105.6776461084,26.3465494092,105.6776093052,26.3467550112,105.6772340894,26.3475784968,105.676932279,26.3479565409,105.6766674713,26.3481632196,105.6764780663,26.348266828,105.6759478498,26.3485774722,105.6749966419,26.34837652870001]),
					width : 5,
					material : Cesium.Color.RED,
					clampToGround : true
				},
				description:"<div style='width:420px;height:180px;padding:20px;'><img style='width:100%;height:100%;' src='img/scene/scene18.jpg'/></div>"
			});
			
			countrySwitch = true;
		}
		
		
		
		function contrysideRemove(){
			viewer.entities.remove(dashuEntity); 				//实体的移除不是用Primitives
			viewer.entities.remove(shangyangEntity);
			viewer.entities.remove(maduEntity);
			viewer.entities.remove(longjingEntity);
			viewer.entities.remove(maruoEntity);
			viewer.entities.remove(shuangxiEntity);
			viewer.entities.remove(maduxiaEntity);
			viewer.entities.remove(changtianEntity);
			viewer.entities.remove(dongqingEntity);
			viewer.entities.remove(xinhuaEntity);
			viewer.entities.remove(munaiEntity);
			viewer.entities.remove(longgaEntity);
			viewer.entities.remove(dibaEntity);
			viewer.entities.remove(sanchaEntity);
			viewer.entities.remove(duimenEntity);
			viewer.entities.remove(hepingEntity);
			viewer.entities.remove(xiaoheEntity);
			viewer.entities.remove(moxiongEntity);
			//viewer.entities.removeAll();
			
			//关闭开关
			countrySwitch = false;
		}
		
		//存路名entity的数组
		var roads = new Array();
		function roadLoad(){
			roads[0] = viewer.entities.add({
				name : '安普公路',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.7482562453,26.3396095228,105.7476475,26.34129400000001,105.7460746,26.3449853,105.7454755,26.3461705,105.7450612,26.3471238,105.744827,26.3480331,105.7447031,26.3490936,105.7444749,26.3503099,105.7438042,26.3519804,105.743304,26.3530806,105.7426849,26.3541081,105.7390283,26.3580022,105.7370691,26.3597684,105.7361109,26.360792,105.7355063,26.3615417,105.7348277,26.3624381,105.7342784,26.3635329,105.7338973,26.3647282,105.733707,26.3655303,105.7336177,26.3662809,105.7335841,26.3676262,105.7337404,26.3686364,105.7340986,26.3699304,105.7346013,26.3709912,105.7352501,26.3719835,105.7359516,26.3728114,105.7369988,26.3736199,105.7382277,26.3742865,105.7398606,26.3753939,105.7408964,26.3761383,105.7419134,26.3771314,105.7426449,26.3781348,105.743059,26.3788871,105.7436603,26.380859,105.7444736,26.3833382,105.7452308,26.3855859,105.7460007,26.3879897,105.7462732,26.3892406,105.7464433,26.3902053,105.7467937,26.3926461,105.746939,26.3936171,105.7472947,26.3944634,105.7478793,26.3955408,105.7484157,26.3964317,105.7495207,26.3976236,105.7500819,26.3984135,105.7505973,26.3994189,105.7510286,26.4009132,105.7512046716,26.4014364596]),
					width : 10,
					material : Cesium.Color.DARKMAGENTA,
					clampToGround : true
				},
				description:"安普公路"
			});
			
			roads[8] = viewer.entities.add({
				name : '安普公路',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.7510947253,26.4014364596,105.7509272,26.4009386,105.7504978,26.3994507,105.7499893,26.3984587,105.7494355,26.3976792,105.748328,26.3964848,105.7477856,26.3955838,105.7471979,26.3945007,105.7468363,26.3936403,105.7466894,26.3926583,105.7463391,26.3902187,105.7461696,26.389257,105.7458983,26.3880118,105.7451299,26.3856125,105.7443727,26.3833651,105.743559,26.3808847,105.7429601,26.3789206,105.7425533,26.37818160000001,105.74183,26.3771894,105.7408242,26.3762073,105.7397959,26.3754682,105.7381685,26.3743647,105.7369367,26.3736964,105.7358744,26.3728763,105.7351625,26.372036,105.734507,26.3710336,105.7339985,26.3699604,105.7336369,26.3686543,105.7334787,26.3676316,105.7335126,26.3662748,105.733603,26.3655154,105.7337951,26.3647054,105.7341793,26.3635005,105.7347331,26.3623968,105.7353094,26.3614146,105.735897,26.3605742,105.7369593,26.3595515,105.7388127,26.357749,105.7425985,26.354053,105.7432087,26.3530403,105.743706,26.3519467,105.7443727,26.3502859,105.7445987,26.3490808,105.744723,26.34801750000001,105.7449604,26.347096,105.7453785,26.34613390000001,105.7459774,26.344949,105.7475483,26.3412627,105.7481456373,26.3396095228]),
					width : 10,
					material : Cesium.Color.DARKMAGENTA,
					clampToGround : true
				},
				description:"安普公路"
			});
			
			roads[1] = viewer.entities.add({
				name : '对门村村道',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.7271834396958,26.40449120007754,105.72704918667,26.40432012939711,105.7273530931805,26.40305769736763,105.7270951500867,26.40244752674913,105.7276638938158,26.40185132226797,105.7278418467497,26.40098294301795,105.7285190472441,26.40037468478956,105.7289775654775,26.40021550480783,105.7293732434799,26.40030957557175,105.7294466204853,26.39996468747075,105.7295060736718,26.39917049077608,105.7293326743362,26.39864513951921,105.7294859063875,26.39745312091635,105.7291623519658,26.39676191343325,105.7296789978325,26.39618422986835,105.7299218799764,26.39521922601417,105.7290932137207,26.39372781192873,105.7279486029117,26.39319505581411,105.7280083173114,26.39304536611117,105.7280657415342,26.39191015166071,105.7277540224627,26.39105643085122,105.7269042425804,26.39057204832054,105.7259555869013,26.39032873820578,105.7254974112649,26.38993526617272,105.7250713771076,26.38961957084396,105.7241972398355,26.38917974774262,105.7232997856058,26.38848577823219,105.723298061892,26.38846249076282,105.7223097984421,26.38757577876839,105.721498994866,26.38738821544101,105.7211652117486,26.38704900970034,105.7205903516383,26.38686567221507,105.7200522781557,26.38609175503981,105.7203105989016,26.38509229959638,105.7189587989736,26.38353911511851,105.7180632147717,26.38255673208351,105.7176804897241,26.3817548857359,105.7168500326738,26.38144504276832,105.7163052470353,26.38079830819488,105.7161890326596,26.38082356549552,105.7159427465465,26.38101899507637,105.7156445299198,26.38118161212973,105.715453444917,26.38114327342057,105.7154277342571,26.38104226367265,105.7154616945868,26.38057969651875,105.714789397139,26.37993458750098,105.7146176646078,26.37992687546449,105.7144718361163,26.38006692917334,105.7143115677029,26.380331714148,105.7139737456005,26.3802719243132,105.7138532160544,26.38034546441247,105.7137704471226,26.38015239978502,105.7136103409269,26.38005528401939,105.7134381732897,26.38013148909019,105.7130780179001,26.38026088249172,105.7129851568202,26.38029319935591,105.7131239187037,26.38063398334479,105.7130781523313,26.38081509438777,105.7129993064783,26.38084556179758,105.7129141552893,26.3807109612799,105.7127469529293,26.38048209204379,105.7126681342281,26.380322872784,105.7126136419197,26.38024545282578,105.7124275147069,26.38021577659163,105.7122801691725,26.38025324141987,105.7121599418259,26.38037043826498]),
					width : 3,
					material : Cesium.Color.DARKMAGENTA,
					
					distanceDisplayCondition:new Cesium.DistanceDisplayCondition(0.0, 8000.0),
					clampToGround : true
				},
				description:"对门村村道"
			});
			
			roads[2] = viewer.entities.add({
				name : '和平村村道',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.7205310279146,26.40419388522814,105.7207340592284,26.40287098907253,105.7204489176221,26.4016888858286,105.7199388387333,26.40009852780234,105.7197151842371,26.39951137784008,105.7195962386944,26.39927561265603,105.7193051729794,26.39808045837482,105.7192463299095,26.39705410425144,105.7199507532936,26.39629357432208,105.7200797272717,26.39618410145722,105.719910563028,26.39589935012916,105.7197802329469,26.39561752984874,105.7194012370062,26.39527808648014,105.7186095870182,26.39497550345066,105.7180171650423,26.39442972760936,105.7176375152291,26.39384843709979,105.7173024929861,26.39348017860856,105.7168346294201,26.39320102540203,105.716008402621,26.39242466623871,105.715823125223,26.39196035916652,105.7156881489251,26.39184918412631,105.7149755337848,26.39147066027703,105.7148196006146,26.39102337897797,105.7144814266835,26.390349299772,105.7142845955078,26.39025479649458,105.7141295783566,26.39018578282388,105.7139052983934,26.39020780595703,105.7134698640027,26.39030502784676,105.7127425130463,26.39030866863461,105.712117638017,26.39040714072668,105.7116842028138,26.39050022118521,105.7111257034639,26.39057016288322,105.7106332745102,26.3907931603103,105.7103504562792,26.39110920133165,105.7103403885455,26.39112993881885,105.7100170399726,26.39126709839042,105.7097251884787,26.39146064263699,105.7094054768802,26.39147899087833,105.7091355342609,26.39177382951807,105.7087696648683,26.39206329213137,105.7084475296443,26.39219215000938,105.7080859379736,26.3924000841985,105.707915807955,26.39246052584522,105.7076567860636,26.3924379515313,105.7069864132863,26.39222596093689,105.7065268985019,26.39184557306501,105.7064354947909,26.39168993756402,105.7063702323952,26.39131515945453,105.7063030334477,26.39085633473386,105.7062473934838,26.39053530934756,105.7061855921405,26.39035274573855,105.7061782209901,26.39033326023177,105.7061218909842,26.39016830397377,105.705787884502,26.39008514381687,105.7052607097676,26.38951793979823,105.7050984612812,26.38943232995922,105.7051756797412,26.38929952470018,105.7051771321651,26.38929075230011,105.70526586086,26.38922040344303,105.7055244639632,26.3890660303503,105.7058091133368,26.38892318818442,105.7060405400884,26.38836752530695,105.7064428975035,26.38794381525816,105.7066763734754,26.38749957599969,105.7067606712979,26.38714343969722,105.7066841447017,26.38695396655927,105.7063602920851,26.38694959310512,105.7060461096174,26.38720225271481,105.7058750664373,26.38721876796332,105.7056236380881,26.38714469815174,105.7053316524876,26.38705922060756,105.7051007305602,26.38696628073189,105.7050792913855,26.3869512365121,105.7049691039392,26.38683104084576]),
					width : 3,
					material : Cesium.Color.DARKMAGENTA,
					clampToGround : true
				},
				description:"和平村村道"
			});
			
			roads[3] = viewer.entities.add({
				name : '两村路',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.7270485051166,26.40431873169118,105.7269393535698,26.40397296256047,105.7267334419331,26.40353025476124,105.7266113999409,26.40330589168709,105.7261445442737,26.40243696731663,105.7258699598274,26.40152754927329,105.7256948849022,26.40097046136356,105.7249618799036,26.3998000285826,105.7249079331766,26.39978909501938,105.7248631469418,26.39980912955422,105.7246056342369,26.40011377468417,105.7245630367676,26.40010769427078,105.7242063685852,26.39991254385755,105.7240516091953,26.39954512287114,105.7237903557045,26.39876594032539,105.7236915176778,26.39874399070387,105.7229240484179,26.39866606117675,105.7228264582548,26.39865616009162,105.7227364573841,26.39859687990121,105.7223419485508,26.39804518447031,105.7219186833366,26.39789061522707,105.7212232446972,26.39761969517936,105.7205530680666,26.39744601834768,105.7205059436743,26.39737181928706,105.7205017925837,26.39734285087897,105.7206092288403,26.39641683411991,105.720630013167,26.39615602297184,105.7206309312527,26.39614966611084,105.7206204735622,26.39602785498518,105.720621300686,26.39602200681049,105.7205632819855,26.39591575210397,105.7205111246897,26.39586693240513,105.7205042025396,26.39585499540403,105.7204598793879,26.39583834081521,105.7203664562091,26.39582555669167,105.720236988742,26.39582750789161,105.7201431971288,26.39582298798485,105.7201332548433,26.39581665783166,105.7200749487578,26.39577660428027,105.7200673552146,26.39577323640113,105.7199920297796,26.39572618149055,105.7199522794115,26.39569790726001,105.719923210592,26.39567327530033,105.7199042918964,26.39567184922417,105.7198475856172,26.39566175727847,105.7197917216784,26.39563443503146]),
					width : 3,
					material : Cesium.Color.DARKMAGENTA,
					clampToGround : true
				},
				description:"两村路"
			});
			
			roads[4] = viewer.entities.add({
				name : '通渡路',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.7006042304466,26.40452383305627,105.7008309115257,26.40402398833484,105.7006073033651,26.40373395492885,105.7003880128229,26.40354131818927,105.7004515070446,26.40345905604553,105.7007441231437,26.4031361114939,105.7006585591076,26.40287182062689,105.7004771679406,26.40272311472491,105.7002196531895,26.40265612870406,105.7000804182774,26.40272095582809,105.6995803812488,26.4029419704842,105.6995795837642,26.40292550096204,105.6995874354365,26.40289326088239,105.6996152530975,26.40235087673281,105.699501637169,26.40228842994904,105.6993541165366,26.40225005174889,105.6991995961238,26.40222799127928,105.6988603711935,26.40226067322481,105.6987524135407,26.40216948532599,105.6987595229208,26.40205014501448,105.6987592955783,26.40203430200311,105.6988191837275,26.4019499169351,105.6989991346466,26.40174802955026,105.6995036116373,26.40160234304191,105.6995194911363,26.40152489269276,105.6992944395011,26.40140285167716,105.6990235679652,26.40123275019763,105.698359447624,26.40052459008388,105.697954447608,26.39977720136886,105.697654779742,26.39932699049603,105.6973905029908,26.39907125877108,105.6973044129446,26.3987688373288,105.6973143659292,26.39853751236636,105.6974348020572,26.3983893102857,105.6974440737504,26.39839002066584,105.6977518782685,26.39835913527771,105.6976228440731,26.39796851909495,105.6979057337871,26.39781086926523,105.6982635449525,26.39769177287771,105.6982728019003,26.39769173473529,105.6983573858677,26.39734842498134,105.698232660243,26.39730492369873,105.6979534303666,26.39728765626212,105.697871931175,26.39699000926405,105.6977147835952,26.39675802951039,105.6974863644747,26.39651754441603,105.697300707779,26.39643502467266,105.6971013198025,26.39639656976478,105.6969585302661,26.39629181770059,105.696930885281,26.39610849231865,105.697044037877,26.39526105105171,105.6968459244596,26.39532077031459,105.6966191165671,26.39529399903166,105.6964693022762,26.39524510716633,105.696201704161,26.39539663489929,105.6959441895372,26.39536820401431,105.6956910873131,26.39530099537213,105.6955345131406,26.39512641275289,105.6954370796409,26.39498246032958,105.6953678795268,26.3945416071062,105.6948727136072,26.39387405204314,105.694072114658,26.39280564486312,105.6936938036021,26.39248431654235,105.6936832012736,26.39247310738142,105.6932617297141,26.39216490317326,105.6932315577628,26.39204117180543,105.6934568472819,26.39119253895382,105.693280404208,26.39056600455561,105.6930221338576,26.39031398472136,105.6927911992657,26.39013942856933,105.6926616856243,26.3899910841846,105.6921146674838,26.38953806022028,105.6919148320804,26.38923000690414,105.6915361579674,26.38912729858798,105.6914880734901,26.38912242368621,105.6910476025623,26.3890952096263,105.6909852409355,26.38897001936838,105.6910058078886,26.38887298301289,105.6910576464379,26.38866024111114,105.6910573011116,26.38864912936999,105.6909825880628,26.388468496744,105.6908193607322,26.38838304366541,105.6906019030025,26.38835351259298,105.6903401482267,26.38825041156889,105.6901363197572,26.38803523167567,105.6897721266882,26.38790430968536,105.6897500162983,26.38789400902179,105.6895856723598,26.38786549533345,105.6895311253353,26.38786222866593,105.6894767293568,26.38787766129705,105.6893572102578,26.38787980280457,105.689151881051,26.38779307023932,105.6887493633048,26.3875153473348,105.6887394425949,26.38750435191487,105.6886108761942,26.38737274109089,105.688773859815,26.38726014175049,105.6889048024933,26.38714664307079,105.6889229549364,26.38698757061778,105.6886940326783,26.3864349912394,105.6884086459835,26.38646392992261,105.6880260103981,26.38633589205053,105.6881295433577,26.38623128921593,105.6883228778679,26.38612118232915,105.6885714678445,26.38603045926074,105.6887291927686,26.38590392234735,105.688851985377,26.38566382422952,105.6890292148574,26.38543099218582,105.6890403225058,26.38542046222837,105.6889272671163,26.38523588462193,105.688915482639,26.38510378825293,105.6889153681179,26.38508202843086,105.6887943291669,26.38503272983341,105.6887833689661,26.38503217981649,105.6884885698148,26.3850679203331,105.688183123097,26.38498664589306,105.6879782244828,26.38482227393624,105.6877532273942,26.38470716964037,105.6876886511342,26.38470703051155,105.6875379169817,26.38471620660264,105.687526708347,26.38473519884672,105.6872455089357,26.38487936782981,105.6868111932461,26.38535036684842,105.6865100630761,26.3852881670834,105.6862811171574,26.38516132658305,105.6859136884628,26.38470407247708,105.6857709180186,26.38434821521158,105.6854308367043,26.38420460016305,105.6851941822217,26.38423741308563,105.6849899281021,26.38436352541063,105.6846974083398,26.38468831076478,105.6845398288039,26.3846380022577,105.6845165851405,26.38453581619004,105.6844712355613,26.38436685685726,105.6841117381879,26.3841095227529,105.6832757987353,26.38388643545674,105.6830117712195,26.38379566234451,105.6826851961068,26.38355385102539,105.6826380882769,26.38328866211761,105.6826184362571,26.38326987213662,105.6823121567532,26.38299531481264,105.6820515769443,26.38303032544666,105.6820086322545,26.38303145644838,105.681828725102,26.38310211924113,105.6816270874779,26.3833358001976,105.6812538647445,26.38352915289114]),
					width : 3,
					material : Cesium.Color.DARKMAGENTA,
					clampToGround : true
				},
				description:"通渡路"
			});
			
			roads[5] = viewer.entities.add({
				name : '通山路',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.6982617961331,26.39767522508935,105.6983978392701,26.39761167188755,105.6985863599651,26.39765178407674,105.6990665017566,26.39790414334063,105.6993464811498,26.39790745909962,105.6993640115458,26.39790918178787,105.6997480206056,26.39776470772823,105.6997593883816,26.39775417330671,105.6998178555686,26.39758157292774,105.6998316249283,26.39724819986968,105.6997849416682,26.39707638735477,105.6997736331299,26.39706021793536,105.6997342458148,26.39699163905799,105.6998904912183,26.39663839333115,105.6997954969065,26.39632243651245,105.6998959054382,26.39592835343138,105.6999188299745,26.39542870132536,105.6995944795327,26.3949423928076,105.6993267465455,26.39464217744126,105.6992760610177,26.39433732850754,105.6993676053302,26.39387431315636,105.6994229368862,26.39345516224975,105.6993060263948,26.39297299519451,105.6992442652886,26.39276419372845,105.699322132889,26.39246151366363,105.6991479047145,26.39216164635472,105.698978923744,26.3919593145088,105.6989977398452,26.39182249122267,105.6990043679906,26.39173893633884,105.6988186612365,26.39134499806665,105.6988190562399,26.39133512213129,105.6988441027265,26.39124310534433,105.6989321265065,26.39113983307605,105.6989536137787,26.39112150354854,105.6994472604876,26.39099293453144,105.6998381866884,26.39094236249638,105.6999423129925,26.39090515328613,105.6998115771525,26.39068057493198,105.6996952626438,26.39057886311287,105.6992205322902,26.39042008633058,105.6989612025687,26.39036672667494,105.6987984299921,26.39027775702839,105.6984988690922,26.38993505218917,105.6984164665672,26.38981108457331,105.6985827632832,26.38952552441891,105.6985053541987,26.3889838793287,105.6986123295625,26.38866555743255,105.6988289908042,26.38847854682818,105.6990870135684,26.38830528145035,105.6990900581326,26.38829108222642,105.6991097231751,26.38822853047167,105.6990562635685,26.38807357323033,105.6995029946542,26.38785134504802,105.6995294881171,26.38778257901583,105.6994223434115,26.38741346709615,105.6994313664433,26.38739746633508,105.6994675047164,26.38733918406377,105.6994617073002,26.3872764922607,105.69911915686,26.38687312281104,105.6991069713335,26.38684805987462,105.698883049057,26.38671154668658]),
					width : 3,
					material : Cesium.Color.DARKMAGENTA,
					clampToGround : true
				},
				description:"通山路"
			});
			
			roads[6] = viewer.entities.add({
				name : '通谷路',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.6933682923284,26.33551665586371,105.6936823575415,26.33687790803446,105.6935443364123,26.33732381140894,105.6934488244462,26.33761428738709,105.6920409445649,26.33821609612484,105.6913960102483,26.3388304285533,105.6913613261556,26.33891386196714,105.6911702016564,26.33942516256821,105.6915914627565,26.33981303035344,105.6924511155242,26.34025249248427,105.6933171805667,26.3403971937161,105.6935726229774,26.34069876413355,105.692718109315,26.34169314010366,105.6931068787304,26.34340634854742,105.6935313728384,26.34396454934236,105.693552145981,26.34400210409459,105.6935124767242,26.34475861329953,105.6934789271571,26.34515492903596,105.6935182149914,26.34528087804262,105.6937789905778,26.34579235034779,105.6939171154894,26.34598286005435,105.6925461823914,26.34641379478053,105.6925710818321,26.34896320231721,105.6925972339424,26.34946495954759,105.692758163306,26.34983563945088,105.6941050527555,26.35363038735145,105.6945830204161,26.35465773661379,105.69462326965,26.35537472419727,105.6943994338495,26.35704013993614,105.6946351539971,26.35757911101982]),
					width : 3,
					material : Cesium.Color.DARKMAGENTA,
					clampToGround : true
				},
				description:"通谷路"
			});
			
			roads[7] = viewer.entities.add({
				name : '通湾路',
				polyline : {
					positions : Cesium.Cartesian3.fromDegreesArray([105.7031375914069,26.36603919823948,105.7019065441566,26.36527556232121,105.7014434740411,26.36435028076463,105.7011329217797,26.36331280773302,105.7007800840389,26.36266523383196,105.6998657086728,26.36145117928857,105.6998341978086,26.36078035803691,105.699249941755,26.36024919733629,105.6977277343839,26.35755610941372,105.6972125301247,26.35688575171767,105.6970688636022,26.35614120971387,105.6970522786844,26.35602614254201,105.6969611583192,26.3553931684442,105.6967140556019,26.35498702433343,105.697401614739,26.35328521013556,105.6965813982892,26.35164924842442,105.696248839314,26.34927236019648,105.6967918251807,26.34888217921973,105.7000681853483,26.3482919562151,105.7015129991052,26.34761926992577,105.7012170607945,26.34648285104875,105.7006822316214,26.34630122163419,105.7001680338012,26.34602649913991,105.7003138509676,26.34561249188005,105.7004340690906,26.34502016711633,105.700375123202,26.34460308419858,105.699364937133,26.34387280931363,105.6988868405921,26.34380721165097,105.6988135927959,26.34327552599158,105.6988705491614,26.34296893931228,105.6976891458943,26.3417934695029,105.6971465612702,26.34098984026297,105.6963684755631,26.3395310522321,105.6940340132552,26.33720107833434,105.6937015083012,26.33709242101351]),
					width : 3,
					material : Cesium.Color.DARKMAGENTA,
					clampToGround : true
				},
				description:"通湾路"
			});
		}
		
		function roadRemove(){
			for (var i=0;i<roads.length;i++)
				{
				viewer.entities.remove(roads[i]);
				}
		}