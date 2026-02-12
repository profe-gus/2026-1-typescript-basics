class Student {
    id:number;
    name:string;
    age:number;
    isActive:boolean;

    constructor(id:number, name:string, age:number, isActive:boolean){
        this.id = id;
        this.name = name;
        this.age = age;
        this.isActive = isActive
    }

}

export const gus = new Student(1, "Gustavo", 34, true)