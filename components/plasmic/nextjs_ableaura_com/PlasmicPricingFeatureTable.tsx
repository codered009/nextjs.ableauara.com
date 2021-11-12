// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: souD5h88MhENvTHMTJd8eE
// Component: CqTmn5ZfZEy9
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
import PricingFeatureTableRow from "../../PricingFeatureTableRow"; // plasmic-import: x3C5v3v3G7Az/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: KSAzOQ4LXGzQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_nextjs_ableaura_com.module.css"; // plasmic-import: souD5h88MhENvTHMTJd8eE/projectcss
import * as sty from "./PlasmicPricingFeatureTable.module.css"; // plasmic-import: CqTmn5ZfZEy9/css

import Icon30Icon from "./icons/PlasmicIcon__Icon30"; // plasmic-import: b8m0uPgWf95D/icon

export type PlasmicPricingFeatureTable__VariantMembers = {};

export type PlasmicPricingFeatureTable__VariantsArgs = {};
type VariantPropType = keyof PlasmicPricingFeatureTable__VariantsArgs;
export const PlasmicPricingFeatureTable__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPricingFeatureTable__ArgsType = {};
type ArgPropType = keyof PlasmicPricingFeatureTable__ArgsType;
export const PlasmicPricingFeatureTable__ArgProps = new Array<ArgPropType>();

export type PlasmicPricingFeatureTable__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultPricingFeatureTableProps {
  className?: string;
}

function PlasmicPricingFeatureTable__RenderFunc(props: {
  variants: PlasmicPricingFeatureTable__VariantsArgs;
  args: PlasmicPricingFeatureTable__ArgsType;
  overrides: PlasmicPricingFeatureTable__OverridesType;
  dataFetches?: PlasmicPricingFeatureTable__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.freeBox__bYfQ)}>
        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow__og5D1
          )}
          enterprise={
            hasVariant(globalVariants, "screen", "mobilePortrait")
              ? "E"
              : "Enterprise"
          }
          free={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text___3Xvbi
              )}
            >
              {hasVariant(globalVariants, "screen", "mobilePortrait")
                ? "S"
                : "Starter"}
            </div>
          }
          header={"header" as const}
          name={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text___1GI1I
              )}
            >
              {"Features"}
            </div>
          }
          pro={
            hasVariant(globalVariants, "screen", "mobilePortrait")
              ? "P"
              : "Basic"
          }
          team={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__hXRo
              )}
            >
              {hasVariant(globalVariants, "screen", "mobilePortrait")
                ? "T"
                : "Growth"}
            </div>
          }
        />

        <div className={classNames(defaultcss.all, sty.freeBox__uPbPs)} />

        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow__z41PQ
          )}
          name={"Unlimited projects"}
        />

        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow__vnl3R
          )}
          name={"Unlimited publishes and syncs"}
        />

        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow__yAAh
          )}
          name={"Figma import"}
        />

        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow__cn0IG
          )}
          enterprise={"✓"}
          free={"30"}
          name={"Version history (days)"}
          pro={"90"}
          team={"90"}
        />

        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow__qoY5
          )}
          name={"Cross-project imports"}
        />

        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow__cl1O6
          )}
          name={"Share links"}
        />

        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow___8KIno
          )}
          free={"3"}
          name={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__lLqy8
              )}
            >
              {"Max collaborators per team"}
            </div>
          }
          pro={"10"}
          team={"30"}
        />

        {true ? (
          <PricingFeatureTableRow
            className={classNames(
              "__wab_instance",
              sty.pricingFeatureTableRow__qEhAc
            )}
            name={"Unlimited viewers"}
          />
        ) : null}

        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow___5B6Ou
          )}
          free={"10K"}
          name={"Monthly page views"}
          pro={"250K"}
          team={"500K"}
        />

        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow__uwZOc
          )}
          free={"1"}
          name={"Shared workspaces"}
        />

        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow__sukgL
          )}
          free={"✓"}
          name={"Community support"}
        />

        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow___1ZyxC
          )}
          free={" "}
          name={"Image optimization"}
        />

        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow__yvQqi
          )}
          free={" "}
          name={"Standard support"}
        />

        {true ? (
          <PricingFeatureTableRow
            className={classNames(
              "__wab_instance",
              sty.pricingFeatureTableRow__sOm7T
            )}
            comingSoon={"comingSoon" as const}
            free={"  "}
            name={"A/B optimization"}
            pro={" "}
          />
        ) : null}
        {true ? (
          <PricingFeatureTableRow
            className={classNames(
              "__wab_instance",
              sty.pricingFeatureTableRow__xFpk
            )}
            comingSoon={"comingSoon" as const}
            free={"  "}
            name={"Segmented content"}
            pro={" "}
          />
        ) : null}
        {true ? (
          <PricingFeatureTableRow
            className={classNames(
              "__wab_instance",
              sty.pricingFeatureTableRow__qM7F7
            )}
            comingSoon={"comingSoon" as const}
            free={"  "}
            name={"Scheduled content"}
            pro={" "}
          />
        ) : null}

        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow__uAkoI
          )}
          free={"  "}
          name={"Team roles"}
          pro={"✓"}
        />

        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow___7KnUw
          )}
          free={" "}
          name={"Advanced permissions"}
          pro={"✓"}
        />

        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow__seb27
          )}
          free={" "}
          name={"Premium support"}
          pro={" "}
          team={" "}
        />

        <PricingFeatureTableRow
          className={classNames(
            "__wab_instance",
            sty.pricingFeatureTableRow__f9B8F
          )}
          free={" "}
          name={"Organizational content ownership"}
          pro={" "}
          team={" "}
        />

        {true ? (
          <PricingFeatureTableRow
            className={classNames(
              "__wab_instance",
              sty.pricingFeatureTableRow__rmB1
            )}
            comingSoon={"comingSoon" as const}
            free={" "}
            name={"Centralized administration"}
            pro={" "}
            team={" "}
          />
        ) : null}
        {true ? (
          <PricingFeatureTableRow
            className={classNames(
              "__wab_instance",
              sty.pricingFeatureTableRow__fTic3
            )}
            comingSoon={"comingSoon" as const}
            free={" "}
            name={"Domain capture"}
            pro={" "}
            team={" "}
          />
        ) : null}
        {true ? (
          <PricingFeatureTableRow
            className={classNames(
              "__wab_instance",
              sty.pricingFeatureTableRow___6EOd4
            )}
            comingSoon={"comingSoon" as const}
            free={" "}
            name={"Link access controls"}
            pro={" "}
            team={" "}
          />
        ) : null}
      </div>
    </div>
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
  PlasmicPricingFeatureTable__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPricingFeatureTable__VariantsArgs;
    args?: PlasmicPricingFeatureTable__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPricingFeatureTable__Fetches;
  } & Omit<PlasmicPricingFeatureTable__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPricingFeatureTable__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPricingFeatureTable__ArgProps,
      internalVariantPropNames: PlasmicPricingFeatureTable__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPricingFeatureTable__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPricingFeatureTable";
  } else {
    func.displayName = `PlasmicPricingFeatureTable.${nodeName}`;
  }
  return func;
}

export const PlasmicPricingFeatureTable = Object.assign(
  // Top-level PlasmicPricingFeatureTable renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPricingFeatureTable
    internalVariantProps: PlasmicPricingFeatureTable__VariantProps,
    internalArgProps: PlasmicPricingFeatureTable__ArgProps
  }
);

export default PlasmicPricingFeatureTable;
/* prettier-ignore-end */
