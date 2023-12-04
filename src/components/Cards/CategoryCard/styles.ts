import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "constants/Dimensions";

export const styles = StyleSheet.create({
  container: {
    width:responsiveWidth(158),
    height:responsiveWidth(152),
    marginBottom:responsiveWidth(16),
    borderWidth:1,
    borderColor:"#3C3C431A",
    borderRadius:12,
  },
  image: {
    position:"absolute",
    borderRadius:12,
    width:"100%",
    height:"100%"
  },
  label: {
    fontSize:16,
    fontWeight:"500",
    padding:responsiveHeight(16),
    paddingRight:responsiveWidth(50),
    color:"#13231B"
  }
});