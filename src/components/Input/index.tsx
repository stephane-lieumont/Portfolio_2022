import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FunctionComponent, useState, ChangeEvent, useEffect, MouseEvent, FocusEvent } from "react"
import { HTMLFormType, InputType } from "~/interfaces/forms.intf"
import './style.scss'

const Input: FunctionComponent<InputType> = ({
  prependIcon,
  appendIcon,
  label = 'Label',
  name = 'inputName',
  errorMessage = "Erreur message",
  error = false,
  onChange,
  onClick,
  onBlur,
  text = '',
  isFocus,
  disabled = false,
  type = 'text',
  readOnly = false,
  value = '',
  htmlFormType = HTMLFormType.input
} : InputType) => {  
  const [onFocusInput, setOnFocusInput] = useState<boolean>(false)
  const [valueInput, setValueInput] = useState<string | string[] | number | boolean>(value)
  const [textInput, setTextInput] = useState<string>(text)
  const [errorStatus, setErrorStatus] = useState<boolean>(error)

  useEffect(() => {
    setErrorStatus(error)
  }, [error])

  useEffect(() => {
    setValueInput(valueInput)
  }, [valueInput])

  useEffect(() => {
    setValueInput(value)
  }, [value])

  useEffect(() => {
    setTextInput(textInput)
  }, [textInput])

  useEffect(() => {
    setTextInput(text)
  }, [text])

  useEffect(() => {
    setOnFocusInput(isFocus!)
  }, [isFocus])

  const handleChange = (event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTextInput(event.target.value)

    if(onChange) onChange(event.target.value)    
  }

  const handleClick = (e : MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.currentTarget.querySelector('input')?.focus()
    if(onClick) onClick()    
  }

  const handleClickInput = (e : MouseEvent<HTMLElement>) => {
    e.preventDefault()  
    e.currentTarget.focus()
    setOnFocusInput(isFocus !== undefined ? isFocus : true)
  }

  const handleOnFocus = () => {
    setOnFocusInput(isFocus !== undefined ? isFocus : true)
  }

  const handleOnBlur = (e : FocusEvent) => {
    onBlur ? onBlur(e) : setOnFocusInput(false) 
  }

  return (
    <div 
      data-testid="input-container"
      className={
        `input${ htmlFormType === HTMLFormType.textarea ? ' input--textarea' : ''}${ textInput !== '' ? ' input--active' : ''}${ onFocusInput ? ' input--focus' : ''}${ disabled ? ' input--disabled' : ''}${ errorStatus ?  ' input--error' : ''}${ readOnly ?  ' input--read' : ''}`
      }
    >
      <label htmlFor={name} className={prependIcon ? 'indent' : '' }>{label}</label>
      <div data-testid={'wrapper'} onClick={readOnly ? handleClick : () => {}} className="input__content">
        { prependIcon ? <i  data-testid="prepend-icon"><FontAwesomeIcon icon={prependIcon} /></i> : null }
        { htmlFormType === HTMLFormType.input ? (
          <input 
            id={name} 
            data-testid={'input'}
            type={type} 
            name={name} 
            readOnly={readOnly} 
            onClick={handleClickInput}
            onFocus={handleOnFocus} 
            onBlur={handleOnBlur} 
            onChange={handleChange}
            disabled={disabled}     
            value={textInput}
          />
        ) : htmlFormType === HTMLFormType.textarea ? (
          <textarea 
            id={name} 
            data-testid={'input'}
            name={name} 
            readOnly={readOnly} 
            onClick={handleClickInput}
            onFocus={handleOnFocus} 
            onBlur={handleOnBlur} 
            onChange={handleChange}            
            disabled={disabled}     
            value={textInput}
          />
        ) : null }

        { appendIcon ? <i data-testid="append-icon"><FontAwesomeIcon icon={appendIcon} /></i> : null }
      </div>
      {errorStatus && (
      <p className="input__error-message">{errorMessage}</p>
      )}
    </div>
  );
}

export default Input