function compute(action, X, y) {
  if (action === "add") {
    return x + y;
  } else if (action === "divide") {
    return x / y;
  }
}
console.log(compute("add", 10, 5));
console.log(compute("divide", 10, 5));



