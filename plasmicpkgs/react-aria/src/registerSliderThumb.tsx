import React from "react";
import { mergeProps } from "react-aria";
import { Slider, SliderThumb, SliderTrack } from "react-aria-components";
import { getCommonProps } from "./common";
import { PlasmicSliderContext } from "./contexts";
import ErrorBoundary from "./ErrorBoundary";
import {
  CodeComponentMetaOverrides,
  Registerable,
  makeComponentName,
  registerComponentHelper,
} from "./utils";
import { UpdateVariant, pickAriaComponentVariants } from "./variant-utils";

const SLIDER_THUMB_VARIANTS = [
  "dragging" as const,
  "hovered" as const,
  "focused" as const,
  "focusVisible" as const,
  "disabled" as const,
];

const { variants, withObservedValues } = pickAriaComponentVariants(
  SLIDER_THUMB_VARIANTS
);
export interface BaseSliderThumbProps
  extends React.ComponentProps<typeof SliderThumb> {
  advanced?: boolean;
  // Optional callback to update the CC variant state
  // as it's only provided if the component is the root of a Studio component
  updateVariant?: UpdateVariant<typeof SLIDER_THUMB_VARIANTS>;
}

export function BaseSliderThumb({
  children,
  advanced,
  updateVariant,
  ...rest
}: BaseSliderThumbProps) {
  const context = React.useContext(PlasmicSliderContext);
  const mergedProps = mergeProps(context, rest);

  const thumb = (
    <SliderThumb {...mergedProps}>
      {({ isDragging, isHovered, isFocused, isFocusVisible, isDisabled }) =>
        withObservedValues(
          <>{advanced ? children : undefined}</>,
          {
            dragging: isDragging,
            hovered: isHovered,
            focused: isFocused,
            focusVisible: isFocusVisible,
            disabled: isDisabled,
          },
          updateVariant
        )
      }
    </SliderThumb>
  );

  return (
    <ErrorBoundary
      // If the Slider Thumb is the root of a Studio component, then we need to wrap the thumb in a track
      // to ensure that the thumb gets the required Slider context
      fallback={
        <Slider style={{ height: "100%", width: "100%" }}>
          <SliderTrack>{thumb}</SliderTrack>
        </Slider>
      }
    >
      {thumb}
    </ErrorBoundary>
  );
}

export const SLIDER_THUMB_COMPONENT_NAME = makeComponentName("sliderThumb");

export function registerSliderThumb(
  loader?: Registerable,
  overrides?: CodeComponentMetaOverrides<typeof BaseSliderThumb>
) {
  return registerComponentHelper(
    loader,
    BaseSliderThumb,
    {
      name: SLIDER_THUMB_COMPONENT_NAME,
      displayName: "Aria Slider Thumb",
      importPath: "@plasmicpkgs/react-aria/skinny/registerSliderThumb",
      importName: "BaseSliderThumb",
      defaultStyles: {
        position: "absolute",
        top: "5px",
        width: "20px",
        height: "20px",
        backgroundColor: "#C80101",
        borderRadius: "100%",
        cursor: "pointer",
      },
      variants,
      interactionVariants: variants,
      props: {
        ...getCommonProps<BaseSliderThumbProps>("slider thumb", [
          "name",
          "isDisabled",
          "autoFocus",
        ]),
        advanced: {
          type: "boolean",
          displayName: "Advanced",
          description:
            "Enables the children slot for creating a more customized thumb",
        },
        children: {
          type: "slot",
          hidden: (ps: BaseSliderThumbProps) => !ps.advanced,
        },
      },
      trapsFocus: true,
    } as any,
    overrides
  );
}
