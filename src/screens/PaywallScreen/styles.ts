import { StyleSheet } from "react-native";
import { responsiveHeight } from "../../constants/Dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1, paddingTop: responsiveHeight(264)
  },
  header: {
    paddingHorizontal: responsiveHeight(24),
    marginBottom:responsiveHeight(20)
  },
  title: {
    fontSize: 27,
    fontWeight: "300",
    lineHeight: 32,
    color: "#fff"
  },
  titleBold: {
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 46.8,
    color: "#fff"
  },
  subtitle: {
    color: "#FFFFFFB2",
    fontWeight: "300",
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: 0.38
  },
  featureList:{
    paddingHorizontal:responsiveHeight(24)
  },
  paymentOptionsContainer:{
    padding:responsiveHeight(24)
  },
  footer:{
    paddingHorizontal:responsiveHeight(24)
  },
  footerDescription:{
    fontWeight:"300",
    fontSize:9,
    color:"#FFFFFF85",
    textAlign:"center",
    marginTop:responsiveHeight(8),
    marginBottom:responsiveHeight(10)
  },
  footerDescriptionSecondary:{
    color:"#FFFFFF80",
    fontSize:11,
    lineHeight:13.04,
    textAlign:"center"
  }

});