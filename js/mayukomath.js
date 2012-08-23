
function calculateDistance(pointA, pointB){
	return Math.sqrt(Math.exp(pointA[0]-pointB[0]) + Math.exp(pointA[1]-pointB[1]) + Math.exp(pointA[2]-pointB[2]));
}

function calculateTriangleArea(pointA, pointB, pointC) {
	x = calculateDistance(pointA,pointB);
    
    h2 = calculateDistance(pointB,pointC);
    
	halfx = x/2;
    
    h = Math.sqrt(Math.exp(h2)+Math.exp(halfx));
    
    return (x*h)/2;
}

//ランダムな座標を生成
function randomPoint(){
	var ranpoi = Math.floor(Math.random()*200);
	return ranpoi;
}

function randomHexadecimalNumber(){
	var hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
	var hexnumber = '';
	for ( cnt = 1 ; cnt <= 6 ; cnt++ ) {
	   var ranNum = Math.floor(Math.random()*16);
	   hexnumber = hexnumber + hex[ranNum];
	}
	
	return hexnumber;
}

//三角形の重心を計算する
//input: 三角形の頂点 ABC
//output: 三角形の重心 G=[x,y]
function calculateG(pointA,pointB,pointC){
	var middlepoint = calculateMiddlepoint(pointA,pointB);
	
	var distC = calculateDistance(pointB,pointC);
	var distB = calculateDistance(middlepoint,pointC);
	var distA = calculateDistance(middlepoint,pointB);
	
	var distmg = distB*1/3;
	gY = middlepoint[1] + distmg;
	gX = middlepoint[0];
	var G = [gX,gY];
	return G;
}

function calculateMiddlepoint(pointA,pointB){
	for(var i=0; i<2; i++){
		pointC[i] = (pointA[i] + pointB[i])/2;
	}
	var middlepoint = [pointC[0],pointC[1]];
	return middlepoint;
}

function angle() {
	var randomangle = ( Math.random() * 1 * Math.PI / 180 );
	return randomangle;
}

