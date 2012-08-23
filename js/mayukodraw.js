/*
onload = function() {
  
  
  drawLine(pointA,pointB,color1);
  drawTriangle(pointC,pointD, pointE, color2);
};
*/

function drawLine(pointA,pointB,color) {
	/* canvas要素のノードオブジェクト */
	var canvas = document.getElementById('canvassample');
	
	var ctx = canvas.getContext('2d');
	
	ctx.beginPath();
	ctx.strokeStyle = color1;
	ctx.moveTo(pointA[0], pointA[1]);
	ctx.lineTo(pointB[0], pointB[1]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
}

function drawTriangle(pointA,pointB,pointC,angle2,g,color2){
	var canvas = document.getElementById('canvastriangle');
	
	var ctx = canvas.getContext('2d');
	
	ctx.beginPath();
	ctx.fillStyle = color2;
	ctx.strokeStyle = color2;
	
	ctx.translate(g[0], g[1]);
    ctx.rotate(angle2);
    ctx.translate(-g[0], -g[1]);

	//ctx.rotate(angle2);
	ctx.moveTo(pointA[0], pointA[1]);
	ctx.lineTo(pointB[0], pointB[1]);
	ctx.lineTo(pointC[0], pointC[1]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
}

