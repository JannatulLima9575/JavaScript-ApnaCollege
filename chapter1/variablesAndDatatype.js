// # About objects
const student = {
    name: 'Lima',
    age: 22,
    cgpa: 3.75,
    isPassed: true,
};
console.log(student); //print for all values
console.log(student.name); //print for selected key value
console.log(student['age']) // print for selected key value

console.log(typeof student["isPassed"]); //print for data type of selected key value


student.name = 'Jannatul Lima'; //updated value
console.log(student.name); //print for updated value



