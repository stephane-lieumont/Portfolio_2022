import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent, MouseEvent, useEffect } from 'react';
import Button from '~/components/Button';
import Input from '~/components/Input';
import { PageProps } from '~/interfaces/Component.intf';
import { HTMLFormType } from '~/interfaces/Forms.intf';
import { FormContactActions } from '~/store/formContact.store';
import { useAppDispatch, useAppSelector } from '~/store/main.store';
import { firstLetterUpper } from '~/utils/formatString';
import { FormValidator } from '~/utils/formValidator';
import './style.scss'

const Contact: FunctionComponent<PageProps> = ({ title = 'titre de la page' }) => {
  useEffect(() => {
    document.title = title
  })

  const formInputName = useAppSelector((state) => state.formContactSlice.formInputName )
  const formInputEmail = useAppSelector((state) => state.formContactSlice.formInputEmail )
  const formInputMessage = useAppSelector((state) => state.formContactSlice.formInputMessage )

  const dispatch = useAppDispatch()

  const checkFormNoErrors = (): boolean => {
    return (
      formInputName.inputIsValid === true &&
      formInputEmail.inputIsValid === true &&
      formInputMessage.inputIsValid === true
    )
  }

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(FormContactActions.displayInputsError({}))
    if(checkFormNoErrors()) {
      console.log({
        'name': formInputName.value,
        'email': formInputEmail.value,
        'message': formInputMessage.value,
      })
      dispatch(FormContactActions.reset({}))
    }
  }

  return (
    <div className={`contact`}>
      <div className='contact__content'>
        <p>
          Un projet, une question où juste un Hello World ?
        </p>
        <form>
          <Input 
            label={firstLetterUpper(formInputName.label)}
            name={formInputName.name}
            error={formInputName.error}
            errorMessage={formInputName.errorMessage}
            text={formInputName.text}
            inputIsValid={formInputName.inputIsValid}
            onChange={(value: string) => {
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
            onChange={(value: string) => {
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
            onChange={(value: string) => {
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
          <Button label='Envoyer' onClick={onSubmit} />
        </form>
      </div>
      <ul className='contact__card'>
        <li><FontAwesomeIcon icon={faPhone} className={'fa-icon'}/> 06.37.35.35.79</li>
        <li><FontAwesomeIcon icon={faLocation} className={'fa-icon'}/> 31470 Fontenilles, FRANCE</li>
      </ul>
      <div className="contact__bg">
        <img src={require('../../assets/profile/profil-stephane-lieumont-contact.jpg')} alt="profil stéphane lieumont"/>
      </div>
    </div>
  );
}

export default Contact;