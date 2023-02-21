export abstract class Account {
    private name: string
    accountNumber: number
    balance: number = 20
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit = (): void => {
        if(this.validateStatus()){
            console.log('Voce depositou !')
        }
    }

    withdraw = (): void => {
        console.log('Você sacou !')
    }

    public setName = (name:string):void => {
        this.name = name;
        console.log('Nome alterado com sucesso !')
    }

    getName = ():string => {
        return this.name
    }

    private validateStatus = ():boolean => {
        if(this.status){
            return this.status
        }

        throw new Error('Conta inválida')
    }

    getBalance = (): void => {
        console.log(this.balance)
    }
}

