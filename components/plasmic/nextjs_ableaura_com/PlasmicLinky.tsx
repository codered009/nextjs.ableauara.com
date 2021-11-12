// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: souD5h88MhENvTHMTJd8eE
// Component: R0_cM2qssTE
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: K8kdSftIudYz/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_nextjs_ableaura_com.module.css"; // plasmic-import: souD5h88MhENvTHMTJd8eE/projectcss
import * as sty from "./PlasmicLinky.module.css"; // plasmic-import: R0_cM2qssTE/css

export type PlasmicLinky__VariantMembers = {
  style:
    | "lightGray"
    | "small"
    | "noPadding"
    | "purpleSolid"
    | "lightCyan"
    | "solidCyan";
  leftAligned: "leftAligned";
};

export type PlasmicLinky__VariantsArgs = {
  style?: MultiChoiceArg<
    | "lightGray"
    | "small"
    | "noPadding"
    | "purpleSolid"
    | "lightCyan"
    | "solidCyan"
  >;
  leftAligned?: SingleBooleanChoiceArg<"leftAligned">;
};

type VariantPropType = keyof PlasmicLinky__VariantsArgs;
export const PlasmicLinky__VariantProps = new Array<VariantPropType>(
  "style",
  "leftAligned"
);

export type PlasmicLinky__ArgsType = {
  children?: React.ReactNode;
  link?: string | PageHref;
};

type ArgPropType = keyof PlasmicLinky__ArgsType;
export const PlasmicLinky__ArgProps = new Array<ArgPropType>(
  "children",
  "link"
);

export type PlasmicLinky__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultLinkyProps {
  children?: React.ReactNode;
  link?: string | PageHref;
  style?: MultiChoiceArg<
    | "lightGray"
    | "small"
    | "noPadding"
    | "purpleSolid"
    | "lightCyan"
    | "solidCyan"
  >;
  leftAligned?: SingleBooleanChoiceArg<"leftAligned">;
  className?: string;
}

function PlasmicLinky__RenderFunc(props: {
  variants: PlasmicLinky__VariantsArgs;
  args: PlasmicLinky__ArgsType;
  overrides: PlasmicLinky__OverridesType;
  dataFetches?: PlasmicLinky__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.a, projectcss.root_reset, sty.root, {
        [sty.root__global_theme_altHeadlineFont]: hasVariant(
          globalVariants,
          "theme",
          "altHeadlineFont"
        ),
        [sty.root__global_theme_dark]: hasVariant(
          globalVariants,
          "theme",
          "dark"
        ),
        [sty.root__global_theme_unnamedVariant2]: hasVariant(
          globalVariants,
          "theme",
          "unnamedVariant2"
        ),
        [sty.root__leftAligned]: hasVariant(
          variants,
          "leftAligned",
          "leftAligned"
        ),
        [sty.root__style_lightCyan]: hasVariant(variants, "style", "lightCyan"),
        [sty.root__style_lightGray]: hasVariant(variants, "style", "lightGray"),
        [sty.root__style_noPadding]: hasVariant(variants, "style", "noPadding"),
        [sty.root__style_purpleSolid]: hasVariant(
          variants,
          "style",
          "purpleSolid"
        ),
        [sty.root__style_small]: hasVariant(variants, "style", "small"),
        [sty.root__style_small_style_lightGray]:
          hasVariant(variants, "style", "small") &&
          hasVariant(variants, "style", "lightGray"),
        [sty.root__style_solidCyan]: hasVariant(variants, "style", "solidCyan")
      })}
      component={Link}
      href={args.link !== undefined ? args.link : ("#" as const)}
      platform={"nextjs"}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Link",
        value: args.children,
        className: classNames(sty.slotTargetChildren, {
          [sty.slotTargetChildren__global_theme_altHeadlineFont]: hasVariant(
            globalVariants,
            "theme",
            "altHeadlineFont"
          ),
          [sty.slotTargetChildren__global_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),
          [sty.slotTargetChildren__global_theme_unnamedVariant2]: hasVariant(
            globalVariants,
            "theme",
            "unnamedVariant2"
          ),
          [sty.slotTargetChildren__style_lightCyan]: hasVariant(
            variants,
            "style",
            "lightCyan"
          ),
          [sty.slotTargetChildren__style_lightGray]: hasVariant(
            variants,
            "style",
            "lightGray"
          ),
          [sty.slotTargetChildren__style_noPadding]: hasVariant(
            variants,
            "style",
            "noPadding"
          ),
          [sty.slotTargetChildren__style_purpleSolid]: hasVariant(
            variants,
            "style",
            "purpleSolid"
          ),
          [sty.slotTargetChildren__style_small]: hasVariant(
            variants,
            "style",
            "small"
          ),
          [sty.slotTargetChildren__style_small_style_lightGray]:
            hasVariant(variants, "style", "small") &&
            hasVariant(variants, "style", "lightGray"),
          [sty.slotTargetChildren__style_solidCyan]: hasVariant(
            variants,
            "style",
            "solidCyan"
          )
        })
      })}
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLinky__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLinky__VariantsArgs;
    args?: PlasmicLinky__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicLinky__Fetches;
  } & Omit<PlasmicLinky__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLinky__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLinky__ArgProps,
      internalVariantPropNames: PlasmicLinky__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicLinky__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLinky";
  } else {
    func.displayName = `PlasmicLinky.${nodeName}`;
  }
  return func;
}

export const PlasmicLinky = Object.assign(
  // Top-level PlasmicLinky renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicLinky
    internalVariantProps: PlasmicLinky__VariantProps,
    internalArgProps: PlasmicLinky__ArgProps
  }
);

export default PlasmicLinky;
/* prettier-ignore-end */
