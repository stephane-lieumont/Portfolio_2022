
import { FormEvent, FunctionComponent, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { ServiceEmailJs } from '~/services/emailjs.srv';
import { FormContactActions } from '~/store/formContact.store';
import { firstLetterUpper } from '~/utils/formatString';
import { FormValidator } from '~/utils/formValidator';
import { useAppDispatch, useAppSelector } from '~/store/main.store';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import Input from '~/components/Input';
import { HTMLFormType } from '~/interfaces/forms.intf';

export interface formContactPortfolio {
  'from_name': string,
  'from_email': string,
  'message': string,
  'g-recaptcha-response': string,
  [key: string]: string
}

const FormContact: FunctionComponent = () => {
  const [errorMessageApi, setErrorMessageApi] = useState<string>()
  const [validForm, setValidForm] = useState<boolean>()
  const [loadingForm, setLoadingForm] = useState<boolean>(false)

  const formInputName = useAppSelector((state) => state.formContactSlice.formInputName )
  const formInputEmail = useAppSelector((state) => state.formContactSlice.formInputEmail )
  const formInputMessage = useAppSelector((state) => state.formContactSlice.formInputMessage )
  
  const form = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const dispatch = useAppDispatch()

  const checkFormNoErrors = (): boolean => {
    return (
      formInputName.inputIsValid === true &&
      formInputEmail.inputIsValid === true &&
      formInputMessage.inputIsValid === true
    )
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(FormContactActions.displayInputsError({}))   
    
    if(checkFormNoErrors() && form.current) {
      setLoadingForm(true)
      const token = await recaptchaRef.current?.executeAsync();
      const payload: formContactPortfolio = {
        'from_name': firstLetterUpper(formInputName.text),
        'from_email': formInputEmail.text.toLowerCase(),
        'message': JSON.stringify(formInputMessage.text).replaceAll('"', '').replaceAll("\\n", "<br />"),
        'g-recaptcha-response': token ?? ''
      }
      
      ServiceEmailJs.sendFormData(payload)
        .then(() => {
          setLoadingForm(false)
          setValidForm(true)
          dispatch(FormContactActions.reset({}))
        })
        .catch((error) => {
          setLoadingForm(false)
          setErrorMessageApi("Oups ! une erreur s'est produite lors de l'envois du message.")
        })     
    }
    
  }

  return (
    <form ref={form} onSubmit={onSubmit}>      

      <Input 
        label={firstLetterUpper(formInputName.label)}
        name={formInputName.name}
        error={formInputName.error}
        errorMessage={formInputName.errorMessage}
        text={formInputName.text}
        inputIsValid={formInputName.inputIsValid}
        disabled={validForm || loadingForm}
        onChange={(value: string) => {
          setErrorMessageApi(undefined)
          dispatch(FormContactActions.updateState({
            formInputName: {
              ...formInputName,
              value: value,
              inputIsValid: FormValidator.checkAlphabetWithAccent(value, 2),
              error: false,
              text: value
            }})
          )
        }}
      />
      <Input 
        label={firstLetterUpper(formInputEmail.label)}
        name={formInputEmail.name}
        error={formInputEmail.error}
        errorMessage={formInputEmail.errorMessage}
        text={formInputEmail.text}
        inputIsValid={formInputEmail.inputIsValid}
        disabled={validForm || loadingForm}
        onChange={(value: string) => {
          setErrorMessageApi(undefined)
          dispatch(FormContactActions.updateState({
            formInputEmail: {
              ...formInputEmail,
              value: value,
              inputIsValid: FormValidator.checkEmail(value),
              error: false,
              text: value
            }})
          )
        }}
      />
      <Input
        htmlFormType={ HTMLFormType.textarea } 
        label={firstLetterUpper(formInputMessage.label)}
        name={formInputMessage.name}
        error={formInputMessage.error}
        errorMessage={formInputMessage.errorMessage}
        text={formInputMessage.text}
        inputIsValid={formInputMessage.inputIsValid}
        disabled={validForm || loadingForm}
        onChange={(value: string) => {
          setErrorMessageApi(undefined)
          dispatch(FormContactActions.updateState({
            formInputMessage: {
              ...formInputMessage,
              value: value,
              inputIsValid: FormValidator.checkTextarea(value, 15),
              error: false,
              text: value
            }})
          )
        }}
      />
      <Button 
        label='Envoyer'
        valid={validForm}
        loading={loadingForm}
      />
      { errorMessageApi && (
        <p className='form-error'>
          <i><FontAwesomeIcon size={'lg'} icon={faCircleExclamation} /></i>
          {errorMessageApi}
        </p>
      )}
      <ReCAPTCHA
        onError={(error) => {setErrorMessageApi(error.currentTarget.innerHTML)}}
        ref={recaptchaRef}
        sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY ?? ''}
        size="invisible"
      />
    </form>
  );
}

export default FormContact;