///////////////////////////////////////////////////////////
// Smooth scrolling animation

//seleccionar todos los links
const allLinks = document.querySelectorAll("a:link");
//console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href"); // obtener los atributos de los links, de la parte de href

    // ir de nuevo al inicio scroll
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll a cada link de cada seccion -> yo, experiencias, etc
    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }

    // cerrar la navegacion en mobile
    if (link.classList.contains("main-nav-list"))
      headerEL.classList.toggle("nav-open");
  });
});
