//CREAR LOS CONTENEDORES DE LAS PELICULAS
const Pelicula = [
  {
    id: 1,
    titulo: "Deadpool",
    director: "Tim Miller",
    genero: "Accion, Comedia",
    estreno: 2016,
    resumen:
      "Un exmercenario quien, tras haber sido sometido a un cruel experimento, adquiere el superpoder de sanar rápidamente y pretende vengarse del hombre que destrozó su vida..",
    imagen: src="Img/Image_8.jpeg"
  },
  {
    id: 2,
    titulo: "Deadpool 2 ",
    director: "David Leitch",
    genero: "Accion , comedia",
    estreno: 2018,
    resumen:
      "Deadpool tiene que proteger a un mutante adolescente de Cable, un soldado del futuro genéticamente modificado, pero Deadpool no está solo: otros superhéroes igual de chiflados que él unen sus fuerzas contra el perverso Cable..",
    imagen: "Img/Image_9.jpeg"
  },
  {
    id: 3,
    titulo: "Los Vengadores",
    director: "Joss Whedon",
    genero: "Accion",
    estreno: 2012,
    resumen:
      "El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.",
    imagen: src="Img/Image_1.jpeg"
  },
  {
    id: 4,
    titulo: "Los Vengadores: La Era de Ultron",
    director: "Joss Whedon",
    genero: "Accion",
    estreno: 2015,
    resumen:
      "Los Vengadores se reúnen de nuevo y juntan sus fuerzas con las de los recién llegados Quicksilver y Bruja Escarlata para luchar contra un robot maquiavélico llamado Ultrón, el cual Tony Stark creó con el fin de defender la paz, pero resultó defectuoso y ahora pretende exterminar a toda la humanidad.",
    imagen: "Img/Image_2.jpeg"
  },
  {
    id: 5,
    titulo: "Los Vengadores: Infinity War",
    director: "Joss Whedon",
    genero: "Accion",
    estreno: 2018,
    resumen:
      "Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado. Si Thanos logra reunir las seis gemas del infinito: poder, tiempo, alma, realidad, mente y espacio, nadie podrá detenerlo.",
    imagen: src="Img/Image_3.jpeg"
  },
  {
    id: 6,
    titulo: "Los Vengadores: End Game",
    director: "Joss Whedon",
    genero: "Accion",
    estreno: 2019,
    resumen:
      "Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.",
    imagen: "Img/Image_4.jpeg"
  },
  {
    id: 7,
    titulo: "Iron Man",
    director: "Jon Favreau",
    genero: "Accion",
    estreno: 2008,
    resumen:
      "Un empresario millonario construye un traje blindado y lo usa para combatir el crimen y el terrorismo.",
    imagen: src="Img/Image_5.jpeg"
  },
  {
    id: 8,
    titulo: "Iron Man 2",
    director: "Jon Favreau",
    genero: "Accion",
    estreno: 2010,
    resumen:
      "Con el mundo ahora consciente de que él es Iron Man, el millonario inventor Tony Stark debe forjar nuevas alianzas y confrontar a un enemigo nuevo y poderoso.",
    imagen: "Img/Image_6.jpeg"
  },
  {
    id: 9,
    titulo: "Iron Man 3",
    director: "Shane Black",
    genero: "Accion",
    estreno: 2013,
    resumen:
      "El descarado y brillante Tony Stark, tras ver destruido todo su universo personal, debe encontrar y enfrentarse a un enemigo cuyo poder no conoce límites. Este viaje pondrá a prueba su entereza una y otra vez, y le obligará a confiar en su ingenio.",
    imagen: src="Img/Image_7.jpeg"
  },
  {
    id: 10,
    titulo: "Deadpool 3 ",
    director: "Shawn Levy",
    genero: "Accion",
    estreno: 2024,
    resumen:
        "Lobezno se recupera de sus heridas cuando se cruza con el bocazas, Deadpool, que ha viajado en el tiempo para curarlo con la esperanza de hacerse amigos y formar un equipo para acabar con un enemigo común.",
    imagen: "Img/Image_10.jpeg"
  },
  {
    id: 11,
    titulo: "Pantera Negra",
    director: "Ryan Coogler",
    genero: "Accion",
    estreno: 2018,
    resumen:
      "Después de morir su padre, T'Challa regresa a su nación, Wakanda. Una vez allí, descubre que tiene un nuevo y terrible enemigo, y T'Challa asume la personalidad de Pantera Negra para salvar no solo al reino de Wakanda, sino a toda la humanidad.",
    imagen: src="Img/Image_11.jpeg"
  },
  {
    id: 12,
    titulo: "Black Panther: Wakanda Forever",
    director: "Ryan Coogler",
    genero: "Accion",
    estreno: 2022,
    resumen:
        "Tras la muerte de T'Challa, la reina Ramonda, Shuri, M'Baku, Okoye y las Dora Milaje protegen Wakanda de la injerencia de las potencias mundiales.",
    imagen: "Img/Image_12.jpeg"
  }  
];
//FUNCION MOSTRAR PELICULAS 
function mostrarPeliculas(peliculasAMostrar){
//OBTENER EL ELEMENTO DE LA LISTA DE PELICULAS DEL DOM  
  const MovieList = document.getElementById("MovieList");
//LIMPIAR EL CONTENIDO  
  MovieList.innerHTML = "";

//VERIFICAR SI NO HAY PELICULAS PARA MOSTRAR
if(peliculasAMostrar.lenght === 0 ){
//SI NO HAY PELICULAS, MOSTRAR EL SIGUIENTE MENSAJE  
  MovieList.innerHTML = "<p>No se encuentran resultados.</p>";
} else {
//ITERAR SOBRE CADA LIBRO PARA CREAR ELEMENTO DE CTARJETA Y AGREGARLO A LA LISTA  
    peliculasAMostrar.forEach(Pelicula => {
      const MovieCard = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${Pelicula.imagen}" class="card-img-top" alt="${Pelicula.titulo}">
            <div class="card-body">
              <h5 class="card-title">${Pelicula.titulo}</h5>
              <p class="list-group-item">${Pelicula.director}</p>
              <p class="list-group-item">${Pelicula.genero}</p>
              <p class="list-group-item">${Pelicula.estreno}</p>
              <p class="list-group-item">${Pelicula.resumen}</p>
              <button class="btn btn-primary details-btn" data-toogle="modal" data-target="#movieModal">Detalles</button>
            </div>
          </div>
        </div>
      `;
//AGREGAR LA TARJETA DE LA PELICULA
      MovieList.innerHTML += MovieCard;
    });
  }

//EVENTO DE LISTENERS A LOS BOTONES DE DETALLES
const detailsButtons = document.querySelectorAll(".details-btn");
detailsButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const peliculaSeleccionada = Pelicula[index];
    const modalBody = `
      <img src="${peliculaSeleccionada.imagen}" class="img-fluid mb-3" alt="${peliculaSeleccionada.titulo}">
      <p><strong>Titulo:</strong>${peliculaSeleccionada.titulo}</p>
      <p><strong>Director:</strong>${peliculaSeleccionada.director}</p>
      <p><strong>Director:</strong>${peliculaSeleccionada.genero}</p>
      <p><strong>Director:</strong>${peliculaSeleccionada.estreno}</p>
      <p><strong>Resumen:</strong>${peliculaSeleccionada.resumen}</p>
    `;
//OBTENER EL CUERPO MODAL Y MOSTRAR DETALLES DE LA PELICULA SELECCIONADA
    const modalBodyElement = document.getElementById("movieModalBody");
    modalBodyElement.innerHTML = modalBody;
//MOSTRAR EL MODAL
    const movieModal = new bootstrap.Modal(document.getElementById('movieModal'));
    movieModal.show();
  });
});
}


//LOGICA BUSQUEDA DE LIBROS
function busquedaPeliculas(query){
  const terminoBusqueda = query.trim().toLowerCase();
//FILTRAR
  const filtroPeliculas = Pelicula.filter(Pelicula => {
    return (
      Pelicula.titulo.toLowerCase().includes(terminoBusqueda) ||
      Pelicula.director.toLowerCase().includes(terminoBusqueda) ||
      String(Pelicula.estreno).includes(terminoBusqueda)
    );
  });
  //RESULTADOS FILTROS
  mostrarPeliculas(filtroPeliculas)
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarPeliculas(Pelicula);
});

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  busquedaPeliculas(searchInput.value);
});
