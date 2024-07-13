// enum    An enumeration is away to define a set of name constant.Enums
// allow you to define a collection of related values that can be represented by human-readable names.
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 0] = "up";
    direction1[direction1["down"] = 1] = "down";
    direction1[direction1["left"] = 2] = "left";
    direction1[direction1["right"] = 3] = "right";
})(direction1 || (direction1 = {}));
// enum with custom values
var direction2;
(function (direction2) {
    direction2[direction2["up"] = 1] = "up";
    direction2[direction2["down"] = 2] = "down";
    direction2[direction2["left"] = 3] = "left";
    direction2[direction2["right"] = 4] = "right";
})(direction2 || (direction2 = {}));
var direction3 = direction2.up;
console.log(direction3);
// string enum
var colorsname;
(function (colorsname) {
    colorsname["red"] = "red";
    colorsname["yellow"] = "yellow";
    colorsname["green"] = "green";
    colorsname["blue"] = "blue";
})(colorsname || (colorsname = {}));
var favcolor = colorsname.yellow;
console.log(favcolor);
// reverse mapping..
var direction4;
(function (direction4) {
    direction4[direction4["up"] = 1] = "up";
    direction4[direction4["down"] = 2] = "down";
    direction4[direction4["left"] = 3] = "left";
    direction4[direction4["right"] = 4] = "right";
})(direction4 || (direction4 = {}));
var direction = direction4[2]; // down ay ga 1 py up ay ga
console.log(direction);
var matterstate = 0 /* states.solid */;
console.log(matterstate);
