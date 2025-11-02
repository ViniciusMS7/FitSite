// Quando clicar no botão JOIN NOW, rola até a seção "WHAT WE OFFER"
document.getElementById("joinBtn").addEventListener("click", function() {
  document.querySelector(".offers").scrollIntoView({ behavior: "smooth" });
});
