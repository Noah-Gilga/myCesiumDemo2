/*
	var Binglayer;		
	//checkboxѡ���������
	$('#layerChooser').click(function(){
		if(layer2.checked){
					var bingMap = new Cesium.BingMapsImageryProvider({
						url:'//dev.virtualearth.net',
						key:'RrtMfihZkhPO5yZ7oToT~FpWsSrdQKKlR785PhRAunA~AsteAHRBCGbAimkt8u-n8F_FXnohAU39WqwuVyC7ux5Ei9_ojXWbtX-ycCeU1YD2'
					});
					Binglayer=new Cesium.ImageryLayer(bingMap);
					viewer.imageryLayers.add(Binglayer);
				}
				else{
					viewer.imageryLayers.remove(Binglayer);
				}

			});
*/
	//�̶�����dom
	var bingMap = new Cesium.UrlTemplateImageryProvider({
						url:'http://localhost:8090/cesiumMap2/img/08061003/{z}/{x}/{y}.png',
						//�鿴����api�ϵ�UrlTemplateImagery�Ľӿ�������һ��Ҫдzxy
						//url:'http://localhost:9002/api/wmts/gettile/8a21d00917cf41e39e74c9413663a126/{z}/{x}/{y}',
						tilingScheme: new Cesium.WebMercatorTilingScheme(),
						minimumLevel: 0,
						maximumLevel: 20,
					});
					Binglayer=new Cesium.ImageryLayer(bingMap);
					viewer.imageryLayers.add(Binglayer);
	
	/*
	var Binglayer;		
	//checkbox3ѡ����������Ӱ��---ok
	$('#layerChooser3').click(function(){
		if(layer3.checked){
			var rectangle = new Cesium.Rectangle(Cesium.Math.toRadians(105.72817),Cesium.Math.toRadians(26.338713),
								Cesium.Math.toRadians(105.744225),Cesium.Math.toRadians(26.352255));

					var bingMap = new Cesium.UrlTemplateImageryProvider({
						url:'http://localhost:8081/cesiumMap2/img/08061003/{z}/{x}/{y}.png',
						//�鿴����api�ϵ�UrlTemplateImagery�Ľӿ�������һ��Ҫдzxy
						//url:'http://localhost:9002/api/wmts/gettile/8a21d00917cf41e39e74c9413663a126/{z}/{x}/{y}',
						tilingScheme: new Cesium.WebMercatorTilingScheme(),
						minimumLevel: 0,
						maximumLevel: 20,
					});
					Binglayer=new Cesium.ImageryLayer(bingMap);
					viewer.imageryLayers.add(Binglayer);
					viewer.scene.camera.flyTo({destination: rectangle});
				}
				else{
					viewer.imageryLayers.remove(Binglayer);
				}

			});
	*/

	//checkbox2ѡ����ʾ�����Ӧ�ĵ���---ok
	//7-19��˵ϣ���Ǹ����ι̶���ʾ����Ϊ�Ǹ�����̫����
	/*
	var terrLayer;
	var defaultTerrian;
	$('#layerChooser2').click(function(){
				if(layer2.checked){
					terrLayer = new Cesium.CesiumTerrainProvider({
						url: 'http://localhost:9002/api/wmts/terrain/ea29219ab0ef41a5b048878c3838c8cc',
						requestWaterMask:true,
						credit: 'http://www.bjxbsj.cn',
					});
					viewer.terrainProvider = terrLayer;
				}
				else{//ȡ����ѡʱ��Ĭ�ϵ��δ���
					defaultTerrian=new Cesium.createWorldTerrain();
					viewer.terrainProvider=defaultTerrian;
				}

			});
	*/
	/*
	//checkbox1ѡ����ʾ�����Ӧ����----�ȳ�������һ��
	
	var pointcloudLayer;
	$('#layerChooser1').click(function(){
		if(layer1.checked){
			//����29140����ĵ���
			var longitude = 105.7112028497739;
			var latitude = 26.338204809001507;
			var height = 1340.2249999986425;
			var heading = 0;
			var tileset = new Cesium.Cesium3DTileset({
				url: 'http://localhost:9002/api/folder/ef668bf020bf4090a4d1d4d0c8d5de38/tileset.json'
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
				viewer.scene.primitives.show=true;
				}
		else{
			viewer.scene.primitives.show=false;//��ʱֻ����һ��,�����if-true��������viewer.scene.primitives.show=true;�Ϳ���ʵ�ָù�����
			}

	});
	*/
	
	
	
	
	//����ʾ����
	var pointcloudLayer;
	
	//��tilset��ȫ�ֱ���
	//1.
	var tileset = new Cesium.Cesium3DTileset({
				url: 
				'pointCloud/29140/tileset.json'
				//'http://localhost:9002/api/folder/ef668bf020bf4090a4d1d4d0c8d5de38/tileset.json'
	});
	//2.
	var tileset2 = new Cesium.Cesium3DTileset({
				url: 
				'pointCloud/29150/29150-3/tileset.json'
				//'http://localhost:9002/api/folder/5665ba8ec07b4c0db1d31944d9349e59/tileset.json'
	});
	//3.
	var tileset3 = new Cesium.Cesium3DTileset({
		url: 
		'pointCloud/29160/29160/tileset.json'
		//'http://localhost:9002/api/folder/7be0140c7ed54274b8dc7a05d5a9c598/tileset.json'
	});
	//4.
	var tileset4 = new Cesium.Cesium3DTileset({
		url:
		'pointCloud/29170/29170/tileset.json'
		//'http://localhost:9002/api/folder/880572d2c3474a7eb2debec8c7bb2a65/tileset.json'
	});
	//5.
	var tileset5 = new Cesium.Cesium3DTileset({
		url: 
		'pointCloud/29180/29180/tileset.json'
		//'http://localhost:9002/api/folder/0c213f7dae6542d9969850334039fea6/tileset.json'
	});
	//6.
	var tileset6 = new Cesium.Cesium3DTileset({
		url: 
		'pointCloud/29190/29190/tileset.json'
		//'http://localhost:9002/api/folder/92f72d6ec8174f019930571040a5c5aa/tileset.json'
	});
	//7.
	var tileset7 = new Cesium.Cesium3DTileset({
		url: 
		'pointCloud/29200/29200/tileset.json'
		//'http://localhost:9002/api/folder/8eca5287de16468eb652e841ce8fa247/tileset.json'
	});
	//8.
	var tileset8 = new Cesium.Cesium3DTileset({
		url: 
		'pointCloud/29210/29210/tileset.json'
		//'http://localhost:9002/api/folder/850bd27f5a0c4de18676f9c43bc1ff37/tileset.json'
	});
	
	$('#layerChooser1').click(function(){
		if(layer1.checked){
			//����29140����ĵ���
			
			var longitude = 105.7112028497739;
			var latitude = 26.338204809001507;
			var height = 1340.2249999986425;
			var heading = 0;
			//var tileset = new Cesium.Cesium3DTileset({
				//url: 'http://localhost:9002/api/folder/ef668bf020bf4090a4d1d4d0c8d5de38/tileset.json'
				//});
			//�������õ��Ʊ��ܼ���0�Ѿ������ֵ��
			tileset.maximumScreenSpaceError = 0; // For better performance, due to how this tileset treats geometric error.
			//tileset.pointCloudShading.maximumAttenuation = 8.0; // Don't allow points larger than 8 pixels.
			//tileset.pointCloudShading.baseResolution = 0.05; // Assume an original capture resolution of 5 centimeters between neighboring points.
			//tileset.pointCloudShading.geometricErrorScale = 1.0; // Applies to both geometric error and the base resolution.
			//tileset.pointCloudShading.attenuation = true;
			//tileset.pointCloudShading.eyeDomeLighting = true;
			
			//���õ������ش�С
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
			
			//����29150����ĵ���
			var longitude2 = 105.71125802746994;
			var latitude2 = 26.347229929770933;
			var height2 = 1338.3599999973678;
			var heading2 = 0;
			//var tileset2 = new Cesium.Cesium3DTileset({
				//url: 'http://localhost:9002/api/folder/5665ba8ec07b4c0db1d31944d9349e59/tileset.json'
			//});
			//���õ������ش�С
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
			
			//3.����29160����
	var longitude3 = 105.71131323128427;
	var latitude3 = 26.3562550390631;
	var height3 = 1339.5600000020381;
	var heading3 = 0;
	//var tileset3 = new Cesium.Cesium3DTileset({
		//url: 'http://localhost:9002/api/folder/7be0140c7ed54274b8dc7a05d5a9c598/tileset.json'
	//});
	//���õ������ش�С
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
	
	//4.����29170����
	var longitude4 = 105.7113684612256;
	var latitude4 = 26.365280136875246;
	var height4 = 1678.0250000005644;
	var heading4 = 0;
	//var tileset4 = new Cesium.Cesium3DTileset({
		//url: 'http://localhost:9002/api/folder/880572d2c3474a7eb2debec8c7bb2a65/tileset.json'
	//});
	//���õ������ش�С
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
	
	//5.����29180����
	var longitude5 = 105.71142371730295;
	var latitude5 = 26.374305223204637;
	var height5 = 1339.6400000025153;
	var heading5 = 0;
	//var tileset5 = new Cesium.Cesium3DTileset({
		//url: 'http://localhost:9002/api/folder/0c213f7dae6542d9969850334039fea6/tileset.json'
	//});
	//���õ������ش�С
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
	
	//6.����29190����
	var longitude6 = 105.71147899952484;
	var latitude6 = 26.383330298048588;
	var height6 = 1323.0950000004336;
	var heading6 = 0;
	//var tileset6 = new Cesium.Cesium3DTileset({
		//url: 'http://localhost:9002/api/folder/92f72d6ec8174f019930571040a5c5aa/tileset.json'
	//});
	//���õ������ش�С
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
	
	//7.����29200����
	var longitude7 = 105.71153430790028;
	var latitude7 = 26.392355361404224;
	var height7 = 1352.075000000081;
	var heading7 = 0;
	//var tileset7 = new Cesium.Cesium3DTileset({
		//url: 'http://localhost:9002/api/folder/8eca5287de16468eb652e841ce8fa247/tileset.json'
	//});
	//���õ������ش�С
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
	
	//8.����29210����
	var longitude8 = 105.7115896424379;
	var latitude8 = 26.401380413268875;
	var height8 = 1350.4250000017296;
	var heading8 = 0;
	//var tileset8 = new Cesium.Cesium3DTileset({
		//url: 'http://localhost:9002/api/folder/850bd27f5a0c4de18676f9c43bc1ff37/tileset.json'
	//});
	//���õ������ش�С
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
				
				viewer.scene.primitives.show=true;
				}
		else{
			viewer.scene.primitives.show=false;//��ʱֻ����һ��,�����if-true��������viewer.scene.primitives.show=true;�Ϳ���ʵ�ָù�����
			}

	});
	
	
	//�����б�ѡ����ƴ�Сsize
	
/*
	function handler(event){
		
			
		
		//���ص���
//1.���ȼ���29140����
	
	
	var longitude = 105.7112028497739;
	var latitude = 26.338204809001507;
	var height = 1340.2249999986425;
	var heading = 0;
	var tileset = new Cesium.Cesium3DTileset({
		url: 'http://localhost:9002/api/folder/ef668bf020bf4090a4d1d4d0c8d5de38/tileset.json'
	});
	tileset.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : this.value
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


//2.����29150����
	var longitude2 = 105.71125802746994;
	var latitude2 = 26.347229929770933;
	var height2 = 1338.3599999973678;
	var heading2 = 0;
	var tileset2 = new Cesium.Cesium3DTileset({
		url: 'http://localhost:9002/api/folder/5665ba8ec07b4c0db1d31944d9349e59/tileset.json'
	});
	tileset2.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : this.value
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

//3.����29160����
	var longitude3 = 105.71131323128427;
	var latitude3 = 26.3562550390631;
	var height3 = 1339.5600000020381;
	var heading3 = 0;
	var tileset3 = new Cesium.Cesium3DTileset({
		url: 'http://localhost:9002/api/folder/7be0140c7ed54274b8dc7a05d5a9c598/tileset.json'
	});
	tileset3.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : this.value
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
	
	//4.����29170����
	var longitude4 = 105.7113684612256;
	var latitude4 = 26.365280136875246;
	var height4 = 1678.0250000005644;
	var heading4 = 0;
	var tileset4 = new Cesium.Cesium3DTileset({
		url: 'http://localhost:9002/api/folder/880572d2c3474a7eb2debec8c7bb2a65/tileset.json'
	});
	tileset4.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : this.value
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
	
	//5.����29180����
	var longitude5 = 105.71142371730295;
	var latitude5 = 26.374305223204637;
	var height5 = 1339.6400000025153;
	var heading5 = 0;
	var tileset5 = new Cesium.Cesium3DTileset({
		url: 'http://localhost:9002/api/folder/0c213f7dae6542d9969850334039fea6/tileset.json'
	});
	tileset5.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : this.value
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
	
	//6.����29190����
	var longitude6 = 105.71147899952484;
	var latitude6 = 26.383330298048588;
	var height6 = 1323.0950000004336;
	var heading6 = 0;
	var tileset6 = new Cesium.Cesium3DTileset({
		url: 'http://localhost:9002/api/folder/92f72d6ec8174f019930571040a5c5aa/tileset.json'
	});
	tileset6.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : this.value
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
	
	//7.����29200����
	var longitude7 = 105.71153430790028;
	var latitude7 = 26.392355361404224;
	var height7 = 1352.075000000081;
	var heading7 = 0;
	var tileset7 = new Cesium.Cesium3DTileset({
		url: 'http://localhost:9002/api/folder/8eca5287de16468eb652e841ce8fa247/tileset.json'
	});
	tileset7.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : this.value
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
	
	//8.����29210����
	var longitude8 = 105.7115896424379;
	var latitude8 = 26.401380413268875;
	var height8 = 1350.4250000017296;
	var heading8 = 0;
	var tileset8 = new Cesium.Cesium3DTileset({
		url: 'http://localhost:9002/api/folder/850bd27f5a0c4de18676f9c43bc1ff37/tileset.json'
	});
	tileset8.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : this.value
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
	
	viewer.scene.primitives.show=true;
	
	}
	*/
	
	
	//update����
	
	function handler(event){
		
		
			
			
			tileset.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : this.value
			});
			tileset2.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : this.value
			});
			tileset3.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : this.value
			});
			tileset4.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : this.value
			});
			tileset5.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : this.value
			});
			tileset6.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : this.value
			});
			tileset7.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : this.value
			});
			tileset8.style = new Cesium.Cesium3DTileStyle({
				//color : 'vec4(${Temperature})',
				pointSize : this.value
			});
			viewer.scene.primitives.update(tileset);
			viewer.scene.primitives.update(tileset2);
			viewer.scene.primitives.update(tileset3);
			viewer.scene.primitives.update(tileset4);
			viewer.scene.primitives.update(tileset5);
			viewer.scene.primitives.update(tileset6);
			viewer.scene.primitives.update(tileset7);
			viewer.scene.primitives.update(tileset8);
			viewer.scene.primitives.show=true;
		
	}
	
	
	
	
	$("#pointcloudLayerSelect").change( handler );
	
	/*
	var value= document.getElementById('pointcloudLayerSelect');
	function handler(event){
	alert(value);
}


*/

	//���ó���
	function resetScene() {

    //viewer.trackedEntity = undefined;

   // viewer.dataSources.removeAll();

   // viewer.entities.removeAll();

    viewer.scene.primitives.remove(tileset);

  //  viewer.clock.shouldAnimate = false;

   // handler = handler && handler.destroy();

    //scene.skyBox.show = true;

    //scene.camera.flyHome(0.0);

    //scene.requestRender();

    //viewModel.showTimeOptions = false;

    //viewModel.timeChangeEnabled = false;

    //viewModel.maximumRenderTimeChange = 0;

}
	//����ɫ��
	$('#classBtn').click(function(){
		var classifiedBtn = document.getElementById('colorClassify');
		if(classifiedBtn.style.display != 'block')
		{
			classifiedBtn.style.display = 'block';
		}
		else
		{
			alert('���Ѿ��򿪷�����ɫ���ˣ������ظ��򿪣�');
		}
	});
	
	
	
	//����رհ�ť�ر���ɫ��
	$('#colorClose').click(function(){
		var classified = document.getElementById('colorClassify');
		if(classified.style.display != 'none')
		{
			classified.style.display = 'none';
		}
	});
	
	
	//��ˮ��ģ�ⴰ��
	$('#flood-switch').click(function(){
		var floodBtn = document.getElementById('flood-sim-window');
		if(floodBtn.style.display != 'block')
		{
			floodBtn.style.display = 'block';
		}
		else
		{
			alert('���Ѿ��򿪷�����ɫ���ˣ������ظ��򿪣�');
		}
	});
	
	//����رհ�ť�ر���ɫ��
	$('#flood-close').click(function(){
		var floodBtn = document.getElementById('flood-sim-window');
		if(floodBtn.style.display != 'none')
		{
			floodBtn.style.display = 'none';
		}
	});
	
	
/** 
* 
* //@param hex ����:"#23ff45" 
* //@param opacity ͸���� 
* //@returns {string} 
*/ 
	//16���Ƶ���ɫת��rgb��ʽ
	function hexToRgba(hex) { 
		//return "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")"; 
		return "rgb(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) +  ")"; 
	}
	
	//��ʼ��ɫ
	$('#colorApply').click(function () {
	    //alert($("#pointcloudLayerSelect").find("option:selected").val());    ��ȡselected option�иĵ�value
	    var ptnSize = $("#pointcloudLayerSelect").find("option:selected").val();
		//��ȡӦ�ð�ť��ID�����Ӧ�ð�ťʱӦ�÷�����ɫͬʱ�رմ���
		var colorGround = hexToRgba(document.getElementById('ground').value);            
		//��ȡ������ɫ��ֵ        2
		var colorLowVeg = hexToRgba(document.getElementById('lowVegetation').value);
		//��ȡ�Ͱ�ֲ������ɫֵ    3
		var colorMedVeg = hexToRgba(document.getElementById('mediumVegetation').value);
		//��ȡ�и߹�ľ����ɫֵ    4
		var colorWater = hexToRgba(document.getElementById('water').value);
		//��ȡ�и߹�ľ����ɫֵ    9
		var colorHegVeg = hexToRgba(document.getElementById('highVegetation').value);
		//��ȡ�ߴ���ľ����ɫֵ    5
		var colorBuilding = hexToRgba(document.getElementById('building').value);
		//��ȡ��������ɫֵ        6
		var colorRailway = hexToRgba(document.getElementById('railway').value);
		//��ȡ��·����ɫֵ       10
		var colorRoad = hexToRgba(document.getElementById('road').value);
		//��ȡ��·����ɫֵ       11
		var colorOverlap = hexToRgba(document.getElementById('overlap').value);
		//��ȡoverlap����ɫֵ    12
		var colorWirGud = hexToRgba(document.getElementById('wireGuard').value);
		//��ȡ��˿��������ɫֵ   13
		var colorWirCond = hexToRgba(document.getElementById('wireConductor').value);
		//��ȡ��˿����������ɫֵ 14
		var colorTower = hexToRgba(document.getElementById('tramsimissonTower').value);
		//��ȡ��������ɫֵ       15
		var colorConnector = hexToRgba(document.getElementById('wireSturctureConnerctor').value);
		//��ȡ����������ɫֵ     16
		var colorBridge = hexToRgba(document.getElementById('bridge').value);
		//��ȡ��������ɫֵ       17
		var colorUnclassified = hexToRgba(document.getElementById('unclassified').value);
		//��ȡδ�������ɫֵ      1
		var colorLowptn = hexToRgba(document.getElementById('lowPoint').value);
		//��ȡlowPoint����ɫֵ    7
		var colorHegptn = hexToRgba(document.getElementById('hightPoint').value);
		//��ȡhightPoint����ɫֵ 18
		var colorKeyptn = hexToRgba(document.getElementById('keyPoint').value);
		//��ȡkeyPoint����ɫֵ    8
		var colorUnclass= hexToRgba(document.getElementById('unclassified').value);
		//δ�������ɫֵ
		//1.
		tileset.style = new Cesium.Cesium3DTileStyle({
				color :  {
							conditions: [
								["${Classification} >=16.9", colorUnclass],
								["${Classification} >=15.9", colorHegptn],                        //hexToRgba�Ѿ����ص��Ǹ�string�� ����Ҫ�ټ�""
								["${Classification} >=14.9", colorTower],
								["${Classification} >=13.9", colorWirCond],
								["${Classification} >=12.9", colorWirGud],
								["${Classification} >=10.9", colorRoad],
								["${Classification} >=9.9", colorRailway],
								["${Classification} >=8.9", colorWater],
								["${Classification} >=5.9", colorBuilding],
								["${Classification} >=4.9", colorHegVeg],
								["${Classification} >= 3.9", colorMedVeg],
								["${Classification} >= 2.9", colorLowVeg],
								["${Classification} >= 1.9", colorGround],
								["true", colorUnclass]
							]
				},
            pointSize:ptnSize
				//pointSize : this.value
			});
			
		//2.
		tileset2.style = new Cesium.Cesium3DTileStyle({
				color :  {
							conditions: [
								["${Classification} >=16.9", colorUnclass],
								["${Classification} >=15.9", colorHegptn],                        //hexToRgba�Ѿ����ص��Ǹ�string�� ����Ҫ�ټ�""
								["${Classification} >=14.9", colorTower],
								["${Classification} >=13.9", colorWirCond],
								["${Classification} >=12.9", colorWirGud],
								["${Classification} >=10.9", colorRoad],
								["${Classification} >=9.9", colorRailway],
								["${Classification} >=8.9", colorWater],
								["${Classification} >=5.9", colorBuilding],
								["${Classification} >=4.9", colorHegVeg],
								["${Classification} >= 3.9", colorMedVeg],
								["${Classification} >= 2.9", colorLowVeg],
								["${Classification} >= 1.9", colorGround],
								["true", colorUnclass]
							]
				},
				pointSize: ptnSize
				//pointSize : this.value
			});
			
		//3.
		tileset3.style = new Cesium.Cesium3DTileStyle({
				color :  {
							conditions: [
								["${Classification} >=16.9", colorUnclass],
								["${Classification} >=15.9", colorHegptn],                        //hexToRgba�Ѿ����ص��Ǹ�string�� ����Ҫ�ټ�""
								["${Classification} >=14.9", colorTower],
								["${Classification} >=13.9", colorWirCond],
								["${Classification} >=12.9", colorWirGud],
								["${Classification} >=10.9", colorRoad],
								["${Classification} >=9.9", colorRailway],
								["${Classification} >=8.9", colorWater],
								["${Classification} >=5.9", colorBuilding],
								["${Classification} >=4.9", colorHegVeg],
								["${Classification} >= 3.9", colorMedVeg],
								["${Classification} >= 2.9", colorLowVeg],
								["${Classification} >= 1.9", colorGround],
								["true", colorUnclass]
							]
				},
				pointSize: ptnSize
				//pointSize : this.value
			});
			
		//4.
		tileset4.style = new Cesium.Cesium3DTileStyle({
				color :  {
							conditions: [
								["${Classification} >=16.9", colorUnclass],
								["${Classification} >=15.9", colorHegptn],                        //hexToRgba�Ѿ����ص��Ǹ�string�� ����Ҫ�ټ�""
								["${Classification} >=14.9", colorTower],
								["${Classification} >=13.9", colorWirCond],
								["${Classification} >=12.9", colorWirGud],
								["${Classification} >=10.9", colorRoad],
								["${Classification} >=9.9", colorRailway],
								["${Classification} >=8.9", colorWater],
								["${Classification} >=5.9", colorBuilding],
								["${Classification} >=4.9", colorHegVeg],
								["${Classification} >= 3.9", colorMedVeg],
								["${Classification} >= 2.9", colorLowVeg],
								["${Classification} >= 1.9", colorGround],
								["true", colorUnclass]
							]
				},
				pointSize: ptnSize
				//pointSize : this.value
			});
			
		//5.
		tileset5.style = new Cesium.Cesium3DTileStyle({
				color :  {
							conditions: [
								["${Classification} >=16.9", colorUnclass],
								["${Classification} >=15.9", colorHegptn],                        //hexToRgba�Ѿ����ص��Ǹ�string�� ����Ҫ�ټ�""
								["${Classification} >=14.9", colorTower],
								["${Classification} >=13.9", colorWirCond],
								["${Classification} >=12.9", colorWirGud],
								["${Classification} >=10.9", colorRoad],
								["${Classification} >=9.9", colorRailway],
								["${Classification} >=8.9", colorWater],
								["${Classification} >=5.9", colorBuilding],
								["${Classification} >=4.9", colorHegVeg],
								["${Classification} >= 3.9", colorMedVeg],
								["${Classification} >= 2.9", colorLowVeg],
								["${Classification} >= 1.9", colorGround],
								["true", colorUnclass]
							]
				},
				pointSize: ptnSize
				//pointSize : this.value
			});
			
		//6.
		tileset6.style = new Cesium.Cesium3DTileStyle({
				color :  {
							conditions: [
								["${Classification} >=16.9", colorUnclass],
								["${Classification} >=15.9", colorHegptn],                        //hexToRgba�Ѿ����ص��Ǹ�string�� ����Ҫ�ټ�""
								["${Classification} >=14.9", colorTower],
								["${Classification} >=13.9", colorWirCond],
								["${Classification} >=12.9", colorWirGud],
								["${Classification} >=10.9", colorRoad],
								["${Classification} >=9.9", colorRailway],
								["${Classification} >=8.9", colorWater],
								["${Classification} >=5.9", colorBuilding],
								["${Classification} >=4.9", colorHegVeg],
								["${Classification} >= 3.9", colorMedVeg],
								["${Classification} >= 2.9", colorLowVeg],
								["${Classification} >= 1.9", colorGround],
								["true", colorUnclass]
							]
				},
				pointSize: ptnSize
				//pointSize : this.value
			});
			
		//7.
		tileset7.style = new Cesium.Cesium3DTileStyle({
				color :  {
							conditions: [
								["${Classification} >=16.9", colorUnclass],
								["${Classification} >=15.9", colorHegptn],                        //hexToRgba�Ѿ����ص��Ǹ�string�� ����Ҫ�ټ�""
								["${Classification} >=14.9", colorTower],
								["${Classification} >=13.9", colorWirCond],
								["${Classification} >=12.9", colorWirGud],
								["${Classification} >=10.9", colorRoad],
								["${Classification} >=9.9", colorRailway],
								["${Classification} >=8.9", colorWater],
								["${Classification} >=5.9", colorBuilding],
								["${Classification} >=4.9", colorHegVeg],
								["${Classification} >= 3.9", colorMedVeg],
								["${Classification} >= 2.9", colorLowVeg],
								["${Classification} >= 1.9", colorGround],
								["true", colorUnclass]
							]
				},
				pointSize: ptnSize
				//pointSize : this.value
			});
			
		//8.
		tileset8.style = new Cesium.Cesium3DTileStyle({
				color :  {
							conditions: [
								["${Classification} >=16.9", colorUnclass],
								["${Classification} >=15.9", colorHegptn],                        //hexToRgba�Ѿ����ص��Ǹ�string�� ����Ҫ�ټ�""
								["${Classification} >=14.9", colorTower],
								["${Classification} >=13.9", colorWirCond],
								["${Classification} >=12.9", colorWirGud],
								["${Classification} >=10.9", colorRoad],
								["${Classification} >=9.9", colorRailway],
								["${Classification} >=8.9", colorWater],
								["${Classification} >=5.9", colorBuilding],
								["${Classification} >=4.9", colorHegVeg],
								["${Classification} >= 3.9", colorMedVeg],
								["${Classification} >= 2.9", colorLowVeg],
								["${Classification} >= 1.9", colorGround],
								["true", colorUnclass]
							]
				},
				pointSize: ptnSize
				//pointSize : this.value
			});
			
			//ʵ��tileset��style����
			viewer.scene.primitives.update(tileset);
			viewer.scene.primitives.update(tileset2);
			viewer.scene.primitives.update(tileset3);
			viewer.scene.primitives.update(tileset4);
			viewer.scene.primitives.update(tileset5);
			viewer.scene.primitives.update(tileset6);
			viewer.scene.primitives.update(tileset7);
			viewer.scene.primitives.update(tileset8);
			viewer.scene.primitives.show=true;
		
		
	});
	
	
	//�������ɫ�������϶�
	function dragFunc(id) {
		var Drag = document.getElementById(id);
		Drag.onmousedown = function(event) {
			var ev = event || window.event;
			event.stopPropagation();
			var disX = ev.clientX - Drag.offsetLeft;
			var disY = ev.clientY - Drag.offsetTop;
			document.onmousemove = function(event) {
				var ev = event || window.event;
				Drag.style.left = ev.clientX - disX + "px";
				Drag.style.top = ev.clientY - disY + "px";
				Drag.style.cursor = "move";
        };
    };
    Drag.onmouseup = function() {
        document.onmousemove = null;
        this.style.cursor = "default";
    };
};
	dragFunc("colorClassify");           //ʵ�ֺ���
	dragFunc("big"); 					//ʵ�ֹ��ߴ���Ҳ�����϶�
	dragFunc("flood-sim-window");		//ʵ����ûģ�ⴰ��Ҳ�����϶�
	
	//�����ԭ������ɫ��ť��ʵ����ɫ�ص�ԭ������ɫ
	$('#undoClassify').click(function(){
		tileset.style = new Cesium.Cesium3DTileStyle();
		tileset2.style = new Cesium.Cesium3DTileStyle();
		tileset3.style = new Cesium.Cesium3DTileStyle();
		tileset4.style = new Cesium.Cesium3DTileStyle();
		tileset5.style = new Cesium.Cesium3DTileStyle();
		tileset6.style = new Cesium.Cesium3DTileStyle();
		tileset7.style = new Cesium.Cesium3DTileStyle();
		tileset8.style = new Cesium.Cesium3DTileStyle();
		viewer.scene.primitives.update(tileset);
			viewer.scene.primitives.update(tileset2);
			viewer.scene.primitives.update(tileset3);
			viewer.scene.primitives.update(tileset4);
			viewer.scene.primitives.update(tileset5);
			viewer.scene.primitives.update(tileset6);
			viewer.scene.primitives.update(tileset7);
			viewer.scene.primitives.update(tileset8);
			viewer.scene.primitives.show=true;
	});
	
	//�򿪹�����
	$('#tool-switch').click(function () {
		var bigTool = document.getElementById('big');
		if(bigTool.style.display != 'block')
		{
			bigTool.style.display = 'block';
		}
	});
	
	
	//�رչ�����
	
	$('#tool-close').click(function () {
		var bigTool = document.getElementById('big');
		if(bigTool.style.display != 'none')
		{
			bigTool.style.display = 'none';
		}
	});
	
	//���������ť����������ʾ
	$('#opera-switch').click(function () {
		var mask = document.getElementById('mask-load2');
		if(mask.style.display != 'block')
		{
			mask.style.display = 'block';
		}
	});
	
	//��������ط���ʾ�ر�
	$('#mask-load2').click(function () {
		$("#mask-load2").hide();
	});
	
	//�򿪰���
	$('#info-switch').click(function () {
		var intro = document.getElementById('intro-box');
		if(intro.style.display != 'block')
		{
			intro.style.display = 'block';
		}
	});
	
	//�رհ�������1
	$('#helpBtn').click(function () {
		var intro = document.getElementById('intro-box');
		if(intro.style.display != 'none')
		{
			intro.style.display = 'none';
		}
	});
	
	//�򿪷�����
	$('#share-switch').click(function () {
		var share = document.getElementById('modal-content');
		if(share.style.display != 'block')
		{
			share.style.display = 'block';
		}
	});
	
	//�رշ�����
	
	$('#shareBtn').click(function () {
		var share = document.getElementById('modal-content');
		if(share.style.display != 'none')
		{
			share.style.display = 'none';
		}
	});
	
	
	//���Ʒ��������
	$('#copyBtn').click(function () {
		var copyText =document.getElementById("input_dlink");
		copyText.select(); // ѡ���ı�
		document.execCommand("copy"); // ִ���������������
		alert("�ѳɹ����Ƶļ����壡");

	});
	
	
	//����ˮ����ɫ��������һ��
	function getColorRamp() {                                                                                                                                                                                                                                
			var ramp = document.createElement('canvas');
			ramp.width = 100;
			ramp.height = 1;
			var ctx = ramp.getContext('2d');

			//var values =  elevationRamp ;
			/*�ɾ���ˮ
			var my_gradient=ctx.createLinearGradient(0,0,17,0);
			my_gradient.addColorStop(1,"#336666a1");
			my_gradient.addColorStop(0.5,"#7b9ce8a1");//�ÿ�#87CEFA
			my_gradient.addColorStop(0,"black");
			ctx.fillStyle=my_gradient;
			ctx.fillRect(0,0,15,100);
			*/
			var my_gradient=ctx.createLinearGradient(0,0,17,0);
			my_gradient.addColorStop(1,"#d2a68cad");      //#336666a1
			my_gradient.addColorStop(0.5,"#da9167db");//�ÿ�#87CEFA    #7b9ce8a1  
			my_gradient.addColorStop(0,"black");
			ctx.fillStyle=my_gradient;
			ctx.fillRect(0,0,15,100);
			return ramp;
		};
		
		//ģ����div��ʱ��ʧ
		function codefans(){
			var box=document.getElementById("flood-result");
			if(box.style.display !='none')
			{
				box.style.display="none";
			}				
		};
		
		//ģ����div��ʱ��ʾ
		function codefans2(){
			var box=document.getElementById("flood-result");
			if(box.style.display !='block')
			{
				box.style.display="block";
			}	
			setTimeout("codefans()",2000);
		};
		
		
	
		//��ȡ���Ǹ�text�е�ֵ��string Ҫת��number��Ҫshader�ᱨ��
		var minHeight = 1100.0; // approximate dead sea elevation
		//var maxHeight = Number(document.getElementById("water-height").value); // approximate everest elevation
		
		//var contourColor = Cesium.Color.RED.clone();
		//var contourUniforms = {};
		//var shadingUniforms = {};
		function getElevationContourMaterial(a) {
			// Creates a composite material with both elevation shading and contour lines
			//�������и߳���Ӱ�������ߵĸ��ϲ���
			return new Cesium.Material({
				fabric: {
					//type: 'ElevationColorContour',
					//materials: {
					//	contourMaterial: {
					//		color: contourColor,
					//		spacing:'150',
					//		width: '2px'
							
					//	},
						//elevationRampMaterial: {
							type: 'ElevationRamp',
							uniforms : {
								image: getColorRamp(),
								minimumHeight: minHeight,
								maximumHeight: a	   
								}
						//	}
					
				},
				translucent: false
			});
		};
		
		var countHeight = 1;                														//�߶ȼ�����
		var floodHeight = Number(document.getElementById("water-height").value);                   //�����ˮ�͵ĺ��θ߶�
		var countTime = 100//(floodHeight - minHeight)/100-1;                                           //ģ��ʱ��
		var resultTime = countTime+1;
		
		
		/*
		function changeGlobeMaterial(globe,time){
			if(countTime != 0)
			{
				viewer.scene.targetFrameRate = 100;
				viewer.scene.requestRender();
				//Set bounds of our simulation time
				//���ÿ�ʼʱ�䣬�Ҿ����������ʹ��Cesium.JulianDate.now(new Cesium.JulianDate())��ֱ�ӻ�ȡϵͳ��ǰʱ��
				var start = Cesium.JulianDate.now(new Cesium.JulianDate());
				//����ֹͣʱ�䣨��ʼʱ�䣬����ʱ�䣬���ؽ�������ͣ�
				var stop = Cesium.JulianDate.addSeconds(start, 100, new Cesium.JulianDate());

				//Make sure viewer is at the desired time.
				//��֤�Ǹ�viewer�����ڵ�ʱ��
				viewer.clock.startTime = start.clone();
				viewer.clock.stopTime = stop.clone();
				viewer.clock.currentTime = start.clone();
				//����ѭ��
				viewer.clock.clockRange = Cesium.ClockRange.UNBOUNDED; //Loop at the end
				viewer.clock.multiplier = 1;
				viewer.clock.shouldAnimate = true;
				
				//Set timeline to simulation bounds
				//����ģ��ʱ�䷶Χ
				//viewer.timeline.zoomTo(start, stop);
				
				//Create a simple numeric SampledProperty that uses third degree Hermite Polynomial Approximation
				var property = new Cesium.SampledProperty(Number);
				property.setInterpolationOptions(
					{
						interpolationDegree : 50,
						interpolationAlgorithm :Cesium.LinearApproximation
					});

				//Populate it with data
				//���������
				property.addSample(start, 1400.0);
				property.addSample(stop, floodHeight);
				//alert(floodHeight);
				//alert("floodHeight="+floodHeight);
				var nowTime = Cesium.JulianDate.now(new Cesium.JulianDate());
				
				

				//Retrieve an interpolated value
				var result = property.getValue(nowTime);
				//alert("time="+time+"result="+result);
				globe.material =  new Cesium.Material({
					fabric : {
						type: 'ElevationRamp',
							uniforms : {
								image: getColorRamp(),
								minimumHeight: minHeight,
								maximumHeight: result   
								}
					},
					translucent: true
				});
				countTime--;
				//alert(time);
				//alert("countTime="+countTime);
				//alert("countHeight="+countHeight);
				//alert(Number(minHeight + Number(countHeight*100)));
			}
			//else
			//{
			//	var material0 = getElevationContourMaterial(1200);
			//	globe.material = material0;
			//	globe.material.color = Cesium.Color.AQUAMARINE;
			//}
		}*/
		
		function changeTime(){
            //setInterval()��ʱ���Ĺر�
				if(countTime<=0){
				
					window.clearInterval(interval);													//�����ʱ��
					
				}
				//��ʼִ��ÿ������100�׵Ĳ���
				var material = getElevationContourMaterial(Number(minHeight + Number(countHeight*100)));
				//var b = Number(minHeight + Number(countHeight*100));
				//alert(b);
				globe.material = material;
				countHeight++;
				countTime--;
				
			}
		
		
		function alertValue()
		{
			//countHeight = 1;                														//�߶ȼ�����
			//floodHeight = Number(document.getElementById("water-height").value);                   //�����ˮ�͵ĺ��θ߶�
			//countTime = (floodHeight - minHeight)/100-1;                                           //ģ��ʱ��
			/*
			//���ı����л�ȡ��ֵҪ������Ŷ��� ��Ȼһֱ���ǻ�ȡ��������ǰĬ�ϵ�value
			var floodHeight = Number(document.getElementById("water-height").value);
			var material = getElevationContourMaterial(floodHeight);
			globe.material = material;
			*/
			//���²���Ӧ��Ϊȫ�ֱ���
			//var countHeight = 1;                														//�߶ȼ�����
			//var floodHeight = Number(document.getElementById("water-height").value);                   //�����ˮ�͵ĺ��θ߶�
			//var countTime = (floodHeight - minHeight)/100-1;                                           //ģ��ʱ��
			
			viewer.scene.targetFrameRate = 100;
			viewer.scene.requestRender();
			var interval = self.setInterval("changeTime()",2000);										//�����ʱ����ÿһ��ı�һ��globe material
			
			setTimeout("codefans2()",Number(resultTime)*2000);	
			
			//viewer.scene.preUpdate.addEventListener(function(scene, time) {
				//changeGlobeMaterial(globe,time);
		//});
		}
		
		
		//����˳�ˮ��ģ�⣬����Ⱦ�߶Ȼص�1100
		$('#flood-stop-btn').click(function () {
			
			var material0 = getElevationContourMaterial(1200);
			globe.material = material0;		
			
		});
		
		/*
		$('#result-close').click(function () {
			var floodResult = document.getElementById('flood-result');                                                   //ʱ�䵽�˾ͻᵯ����ʾģ�����
					if(floodResult.style.display != 'none')
					{
						floodResult.style.display = 'none';
						
					}
		});
		*/