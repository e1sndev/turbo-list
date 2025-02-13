import { JSX } from "react";
import { ScrollViewProps } from "react-native";

export type TurboListProps<T> = ScrollViewProps & {
  data: T[];
  initialNumToRender?: number;
  estimatedItemSize: number;
  numColumns?: number;
  renderItem: (props: { item: T; index: number }) => JSX.Element;
};
