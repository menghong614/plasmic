// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { MenuType, useContextMenu } from "@/wab/client/components/ContextMenu";
import {
  DefaultListItemProps,
  PlasmicListItem,
  PlasmicListItem__OverridesType,
} from "@/wab/client/plasmic/plasmic_kit_design_system/PlasmicListItem";
import { combineProps } from "@/wab/commons/components/ReactUtil";
import * as React from "react";
import { DraggableProvidedDragHandleProps } from "react-beautiful-dnd";

interface ListItemProps
  extends Omit<
    DefaultListItemProps & PlasmicListItem__OverridesType,
    "hasMenu" | "showAdditionalRow" | "alwaysShowDragHandle"
  > {
  showActionsOnHover?: boolean;
  dragHandleProps?: DraggableProvidedDragHandleProps;
  style?: React.CSSProperties;
  menu?: MenuType;
  onClick?: () => void;
  onClickMain?: () => void;
}

function ListItem(props: ListItemProps) {
  const {
    style,
    showActionsOnHover,
    dragHandleProps,
    menu,
    onClick,
    onClickMain,
    ...rest
  } = props;
  const [hover, setHover] = React.useState(false);
  const contextMenuProps = useContextMenu({ menu });
  return (
    <PlasmicListItem
      {...rest}
      root={{
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        ...contextMenuProps,
        onClick,
      }}
      main={{
        onClick: onClickMain,
        style,
      }}
      showActions={props.showActions || (showActionsOnHover && hover)}
      // react-beautiful-dnd complains if we don't always render the dragHandle,
      // but plasmic doesn't support display:none yet, so we set alwaysShowDragHandle
      // here and we toggle the display property ourselves
      alwaysShowDragHandle={!!props.isDraggable}
      dragHandle={{
        props:
          dragHandleProps && props.isDraggable
            ? combineProps(dragHandleProps, {
                onMouseDown: (e: React.MouseEvent) => {
                  // We explicitly stopPropagation on mouse down on the drag handler,
                  // after dragHandleProps() have had a chance to handle it, so that
                  // we don't propagate up to any other drag handler while this ListItem
                  // is being dragged by the dragHandle.  For example, this ListItem
                  // could've been also wrapped by another DraggableInsertable.
                  e.stopPropagation();
                },
                style: {
                  display: hover ? "flex" : "none",
                },
              })
            : { display: "none" },
      }}
      hasMenu={!!menu}
      menuButton={{
        props: {
          ...contextMenuProps,
        },
      }}
      showAdditionalRow={!!props.additional}
    />
  );
}

export default ListItem;
