var CElement;
const move = function(square){ 
	const elements = document.querySelectorAll(".square")
	elements.forEach(square => {
		square.addEventListener("mousedown", () => {
			square.style.position="absolute"
			CElement = square

			document.onmousemove = (e) => {
				var x = e.pageX 
				var y = e.pageY
				CElement.style.left = x + "px" 
				CElement.style.top = y + "px"
				console.log(CElement)
			}
		});
	});
	document.onmouseup = function(e){
		CElement = null
	}
}

