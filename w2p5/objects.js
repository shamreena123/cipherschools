//Objects

let obj={name:"Cipher"};
console.log(obj);

let person={
    name:"John",
    email:"john@gmail.com",
    age:45,
    status:true,
    hobbies: ['Reading','Singing','Dancing',true,100,null]
}
console.log(typeof obj);
console.log(person.name);
console.log(typeof person.name);
console.log(person['age']);

let clickedName='age';
console.log(person[clickedName]);
console.log(person.clickedName);


person.country='India';
console.log(person);
person['gender']='male';
console.log(person);


console.log(typeof person.hobbies);
console.log(typeof null);



//ERROR
/*console.log(year);
let year=2020;*/




