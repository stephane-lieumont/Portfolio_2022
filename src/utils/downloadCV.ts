export const downloadCV = (callback?: Function) => {
  const element = document.createElement("a");
  element.href = require('~/assets/pdf/CV_LIEUMONT stephane_2022_FrontEnd.pdf');
  element.download = `CV_LIEUMONT-stephane_${ new Date().getFullYear() }_FrontEnd.pdf`;
  document.body.appendChild(element);
  element.click();

  if(callback) {
    const timer = setTimeout(() => {
        callback()
        clearTimeout(timer)
    }, 3000)
  }
}