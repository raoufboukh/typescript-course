// tsc   tsc name.ts   tsc -w   tsc -init   node name.js

/*
    Type annotation with arrays in TypeScript
*/
//################### lesson one ###################
// let all: string | number | boolean = "Raouf";

// all = 'zaki';
// all = 25;
// all = true;


// // let myfriends = ['oussama','raid',7];
// let myfriends:string[] = ['oussama','raid'];

// for(let i = 0; i < myfriends.length; i++){
//     console.log(myfriends[i].repeat(3));
// }

/*
    Type annotation with multidimensional arrays in TypeScript
*/
//################### lesson two ###################
// let arrayOne: number[] = [1, 2, 3, 4, 5];
// let arrayTwo: string[] = ["A", "B", "C"];
// let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

// let arrayFour: (string | number | string[] | boolean)[] = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];


/*
Type Annotations With Functions

- noImplicitAny

- noImplicitReturns
--- Will Check All Code Paths In A Function To Ensure They Return A Value

- noUnusedLocals
--- Report Errors On Unused Local Variables

- noUnusedParameters
--- Report Errors On Unused Parameters In Functions.
*/
//################### lesson three ###################

// let showMsg = true;

// function showMessage(name: string, age: number,salary: number) {
//     let test = 10;
//     if (showMsg) {
//         return `Hello ${name}, your age is ${age} and your salary is ${salary} and ${test}`;
//     }
//     return 'No Message';
// }

// console.log(showMessage('Raouf', 25, 5000));

/*
    Function
    - Optional and Default Parameters

    - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
    - "?" Optional Parameter
*/
//################### lesson four ###################
// function showData(name: string,age: number,salary?: number){
//     return `Hello ${name}, your age is ${age} and your salary is ${salary}`;
// }

// console.log(showData('Raouf',25,5000));

/*
    Function
    - Rest Parameter
    - What About Float => All Is Under Type Number
*/
//################### lesson five ###################
// function showInfo(...nums: number[]){
//     let sum = 0;
//     // for(let i = 0; i < nums.length; i++){
//     //     sum += nums[i];
//     // }
//     // return sum;
//     nums.forEach(num => sum += num);
//     return sum;
// }


// console.log(showInfo(1,2,3,4,5,6,7,8,9,10));


/*
    Function
    - Anonymous Function
    - Arrow Function
*/

//################### lesson six ###################
// function calculate(numOne: number, numTwo: number):number {
    //     return numOne + numTwo;
    // }
    
    // console.log(calculate(10, 20)); // 30
    // // console.log(calculate("10", "20")); // We Don't Need This To Work
    // console.log(calculate(+true, +true)); // 2
    
    //################### lesson seven ###################

// function printInfo(valueOne:string | number , valueTwo:string | number):string {
//     return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
// }

// console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
// console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// // console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

// //################### lesson eight ###################

// let arr: (number | boolean[] | (string | (string | number)[])[])[]; // Array Of Number Or Array Of Boolean Or Array Of Array Of String Or Array Of Array Of Number
// arr = [1,[true,false],["a",["b",1]],["c",["d",3]]];

//################### lesson nine ###################

// function reportErrors(username, age: number) {
//     let rank = "Professor";
//     return `Username: ${username}`;
//     console.log("We Will Not Reach Here");
// }

// console.log(reportErrors("Elzero", 40));


//################### lesson ten ###################

// let nothing;
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c) {
//     return `${a}${b}${c}`;
// }

// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(nothing,nothing,theName)); // Elzero

//################### lesson eleven ###################

// function showMsg(user?: string, age?: number|string, country?: string) {
//   return `${user} ${age} ${country}`;
// }

// console.log(showMsg());
// console.log(showMsg("Elzero"));
// console.log(showMsg("Elzero", 40));
// console.log(showMsg("Elzero", "40", "Egypt"));

//################### lesson twelve ###################

// Write The Function Here

// Using The Function => Do Not Edit
// function printInConsole(...vars:(number | string | boolean)[]){
//     for(let i = 0;i < vars.length;i++){
//         if (typeof vars[i] === 'string') {
//             console.log(`The Value Is ${vars[i]} And Type Is string`);
//         }else if (typeof vars[i] === "number") {
//           console.log(`The Value Is ${vars[i]} And Type Is number`);
//         }else{
//             console.log(`The Value Is ${vars[i]} And Type Is boolean`);
//         }
//     }
//     return 'Done';
// } 
// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));




//################### lesson thirteen ###################

// type Buttons = {
//     up:string,
//     down:string,
//     right:string,
//     left:string,
// };


// type last = Buttons & {
//     x:boolean,
// }

// function getAction(btn :last) {
//     console.log(`Action For Button Up Is ${btn.up}`);
//     console.log(`Action For Button Down Is ${btn.down}`);
//     console.log(`Action For Button Right Is ${btn.right}`);
//     console.log(`Action For Button Left Is ${btn.left}`);
//     console.log(`Action For Button x Is ${btn.x}`);
// }

// getAction({ up: "Go Up", down: "Go Down", right:'Go Right',left:'Go Left',x:true,});

//################### lesson fourteen ###################

/*
Data Types
- Tuple
--- Is Another Sort Of Array Type
--- We knows Exactly How Many Elements It Contains
--- We Knows Which Types It Contains At Specific Positions
*/


// let article: readonly[number,string,boolean] = [7,"raouf",true];
// article = [10, "raid", true];
// // article.push(10);
// console.log(article);


//################### lesson fifteen ###################

/*
Data Types
- Void
--- Function That Will Return Nothing
--- Function In JavaScript That Not Return A Value Will Show undefined
--- undefined is not void
- Never
--- Return Type Never Returns
--- The Function Doesn't Have A Normal Completion
--- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
*/


// function logging(msg: string) : void {
//   console.log(msg);
//   return;
// }

// console.log(logging("Iam A Message"));
// console.log("Test");

// const fail = (msg: string) => {
//   throw new Error(msg);
// //   return 10;
// }

// function alwaysLog(name: string) : never {
//   while(true) {
//     console.log(name);
//   }
// }

// alwaysLog("Osama");
// console.log("Test");

//################### lesson sixteen ###################


/*
  Data Types
  - Enums => Enumerations
  --- Allow Us To Declare A Set Of Named Constants
  --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
  --- It Organize Your Code
  --- By Default Enums Are Number-Based, First Element Is 0
  --- Theres A Numeric Enums
  --- Theres A String-Based Enums
  --- Theres Heterogeneous Enums [String + Number]
  - Enums => Enumerations
  --- Enum Can Refer To Other Enum
  --- Enum Can Refer To Same Enum
  --- Enum Can Have Calculations
  --- Enum Can Have Functions
*/

// const KIDS = 15;
// const EASY = 9;
// const MEDIUM = 6;
// const HARD = 3;

// enum level{
//     KIDS = 15,
//     EASY = 9,
//     MEDIUM = 6,
//     HARD = 3
// };

// const lvl = 'easy';
// if (lvl === 'easy') {
//     console.log(`The Level Is ${lvl} And Number Of Seconds Is ${level.EASY}`);
// }


//################### lesson seventeen ###################


/*
  Data Types
  - Type Assertions
  --- Sometime Compiler Doesnt Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/

// let myImg = document.getElementById("myImg") as HTMLImageElement;
// let myImg = <HTMLImageElement>document.getElementById("myImg");
// console.log(myImg.src);


// let data:any = 1000;
// console.log((data as string).repeat(3));

//################### lesson eightteen ###################

/*
  Data Types
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/


// let all: number | string = 100;

// type A = {
//   one: string,
//   two: number,
//   three: boolean
// }

// type B = A & {
//   four: number
// }

// type C = {
//   five: boolean
// }

// type mix = A & C;

// function getActions(btns: mix) {
//   console.log(`Hello ${btns.one}`);
//   console.log(`Hello ${btns.two}`);
//   console.log(`Hello ${btns.three}`);
//   console.log(`Hello ${btns.five}`);
// }

// getActions({ one: "String", two: 100, three: true, five: true });


//################### lesson nineteen ###################

// Write Your Code Here
// type n = number;
// // Do Not Edit Here
// let myData: n;
// myData = 1000; // No Problem Here
// myData = +true; // No Problem Here
// // Write Your Code Here
// type a = number;
// type b = boolean;
// type mix = a | b;
// // Do Not Edit Here
// let myInfo: mix;
// myInfo = 1000; // No Problem Here
// myInfo = true; // No Problem Here

//################### lesson twenty ###################

// Write Your Code Here
// type Info = {
//     theName: string,
//     theAge: number,
// };

// type Full = Info & {
//     country:string,
// };
// enum Full Info & {
//     country:'',
// };

// Do Not Edit Here
// function showInfo(data: Info) {
//   console.log(`The Name Is ${data.theName}`);
//   console.log(`The Age Is ${data.theAge}`);
// }
// console.log(showInfo({ theName: "Elzero", theAge: 40 }));

// function showFullInfo(data: Full) {
//   console.log(`The Name Is ${data.theName}`);
//   console.log(`The Age Is ${data.theAge}`);
//   console.log(`The Country Is ${data.country}`);
// }
// console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));




//################### lesson twenty one ###################


// function yesOrNo(val: number | boolean) :boolean {
//   if(typeof val === "number" && val > 10){
//     return true;
//   }else{
//     return false;
//   }
// }

// // Do Not Edit Here
// // console.log(yesOrNo("100")); // Error
// console.log(yesOrNo(30)); // True
// console.log(yesOrNo(8)); // False



//################### lesson twenty two ###################

// type custom = "Yes" | "No";

// function isHeOld(age: number | string[]) : custom | number {
//   if(typeof age === "number" && age > 40){
//     return "Yes";
//   }else{
//     return "No";
//   }
// }

// // Do Not Edit Here
// // console.log(isHeOld("100")); // Error
// console.log(isHeOld(45)); // "Yes"
// console.log(isHeOld(30)); // "No"



//################### lesson twenty three ###################
// let post: readonly [number, string, boolean]; // Tuple
// // post = [100, 200, "Title"]; // Error
// // post = ["Title", 100, true]; // Error
// post = [100, "Title", true]; // Good

// // post.push("Elzero"); // Error => Cant Add

// // Create Destructuring Here
// const [id,title,state] = post;

// // Do Not Edit Here
// console.log(id); // 100
// console.log(title); // "Title"
// console.log(state); // true


//################### lesson twenty four ###################

// Create Enums + Function Here
// function num():20{
//   return 20;
// }
// enum Game {
//   Easy = 100,
//   Medium = Easy - 20,
//   Hard = Medium - (Easy/2),
//   Insane = num(),
// }

// // Output
// console.log(Game.Easy); // 100
// console.log(Game.Medium); // 80
// console.log(Game.Hard); // 30
// console.log(Game.Insane); // 20


//################### lesson twenty five ###################


// const user: {
//   username: string;
//   age: number | string;
//   website?: string;
//   skills: {
//     frontEnd: string[];
//     backEnd: (string | number)[];
//   };
// } = {
//   username: "Elzero",
//   age: 40,
//   website: "Elzero.org",
//   skills: {
//     frontEnd: ["HTML", "CSS", "JS"],
//     backEnd: ["PHP", "Python"],
//   },
// };

// // We Need To Remove Error From This Edits
// user.username = "Osama";
// user.age = "40";
// user.skills.backEnd.push(100);


//################### lesson twenty six ###################

/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/


// interface User {
//   id:number,
//   readonly userName:string,
//   country:string,
//   sayHello(): string,
//   getDouble(num:number) : number;
// };

// const user2: User = {
//   id:1,
//   userName:'Raouf',
//   country:'Algeria',
//   sayHello(){
//     return`Hello ${this.userName}`;
//   },
//   getDouble(n){
//     return n * 2;
//   }
// }

// console.log(user2.sayHello());
// console.log(user2.getDouble(10));

// function getInfo(data: User){
//   console.log(`Hello ${data.userName}, Your Country Is ${data.country} And Your ID Is ${data.id}`);
// }

// getInfo(user2);



//################### lesson twenty seven ###################

// interface User {
//   id: number;
//   username: string;
//   country: string;
// }

// interface Moderator {
//   role: string | number;
// }

// interface Admin extends User, Moderator {
//   protect?: boolean;
// }

// let user: Admin = {
//   id: 100,
//   username: "Elzero",
//   country: "Egypt",
//   role: "Mod",
//   protect: true,
// };

// console.log(user.id);




//################### lesson twenty eight ###################

// class User {
//   id: number;
//   username: string;
//   country: string;
//   sayHello: () => string;
//   constructor(id: number, username: string, country: string) {
//     this.id = id;
//     this.username = username;
//     this.country = country;
//     this.sayHello = function(){
//       return `Hello ${this.username}`;
//     };
//   };
//   sayCountry(){
//     return `Hello ${this.country}`;
//   }
// };



// let user = new User(1, "Elzero", "Egypt");

// console.log(user.id);
// console.log(user.username);
// console.log(user.country);
// console.log(user.sayHello());
// console.log(user.sayCountry());



//################### lesson twenty nine ###################

/*
  Class
  - Implement Interface
  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/

/*
  Class
  - Get And Set Accessors
*/

// class User {
//   public get username(): string {
//     return this._username;
//   }
//   public set username(value: string) {
//     this._username = value;
//   }
//   msg: () => string;
//   constructor(private _username: string, public salary: number, public readonly address: string) {
//     this.msg = function () {
//       return `Hello ${this._username} Your Salary Is ${this.salary}`;
//     }
//   }
//   sayMsg() {
//     return `Hello ${this._username} Your Salary Is ${this.salary}`;
//   }
//   // get username() : string {
//   //   return this._username;
//   // }
//   // set username(value: string) {
//   //   this._username = value;
//   // }
// }

// let userOne = new User("Elzero", 6000, "Cairo");

// console.log(userOne.username);
// userOne.username = "Ahmed";
// console.log(userOne.username);
// console.log(userOne.salary);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());



//################### lesson thirty ###################

// Edit The Interface To Fix The Problems
// interface Member {
//   id: number | string;
//   username: string;
//   country?: string;
//   state: boolean;
//   getName(): string;
// }

// // Do Not Edit The Code Below
// let user: Member = { // Property 'country' is missing in type
//   id: 100,
//   username: "Elzero",
//   state: true,
//   getName() { // 'getName' does not exist in type 'Member'
//     return this.username;
//   }
// }

// user.id = 200;
// user.id = "200"; // Type 'string' is not assignable to type 'number'
// user.state = false; // Cannot assign to 'state' because it is a read-only property



//################### lesson thirty one ###################

// Create Interface Here
// interface Client {
//   id:number;
//   username:string;
//   active:boolean;
//   discount:number;
//   getPrice(p:number):number;
// };

// // Do Not Edit The Code Below
// let client: Client = {
//   id: 100,
//   username: "Elzero",
//   active: true,
//   discount: 10,
//   getPrice(price: number) {
//     return price - this.discount;
//   }
// }

// console.log(`Client Id Is ${client.id}`);
// console.log(`Client Name Is ${client.username}`);
// console.log(`Client Has Dicount ${client.discount}`);
// console.log(`Client Product After Discount Is ${client.getPrice(200)}`);




//################### lesson thirty two ###################

// Do Not Edit The Code Below
// interface Man {
//   title: string;
//   weight: number;
//   age: number;
// }

// interface Bird {
//   canFly: boolean;
// }

// interface Superman extends Man,Bird  {
//   bodyType:string;
//   origin:string;
// }
// let creature: Superman = {
//   title: "Superman",
//   weight: 100,
//   age: 500,
//   canFly: true,
//   bodyType: "Iron",
//   origin: "Krypton"
// } 



//################### lesson thirty two ###################

// Create Class Here

// class Player {
//   constructor(public username:string, public type:string,public level:(number|string),public vip:boolean = false) {};
//   details(){
//     return `${this.vip ? "VIP":''} ${this.username}, Type Is ${this.type} Level Is ${this.level}`;
//   }
// };

// // Do Not Edit The Code Below
// let player1 = new Player("Osama", "Mage", 90, true);
// let player2 = new Player("Shady", "Archer", "85", false);
// let player3 = new Player("Amr", "Fighter", 50, true);
// let player4 = new Player("Mahmoud", "Assassin", 77);

// console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
// console.log(player2.details()); // Shady, Type Is Archer Level Is 85
// console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
// console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77


//################### lesson thirty three ###################

// class Shorten {
//   constructor(public id: number,public username: string,protected title: string) {}
// }

// let tester = new Shorten(100, "Elzero", "Developer");

// console.log(tester.id);
// console.log(tester.username);


//################### lesson thirty four ###################

// class Show {
//   constructor (private _title: string) {}
//   public get title() : string {
//     return this._title;
//   }
//   public set title(v : string) {
//     this._title = v;
//   }
// }

// let tester = new Show("Elzero");

// console.log(tester.title); // Property 'title' does not exist on type 'Show'
// tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
// console.log(tester.title); // Property 'title' does not exist on type 'Show'


//################### lesson thirty five ###################

// interface Play {
//   id: number;
//   title: string;
//   level: number | string;
//   logIn(): void;
//   logOut(msg: string): void;
// }

// // Create Your Class Here
// class Player implements Play {
//   constructor(public id: number,public title: string,public level: string | number){};
//   logIn(): void {
//     console.log("Logged In");
//   };
//   logOut(msg: string): void {
//     console.log(`Logged Out, ${msg}`);
//   };
// };

// let player1 = new Player(100, "Elzero", 95);

// console.log(player1.id); // 100
// console.log(player1.title); // "Elzero"
// console.log(player1.level); // 95
// player1.logIn(); // Logged In
// player1.logOut("Good Bye"); // Logged Out, Good Bye


//################### lesson thirty six ###################


// abstract class Food {
//   constructor(public name: string, public price: number) {}
//   abstract getDetails(): string;
// }

// class FastFood extends Food {
//   constructor(name: string, price: number) {
//     super(name, price);
//   }
//   getDetails(): string {
//     return `${this.name} Price Is ${this.price}`;
//   }
// }
// // let food = new Food("Pizza", 200); // Cannot create an instance of an abstract class.

// let burger = new FastFood("Burger", 100);

// console.log(burger.getDetails()); // Burger Price Is 100

//################### lesson thirty seven ###################

/*
  Class
  - Polymorphism & Method Override

  - Polymorphism
  --- Classes Have The Same Methods But Different Implementations

  - Method Override
  --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
  --- A Method In Child Class Must Have Same Name As Parent Class

  --- noImplicitOverride
*/

// class Player {
//   constructor(public name: string) {}
//   attack() : void {
//     console.log("Attacking Now");
//   }
// }

// class Amazon extends Player {
//   constructor(name: string, public spears: number) {
//     super(name);
//   }
//   override attack(): void {
//     // super.attack();
//     console.log("Attacking With Spear");
//     this.spears -= 1;
//   }
// }

// class Barbarian extends Player {
//   constructor(name: string, public axeDurability: number) {
//     super(name);
//   }
//   override attack(): void {
//     // super.attack();
//     console.log("Attacking With Axe");
//     this.axeDurability -= 1;
//   }
// }

// let barOne = new Barbarian("Elzero", 100);

// console.log(barOne.name);
// barOne.attack();
// console.log(barOne.axeDurability);


//################### lesson thirty eight ###################

/*
  Generics
  - Help Write A Reusable Code
  - Allow To Pass Type As A Parameter To Another Type
  - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
  - We Can Create:
  --- Generic Classes
  --- Generic Functions
  --- Generic Methods
  --- Generic Interfaces

  Generics
  - Arrow Function
  - Multiple Types
  - Discussion
*/


// function returnNumber(val: number): number {
//   return val;
// }
// function returnString(val: string): string {
//   return val;
// }
// function returnBoolean(val: boolean): boolean {
//   return val;
// }

// console.log(returnNumber(100));
// console.log(returnString("Elzero"));
// console.log(returnBoolean(true));

// function returnType<T>(val: T): T {
//   return val;
// }

// console.log(returnType<number>(100));
// console.log(returnType<string>("Elzero"));
// console.log(returnType<boolean>(true));
// console.log(returnType<number[]>([1, 2, 3, 4]));



// function returnType<T>(val: T): T {
//   return val;
// }

// console.log(returnType<number>(100));
// console.log(returnType<string>("Elzero"));

// const returnTypeArrowSyntax = <T>(val: T): T => val;

// console.log(returnTypeArrowSyntax<number>(100));
// console.log(returnTypeArrowSyntax<string>("Elzero"));

// function testType<T>(val: T): string {
//   return `The Value Is ${val} And Type Is ${typeof val}`;
// }

// console.log(testType<number>(100));
// console.log(testType<string>("Elzero"));

// function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
//   return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
// }

// console.log(multipleTypes<string, number>("Osama", 100));
// console.log(multipleTypes<string, boolean>("Elzero", true));



//################### lesson thirty nine ###################


// class User<T> {
//   constructor(public username: T) {}
//   show(msg:T):void{
//     console.log(msg);
//   }
// }

// let userOne = new User("Elzero");
// console.log(userOne.username);
// userOne.show("Hello");




//################### lesson forty ###################


// interface Book{
//   item:string,
//   title:string,
//   price:number,
// }


// class Collection<T> {
//   public data : T[] = [];
//   add(item:T){
//     this.data.push(item);
//   }
// }

// let books = new Collection<Book>();
// books.add({item:'book',title:'Raouf', price:100});

// console.log(books.data);




//################### lesson forty one ###################


// Do Not Edit
// type numandstring = number | string;

// abstract class Game {
//   constructor(public title: string, public price: numandstring) {}
//   abstract getLocation() : string;
//   abstract getDiscount() : string;
// }

// // Start Edit And Fix
// class RPG extends Game {
//   constructor(title: string, price: numandstring, public rate: number) {
//     super(title, price);
//   };
//   getLocation(): string {
//     return "Location";
//   };
//   getDiscount(): string {
//     return "Discount";
//   }
// }

// class Action extends Game {
//   constructor(title: string,price: numandstring, public rate: number,public company: string) {
//     super(title, price);
//   };
//   getLocation(): string {
//     return "Location";
//   }
//   getDiscount(): string {
//     return "Discount";
//   }
// }
// // End Edit And Fix

// // Do Not Edit
// let gameOne = new RPG("Ys", 100, 10);
// let gameTwo = new Action("Uncharted", 90, 15, "Sony");

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// console.log(gameOne.rate); // 10
// console.log(gameOne.getDiscount()); // "Discount"
// console.log(gameOne.getLocation()); // "Location"

// console.log(gameTwo.title); // "Uncharted"
// console.log(gameTwo.price); // 90
// console.log(gameTwo.rate); // 15
// console.log(gameTwo.company); // "Sony"
// console.log(gameTwo.getDiscount()); // "Discount"
// console.log(gameTwo.getLocation()); // "Location"



//################### lesson forty two ###################


// Write Function Code Here

function showTypes<T='Nothing',U = 'Nothing',V ="Nothing">(a?: T, b?: U, c?: V): string {
  return `${a ?? "Nothing"} - ${b ?? "Nothing"} - ${c ?? "Nothing"}`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true




//################### lesson forty three ###################


// Write Class Code Here

// class Game<T>{
//   constructor(public title:T, public price:number){}
//   getDiscount(num:string|number){
//     console.log(`The discount is ${num}`);
//   }
// }

// // Do Not Edit Here
// let gameOne = new Game<string>("Ys", 100);
// let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// gameOne.getDiscount("50"); // "The Discount Is 50"

// console.log(gameTwo.title); // 2064
// console.log(gameTwo.price); // 100
// gameTwo.getDiscount(80); // "The Discount Is 80"