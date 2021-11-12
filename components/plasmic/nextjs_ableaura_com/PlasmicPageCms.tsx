// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: souD5h88MhENvTHMTJd8eE
// Component: -kXhX0IlYHi
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
import Header from "../../Header"; // plasmic-import: gm5-8uP8UsM/component
import PageHero from "../../PageHero"; // plasmic-import: vbMgnF8jjWCL/component
import GraphicIcon from "../../GraphicIcon"; // plasmic-import: e2aIHUlliT40/component
import ValuePropSection from "../../ValuePropSection"; // plasmic-import: 3bwHcXHAsuR/component
import ButtonLink from "../../ButtonLink"; // plasmic-import: WEYjixTZW6s/component
import Footer from "../../Footer"; // plasmic-import: MOxc4yW_hfJ/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_nextjs_ableaura_com.module.css"; // plasmic-import: souD5h88MhENvTHMTJd8eE/projectcss
import * as sty from "./PlasmicPageCms.module.css"; // plasmic-import: -kXhX0IlYHi/css

import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: RPhkBowkT3MA/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: qXkXmSCGXsaH/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 0UGn88PbJe7i/icon
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: 8m1F-mZpTDnT/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: Qa2ocDt62Kvq/icon

export type PlasmicPageCms__VariantMembers = {};

export type PlasmicPageCms__VariantsArgs = {};
type VariantPropType = keyof PlasmicPageCms__VariantsArgs;
export const PlasmicPageCms__VariantProps = new Array<VariantPropType>();

export type PlasmicPageCms__ArgsType = {};
type ArgPropType = keyof PlasmicPageCms__ArgsType;
export const PlasmicPageCms__ArgProps = new Array<ArgPropType>();

export type PlasmicPageCms__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  pageHero?: p.Flex<typeof PageHero>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultPageCmsProps {
  className?: string;
}

function PlasmicPageCms__RenderFunc(props: {
  variants: PlasmicPageCms__VariantsArgs;
  args: PlasmicPageCms__ArgsType;
  overrides: PlasmicPageCms__OverridesType;
  dataFetches?: PlasmicPageCms__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <Header
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        className={classNames("__wab_instance", sty.header)}
      />

      <PageHero
        data-plasmic-name={"pageHero"}
        data-plasmic-override={overrides.pageHero}
        className={classNames("__wab_instance", sty.pageHero)}
        slot={
          "A visual CMS with a powerful editor to design, build, and ship new experiences fast."
        }
        slot2={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon__zxbNt)}
            colors={"gray" as const}
          >
            <Icon12Icon
              className={classNames(defaultcss.all, sty.svg__vyZZu)}
              role={"img"}
            />
          </GraphicIcon>
        }
      >
        {"Content Management system"}
      </PageHero>

      <ValuePropSection
        backgroundImage={
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__kckNg)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            src={{
              src: "/plasmic/nextjs_ableaura_com/images/image6.svg",
              fullWidth: 300,
              fullHeight: 95,
              aspectRatio: 3.150655
            }}
          />
        }
        className={classNames("__wab_instance", sty.valuePropSection__qUo8U)}
        description={
          "Keep full control how your content looks and feels in production directly from Plasmic. What you see is what you get."
        }
        header={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__qIpt
            )}
          >
            {"full control"}
          </div>
        }
        icon={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon__o0PRe)}
          >
            <Icon6Icon
              className={classNames(defaultcss.all, sty.svg__dbEd8)}
              role={"img"}
            />
          </GraphicIcon>
        }
        title={"Get autonomy over your content and presentation"}
      />

      <ValuePropSection
        backgroundColor={"green" as const}
        backgroundImage={
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img___9Ncel)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            src={{
              src: "/plasmic/nextjs_ableaura_com/images/image7.svg",
              fullWidth: 300,
              fullHeight: 145,
              aspectRatio: 2.068966
            }}
          />
        }
        className={classNames("__wab_instance", sty.valuePropSection__gQgtJ)}
        description={
          "Need to make a quick change? Publish directly from Plasmic, no need to bring up a development environment."
        }
        header={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__pmsiW
            )}
          >
            {"#nocode"}
          </div>
        }
        icon={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon__uO8AW)}
            colors={"green" as const}
          >
            <Icon6Icon
              className={classNames(defaultcss.all, sty.svg___41Ut8)}
              role={"img"}
            />
          </GraphicIcon>
        }
        title={"Deploy with no coding required"}
      />

      <ValuePropSection
        backgroundColor={"yellow" as const}
        backgroundImage={
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__ykhQm)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            src={{
              src: "/plasmic/nextjs_ableaura_com/images/image2.svg",
              fullWidth: 300,
              fullHeight: 92,
              aspectRatio: 3.257919
            }}
          />
        }
        className={classNames("__wab_instance", sty.valuePropSection__fAhWw)}
        description={
          "Iterate quickly on new designs and content and get to market faster. Ship faster, learn faster."
        }
        header={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__vLn8W
            )}
          >
            {"#nocode"}
          </div>
        }
        icon={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon__wc8Yu)}
            colors={"yellow" as const}
          >
            <Icon10Icon
              className={classNames(defaultcss.all, sty.svg__nxf6R)}
              role={"img"}
            />
          </GraphicIcon>
        }
        title={"Test your ideas quickly"}
      />

      <ValuePropSection
        backgroundColor={"orange" as const}
        backgroundImage={
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__ulIrl)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            src={{
              src: "/plasmic/nextjs_ableaura_com/images/image7.svg",
              fullWidth: 300,
              fullHeight: 145,
              aspectRatio: 2.068966
            }}
          />
        }
        className={classNames("__wab_instance", sty.valuePropSection___5RX7W)}
        description={
          "No need to change or replace your existing stack. Start with a blurb on a page."
        }
        header={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__gqsxy
            )}
          >
            {"#nocode"}
          </div>
        }
        icon={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon__oZtb)}
          >
            <Icon6Icon
              className={classNames(defaultcss.all, sty.svg__wPuw6)}
              role={"img"}
            />
          </GraphicIcon>
        }
        title={"Adopt incrementally in any existing React stack"}
      />

      <ValuePropSection
        backgroundColor={"orange" as const}
        backgroundImage={
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__cbHt)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            src={{
              src: "/plasmic/nextjs_ableaura_com/images/image7.svg",
              fullWidth: 300,
              fullHeight: 145,
              aspectRatio: 2.068966
            }}
          />
        }
        className={classNames("__wab_instance", sty.valuePropSection__dmL28)}
        description={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__lKmEb
            )}
          >
            {
              "Want to eject? Walk away any time with plain React code. They're yours to keep forever."
            }
          </div>
        }
        header={
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__zlT0L
            )}
          >
            {"#nocode"}
          </div>
        }
        icon={
          <GraphicIcon
            className={classNames("__wab_instance", sty.graphicIcon__fDjWq)}
          >
            <Icon5Icon
              className={classNames(defaultcss.all, sty.svg__nePfv)}
              role={"img"}
            />
          </GraphicIcon>
        }
        title={"Zero lock-in"}
      />

      <Footer
        data-plasmic-name={"footer"}
        data-plasmic-override={overrides.footer}
        className={classNames("__wab_instance", sty.footer)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "pageHero", "footer"],
  header: ["header"],
  pageHero: ["pageHero"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  pageHero: typeof PageHero;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPageCms__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPageCms__VariantsArgs;
    args?: PlasmicPageCms__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPageCms__Fetches;
  } & Omit<PlasmicPageCms__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPageCms__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPageCms__ArgProps,
      internalVariantPropNames: PlasmicPageCms__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPageCms__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageCms";
  } else {
    func.displayName = `PlasmicPageCms.${nodeName}`;
  }
  return func;
}

export const PlasmicPageCms = Object.assign(
  // Top-level PlasmicPageCms renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pageHero: makeNodeComponent("pageHero"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicPageCms
    internalVariantProps: PlasmicPageCms__VariantProps,
    internalArgProps: PlasmicPageCms__ArgProps
  }
);

export default PlasmicPageCms;
/* prettier-ignore-end */