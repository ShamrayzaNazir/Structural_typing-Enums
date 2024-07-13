
// structural typing


interface deal1{
    food: string
}
interface deal2{
    food: string
    drink: string
}

let person1_order: deal1 = {
    food:"biryani"
}

let person2_order : deal2 = {
    food: "biryani",
    drink:"sting"
}

let person1_table: deal1 = person2_order;
let person2_table : deal2 = person1_order;


// correct kiya nichy

interface deal1{
    food: string
}
interface deal2{
    food: string
    drink: string
}

let person1_order: deal1 = {
    food:"biryani"
}

let person2_order : deal2 = {
    food: "biryani",
    drink:"sting"
}

let person1_table: deal1 = person1_order;
let person2_table : deal2 = person2_order;

console.log(person1_table);
console.log(person2_table);

