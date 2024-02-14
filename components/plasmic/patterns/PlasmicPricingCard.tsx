// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ddwNfuV1d3sS7wxTc5aLdh
// Component: 7lr5qwctNVnD

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import List from "../../List"; // plasmic-import: _iYdZIivYdSy/component
import ListItem from "../../ListItem"; // plasmic-import: 1QrNyfW0H0c7/component
import Button from "../../Button"; // plasmic-import: 7RW-0EHs1VqU/component

import {
  ThemesValue,
  useThemes
} from "../semantic/PlasmicGlobalVariant__Themes"; // plasmic-import: 0bVElF6gUuDv/globalVariant
import { ModeValue, useMode } from "../global/PlasmicGlobalVariant__Mode"; // plasmic-import: 4o07efrW3bsm/globalVariant
import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: gje4CDHUuqhO/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_global_css from "../global/plasmic_global.module.css"; // plasmic-import: 8hqEu73KETDHFVi1kzitzB/projectcss
import plasmic_semantic_css from "../semantic/plasmic_semantic.module.css"; // plasmic-import: b1udyYxbVnA5YsUcRMaXei/projectcss
import plasmic_components_css from "../components/plasmic_components.module.css"; // plasmic-import: 5ccFCnH7of5M9MPpSs86Uj/projectcss
import projectcss from "./plasmic_patterns.module.css"; // plasmic-import: ddwNfuV1d3sS7wxTc5aLdh/projectcss
import sty from "./PlasmicPricingCard.module.css"; // plasmic-import: 7lr5qwctNVnD/css

import LogoiconOnlyIcon from "./icons/PlasmicIcon__LogoiconOnly"; // plasmic-import: 6hDsAWpXvZ_f/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 9ba9sRgy1uTP/icon
import ChecksvgIcon2 from "../components/icons/PlasmicIcon__Checksvg"; // plasmic-import: Gl9W2RPSIc13/icon
import IconrightArrowIcon from "../components/icons/PlasmicIcon__IconrightArrow"; // plasmic-import: WAD5gXhAHTho/icon

createPlasmicElementProxy;

export type PlasmicPricingCard__VariantMembers = {
  muted: "muted";
};
export type PlasmicPricingCard__VariantsArgs = {
  muted?: SingleBooleanChoiceArg<"muted">;
};
type VariantPropType = keyof PlasmicPricingCard__VariantsArgs;
export const PlasmicPricingCard__VariantProps = new Array<VariantPropType>(
  "muted"
);

export type PlasmicPricingCard__ArgsType = {
  pricing?: React.ReactNode;
  description?: React.ReactNode;
  pricing2?: React.ReactNode;
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPricingCard__ArgsType;
export const PlasmicPricingCard__ArgProps = new Array<ArgPropType>(
  "pricing",
  "description",
  "pricing2",
  "children"
);

export type PlasmicPricingCard__OverridesType = {
  root?: Flex__<"div">;
  body?: Flex__<"div">;
  content?: Flex__<"div">;
  priceConent?: Flex__<"div">;
  price?: Flex__<"div">;
  priceDescription?: Flex__<"div">;
  priceList?: Flex__<"div">;
  list?: Flex__<typeof List>;
  listItem?: Flex__<typeof ListItem>;
  listItem2?: Flex__<typeof ListItem>;
  listItem3?: Flex__<typeof ListItem>;
  listItem4?: Flex__<typeof ListItem>;
  listItem5?: Flex__<typeof ListItem>;
  footer?: Flex__<"div">;
  button?: Flex__<typeof Button>;
};

export interface DefaultPricingCardProps {
  pricing?: React.ReactNode;
  description?: React.ReactNode;
  pricing2?: React.ReactNode;
  children?: React.ReactNode;
  muted?: SingleBooleanChoiceArg<"muted">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPricingCard__RenderFunc(props: {
  variants: PlasmicPricingCard__VariantsArgs;
  args: PlasmicPricingCard__ArgsType;
  overrides: PlasmicPricingCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "muted",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.muted
      },
      {
        path: "listItem.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "listItem2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "listItem3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "listItem4.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "listItem5.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    themes: useThemes(),
    mode: useMode(),
    theme: useTheme()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_global_css.plasmic_tokens,
        plasmic_semantic_css.plasmic_tokens,
        plasmic_components_css.plasmic_tokens,
        sty.root,
        {
          [plasmic_global_css.global_mode_dark]: hasVariant(
            globalVariants,
            "mode",
            "dark"
          ),
          [plasmic_semantic_css.global_themes_light]: hasVariant(
            globalVariants,
            "themes",
            "light"
          ),
          [projectcss.global_theme_ss]: hasVariant(
            globalVariants,
            "theme",
            "ss"
          ),
          [sty.rootmuted]: hasVariant($state, "muted", "muted")
        }
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"body"}
        data-plasmic-override={overrides.body}
        hasGap={true}
        className={classNames(projectcss.all, sty.body, {
          [sty.bodymuted]: hasVariant($state, "muted", "muted")
        })}
      >
        <LogoiconOnlyIcon
          className={classNames(projectcss.all, sty.svg__oCpMv, {
            [sty.svgmuted__oCpMvtCs8J]: hasVariant($state, "muted", "muted")
          })}
          role={"img"}
        />

        <Stack__
          as={"div"}
          data-plasmic-name={"content"}
          data-plasmic-override={overrides.content}
          hasGap={true}
          className={classNames(projectcss.all, sty.content)}
        >
          <Stack__
            as={"div"}
            data-plasmic-name={"priceConent"}
            data-plasmic-override={overrides.priceConent}
            hasGap={true}
            className={classNames(projectcss.all, sty.priceConent, {
              [sty.priceConentmuted]: hasVariant($state, "muted", "muted")
            })}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"price"}
              data-plasmic-override={overrides.price}
              hasGap={true}
              className={classNames(projectcss.all, sty.price, {
                [sty.pricemuted]: hasVariant($state, "muted", "muted")
              })}
            >
              {renderPlasmicSlot({
                defaultContents: "$99",
                value: args.pricing,
                className: classNames(sty.slotTargetPricing)
              })}
              {renderPlasmicSlot({
                defaultContents: "/mo",
                value: args.pricing2,
                className: classNames(sty.slotTargetPricing2)
              })}
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"priceDescription"}
              data-plasmic-override={overrides.priceDescription}
              hasGap={true}
              className={classNames(projectcss.all, sty.priceDescription, {
                [sty.priceDescriptionmuted]: hasVariant(
                  $state,
                  "muted",
                  "muted"
                )
              })}
            >
              {renderPlasmicSlot({
                defaultContents:
                  "Mr. Kitty id chase the red dot Aliquam classy pellentesque urna ambush",
                value: args.description,
                className: classNames(sty.slotTargetDescription, {
                  [sty.slotTargetDescriptionmuted]: hasVariant(
                    $state,
                    "muted",
                    "muted"
                  )
                })
              })}
            </Stack__>
          </Stack__>
          <div
            data-plasmic-name={"priceList"}
            data-plasmic-override={overrides.priceList}
            className={classNames(projectcss.all, sty.priceList, {
              [sty.priceListmuted]: hasVariant($state, "muted", "muted")
            })}
          >
            <List
              data-plasmic-name={"list"}
              data-plasmic-override={overrides.list}
              className={classNames("__wab_instance", sty.list, {
                [sty.listmuted]: hasVariant($state, "muted", "muted")
              })}
              listItem10={
                <ListItem
                  data-plasmic-name={"listItem5"}
                  data-plasmic-override={overrides.listItem5}
                  className={classNames("__wab_instance", sty.listItem5)}
                  onChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, ["listItem5", "value"])(
                      (e => e.target?.value).apply(null, eventArgs)
                    );
                  }}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__e0L7D)}
                      role={"img"}
                    />
                  }
                  value={
                    generateStateValueProp($state, ["listItem5", "value"]) ?? ""
                  }
                />
              }
              listItem6={
                <ListItem
                  data-plasmic-name={"listItem"}
                  data-plasmic-override={overrides.listItem}
                  className={classNames("__wab_instance", sty.listItem, {
                    [sty.listItemmuted]: hasVariant($state, "muted", "muted")
                  })}
                  onChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, ["listItem", "value"])(
                      (e => e.target?.value).apply(null, eventArgs)
                    );
                  }}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg___9Oh7Y)}
                      role={"img"}
                    />
                  }
                  value={
                    generateStateValueProp($state, ["listItem", "value"]) ?? ""
                  }
                />
              }
              listItem7={
                <ListItem
                  data-plasmic-name={"listItem2"}
                  data-plasmic-override={overrides.listItem2}
                  className={classNames("__wab_instance", sty.listItem2)}
                  onChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, ["listItem2", "value"])(
                      (e => e.target?.value).apply(null, eventArgs)
                    );
                  }}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__eq6W)}
                      role={"img"}
                    />
                  }
                  value={
                    generateStateValueProp($state, ["listItem2", "value"]) ?? ""
                  }
                />
              }
              listItem8={
                <ListItem
                  data-plasmic-name={"listItem3"}
                  data-plasmic-override={overrides.listItem3}
                  className={classNames("__wab_instance", sty.listItem3)}
                  onChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, ["listItem3", "value"])(
                      (e => e.target?.value).apply(null, eventArgs)
                    );
                  }}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__jhgoD)}
                      role={"img"}
                    />
                  }
                  value={
                    generateStateValueProp($state, ["listItem3", "value"]) ?? ""
                  }
                />
              }
              listItem9={
                <ListItem
                  data-plasmic-name={"listItem4"}
                  data-plasmic-override={overrides.listItem4}
                  className={classNames("__wab_instance", sty.listItem4)}
                  onChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, ["listItem4", "value"])(
                      (e => e.target?.value).apply(null, eventArgs)
                    );
                  }}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__bWa8)}
                      role={"img"}
                    />
                  }
                  value={
                    generateStateValueProp($state, ["listItem4", "value"]) ?? ""
                  }
                />
              }
              multiItems={"_5"}
            />
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"footer"}
          data-plasmic-override={overrides.footer}
          hasGap={true}
          className={classNames(projectcss.all, sty.footer, {
            [sty.footermuted]: hasVariant($state, "muted", "muted")
          })}
        >
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button, {
              [sty.buttonmuted]: hasVariant($state, "muted", "muted")
            })}
            outline={
              hasVariant($state, "muted", "muted") ? "original" : undefined
            }
          />

          <div
            className={classNames(projectcss.all, sty.freeBox__jjKbe, {
              [sty.freeBoxmuted__jjKbetCs8J]: hasVariant(
                $state,
                "muted",
                "muted"
              )
            })}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox__hDSrf, {
                [sty.freeBoxmuted__hDSrftCs8J]: hasVariant(
                  $state,
                  "muted",
                  "muted"
                )
              })}
            >
              {renderPlasmicSlot({
                defaultContents: "Enter some text",
                value: args.children,
                className: classNames(sty.slotTargetChildren, {
                  [sty.slotTargetChildrenmuted]: hasVariant(
                    $state,
                    "muted",
                    "muted"
                  )
                })
              })}
            </div>
          </div>
        </Stack__>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "body",
    "content",
    "priceConent",
    "price",
    "priceDescription",
    "priceList",
    "list",
    "listItem",
    "listItem2",
    "listItem3",
    "listItem4",
    "listItem5",
    "footer",
    "button"
  ],
  body: [
    "body",
    "content",
    "priceConent",
    "price",
    "priceDescription",
    "priceList",
    "list",
    "listItem",
    "listItem2",
    "listItem3",
    "listItem4",
    "listItem5",
    "footer",
    "button"
  ],
  content: [
    "content",
    "priceConent",
    "price",
    "priceDescription",
    "priceList",
    "list",
    "listItem",
    "listItem2",
    "listItem3",
    "listItem4",
    "listItem5"
  ],
  priceConent: ["priceConent", "price", "priceDescription"],
  price: ["price"],
  priceDescription: ["priceDescription"],
  priceList: [
    "priceList",
    "list",
    "listItem",
    "listItem2",
    "listItem3",
    "listItem4",
    "listItem5"
  ],
  list: [
    "list",
    "listItem",
    "listItem2",
    "listItem3",
    "listItem4",
    "listItem5"
  ],
  listItem: ["listItem"],
  listItem2: ["listItem2"],
  listItem3: ["listItem3"],
  listItem4: ["listItem4"],
  listItem5: ["listItem5"],
  footer: ["footer", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  body: "div";
  content: "div";
  priceConent: "div";
  price: "div";
  priceDescription: "div";
  priceList: "div";
  list: typeof List;
  listItem: typeof ListItem;
  listItem2: typeof ListItem;
  listItem3: typeof ListItem;
  listItem4: typeof ListItem;
  listItem5: typeof ListItem;
  footer: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPricingCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPricingCard__VariantsArgs;
    args?: PlasmicPricingCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPricingCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPricingCard__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPricingCard__ArgProps,
          internalVariantPropNames: PlasmicPricingCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPricingCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPricingCard";
  } else {
    func.displayName = `PlasmicPricingCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPricingCard = Object.assign(
  // Top-level PlasmicPricingCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    body: makeNodeComponent("body"),
    content: makeNodeComponent("content"),
    priceConent: makeNodeComponent("priceConent"),
    price: makeNodeComponent("price"),
    priceDescription: makeNodeComponent("priceDescription"),
    priceList: makeNodeComponent("priceList"),
    list: makeNodeComponent("list"),
    listItem: makeNodeComponent("listItem"),
    listItem2: makeNodeComponent("listItem2"),
    listItem3: makeNodeComponent("listItem3"),
    listItem4: makeNodeComponent("listItem4"),
    listItem5: makeNodeComponent("listItem5"),
    footer: makeNodeComponent("footer"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicPricingCard
    internalVariantProps: PlasmicPricingCard__VariantProps,
    internalArgProps: PlasmicPricingCard__ArgProps
  }
);

export default PlasmicPricingCard;
/* prettier-ignore-end */
