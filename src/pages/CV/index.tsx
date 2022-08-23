import { FunctionComponent, useEffect, useRef } from 'react';
import Button from '~/components/Button';
import './style.scss'
import fileDownload from 'js-file-download';
import axios from 'axios';
import { PageProps } from '~/interfaces/Component.intf';
import { useOnLoadImages } from '~/hooks/useOnLoadImages';

const CVModal: FunctionComponent<PageProps> = ({ title = 'titre de la page' }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesLoaded = useOnLoadImages(wrapperRef);

  useEffect(() => {
    document.title = title
  })

  const handleDownload = () => {
    axios.get(require('~/assets/pdf/CV_LIEUMONT-stephane_2022_FrontEnd.pdf'), {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, `CV_LIEUMONT-stephane_${ new Date().getFullYear() }_FrontEnd.pdf`)
    })
  }

  return (
    <div ref={wrapperRef} className='cv-container'>
      <div className='cv'>
        <img className={imagesLoaded ? '' : 'loading'} height={1132} width={800} src={require('~/assets/pdf/CV_LIEUMONT-stephane_2022_FrontEnd.jpg')} alt='CV stéphane Lieumont Developpeur Frontend'/>
      </div>
      <Button label='Télécharger' onClick={handleDownload} />
    </div>
  );
}

export default CVModal;