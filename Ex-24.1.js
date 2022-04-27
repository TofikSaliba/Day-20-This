function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function () {
  if (this.a === this.b && this.a === this.c && this.a === this.d) {
    return true;
  }
  return false;
};

let s1 = new Square(5, 7, 5, 7);
let s2 = new Square(3, 3, 3, 3);

console.log(s1.isSquare(), s2.isSquare());
