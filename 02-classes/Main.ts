import { Shape } from "./Shape";
import {Circle} from "./Circle"
import {Rectangle} from "./Rectangle"
import {Square} from "./Square"


// let shp = new Shape(10, 20);

// let circ = new Circle(40, 50, 30);

// let sq = new Square(100, 200);

// let rec = new Rectangle(300,500);

// console.log(shp.getInfo());
// console.log(circ.getInfo());
// console.log(sq.getInfo());
// console.log(rec.getInfo());

let shapes:Shape[] = [new Shape(10,20), new Circle(40,50,60)];

for(var shape of shapes)
{
    console.log(shape.getInfo());
}
