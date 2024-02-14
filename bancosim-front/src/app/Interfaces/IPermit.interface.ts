export interface IPermit {
    id: number;
    state: string;
    name: string;
    type: string;
    icon: string;
    parent: number;
    children: Array<IPermit>;
    url: string;
}