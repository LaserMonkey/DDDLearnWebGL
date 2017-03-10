let webglDemo = {

	init: function() {
		let canvas = document.getElementById('demo')
		let canvasType = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"]
		let glcxt = null
		for(var i = 0; i < canvasType.length; i++) {
			try {
				glcxt = canvas.getContext(canvasType[i])
			} catch(e) {

			}
			if(glcxt) {
				break
			}
		}
		console.log(glcxt)
	}
}

window.onload = function() {
	webglDemo.init()
}