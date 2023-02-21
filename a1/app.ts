//Banco

//Absttração
//name, accountNumber
//depositar, sacar

// class Account {
//     name: string
//     accountNumber: number

//     constructor(name: string, accountNumber: number) {
//         this.name = name;
//         this.accountNumber = accountNumber;
//     }

//     doposit = () => {
//         console.log('Você despositou !')
//     }

//     withdraw = () => {
//         console.log('Você sacou !')
//     }
// }

// //OO Herança
// class AdminAccount extends Account{
//     balance:number

//     constructor(name: string, accountNumber: number){
//         super(name, accountNumber)
//         this.balance = 20;
//     }

//     getBalance = () =>{
//         console.log(this.balance)
//     }
// }

// const account: Account = new Account('Daniel', 154289);
// const admin: AdminAccount = new AdminAccount('Joao', 154289);

// console.log(account)
// console.log(admin)




//OO Classes Abstratas
abstract class Account {
    name: string
    accountNumber: number
    balance:number = 20

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    doposit = () => {
        console.log('Você despositou !')
    }

    withdraw = () => {
        console.log('Você sacou !')
    }

    getBalance = () =>{
        console.log(this.balance)
    }
}

//Contas fisicas
class People extends Account{
    doc_id:number

    constructor(name: string, doc_id:number, accountNumber: number){
        super(name, accountNumber)
        this.doc_id = doc_id;
    }
}

const people1: People = new People('Daniel', 3, 567896);
console.log(people1)