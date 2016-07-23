//
var coroActivo = -1;
var listaCorosActivos = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var coroSel = [];

function inicio() {
    // Cuando hace click en el boton MOSTRAR EStE CORO
    $("[id^='coro']").on("click", "", function () {
        var n = parseInt(this.id.substring(4)) - 1
        coroActivo = n;
        cargar();
    });
    $("#masCoro").on("click", "", function () {
        var b = document.getElementById("menosCoro").style.display;
        if (numCoro > 0 && b !== 'block') {
            document.getElementById("menosCoro").style.display = 'block';
        };
        //var c = document.getElementById("masCoro").style.display;
        if (numCoro > 14) {
            document.getElementById("masCoro").style.display = 'none';
        };
    });
    $("#menosCoro").on("click", "", function () {
        var d = document.getElementById("masCoro").style.display;
        if (numCoro < 15 && d !== 'block') {
            document.getElementById("masCoro").style.display = 'block';
        };
        //var e = document.getElementById("menosCoro").style.display;
        if (numCoro < 1) {
            document.getElementById("menosCoro").style.display = 'none';
        };
    });
}

function cargar() {
    
    var letra = "";
    var coroSel = listaCorosActivos[coroActivo];
    var titulo = coroSel[0] + coroSel[1];
    document.getElementById("tituloCoro").innerHTML = titulo;
    for (var i = 2; i < coroSel.length; i++) {
        letra += coroSel[i] + "<br>";
    };
    document.getElementById("letraCoro").innerHTML = letra;
}

//URL:http://www.elwebmaster.com/general/javascript-api-pantalla-completa-sitio-web
function pantallaCompleta(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}
// Esta función permite buscar un coro y lo carga en una variable que 
// permite mostrarlo en la página para proyectarlo
$(function() {
    //Llena array indiceCoros con titulos de los coros.
    var indiceCoros = [];
    for (var i = 0; i < listaCorosA.length; i++) {
        indiceCoros.push(listaCorosA[i][0] + " " + listaCorosA[i][1]);
    };   
    // Función para autocompletar: Muestra todos los titulos de coros
    // que coinciden con el texto de búsqueda
    $( "[id^='tags']").autocomplete({
        source: indiceCoros,
        select: function( event, ui ) {
            var a = ui.item.label.split( /\s+/ );
            var n = parseInt(this.id.substring(4));
            //console.log(ui);
            for (var i = 0; i < listaCorosA.length; i++) {
                //Si la búsqueda coincide, llena la variable coroSel
                //con el coro completo (nombre y letra)
                if (a[0] == listaCorosA[i][0]) {
                    listaCorosActivos[n-1] = listaCorosA[i];
                };
            };
            if (document.getElementById("coro" + n).style.display !== 'block') {
                document.getElementById("coro" + n).style.display = 'block';
            };  
            return true;
        }
    });
  });
//Funciones para mostrar u ocultar botones para seleccionar un coro
var numCoro = 0;
function mostrarBotones(){
    if (numCoro < 0) {
        numCoro = 0;
    };
    if (numCoro >= 0 && numCoro < 15) {
        numCoro += 1;
        document.getElementById("selCoro" + numCoro).style.display = 'block';
        document.getElementById("tags" + numCoro).value = "";
    };
}
function ocultarBotones(){
    if (numCoro > 15) {
        numCoro = 15;
    };
    if (numCoro <= 15 && numCoro > 0) {
        document.getElementById("coro" + numCoro).style.display = 'none';
        document.getElementById("selCoro" + numCoro).style.display = 'none';
        numCoro -= 1;
    };
}
