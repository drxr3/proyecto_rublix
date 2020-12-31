// Manejo del DOM

//-------------- Pantalla uno ------------//

let home = document.getElementById('screen').innerHTML = '';
document.getElementById('screen').innerHTML += 
    
`        
<d


iv id="part1">
    <!--funcionamiento y linkeo a información adicional en wikipedia-->
    <h1> Cómo funciona: </h1>
    <p> A partir de la calibracion acordada se envian y reciben mensajes    </p> 
  </div>
</div>
<div id="part2">
<!--interacción con el usuario, petición de nombre-->
  <h2>Nombre de identificacion</h2>
  <input type="text" id="username" placeHolder="aquí">
  <input type="submit" id="btnenter" value="Entrar">
</div>
`

document.getElementById('username').value='';
document.documentElement.scrollTop=0;

//-------------- Pantalla dos ------------//

// mostrar pantalla 2
document.getElementById('btnenter').addEventListener('click', () => {
    let name = document.getElementById('username').value;
    document.getElementById('screen').innerHTML = '';
    document.getElementById('screen').innerHTML += 
    
    `
    <h2 class="greeting"> Hola ${name} elige la calibracion. </h2>

    <h2 class="greeting"> Calibracion:  
      <input type="number" min="1" max="99" placeholder="N°" id="numbbox" value="0">
    </h2>

    <div class="inpradio"> 
      <h3>
        <input id="encode" type="radio" name="change" value="Codificar"
        >Codificar
      </h3>
      <h3>
        <input id="decode" type="radio" name="change" value="Decodificar">Decodificar
      </h3>
    </div>

    </div>
        <!--Donde el usuario escribe el mensaje a decodificar-->
        <input type="text" id="text1">
    <div>

        <!--Botón convertir, que codifica el texto que entrega el usuario-->
        <!-- Trigger/Open The Modal -->
      <input type="submit" id="btnconvert" value="Convertir">

    <div>
      <h2 class="textresult">Resultado:</h2>
        <p id="text2"></p>
    </div>

        <!--caja de texto donde va el correo-->
    <div>
        <input type="email" id="email" placeHolder="Ingresa correo"><input type="submit" id="btnsend" value="Enviar">
    </div>

        <!--Botón que envía a pag.1-->
        <input type="submit" id="btnhome" value="cambiar de usuario">
    `


    // Función que toma valores y, codifica o decodifica seún el radio button seleccionado.
  document.getElementById('btnconvert').addEventListener('click', () => {
    let number = parseInt(document.getElementById('numbbox').value);
    let text = document.getElementById('text1').value;

      if(number === 0){
         alert('por favor selecciona una calibracion');

      } else {
        if (document.getElementById('encode').checked) {
          document.getElementById('text2').innerHTML = `${encode(number,text)}`;
        } else {
          document.getElementById('text2').innerHTML = `${decode(number,text)}`;
        }
      };

    document.getElementById('text1').value = '';
    document.documentElement.scrollTop=0;
});

    document.documentElement.scrollTop=0;

    //volviendo a la pantalla principal
  document.getElementById('btnhome').addEventListener('click', () => {
      document.getElementById('screen').innerHTML = '';
      document.getElementById('screen').innerHTML += 
      
      `
      ${home}
      `

      document.documentElement.scrollTop=0;
  });

  // función que "envía correo"
  document.getElementById('btnsend').addEventListener('click', () => {
    document.getElementById('email').value;
    document.getElementById('email').value = '';
  });
  
});

