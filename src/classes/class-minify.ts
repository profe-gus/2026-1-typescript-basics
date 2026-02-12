class Student{

    constructor(
        public id: number,
        public name: string,
        public age: number,
        public isActive: boolean
    ) {}

}
export const gus = new Student(1, "Gustavo", 34, true);