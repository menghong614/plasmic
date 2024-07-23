// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: 3jXSiWKc1-

import * as React from "react";

import {
  Flex as Flex__,
  SingleBooleanChoiceArg,
  Stack as Stack__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  renderPlasmicSlot,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import TeamMemberListItem from "../../components/dashboard/TeamMemberListItem"; // plasmic-import: gdLJj97tYt/component
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component
import Searchbox from "../../components/widgets/Searchbox"; // plasmic-import: po7gr0PX4_gWo/component
import Select from "../../components/widgets/Select"; // plasmic-import: j_4IQyOWK2b/component
import Select__Option from "../../components/widgets/Select__Option"; // plasmic-import: rr-LWdMni2G/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicTeamMemberList.module.css"; // plasmic-import: 3jXSiWKc1-/css

import PlusIcon from "../plasmic_kit/PlasmicIcon__Plus"; // plasmic-import: -k064DlQ8k8-L/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import PlussvgIcon from "../q_4_icons/icons/PlasmicIcon__Plussvg"; // plasmic-import: sQKgd2GNr/icon

createPlasmicElementProxy;

export type PlasmicTeamMemberList__VariantMembers = {
  isCollapsed: "isCollapsed";
};
export type PlasmicTeamMemberList__VariantsArgs = {
  isCollapsed?: SingleBooleanChoiceArg<"isCollapsed">;
};
type VariantPropType = keyof PlasmicTeamMemberList__VariantsArgs;
export const PlasmicTeamMemberList__VariantProps = new Array<VariantPropType>(
  "isCollapsed"
);

export type PlasmicTeamMemberList__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTeamMemberList__ArgsType;
export const PlasmicTeamMemberList__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicTeamMemberList__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  actions?: Flex__<"div">;
  newButton?: Flex__<typeof Button>;
  filterSelect?: Flex__<typeof Select>;
  memberSearch?: Flex__<typeof Searchbox>;
  header?: Flex__<"div">;
};

export interface DefaultTeamMemberListProps {
  children?: React.ReactNode;
  isCollapsed?: SingleBooleanChoiceArg<"isCollapsed">;
  className?: string;
}

const $$ = {};

function PlasmicTeamMemberList__RenderFunc(props: {
  variants: PlasmicTeamMemberList__VariantsArgs;
  args: PlasmicTeamMemberList__ArgsType;
  overrides: PlasmicTeamMemberList__OverridesType;
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
        path: "isCollapsed",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isCollapsed,
      },
      {
        path: "filterSelect.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
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
        plasmic_plasmic_kit_pricing_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootisCollapsed]: hasVariant(
            $state,
            "isCollapsed",
            "isCollapsed"
          ),
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__l8Prb
          )}
        >
          {"Members"}
        </div>
        <Stack__
          as={"div"}
          data-plasmic-name={"actions"}
          data-plasmic-override={overrides.actions}
          hasGap={true}
          className={classNames(projectcss.all, sty.actions)}
        >
          <Button
            data-plasmic-name={"newButton"}
            data-plasmic-override={overrides.newButton}
            className={classNames("__wab_instance", sty.newButton)}
            endIcon={
              <ChevronDownsvgIcon
                className={classNames(projectcss.all, sty.svg__lPfIg)}
                role={"img"}
              />
            }
            font={"bold"}
            size={"wide"}
            startIcon={
              <PlusIcon
                className={classNames(projectcss.all, sty.svg___0MNgN)}
                role={"img"}
              />
            }
            type={["clear"]}
            withIcons={["startIcon"]}
          >
            {"New member"}
          </Button>
          <Select
            data-plasmic-name={"filterSelect"}
            data-plasmic-override={overrides.filterSelect}
            className={classNames("__wab_instance", sty.filterSelect)}
            icon={
              <PlussvgIcon
                className={classNames(projectcss.all, sty.svg___63J2T)}
                role={"img"}
              />
            }
            onChange={(...eventArgs) => {
              generateStateOnChangeProp($state, ["filterSelect", "value"])(
                eventArgs[0]
              );
            }}
            placeholder={"Filter\u2026"}
            type={"bordered"}
            value={generateStateValueProp($state, ["filterSelect", "value"])}
          >
            <Select__Option
              className={classNames("__wab_instance", sty.option__egmzu)}
              value={"all"}
            >
              {"All Roles"}
            </Select__Option>
            <Select__Option
              className={classNames("__wab_instance", sty.option___6MrRo)}
              value={"owner"}
            >
              {"Owners"}
            </Select__Option>
            <Select__Option
              className={classNames("__wab_instance", sty.option__q1Ek5)}
              value={"editor"}
            >
              {"Editors"}
            </Select__Option>
            <Select__Option
              className={classNames("__wab_instance", sty.option__oBlVc)}
              value={"designer"}
            >
              {"Designers"}
            </Select__Option>
            <Select__Option
              className={classNames("__wab_instance", sty.option__xaQz)}
              value={"content"}
            >
              {"Content Creators"}
            </Select__Option>
            <Select__Option
              className={classNames("__wab_instance", sty.option___4VAek)}
              value={"viewer"}
            >
              {"Viewers"}
            </Select__Option>
            <Select__Option
              className={classNames("__wab_instance", sty.option___7OsFo)}
              value={"none"}
            >
              {"None"}
            </Select__Option>
          </Select>
          <Searchbox
            data-plasmic-name={"memberSearch"}
            data-plasmic-override={overrides.memberSearch}
            bordered={true}
            className={classNames("__wab_instance", sty.memberSearch)}
            whiteBackground={true}
          />
        </Stack__>
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        hasGap={true}
        className={classNames(projectcss.all, sty.header)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__cuGtX
          )}
        >
          {"Name"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___0Cf9
          )}
        >
          {"Last active"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__qi9E0
          )}
        >
          {"Projects"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__k2CEs
          )}
        >
          {"Team role"}
        </div>
      </Stack__>
      {renderPlasmicSlot({
        defaultContents: (
          <React.Fragment>
            <TeamMemberListItem
              className={classNames(
                "__wab_instance",
                sty.teamMemberListItem__xV1F
              )}
              email={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__glRe0
                  )}
                >
                  {"email@domain.com"}
                </div>
              }
              name={"Kimmy Schmidt"}
            />

            <TeamMemberListItem
              className={classNames(
                "__wab_instance",
                sty.teamMemberListItem__df22M
              )}
              name={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__f6B5V
                  )}
                >
                  {"Carl Sagan"}
                </div>
              }
            />

            <TeamMemberListItem
              className={classNames(
                "__wab_instance",
                sty.teamMemberListItem___9HzOo
              )}
              name={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__j0Ij9
                  )}
                >
                  {"Rosa Diaz"}
                </div>
              }
            />

            <TeamMemberListItem
              className={classNames(
                "__wab_instance",
                sty.teamMemberListItem__blTpg
              )}
              name={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bf6Im
                  )}
                >
                  {"Jared Dunn"}
                </div>
              }
            />
          </React.Fragment>
        ),
        value: args.children,
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "actions",
    "newButton",
    "filterSelect",
    "memberSearch",
    "header",
  ],
  freeBox: ["freeBox", "actions", "newButton", "filterSelect", "memberSearch"],
  actions: ["actions", "newButton", "filterSelect", "memberSearch"],
  newButton: ["newButton"],
  filterSelect: ["filterSelect"],
  memberSearch: ["memberSearch"],
  header: ["header"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  actions: "div";
  newButton: typeof Button;
  filterSelect: typeof Select;
  memberSearch: typeof Searchbox;
  header: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTeamMemberList__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTeamMemberList__VariantsArgs;
    args?: PlasmicTeamMemberList__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTeamMemberList__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTeamMemberList__ArgsType,
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
          internalArgPropNames: PlasmicTeamMemberList__ArgProps,
          internalVariantPropNames: PlasmicTeamMemberList__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicTeamMemberList__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTeamMemberList";
  } else {
    func.displayName = `PlasmicTeamMemberList.${nodeName}`;
  }
  return func;
}

export const PlasmicTeamMemberList = Object.assign(
  // Top-level PlasmicTeamMemberList renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    actions: makeNodeComponent("actions"),
    newButton: makeNodeComponent("newButton"),
    filterSelect: makeNodeComponent("filterSelect"),
    memberSearch: makeNodeComponent("memberSearch"),
    header: makeNodeComponent("header"),

    // Metadata about props expected for PlasmicTeamMemberList
    internalVariantProps: PlasmicTeamMemberList__VariantProps,
    internalArgProps: PlasmicTeamMemberList__ArgProps,
  }
);

export default PlasmicTeamMemberList;
/* prettier-ignore-end */
