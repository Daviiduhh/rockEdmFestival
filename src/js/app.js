document.addEventListener('DOMContentLoaded', () => {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++) {
        const imagen = document.createElement('img');
        imagen.src = `img/thumb/${i}.webp`

        const lista = document.createElement('li');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}