var photo_list = ['img/photo17.JPG','img/photo18.JPG','img/photo19.JPG','img/photo20.JPG',];
window.addEventListener('load',
	function(event){
		createThumbs();
	}
,false);
function createThumbs(){
	var holder = document.getElementById('thumbsholder');
	
	for (var i=0 ; i<photo_list.length ; i++){
	var img = document.createElement('img');
	img.src = photo_list[i];
	img.width = 80;
	img.className = 'img_small';
	img.addEventListener('click',showPhoto,false);
	holder.appendChild(img); //thumbsholderにimgを足していきます。
	}
	var large = document.getElementById('img_large');
	large.src = photo_list[1];
}
function showPhoto(event){
	var img = event.currentTarget;
	var large = document.getElementById('img_large');
	large.src = img.src;
}
