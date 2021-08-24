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