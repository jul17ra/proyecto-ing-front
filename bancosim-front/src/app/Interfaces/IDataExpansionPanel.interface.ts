import { TemplateRef } from "@angular/core";

export interface IDataExpansionPanel {
    title: string,
    options?: IOptionsExpansionPanel,
    data?: Array<IItemExpansionPanel>
}

export interface IItemExpansionPanel {
    titleName?: string,
    value?: string,
    content?: TemplateRef<any>,
    open?: boolean
}

export interface IOptionsExpansionPanel {
    successive?: boolean,
    nameBtnNext?: string,
    nameBtnBack?: string,
    nameBtnFinally?: string,
    primaryColor?: string,
    secundaryColor?: string
}