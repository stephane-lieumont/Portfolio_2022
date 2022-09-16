import fileDownload from "js-file-download"
import axios from 'axios';

export const downloadCV = () => {
  axios.get(require('~/assets/pdf/CV_LIEUMONT-stephane_2022_FrontEnd.pdf'), {
    responseType: 'blob',
  })
  .then((res) => {
    fileDownload(res.data, `CV_LIEUMONT-stephane_${ new Date().getFullYear() }_FrontEnd.pdf`)
  })
}