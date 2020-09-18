window.onload = function () {
	var slides = document.getElementsByClassName("list_image");
	let count = 0;
	var show = function(){
		if(count < slides.length) {	
			let img = new Image();
			img.src = slides[count].href;
			img.title = slides[count].title;
			document.getElementById("image").src = img.src ;
			document.getElementById("caption").innerHTML = img.title;
			count++;
	}
}	
	setInterval(function(){
				show();
			},2000);		
	}
	