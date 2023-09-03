// ---------------------
// ----- Variables -----
// ---------------------
//Camnpos de texto

// ----- Select Menu Dinamic -----
const selectSr = document.getElementById("selectSr"); //Seleccion sr/sra
const selectNov = document.getElementById("selectNov"); //Seleccion Novedad
const selectColor = document.getElementById('selectColor'); //Seleccion color

// Contenidos
const textArea = document.getElementById("textArea");
const content1 = document.querySelector('#content1');
const content2 = document.querySelector('#content2');
const content3 = document.querySelector('#content3');
const content4 = document.querySelector('#content4');
// Botones
const copyBtn = document.getElementById('copyBtn');
const clearBtn = document.getElementById('clearBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const reposDiv = document.getElementById('reposDiv');
// Extra Variable
let count = 0;

// ----------------------------------------------------
// ------------------- Menu Tab -----------------------
// ----------------------------------------------------
var btnSrc = document.getElementsByClassName("tab");
  for (let i = 0; i < btnSrc.length; i++) {
    btnSrc[i].addEventListener('click', function() {
      document.getElementById('tab0Content').style.display="none";
      document.getElementById('tab1Content').style.display="none";
      document.getElementById('tab2Content').style.display="none";
      //document.getElementById('tab3Content').style.display="none";
      document.getElementById(`tab${i}Content`).style.display="block"; 
    })
}
// ----------------------------------------------------


// ----------------------------------------------------
// --------------- Selector Option --------------------
// ----------------------------------------------------

// ----- Select Menu Dinamic -----
const select1 = document.getElementById('select1A');
const select2 = document.getElementById('select1B');
const select3 = document.getElementById('select1C');

const selectOpt1 = document.getElementById('select2A'); //Seleccion proceso realizado
const selectOpt2 = document.getElementById('selectOpt2'); //Seleccion Escalamiento
const selectOpt3 = document.getElementById('selectOpt3'); //Seleccion Servicio funcional

const selectOpt1A = document.getElementById('selectOpt1A'); // proceso realizado
const spanOpt3 = document.getElementById('spanOpt3'); // Textfield No. Caso
// Selector Change 2
select1.addEventListener("change", selectOption2);
  function selectOption2 () {
    select2.style.display = 'none';
    SelectSpan1.style.display = 'none';
    select2.innerHTML = '<option value="">Seleccione una opción</option>';
    select3.style.display = 'none';
    select3.innerHTML = '<option value="">Seleccione una opción</option>';

    if (select1.value === 's1A.1') { //select 1 opcion 1
      select2.style.display = 'inline-block';
      select2.innerHTML += '<option value="s1B.1.1">No Contacto</option>'; //select 2 opcion 1
      select2.innerHTML += '<option value="s1B.1.2">Contacto</option>'; //select 2 opcion 2
      select2.innerHTML += '<option value="s1B.1.3">Placa</option>';
      select2.innerHTML += '<option value="s1B.1.4">Consumos</option>';
      select2.innerHTML += '<option value="s1B.1.5">Sin cobertura</option>';
      select2.innerHTML += '<option value="s1B.1.6">IMEI no compatible</option>';
      select2.innerHTML += '<option value="s1B.1.7">Sin comprobante</option>';

    } else if (select1.value === 's1A.2') { //select 1 opcion 2
      select2.style.display = 'inline-block';
      select2.innerHTML += '<option value="s1B.2.1">Notas Incompletas</option>'; //select 2 opcion 1
      select2.innerHTML += '<option value="s1B.2.2">Sin Cobertura</option>';
      select2.innerHTML += '<option value="s1B.2.3">Incompatibilidad</option>';
      select2.innerHTML += '<option value="s1B.2.4">Bloqueo</option>';
      select2.innerHTML += '<option value="s1B.2.5">Sin Convenio</option>';
      select2.innerHTML += '<option value="s1B.2.6">Portabilidad</option>';
      select2.innerHTML += '<option value="s1B.2.8">Otros</option>';
    }
  };
// Selector Change 3
select2.addEventListener("change", selectOption3);
  function selectOption3 () {
    select3.style.display = 'none';
    SelectSpan1.style.display = 'none';
    select3.innerHTML = '<option value="">Seleccione una opción</option>';

    if (select2.value === 's1B.2.1') {
      select3.style.display = 'inline-block'; //Option Notas incompletas
      select3.innerHTML += '<option value="s1C.1.1">Notas Claras</option>'; //select 3 opcion 1 de sel 2
      select3.innerHTML += '<option value="s1C.1.2">Linea no existe</option>';
      select3.innerHTML += '<option value="s1C.1.3">Sin linea alterna</option>';
      select3.innerHTML += '<option value="s1C.1.4">Misma linea Afectada</option>';
			select3.innerHTML += '<option value="s1C.1.5">4G Sin direccion precisa</option>';
      select3.innerHTML += '<option value="s1C.1.6">Sin falla reportada</option>';
    } else if (select2.value === 's1B.2.2') {
      select3.style.display = 'inline-block';
      select3.innerHTML += '<option value="s1C.2.1">Devuelto</option>';
      select3.innerHTML += '<option value="s1C.2.2">Cerrado (CUN)</option>';
    } else if (select2.value === 's1B.2.3') {
      select3.style.display = 'inline-block';
      select3.innerHTML += '<option value="s1C.3.1">Devuelto</option>';
      select3.innerHTML += '<option value="s1C.3.2">Cerrado (CUN)</option>';
      select3.innerHTML += '<option value="s1C.3.3">Bandas</option>';
      select3.innerHTML += '<option value="s1C.3.4">Bandas (CUN)</option>';
    }	else if (select2.value === 's1B.2.4') {
      select3.style.display = 'inline-block';
      select3.innerHTML += '<option value="s1C.4.1">Unidireccional</option>';
      select3.innerHTML += '<option value="s1C.4.2">IMEI</option>';
      select3.innerHTML += '<option value="s1C.4.3">Sin saldo</option>';
    } else if (select2.value === 's1B.2.5') {
      select3.style.display = 'inline-block';
      select3.innerHTML += '<option value="s1C.5.1">Numeros cortos</option>';
      select3.innerHTML += '<option value="s1C.5.2">Grupo Aval</option>';
      select3.innerHTML += '<option value="s1C.5.3">Falabella</option>';
    } else if (select2.value === 's1B.2.8') {
      select3.style.display = 'inline-block';
      select3.innerHTML += '<option value="s1C.8.1">Tipologia No Aplica</option>';
      select3.innerHTML += '<option value="s1C.8.2">Infraestructura</option>';
    } else if (select2.value === 's1B.1.1') {
    SelectSpan1.style.display = 'inline-block';
    SelectSpan1.innerHTML = `<label for="checkbox1">Buron de Voz</label>
      <input type="checkbox" id="checkbox1" checked>`;
  } else if (select2.value === 's1B.1.2') {
    select3.style.display = 'inline-block';
    select3.innerHTML += '<option value="s1C.2.1">Contacto</option>';
    select3.innerHTML += '<option value="s1C.2.2">Caida</option>';
    select3.innerHTML += '<option value="s1C.2.3">Muda</option>';
  } else if (select2.value === 's1B.1.3') { //No. Placa 
    SelectSpan1.style.display = 'inline-block';
    SelectSpan1.innerHTML = `<label for="namePlaque">No. Placa:</label>
      <input type="text" id="namePlaque" required minlength="4" maxlength="42" size="10">
      <button type="button" id="clearPlaque">Borrar</button>`;			
    // Agregar el evento click al botón dentro de la función
    const clearPlaque = document.querySelector('#clearPlaque'); 
    const namePlaque = document.querySelector('#namePlaque'); //Numero de placa 
    clearPlaque.addEventListener('click', () => {
    namePlaque.value = ''; // Borrar el texto del input text
    });
  }
  };
  
// Selector Change selectOpt1Fun
selectOpt1.addEventListener("change", selectOpt1Fun);
  function selectOpt1Fun () {
    selectOpt1A.style.display = 'none';
    selectOpt1A.innerHTML = '<option value="">Seleccione una opción</option>';

    if (selectOpt1.value === 's1opc2') {
			selectOpt1A.style.display = 'inline-block';
      selectOpt1A.innerHTML += '<option value="2.2.1">Opción 2.2.1</option>';
      selectOpt1A.innerHTML += '<option value="2.2.2">Opción 2.2.2</option>';					
    } 
  };  
  
// Selector Change selectOpt3Fun
selectOpt3.addEventListener("change", selectOpt3Fun);

function selectOpt3Fun() {
  spanOpt3.style.display = 'none';

  if (selectOpt3.value === 's3opc2') {
    spanOpt3.style.display = 'inline-block';
    spanOpt3.innerHTML = `<label for="numeCase">No. Caso: </label>
      <input type="text" id="numeCase" name="name" required minlength="4" maxlength="21" size="10">
      <button type="button" id="clearButton">Borrar</button>`;			
    // Agregar el evento click al botón dentro de la función
    const clearButton = document.getElementById('clearButton');
    const numeCase = document.querySelector('#numeCase'); //eval(`const textField${i} = document.querySelector('#textField${i}');`);
    clearButton.addEventListener('click', () => {
    numeCase.value = ''; // Borrar el texto del input text
    });
  }
};
// ----------------------------------------------------


// ---------------- Validadores -----------------------
function varTextField(propiedad) {
	var inputs = {
    textInput2: (typeof textField2 === 'undefined') ? "(#CUN)" : textField2.value,
    textInput3: (typeof textField3 === 'undefined') ? "(Usuario)" : textField3.value,
    textInput4: (typeof textField4 === 'undefined') ? "(#Contacto)" : textField4.value,
    textInput5: (typeof textField5 === 'undefined') ? "(Fecha)" : textField5.value,
    textInput6: (typeof numeCase === 'undefined') ? "No avaliable numeCase" : numeCase.value,
    checkbox1: (typeof checkbox1 === 'undefined') ? "No avaliable checkbox1" : checkbox1.checked,
    namePlaque: (typeof namePlaque === 'undefined') ? "No avaliable namePlaque" : namePlaque.value
	};
  var valor = inputs[propiedad];
  return valor; // Devolver el valor
}
// ----------------------------------------------------   

  //.value.toUpperCase()
// ----------------------------------------------------
// -------------------- Funciones ---------------------
// ----------------------------------------------------

//---------------------- addText ----------------------
function addText() {
		var textInput2 = varTextField('textInput2'); // Numero de caso CUN
	  var textInput3 = varTextField('textInput3'); // Nombre de usuario
		var textInput4 = varTextField('textInput4'); // Numero de contacto
    var textInput5 = varTextField('textInput5'); // Fecha
    var saludo = getSaludo(); // Obtiene el saludo según la franja horaria
	const div = document.createElement('div');
  div.setAttribute("class", "searchDiv");
	const text = document.createElement('span');
  const textVar = `
        <p>${saludo} mi nombre es RONALD VEGA agente especializado 
        de red y servicio de WOM, me comunico con <br> ${selectSr.value}, 
        <strong>${textInput3.toUpperCase()}</strong> </br>
        el motivo de esta llamada es porque el día ${textInput5} </br>
        usted reporto una novedad con el servicio de, ${selectNov.value} 
        sobre la linea ${textInput4} y queremos saber si ya se soluciono?
        </p>
        `; //const deleteBtnHTML = `<button class="delete-btn">Delete</button>`;     &nbsp espacio en html
  text.innerHTML +=`
  			${textVar}
        <div class="modal" id="modal${count}" data-animation="slideInOutTop">
          <div class="modal-dialog">
            <header class="modal-header">
              <div id="demo">CUN: ${textInput2}</div>
              <button class="close-modal" aria-label="close modal" data-close>✕</button>
            </header>

            <section class="modal-content">
              ${textVar}
            </section>

            <footer class="modal-footer">
              The footer of the first modal
            </footer>
          </div>
        </div>
        <button type="button" class="open-modal" data-open="modal${count}">Generar Tabla</button>
        <button class="delete-btn">Eliminar</button>
     `;
    div.appendChild(text);
    //div.appendChild(deleteBtn);
    reposDiv.insertBefore(div, reposDiv.firstChild);
    count++;
    // Agregar event listener al botón de eliminar
    const deleteBtn = div.querySelector('.delete-btn');
    deleteBtn.addEventListener("click", () => {
      div.remove();
      count--;
    });
    
// -------------------------
// ----- Modal Code --------
// -------------------------
    const openEls = document.querySelectorAll("[data-open]");
    const closeEls = document.querySelectorAll("[data-close]");
    const isVisible = "is-visible";

    for (const el of openEls) {
      el.addEventListener("click", function() {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
      });
    }

    for (const el of closeEls) {
      el.addEventListener("click", function() {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
      });
    }

    document.addEventListener("click", e => {
      if (e.target == document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
      }
    });

    document.addEventListener("keyup", e => {
      // if we press the ESC
      if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
      }
    });   
};
//-----------------------------------------------------
const clearAllText = () => {
  reposDiv.innerHTML = '';
  count = 0;
};

//-----------------------------------------------------
// ----------------- Gestion de tabla -----------------
//-----------------------------------------------------
// (A) FILE READER + HTML ELEMENTS
var inputFile = document.getElementById("loadTable");
const separator = document.getElementById("separator");
var checkCount = document.getElementById("checkCount");
const  countCheck = document.getElementById("countCheck");
//let count = 0;

inputFile.onclick = function cargarArchivo() {
  var archivo = document.getElementById("inputFile").files[0]; //Obtiene el archivo seleccionado
  var lector = new FileReader(); //Crea un objeto FileReader para leer el archivo

  //Cuando se cargue el archivo, procesa los datos
  lector.onload = (evento) => {
    var contenido = evento.target.result;
    var datos = contenido.split(/\r?\n/); // Acepta saltos de línea en Windows o Linux

    //Busca la tabla existente
    var tabla = document.getElementById("table");

    //Si no existe, crea una tabla con encabezado y cuerpo
    if (!tabla) {
      tabla = document.createElement("table");
      tabla.setAttribute("id", "table");
      var thead = document.createElement("thead");
      //Crea las celdas del encabezado
      var tbody = document.createElement("tbody");

      var tr = document.createElement("tr");
      var headers = datos[0].split(separator.value); // Acepta comas o puntos y comas como separadores
      headers.unshift("Check"); // Agrega la columna extra al inicio del array
      for (var i = 0; i < headers.length; i++) {
        var th = document.createElement("th");
        var headerTxt = document.createTextNode(headers[i]);
        th.appendChild(headerTxt);
        tr.appendChild(th);
      }
      thead.appendChild(tr);
      tabla.appendChild(thead);

      //Crea las celdas del cuerpo
      for (var i = 1; i < datos.length; i++) {
      var tr = document.createElement("tr");
      var cells = datos[i].split(separator.value);
      if (cells.length > 1 || cells[0] !== "") {
        // Agrega la celda del check al inicio de la fila
        var tdCheck = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("id", "miCheckbox");
        checkbox.setAttribute("class", "checkbox");
        tdCheck.appendChild(checkbox);
        tr.appendChild(tdCheck);

        // Agrega las celdas del resto de las columnas
        for (var j = 0; j < cells.length; j++) {
          var td = document.createElement("td");
          var textoCuerpo = document.createTextNode(cells[j]);
          td.appendChild(textoCuerpo);
          //td.setAttribute("contenteditable", "true"); //editable tabla
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }
    }
      tabla.appendChild(tbody); //Agrega el cuerpo a la tabla y la agrega al div
      document.getElementById("dataTable").appendChild(tabla);
    }
    //Si ya existe, agrega las celdas del cuerpo sin encabezado
    else {
      var tbody = tabla.getElementsByTagName("tbody")[0];
      for (var i = 1; i < datos.length; i++) {
        var tr = document.createElement("tr");
        var cells = datos[i].split(separator.value);
        if (cells.length > 1 || cells[0] !== "") {
          // Agrega la celda del check al inicio de la fila
          var tdCheck = document.createElement("td");
          var checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.setAttribute("id", "miCheckbox");
          checkbox.setAttribute("class", "checkbox");
          tdCheck.appendChild(checkbox);
          tr.appendChild(tdCheck);

          // Agrega las celdas del resto de las columnas
          for (var j = 0; j < cells.length; j++) {
            var td = document.createElement("td");
            var textoCuerpo = document.createTextNode(cells[j]);
            td.appendChild(textoCuerpo);
            //td.setAttribute("contenteditable", "true"); //editable tabla
            tr.appendChild(td);
          }
          tbody.appendChild(tr);
        }
      }
    }
		// -----------------------------------------------------------------  
   checksValid()
  //-----------------------------------------
  };
  //Lee el archivo como texto
  lector.readAsText(archivo, "UTF-8");
};

// --------------- Cambio Boton mostrar ---------------
document.getElementById("ocultar").addEventListener('click', changeText);

function changeText() {
  var button = document.getElementById("ocultar");
  if (button.innerHTML === "Ocultar") {
  	hideUncheckedRows();
    button.innerHTML = "Mostrar";
  } else {
  	showAllRows();
    button.innerHTML = "Ocultar";
  }
}

function hideUncheckedRows() {
  var checkboxes = document.getElementsByClassName("checkbox");
  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    var row = checkbox.parentNode.parentNode;
    if (!checkbox.checked) {
      row.style.display = "none";
    }
  }
}

function showAllRows() {
  var rows = document.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    row.style.display = "";
  }
}

function countChecked() {
  var checkboxes = document.getElementsByClassName("checkbox");
  var count = 0;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      count++;
    }
  }
  countCheck.innerHTML = count;
}
//-----------------------------------------------------

//------------------ Select Color ---------------------
function colorChecked() {
	const colorOptions = {
    0: { color: "#A52A2A"},
    1: { color: "#CD5C5C"},
    2: { color: "#F08080"}
  };
  const selectedColor = colorOptions[selectColor.value];
  colorSelec = selectedColor.color;
}
//-----------------------------------------------------

//-------------- Seleccion de check -------------------
function checksValid() {     
			var checkboxes = document.querySelectorAll('#table #miCheckbox');
      // Agregar un controlador de eventos a cada casilla de verificación
      checkboxes.forEach(function(checkbox) {	
      checkbox.addEventListener('change', function() {
      		colorChecked(); //funcion cambio de color 
          // Encontrar la celda correspondiente a la casilla de verificación
      var td = this.parentNode.parentNode;
        // Cambiar el color de fondo de la celda según el estado de la casilla de verificación
        if (this.checked) {
          td.style.backgroundColor = `${colorSelec}`; //Color celda
          td.style.color = ''; //color fuente
          countChecked();
        } else {
          td.style.backgroundColor = '';
          countChecked();
        	}
      	});
      });
     }; 
//-----------------------------------------------------

// ------------ Consulta de busqueda ------------------
document.getElementById("searchInput").addEventListener('keyup', doSearch);

function doSearch() {
  const tableReg = document.getElementById('table');
  const searchText = document.getElementById('searchInput').value.toLowerCase();

  let total = 0;
  // Recorremos todas las filas con contenido de la tabla
  for (let i = 1; i < tableReg.rows.length; i++) {
    // Si el td tiene la clase "noSearch" no se busca en su cntenido
    if (tableReg.rows[i].classList.contains("noSearch")) {
      continue;
    }
    let found = false;
    const cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
    // Recorremos todas las celdas
    for (let j = 0; j < cellsOfRow.length && !found; j++) {
      const compareWith = cellsOfRow[j].innerHTML.toLowerCase();
      // Buscamos el texto en el contenido de la celda
      if (searchText.length == 0 || compareWith.indexOf(searchText) > -1) {
        found = true;
        total++;
      }
    }
    if (found) {
      tableReg.rows[i].style.display = '';
    } else {
      // si no ha encontrado ninguna coincidencia, esconde la
      // fila de la tabla
      tableReg.rows[i].style.display = 'none';
    }
  }

  // mostramos las coincidencias
  const lastTR = tableReg.rows[tableReg.rows.length - 1];
  const td = document.getElementById("coincidencia");
  td.classList.remove("hide", "red");
  if (searchText == "") {
    td.classList.add("hide");
  } else if (total) {
    td.innerHTML = `Se ha encontrado ${total} coincidencia${(total > 1) ? "s" : ""}`;
  } else {
    td.classList.add("red");
    td.innerHTML = `No se han encontrado coincidencias`;
  }
};
//---------------------------------------------------

// ------------------ Busqueda en DIV ---------------
// Obtener una lista de todos los divs
  const divs = document.getElementsByClassName('searchDiv');
  const botonReset = document.getElementById('reset');

  botonReset.addEventListener('click', function() {
    // Restablecer los estilos de los divs
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.display = 'block';
    }
    document.getElementById('textFieldBSC').value = '';
  });

 document.getElementById('textFieldBSC').addEventListener('input', function() {
  const textoBuscado = document.getElementById('textFieldBSC').value.toLowerCase(); // Convertir a minúsculas

  for (let i = 0; i < divs.length; i++) {
    let divContieneTexto = false;
    const elementosDescendientes = divs[i].children;

    for (let j = 0; j < elementosDescendientes.length; j++) {
      const textoDescendiente = elementosDescendientes[j].textContent.toLowerCase(); // Convertir a minúsculas
      if (textoDescendiente.includes(textoBuscado)) {
        divContieneTexto = true;
        break;
      }
    }

    if (divContieneTexto) {
      divs[i].style.display = 'block';
    } else {
      divs[i].style.display = 'none';
    }
  }
});
//--------------------------------------------------- 


// --------------------------------------------------
function restoreBtn() {
  const rows = table.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    rows[i].style.display = "";
  }
  searchInput.value = "";
  const results = document.getElementById("coincidencia");
  results.innerHTML = "";
}
//-----------------------------------------------------

// ---------------- Selector fila tabla ---------------    
var table = document.getElementById('dataTable');
var selected = table.getElementsByClassName('selected');
table.onclick = highlight;

function highlight(e) {
  // Verificar si el elemento seleccionado pertenece a una fila de la tabla
  if (e.target.parentNode.nodeName === 'TR') {
    if (selected[0]) selected[0].className = '';
    e.target.parentNode.className = 'selected';
    // Obtener input text
    var element = document.querySelectorAll('.selected');
    var cells = element[0].children;
    // Actualizar los valores de los inputs con los valores de las celdas
    for (var i = 0; i < cells.length; i++) {
      var input = document.getElementById(`textField${i}`);
      if (input) {
        input.value = cells[i].textContent;
      }
    }
  }
};
//-----------------------------------------------------

// -------------- Genera input text -------------------
var genInp = document.getElementById("genInp");
genInp.onclick = function() {
  const headers = document.getElementsByTagName("th");
  const container = document.getElementById("inputForm");
  container.innerHTML = "";
  var inputsHTML = "";
  for (let i = 1; i < headers.length; i++) { 
    inputsHTML += `<div class="textField"><label for="textField${i}">${i}. ${headers[i].innerText}:</label>
    <input type="text" id="textField${i}" placeholder="${headers[i].innerText}"/></div>`;
    eval(`const textField${i} = document.querySelector('#textField${i}');`); // Variables dinámicas
  }
  container.innerHTML = inputsHTML;
};
//-----------------------------------------------------

// --------------- Actualizar tabla -------------------
var updData = document.getElementById("updData");
updData.onclick = function() {
  var element = document.querySelectorAll('.selected');
  var cells = element[0].children;
  // Actualizar los valores de los inputs con los valores de las celdas
  for (var i = 0; i < cells.length; i++) {
    var input = document.getElementById(`textField${i}`);
    if (input) {
      cells[i].textContent = input.value;
    }
  }
};
//-----------------------------------------------------

//-----------------------------------------------------
var agreFil = document.getElementById("agreFil");
agreFil.onclick = function () {
  const table = document.getElementById("table");
  const inputs = document.getElementById("inputForm").getElementsByTagName("input");
  const row = table.insertRow(-1);
  let rowHTML = `<td><input type='checkbox' id="miCheckbox" class="checkbox"></td>`;
  for (let i = 0; i < inputs.length; i++) {
    rowHTML += "<td>" + inputs[i].value + "</td>";
  }
  row.innerHTML = rowHTML;
  checksValid()
}
//-----------------------------------------------------

//-----------------------------------------------------
//Elimina ultima fila
var erasFil = document.getElementById("erasFil");
erasFil.onclick = function() {
  const table = document.getElementById('table')
  const rowCount = table.rows.length
  if (rowCount <= 1)
    alert('No se puede eliminar el encabezado')
  else
    table.deleteRow(rowCount - 1)
};

//Borrar fila seleccionada
var erasSelec = document.getElementById("erasSelec");
erasSelec.onclick = function() {
  var element = document.querySelectorAll('.selected');
        if(element[0]!== undefined){ //it must be selected
         element[0].remove(element[0].firstChild);
        }  
};

// Deseleccionar checkbox
document.getElementById("deseleccionar").addEventListener('click', btnDeseleccionar);

function btnDeseleccionar() { 
  var tabla = document.getElementById("table");
  if (tabla) {
    var filas = tabla.getElementsByTagName("tr");
    for (var i = 1; i < filas.length; i++) {
      var celda = filas[i].getElementsByTagName("td")[0];
      var checkbox = celda.getElementsByTagName("input")[0];
      checkbox.checked = false;
      filas[i].style.backgroundColor = "";
      filas[i].style.color = '';
    }
    countCheck.innerHTML = "0";
  }
};
//-----------------------------------------------------

// Seleccionar todo
document.getElementById("seleccionar").addEventListener('click', btnSeleccionar);

function btnSeleccionar() { 
	colorChecked();
  var tabla = document.getElementById("table");
  if (tabla) {
    var filas = tabla.getElementsByTagName("tr");
    for (var i = 1; i < filas.length; i++) {
      var celda = filas[i].getElementsByTagName("td")[0];
      var checkbox = celda.getElementsByTagName("input")[0];
      checkbox.checked = true;
      filas[i].style.backgroundColor = `${colorSelec}`; 
      filas[i].style.color = '';
    }
    countCheck.innerHTML = i-1;
  }
};
//-----------------------------------------------------

// -------------------- Borradores --------------------
//Limpiar busqueda
var delet = document.getElementById("borrar");
delet.onclick = function() {
  document.getElementById("searchInput").value = "";
  restoreBtn();
};
//Limpiar Tabla
var erasTabl = document.getElementById("erasTabl");
erasTabl.onclick = () => {
  document.getElementById("dataTable").innerHTML = "";
  countCheck.innerHTML = "0";
};

//Limpiar Campos generados
var delDemo = document.getElementById("delDemo");
delDemo.onclick = () => {
  document.getElementById("inputForm").innerHTML = "";
};

//borrador textarea
var delet = document.getElementById("delet");
delet.onclick = () => {
  document.getElementById("textArea").value = "";
};


//Reset Select Option Plantilla
var btnReset = document.getElementById("btnReset");
btnReset.onclick = () => {
  //document.getElementById("textArea").value = "";
  select1.selectedIndex = 0; //Select Plantilla
  select2.style.display = 'none'; //Option 2
  select2.selectedIndex = 0;
  select3.style.display = 'none'; //Option 3
  select3.selectedIndex = 0;
  selectOpt1.selectedIndex = 0; //Select proceso realizado
  selectOpt1A.style.display = 'none';
  selectOpt2.selectedIndex = 0; //Select Escalamiento
  selectOpt3.selectedIndex = 0; //Select Servicio funcional
  spanOpt3.style.display = 'none'; //Nu mero de caso Span
  SelectSpan1.style.display = 'none'; //checkbox Span
};
//-----------------------------------------------------

//--------------- CopyToClipboard ---------------------
function CopyToClipboard (containerid) {
  const textarea = document.createElement('textarea')
  textarea.id = 'temp_element'
  textarea.style.height = 0
  document.body.appendChild(textarea)
  textarea.value = document.getElementById(containerid).innerText
  const selector = document.querySelector('#temp_element')
  selector.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}
//-----------------------------------------------------

// ------------  Plantillas copy Text Area -----------

// ------------  Horas -----------
function obtenerHoraRestada() {
  var hrAct = new Date(); // Hora actual   -> Hora personalizada 'December 17, 1995 22:24:00'
  let anio = hrAct.getFullYear();
  let mes = hrAct.getMonth() + 1; // Mes
  let dia = hrAct.getDate(); // Día

  var hrsOgral = hrAct.getHours(); // Horas original
  var minsOgral = hrAct.getMinutes(); // Minutos original

  hrAct.setMinutes(minsOgral - 4);

  var hrsRstda = hrAct.getHours(); // Horas restadas
  var minsRstda = hrAct.getMinutes(); // minutos restadas

  var hrsOgralFormtda = formatTime(hrsOgral, minsOgral); // Hora original formateada
  var hrsRstdaFormtda = formatTime(hrsRstda, minsRstda); // Hora restada formateada
	let fecha = `${dia}/${mes}/${anio}`; //fecha actual
  
  return {
    hrsOgralFormtda: hrsOgralFormtda,
    hrsRstdaFormtda: hrsRstdaFormtda,
    fechActual: fecha
  };
}

function formatTime(horas, minutos) {
  var periodo = horas >= 12 ? 'pm' : 'am';
  horas = horas % 12; // Hora en formato de 12 horas
  horas = horas === 0 ? 12 : horas; // Evitar que sea 0 cuando sean las 12 AM
  minutos = minutos < 10 ? '0' + minutos : minutos;
  return `${horas}:${minutos}${periodo}`;
}


// ---------------------------------

// ----- Franja Horaria Saludo -----
function getSaludo() {
    let horaActual = new Date().getHours();
    let saludo;
      if (horaActual < 12) {
        saludo = "Buenos días";
      } else if (horaActual < 18) {
        saludo = "Buenas tardes";
      } else {
        saludo = "Buenas noches";
      }
      return saludo;    
}
// ---------------------------------
function getCustomTexts() {
		var horaRestadaObj = obtenerHoraRestada();
    var textInput4 = varTextField('textInput4'); //Numero de contacto
    var textInput5 = varTextField('textInput5'); // Fecha
    var textInput6 = varTextField('textInput6')  // Numero de caso
    var checkbox1 = varTextField('checkbox1')  // Checkbox Buzon de voz
    var namePlaque = varTextField('namePlaque') //Numero de placa 
    
    var checkBox1 =  checkbox1 === true ? `Se deja buzón de voz` : `No permite dejar buzón de voz`// Validacion celda vacia
    var namePlaqueS =  namePlaque === "" ? `(numero de placa)` : namePlaque// Validacion celda vacia
    let paqueSplit = namePlaqueS.split("\t"); //Numero de placa con tab
   
    const templat1 = `Debido a la falta de información detallada en las notas proporcionadas`; // primer aaprte de la plantilla
    const templat2 = `por lo que  no fue posible completar el análisis y resolución del caso en el nivel de soporte al que fue escalado, por lo que es improcedente para el mismo.`; //segunda parte de la plantilla
    return {
      "s2A.1": "Ninguno",
      "s2A.2": "Configuración de equipo",
      s2opc1: "n/a",
      s2opc2: "No",
      s2opc3: "Si",
      s3opc1: "n/a",
      s3opc2: textInput6 === "" ? `Sin número de caso` : textInput6, 
      "s1B.1.1": `Se realizan las correspondientes marcaciones a la línea ${textInput4} el dia ${horaRestadaObj.fechActual}. Hora inicio ${horaRestadaObj.hrsRstdaFormtda}, hora fin ${horaRestadaObj.hrsOgralFormtda}. Sin contacto efectivo. ${checkBox1}.`, //namePlaque
      "s1B.1.2": `Se realiza comunicación a la línea ${textInput4}, este indica que la novedad reportada ya se encuentra  solucionada.`,
      "s1B.1.3": `Se realiza cierre del caso por novedad masiva del servicio con placa ${paqueSplit[0]} dia ${(typeof paqueSplit[1] === "undefined") ? "(Fecha)" : paqueSplit[1]} hora ${(typeof paqueSplit[2] === "undefined") ? "(Hora)" : paqueSplit[2]}.`,
     "s1C.1.1": `${templat1}, ${templat2}`,
     "s1C.1.2":`${templat1}, la linea afectada en el caso no existe en la base de Wom. INFORMACION ERRADA por parte del area que escala, ${templat2}`,
     "s1C.1.3":`${templat1}, Se valida caso y se evidencia que no tiene linea alterna, ya que para este tipo de solicitud se requiere de la misma, ${templat2}`,
     "s1C.1.4":`${templat1}, la línea desde la cual le estan llamando es la misma linea afectada, no es posible realizar una llamada al mismo numero, ${templat2}`,
     "s1C.1.5":`${templat1}, no hay ubicación precisa para validar cobertura, ${templat2}`,
     "s1C.1.6":`${templat1}, no hay descripcion detallada en la Falla reportada por el usuario, ${templat2}`,
     "s1C.2.1":`Se valida cobertura y se evidencia que no cuenta con la misma, según la ubicación brinda en el caso, ${templat2}`,
     "s1C.2.2":`Se valida cobertura y se evidencia que no cuenta con la misma, según la ubicación brinda en el caso.`,
     "s1C.3.1":`Se valida compatibilidad 4G y se evidencia que el equipo no es compatible, ${templat2}`,
     "s1C.3.2":`Se valida compatibilidad 4G y se evidencia que el equipo no es compatible.`,
     "s1C.3.3":`Se realiza validación sobre compatibilidad 4G de la linea en cuestion y se evidencia que este no es compatible con todas o algunas de las bandas 4G`,
     "s1C.3.4":`Se realiza validación sobre compatibilidad 4G de la linea en cuestion y se evidencia que este no es compatible con todas o algunas de las bandas 4G, ${templat2}`,
     "s1C.4.1": `Se valida si esta activa la linea indicada en el caso como afectada y se evidencia que tiene bloqueo en Ekia, ${templat2}`,
     "s1C.4.2": `Se valida el caso por intermitencia pero al consultar el IMEI se evidencia que se encuetra reportado con novedad de hurto/ robo, ${templat2}`,
     "s1C.4.3": `Se valida el caso ya que usuario no puede navegar, se validan billeteras y se evidencia que tiene agotado los recursos, ${templat2}`,
     "s1C.5.1":`No hay convenio con números cortos, ${templat2}`,
     "s1C.5.2":`No hay convenio con números del Grupo Aval, ${templat2}`,
     "s1C.5.3":`No hay convenio con números de Falabella, ${templat2}`,
     "s1B.2.6":`Segun novedad presentada no le ingresan llamadas de tigo. Se realiza llamada de prueba y se corrobora lo indicado en el caso.`,
     "s1C.8.1":`Se valida tipología y se evidencia que esta no aplica, ${templat2}`,
     "s1C.8.2":`Novedades relacionadas con infrestructura no son gestionadas por el PUC, ${templat2}`
    };
  }
//-----------------------------------------------------
const generar = document.getElementById("Generar");
  generar.onclick = () => {
  	var customTexts = getCustomTexts(); //Funcion como variable

    const textEnca = `Validaciones iniciales:SE VALIDA ESTADO DE LA LINEA: ok CONSUMOS:ok COBERTURA:ok Y SALDO:ok`; //Textos de encabezados

    var select1Text = customTexts[selectOpt1.value] || "";
    var select2Text = customTexts[selectOpt2.value] || "";
    var select3Text = customTexts[selectOpt3.value] || "";
    
    var select5Text = customTexts[select1.value] || "";
    var select6Text = customTexts[select2.value] || "";
    var select7Text = customTexts[select3.value] || "";
    
    textArea.value = `${textEnca}
Validaciones: ${select5Text}${select6Text}${select7Text}
Proceso realizado: ${select1Text}
Servicio funcional SI/NO: ${select2Text}
Aplica Escalamiento TITA / NOC: ${select3Text}`;		
}
//-----------------------------------------------------

//-------------- Copy Clipboard -----------------------
const copyClip = document.getElementById("copy");
	copyClip.onclick = () => {
	var copyTextVal = document.querySelector('#textArea');
  copyTextVal.select();
  document.execCommand("copy");
};
//-----------------------------------------------------

// ------------------- Exportar CSV -------------------
var exportTableToCSV = document.getElementById("exportTableToCSV");
exportTableToCSV.onclick = function() {
  let data = "";
  const tableData = [];
  const rows = document.querySelectorAll("table tr");
  for (const row of rows) {
    const rowData = [];
    for (const [index, column] of row.querySelectorAll("th, td").entries()) {
      // To retain the commas in the "Description" column, we can enclose those fields in quotation marks.
      if ((index + 1) % 3 === 0) {
        rowData.push('"' + column.innerText + '"');
      } else {
        rowData.push(column.innerText);
      }
    }
    tableData.push(rowData.join(separator.value)); //Delimitador
  }
  data += tableData.join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([data], {
    type: "text/csv"
  }));
  a.setAttribute("download", "data.csv");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
//---------------------------------------------------

//-----------------------------------------------------
// -------------------- Function Call -----------------
// ----------------------------------------------------
copyBtn.addEventListener("click", addText);
clearBtn.addEventListener("click", clearText);
clearAllBtn.addEventListener("click", clearAllText);

selectColor.addEventListener("change", colorChecked);
