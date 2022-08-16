const checkAlphabetNoAccent = (value: string, minChar: number): boolean => value.length >= minChar && (/^[a-zA-Z]+$/i).test(value)
const checkAlphabetWithAccent = (value: string, minChar: number): boolean => value.length >= minChar && (/^[a-zA-ZÀ-ú -]+$/i).test(value)
const checkTextarea = (value: string, minChar: number): boolean => value.length >= minChar && (/^[A-ZÀ-úa-z0-9 .'?!,@$#-_\n]+$/i).test(value)
const checkNumber = (value: string, minChar: number): boolean => value.length >= minChar && (/^[0-9]+$/i).test(value)
const checkEmail = (value: string): boolean => (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i).test(value)
const checkPassword = (value: string, minChar: number): boolean => value.length >= minChar && (/^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]+$/i).test(value)

export const FormValidator = {
  checkAlphabetNoAccent,
  checkAlphabetWithAccent,
  checkTextarea,
  checkNumber,
  checkEmail,
  checkPassword
}