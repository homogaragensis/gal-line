import { Config } from "./config.js";

(() => {
  const canvas = document.getElementById("renderCanvas");
  canvas.width = Config.viewport.width;
  canvas.height = Config.viewport.height;

  document.documentElement.style.setProperty(
    "--viewport-aspect", canvas.width / canvas.height
  );

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = Config.viewport.clearColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
})();
