import { Vec2 } from "./maths.js";
import { Config } from "./config.js";

function createCamera(zoom = 1) {
  let pos = new Vec2(0, 0);

  function screenHalfSize() {
    return new Vec2(
      Config.viewport.width, Config.viewport.height
    ).scale(1 / (2 * zoom));
  }

  return {
    get pos() { return pos; },
    get zoom() { return zoom; },

    lookAt(target) {
      pos.assign(target);
      pos.sub(screenHalfSize());
    },

    move(delta) {
      pos.add(delta);
    },

    setZoom(amount) {
      pos.add(screenHalfSize());
      zoom = amount;
      pos.sub(screenHalfSize());
    }
  };
}

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


  const camera = createCamera();
  camera.lookAt(new Vec2(canvas.width, canvas.height).scale(0.5));

  ctx.fillStyle = Config.viewport.clearColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.scale(camera.zoom, camera.zoom);
  ctx.translate(-camera.pos.x, -camera.pos.y);

  for (const thing in Scene) {
    const e = Scene[thing];
    ctx.drawImage(e.img, e.pos.x, e.pos.y);
  }

  ctx.restore();
})();
