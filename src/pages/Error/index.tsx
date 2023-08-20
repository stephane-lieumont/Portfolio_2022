import React, { useEffect, useState } from "react";
import Background from "~/components/Background";
import { PageProps } from "~/interfaces/component.intf";
import Footer from "~/layout/Footer";
import { useAppSelector } from "~/store/main.store";

import "./style.scss";

const Error: React.FunctionComponent<PageProps> = ({ title = "titre de la page" }) => {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  const headerheigth = useAppSelector((state) => state.layoutSlice.headerHeigth);

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div
      className="page error"
      style={{ paddingTop: headerheigth + 30 + "px" }}
      data-testid="error-page"
    >
      <Background
        ligthen
        triangleProperties={{
          top: "20%",
          rigth: "20%",
          rotate: "260deg",
          size: "150px",
          delayAnimation: 0,
        }}
        pointsProperties={{
          top: "70%",
          left: "70%",
          rotate: "145deg",
          size: "400px",
          delayAnimation: 150,
        }}
        circleProperties={{
          top: "75%",
          rigth: "80%",
          size: "350px",
          delayAnimation: 300,
        }}
      />
      <section className="error__container page__content">
        <div className="error__container__title">
          <h2>404</h2>
          <p>Page not found - Where is the intercom ?</p>
        </div>
        <img
          width={500}
          className={!imgLoaded ? "loading" : ""}
          onLoad={() => setImgLoaded(true)}
          src={require("~/assets/gif/travolta-comfused.gif")}
          alt="travolta confusion page introuvable"
        />
      </section>
      <Footer />
    </div>
  );
};

export default Error;
