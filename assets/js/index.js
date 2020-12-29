//Manejo del dom

//-----panatalla uno-----//

let home=document.getElementById('screen').innerHTML='';
document.getElementById('screen').innerHTML+=`

<div id="parte1">
    <!--Funcionamiento y linkeo a la informacion adicional -->
    <h1>como funciona: </h1>
    <p> Esta app usa el metodo de <strong>Codigo cesar</strong> una vez qye escribas tu mensaje de texto,puedes cifrarlo o descigfrarlo segun tu eleccion
    </p>
</div>    

<div id="parte2">
    <!--interacion del usuario, peticion de nombre-->
    <h2>Escribe tu nombre</h2>
    <input type="text"  id="username" placeholder= "Escribe tu nombre aqui">
    <input type="submit" id="btnenter" value="Entrar">
</div>    

`

document.getElementById('username').value='';
document.getElementById.scrollTop=0;//limpia la pantalla o la reinicia hacia arriba


//_________________________panatalla dos

document.getElementById('btnenter').addEventListener('click'),() =>{
    let name=document.getElementById('username').value;
    document.getElementById('screen').innerHTML='';
    document.getElementById('screen').innerHTML += `
       <h2 class="greeting">Hola ${name} elige un numero de encriptacion y escribe tu mensaje </h2>
      
      
       <h2 class="greeting">N° de desplazamiento</h2>
       <input type="number" min="1" max="99" placeholder="N°" id="numbox" value="1">


             


    `
}


