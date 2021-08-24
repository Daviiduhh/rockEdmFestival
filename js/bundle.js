document.addEventListener("DOMContentLoaded", () => {
  scrollNav();

  navegacionFija();
});

function scrollNav() {
  const enlaces = document.querySelectorAll(".navegacion-principal a");

  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (evento) => {
      evento.preventDefault();
      const seccion = document.querySelector(
        evento.target.attributes.href.value
      );

      seccion.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

function navegacionFija() {
  const barra = document.querySelector('.header');

  //Observador
  const observer = new IntersectionObserver( (entries) => {
    if (entries[0].isIntersecting) {
        barra.classList.remove('fijo');
    }else {
        barra.classList.add('fijo');
    }
  });

  //Elemento a observar
  observer.observe(document.querySelector(".informacion"));
}

document.addEventListener('DOMContentLoaded', () => {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++) {
        const imagen = document.createElement('img');
        imagen.src = `img/thumb/${i}.webp`
        imagen.dataset.imagenId = i;

        //Añadir la funcion de mostrar imagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('li');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(event){
    const id = parseInt(event.target.dataset.imagenId);

    //Generar imagen
    const imagen = document.createElement('img');
    imagen.src = `img/grande/${id}.webp`;

    //Mostrar en el HTML
    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay')
    
    //boton para cerrar imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    //Cerrar presionando overlay
    overlay.onclick = () => overlay.remove()
    //Cerrar presionando boton
    cerrarImagen.onclick = () => overlay.remove()

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body')
    overlay.appendChild(cerrarImagen);
}