(() => {
  const canvas = document.getElementById("renderCanvas");
  canvas.width = 1280;
  canvas.width = 680;

  document.documentElement.style.setProperty(
    "--viewport-aspect", canvas.width / canvas.height
  );
})();
