import { Fragment, FunctionComponent, useEffect } from 'react';
import Button from '~/components/Button';
import './style.scss'
import fileDownload from 'js-file-download';
import axios from 'axios';
import { PageProps } from '~/interfaces/Routes.intf';

const CV: FunctionComponent<PageProps> = ({ title = 'titre de la page' }) => {
  useEffect(() => {
    document.title = title
  })

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
        <img height={1132} width={800} src={require('../../assets/pdf/CV_LIEUMONT-stephane_2022_FrontEnd.jpg')} alt='CV stéphane Lieumont Developpeur Frontend'/>
      </div>
      <Button label='Télécharger' onClick={handleDownload} />
    </Fragment>
  );
}

export default CV;