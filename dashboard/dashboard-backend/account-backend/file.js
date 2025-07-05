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
