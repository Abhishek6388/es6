// declare class
//module.exports = Shape;
// declare class

// export class using module.exports 
// export class
module.exports = class Shape {
  constructor() {
    this.color = "red";
  }
  drawShape() {
    console.log("Drawing a shape");
  }
  calculateArea() {
    console.log("don't know area of unknown shape");
  }
};
// export default Shape;
// export class using module.exports