// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon47IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon47Icon(props: Icon47IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15 13.25a4.25 4.25 0 10-4.154-3.346L4.75 16v3.25H8l.75-.75v-1.75h1.75l1.25-1.25v-1.75h1.75l.596-.596c.291.063.594.096.904.096z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M16.5 8a.5.5 0 11-1 0 .5.5 0 011 0z"}
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon47Icon;
/* prettier-ignore-end */
