//putting all the ponies in one place
horses = ["buzzfeed","theintercept","voxdotcom","propublica","nytimes","thisisfusion","tronc"]

div = document.createElement('div')
div.id = 'footer'
div.className = 'neigh'
div.width = '100%'
div.innerHTML = "the horse news ring: "

document.body.appendChild(div)

horses.forEach(function(h){
	horse = document.createElement('a')
	horse.href = 'http://'+h+'.horse'
	horse.innerHTML = h+'.horse'
	span = document.createElement('span')
	//never not with the papayawhip tbh
	span.style.backgroundColor = 'papayawhip'
	span.style.padding = '5px'
	span.appendChild(horse)
	div.appendChild(span)
	if (window.location == horse.href){
		span.removeChild(horse)
	}
})