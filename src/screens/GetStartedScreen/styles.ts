import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "constants/Dimensions";

export const styles = StyleSheet.create({
  header: {
    paddingVertical: responsiveHeight(24), paddingHorizontal: responsiveWidth(24)
  },
  textPrimary:{
    marginBottom: responsiveHeight(8), fontSize: 28, lineHeight: 33.18, letterSpacing: 0.07
  },
  textSecondary:{
    color: "rgba(19, 35, 27, 0.7)", fontSize: 16, lineHeight: 22, letterSpacing: 0.7
  },
  content: {
    flex: 1,
  },
  footer: {
    paddingHorizontal: responsiveWidth(24),
    paddingBottom:responsiveHeight(8)
  },
  privacyText: {
    marginTop: responsiveHeight(17),
    fontSize: 11,
    textAlign: "center",
    color: "rgba(89, 113, 101, 0.7)"
  }
});