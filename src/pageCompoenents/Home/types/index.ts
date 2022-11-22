import React from "react"
import { IDeviceType } from "types"

export interface IR2Home {
    deviceType: IDeviceType
    values: IValuesItem[]
}
export interface IValues {
    deviceType: IDeviceType
    values: IValuesItem[]
}
export interface IMobileValues {
    values: IValuesItem[]
}
export interface IDesktopValues {
    values: IValuesItem[]
}
export interface IValuesItem {
    id: number,
    img: string,
    icon: string,
    title: string,
    description: string

}
export interface ITextAnimate {
    children?: React.ReactNode
}