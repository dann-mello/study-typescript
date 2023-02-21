import { Account } from './Account'

export class PeopleAccount extends Account {
    doc_id: number

    constructor(name: string, doc_id: number, accountNumber: number) {
        super(name, accountNumber)
        this.doc_id = doc_id;
    }
}