// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DotsVerticalsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DotsVerticalsvgIcon(props: DotsVerticalsvgIconProps) {
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
          "M12 5a1.25 1.25 0 110 2.5A1.25 1.25 0 0112 5zm0 5.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm1.25 7a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DotsVerticalsvgIcon;
/* prettier-ignore-end */
