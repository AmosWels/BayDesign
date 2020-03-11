import React from "react";
import { MDBContainer } from "mdbreact";
import classNames from "classnames";
import { lightgrey } from "color-name";
import "../../assets/css/main.css"

let SectionContainer = ({
  children,
  className,
  lightgrey,
  description,
  header,
  noBorder,
  noBottom,
  style,
  title,
  flexCenter,
  flexCenterVert,
  flexColumn
}) => {
  const classes = classNames(
    "section",
    !noBottom && "mb-5",
    !noBorder ? "border p-3" : "px-0",
    lightgrey && "grey lighten-3",
    flexCenter && "d-flex justify-content align-items-left",
    flexCenterVert && "d-flex align-items-left",
    flexColumn && "flex-column",
    className
  );

  description = description ? <p>{description}</p> : "";
  title = title ? <h2 className="mb-3">{title}</h2> : "";
  header = header ? <h4 className="mb-2">{header}</h4> : "";

  return (
    <>
      {title}
      {header}
      <MDBContainer fluid className={classes} cardpositon style={style}>
        {description}
        {children}
      </MDBContainer>
    </>
  );
};

export default SectionContainer;