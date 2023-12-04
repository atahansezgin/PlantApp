import { StyleSheet } from "react-native";
import { responsiveHeight } from "constants/Dimensions";
import { Colors } from "assets";

export const styles = StyleSheet.create({
  selected:{
    width:responsiveHeight(24),
    height:responsiveHeight(24),
    backgroundColor:"#fff",
    borderRadius:100,
    borderWidth:responsiveHeight(8),
    borderColor:Colors.primaryGreen
  },
  unSelected:{
    width:responsiveHeight(24),
    height:responsiveHeight(24),
    backgroundColor:"#FFFFFF14",
    borderRadius:100,
  }
})