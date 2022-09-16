import { Slice, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormContactState } from '~/interfaces/forms.intf';

const initialState: FormContactState = {
  formInputName: {label: "nom", name: "name", error: false, errorMessage: "veuillez sasir votre nom", inputIsValid: false},
  formInputEmail: {label: "email", name: "email", error: false, errorMessage: "veuillez saisir un email valide", inputIsValid: false},
  formInputMessage: {label: "message", name: "message", error: false, errorMessage: "veuillez saisir un messsage", inputIsValid: false}
}

const formContactSlice:Slice = createSlice({
  name: 'formContact',
  initialState: {...initialState},
  reducers: {
    reset: (state: FormContactState) => {
      return state = {...initialState}
    },

    updateState: (state: FormContactState, action: PayloadAction<FormContactState>) => {   
      state.formInputName = action.payload.formInputName ?? state.formInputName
      state.formInputEmail = action.payload.formInputEmail ?? state.formInputEmail
      state.formInputMessage = action.payload.formInputMessage ?? state.formInputMessage
    },

    displayInputsError: (state: FormContactState) => {
      state.formInputName!.error = !state.formInputName?.inputIsValid
      state.formInputEmail!.error = !state.formInputEmail?.inputIsValid
      state.formInputMessage!.error = !state.formInputMessage?.inputIsValid
    },
  },
});

const { reset, updateState, displayInputsError } = formContactSlice.actions

export const FormContactActions = { reset, updateState, displayInputsError }

export default formContactSlice