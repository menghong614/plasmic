// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: MeRxD_0BtJ

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
import LeftSearchPanel from "../../components/studio/LeftSearchPanel"; // plasmic-import: TqAPn0srTq/component
import LeftPaneHeader from "../../components/studio/LeftPaneHeader"; // plasmic-import: XLa52PvduIy/component
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component
import TextWithInfo from "../../../../TextWithInfo"; // plasmic-import: -EsDm7v023/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import sty from "./PlasmicLeftImportsPanel.module.css"; // plasmic-import: MeRxD_0BtJ/css

import PlusIcon from "./PlasmicIcon__Plus"; // plasmic-import: -k064DlQ8k8-L/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import ResetIcon from "./PlasmicIcon__Reset"; // plasmic-import: Dj3u-HuPv94sN/icon
import FetchIcon from "./PlasmicIcon__Fetch"; // plasmic-import: TBhqPtLhSazsc/icon

createPlasmicElementProxy;

export type PlasmicLeftImportsPanel__VariantMembers = {
  state: "refreshing";
  withUpdateAll: "withUpdateAll";
};
export type PlasmicLeftImportsPanel__VariantsArgs = {
  state?: SingleChoiceArg<"refreshing">;
  withUpdateAll?: SingleBooleanChoiceArg<"withUpdateAll">;
};
type VariantPropType = keyof PlasmicLeftImportsPanel__VariantsArgs;
export const PlasmicLeftImportsPanel__VariantProps = new Array<VariantPropType>(
  "state",
  "withUpdateAll"
);

export type PlasmicLeftImportsPanel__ArgsType = {};
type ArgPropType = keyof PlasmicLeftImportsPanel__ArgsType;
export const PlasmicLeftImportsPanel__ArgProps = new Array<ArgPropType>();

export type PlasmicLeftImportsPanel__OverridesType = {
  root?: p.Flex<"div">;
  leftSearchPanel?: p.Flex<typeof LeftSearchPanel>;
  importsHeader?: p.Flex<typeof LeftPaneHeader>;
  freeBox?: p.Flex<"div">;
  importButton?: p.Flex<typeof Button>;
  refreshButton?: p.Flex<typeof Button>;
  updateButton?: p.Flex<typeof Button>;
  content?: p.Flex<"div">;
};

export interface DefaultLeftImportsPanelProps {
  state?: SingleChoiceArg<"refreshing">;
  withUpdateAll?: SingleBooleanChoiceArg<"withUpdateAll">;
  className?: string;
}

const $$ = {};

function PlasmicLeftImportsPanel__RenderFunc(props: {
  variants: PlasmicLeftImportsPanel__VariantsArgs;
  args: PlasmicLeftImportsPanel__ArgsType;
  overrides: PlasmicLeftImportsPanel__OverridesType;
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
        path: "state",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.state,
      },
      {
        path: "withUpdateAll",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.withUpdateAll,
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
        {
          [sty.rootstate_refreshing]: hasVariant($state, "state", "refreshing"),
        }
      )}
    >
      <LeftSearchPanel
        data-plasmic-name={"leftSearchPanel"}
        data-plasmic-override={overrides.leftSearchPanel}
        className={classNames("__wab_instance", sty.leftSearchPanel, {
          [sty.leftSearchPanelstate_refreshing]: hasVariant(
            $state,
            "state",
            "refreshing"
          ),
        })}
      />

      <LeftPaneHeader
        data-plasmic-name={"importsHeader"}
        data-plasmic-override={overrides.importsHeader}
        actions={
          <p.Stack
            as={"div"}
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox, {
              [sty.freeBoxwithUpdateAll]: hasVariant(
                $state,
                "withUpdateAll",
                "withUpdateAll"
              ),
            })}
          >
            <Button
              data-plasmic-name={"importButton"}
              data-plasmic-override={overrides.importButton}
              endIcon={
                <ChevronDownsvgIcon
                  className={classNames(projectcss.all, sty.svg__loisF)}
                  role={"img"}
                />
              }
              size={"wide"}
              startIcon={
                <PlusIcon
                  className={classNames(projectcss.all, sty.svg__iQt2K)}
                  role={"img"}
                />
              }
              type={["secondary"]}
              withIcons={["startIcon"]}
            >
              {"Import"}
            </Button>
            <Button
              data-plasmic-name={"refreshButton"}
              data-plasmic-override={overrides.refreshButton}
              disabled={
                hasVariant($state, "state", "refreshing") ? true : undefined
              }
              endIcon={
                <ChevronDownsvgIcon
                  className={classNames(projectcss.all, sty.svg__ehFcE)}
                  role={"img"}
                />
              }
              size={"wide"}
              startIcon={
                <ResetIcon
                  className={classNames(projectcss.all, sty.svg___8RJy, {
                    [sty.svgstate_refreshing___8RJYgHBcw]: hasVariant(
                      $state,
                      "state",
                      "refreshing"
                    ),
                  })}
                  role={"img"}
                />
              }
              type={["clear"]}
              withIcons={["startIcon"]}
            >
              {hasVariant($state, "state", "refreshing")
                ? "Checking\u2026"
                : "Check for updates"}
            </Button>
            {(
              hasVariant($state, "withUpdateAll", "withUpdateAll")
                ? true
                : false
            ) ? (
              <Button
                data-plasmic-name={"updateButton"}
                data-plasmic-override={overrides.updateButton}
                className={classNames("__wab_instance", {
                  [sty.updateButtonwithUpdateAll]: hasVariant(
                    $state,
                    "withUpdateAll",
                    "withUpdateAll"
                  ),
                })}
                disabled={
                  hasVariant($state, "state", "refreshing") ? true : undefined
                }
                endIcon={
                  <ChevronDownsvgIcon
                    className={classNames(projectcss.all, sty.svg__jX552)}
                    role={"img"}
                  />
                }
                size={"wide"}
                startIcon={
                  <FetchIcon
                    className={classNames(projectcss.all, sty.svg__elSwl, {
                      [sty.svgstate_refreshing__elSwlgHBcw]: hasVariant(
                        $state,
                        "state",
                        "refreshing"
                      ),
                    })}
                    role={"img"}
                  />
                }
                type={["clear"]}
                withIcons={["startIcon"]}
              >
                {hasVariant($state, "state", "refreshing")
                  ? "Checking\u2026"
                  : "Update all"}
              </Button>
            ) : null}
          </p.Stack>
        }
        className={classNames("__wab_instance", sty.importsHeader, {
          [sty.importsHeaderstate_refreshing]: hasVariant(
            $state,
            "state",
            "refreshing"
          ),
          [sty.importsHeaderwithUpdateAll]: hasVariant(
            $state,
            "withUpdateAll",
            "withUpdateAll"
          ),
        })}
        description={
          "You can import other published projects to use assets\u2014components, images/icons, style tokens, and style presets\u2014from those projects."
        }
        title={"Imported projects"}
      />

      <div
        data-plasmic-name={"content"}
        data-plasmic-override={overrides.content}
        className={classNames(projectcss.all, sty.content, {
          [sty.contentstate_refreshing]: hasVariant(
            $state,
            "state",
            "refreshing"
          ),
        })}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "leftSearchPanel",
    "importsHeader",
    "freeBox",
    "importButton",
    "refreshButton",
    "updateButton",
    "content",
  ],
  leftSearchPanel: ["leftSearchPanel"],
  importsHeader: [
    "importsHeader",
    "freeBox",
    "importButton",
    "refreshButton",
    "updateButton",
  ],
  freeBox: ["freeBox", "importButton", "refreshButton", "updateButton"],
  importButton: ["importButton"],
  refreshButton: ["refreshButton"],
  updateButton: ["updateButton"],
  content: ["content"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  leftSearchPanel: typeof LeftSearchPanel;
  importsHeader: typeof LeftPaneHeader;
  freeBox: "div";
  importButton: typeof Button;
  refreshButton: typeof Button;
  updateButton: typeof Button;
  content: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLeftImportsPanel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLeftImportsPanel__VariantsArgs;
    args?: PlasmicLeftImportsPanel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLeftImportsPanel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLeftImportsPanel__ArgsType,
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
          internalArgPropNames: PlasmicLeftImportsPanel__ArgProps,
          internalVariantPropNames: PlasmicLeftImportsPanel__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicLeftImportsPanel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLeftImportsPanel";
  } else {
    func.displayName = `PlasmicLeftImportsPanel.${nodeName}`;
  }
  return func;
}

export const PlasmicLeftImportsPanel = Object.assign(
  // Top-level PlasmicLeftImportsPanel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    leftSearchPanel: makeNodeComponent("leftSearchPanel"),
    importsHeader: makeNodeComponent("importsHeader"),
    freeBox: makeNodeComponent("freeBox"),
    importButton: makeNodeComponent("importButton"),
    refreshButton: makeNodeComponent("refreshButton"),
    updateButton: makeNodeComponent("updateButton"),
    content: makeNodeComponent("content"),

    // Metadata about props expected for PlasmicLeftImportsPanel
    internalVariantProps: PlasmicLeftImportsPanel__VariantProps,
    internalArgProps: PlasmicLeftImportsPanel__ArgProps,
  }
);

export default PlasmicLeftImportsPanel;
/* prettier-ignore-end */
