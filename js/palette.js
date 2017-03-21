var colors = ["", "#1b1b22", "#3c4554", "#666c76", "#b9bbbb", "#e3e2dd"];

var svg = d3.select("body").append("svg")
	.attr("width", "80%")
	.attr("height", "70%")
	.style("margin","5% 10% 0 10%")
;

var imgBG = svg.append("rect")
	.attr("width", "100%")
	.attr("height", "100%")
	.attr("text-anchor","middle")
	.style("fill", "#1b1b22")
;

var imgLogo = svg.append("svg:image")
	.attr("x","25%")
	.attr("y","25%")
	.attr("width","50%")
	.attr("height","50%")
	
	.style("opacity",0.75)
	.attr("xlink:href","img/flower_white.png")
	
	.on("mouseover", pulse)
	.on("mouseout", pulseReverse)
	.on("click", animateDetails)
;

function pulse(d){
	imgLogo.transition()
		.duration(600)
		.style("opacity",1)
	;
}
function pulseReverse(d){
	imgLogo.transition()
		.duration(600)
		.style("opacity",0.75)
	;
}

function animateDetails(d){
	this.parentNode.appendChild(this);
	imgLogo.style("pointer-events", "none")
		.on("mouseover", pulseReverse)
		.on("mouseout", pulse)
		.on("click", animateDetailsReverse)
		.transition()
			.duration(600)
			.attr("transform","translate("+window.innerWidth*0.035+","+window.innerWidth*0.050+")scale(0.35)")
			.style("opacity",1)
		.transition().attr("transform","translate("+window.innerWidth*0.035+","+window.innerWidth*0.050+")scale(0.40)")
		.transition().style("pointer-events", "")
	;
	
	imgBG.transition()
			.duration(600)
			.attr("transform","translate("+window.innerWidth*0.035+","+window.innerWidth*0.050+")scale(0.35)")
		.transition().attr("transform","translate("+window.innerWidth*0.035+","+window.innerWidth*0.050+")scale(0.40)")
	;
	
	svg.append("line")
		.attr("x1","25%")
		.attr("y1","63%")
		.attr("x2","25%")
		.attr("y2","63%")
		
		.style("stroke", "#3c4554")
		.style("stroke-opacity",0)
		.transition()
			.delay(800)
			.duration(600)
			.style("stroke-opacity",1)
			.attr("x1","0%")
			.attr("x2","50%")
	;
	svg.append("line")
		.attr("x1","55%")
		.attr("y1","50%")
		.attr("x2","55%")
		.attr("y2","50%")
		
		.style("stroke", "#3c4554")
		.style("stroke-opacity",0)
		.transition()
			.delay(1500)
			.duration(600)
			.style("stroke-opacity",1)
			.attr("y1","0")
			.attr("y2","100%")
	;
	
	svg.selectAll("text")
		.data(colors)
		.enter().append("text")
			.attr("x","85%")
			.attr("y", function(d,i) { return window.innerHeight*0.039+i*window.innerHeight*0.117; })
			.attr("text-anchor","middle")
			
			.attr("fill", "black")
			.attr("font-family", "Lato")
			.style("font-weight", "light")
			.attr("font-size", "150%")
			.text(function(d) { return d; })
			
			.style("fill-opacity",0)
			.transition()
				.delay(function(d,i) { return 1700+i*100})
				.duration(600)
				.style("fill-opacity",1)
	;
	
	svg.append("text")
			.attr("x","25%")
			.attr("y","80%")
			.attr("text-anchor","middle")
			
			.attr("fill", "black")
			.attr("font-family", "Medula One")
			.attr("font-size", "400%")
			.text("Medula One")
			
			.style("fill-opacity",0)
			.transition()
				.delay(1100)
				.duration(600)
				.style("fill-opacity",1)
	;
	svg.append("text")
			.attr("x","25%")
			.attr("y","93%")
			.attr("text-anchor","middle")
			
			.attr("fill", "black")
			.attr("font-family", "Lato")
			.attr("font-size", "300%")
			.text("Lato")
			
			.style("fill-opacity",0)
			.transition()
				.delay(1200)
				.duration(600)
				.style("fill-opacity",1)
	;
	
	svg.selectAll("rect")
		.data(colors)
		.enter().append("rect")
			.attr("width", "10%")
			.attr("height", "8%")
			.attr("x","65%")
			.attr("y", function(d,i) { return i*window.innerHeight*0.117; })
			
			.style("fill", function(d) { return d; })
			.style("fill-opacity",0)
			.transition()
				.delay(function(d,i) { return 1700+i*100; })
				.duration(600)
				.style("fill-opacity",1)
	;
}

function animateDetailsReverse(d){
}