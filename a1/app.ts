import { PeopleAccount } from '../class/PeopleAccount'
import { CompanyAccount } from '../class/CompanyAccount'

const company1: CompanyAccount = new CompanyAccount('Daniel', 31)
const people1: PeopleAccount = new PeopleAccount('Google', 1, 31)
// console.log(people1)
// people1.setName('Epaminondas');
console.log(people1)
people1.deposit()