import { JSX } from "react";

export interface TurboListProps<T> {
  data: T[];
  initialNumToRender?: number;
  estimatedItemSize: number;
  numColumns?: number;
  renderItem: (props: { item: T; index: number }) => JSX.Element;
}
