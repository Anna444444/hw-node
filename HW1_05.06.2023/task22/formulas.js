export function calculateTrianglePerimeter(a, b, c) {
    return a + b + c;
}

export function calculateTriangleArea(base, height) {
    return (base * height) / 2;
}

export function calculateCirclePerimeter(radius) {
    return 2 * Math.PI * radius;
}

export function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

export function calculateTrapezoidPerimeter(a, b, c, d) {
    return a + b + c + d;
}

export function calculateTrapezoidArea(base1, base2, height) {
    return ((base1 + base2) * height) / 2;
}
