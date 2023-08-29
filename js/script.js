// Obtén el enlace y el modal
var linkOpenModal = document.getElementById("openModalLink");
var modal = document.getElementById("myModal");

// Cuando el usuario hace clic en el enlace, muestra el modal
linkOpenModal.addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el enlace navegue a otra página
    modal.style.display = "block";
  });

// Cuando el usuario hace clic en la "x", cierra el modal
var closeModal = document.querySelector(".close");
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

// Cierra el modal si el usuario hace clic fuera del modal
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
