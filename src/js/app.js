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
