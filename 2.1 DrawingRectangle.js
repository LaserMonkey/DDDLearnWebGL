let canvasDemo = {

	init: function() {
		let canvas = document.getElementById('demo')
		if(!canvas) {
			console.log("未有找到相应html标签")
		}

		let ctx = canvas.getContext('2d')
		this.drawe(ctx)
	},
	drawe: function(ctx) {
		ctx.fillStyle = 'rgba(0, 0, 255, 0.6)'
		ctx.fillRect(120, 10, 150, 150)
	}
}

window.onload = function() {

	canvasDemo.init()
}