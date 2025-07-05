function UploadFile() {
  // upload

  const file = document.getElementById("file").value;
  const button = document.getElementById("buttonUpload");

  button.addEventListener("click", () => {
    setTimeout(() => {
      button.textContent = "tunggu";
    }, 100);
    setTimeout(() => {
      button.textContent = "Upload";
    }, 5000);
  });
}

UploadFile();

function profileMe() {
  const btnOpen = document.getElementById("openProfile");
  const profile = document.getElementById("profileMe");

  btnOpen.addEventListener("click", () => {
    if (btnOpen.click) {
      profile.style.display = "block";
      profile.style.transition = "all 2s ease";
    }
  });

  const x = document.getElementById("x");

  x.addEventListener("click", () => {
    if (x.click) {
      profile.style.display = "none";
    }
  });
}

profileMe();
