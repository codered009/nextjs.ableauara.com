// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: souD5h88MhENvTHMTJd8eE
// Component: weZ1h7PWmYW7
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
import Footer from "../../Footer"; // plasmic-import: MOxc4yW_hfJ/component

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: K8kdSftIudYz/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_nextjs_ableaura_com.module.css"; // plasmic-import: souD5h88MhENvTHMTJd8eE/projectcss
import * as sty from "./PlasmicAbout.module.css"; // plasmic-import: weZ1h7PWmYW7/css

import Icon37Icon from "./icons/PlasmicIcon__Icon37"; // plasmic-import: uEuocuaS3DH9/icon

export type PlasmicAbout__VariantMembers = {};

export type PlasmicAbout__VariantsArgs = {};
type VariantPropType = keyof PlasmicAbout__VariantsArgs;
export const PlasmicAbout__VariantProps = new Array<VariantPropType>();

export type PlasmicAbout__ArgsType = {};
type ArgPropType = keyof PlasmicAbout__ArgsType;
export const PlasmicAbout__ArgProps = new Array<ArgPropType>();

export type PlasmicAbout__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  body?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultAboutProps {
  dataFetches: PlasmicAbout__Fetches;
}

function PlasmicAbout__RenderFunc(props: {
  variants: PlasmicAbout__VariantsArgs;
  args: PlasmicAbout__ArgsType;
  overrides: PlasmicAbout__OverridesType;
  dataFetches?: PlasmicAbout__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"About Plasmic"}</title>
        <meta key="og:title" property="og:title" content={"About Plasmic"} />
        <meta
          key="description"
          property="og:description"
          name="description"
          content={
            "Plasmic's mission is to democratize software creation and empower everyone to bring their ideas to life. We are proudly funded by NEA."
          }
        />
        <meta
          key="og:image"
          property="og:image"
          content={
            "https://site-assets.plasmic.app/d55f7316cdb73e3ea268c620a1c7be05.png"
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
            sty.root,
            {
              [sty.root__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            }
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header, {
              [sty.header__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            })}
          />

          <div
            data-plasmic-name={"body"}
            data-plasmic-override={overrides.body}
            className={classNames(defaultcss.all, sty.body, {
              [sty.body__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            })}
          >
            <div className={classNames(defaultcss.all, sty.freeBox__v3TCh)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__gJoo2)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__u1PSt
                  )}
                >
                  {"Mission"}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__qbgaP
                  )}
                >
                  {
                    "Democratize software creation and empower everyone to bring their ideas to life."
                  }
                </div>
              </p.Stack>
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__zDhJ1, {
                [sty.freeBox__global_theme_dark__zDhJ1UgT9R]: hasVariant(
                  globalVariants,
                  "theme",
                  "dark"
                )
              })}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__dnWEl)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__rfNue,
                    {
                      [sty.text__global_theme_dark__rfNueUgT9R]: hasVariant(
                        globalVariants,
                        "theme",
                        "dark"
                      )
                    }
                  )}
                >
                  {"Our Team"}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__qBRb,
                    {
                      [sty.text__global_theme_dark__qBRbUgT9R]: hasVariant(
                        globalVariants,
                        "theme",
                        "dark"
                      )
                    }
                  )}
                >
                  {
                    "We are a band of engineers, designers, and dreamers from Google, Microsoft, Facebook, and Dropbox."
                  }
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__skzov,
                    {
                      [sty.text__global_theme_dark__skzovUgT9R]: hasVariant(
                        globalVariants,
                        "theme",
                        "dark"
                      )
                    }
                  )}
                >
                  {
                    "We're hiring in engineering, design, and growth. If Plasmic's mission resonates with you, say hello!"
                  }
                </div>

                <div className={classNames(defaultcss.all, sty.freeBox__wOcuT)}>
                  <p.PlasmicLink
                    className={classNames(
                      defaultcss.a,
                      defaultcss.__wab_text,
                      sty.link__dwbiS
                    )}
                    component={Link}
                    href={"mailto:hiring+about@plasmic.app" as const}
                    platform={"nextjs"}
                  >
                    {"hiring@plasmic.app"}
                  </p.PlasmicLink>
                </div>
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox___2U9Dx)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__t1B1E,
                  {
                    [sty.text__global_theme_dark__t1B1EUgT9R]: hasVariant(
                      globalVariants,
                      "theme",
                      "dark"
                    )
                  }
                )}
              >
                {"Investors"}
              </div>

              <div className={classNames(defaultcss.all, sty.freeBox__eqre9)}>
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__uX5Fv,
                    {
                      [sty.text__global_theme_dark__uX5FvUgT9R]: hasVariant(
                        globalVariants,
                        "theme",
                        "dark"
                      )
                    }
                  )}
                >
                  {
                    "We are proudly backed by NEA, Tiny Capital, Designer Fund, Prime Set, #Angels, Arrive, and esteemed founders and investors."
                  }
                </div>
              </div>

              <div className={classNames(defaultcss.all, sty.freeBox__xeAnM)}>
                <p.PlasmicLink
                  className={classNames(defaultcss.a, sty.link___7K2Dv)}
                  component={Link}
                  href={"https://www.nea.com/" as const}
                  platform={"nextjs"}
                  target={"_blank" as const}
                >
                  <Icon37Icon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(defaultcss.all, sty.svg, {
                      [sty.svg__global_theme_dark]: hasVariant(
                        globalVariants,
                        "theme",
                        "dark"
                      )
                    })}
                    role={"img"}
                  />
                </p.PlasmicLink>
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox___1Rgw4)}
              >
                <p.PlasmicLink
                  className={classNames(defaultcss.a, sty.link__swaXi)}
                  component={Link}
                  href={"https://www.tinycapital.com/" as const}
                  platform={"nextjs"}
                  title={"Tiny Capital" as const}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__yvRM)}
                    displayHeight={"36px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"62px" as const}
                    src={{
                      src: "/plasmic/nextjs_ableaura_com/images/image63.png",
                      fullWidth: 1362,
                      fullHeight: 798,
                      aspectRatio: undefined
                    }}
                  />
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(defaultcss.a, sty.link__j7G48)}
                  component={Link}
                  href={"https://www.designerfund.com/" as const}
                  platform={"nextjs"}
                >
                  <p.PlasmicImg
                    alt={"Designer Fund" as const}
                    className={classNames(sty.img__zx1H2)}
                    displayHeight={"128px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"128px" as const}
                    src={{
                      src: "/plasmic/nextjs_ableaura_com/images/image65.png",
                      fullWidth: 400,
                      fullHeight: 400,
                      aspectRatio: undefined
                    }}
                  />
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(defaultcss.a, sty.link__cFeTe)}
                  component={Link}
                  href={"https://www.primeset.com/" as const}
                  platform={"nextjs"}
                >
                  <p.PlasmicImg
                    alt={"Prime Set" as const}
                    className={classNames(sty.img___9Mx4J)}
                    displayHeight={"128px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"128px" as const}
                    src={{
                      src: "/plasmic/nextjs_ableaura_com/images/image61.png",
                      fullWidth: 400,
                      fullHeight: 400,
                      aspectRatio: undefined
                    }}
                  />
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(defaultcss.a, sty.link__mOoqz)}
                  component={Link}
                  href={"https://hashtagangels.com/" as const}
                  platform={"nextjs"}
                >
                  <p.PlasmicImg
                    alt={"#Angels" as const}
                    className={classNames(sty.img__cjqe1)}
                    displayHeight={"128px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"128px" as const}
                    src={{
                      src: "/plasmic/nextjs_ableaura_com/images/image60.png",
                      fullWidth: 200,
                      fullHeight: 200,
                      aspectRatio: undefined
                    }}
                  />
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(defaultcss.a, sty.link__fdObp)}
                  component={Link}
                  href={"https://www.arrive.co/" as const}
                  platform={"nextjs"}
                >
                  <p.PlasmicImg
                    alt={"Arrive" as const}
                    className={classNames(sty.img__psjqF)}
                    displayHeight={"128px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"128px" as const}
                    src={{
                      src: "/plasmic/nextjs_ableaura_com/images/image62.png",
                      fullWidth: 170,
                      fullHeight: 170,
                      aspectRatio: undefined
                    }}
                  />
                </p.PlasmicLink>
              </p.Stack>

              {false ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__aULj9)}
                >
                  <div
                    className={classNames(defaultcss.all, sty.freeBox__moe7Y)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__eeMoX)}
                      displayHeight={"36px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"62px" as const}
                      src={{
                        src: "/plasmic/nextjs_ableaura_com/images/image63.png",
                        fullWidth: 1362,
                        fullHeight: 798,
                        aspectRatio: undefined
                      }}
                    />
                  </div>

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___1CkDf)}
                    displayHeight={"128px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"128px" as const}
                    src={{
                      src: "/plasmic/nextjs_ableaura_com/images/image66.png",
                      fullWidth: 800,
                      fullHeight: 800,
                      aspectRatio: undefined
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__yzDoh)}
                    displayHeight={"128px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"128px" as const}
                    src={{
                      src: "/plasmic/nextjs_ableaura_com/images/image67.png",
                      fullWidth: 800,
                      fullHeight: 800,
                      aspectRatio: undefined
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__xy1N)}
                    displayHeight={"128px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"128px" as const}
                    src={{
                      src: "/plasmic/nextjs_ableaura_com/images/image68.png",
                      fullWidth: 400,
                      fullHeight: 400,
                      aspectRatio: undefined
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__x5YoK)}
                    displayHeight={"128px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"128px" as const}
                    src={{
                      src: "/plasmic/nextjs_ableaura_com/images/image62.png",
                      fullWidth: 170,
                      fullHeight: 170,
                      aspectRatio: undefined
                    }}
                  />
                </p.Stack>
              ) : null}
            </p.Stack>
          </div>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer, {
              [sty.footer__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              )
            })}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "body", "svg", "footer"],
  header: ["header"],
  body: ["body", "svg"],
  svg: ["svg"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  body: "div";
  svg: "svg";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAbout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAbout__VariantsArgs;
    args?: PlasmicAbout__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicAbout__Fetches;
  } & Omit<PlasmicAbout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAbout__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAbout__ArgProps,
      internalVariantPropNames: PlasmicAbout__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicAbout__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAbout";
  } else {
    func.displayName = `PlasmicAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicAbout = Object.assign(
  // Top-level PlasmicAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    body: makeNodeComponent("body"),
    svg: makeNodeComponent("svg"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicAbout
    internalVariantProps: PlasmicAbout__VariantProps,
    internalArgProps: PlasmicAbout__ArgProps
  }
);

export default PlasmicAbout;
/* prettier-ignore-end */
