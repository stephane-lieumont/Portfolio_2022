import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BadgeContactProps } from "~/interfaces/component.intf";

import "./style.scss";

const BadgeContact: React.FunctionComponent<BadgeContactProps> = ({ className = "" }) => {
  return (
    <ul className={`badge-contact ${className}`} data-testid="badge-contact">
      <li>
        <FontAwesomeIcon icon={faPhone} className={"fa-icon"} /> 06.37.35.35.79
      </li>
      <li>
        <FontAwesomeIcon icon={faLocation} className={"fa-icon"} /> 31470 Fontenilles, FRANCE
      </li>
    </ul>
  );
};

export default BadgeContact;
