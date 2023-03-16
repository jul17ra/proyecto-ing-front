export interface IUserLoginRequest {
    idType: string,
    identification: string,
    password: string
}

export interface IUserLoginResponse {
    address: string,
    authType: string,
    cellphone: string,
    creationDate: string,
    email: string,
    id: number,
    idType: string,
    identification: string,
    name: string,
    password: string,
    role: any,
    state: string
}