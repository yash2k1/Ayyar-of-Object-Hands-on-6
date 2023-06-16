let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 
// 1)"We are interested in retrieving only the students' names; all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']"

let upperCaseName= studentRecords.map((ele)=>{
return ele.name.toUpperCase();
})          
console.log(upperCaseName);    
// 2)
// "Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks: 98 },{name: 'Wick', id: 115, marks: 75 }]"

let pass= studentRecords.filter((ele)=>{
    // if (ele.marks>50){
    //   return  ele}
    return ele.marks>50;
    })      
console.log(pass);    

// 3)Retrieve the details of students who scored more than 50
//  marks and have IDs greater than 120.
let passAndId= studentRecords.filter((ele)=>{
    return ele.marks>50 && ele.id>120;
    })      
console.log(pass); 

// 4)Consider the same scenario we have discussed above,
//  but this time we would like to know the sum total of the marks of the students.
let sum=  studentRecords.filter((ele)=>{
    return ele.marks>50 && ele.id>120;
    }).reduce((prev,current)=>{
     return prev+current.marks;
    },0);      
console.log(sum); 
// var temp=0;
// studentRecords.forEach((ele,i)=>{
//   temp+=ele.marks;
//   if(i===studentRecords.length-1)
// console.log(temp);

// })

// 5)This time we want to get only the names of the students
//  who scored more than 50 marks from the same dataset used above.
let nameOfPass= studentRecords.filter(ele=>ele.marks>50).map(ele=>ele.name)
console.log(nameOfPass);
// 6)This time we are required to print the sum of marks of the students with id > 120.
let sumOfMarks= studentRecords.filter(ele=>ele.id>120).reduce((prevValue,currentValue)=>{ return prevValue+currentValue.marks},0);
console.log(sumOfMarks);

// 7)This time we are required to print the total marks of the students with marks greater
//  than 50 after a grace of 15 marks has been added to those students who scored less 
// than 50.
let totalAfterGrace= studentRecords.filter(ele=>ele.marks<50).map(ele=>ele.marks+15).filter(ele=>ele>50).reduce((prev,curr)=>prev+curr);
let totalMarks=totalAfterGrace+ studentRecords.filter(ele=>ele.marks>50).reduce((pre,cur)=>pre+cur.marks,0);
 console.log(totalMarks);
// 8) Create 6 objects , each object will have name, class, roll no as properties. Store 
// these objects in an array of objects. 
function Student(Name, className ,roll){
    
    this.Name=Name;
    this.className=className ;
    this.roll=roll;
}
let arrOfStudents=[];
let student1 =new Student('yash',8,21);
let student2 =new Student('bharat',8,23);
let student3 =new Student('shubham',7,22);
let student4 =new Student('naman',8,21);
let student5 =new Student('palak',6,20);
let student6 =new Student('akash',4,12);
 
    arrOfStudents.push(student1);
    arrOfStudents.push(student2);
    arrOfStudents.push(student3);
    arrOfStudents.push(student4);
    arrOfStudents.push(student5);
    arrOfStudents.push(student6);
 
 console.log(arrOfStudents);

//  creation phase (memory allocation)