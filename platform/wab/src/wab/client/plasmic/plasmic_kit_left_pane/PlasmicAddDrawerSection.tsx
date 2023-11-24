// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: U-NTSLheNu

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import AddDrawerItem from "../../components/studio/add-drawer/AddDrawerItem"; // plasmic-import: isQPD0RPCw/component
import IconButton from "../../components/widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import sty from "./PlasmicAddDrawerSection.module.css"; // plasmic-import: U-NTSLheNu/css

import ComponentsvgIcon from "../plasmic_kit_q_4_icons/icons/PlasmicIcon__Componentsvg"; // plasmic-import: vJVrKlrDD/icon
import BeforeIcon from "../plasmic_kit/PlasmicIcon__Before"; // plasmic-import: VU26fT14NQttw/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import AfterIcon from "../plasmic_kit/PlasmicIcon__After"; // plasmic-import: yzAFS1IyVvChx/icon
import image49X6ZsC5Ww5 from "../plasmic_kit_design_system/images/image4.svg"; // plasmic-import: 9X6ZsC5ww5/picture

createPlasmicElementProxy;

export type PlasmicAddDrawerSection__VariantMembers = {
  isLast: "isLast";
};
export type PlasmicAddDrawerSection__VariantsArgs = {
  isLast?: SingleBooleanChoiceArg<"isLast">;
};
type VariantPropType = keyof PlasmicAddDrawerSection__VariantsArgs;
export const PlasmicAddDrawerSection__VariantProps = new Array<VariantPropType>(
  "isLast"
);

export type PlasmicAddDrawerSection__ArgsType = {
  title?: React.ReactNode;
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicAddDrawerSection__ArgsType;
export const PlasmicAddDrawerSection__ArgProps = new Array<ArgPropType>(
  "title",
  "children"
);

export type PlasmicAddDrawerSection__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  sectionBody?: p.Flex<"div">;
};

export interface DefaultAddDrawerSectionProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  isLast?: SingleBooleanChoiceArg<"isLast">;
  className?: string;
}

const $$ = {};

function PlasmicAddDrawerSection__RenderFunc(props: {
  variants: PlasmicAddDrawerSection__VariantsArgs;
  args: PlasmicAddDrawerSection__ArgsType;
  overrides: PlasmicAddDrawerSection__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "isLast",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isLast,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_new_design_system_former_style_controls_css.plasmic_tokens,
        sty.root,
        { [sty.rootisLast]: hasVariant($state, "isLast", "isLast") }
      )}
    >
      <div
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        className={classNames(projectcss.all, sty.header, {
          [sty.headerisLast]: hasVariant($state, "isLast", "isLast"),
        })}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Project Components",
            value: args.title,
            className: classNames(sty.slotTargetTitle),
          })}
        </div>
      </div>
      <div
        data-plasmic-name={"sectionBody"}
        data-plasmic-override={overrides.sectionBody}
        className={classNames(projectcss.all, sty.sectionBody, {
          [sty.sectionBodyisLast]: hasVariant($state, "isLast", "isLast"),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <AddDrawerItem
              actions={
                <React.Fragment>
                  <IconButton
                    children2={
                      <ChevronDownsvgIcon
                        className={classNames(projectcss.all, sty.svg__yQySn)}
                        role={"img"}
                      />
                    }
                  >
                    <BeforeIcon
                      className={classNames(projectcss.all, sty.svg__kEypf)}
                      role={"img"}
                    />
                  </IconButton>
                  <IconButton
                    children2={
                      <ChevronDownsvgIcon
                        className={classNames(projectcss.all, sty.svg__dkbzg)}
                        role={"img"}
                      />
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.iconButton___8Kc5N
                    )}
                  >
                    <AfterIcon
                      className={classNames(projectcss.all, sty.svg__mzqOb)}
                      role={"img"}
                    />
                  </IconButton>
                </React.Fragment>
              }
              className={classNames("__wab_instance", sty.addDrawerItem__nKluR)}
              icon={
                <ComponentsvgIcon
                  className={classNames(projectcss.all, sty.svg__nHj8T)}
                  role={"img"}
                />
              }
              previewImage={
                <img
                  alt={""}
                  className={classNames(
                    projectcss.all,
                    projectcss.img,
                    sty.img__v3T1K
                  )}
                  src={image49X6ZsC5Ww5}
                />
              }
            >
              {"Component 1"}
            </AddDrawerItem>
          ),
          value: args.children,
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "freeBox", "sectionBody"],
  header: ["header", "freeBox"],
  freeBox: ["freeBox"],
  sectionBody: ["sectionBody"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "div";
  freeBox: "div";
  sectionBody: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAddDrawerSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAddDrawerSection__VariantsArgs;
    args?: PlasmicAddDrawerSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAddDrawerSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAddDrawerSection__ArgsType,
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
          internalArgPropNames: PlasmicAddDrawerSection__ArgProps,
          internalVariantPropNames: PlasmicAddDrawerSection__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicAddDrawerSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAddDrawerSection";
  } else {
    func.displayName = `PlasmicAddDrawerSection.${nodeName}`;
  }
  return func;
}

export const PlasmicAddDrawerSection = Object.assign(
  // Top-level PlasmicAddDrawerSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    freeBox: makeNodeComponent("freeBox"),
    sectionBody: makeNodeComponent("sectionBody"),

    // Metadata about props expected for PlasmicAddDrawerSection
    internalVariantProps: PlasmicAddDrawerSection__VariantProps,
    internalArgProps: PlasmicAddDrawerSection__ArgProps,
  }
);

export default PlasmicAddDrawerSection;
/* prettier-ignore-end */
