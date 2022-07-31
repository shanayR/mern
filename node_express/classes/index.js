class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Teacher extends Person{
    constructor(name,age,isTeacher){
        super(name,age);
        this.isTeacher = isTeacher;
    }

    teachers(){
        if(this.isTeacher === true){
            console.log(`${this.name} is a teacher`)
        }
        else{
            console.log(`${this.name} is a student`)
        }
    }
}
const teacher1 = new Teacher("Ali",21,true)
const teacher2 = new Teacher("Alia",12,false)
teacher1.teachers()
teacher2.teachers()

console.log(teacher1);

