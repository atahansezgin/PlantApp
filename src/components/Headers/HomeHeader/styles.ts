import { StyleSheet } from "react-native";
import { responsiveHeight } from "constants/Dimensions";

export const styles = StyleSheet.create({
  container:{
    height:responsiveHeight(145),
    paddingHorizontal:responsiveHeight(24),
    paddingTop:responsiveHeight(24)
  },
  primaryTitle:{
    fontSize:16,
    lineHeight:18.96,
    letterSpacing:0.07,
    marginBottom:responsiveHeight(6),
    color:"#13231B",
  },
  secondaryTitle:{
    fontSize:24,
    fontWeight:"500",
    marginBottom:responsiveHeight(14),
    color:"#13231B"
  }
});