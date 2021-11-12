// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: souD5h88MhENvTHMTJd8eE
// Component: DSfCqQv-Loyq
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
import CommonLandingPage2 from "../../CommonLandingPage2"; // plasmic-import: HBZ3E3OXp2Xw/component
import ValuePropListItem from "../../ValuePropListItem"; // plasmic-import: eFR6LkfCZMcF/component
import GraphicIcon from "../../GraphicIcon"; // plasmic-import: e2aIHUlliT40/component
import Divider from "../../Divider"; // plasmic-import: 5YxrxfKmRHtf/component
import SmallValuePropCard from "../../SmallValuePropCard"; // plasmic-import: i-nPMUQB3KRp/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: KSAzOQ4LXGzQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_nextjs_ableaura_com.module.css"; // plasmic-import: souD5h88MhENvTHMTJd8eE/projectcss
import * as sty from "./PlasmicEcommerce.module.css"; // plasmic-import: DSfCqQv-Loyq/css

import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: RPhkBowkT3MA/icon
import Icon20Icon from "./icons/PlasmicIcon__Icon20"; // plasmic-import: 52_x3C6vVI9z/icon
import Icon22Icon from "./icons/PlasmicIcon__Icon22"; // plasmic-import: o-cOIgwGaem4/icon
import Icon27Icon from "./icons/PlasmicIcon__Icon27"; // plasmic-import: Kgv7x1zin2ho/icon

export type PlasmicEcommerce__VariantMembers = {};

export type PlasmicEcommerce__VariantsArgs = {};
type VariantPropType = keyof PlasmicEcommerce__VariantsArgs;
export const PlasmicEcommerce__VariantProps = new Array<VariantPropType>();

export type PlasmicEcommerce__ArgsType = {};
type ArgPropType = keyof PlasmicEcommerce__ArgsType;
export const PlasmicEcommerce__ArgProps = new Array<ArgPropType>();

export type PlasmicEcommerce__OverridesType = {
  root?: p.Flex<"div">;
  commonLandingPage2?: p.Flex<typeof CommonLandingPage2>;
  valueA13?: p.Flex<typeof SmallValuePropCard>;
  valueA23?: p.Flex<typeof SmallValuePropCard>;
  valueA22223?: p.Flex<typeof SmallValuePropCard>;
  valueA222?: p.Flex<typeof SmallValuePropCard>;
  valueA222222?: p.Flex<typeof SmallValuePropCard>;
  valueA122?: p.Flex<typeof SmallValuePropCard>;
  valueA2322?: p.Flex<typeof SmallValuePropCard>;
  valueA22322?: p.Flex<typeof SmallValuePropCard>;
};

export interface DefaultEcommerceProps {
  dataFetches: PlasmicEcommerce__Fetches;
}

function PlasmicEcommerce__RenderFunc(props: {
  variants: PlasmicEcommerce__VariantsArgs;
  args: PlasmicEcommerce__ArgsType;
  overrides: PlasmicEcommerce__OverridesType;
  dataFetches?: PlasmicEcommerce__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">
          {"Plasmic - The ecommerce page builder for any tech stack"}
        </title>
        <meta
          key="og:title"
          property="og:title"
          content={"Plasmic - The ecommerce page builder for any tech stack"}
        />
        <meta
          key="description"
          property="og:description"
          name="description"
          content={
            "Plasmic is a visual, no-code page builder and CMS for ecommerce websites. Use your existing code components. Empower the whole team to ship incredibly fast."
          }
        />
        <meta
          key="og:image"
          property="og:image"
          content={
            "https://site-assets.plasmic.app/507b45cdfe9dcacadbe1e9718dc859aa.png"
          }
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <CommonLandingPage2
            data-plasmic-name={"commonLandingPage2"}
            data-plasmic-override={overrides.commonLandingPage2}
            className={classNames("__wab_instance", sty.commonLandingPage2)}
            slot={
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__fibuf
                )}
              >
                <span className={"plasmic_default__all plasmic_default__span"}>
                  <React.Fragment>
                    {"Build engaging digital experiences ⚡️ "}
                  </React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontStyle: "italic" }}
                  >
                    {"fast"}
                  </span>
                  <React.Fragment>{"."}</React.Fragment>
                </span>
              </div>
            }
            slot2={
              "Create stunning visual content and pages, seamlessly integrating no-code with your codebase. Boutique brands through Fortune 500s use Plasmic to let the whole team ship lightning fast."
            }
            slot3={
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox___9Ynz)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__m7Kte)}
                >
                  <SmallValuePropCard
                    data-plasmic-name={"valueA13"}
                    data-plasmic-override={overrides.valueA13}
                    actionButton={null}
                    description={null}
                    followupLink={null}
                    icon={null}
                    ltr={"ltr" as const}
                    showcaseImage={
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__kBV4)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"none" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"100%" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/nextjs_ableaura_com/images/image87.png",
                          fullWidth: 590,
                          fullHeight: 300,
                          aspectRatio: undefined
                        }}
                      />
                    }
                  >
                    {"Landing pages"}
                  </SmallValuePropCard>

                  <SmallValuePropCard
                    data-plasmic-name={"valueA23"}
                    data-plasmic-override={overrides.valueA23}
                    actionButton={null}
                    className={classNames("__wab_instance", sty.valueA23)}
                    description={null}
                    followupLink={null}
                    icon={null}
                    ltr={"ltr" as const}
                    showcaseImage={
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__sz1Ld)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"none" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"100%" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/nextjs_ableaura_com/images/image81.png",
                          fullWidth: 1018,
                          fullHeight: 683,
                          aspectRatio: undefined
                        }}
                      />
                    }
                  >
                    {"Headless storefronts"}
                  </SmallValuePropCard>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__zyUnz)}
                >
                  <SmallValuePropCard
                    data-plasmic-name={"valueA22223"}
                    data-plasmic-override={overrides.valueA22223}
                    actionButton={null}
                    className={classNames("__wab_instance", sty.valueA22223)}
                    description={null}
                    followupLink={null}
                    icon={null}
                    ltr={"ltr" as const}
                    showcaseImage={
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__b1LOg)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"none" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"100%" as const}
                        src={{
                          src: "/plasmic/nextjs_ableaura_com/images/image83.png",
                          fullWidth: 554,
                          fullHeight: 298,
                          aspectRatio: undefined
                        }}
                      />
                    }
                  >
                    {"Cart upsells"}
                  </SmallValuePropCard>

                  <SmallValuePropCard
                    data-plasmic-name={"valueA222"}
                    data-plasmic-override={overrides.valueA222}
                    actionButton={null}
                    className={classNames("__wab_instance", sty.valueA222)}
                    description={null}
                    followupLink={null}
                    icon={null}
                    ltr={"ltr" as const}
                    showcaseImage={
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img___8ShYl)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"none" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"100%" as const}
                        src={{
                          src: "/plasmic/nextjs_ableaura_com/images/image78.png",
                          fullWidth: 452,
                          fullHeight: 250,
                          aspectRatio: undefined
                        }}
                      />
                    }
                  >
                    {"Offer overlays"}
                  </SmallValuePropCard>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__jGON)}
                >
                  <SmallValuePropCard
                    data-plasmic-name={"valueA222222"}
                    data-plasmic-override={overrides.valueA222222}
                    actionButton={null}
                    className={classNames("__wab_instance", sty.valueA222222)}
                    description={null}
                    followupLink={null}
                    icon={null}
                    ltr={"ltr" as const}
                    showcaseImage={
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__n8Bwd)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"none" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"100%" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/nextjs_ableaura_com/images/image82.png",
                          fullWidth: 435,
                          fullHeight: 204,
                          aspectRatio: undefined
                        }}
                      />
                    }
                  >
                    {"Announcement bars"}
                  </SmallValuePropCard>

                  <SmallValuePropCard
                    data-plasmic-name={"valueA122"}
                    data-plasmic-override={overrides.valueA122}
                    actionButton={null}
                    description={null}
                    followupLink={null}
                    icon={null}
                    ltr={"ltr" as const}
                    showcaseImage={
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__quAxs)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"none" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"100%" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/nextjs_ableaura_com/images/image84.png",
                          fullWidth: 557,
                          fullHeight: 334,
                          aspectRatio: undefined
                        }}
                      />
                    }
                  >
                    {"Product detail pages"}
                  </SmallValuePropCard>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__w84U1)}
                >
                  <SmallValuePropCard
                    data-plasmic-name={"valueA2322"}
                    data-plasmic-override={overrides.valueA2322}
                    actionButton={null}
                    className={classNames("__wab_instance", sty.valueA2322)}
                    description={null}
                    followupLink={null}
                    icon={null}
                    ltr={"ltr" as const}
                    showcaseImage={
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__goAT)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"none" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"100%" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/nextjs_ableaura_com/images/image86.png",
                          fullWidth: 432,
                          fullHeight: 164,
                          aspectRatio: undefined
                        }}
                      />
                    }
                  >
                    {"Heroes"}
                  </SmallValuePropCard>

                  <SmallValuePropCard
                    data-plasmic-name={"valueA22322"}
                    data-plasmic-override={overrides.valueA22322}
                    actionButton={null}
                    className={classNames("__wab_instance", sty.valueA22322)}
                    description={null}
                    followupLink={null}
                    icon={null}
                    ltr={"ltr" as const}
                    showcaseImage={
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img___3TqUt)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"none" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"100%" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/nextjs_ableaura_com/images/image85.png",
                          fullWidth: 596,
                          fullHeight: 226,
                          aspectRatio: undefined
                        }}
                      />
                    }
                  >
                    {"Promotional sections"}
                  </SmallValuePropCard>
                </p.Stack>
              </p.Stack>
            }
            slot4={
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__vB4Bv)}
              >
                <ValuePropListItem
                  slot={
                    <GraphicIcon
                      className={classNames(
                        "__wab_instance",
                        sty.graphicIcon__bw1Nb
                      )}
                      colors={"lightBlueSolid" as const}
                    >
                      <Icon12Icon
                        className={classNames(defaultcss.all, sty.svg__hDjFq)}
                        role={"img"}
                      />
                    </GraphicIcon>
                  }
                  slot2={"No-code autonomy."}
                >
                  {
                    "Easy-to-use but powerful drag-and-drop builder to create pages incredibly fast."
                  }
                </ValuePropListItem>

                <Divider
                  className={classNames("__wab_instance", sty.divider___9Oi)}
                />

                <ValuePropListItem
                  slot={
                    <GraphicIcon
                      className={classNames(
                        "__wab_instance",
                        sty.graphicIcon___8MrX
                      )}
                      colors={"lightBlueSolid" as const}
                    >
                      <Icon20Icon
                        className={classNames(defaultcss.all, sty.svg__vvWgm)}
                        role={"img"}
                      />
                    </GraphicIcon>
                  }
                  slot2={"Publish instantly."}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__xO8Jh
                    )}
                  >
                    {
                      "Stop waiting on development cycles. Iterate toward higher growth faster."
                    }
                  </div>
                </ValuePropListItem>

                <Divider
                  className={classNames("__wab_instance", sty.divider__t9PMp)}
                />

                <ValuePropListItem
                  slot={
                    <GraphicIcon
                      className={classNames(
                        "__wab_instance",
                        sty.graphicIcon__cFe3K
                      )}
                      colors={"lightBlueSolid" as const}
                    >
                      <Icon22Icon
                        className={classNames(defaultcss.all, sty.svg__xOrKn)}
                        role={"img"}
                      />
                    </GraphicIcon>
                  }
                  slot2={"Free up developers."}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__fN8Gd
                    )}
                  >
                    {"Let developers focus on code rather than pixel-pushing."}
                  </div>
                </ValuePropListItem>

                <Divider
                  className={classNames("__wab_instance", sty.divider__f03Ao)}
                />

                <ValuePropListItem
                  slot={
                    <GraphicIcon
                      className={classNames(
                        "__wab_instance",
                        sty.graphicIcon__aui7K
                      )}
                      colors={"lightBlueSolid" as const}
                    >
                      <Icon27Icon
                        className={classNames(defaultcss.all, sty.svg__uIfHy)}
                        role={"img"}
                      />
                    </GraphicIcon>
                  }
                  slot2={"Hit the ground running."}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text___3Oe5J
                    )}
                  >
                    {
                      "Use your existing design system, import from Figma, or grab our templates."
                    }
                  </div>
                </ValuePropListItem>
              </p.Stack>
            }
            slot6={
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__tcReg)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"1200px" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                src={{
                  src: "/plasmic/nextjs_ableaura_com/images/ecommerceHeroImageTinypng.png",
                  fullWidth: 1017,
                  fullHeight: 597,
                  aspectRatio: undefined
                }}
              />
            }
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__o93TY
              )}
            >
              {"Move fast. Grow faster."}
            </div>
          </CommonLandingPage2>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "commonLandingPage2",
    "valueA13",
    "valueA23",
    "valueA22223",
    "valueA222",
    "valueA222222",
    "valueA122",
    "valueA2322",
    "valueA22322"
  ],
  commonLandingPage2: [
    "commonLandingPage2",
    "valueA13",
    "valueA23",
    "valueA22223",
    "valueA222",
    "valueA222222",
    "valueA122",
    "valueA2322",
    "valueA22322"
  ],
  valueA13: ["valueA13"],
  valueA23: ["valueA23"],
  valueA22223: ["valueA22223"],
  valueA222: ["valueA222"],
  valueA222222: ["valueA222222"],
  valueA122: ["valueA122"],
  valueA2322: ["valueA2322"],
  valueA22322: ["valueA22322"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  commonLandingPage2: typeof CommonLandingPage2;
  valueA13: typeof SmallValuePropCard;
  valueA23: typeof SmallValuePropCard;
  valueA22223: typeof SmallValuePropCard;
  valueA222: typeof SmallValuePropCard;
  valueA222222: typeof SmallValuePropCard;
  valueA122: typeof SmallValuePropCard;
  valueA2322: typeof SmallValuePropCard;
  valueA22322: typeof SmallValuePropCard;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEcommerce__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEcommerce__VariantsArgs;
    args?: PlasmicEcommerce__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicEcommerce__Fetches;
  } & Omit<PlasmicEcommerce__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicEcommerce__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicEcommerce__ArgProps,
      internalVariantPropNames: PlasmicEcommerce__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicEcommerce__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEcommerce";
  } else {
    func.displayName = `PlasmicEcommerce.${nodeName}`;
  }
  return func;
}

export const PlasmicEcommerce = Object.assign(
  // Top-level PlasmicEcommerce renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    commonLandingPage2: makeNodeComponent("commonLandingPage2"),
    valueA13: makeNodeComponent("valueA13"),
    valueA23: makeNodeComponent("valueA23"),
    valueA22223: makeNodeComponent("valueA22223"),
    valueA222: makeNodeComponent("valueA222"),
    valueA222222: makeNodeComponent("valueA222222"),
    valueA122: makeNodeComponent("valueA122"),
    valueA2322: makeNodeComponent("valueA2322"),
    valueA22322: makeNodeComponent("valueA22322"),

    // Metadata about props expected for PlasmicEcommerce
    internalVariantProps: PlasmicEcommerce__VariantProps,
    internalArgProps: PlasmicEcommerce__ArgProps
  }
);

export default PlasmicEcommerce;
/* prettier-ignore-end */