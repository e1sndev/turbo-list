import React, { useCallback, useMemo, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";
import { TurboListProps } from "./types";

const TurboList = <T,>({
  data,
  initialNumToRender,
  estimatedItemSize,
  numColumns = 1,
  renderItem,
  onScroll,
  ...props
}: TurboListProps<T>) => {
  const { height } = useWindowDimensions();

  const visibleItemsCount = useMemo(() => {
    return Math.ceil(height / estimatedItemSize) * numColumns;
  }, [height, estimatedItemSize]);

  const [renderableRange, setRenderableRange] = useState({
    start: 0,
    end: initialNumToRender ? initialNumToRender : visibleItemsCount,
  });

  const scrollHandler = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const contentOffsetY = event.nativeEvent.contentOffset.y;
      const startIdx = Math.max(
        0,
        Math.floor(contentOffsetY / (estimatedItemSize * numColumns))
      );

      const endIdx = Math.min(data.length, startIdx + visibleItemsCount);

      setRenderableRange({
        start: startIdx,
        end: endIdx,
      });

      onScroll?.(event);
    },
    [visibleItemsCount, data.length, estimatedItemSize, numColumns, onScroll]
  );

  const itemsContainerHeight = useMemo(() => {
    return Math.ceil(data.length / numColumns) * estimatedItemSize;
  }, [data, numColumns, estimatedItemSize]);

  const renderedItems = useMemo(() => {
    return data
      .slice(renderableRange.start, renderableRange.end)
      .map((item, index) => {
        const realIndex = renderableRange.start + index;
        const top = (realIndex * estimatedItemSize) / numColumns;
        return (
          <View
            key={realIndex}
            style={{
              top,
              height: estimatedItemSize,
              left: (realIndex % numColumns) * estimatedItemSize,
              position: "absolute",
            }}
          >
            {renderItem({ item, index: realIndex })}
          </View>
        );
      });
  }, [
    data,
    renderableRange.start,
    renderableRange.end,
    estimatedItemSize,
    renderItem,
  ]);

  return (
    <ScrollView {...props} onScroll={scrollHandler}>
      <View style={{ height: itemsContainerHeight, position: "relative" }}>
        {renderedItems}
      </View>
    </ScrollView>
  );
};

export default TurboList;
