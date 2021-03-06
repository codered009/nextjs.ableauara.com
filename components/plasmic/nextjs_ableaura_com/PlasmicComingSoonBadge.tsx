// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: souD5h88MhENvTHMTJd8eE
// Component: fwL4AYoeQpt5
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_nextjs_ableaura_com.module.css"; // plasmic-import: souD5h88MhENvTHMTJd8eE/projectcss
import * as sty from "./PlasmicComingSoonBadge.module.css"; // plasmic-import: fwL4AYoeQpt5/css

export type PlasmicComingSoonBadge__VariantMembers = {
  comingSoon: "comingSoon";
};

export type PlasmicComingSoonBadge__VariantsArgs = {
  comingSoon?: SingleBooleanChoiceArg<"comingSoon">;
};

type VariantPropType = keyof PlasmicComingSoonBadge__VariantsArgs;
export const PlasmicComingSoonBadge__VariantProps = new Array<VariantPropType>(
  "comingSoon"
);

export type PlasmicComingSoonBadge__ArgsType = {};
type ArgPropType = keyof PlasmicComingSoonBadge__ArgsType;
export const PlasmicComingSoonBadge__ArgProps = new Array<ArgPropType>();

export type PlasmicComingSoonBadge__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultComingSoonBadgeProps {
  comingSoon?: SingleBooleanChoiceArg<"comingSoon">;
  className?: string;
}

function PlasmicComingSoonBadge__RenderFunc(props: {
  variants: PlasmicComingSoonBadge__VariantsArgs;
  args: PlasmicComingSoonBadge__ArgsType;
  overrides: PlasmicComingSoonBadge__OverridesType;
  dataFetches?: PlasmicComingSoonBadge__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    (hasVariant(variants, "comingSoon", "comingSoon") ? true : true) ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
          [sty.root__comingSoon]: hasVariant(
            variants,
            "comingSoon",
            "comingSoon"
          )
        })}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.text
          )}
        >
          {"Coming Soon"}
        </div>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicComingSoonBadge__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicComingSoonBadge__VariantsArgs;
    args?: PlasmicComingSoonBadge__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicComingSoonBadge__Fetches;
  } & Omit<PlasmicComingSoonBadge__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicComingSoonBadge__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicComingSoonBadge__ArgProps,
      internalVariantPropNames: PlasmicComingSoonBadge__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicComingSoonBadge__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicComingSoonBadge";
  } else {
    func.displayName = `PlasmicComingSoonBadge.${nodeName}`;
  }
  return func;
}

export const PlasmicComingSoonBadge = Object.assign(
  // Top-level PlasmicComingSoonBadge renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicComingSoonBadge
    internalVariantProps: PlasmicComingSoonBadge__VariantProps,
    internalArgProps: PlasmicComingSoonBadge__ArgProps
  }
);

export default PlasmicComingSoonBadge;
/* prettier-ignore-end */
