import {Point} from "./point";


export class Triangle {
        private vertex1:Point;
        private vertex2:Point;
        private vertex3:Point;
    constructor(vertex1:Point ,vertex2:Point , vertex3:Point) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }

    calculateLengthSides():number []   {
        const punto1 = this.vertex1.calculateDistance(this.vertex2)
        const punto2 = this.vertex2.calculateDistance(this.vertex3)
        const punto3 = this.vertex3.calculateDistance(this.vertex1)
        
        return [punto1,punto2,punto3]
    }
}