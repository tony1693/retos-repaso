import {Triangle} from "./triangle";
import {Point} from "./point";
const punto1 = new Point(1,2);
const punto2 = new Point(1,2);
const punto3 = new Point(1,2);
const triangulo1 = new Triangle(punto1,punto2,punto3);
console.log(triangulo1.calculateLengthSides);

