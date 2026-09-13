class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  assign(v) {
    this.x = v.x;
    this.y = v.y;
  }
  
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  
  scale(x) {
    this.x *= x;
    this.y *= x;
    return this;
  }
  
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y); 
  }
  
  normalize() {
    const l = this.length();
    if (l == 0) return this;
    return this.scale(1.0 / l); 
  }
  
  copy() {
    return new Vec2(this.x, this.y);
  }
};

export { Vec2 };

