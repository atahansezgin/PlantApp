import { StyleSheet } from "react-native";
import { responsiveHeight } from "constants/Dimensions";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#24201A",
    paddingLeft: responsiveHeight(20),
    paddingRight: responsiveHeight(10),
    paddingVertical: responsiveHeight(13),
    borderRadius: 13,
    margin:responsiveHeight(24)
  },
  messageContainer: {
    marginRight:responsiveHeight(20)
  },
  messageIcon: {
    width: responsiveHeight(32),
    height: responsiveHeight(23.97)
  },
  badge: {
    position: "absolute",
    top: -responsiveHeight(5),
    right: 0
  },
  labelContainer: {
    flex: 1
  },
  textPrimary: {
    color: "#E5C990",
    fontWeight: "600",
    lineHeight: 21,
    letterSpacing: 0.32,
    fontSize:16
  },
  textSecondary: {
    color: "#E5C990",
    lineHeight:16,
    fontSize:13,
  },
  textBold: {
    fontWeight: "700"
  },
  arrowRightIcon: {
    width: responsiveHeight(24),
    height: responsiveHeight(24)
  }
});