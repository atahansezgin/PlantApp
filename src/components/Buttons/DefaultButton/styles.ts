import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "constants/Dimensions";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#28AF6E",
    paddingVertical: responsiveHeight(18),
    paddingHorizontal: responsiveWidth(16),
    borderRadius: 12,
    alignItems:"center",
  },
  label: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700"
  }
});