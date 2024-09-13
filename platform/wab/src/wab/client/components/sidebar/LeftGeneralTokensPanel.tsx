// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import {
  RenderElementProps,
  VirtualTree,
  VirtualTreeRef,
} from "@/wab/client/components/grouping/VirtualTree";
import MultiAssetsActions from "@/wab/client/components/sidebar/MultiAssetsActions";
import { TokenEditModal } from "@/wab/client/components/sidebar/TokenEditModal";
import TokenTypeHeader from "@/wab/client/components/sidebar/TokenTypeHeader";
import {
  TOKEN_ROW_HEIGHT,
  TokenControlsContext,
  TokenFolderRow,
  TokenRow,
} from "@/wab/client/components/sidebar/token-controls";
import { Matcher } from "@/wab/client/components/view-common";
import { useClientTokenResolver } from "@/wab/client/components/widgets/ColorPicker/client-token-resolver";
import Select from "@/wab/client/components/widgets/Select";
import { PlasmicLeftGeneralTokensPanel } from "@/wab/client/plasmic/plasmic_kit_left_pane/PlasmicLeftGeneralTokensPanel";
import { useStudioCtx } from "@/wab/client/studio-ctx/StudioCtx";
import {
  TokenType,
  TokenValue,
  tokenTypeDefaults,
  tokenTypeLabel,
  tokenTypes,
} from "@/wab/commons/StyleToken";
import { VariantedStylesHelper } from "@/wab/shared/VariantedStylesHelper";
import { isScreenVariant } from "@/wab/shared/Variants";
import { ensure, unexpected, unreachable } from "@/wab/shared/common";
import { isHostLessPackage } from "@/wab/shared/core/sites";
import {
  Folder as InternalFolder,
  createFolderTreeStructure,
  getFolderTrimmed,
  isFolder,
} from "@/wab/shared/folders/folders-util";
import { ProjectDependency, StyleToken } from "@/wab/shared/model/classes";
import { naturalSort } from "@/wab/shared/sort";
import Chroma from "@/wab/shared/utils/color-utils";
import { Tooltip } from "antd";
import { debounce, groupBy, partition } from "lodash";
import { observer } from "mobx-react";
import * as React from "react";

interface Header {
  type: "header";
  tokenType: TokenType;
  key: string;
  items: TokenPanelRow[];
  count: number;
}

interface Folder {
  type: "folder" | "folder-token";
  name: string;
  key: string;
  items: TokenPanelRow[];
  count: number;
}

interface TokenData {
  type: "token";
  key: string;
  token: StyleToken;
  value: TokenValue;
  importedFrom?: string;
}

type TokenPanelRow = Header | Folder | TokenData;

function mapToTokenPanelRow(
  item: StyleToken | InternalFolder<StyleToken>,
  getTokenValue: (token: StyleToken) => TokenValue,
  dep?: ProjectDependency
): TokenPanelRow {
  if (!isFolder(item)) {
    return {
      type: "token" as const,
      key: item.uuid,
      token: item,
      value: getTokenValue(item),
      importedFrom: dep?.projectId,
    };
  }

  return {
    type: "folder-token" as const,
    key: item.path,
    name: item.name,
    items: item.items.map((i) => mapToTokenPanelRow(i, getTokenValue, dep)),
    count: item.count,
  };
}

const LeftGeneralTokensPanel = observer(function LeftGeneralTokensPanel() {
  const studioCtx = useStudioCtx();
  const [debouncedQuery, setDebouncedQuery] = React.useState("");
  const debouncedSetQuery = React.useCallback(
    debounce((value: string) => {
      setDebouncedQuery(value);
    }, 500),
    [setDebouncedQuery]
  );
  const matcher = new Matcher(debouncedQuery);

  const treeRef = React.useRef<VirtualTreeRef>(null);

  const [justAdded, setJustAdded] = React.useState<StyleToken | undefined>(
    undefined
  );

  const [editToken, setEditToken] = React.useState<StyleToken | undefined>(
    undefined
  );

  const [vsh, setVsh] = React.useState<VariantedStylesHelper | undefined>(
    undefined
  );

  const [isTargeting, setIsTargeting] = React.useState(false);

  const resolver = useClientTokenResolver();

  const getTokenValue = React.useCallback(
    (token: StyleToken) => {
      let value = resolver(token, vsh);
      if (token.type === TokenType.Color) {
        value = Chroma.stringify(value) as TokenValue;
      }
      return value;
    },
    [resolver, vsh]
  );

  const getRowKey = React.useCallback((row: TokenPanelRow) => {
    return row.key;
  }, []);
  const getRowChildren = React.useCallback((row: TokenPanelRow) => {
    if (row.type === "token") {
      return [];
    }
    return row.items;
  }, []);
  const getRowSearchText = React.useCallback((row: TokenPanelRow) => {
    switch (row.type) {
      case "header":
        return tokenTypeLabel(row.tokenType);
      case "folder":
      case "folder-token":
        return row.name;
      case "token":
        return `${row.token.name}$${row.value}`;
      default:
        unexpected();
    }
  }, []);
  const getRowHeight = React.useCallback((row: TokenPanelRow) => {
    if (row.type === "header") {
      return 42;
    }
    return TOKEN_ROW_HEIGHT;
  }, []);

  const onAdd = React.useCallback(
    async (type: TokenType) => {
      await studioCtx.change(({ success }) => {
        const initialValue = tokenTypeDefaults(type);
        const token = studioCtx.tplMgr().addToken({
          tokenType: type,
          value: initialValue,
        });
        setJustAdded(token);
        setEditToken(token);
        return success();
      });
    },
    [studioCtx, setJustAdded, setEditToken]
  );

  const onDuplicate = React.useCallback(
    async (token: StyleToken) => {
      await studioCtx.change(({ success }) => {
        const newToken = studioCtx.tplMgr().duplicateToken(token);
        setJustAdded(newToken);
        setEditToken(newToken);
        return success();
      });
    },
    [studioCtx, setJustAdded, setEditToken]
  );

  const onSelect = React.useCallback(
    (token: StyleToken) => {
      setEditToken(token);
    },
    [setEditToken]
  );

  const nonScreenGlobalVariants = studioCtx.site.globalVariantGroups.flatMap(
    (variantGroup) => variantGroup.variants.filter((v) => !isScreenVariant(v))
  );

  const handleGlobalVariantChange = (variantId) => {
    if (variantId === "base") {
      setVsh(undefined);
      setIsTargeting(false);
    } else {
      const globalVariants = [
        nonScreenGlobalVariants.some((v) => v.uuid === variantId)
          ? ensure(
              nonScreenGlobalVariants.find((v) => v.uuid === variantId),
              () => `Picked unknown screen variant`
            )
          : ensure(
              studioCtx.site.activeScreenVariantGroup?.variants.find(
                (v) => v.uuid === variantId
              ),
              () => `Picked unknown global variant`
            ),
      ];
      setVsh(
        new VariantedStylesHelper(
          studioCtx.site,
          globalVariants,
          globalVariants
        )
      );
      setIsTargeting(true);
    }
  };

  const tokensByType = groupBy(studioCtx.site.styleTokens, (t) => t.type);

  const tokensContent = () => {
    const tokenSectionItems = (tokenType: TokenType) => {
      const makeTokensItems = (
        tokens: StyleToken[],
        dep?: ProjectDependency
      ) => {
        tokens = naturalSort(tokens, (token) => getFolderTrimmed(token.name));
        const tokenTree = createFolderTreeStructure(tokens, {
          pathPrefix: `${tokenType}-`,
          getName: (item) => item.name,
          mapper: (item) => mapToTokenPanelRow(item, getTokenValue, dep),
        });
        return { items: tokenTree, count: tokens.length };
      };

      const makeDepsItems = (deps: ProjectDependency[]): TokenPanelRow[] => {
        deps = naturalSort(deps, (dep) =>
          studioCtx.projectDependencyManager.getNiceDepName(dep)
        );
        return deps
          .map((dep) => {
            return {
              type: "folder" as const,
              name: studioCtx.projectDependencyManager.getNiceDepName(dep),
              key: dep.uuid,
              // We only include registered tokens if they're from a hostless
              // package; otherwise, registered tokens from custom host will
              // already show up in the RegisteredTokens section.
              ...makeTokensItems(
                (isHostLessPackage(dep.site)
                  ? dep.site.styleTokens
                  : dep.site.styleTokens.filter((t) => !t.isRegistered)
                ).filter((t) => t.type === tokenType)
              ),
            };
          })
          .filter((dep) => dep.count > 0);
      };

      const tokens = tokensByType[tokenType] ?? [];

      const [normalTokens, registeredTokens] = partition(
        tokens,
        (t) => !t.isRegistered
      );

      const items: TokenPanelRow[] = [
        ...makeTokensItems(normalTokens).items,
        ...(registeredTokens.length > 0
          ? [
              {
                type: "folder" as const,
                name: "Registered tokens",
                key: "$registered-folder",
                ...makeTokensItems(registeredTokens),
              },
            ]
          : []),
        ...makeDepsItems(
          studioCtx.site.projectDependencies.filter(
            (d) => !isHostLessPackage(d.site)
          )
        ),
        ...makeDepsItems(
          studioCtx.site.projectDependencies.filter((d) =>
            isHostLessPackage(d.site)
          )
        ),
      ];
      return items;
    };

    const selectableTokens = studioCtx.site.styleTokens
      .filter((t) => {
        let resolved = resolver(t, vsh);
        if (t.type === TokenType.Color) {
          resolved = Chroma.stringify(resolved) as TokenValue;
        }
        return (
          (matcher.matches(t.name) ||
            matcher.matches(resolved) ||
            justAdded === t) &&
          !t.isRegistered
        );
      })
      .map((t) => t.uuid);

    const items = tokenTypes.map((tokenType) => {
      return {
        type: "header" as const,
        tokenType: tokenType,
        key: `$${tokenType}-folder`,
        items: tokenSectionItems(tokenType),
      } as TokenPanelRow;
    });

    return (
      <MultiAssetsActions
        type="token"
        selectableAssets={selectableTokens}
        onDelete={async (selected: string[]) => {
          const selectedTokens = studioCtx.site.styleTokens.filter((t) =>
            selected.includes(t.uuid)
          );
          return await studioCtx.siteOps().tryDeleteTokens(selectedTokens);
        }}
      >
        <TokenControlsContext.Provider
          value={{ vsh, resolver, onDuplicate, onSelect, onAdd }}
        >
          <VirtualTree
            ref={treeRef}
            rootNodes={items}
            getNodeKey={getRowKey}
            getNodeChildren={getRowChildren}
            getNodeSearchText={getRowSearchText}
            getNodeHeight={getRowHeight}
            query={debouncedQuery}
            renderElement={TokenTreeRow}
          />
        </TokenControlsContext.Provider>
      </MultiAssetsActions>
    );
  };

  return (
    <>
      <PlasmicLeftGeneralTokensPanel
        leftPaneHeader={{
          actions: null,
        }}
        leftSearchPanel={{
          searchboxProps: {
            onChange: (e) => {
              debouncedSetQuery(e.target.value);
            },
            autoFocus: true,
          },
          expandProps: {
            onClick: treeRef.current?.expandAll,
          },
          collapseProps: {
            onClick: treeRef.current?.collapseAll,
          },
        }}
        globalVariantsSelectContainer={{
          wrap: (x) => (
            <Tooltip
              title={
                "You can change the token value for different responsive breakpoints or global variants."
              }
            >
              {x}
            </Tooltip>
          ),
        }}
        isTargeting={isTargeting}
        globalVariantSelect={{
          onChange: (e) => handleGlobalVariantChange(e),
          children: (
            <>
              <Select.Option value="base">Base</Select.Option>
              {studioCtx.site.activeScreenVariantGroup?.variants &&
                studioCtx.site.activeScreenVariantGroup.variants.length > 0 && (
                  <Select.OptionGroup title="Screen Variants">
                    {studioCtx.site.activeScreenVariantGroup.variants.map(
                      (variant) => (
                        <Select.Option value={variant.uuid} key={variant.uuid}>
                          {variant.name}
                        </Select.Option>
                      )
                    )}
                  </Select.OptionGroup>
                )}
              {nonScreenGlobalVariants.length > 0 && (
                <Select.OptionGroup title="Global Variants">
                  {nonScreenGlobalVariants.map((variant) => (
                    <Select.Option value={variant.uuid} key={variant.uuid}>
                      {variant.name}
                    </Select.Option>
                  ))}
                </Select.OptionGroup>
              )}
            </>
          ),
        }}
        content={<>{tokensContent()}</>}
      />

      {editToken && (
        <TokenEditModal
          studioCtx={studioCtx}
          token={editToken}
          onClose={() => {
            setEditToken(undefined);
            setJustAdded(undefined);
          }}
          autoFocusName={justAdded === editToken}
          vsh={vsh}
        />
      )}
    </>
  );
});

const TokenTreeRow = (props: RenderElementProps<TokenPanelRow>) => {
  const { value, treeState } = props;
  switch (value.type) {
    case "header":
      return (
        <TokenTypeHeader
          tokenType={value.tokenType}
          isExpanded={treeState.isOpen}
          toggleExpand={treeState.toggleExpand}
        />
      );
    case "folder":
    case "folder-token":
      return (
        <TokenFolderRow
          name={value.name}
          matcher={treeState.matcher}
          isOpen={treeState.isOpen}
          groupSize={value.count}
          indentMultiplier={treeState.level - 1}
        />
      );
    case "token":
      return (
        <TokenRow
          token={value.token}
          tokenValue={value.value}
          matcher={treeState.matcher}
          isImported={!!value.importedFrom}
          indentMultiplier={treeState.level - 1}
        />
      );
    default:
      unreachable(value);
  }
};

export default LeftGeneralTokensPanel;
