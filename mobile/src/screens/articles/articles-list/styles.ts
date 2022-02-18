import { StyleSheet } from "react-native";

import { SMALL_LOGO_HEIGHT, SMALL_PADDING_SIZE } from "../../../utils/constants";

export const articlesListStyles = StyleSheet.create({
  button: {
    height: SMALL_LOGO_HEIGHT,
    paddingVertical: SMALL_PADDING_SIZE,
    justifyContent: "center",
    alignSelf: "flex-start",
  },
});
