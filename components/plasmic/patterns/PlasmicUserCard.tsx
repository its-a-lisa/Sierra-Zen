// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ddwNfuV1d3sS7wxTc5aLdh
// Component: cP0P4GAiadOu

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

import { ModeValue, useMode } from "../global/PlasmicGlobalVariant__Mode"; // plasmic-import: 4o07efrW3bsm/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_global_css from "../global/plasmic_global.module.css"; // plasmic-import: 8hqEu73KETDHFVi1kzitzB/projectcss
import plasmic_semantic_css from "../semantic/plasmic_semantic.module.css"; // plasmic-import: b1udyYxbVnA5YsUcRMaXei/projectcss
import plasmic_components_css from "../components/plasmic_components.module.css"; // plasmic-import: 5ccFCnH7of5M9MPpSs86Uj/projectcss
import projectcss from "./plasmic_patterns.module.css"; // plasmic-import: ddwNfuV1d3sS7wxTc5aLdh/projectcss
import sty from "./PlasmicUserCard.module.css"; // plasmic-import: cP0P4GAiadOu/css

import LogoiconOnlyIcon from "./icons/PlasmicIcon__LogoiconOnly"; // plasmic-import: 6hDsAWpXvZ_f/icon
import IconBrandxIcon from "./icons/PlasmicIcon__IconBrandx"; // plasmic-import: qvsi7J7LnZv-/icon
import IconBrandgithubIcon from "./icons/PlasmicIcon__IconBrandgithub"; // plasmic-import: Fgwcr8HuXfIL/icon
import IconBranddribbleIcon from "./icons/PlasmicIcon__IconBranddribble"; // plasmic-import: XqhThotfmE0_/icon

createPlasmicElementProxy;

export type PlasmicUserCard__VariantMembers = {
  noTitle: "noTitle";
};
export type PlasmicUserCard__VariantsArgs = {
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
};
type VariantPropType = keyof PlasmicUserCard__VariantsArgs;
export const PlasmicUserCard__VariantProps = new Array<VariantPropType>(
  "noTitle"
);

export type PlasmicUserCard__ArgsType = {
  children?: React.ReactNode;
  name?: React.ReactNode;
  jobRole?: React.ReactNode;
};
type ArgPropType = keyof PlasmicUserCard__ArgsType;
export const PlasmicUserCard__ArgProps = new Array<ArgPropType>(
  "children",
  "name",
  "jobRole"
);

export type PlasmicUserCard__OverridesType = {
  root?: Flex__<"div">;
  image?: Flex__<"div">;
  body?: Flex__<"div">;
  content?: Flex__<"div">;
  header?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  description?: Flex__<"div">;
  footer?: Flex__<"div">;
  iconBrand?: Flex__<"div">;
  iconBrand2?: Flex__<"div">;
  iconBrand3?: Flex__<"div">;
  iconBrand4?: Flex__<"div">;
};

export interface DefaultUserCardProps {
  children?: React.ReactNode;
  name?: React.ReactNode;
  jobRole?: React.ReactNode;
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicUserCard__RenderFunc(props: {
  variants: PlasmicUserCard__VariantsArgs;
  args: PlasmicUserCard__ArgsType;
  overrides: PlasmicUserCard__OverridesType;
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
        path: "noTitle",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTitle
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
    mode: useMode()
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
          )
        }
      )}
    >
      <div
        data-plasmic-name={"image"}
        data-plasmic-override={overrides.image}
        className={classNames(projectcss.all, sty.image)}
      >
        <LogoiconOnlyIcon
          className={classNames(projectcss.all, sty.svg___7Keg7)}
          role={"img"}
        />
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"body"}
        data-plasmic-override={overrides.body}
        hasGap={true}
        className={classNames(projectcss.all, sty.body)}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"content"}
          data-plasmic-override={overrides.content}
          hasGap={true}
          className={classNames(projectcss.all, sty.content)}
        >
          <Stack__
            as={"div"}
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            hasGap={true}
            className={classNames(projectcss.all, sty.header, {
              [sty.headernoTitle]: hasVariant($state, "noTitle", "noTitle")
            })}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox, {
                [sty.freeBoxnoTitle]: hasVariant($state, "noTitle", "noTitle")
              })}
            >
              {renderPlasmicSlot({
                defaultContents: "Card title",
                value: args.name,
                className: classNames(sty.slotTargetName)
              })}
              {renderPlasmicSlot({
                defaultContents: "Card title",
                value: args.jobRole,
                className: classNames(sty.slotTargetJobRole)
              })}
            </Stack__>
          </Stack__>
          <div
            data-plasmic-name={"description"}
            data-plasmic-override={overrides.description}
            className={classNames(projectcss.all, sty.description, {
              [sty.descriptionnoTitle]: hasVariant($state, "noTitle", "noTitle")
            })}
          >
            {renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__brLad
                  )}
                >
                  {
                    "Kitten Ipsum dolor sit amet discovered siamesecalico peaceful her Gizmo peaceful boy rutrum caturday enim lived quis Mauris sit malesuada gf's saved fringilla enim turpis, at mi kitties ham. Venenatis belly cat et boy bat dang saved nulla other porta ipsum mi chilling cat spoon tellus."
                  }
                </div>
              ),
              value: args.children
            })}
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"footer"}
          data-plasmic-override={overrides.footer}
          hasGap={true}
          className={classNames(projectcss.all, sty.footer, {
            [sty.footernoTitle]: hasVariant($state, "noTitle", "noTitle")
          })}
        >
          <div
            data-plasmic-name={"iconBrand"}
            data-plasmic-override={overrides.iconBrand}
            className={classNames(projectcss.all, sty.iconBrand)}
          >
            <IconBrandxIcon
              className={classNames(projectcss.all, sty.svg__hHxqq)}
              role={"img"}
            />
          </div>
          <div
            data-plasmic-name={"iconBrand2"}
            data-plasmic-override={overrides.iconBrand2}
            className={classNames(projectcss.all, sty.iconBrand2)}
          >
            <IconBrandgithubIcon
              className={classNames(projectcss.all, sty.svg___7SbAn)}
              role={"img"}
            />
          </div>
          <div
            data-plasmic-name={"iconBrand3"}
            data-plasmic-override={overrides.iconBrand3}
            className={classNames(projectcss.all, sty.iconBrand3)}
          >
            <IconBrandgithubIcon
              className={classNames(projectcss.all, sty.svg__t8M5R)}
              role={"img"}
            />
          </div>
          <div
            data-plasmic-name={"iconBrand4"}
            data-plasmic-override={overrides.iconBrand4}
            className={classNames(projectcss.all, sty.iconBrand4)}
          >
            <IconBranddribbleIcon
              className={classNames(projectcss.all, sty.svg__ncOv8)}
              role={"img"}
            />
          </div>
        </Stack__>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "image",
    "body",
    "content",
    "header",
    "freeBox",
    "description",
    "footer",
    "iconBrand",
    "iconBrand2",
    "iconBrand3",
    "iconBrand4"
  ],
  image: ["image"],
  body: [
    "body",
    "content",
    "header",
    "freeBox",
    "description",
    "footer",
    "iconBrand",
    "iconBrand2",
    "iconBrand3",
    "iconBrand4"
  ],
  content: ["content", "header", "freeBox", "description"],
  header: ["header", "freeBox"],
  freeBox: ["freeBox"],
  description: ["description"],
  footer: ["footer", "iconBrand", "iconBrand2", "iconBrand3", "iconBrand4"],
  iconBrand: ["iconBrand"],
  iconBrand2: ["iconBrand2"],
  iconBrand3: ["iconBrand3"],
  iconBrand4: ["iconBrand4"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  image: "div";
  body: "div";
  content: "div";
  header: "div";
  freeBox: "div";
  description: "div";
  footer: "div";
  iconBrand: "div";
  iconBrand2: "div";
  iconBrand3: "div";
  iconBrand4: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUserCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUserCard__VariantsArgs;
    args?: PlasmicUserCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUserCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicUserCard__ArgsType,
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
          internalArgPropNames: PlasmicUserCard__ArgProps,
          internalVariantPropNames: PlasmicUserCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUserCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUserCard";
  } else {
    func.displayName = `PlasmicUserCard.${nodeName}`;
  }
  return func;
}

export const PlasmicUserCard = Object.assign(
  // Top-level PlasmicUserCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    image: makeNodeComponent("image"),
    body: makeNodeComponent("body"),
    content: makeNodeComponent("content"),
    header: makeNodeComponent("header"),
    freeBox: makeNodeComponent("freeBox"),
    description: makeNodeComponent("description"),
    footer: makeNodeComponent("footer"),
    iconBrand: makeNodeComponent("iconBrand"),
    iconBrand2: makeNodeComponent("iconBrand2"),
    iconBrand3: makeNodeComponent("iconBrand3"),
    iconBrand4: makeNodeComponent("iconBrand4"),

    // Metadata about props expected for PlasmicUserCard
    internalVariantProps: PlasmicUserCard__VariantProps,
    internalArgProps: PlasmicUserCard__ArgProps
  }
);

export default PlasmicUserCard;
/* prettier-ignore-end */
