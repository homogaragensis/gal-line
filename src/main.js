(() => {
  const canvas = document.getElementById("renderCanvas");
  canvas.width = 1280;
  canvas.height = 680;

  document.documentElement.style.setProperty(
    "--viewport-aspect", canvas.width / canvas.height
  );

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
})();
