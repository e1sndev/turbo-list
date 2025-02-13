import { JSX } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface TurboListProps<T> {
  data: T[];
  initialNumToRender?: number;
  estimatedItemSize: number;
  numColumns?: number;
  renderItem: (props: { item: T; index: number }) => JSX.Element;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}
