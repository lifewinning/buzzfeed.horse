var width = window.innerWidth
var height = window.innerHeight

// there is literally no good reason to not do this as a fucking PNG but I'm on a cross country flight and I'm bored

var svg = d3.select(".neigh").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + (width/2) + "," + (height/2) +")")

circle = svg.append('g').append("circle")
  .attr("fill", "yellow")
  .attr("id","circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", width/4)

cr = circle[0][0].r.baseVal.value

horse = svg.append('text')
  .attr('fill','black')
  .attr('class','neigh')
  .text('neigh')
  .attr("transform", function(d) { return "rotate(" + -30 + "), translate(-1, +90)" })
  .style("font-size", function(d) { return Math.min(2 * cr, (2 * cr - 8) / this.getComputedTextLength() * 15) + "px"; })
