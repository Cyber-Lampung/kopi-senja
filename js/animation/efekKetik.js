function efekKetik() {
  let text = "Kopi Senja | Login";

  for (let i = 0; i <= text.length; i++) {
    setTimeout(() => {
      document.getElementById("text").textContent = text.slice(0, i);
    }, i * 200);
  }

  for (let i = text.length; i >= 0; i--) {
    setTimeout(() => {
      document.getElementById("text").textContent = text.slice(0, i);
    }, (text.length + (text.length - i)) * 200);
  }
}

setInterval(efekKetik, 7000);

efekKetik();
