import { Dimensions } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export function responsiveHeight(size: number) {
  return SCREEN_HEIGHT / (guidelineBaseHeight / size);
}

export function responsiveWidth(size: number) {
  return SCREEN_WIDTH / (guidelineBaseWidth / size);
}