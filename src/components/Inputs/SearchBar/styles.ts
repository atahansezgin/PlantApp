import { StyleSheet } from "react-native";
import { responsiveHeight } from "constants/Dimensions";

export const styles = StyleSheet.create({
  container: {
    borderWidth:0.2,
    borderColor:"#3C3C4340",
    borderRadius:12,
    flexDirection:"row",
    backgroundColor:"#fff",
  },
  icon: {
    height:responsiveHeight(20),
    width:responsiveHeight(20),
    marginVertical:responsiveHeight(12),
    marginHorizontal:responsiveHeight(10)
  },
  input: {
    flex:1,
    color:"#13231B",
  }
});