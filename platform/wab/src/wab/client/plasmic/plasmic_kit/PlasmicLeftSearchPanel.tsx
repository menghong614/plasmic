// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: TqAPn0srTq

import * as React from "react";

import {
  Flex as Flex__,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component
import FilterButton from "../../components/widgets/FilterButton"; // plasmic-import: 93uVZfRMCA/component
import Searchbox from "../../components/widgets/Searchbox"; // plasmic-import: po7gr0PX4_gWo/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicLeftSearchPanel.module.css"; // plasmic-import: TqAPn0srTq/css

import CollapseAllIcon from "../plasmic_kit_design_system/PlasmicIcon__CollapseAll"; // plasmic-import: Bg-ZlWgLuQ/icon
import ExpandAllIcon from "../plasmic_kit_design_system/PlasmicIcon__ExpandAll"; // plasmic-import: zCExKvD0Do/icon

createPlasmicElementProxy;

export type PlasmicLeftSearchPanel__VariantMembers = {
  rightOptions: "filterControls" | "groupingControls";
};
export type PlasmicLeftSearchPanel__VariantsArgs = {
  rightOptions?: SingleChoiceArg<"filterControls" | "groupingControls">;
};
type VariantPropType = keyof PlasmicLeftSearchPanel__VariantsArgs;
export const PlasmicLeftSearchPanel__VariantProps = new Array<VariantPropType>(
  "rightOptions"
);

export type PlasmicLeftSearchPanel__ArgsType = {};
type ArgPropType = keyof PlasmicLeftSearchPanel__ArgsType;
export const PlasmicLeftSearchPanel__ArgProps = new Array<ArgPropType>();

export type PlasmicLeftSearchPanel__OverridesType = {
  searchPanel?: Flex__<"div">;
  searchbox?: Flex__<typeof Searchbox>;
  freeBox?: Flex__<"div">;
  expandButton?: Flex__<typeof Button>;
  collapseButton?: Flex__<typeof Button>;
  filterButton?: Flex__<typeof FilterButton>;
};

export interface DefaultLeftSearchPanelProps {
  rightOptions?: SingleChoiceArg<"filterControls" | "groupingControls">;
  className?: string;
}

const $$ = {};

function PlasmicLeftSearchPanel__RenderFunc(props: {
  variants: PlasmicLeftSearchPanel__VariantsArgs;
  args: PlasmicLeftSearchPanel__ArgsType;
  overrides: PlasmicLeftSearchPanel__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "rightOptions",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.rightOptions,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"searchPanel"}
      data-plasmic-override={overrides.searchPanel}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_new_design_system_former_style_controls_css.plasmic_tokens,
        sty.searchPanel,
        {
          [sty.searchPanelrightOptions_filterControls]: hasVariant(
            $state,
            "rightOptions",
            "filterControls"
          ),
          [sty.searchPanelrightOptions_groupingControls]: hasVariant(
            $state,
            "rightOptions",
            "groupingControls"
          ),
        }
      )}
    >
      <Searchbox
        data-plasmic-name={"searchbox"}
        data-plasmic-override={overrides.searchbox}
        className={classNames("__wab_instance", sty.searchbox, {
          [sty.searchboxrightOptions_filterControls]: hasVariant(
            $state,
            "rightOptions",
            "filterControls"
          ),
          [sty.searchboxrightOptions_groupingControls]: hasVariant(
            $state,
            "rightOptions",
            "groupingControls"
          ),
        })}
      />

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <Button
          data-plasmic-name={"expandButton"}
          data-plasmic-override={overrides.expandButton}
          className={classNames("__wab_instance", sty.expandButton, {
            [sty.expandButtonrightOptions_groupingControls]: hasVariant(
              $state,
              "rightOptions",
              "groupingControls"
            ),
          })}
          font={"dim"}
          size={"compact"}
          type={["clear"]}
        >
          <ExpandAllIcon
            className={classNames(projectcss.all, sty.svg__uzldM, {
              [sty.svgrightOptions_groupingControls__uzldMwWi]: hasVariant(
                $state,
                "rightOptions",
                "groupingControls"
              ),
            })}
            role={"img"}
          />
        </Button>
        {(
          hasVariant($state, "rightOptions", "groupingControls") ? true : false
        ) ? (
          <Button
            data-plasmic-name={"collapseButton"}
            data-plasmic-override={overrides.collapseButton}
            className={classNames("__wab_instance", sty.collapseButton, {
              [sty.collapseButtonrightOptions_groupingControls]: hasVariant(
                $state,
                "rightOptions",
                "groupingControls"
              ),
            })}
            font={"dim"}
            size={"compact"}
            type={["clear"]}
          >
            <CollapseAllIcon
              className={classNames(projectcss.all, sty.svg___65HqT, {
                [sty.svgrightOptions_groupingControls___65HqTwWi]: hasVariant(
                  $state,
                  "rightOptions",
                  "groupingControls"
                ),
              })}
              role={"img"}
            />
          </Button>
        ) : null}
        {(
          hasVariant($state, "rightOptions", "filterControls") ? true : false
        ) ? (
          <FilterButton
            data-plasmic-name={"filterButton"}
            data-plasmic-override={overrides.filterButton}
            className={classNames("__wab_instance", sty.filterButton, {
              [sty.filterButtonrightOptions_filterControls]: hasVariant(
                $state,
                "rightOptions",
                "filterControls"
              ),
            })}
          />
        ) : null}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  searchPanel: [
    "searchPanel",
    "searchbox",
    "freeBox",
    "expandButton",
    "collapseButton",
    "filterButton",
  ],
  searchbox: ["searchbox"],
  freeBox: ["freeBox", "expandButton", "collapseButton", "filterButton"],
  expandButton: ["expandButton"],
  collapseButton: ["collapseButton"],
  filterButton: ["filterButton"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  searchPanel: "div";
  searchbox: typeof Searchbox;
  freeBox: "div";
  expandButton: typeof Button;
  collapseButton: typeof Button;
  filterButton: typeof FilterButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLeftSearchPanel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLeftSearchPanel__VariantsArgs;
    args?: PlasmicLeftSearchPanel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLeftSearchPanel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLeftSearchPanel__ArgsType,
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
          internalArgPropNames: PlasmicLeftSearchPanel__ArgProps,
          internalVariantPropNames: PlasmicLeftSearchPanel__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicLeftSearchPanel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "searchPanel") {
    func.displayName = "PlasmicLeftSearchPanel";
  } else {
    func.displayName = `PlasmicLeftSearchPanel.${nodeName}`;
  }
  return func;
}

export const PlasmicLeftSearchPanel = Object.assign(
  // Top-level PlasmicLeftSearchPanel renders the root element
  makeNodeComponent("searchPanel"),
  {
    // Helper components rendering sub-elements
    searchbox: makeNodeComponent("searchbox"),
    freeBox: makeNodeComponent("freeBox"),
    expandButton: makeNodeComponent("expandButton"),
    collapseButton: makeNodeComponent("collapseButton"),
    filterButton: makeNodeComponent("filterButton"),

    // Metadata about props expected for PlasmicLeftSearchPanel
    internalVariantProps: PlasmicLeftSearchPanel__VariantProps,
    internalArgProps: PlasmicLeftSearchPanel__ArgProps,
  }
);

export default PlasmicLeftSearchPanel;
/* prettier-ignore-end */
