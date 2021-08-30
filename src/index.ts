// basic types
let id: number = 5;
let company: string = "Troversy Media";
let isPublished: boolean = true;
let x: any = "hello";
let age: number;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Troy", true];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Troy"],
  [2, "Jill"],
  [3, "John"],
];

// union
let pid: string | number;
pid = "22";

// Enums
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// objects
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "Troy",
};

// type assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2));

// void
function log(message: string | number): void {
  console.log(message);
}

// interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}
const user1: UserInterface = {
  id: 1,
  name: "Troy",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Developer");

console.log(emp.name);
console.log(emp.register());

// generics
function getArray<T>(items: T[]): TemplateStringsArray[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["Brad", "Troy", "Jill"]);
