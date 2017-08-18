
var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"];

var tablero = document.getElementById('tablero');
var x;
var y;

var completo = document.getElementById("completo");
var capturaFinal = document.createElement("final");
capturaFinal.setAttribute("class","ganado");
completo.appendChild(capturaFinal);  

function generar(){
  var tabla=document.createElement('table');
  tabla.border="1";
  for(var i in mapa){
    var fila= document.createElement('tr');
    for (var j = 0; j < mapa[i].length; j++) {
      var celda = document.createElement('td');
      if(mapa[i][j] == "*"){
      	//maze top border - left border - right border - bottom border
      	if(i == 0){
      		if(j == 0){
      			celda.setAttribute('class','asterisco-combinado1');
      		}else if (j == 17){
      			celda.setAttribute('class','asterisco-combinado4');
      		}
      		else{
      			celda.setAttribute('class','asterisco-top');
      		}
      	}else if (i == 10){
      		if(j == 0){
      			celda.setAttribute('class','asterisco-combinado2');
      		}else if(j == 17){
      			celda.setAttribute('class','asterisco-combinado3');
      		}
      		else{
      			celda.setAttribute('class','asterisco-bottom');
      		}
      	}else if (j == 0){
      		celda.setAttribute('class','asterisco-left');
      	}else if (j == 17){
      		celda.setAttribute('class','asterisco-right');
      	}else {
      		celda.setAttribute('class','asterisco-t');
      	}
      }else if(mapa[i][j] == "_"){
      	celda.setAttribute('class','espacio');
      	var t = document.createTextNode(" ");
      	celda.appendChild(t);  
      }else if(mapa[i][j] == "o"){
      	celda.setAttribute('class','inicio');
      	y = i;
      	x = j;
      	var img =document.createElement("img");
        img.src = "assets/img/red51.png";
        celda.appendChild(img);
      }else if(mapa[i][j] == "W"){
      	celda.setAttribute('class','fin');
      	var nest =document.createElement("img");
        nest.src = "assets/img/nest1.png";
        celda.appendChild(nest);
      }
      celda.setAttribute("id", i +","+ j);
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  tablero.appendChild(tabla);
}

generar();

var step = 50;
var step1 = 36;


//Posiciones iniciales
	y = 9;
	x = 1;
	var position1 = y+","+x;
	var newPosition;
	var celdaFinal = mapa[9][16];


function moveForward(){
	var dibujo = document.getElementById("dibujo");
	var img = document.createElement("img");
	dibujo.innerHTML = "";

	if(mapa[(y -1)][x] != "*" && celdaFinal != mapa[(y - 1)][x]){
		newPosition = (y-1)+","+x;
		var pos = document.getElementById(newPosition);
		img.setAttribute("src","assets/img/red51.png");
        pos.appendChild(img);
		
		console.log(newPosition);
		y--;
	}else if(celdaFinal == mapa[(y -1)][x]){
		swal({
		  title: "Congrats!",
		  text: "You make it through the maze.",
		  imageUrl: "assets/img/giphy.gif"
		});
    	console.log(mapa[(y -1)][x]);
	}
}

function moveBackward (){
	var dibujo = document.getElementById("dibujo");
	var img = document.createElement("img");
	dibujo.innerHTML = "";
	/*var y= red.offsetTop;
	if(y <= 525){
		y = y + step;
		red.style.top = y + "px";
	}else{
		red.style.top = y + "px";
	}*/
	if(mapa[(y +1)][x] != "*" && celdaFinal != mapa[(y +1)][x]){
		var newPosition = (y+1)+","+x;
		var pos = document.getElementById(newPosition);
		img.setAttribute("src","assets/img/red51.png");
        pos.appendChild(img);

		console.log(newPosition);
		y++;
	}
	else if(celdaFinal == mapa[(y +1)][x]){
		swal({
		  title: "Congrats!",
		  text: "You make it through the maze.",
		  imageUrl: "assets/img/giphy.gif"
		});
    	console.log(mapa[(y +1)][x]);
	}
}

moveRight.onclick = function (){
	var dibujo = document.getElementById("dibujo");
	var img = document.createElement("img");
	dibujo.innerHTML = "";
	/*var x= red.offsetLeft;
	if(x <= 775){
		x = x + step1;
		red.style.left = x + "px";
	}else{
		red.style.left = x + "px";
	}*/
	if(mapa[y][(x+1)] != "*" && celdaFinal != mapa[y][x+1]){
		var newPosition = y+","+(x+1);
		var pos = document.getElementById(newPosition);
		img.setAttribute("src","assets/img/red51.png");
        pos.appendChild(img);

        console.log(newPosition);
		x++;
	}else if(celdaFinal == mapa[y][x+1]){
		swal({
		  title: "Congrats!",
		  text: "You make it through the maze.",
		  imageUrl: "assets/img/giphy.gif"
		});
    	console.log(mapa[y][x+1]);
	}
}

moveLeft.onclick = function (){
	var dibujo = document.getElementById("dibujo");
	var img = document.createElement("img");
	dibujo.innerHTML = "";
	/*var x= red.offsetLeft;
	if(x >= 261){
		x = x - step1;
		red.style.left = x + "px";
	}else{
		red.style.left = x + "px";
	}*/
	if(mapa[y][x-1] != "*" && celdaFinal != mapa[y][x-1]){
		var newPosition = y+","+(x-1);
		var pos = document.getElementById(newPosition);
		img.setAttribute("src","assets/img/red51.png");
        pos.appendChild(img);
        
        console.log(newPosition);
		x--;
	}else if(celdaFinal == mapa[y][x-1]){
		swal({
		  title: "Congrats!",
		  text: "You make it through the maze.",
		  imageUrl: "assets/img/giphy.gif"
		});
		console.log(mapa[y][x-1]);
	}
}

window.onload = function(){
	document.onkeyup = function(event){
		if(event.keyCode==37)
			moveLeft.click();
		else if(event.keyCode == 38)
			moveForward.click();
		else if(event.keyCode == 39)
			moveRight.click();
		else if(event.keyCode == 40)
			moveBackward.click();
	}
};