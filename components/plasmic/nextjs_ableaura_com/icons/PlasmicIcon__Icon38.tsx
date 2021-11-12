// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon38Icon(props: Icon38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 100 100"}
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
        d={
          "M88.357 85H14V67.26l19.089-19.089 15.43 15.43a3 3 0 004.243 0L82.28 34.083v3.424a3 3 0 106 0V25.841a2 2 0 00-2-2H74.613a3 3 0 100 6h3.424L50.641 57.237l-15.43-15.43a3 3 0 00-4.243 0L14 58.775V12.642c0-1.308-.941-2.499-2.242-2.63A2.501 2.501 0 009 12.5v75a2.5 2.5 0 002.5 2.5h77a2.5 2.5 0 002.487-2.758c-.13-1.301-1.322-2.242-2.63-2.242z"
        }
      ></path>
    </svg>
  );
}

export default Icon38Icon;
/* prettier-ignore-end */
