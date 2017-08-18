// function divs(){
//   var mazeSpot = document.getElementById("a");
//   div = document.createElement('DIV')
//   div.style.height = '80vh';
// 	mazeSpot.appendChild (div);
//  div.addEventListener ('mousemove', function(event){
//  	console.log(event);
// 	 	var x= event.clientX;
// 	 	var y=event.clientY;
//    div.textContent = x+','+y;
// 	 	div.style.backgroundColor='rgb('+x+','+y+ ', 100)';
// 	 });
//  }
// divs();

var add = document.getElementById('add');
function addUser() {
	var numero= document.getElementById("num").value;
	numero =parseInt(numero);
	var numvacio;
	var string = NaN;
	if(numero < 10000000000 && numero > 900000000){
		swal("Bienvenido", "Se ha registrado el usuario" , "success");
	}else if(numero > 10000000000 && numero < 900000000){
		swal({
  				title: "No es un número válido!",
  				text: "I will close in 2 seconds.",
  				timer: 2000,
  				showConfirmButton: false
			});
	}else{
		sweetAlert("No es un número válido", "Intente nuevamente!", "error");
	}
	numero = "";
}

add.onclick = function (){
	addUser();
}


function tab(){
	var mazeSpot = document.getElementById("mazeSpot");
	mazeSpot.innerHTML='';
	var div1 = document.createElement('DIV');
	div1.setAttribute("id", "tablero");
	mazeSpot.appendChild(div1);

	// var div2 = document.createElement('DIV');
	// div2.setAttribute("class", "row");
	// div1.appendChild(div2);

	// var form = document.createElement('FORM');
	// form.setAttribute("class", "col s12");
	// form.setAttribute("id", "espacioTablero")
	// div2.appendChild(form);	
	juego();
}

play.onclick=function(){
	tab();
}

var map1 = [" * * * * * * * * * * * * * * * * * * * * ",
    " * *           * * *             * *   * ",
    " * *             W                 *   * ",
    " *                           *     *   * ",
    " *         *                       *   * ",
    " *   * * * *             *         *   * ",
    " *     *     * *       *   *       *   * ",
    " *   * I 1   * *         *   * * * *   * ",
    " *     *     * *   * *  **           I * ",
    " *   *          *        *         * * * ",
    " *           * ***   *   *     *   * * * ",
    " *       *      *        * *       * * * ",
    " *     * *             ***         * * * ",
    " * *   *           *     *         *   * ",
    " *     *   *      *      *     *       * ",
    " * *        *     *      *         *   * ",
    " * * * * * * * * * * * * * * * * * * * * "];
var x;
var y;
function juego(){
	var tablero = document.getElementById('tablero');
    console.log('Current map', map1);//limpiar tablero
    //rotar titulo
    var tabla = document.createElement('table');
    tabla.border = "0";
    //crea strings en lista
    for (var i = 0; i < map1.length; i++) {
        var fila = document.createElement('tr');
        //crea elementos en string
        for (var j = 0; j < map1[i].length; j++) {
            var celda = document.createElement('td');
            if (map1[i][j]=="*") {
                celda.setAttribute('id','wall');
                // numeros de posiciones --> arriba, abajo, izq ,der
                }else if(map1[i][j]==1|| map1[i][j]==2 || map1[i][j]==3||map1[i][j]==4){
                	celda.setAttribute('class', 'inicio');
                	// y=i;
                	// x=j;   
                }else if(map1[i][j]=="W"){
                	celda.setAttribute('class', 'fin');	
                }else if(map1[i][j]=="I"){
                	celda.setAttribute('class', 'transportar');	
                }else if(map1[i][j]==" "){
                	celda.setAttribute('class', 'espacio');
                }
            var p = document.createElement('p');
            celda.appendChild(p);
            //celda.setAttribute("id", i+","+j)
            
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    tablero.appendChild(tabla); 
    console.log(tablero);
}

 var newPosition;

 function moveForward(){
 	var celdaFinal = map1[2][17];
 	var tablero = document.getElementById("espacioTablero");
 	var img = document.createElement("img");
 	dibujo.innerHTML = "";

 	if(map1[(y -1)][x] != "*" && celdaFinal != map1[(y - 1)][x]){
 		newPosition = (y-1)+","+x;
 		var pos = document.getElementById(newPosition);
 		img.setAttribute("src","assets/img/red51.png");
         pos.appendChild(img);
		
 		console.log(newPosition);
 		y--;
 	}else if(celdaFinal == map1[(y -1)][x]){
 		swal({
 		  title: "Congrats!",
 		  text: "You make it through the maze.",
 		  imageUrl: "assets/img/giphy.gif"
 		});
     	console.log(map1[(y -1)][x]);
 	}
 }

 function moveBackward (){
 	var tablero = document.getElementById("espacioTablero");
 	var img = document.createElement("img");
 	tablero.innerHTML = "";
	
 	if(map1[(y +1)][x] != "*" && celdaFinal != map1[(y +1)][x]){
 		var newPosition = (y+1)+","+x;
 		var pos = document.getElementById(newPosition);
 		img.setAttribute("src","assets/img/red51.png");
         pos.appendChild(img);

 		console.log(newPosition);
 		y++;
 	}
 	else if(celdaFinal == map1[(y +1)][x]){
 		swal({
 		  title: "Congrats!",
 		  text: "You make it through the maze.",
 		  imageUrl: "assets/img/giphy.gif"
 		});
     	console.log(map1[(y +1)][x]);
 	}
 }

 function moveRight (){
 	var tablero = document.getElementById("espacioTablero");
 	var img = document.createElement("img");
 	tablero.innerHTML = "";

 	if(map1[y][(x+1)] != "*" && celdaFinal != map1[y][x+1]){
 		var newPosition = y+","+(x+1);
 		var pos = document.getElementById(newPosition);
 		img.setAttribute("src","assets/img/red51.png");
         pos.appendChild(img);

         console.log(newPosition);
 		x++;
 	}else if(celdaFinal == map1[y][x+1]){
 		swal({
 		  title: "Congrats!",
 		  text: "You make it through the maze.",
 		  imageUrl: "assets/img/giphy.gif"
 		});
     	console.log(map1[y][x+1]);
 	}
 }

 function moveLeft(){
 	var tablero = document.getElementById("espacioTablero");
 	var img = document.createElement("img");
 	tablero.innerHTML = "";

 	if(map1[y][x-1] != "*" && celdaFinal != map1[y][x-1]){
 		var newPosition = y+","+(x-1);
 		var pos = document.getElementById(newPosition);
 		img.setAttribute("src","assets/img/red51.png");
         pos.appendChild(img);
        
         console.log(newPosition);
 		x--;

 	}else if(celdaFinal == map1[y][x-1]){
 		swal({
 		  title: "Congrats!",
 		  text: "You make it through the maze.",
 		  imageUrl: "assets/img/giphy.gif"
 		});
 		console.log(map1[y][x-1]);
 	}
 }

 	document.onkeyup = function(event){
 		if(event.keyCode==37)
 			moveLeft();
 		else if(event.keyCode == 38)
 			moveForward();
 		else if(event.keyCode == 39)
 			moveRight();
 		else if(event.keyCode == 40)
 			moveBackward();
 	}

// muestra(num) {
// 	 var imagen = document.images[num].src
// 	 var comentario = document.images[num].alt
// 	 var grande = document.images["pantalla"]
// 	 var texto = document.getElementById("descripcion")
// 	 grande.src = imagen
// 	 texto.innerHTML = comentario
// }

