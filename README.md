# Turbo List (🚧 Under Development - Not Ready for Production)

**Turbo List** is a high-performance virtualized list for React Native, optimized for smooth scrolling and low memory usage. It aims to be an efficient alternative to `FlatList`, leveraging virtualization to improve rendering performance.

⚠️ **This package is still in development and should not be used in production.** Expect breaking changes and potential issues as development continues.

## 🚀 Installation

You can install `turbo-list` using **npm** or **yarn**:

```sh
npm install turbo-list
```

or

```sh
yarn add turbo-list
```

## 🔧 Usage

Here's a basic example of how to use `TurboList` in your React Native project:

```tsx
import React from "react";
import { View, Text } from "react-native";
import TurboList from "turbo-list";

const data = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  text: `Item ${i}`,
}));

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <TurboList
        data={data}
        estimatedItemSize={50}
        numColumns={1}
        initialNumToRender={10}
        renderItem={({ item }) => (
          <View
            style={{
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;
```

## 📌 Props

| Prop                 | Type                                                | Description                                         |
| -------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `data`               | `Array<T>`                                          | List of items to render.                            |
| `estimatedItemSize`  | `number`                                            | Approximate height of each item for virtualization. |
| `numColumns`         | `number` (default: `1`)                             | Number of columns in the list.                      |
| `initialNumToRender` | `number` (optional)                                 | Number of items to render initially.                |
| `renderItem`         | `(item: { item: T, index: number }) => JSX.Element` | Function to render each item.                       |

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Issues & Contributions

- Found a bug? Report it [here](https://github.com/e1sndev/turbo-list/issues).
- Want to contribute? Feel free to submit a pull request!

---

🚧 **Development in Progress** – This package is not stable yet. Stay tuned for updates! 🚀
