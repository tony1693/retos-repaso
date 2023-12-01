export class Point {
    private x:number;
    private y:number;

constructor(x , y) {
    this.x = x;
    this.y = y;
    }
public getX():number {
    return this.x;
    }
public getY():number {
    return this.y;
    }
public setX(newValueX):number {
    return this.x = newValueX;
    }
public setY(newvalueY):number {
    return this.y = newvalueY;
    }

toString():string {
    return `(${this.x},${this.y})`;
    }
distanceToOrigin():number {
    const distance = Math.sqrt(this.x * this.x + this.y * this.y);
        return distance;
    }
calculateDistance(anotherPoint: Point): number {
        const xDis = this.x - anotherPoint.getX();
        const yDis = this.y - anotherPoint.getY();
        const distance = Math.sqrt(xDis * xDis + yDis * yDis);
        return distance;
    }
    calcularQuadrante(): number {
        if (this.x === 0 || this.y === 0) {
            return 0;
        } else if (this.x > 0 && this.y > 0) {
            return 1;
        } else if (this.x > 1 && this.y > 1) {
            return 2;
        } else if (this.x > 2 && this.y > 2) {
            return 3;
        } else {
            return 4;
        }
    }

calculateNearest(points: Point[]): Point | null {
        if (points.length === 0) {
            return null; 
        }

        let closestPoint = points[0];

        for (let i = 1; i < points.length; i++) {
            const currentDistance = this.calculateDistance(points[i]);
            const closestDistance = this.calculateDistance(closestPoint);

            if (currentDistance < closestDistance) {
                closestPoint = points[i]; 
            }
        }

        return closestPoint;
    }
} 