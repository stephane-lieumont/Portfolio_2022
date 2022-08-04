import { Fragment, FunctionComponent } from 'react';
import Button from '~/components/Button';
import './style.scss'
import cvPdf from '../../assets/pdf/CV_LIEUMONT-stephane_2022_FrontEnd.pdf';
import fileDownload from 'js-file-download';
import axios from 'axios';

const CV: FunctionComponent = () => {
  const handleDownload = () => {
    axios.get(require('../../assets/pdf/CV_LIEUMONT-stephane_2022_FrontEnd.pdf'), {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, `CV_LIEUMONT-stephane_${ new Date().getFullYear() }_FrontEnd.pdf`)
    })
  }

  return (
    <Fragment>
      <div className='cv'>
        <iframe height={'100%'} width={'100%'} src={`${cvPdf}#view=fitH&scrollbar=0&toolbar=0&statusbar=0&messages=0&navpanes=0`} title='CV stéphane Lieumont Developpeur Frontend'/>
      </div>
      <Button label='Télécharger' onClick={handleDownload} />
    </Fragment>
  );
}

export default CV;