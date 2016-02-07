window.onload = function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	//Make the canvas occupy the full page
	var W = window.innerWidth, H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	var particles = [];
	
	//Lets create some particles now
	var particle_count = 10;
	for(var i = 0; i < particle_count; i++) {
		particles.push(new particle());
	}
	
	function particle() {
		//speed, life, location, life, colors
		//speed range = -2.5 to 2.5 for x
		//lets change the Y speed to make it look like a flame
		this.speed = {x: 2.5+Math.random()*5, y: -15+Math.random()*10};
		//location = center of the screen
		this.location = {x: W/2, y: H/2};
		//radius range = 10-30
		this.radius = 10+Math.random()*5;
		//life range = 20-30
		this.life = 1000;
		this.remaining_life = this.life;
		//colors
		
	}
	
	console.log(particles);
}