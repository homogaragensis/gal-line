import { Vec2 } from "./maths.js";
import { Config } from "./config.js";

(() => {
  const canvas = document.getElementById("renderCanvas");

  canvas.width = Config.viewport.width;
  canvas.height = Config.viewport.height;

  document.documentElement.style.setProperty(
    "--viewport-aspect", canvas.width / canvas.height
  );

  const ctx = canvas.getContext("2d");

  const images = {
    chicken: document.getElementById(Config.images.chicken),
    leg: document.getElementById(Config.images.leg),
    background: document.getElementById(Config.images.background),
  };

  const distance = 200;

  const Scene = {
    background: {
      img: images.background,
      pos: new Vec2(0, Config.scene.backgroundY)
    },
    chicken: {
      img: images.chicken,
      pos: new Vec2(
        Config.viewport.width / 2 - distance - images.chicken.width, 
        Config.scene.groundY - images.chicken.height
      )
    },
    leg: {
      img: images.leg,
      pos: new Vec2(
        Config.viewport.width / 2 + distance,
        Config.scene.groundY - images.leg.height
      )
    },
  };

  ctx.fillStyle = Config.viewport.clearColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (const thing in Scene) {
    const e = Scene[thing];
    ctx.drawImage(e.img, e.pos.x, e.pos.y);
  }
})();
