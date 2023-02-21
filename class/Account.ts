export abstract class Account {
    name: string
    accountNumber: number
    balance: number = 20

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit = (): void => {
        console.log('Você despositou !')
    }

    withdraw = (): void => {
        console.log('Você sacou !')
    }

    getBalance = (): void => {
        console.log(this.balance)
    }
}

