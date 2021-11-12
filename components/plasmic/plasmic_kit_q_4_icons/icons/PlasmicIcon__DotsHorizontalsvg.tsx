// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DotsHorizontalsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DotsHorizontalsvgIcon(props: DotsHorizontalsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5 12a1.25 1.25 0 112.5 0A1.25 1.25 0 015 12zm5.75 0a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm7-1.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DotsHorizontalsvgIcon;
/* prettier-ignore-end */
