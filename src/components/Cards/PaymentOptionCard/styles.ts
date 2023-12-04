import { StyleSheet } from "react-native";
import { responsiveHeight } from "constants/Dimensions";
import { Colors } from "assets";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF0D",
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: "#FFFFFF4D",
    paddingVertical:responsiveHeight(13),
    paddingHorizontal:responsiveHeight(16),
    marginBottom:responsiveHeight(16),
    flexDirection:"row",
    alignItems:"center",
  },
  labelContainer:{
    marginLeft:responsiveHeight(12)
  },
  package:{
    color:"#fff",
    fontSize:16,
    lineHeight:18.96,
    fontWeight:"500"
  },
  description:{
    fontSize:12,
    color:"#FFFFFFB2",
    lineHeight:14.22
  },
  discountContainer:{
    backgroundColor:Colors.primaryGreen,
    position:"absolute",
    top:0,
    right:0,
    borderBottomLeftRadius:14,
    borderTopRightRadius:14,
    paddingVertical:responsiveHeight(4),
    paddingLeft:responsiveHeight(14),
    paddingRight:responsiveHeight(9)
  },
  discountText:{
    fontSize:12,
    lineHeight:18,
    color:"#fff"
  },
  gradient:{
    marginVertical:-responsiveHeight(13),
    marginHorizontal:-responsiveHeight(16),
    width:"100%",
    height:"100%",
    position:"absolute",
    flex:1,
  }
});