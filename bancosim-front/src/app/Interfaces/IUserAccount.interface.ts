import { FinalUser } from "../model/FinalUser.interface";
import { IAccounts } from "./IAccounts.interface";

export interface IUserAccount {
    finalUser: FinalUser,
    acount: IAccounts,
    status: string
}