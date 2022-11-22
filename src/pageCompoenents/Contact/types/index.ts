import React from "react"

export interface ICustomFormField<T> extends React.HTMLAttributes<T> {
    errors?: string
}
export interface IPopupThankyou {
    popupOpen: boolean
    setPopupOpen: (arg: boolean) => void
}