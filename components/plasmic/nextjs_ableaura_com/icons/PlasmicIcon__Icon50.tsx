// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon50IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon50Icon(props: Icon50IconProps) {
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
          "M5.75 19.25h3.5a1 1 0 001-1V5.75a1 1 0 00-1-1h-3.5a1 1 0 00-1 1v12.5a1 1 0 001 1zm9-9h3.5a1 1 0 001-1v-3.5a1 1 0 00-1-1h-3.5a1 1 0 00-1 1v3.5a1 1 0 001 1zm0 9h3.5a1 1 0 001-1v-3.5a1 1 0 00-1-1h-3.5a1 1 0 00-1 1v3.5a1 1 0 001 1z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon50Icon;
/* prettier-ignore-end */
