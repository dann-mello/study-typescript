//OO
class User {
    name: string = 'Daniel'
    age: number = 19

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }

    showName = () => {
        console.log(this.name)
    }
}

const user1 = new User('Daniel', 19);
user1.showName();

const user2 = new User('Joao', 129);
user2.showName();