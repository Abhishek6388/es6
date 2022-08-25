import Shape from "./shape";
module.exports = class Circle extends Shape {
  constructor() {
    super();
  }
  calculateArea() {
    console.log("Area od circle");
  }
}; 