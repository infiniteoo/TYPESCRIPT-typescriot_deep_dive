"use strict";
// basic types
let id = 5;
let company = "Troversy Media";
let isPublished = true;
let x = "hello";
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "Troy", true];
// Tuple Array
let employee;
employee = [
    [1, "Troy"],
    [2, "Jill"],
    [3, "John"],
];
// union
let pid;
pid = "22";
// Enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "Troy",
};
// type assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Troy",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const troy = new Person(1, "Troy");
const brad = new Person(2, "Brad Jordan");
// subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "Developer");
console.log(emp.name);
console.log(emp.register());
