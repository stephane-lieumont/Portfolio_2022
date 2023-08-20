import React, { Fragment, useEffect, useRef, useState } from "react";
import Background from "~/components/Background";
import Carousel from "~/components/Carousel";
import Gallery from "~/components/Gallery";
import ImageViewer from "~/components/ImageViewer";
import Specialities from "~/components/Specialities";
import {
  PortfolioImagesData,
  SliderImagesData,
  SpecialitiesCgiData,
} from "~/datas/3d.projects.data";
import useScrollPosition from "~/hooks/useScrollPosition";
import useWindowSize from "~/hooks/useWindowsSize";
import { PageProps } from "~/interfaces/component.intf";
import { PortfolioData, SpecialityData } from "~/interfaces/data.intf";
import Footer from "~/layout/Footer";

import "./style.scss";

const Cgi: React.FunctionComponent<PageProps> = ({ title = "titre de la page" }) => {
  const specialities: SpecialityData[] = SpecialitiesCgiData;

  const [imgViewerData, setImageViewerData] = useState<PortfolioData>();
  const [appearSectionSpecialities, setAppearSectionSpecialities] = useState<boolean>();
  const [appearSectionPortfolio, setAppearSectionPortfolio] = useState<boolean>();
  const [displayImageViewer, setDisplayImageViewer] = useState<boolean>(false);

  const sectionSpecialities = useRef<HTMLDivElement>(null);
  const sectionPortfolio = useRef<HTMLDivElement>(null);

  const windowSize = useWindowSize();
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [title]);

  useEffect(() => {
    const offsetApear = windowSize.height * 0.6;

    const revealSectionSpecialities =
      scrollPosition >= (sectionSpecialities.current?.offsetTop || 0) - windowSize.height + 100;
    const revealSectionPortfolio =
      scrollPosition >=
      (sectionPortfolio.current?.offsetTop || 0) - windowSize.height + offsetApear;

    if (!appearSectionSpecialities) setAppearSectionSpecialities(revealSectionSpecialities);
    if (!appearSectionPortfolio) setAppearSectionPortfolio(revealSectionPortfolio);
  }, [appearSectionSpecialities, appearSectionPortfolio, scrollPosition, windowSize]);

  const handleImageViewerOnClose = () => {
    setDisplayImageViewer(false);
  };

  const handleGalleryImageOnClick = (imageData: PortfolioData) => {
    setDisplayImageViewer(true);
    setImageViewerData(imageData);
  };

  return (
    <Fragment>
      <div className="page portfolio-cgi" data-testid="cgi-page">
        <div className="page__content">
          <Carousel slides={SliderImagesData} parralaxScrollY={scrollPosition} />
          <section ref={sectionSpecialities} className="portfolio-cgi__specialities">
            <Background
              darken
              triangle={false}
              pointsProperties={{
                top: `${50 - scrollPosition / 30}%`,
                left: "90%",
                rotate: "145deg",
                size: "300px",
                delayAnimation: 150,
              }}
              circleProperties={{
                bottom: `${50 - scrollPosition / 20}%`,
                rigth: "90%",
                size: "350px",
                delayAnimation: 300,
              }}
            />
            <h2 className={`display1 reveal${appearSectionSpecialities ? " reveal--0" : ""}`}>
              Spécialités
            </h2>
            <Specialities specialities={specialities} contentLoaded={appearSectionSpecialities} />
          </section>
          <section ref={sectionPortfolio} className="portfolio-cgi__projects">
            <h2 className={`display1 reveal${appearSectionPortfolio ? " reveal--0" : ""}`}>
              Réalisations
            </h2>
            <Gallery
              portfolioData={PortfolioImagesData}
              onClick={(imageData) => handleGalleryImageOnClick(imageData)}
              visible={appearSectionPortfolio}
            />
          </section>
        </div>
        <Footer />
      </div>
      <ImageViewer
        imageData={imgViewerData}
        displayOn={displayImageViewer}
        onClose={handleImageViewerOnClose}
      />
    </Fragment>
  );
};

export default Cgi;
