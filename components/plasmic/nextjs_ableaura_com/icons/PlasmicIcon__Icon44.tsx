// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon44IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon44Icon(props: Icon44IconProps) {
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
          "M4.75 11.25l5.5-5.5m-4.5 13.5h.5a1 1 0 001-1v-2.5a1 1 0 00-1-1h-.5a1 1 0 00-1 1v2.5a1 1 0 001 1zm6 0h.5a1 1 0 001-1v-5.5a1 1 0 00-1-1h-.5a1 1 0 00-1 1v5.5a1 1 0 001 1zm6 0h.5a1 1 0 001-1V5.75a1 1 0 00-1-1h-.5a1 1 0 00-1 1v12.5a1 1 0 001 1zm-6.5-11v-3.5h-3.5"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon44Icon;
/* prettier-ignore-end */
