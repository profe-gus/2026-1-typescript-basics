export const studentIds:number[] = [1,2,6,7,10,13];

studentIds.push(15)
console.log("🚀 ~ :4 ~ studentIds:", studentIds)
studentIds.pop();
console.log("🚀 ~ :6 ~ studentIds:", studentIds)

studentIds.forEach((studentId:number)=>{
    console.log(studentId)
})

const studentsFilter:number[] = studentIds.filter( studentIds => studentIds > 2);
console.log("🚀 ~ :9 ~ studentIds:", studentsFilter);

// const student = {
//     id: 1,
//     name: "Gus",
//     age: 34,
//     isActive:true,
//     address: "123 st"
// }

interface Student {
    id:number,
    name:string,
    age:number,
    isActive?:boolean   
    address:any 
}



const address = {
    neibor:"Ciudad jardin",
    street:"123",
    city:"Cali"
}

export const gus:Student = {
    id: 1,
    name: "Gus",
    age: 34,
    isActive:true,
    address: address
}

const newStudent = Object.create(gus);
newStudent.name = "Gustavo"
console.log("🚀 ~ :48 ~ newStudent:", newStudent)
console.log(gus.name)



console.log("🚀 ~ :36 ~ gus:", gus)


