import { StyleSheet } from "react-native";
import { responsiveWidth } from "constants/Dimensions";

export const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(240),
    height: responsiveWidth(164),
    borderRadius: 12,
    overflow:"hidden",
    marginRight:responsiveWidth(10)
  },
  image: {
    width: "100%",
    height: "100%",
    position:"absolute",
  },
  title: {
    color:"#fff",
    fontSize:15,
    lineHeight:20,
    marginTop:responsiveWidth(100),
    paddingTop:responsiveWidth(11),
    paddingBottom:responsiveWidth(13),
    paddingLeft:responsiveWidth(14),
    flex:1,
  }
});