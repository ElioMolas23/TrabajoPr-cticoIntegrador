//funcion para el uso del boton de hamburguesa
((d) => {
  const btnMenu = d.querySelector(".menu-btn");
  const  menu = d.querySelector(".menu");

  btnMenu.addEventListener("click", (e) => {
    menu.classList.toggle("activo");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;
    menu.classList.remove("activo");
  });
})(document);


//funcion para el formulario
((d) => {
  const form = d.querySelector(".contacto-form");
  const respuesta = d.querySelector(".respuesta-contacto");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/eliomolas14@hotmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        respuesta.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        setTimeout(() => {
          location.hash = "#close";
        }, 5000);
      });
  });
})(document);