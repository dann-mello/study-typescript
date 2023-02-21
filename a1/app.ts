import { PeopleAccount } from '../class/PeopleAccount'
import { CompanyAccount } from '../class/CompanyAccount'

const company1: CompanyAccount = new CompanyAccount('Google', 31)
const people1: PeopleAccount = new PeopleAccount('Google', 1, 31)
company1.deposit()
people1.deposit()