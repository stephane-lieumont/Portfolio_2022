import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState, Fragment } from "react";
import { useNavigate } from "react-router";
import demoReal from "~/assets/movies/demoreal_2022.mp4";
import Background from "~/components/Background";
import Button from "~/components/Button";
import { PageProps } from "~/interfaces/component.intf";
import { getRouteByName } from "~/routes/routes.app";
import { useAppSelector } from "~/store/main.store";

import "./style.scss";

const HomePage: React.FunctionComponent<PageProps> = ({ title = "titre de la page" }) => {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  const currentPage = useRef<HTMLDivElement>(null);
  const headerheigth = useAppSelector((state) => state.layoutSlice.headerHeigth);

  const portfolioDevlink = getRouteByName("dev")?.path ?? "#";
  const portfolioCgiLink = getRouteByName("cgi")?.path ?? "#";

  const navigate = useNavigate();

  useEffect(() => {
    document.title = title ?? "document title not found";
  }, [title]);

  return (
    <div
      ref={currentPage}
      className={`min-heigth-screen homepage${!imgLoaded ? " homepage--loading" : ""}`}
      data-testid="homepage"
    >
      <section className="homepage__leftside" style={{ paddingTop: headerheigth + "px" }}>
        <blockquote className={`reveal${imgLoaded ? " reveal--1" : ""}`}>
          <p>
            <FontAwesomeIcon size="xs" icon={faQuoteLeft} className="quote" /> La passion est un
            désir qui se mue en plaisir{" "}
            <FontAwesomeIcon size="xs" icon={faQuoteRight} className="quote" />
          </p>
          <small>Romain Guilleaumes</small>
        </blockquote>
        {imgLoaded && (
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
              top: "80%",
              left: "70%",
              rotate: "145deg",
              size: "400px",
              delayAnimation: 150,
            }}
            circleProperties={{
              top: "85%",
              rigth: "80%",
              size: "350px",
              delayAnimation: 300,
            }}
          />
        )}
        <div className="homepage__leftside__content">
          <h2 className={`reveal${imgLoaded ? " reveal--3" : ""}`}>
            Developpeur Frontend & <span className="text--primary">Graphiste 3D</span>
          </h2>
          <p className={`reveal${imgLoaded ? " reveal--4" : ""}`}>
            Captivé par les nouvelles technologies depuis 2006, ma curiosité m’a amené à découvrir
            le développement informatique et le graphisme 3D.
          </p>
          <div className="homepage__leftside__content__nav">
            <div className={`reveal${imgLoaded ? " reveal--5" : ""}`}>
              <Button
                label="profil dev"
                onClick={() => {
                  navigate(portfolioDevlink);
                }}
              />
            </div>
            <div className={`reveal${imgLoaded ? " reveal--6" : ""}`}>
              <Button
                label="profil 3D"
                outlined
                onClick={() => {
                  navigate(portfolioCgiLink);
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <div
        className="homepage__rigthside background--primary"
        style={{ paddingTop: headerheigth + "px" }}
      >
        {imgLoaded && (
          <Fragment>
            <Background
              triangle={false}
              points={false}
              circleProperties={{
                top: "85%",
                left: "88%",
                size: "250px",
                delayAnimation: 300,
              }}
            />
            <div className="homepage__rigthside__demoreal">
              <video autoPlay muted loop>
                <source src={demoReal} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
              <div className="vignet-up"></div>
              <div className="vignet-down"></div>
            </div>
          </Fragment>
        )}

        <img
          className={!imgLoaded ? "loading" : ""}
          width={600}
          height={470}
          onLoad={() => setImgLoaded(true)}
          src={require("~/assets/profile/profil-stephane-lieumont-min.png")}
          alt="profil stéphane lieumont"
        />
      </div>
    </div>
  );
};

export default HomePage;
