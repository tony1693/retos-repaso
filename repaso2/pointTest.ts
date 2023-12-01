import {Point} from "./point";
const myPoint = new Point(1,2);
const myPoint2 = new Point(3,4);
console.log(myPoint.toString());
console.log(myPoint.distanceToOrigin());
console.log(myPoint2.calculateDistance(myPoint2));
console.log(myPoint.calcularQuadrante());
const listPoints = [];
console.log(myPoint2.calculateNearest(listPoints));





