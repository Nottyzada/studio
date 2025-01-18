// Abrir e fechar barra lateral
const sidebar = document.getElementById("sidebar");
const toggleSidebar = document.getElementById("toggle-sidebar");
const closeSidebar = document.getElementById("close-sidebar");

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.add("visible");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("visible");
});

// Alterna detalhes dos projetos
document.querySelectorAll(".btn.saiba-mais").forEach((button) => {
  button.addEventListener("click", function () {
    const details = this.nextElementSibling;
    const isVisible = details.style.display === "block";

    details.style.display = isVisible ? "none" : "block";
    this.textContent = isVisible ? "Saiba Mais" : "Mostrar Menos";
  });
});

function validateForm() {
  const name = document.querySelector('[name="name"]').value;
  const email = document.querySelector('[name="email"]').value;
  const message = document.querySelector('[name="message"]').value;

  if (!name || !email || !message) {
    alert("Por favor, preencha todos os campos.");
    return false; // Evita o envio do formulário
  }
  return true; // Permite o envio
}
