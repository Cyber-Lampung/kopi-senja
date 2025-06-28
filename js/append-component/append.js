// function append input

function input() {
  fetch("http://localhost:5500/component/input/input.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("input-email").innerHTML = data;
      document.getElementById("input-username").innerHTML = data;
      document.getElementById("input-password").innerHTML = data;
    });
}

input();

function getElement() {
  const button = document.getElementById("button");
  const buttonAtri = button.attributes;

  try {
    console.log(buttonAtri.getNamedItem("id"));
  } catch {
    console.log("error");
  }

  //console.log(inputUsername);
}

getElement();
