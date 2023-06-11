var btnModo = document.getElementById("btnModo");
var imgModo = document.getElementById("imgModo");
var corpoPagina = document.body;
var modoAtual = localStorage.getItem("modo");

if (modoAtual === "dark-mode") {
  ativarModoEscuro();
}

btnModo.addEventListener("click", function() {
  if (corpoPagina.classList.contains("dark-mode")) {
    desativarModoEscuro();
  } else {
    ativarModoEscuro();
  }
});

function ativarModoEscuro() {
  corpoPagina.classList.add("dark-mode");
  localStorage.setItem("modo", "dark-mode");
  imgModo.src = "lua.png";
  imgModo.alt = "Ícone do Modo Escuro";
  corpoPagina.style.backgroundColor = "rgb(255 255 255)";
}

function desativarModoEscuro() {
  corpoPagina.classList.remove("dark-mode");
  localStorage.setItem("modo", "light-mode");
  imgModo.src = "sol.png";
  imgModo.alt = "Ícone do Modo Claro";
  corpoPagina.style.backgroundColor = "rgb(26 32 44)";
}
document.getElementById("messageForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var phoneNumber = document.getElementById("numero").value;
  var message = document.getElementById("msg").value;

  var url = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(phoneNumber) + "&text=" + encodeURIComponent(message);

  // Redireciona o usuário para o WhatsApp
  window.location.href = url;
});

