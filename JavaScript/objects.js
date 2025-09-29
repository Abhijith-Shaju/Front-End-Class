// create
let student =  {
    name:"Abhi",
    age:21,
    regNo:12310681,
    course:"Comp.Sc",
    subjects: ["maths", "Physics", "python"],

    friends: {}
}

console.log("name: ", student.name);
console.log("age: ", student["age"]);
console.log("Subjects", student.subjects);
console.log("Object: ", student);

// add
student.class = 12;
console.log("class: ", student.class);

// change
student.age = 20;
console.log("age: ", student.age);

delete student.class;

console.log(student);