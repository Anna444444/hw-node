const log = console.log;

import { calculateTrianglePerimeter } from "./formulas.js";
import { calculateTriangleArea } from "./formulas.js";
import { calculateCirclePerimeter } from "./formulas.js";
import { calculateCircleArea } from "./formulas.js";
import { calculateTrapezoidPerimeter } from "./formulas.js";
import { calculateTrapezoidArea } from "./formulas.js";
/*
Лучше всё одним импортом делать:
import { calculateTrianglePerimeter,
         calculateTriangleArea,
         calculateCirclePerimeter,
         calculateCircleArea,
         calculateTrapezoidPerimeter,
         calculateTrapezoidArea } from "./formulas.js";

Или так:
import * as formula from "./formulas.js";
и тогда вызовы будет такие: formula.calculateTrianglePerimeter(a,b,c);
*/

let a = 5;
let b = 4;
let c = 6;
let trianglePerimeter = calculateTrianglePerimeter(a, b, c);
let triangleArea = calculateTriangleArea(b, 3);

log("Периметр треугольника:", trianglePerimeter);
log("Площадь треугольника:", triangleArea);

let radius = 7;
let circlePerimeter = calculateCirclePerimeter(radius);
let circleArea = calculateCircleArea(radius);

log("Периметр круга:", circlePerimeter.toFixed(2));
log("Площадь круга:", circleArea.toFixed(2));

let base1 = 5;
let base2 = 7;
let height = 4;
let trapezoidPerimeter = calculateTrapezoidPerimeter(base1, base2, a, b);
let trapezoidArea = calculateTrapezoidArea(base1, base2, height);

log("Периметр трапеции:", trapezoidPerimeter);
log("Площадь трапеции:", trapezoidArea);
