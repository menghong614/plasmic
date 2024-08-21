// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { useMultiAssetsActions } from "@/wab/client/components/sidebar/MultiAssetsActions";
import { ColorSwatch } from "@/wab/client/components/style-controls/ColorSwatch";
import { TokenDefinedIndicator } from "@/wab/client/components/style-controls/TokenDefinedIndicator";
import { Matcher } from "@/wab/client/components/view-common";
import Checkbox from "@/wab/client/components/widgets/Checkbox";
import { PlasmicColorTokenControl } from "@/wab/client/plasmic/plasmic_kit_left_pane/PlasmicColorTokenControl";
import { useStudioCtx } from "@/wab/client/studio-ctx/StudioCtx";
import { TokenValue } from "@/wab/commons/StyleToken";
import { VariantedStylesHelper } from "@/wab/shared/VariantedStylesHelper";
import { getFolderDisplayName } from "@/wab/shared/folders/folders-util";
import { StyleToken } from "@/wab/shared/model/classes";
import Chroma from "@/wab/shared/utils/color-utils";
import { Tooltip } from "antd";
import classNames from "classnames";
import * as React from "react";

interface ColorTokenControlProps {
  style?: React.CSSProperties;
  token: StyleToken;
  tokenValue: TokenValue;
  matcher: Matcher;
  menu: () => React.ReactElement;
  onClick?: () => void;
  vsh?: VariantedStylesHelper;
}

function ColorTokenControl(props: ColorTokenControlProps) {
  const { style, token, tokenValue, matcher, menu, onClick, vsh } = props;

  const studioCtx = useStudioCtx();

  const multiAssetsActions = useMultiAssetsActions();

  const isSelected = multiAssetsActions.isAssetSelected(token.uuid);

  const tokenName = getFolderDisplayName(token.name);

  return (
    <Tooltip title={tokenName} mouseEnterDelay={0.5}>
      <PlasmicColorTokenControl
        icon={
          <>
            {multiAssetsActions.isSelecting && (
              <Checkbox isChecked={isSelected}> </Checkbox>
            )}
            {vsh && (
              <TokenDefinedIndicator
                token={token}
                vsh={vsh}
                studioCtx={studioCtx}
                className={classNames("mr-sm")}
              />
            )}
            <ColorSwatch color={tokenValue} />
          </>
        }
        value={matcher.boldSnippets(Chroma.stringify(tokenValue))}
        listItem={{
          style,
          menu,
          onClick,
        }}
      >
        {matcher.boldSnippets(tokenName)}
      </PlasmicColorTokenControl>
    </Tooltip>
  );
}

export default ColorTokenControl;
