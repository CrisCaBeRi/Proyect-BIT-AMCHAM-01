const EMAIL_FORM = document.getElementById("email-form");
EMAIL_FORM.addEventListener("submit", function (event) {
  alert("Gracias por registrar tu correo");
});
function navHistory() {
  location.href = "./history.html";
}
function navToMembers() {
  location.href = "./members.html";
}
