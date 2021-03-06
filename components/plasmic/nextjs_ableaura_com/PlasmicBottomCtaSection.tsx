// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: souD5h88MhENvTHMTJd8eE
// Component: -1wDuXI1QPgi
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
import ButtonLink from "../../ButtonLink"; // plasmic-import: WEYjixTZW6s/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: K8kdSftIudYz/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_nextjs_ableaura_com.module.css"; // plasmic-import: souD5h88MhENvTHMTJd8eE/projectcss
import * as sty from "./PlasmicBottomCtaSection.module.css"; // plasmic-import: -1wDuXI1QPgi/css

import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: Zxwffj7XO7S3/icon

export type PlasmicBottomCtaSection__VariantMembers = {};

export type PlasmicBottomCtaSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicBottomCtaSection__VariantsArgs;
export const PlasmicBottomCtaSection__VariantProps =
  new Array<VariantPropType>();

export type PlasmicBottomCtaSection__ArgsType = {};
type ArgPropType = keyof PlasmicBottomCtaSection__ArgsType;
export const PlasmicBottomCtaSection__ArgProps = new Array<ArgPropType>();

export type PlasmicBottomCtaSection__OverridesType = {
  root?: p.Flex<"section">;
  productHuntBadge?: p.Flex<"a"> & Partial<LinkProps>;
  img?: p.Flex<typeof p.PlasmicImg>;
  container23?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  buttonLink?: p.Flex<typeof ButtonLink>;
  svg?: p.Flex<"svg">;
};

export interface DefaultBottomCtaSectionProps {
  className?: string;
}

function PlasmicBottomCtaSection__RenderFunc(props: {
  variants: PlasmicBottomCtaSection__VariantsArgs;
  args: PlasmicBottomCtaSection__ArgsType;
  overrides: PlasmicBottomCtaSection__OverridesType;
  dataFetches?: PlasmicBottomCtaSection__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <p.Stack
      as={"section"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.PlasmicLink
        data-plasmic-name={"productHuntBadge"}
        data-plasmic-override={overrides.productHuntBadge}
        className={classNames(defaultcss.a, sty.productHuntBadge)}
        component={Link}
        href={
          "https://www.producthunt.com/posts/plasmic?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-plasmic" as const
        }
        platform={"nextjs"}
      >
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={
            "Plasmic - Visual builder & design tool for React, Next and Gatsby | Product Hunt" as const
          }
          className={classNames(sty.img)}
          displayHeight={"auto" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"none" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"auto" as const}
          loading={"lazy" as const}
          src={
            "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=290978&theme=light" as const
          }
        />
      </p.PlasmicLink>

      <p.Stack
        as={"div"}
        data-plasmic-name={"container23"}
        data-plasmic-override={overrides.container23}
        hasGap={true}
        className={classNames(defaultcss.all, sty.container23)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__lv6X9,
              {
                [sty.text__global_theme_altHeadlineFont__lv6X9ZbUeX]:
                  hasVariant(globalVariants, "theme", "altHeadlineFont")
              }
            )}
          >
            {"Get started with Plasmic"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__xe07M
            )}
          >
            {"Try the demos, examples, and tutorials."}
          </div>
        </p.Stack>

        <ButtonLink
          data-plasmic-name={"buttonLink"}
          data-plasmic-override={overrides.buttonLink}
          href={"https://plasmic.app/signup" as const}
          icon={
            <Icon8Icon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(defaultcss.all, sty.svg)}
              role={"img"}
            />
          }
          label={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__up4ES
              )}
            >
              {"Try Plasmic for free"}
            </div>
          }
          type={["white", "rightIcon"]}
        />
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "productHuntBadge",
    "img",
    "container23",
    "freeBox",
    "buttonLink",
    "svg"
  ],
  productHuntBadge: ["productHuntBadge", "img"],
  img: ["img"],
  container23: ["container23", "freeBox", "buttonLink", "svg"],
  freeBox: ["freeBox"],
  buttonLink: ["buttonLink", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  productHuntBadge: "a";
  img: typeof p.PlasmicImg;
  container23: "div";
  freeBox: "div";
  buttonLink: typeof ButtonLink;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBottomCtaSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBottomCtaSection__VariantsArgs;
    args?: PlasmicBottomCtaSection__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicBottomCtaSection__Fetches;
  } & Omit<PlasmicBottomCtaSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBottomCtaSection__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBottomCtaSection__ArgProps,
      internalVariantPropNames: PlasmicBottomCtaSection__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicBottomCtaSection__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBottomCtaSection";
  } else {
    func.displayName = `PlasmicBottomCtaSection.${nodeName}`;
  }
  return func;
}

export const PlasmicBottomCtaSection = Object.assign(
  // Top-level PlasmicBottomCtaSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    productHuntBadge: makeNodeComponent("productHuntBadge"),
    img: makeNodeComponent("img"),
    container23: makeNodeComponent("container23"),
    freeBox: makeNodeComponent("freeBox"),
    buttonLink: makeNodeComponent("buttonLink"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicBottomCtaSection
    internalVariantProps: PlasmicBottomCtaSection__VariantProps,
    internalArgProps: PlasmicBottomCtaSection__ArgProps
  }
);

export default PlasmicBottomCtaSection;
/* prettier-ignore-end */
