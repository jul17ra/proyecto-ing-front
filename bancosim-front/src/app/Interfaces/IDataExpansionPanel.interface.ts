import { TemplateRef } from "@angular/core";

export interface IDataExpansionPanel {
    title?: string,
    options?: IOptionsExpansionPanel,
    data?: Array<IItemExpansionPanel>
}

export interface IItemExpansionPanel {
    titleName?: string,
    value?: string,
    content?: TemplateRef<any>,
    open?: boolean,
    valid?: (dataValid: boolean) => boolean
}

export interface IOptionsExpansionPanel {
    successive?: boolean,
    required?: boolean,
    nameBtnNext?: string,
    nameBtnBack?: string,
    nameBtnFinally?: string,
    backgroundColor?: string,
    letterColor?: string,
    borderColor?: string
}