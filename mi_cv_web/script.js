// Muestra u oculta el contenido de una sección 
function toggleSection(id) {
  const section = document.getElementById(id);
  const content = section.querySelectorAll("p, ul, article, div, h4");
  content.forEach(el => {
    el.style.display = el.style.display === "none" ? "block" : "none";
  });
}

// Agrega interactividad a los títulos sin usar onclick en HTML
document.querySelectorAll("section h3").forEach(titulo => {
  titulo.addEventListener("click", () => toggleSection(titulo.parentElement.id));
});

// Efecto visual al pasar el mouse sobre una habilidad
document.querySelectorAll(".habilidad").forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.boxShadow = "0 0 10px var(--color-secundario)";
  });
  item.addEventListener("mouseout", () => {
    item.style.boxShadow = "none";
  });
});
