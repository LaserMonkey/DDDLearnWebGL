let webglDemo = {

	init: function() {
		let canvas = document.getElementById('demo')
		let canvasType = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"]
		let glcxt = null
		for(var i = 0; i < canvasType.length; i++) {
			try {
				glcxt = canvas.getContext(canvasType[i])
			} catch(e) {
				console.log(e)
			}
			if(glcxt) {
				break
			}
		}
		glcxt.clearColor(0, 0, 0, 1)
		glcxt.clear(glcxt.COLOR_BUFFER_BIT)
	}
}

window.onload = function() {
	webglDemo.init()
}