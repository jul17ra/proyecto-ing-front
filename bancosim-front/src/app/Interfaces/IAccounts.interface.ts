import { ITypeAccount } from "./ITypeAccount.interface";

export interface IAccounts {
    id: number,
    name: string,
    amount: string,
    number: string,
    type_acount: ITypeAccount
}