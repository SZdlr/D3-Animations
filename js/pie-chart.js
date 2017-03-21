var data = [30,28,20,12,10];
var color = ["#fff","#dde3e3","#909499","#666C76","#3C4554"];
var text = ["Programming","Animation","UX","Design"];

var svg = d3.select("body").append("svg")
	.attr("width", "80%")
	.attr("height", "70%")
	.style("margin","5% 10% 0 10%")
;

var outerRadius = 150;
var innerRadius = 0;
var pie = d3.layout.pie();

var arc = d3.svg.arc()
	.outerRadius(outerRadius)
	.innerRadius(innerRadius)
;

var arcs = svg.selectAll("g.arc")
	.data(pie(data))
	.enter().append("g")
	.attr("class","arc")
	.attr("transform","translate("+outerRadius+", "+outerRadius+")")
;
arcs.append("path")
	.attr("fill", function(d,i) { return color[i]; })
	.attr("d",arc)
;
arcs.append("text")
	.attr("transform",function(d) { return "translate("+arc.centroid(d)+")"; })
	.attr("text-anchor","middle")
	.attr("fill","#6EA5DB")
	.text(function(d) { return d.value; })
;