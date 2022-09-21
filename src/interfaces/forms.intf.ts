import { HTMLInputTypeAttribute } from "react"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

export type InputType = {
  prependIcon?: IconProp
  appendIcon?: IconProp
  label?: string
  name?: string
  placeholder?: string
  errorMessage?: string
  inputIsValid?: boolean
  error?: boolean
  isFocus?:boolean
  value?: string | string[] | boolean | number
  text?: string
  choices?: string[]
  disabled?: boolean
  readOnly?:boolean
  onChange?: CallableFunction
  onClick?: CallableFunction
  onBlur?:CallableFunction
  type?: HTMLInputTypeAttribute
  htmlFormType?: HTMLFormType
}

export interface FormContactState {
  formInputName: InputType
  formInputEmail: InputType
  formInputMessage: InputType
}

export interface LayoutState {
  headerHeigth: number
}

export enum HTMLFormType {
  input,
  textarea
}