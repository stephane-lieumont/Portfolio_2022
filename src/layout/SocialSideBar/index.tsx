import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { ArtstationIcon } from "~/assets/icons/SocialIconsCustom";
import { SocialSideBarProps } from "~/interfaces/component.intf";
import Colors from "~/sass/themes/colors.module.scss";

import "./style.scss";

const SocialSideBar: React.FunctionComponent<SocialSideBarProps> = ({
  menuIsOpen = false,
  ligthen = false,
}) => {
  const [hoverGithub, setHoverGithub] = useState<boolean>(false);
  const [hoverLinkedin, setHoverLinkedin] = useState<boolean>(false);
  const [hoverArtstation, setHoverArtstation] = useState<boolean>(false);

  return (
    <div
      className={`social-sidebar${menuIsOpen ? " social-sidebar--hidden" : ""}`}
      data-testid="social-slider"
    >
      <ul>
        <li onMouseEnter={() => setHoverGithub(true)} onMouseLeave={() => setHoverGithub(false)}>
          <SocialIcon
            url="https://github.com/stephane-lieumont"
            target={"_blank"}
            bgColor={hoverGithub ? "black" : ligthen ? "white" : Colors.secondary}
            fgColor={hoverGithub ? "white" : "transparent"}
          />
        </li>
        <li
          onMouseEnter={() => setHoverLinkedin(true)}
          onMouseLeave={() => setHoverLinkedin(false)}
        >
          <SocialIcon
            url="https://www.linkedin.com/in/stephane-lieumont/"
            target={"_blank"}
            bgColor={hoverLinkedin ? "#0E76A8" : ligthen ? "white" : Colors.secondary}
            fgColor={hoverLinkedin ? "white" : "transparent"}
          />
        </li>
        <li
          onMouseEnter={() => setHoverArtstation(true)}
          onMouseLeave={() => setHoverArtstation(false)}
        >
          <SocialIcon
            url="https://s-lieumont.artstation.com/"
            target={"_blank"}
            bgColor={hoverArtstation ? "#13aff0" : ligthen ? "white" : Colors.secondary}
            defaultSVG={ArtstationIcon}
            fgColor={hoverArtstation ? "white" : "transparent"}
          />
        </li>
      </ul>
    </div>
  );
};

export default SocialSideBar;
