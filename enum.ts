
// enum    An enumeration is away to define a set of name constant.Enums
// allow you to define a collection of related values that can be represented by human-readable names.
 


enum direction1 {
    up,  // enum ki pehli value by default 0 hoti h
    down, //1
    left, //2
    right, //3
}

// enum with custom values

enum direction2 {
    up= 1, // 1    //enum line wise value likhta jesy hm 1 assign krway to ye agy khud 2 3 4 likhy ga
    down, //-1
    left, //-2
    right, //-3
}

let direction3 : direction2 = direction2.up
console.log(direction3);


// string enum
enum colorsname {
    red = "red",
    yellow = "yellow",
    green = "green",
    blue = "blue",
}

let favcolor: string = colorsname.yellow
console.log(favcolor);

// reverse mapping..

enum direction4 {
    up= 1,
    down,
    left,
    right,
}

// Accessing enum values.

let direction: string = direction4[2];  // down ay ga 1 py up ay ga
console.log(direction);


// const enum..


const enum states{
    solid,
    liquide= -2,
    gas
}

let matterstate : states = states.solid    
console.log(matterstate);

