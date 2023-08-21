export interface IGenericRequest<T> {
    state: number,
    message: string,
    data: T
}