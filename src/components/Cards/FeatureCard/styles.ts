import { StyleSheet } from "react-native";
import { responsiveHeight } from "constants/Dimensions";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF14",
    width: responsiveHeight(156),
    height: responsiveHeight(130),
    borderRadius: 14,
    marginRight: responsiveHeight(8),
    paddingTop:responsiveHeight(16.32),
    paddingLeft:responsiveHeight(16),
  },
  iconContainer: {
    backgroundColor: "#0000003D",
    borderRadius: 8,
    height: responsiveHeight(35.68),
    width: responsiveHeight(36),
    alignItems: "center",
    justifyContent: "center",
    marginBottom:responsiveHeight(16)
  },
  icon: {
    height: responsiveHeight(18),
    width: responsiveHeight(18)
  },
  name: {
    color:"#fff",
    fontWeight:"500",
    fontSize:20,
    lineHeight:24,
    letterSpacing:0.38,
    marginBottom:responsiveHeight(4)
  },
  description: {
    color:"#FFFFFFB2",
    fontSize:13,
    lineHeight:18,
    letterSpacing:-0.08
  }
});