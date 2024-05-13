 // Función para cambiar entre el modo oscuro y claro de la página
function cambiar() {
    // Selecciona elementos del DOM
    var header = document.querySelector('header');
    var bn = document.getElementById("boton_os");
    var titulo = document.getElementById("titulo");
    var botonesMenu = document.getElementsByClassName("botonMenu");
    var item = document.getElementsByClassName("item");
    var item2 = document.getElementsByClassName("item2");
    var caj = document.getElementsByClassName("texto_cajita_rosa");
    var footer = document.getElementById('foo');
    
    // Alterna las clases 'claro' y 'oscuro' en el encabezado
    header.classList.toggle('claro');
    header.classList.toggle('oscuro');
    
    // Cambia el fondo y los colores de los elementos según el modo claro u oscuro
    if (document.body.style.backgroundImage.includes("sakrura_nieve.jpg")) {
        // Modo claro
        bn.style.backgroundImage="url(Imagenes/modo-oscuro.png)";
        document.body.style.backgroundImage ="url(Imagenes/sakura.jpeg)"; 
        titulo.style.color="white"
        // Itera sobre cada elemento y cambia el color de la letra a blanco
        for (var i = 0; i < botonesMenu.length; i++) {
            botonesMenu[i].style.color = "white";
        }
        // Itera sobre cada elemento y cambia el color de borde a gris claro
        for (var i = 0; i < item.length; i++) {
            item[i].style.borderColor = "#d8d8d8";
        }
        // Itera sobre cada cajita rosa y cambia el fondo y el borde
        for (var i = 0; i < caj.length; i++) {
            caj[i].style.backgroundColor = "hsla(341, 89%, 49%, 0.1)";             
            caj[i].style.borderColor="#E3195A";
        }
        // Itera sobre cada elemento de nivel 2 y cambia el fondo a gris claro
        for (var i = 0; i < item2.length; i++) {
            item2[i].style.backgroundColor = " hsla(340, 95%, 50%, 0.4)";
        }
    }
    else{
        // Modo oscuro
        bn.style.backgroundImage="url(Imagenes/modo-claro.png)";
        document.body.style.backgroundImage ="url(Imagenes/sakrura_nieve.jpg)"; 
        titulo.style.color="black";
        // Itera sobre cada elemento y cambia el color de la letra a negro
        for (var i = 0; i < botonesMenu.length; i++) {
            botonesMenu[i].style.color = "black";
            botonesMenu[i].style.backgroundColor = null;
        }
        // Itera sobre cada elemento y cambia el color de borde a azul oscuro
        for (var i = 0; i < item.length; i++) {
            item[i].style.borderColor = "#09053E";
        }
        // Itera sobre cada cajita rosa y cambia el fondo y el borde
        for (var i = 0; i < caj.length; i++) {
            caj[i].style.backgroundColor = "hsla(193, 27%, 77%)";
            caj[i].style.borderColor="#09053E";
        }
        // Itera sobre cada elemento de nivel 2 y cambia el fondo y el color de la letra
        for (var i = 0; i < item2.length; i++) {
            item2[i].style.backgroundColor = "hsla(193, 27%, 77%)";
            item2[i].style.color="#09053E";
        }
    }
}


// MAPA CON leaflet
// Se crea un mapa con Leaflet y se establece la vista inicial
var map = L.map('map').setView([35.76753298822823, 139.68147197966024], 5);

// Se añade una capa de mosaicos de OpenStreetMap al mapa
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);

// Se definen los marcadores con imágenes y sus coordenadas
var Imagenes_Marker=[
    // Array de objetos con información de los marcadores
    {'nombre':"<img src='Imagenes/Markers/Escaleras_kimi.jpg' alt='Escaleras de Kimi no namae'width='200px'/> <br/> Estas escaleras son famosas por su aparición en el anime Your Name (Kimi no Na wa)."},
    {'nombre':"<img src='Imagenes/Markers/torretokyo.jpg' alt='Torre de Tokyo' width='200px'/> <br/>Torre de Tokyo <br/> Es una de las estructuras más altas de Japón y un icono reconocible de la ciudad de Tokyo. Ofrece impresionantes vistas panorámicas de la ciudad y es una atracción turística muy popular. Estas escaleras han ganado fama y a menudo son visitadas por fanáticos de la película y turistas que desean experimentar el lugar icónico."},
    {'nombre':"<img src='Imagenes/Markers/templo.png' alt='Templo Osaka Tenmangu' width='200px'/> <br/> Osaka Tenmangu <br/> El Osaka Tenmangu es famoso por su festival, el Tenjin Matsuri, que se celebra anualmente el 24 y 25 de julio y está clasificado como uno de los tres principales festivales de Japón, junto con el Gion Matsuri de Kyoto y el Kanda Matsuri de Tokio. Durante el festival, la deidad del santuario es paseada en una lujosa palanquín divina (mikoshi) a través de la ciudad en una alegre procesión por tierra y río, acompañada de fuegos artificiales."},
    {'nombre':"<img src='Imagenes/Markers/nagasaki_luces.jpg' alt='Reino de flores y fauna' width='200px'/> <br/> Reino de flores y fauna <br/> Esta es una recreación de una ciudad holandesa ubicada en la prefectura de Nagasaki. Huis Ten Bosch es conocido por sus impresionantes iluminaciones, especialmente durante la temporada de invierno, cuando el parque se ilumina con millones de luces LED, creando un espectáculo visual impresionante. Además de las luces, el parque también cuenta con hermosos jardines de flores y una variedad de entretenimiento para los visitantes."},
    {'nombre':"<img src='Imagenes/Markers/fuji.jpg' alt='Monte Fuji' width='200px'/> El Monte Fuji es un volcán activo y un símbolo icónico de Japón, reconocido como Patrimonio de la Humanidad por su belleza y cultura. Atrae a millones de visitantes cada año para hacer senderismo y disfrutar de vistas panorámicas. Además de su importancia como destino turístico, tiene un profundo significado religioso en la cultura japonesa. "},
    {'nombre':"<img src='Imagenes/Markers/puente.jpg' alt='Gran Puente del Estrecho de Akashi' width='200px'/> <br/> El Gran Puente del Estrecho de Akashi <br/> También conocido como el Puente Akashi-Kaikyo, es el puente colgante más largo del mundo, conectando Kobe con la isla de Awaji en Japón. Destaca por su ingeniería avanzada y su resistencia a terremotos y vientos fuertes. Además de su función como enlace de transporte, es una atracción turística popular debido a sus impresionantes vistas panorámicas de la bahía de Osaka y su paisaje circundante."},
    {'nombre':"<img src='Imagenes/Markers/castillonagoya.jpg' alt='Castillo de Nagoya' width='200px'/> <br/> Castillo de Nagoya <br/> Este castillo histórico se encuentra en la ciudad de Nagoya y es uno de los castillos más grandes de Japón. Es una estructura impresionante con una larga historia y ofrece una visión fascinante de la arquitectura japonesa feudal."},
    {'nombre':"<img src='Imagenes/Markers/sapporo.jpg' alt='Torre de Sapporo' width='200px'/> <br/>Torre Sapporo <br/>  Similar a la Torre de Tokyo, la Torre de Sapporo es un punto de referencia icónico en la ciudad de Sapporo, Hokkaido. También ofrece vistas panorámicas de la ciudad. "},
    {'nombre':"<img src='Imagenes/Markers/puerto_yokohama.jpg' alt='Puerto de Yokohama' width='200px'/> <br/> Puerto de Yokohama <br/> El puerto de Yokohama es uno de los puertos más grandes de Japón y es una parte integral de la economía de la región de Kanto. Además de ser un puerto importante, el área circundante alberga varios lugares de interés turístico."},
    {'nombre':"<img src='Imagenes/Markers/nara.jpeg' alt='Parque Nara' width='200px'/> <br/> Parque Nara <br/> Nara es famosa por su parque de ciervos, donde los ciervos salvajes deambulan libremente y pueden ser alimentados por los visitantes. También alberga varios templos y santuarios históricos, incluido el Gran Buda de Nara en el Templo Todaiji."},
    {'nombre':"<img src='Imagenes/Markers/castilloOsaka.jpg' alt='Castillo Osaka' width='200px'/> <br/> Castillo Osaka <br/> Es uno de los castillos más famosos de Japón y es un símbolo importante de la ciudad de Osaka. Fue construido originalmente en el siglo XVI y ha sido reconstruido varias veces a lo largo de los años."},
    {'nombre':"<img src='Imagenes/Markers/bomba.jpg' alt='Cúpula de la Bomba Atómica, Hiroshima' width='200px'/> <br/> Cúpula de la Bomba Atómica, Hiroshima <br/> Conocida formalmente como el Monumento Conmemorativo de la Paz de Hiroshima, esta estructura conmemora las víctimas de la bomba atómica que cayó en Hiroshima durante la Segunda Guerra Mundial. Es un lugar de reflexión y memoria histórica."},
    {'nombre':"<img src='Imagenes/Markers/dorado.jpg' alt='Pabellon Dorado' width='200px'/> <br/> Pabellon Dorado <br/> También conocido como Kinkaku-ji, es un templo cubierto en oro ubicado en Kyoto. Es uno de los sitios más fotografiados de Japón y es conocido por su belleza arquitectónica y paisajística."},
    {'nombre':"<img src='Imagenes/Markers/tori.jpg' alt='Santori(Mil toris)' width='200px'/> <br/> Mil Tori <br/> Se refiere a los miles de torii (puertas de santuario) que forman un camino en el santuario Fushimi Inari Taisha en Kyoto. Es un sitio impresionante y sagrado en Japón."},
    {'nombre':"<img src='Imagenes/Markers/hirosaki.jpg' alt='Castillo Hirosaki' width='200px'/> <br/> Castillo Hirosaki <br/> Es un castillo histórico ubicado en la ciudad de Hirosaki en la prefectura de Aomori. Es famoso por su arquitectura y por los hermosos cerezos que lo rodean."},
    {'nombre':"<img src='Imagenes/Markers/islagatos.jpg' alt='Isla de gatos salvajes' width='200px'/> <br/> Isla de gatos salvajes <br/> Japón es conocido por sus islas de gatos, donde hay una gran población de gatos salvajes. Estas islas son destinos populares para los amantes de los gatos y los turistas."},
    {'nombre':"<img src='Imagenes/Markers/fox.jpg' alt='Zao Fox village' width='200px'/> <br/> Zao Fox village <br/> Es un parque en la prefectura de Miyagi que alberga cientos de zorros. Los visitantes pueden interactuar con los zorros y aprender sobre ellos en este parque temático único."}
]

// Se define información de las ubicaciones
ubicacion = [
    { 'nombre': "Escaleras kimi no namae", 'coordenadas': [35.76753298822823, 139.68147197966024] },
    { 'nombre': "Torre de Tokyo", 'coordenadas': [35.65878968594849, 139.74542216746855] },
    { 'nombre': "Templo Osaka Tenmangu", 'coordenadas': [34.69626656728111, 135.51263358576] },
    { 'nombre': "Reino de flores y luces", 'coordenadas': [33.087563287781734, 129.78768510133492] },
    { 'nombre': "Monte Fuji", 'coordenadas': [35.36226740649407, 138.7269486637615] },
    { 'nombre': "Gran Puente del Estrecho de Akashi", 'coordenadas': [34.61786815638933, 135.02140554122056] },
    { 'nombre': "Castillo de Nagoya", 'coordenadas': [35.1849605203007, 136.89976339813055] },
    { 'nombre': "Torre de Sapporo", 'coordenadas': [43.061556766858715, 141.35652020321126] },
    { 'nombre': "Puerto de Yokohama", 'coordenadas': [35.45090796179662, 139.64628260407497] },
    { 'nombre': "Parque Nara", 'coordenadas': [34.6851969509059, 135.84293689441364] },
    { 'nombre': "Castillo Osaka", 'coordenadas': [34.6874511568429, 135.52580095208452] },
    { 'nombre': "Cúpula de la Bomba Atómica, Hiroshima", 'coordenadas': [34.39563347364136, 132.4535383520719] },
    { 'nombre': "Pabellon Dorado", 'coordenadas': [35.0396071490225, 135.7292752827826] },
    { 'nombre': "Mil Tori", 'coordenadas': [34.967236298491976, 135.77457366559048] },
    { 'nombre': "Castillo Hirosaki", 'coordenadas': [40.61154519354034, 140.46369667817154] },
    { 'nombre': "Isla de gatos salvajes", 'coordenadas': [38.30062595162261, 141.41831140261715] },
    { 'nombre': "Zao fox village", 'coordenadas': [38.04092221887822, 140.53030675223533] },
];
// Opciones personalizadas para el popup de los marcadores

var customOptions = {
    'maxWidth': '200', // Define el ancho máximo del popup en píxeles
    'className' : 'custom' // Clase CSS personalizada para el popup
    }
// Se crea un grupo de marcadores con la librería Leaflet.markercluster
var markers= new L.MarkerClusterGroup();
// Se itera sobre las ubicaciones y se crean marcadores para cada una
for (var i = 0; i < ubicacion.length; i++){
    var customPopup= Imagenes_Marker[i].nombre;// Se obtiene la información del popup
    // Se crea un marcador en la ubicación correspondiente, con el popup personalizado y opciones personalizadas
    var marcadores = L.marker(ubicacion[i].coordenadas).bindPopup(customPopup, customOptions).addTo(map);// Se añade el marcador al grupo de marca
    markers.addLayer(marcadores);
}

map.addLayer(markers);// Se añade el grupo de marcadores al mapa


// Volar al punto de la selección de la unicación en el mapa con zoom
document.getElementById('select-location').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo([coords[0],coords[1]],coords[2]);
})
		
