import { StyleSheet,Dimensions } from "react-native";

import { COLORS } from "../../contains/colors";
const styles = StyleSheet.create({
  productWrap:{
    backgroundColor:COLORS.text,
    borderRadius:20,
    alignItems:'center',
    marginBottom:20
  },
   text:{
    fontSize:16,
    textAlign:'center',
    fontWeight:'bold',
    color:COLORS.title,
    marginBottom:14
   },
  item:{
    flexDirection:'row',
    justifyContent:'center'
  },
  product:{
    width:"100%",
    height:228,
    marginBottom:20,
   
  },
  boxIMG:{
    width:"100%",
    height:145,
    borderRadius:10,
    marginBottom:14
  },
  img:{
    width:"100%",
    height:"100%",
    borderRadius:10
  }
})
export default styles