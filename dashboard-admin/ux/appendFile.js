// import { path } from "path";

function navbar() {
  fetch("../../../component/navbar/navbar.html")
    .then((response) => response.text())
    .then((header) => {
      document.getElementById("Headernavbar").innerHTML = header;

      const scripts = document.createElement("script");
      scripts.src = "../../component/navbar/navbar.js";
      document.body.appendChild(scripts);

      const li = document.createElement("li");

      li.innerHTML = `
    
    <li>
      <a href="/listUser">List User</a>
    </li>
    
    `;

      const nav = document.getElementById("nav");

      nav.append(li);
    });
}

function appendSearchFeature() {
  // search bar feature
  fetch("../../../component/input/input.html")
    .then((response) => response.text())
    .then((search) => {
      document.getElementById("searchAppend").innerHTML = search;
    });
}

appendSearchFeature();
