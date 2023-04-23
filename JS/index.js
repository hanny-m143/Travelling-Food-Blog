var email = "xyz@company.com";
var pass = "3210";

function authorize() {
  var inputEmail = document.getElementById("gmail").value;
  var inputpass = document.getElementById("pass").value;
  if (email == inputEmail && pass == inputpass) {
    document
      .getElementById("inputform")
      .setAttribute("action", "./HTML/Home.html");
    document.getElementById("but").setAttribute("type", "submit");
  } else if (email !== inputEmail && pass == inputpass) {
    document.getElementById("inputdiv").style.borderColor = "red";
    document.getElementById("passdiv").style.borderColor = "#de741c";
    document.getElementById("bdy").style.backgroundImage =
      "linear-gradient(70deg, red, #593e67)";
    document.getElementById("warning").innerHTML =
      "Incorrect UserId Please try again";
  } else if (email == inputEmail && pass != inputpass) {
    document.getElementById("inputdiv").style.borderColor = "#de741c";
    document.getElementById("passdiv").style.borderColor = "red";
    document.getElementById("bdy").style.backgroundImage =
      "linear-gradient(70deg, #593e67, red)";
    document.getElementById("warning").innerHTML =
      "Incorrect Password please try again";
  } else {
    document.getElementById("inputdiv").style.borderColor = "red";
    document.getElementById("passdiv").style.borderColor = "red";
    document.getElementById("bdy").style.backgroundImage =
      "linear-gradient(70deg, red, red)";
    document.getElementById("warning").innerHTML =
      "Incorrect UserId and Password Please try again";
  }
}

function visiblePass() {
  document.getElementById("pass").removeAttribute("type");
  document
    .getElementById("passimg")
    .setAttribute("src", "./Asset/Images/visiblepass.png");
  document.getElementById("passimg").style.transform = "rotateY(180deg)";
}

function hidePass() {
  document.getElementById("pass").setAttribute("type", "password");
  document
    .getElementById("passimg")
    .setAttribute("src", "./Asset/Images/hiddenpass.png");
  document.getElementById("passimg").style.transform = "rotateY(-180deg)";
}
