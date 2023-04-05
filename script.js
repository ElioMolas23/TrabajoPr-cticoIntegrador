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


