// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: souD5h88MhENvTHMTJd8eE
// Component: eFR6LkfCZMcF
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
import GraphicIcon from "../../GraphicIcon"; // plasmic-import: e2aIHUlliT40/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_nextjs_ableaura_com.module.css"; // plasmic-import: souD5h88MhENvTHMTJd8eE/projectcss
import * as sty from "./PlasmicValuePropListItem.module.css"; // plasmic-import: eFR6LkfCZMcF/css

import Icon17Icon from "./icons/PlasmicIcon__Icon17"; // plasmic-import: 00s88MZtS-CY/icon

export type PlasmicValuePropListItem__VariantMembers = {};

export type PlasmicValuePropListItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicValuePropListItem__VariantsArgs;
export const PlasmicValuePropListItem__VariantProps =
  new Array<VariantPropType>();

export type PlasmicValuePropListItem__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicValuePropListItem__ArgsType;
export const PlasmicValuePropListItem__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicValuePropListItem__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultValuePropListItemProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  className?: string;
}

function PlasmicValuePropListItem__RenderFunc(props: {
  variants: PlasmicValuePropListItem__VariantsArgs;
  args: PlasmicValuePropListItem__ArgsType;
  overrides: PlasmicValuePropListItem__OverridesType;
  dataFetches?: PlasmicValuePropListItem__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon__mEs1)}
            colors={"teal" as const}
          >
            <Icon17Icon
              className={classNames(defaultcss.all, sty.svg__q8Hhj)}
              role={"img"}
            />
          </GraphicIcon>
        ),

        value: args.slot
      })}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox___2OUW)}
      >
        <div className={classNames(defaultcss.all, sty.freeBox__nXnrQ)}>
          <div className={classNames(defaultcss.all, sty.freeBox__m3Qoe)}>
            {p.renderPlasmicSlot({
              defaultContents: "This is a header.",
              value: args.slot2,
              className: classNames(sty.slotTargetSlot2)
            })}
          </div>
        </div>

        {p.renderPlasmicSlot({
          defaultContents:
            "Enable non-developers to publish pages and free-form content. For when CMS schemas and templates can't keep up.",
          value: args.children
        })}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValuePropListItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValuePropListItem__VariantsArgs;
    args?: PlasmicValuePropListItem__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicValuePropListItem__Fetches;
  } & Omit<PlasmicValuePropListItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicValuePropListItem__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicValuePropListItem__ArgProps,
      internalVariantPropNames: PlasmicValuePropListItem__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicValuePropListItem__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValuePropListItem";
  } else {
    func.displayName = `PlasmicValuePropListItem.${nodeName}`;
  }
  return func;
}

export const PlasmicValuePropListItem = Object.assign(
  // Top-level PlasmicValuePropListItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicValuePropListItem
    internalVariantProps: PlasmicValuePropListItem__VariantProps,
    internalArgProps: PlasmicValuePropListItem__ArgProps
  }
);

export default PlasmicValuePropListItem;
/* prettier-ignore-end */
