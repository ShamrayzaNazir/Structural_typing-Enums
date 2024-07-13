// structural typing
var person1_order = {
    food: "biryani"
};
var person2_order = {
    food: "biryani",
    drink: "sting"
};
var person1_table = person2_order;
var person2_table = person1_order;
var person1_order = {
    food: "biryani"
};
var person2_order = {
    food: "biryani",
    drink: "sting"
};
var person1_table = person1_order;
var person2_table = person2_order;
console.log(person1_table);
console.log(person2_table);
