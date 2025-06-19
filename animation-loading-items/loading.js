// Ambil parameter 'next' dari URL
const params = new URLSearchParams(window.location.search);
const nextURL = params.get("goto");

// Setelah 5 detik, redirect ke halaman tujuan
setTimeout(() => {
  if (nextURL) {
    window.location.href = nextURL;
  }
}, 3000);
