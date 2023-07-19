import { StyleSheet,Dimensions } from "react-native";
const height=Dimensions.get('window').height-180

import { COLORS } from "../../contains/colors";
const styles = StyleSheet.create({
  productWrap:{
    height:height/4,
    backgroundColor:COLORS.text,
    borderRadius:20,
    alignItems:'center',
    width:"80%",
    marginBottom:20,
  },
   text:{
    fontSize:16,
    textAlign:'center',
    fontWeight:'bold',
    color:COLORS.title,
    
   },
  product:{
    width:"100%",
    position:'relative'
  },
  boxIMG:{
    width:"100%",
    height:140,
    borderRadius:10,
    marginBottom:14
  },
  img:{
    width:"100%",
    height:"100%",
    borderRadius:10
  },
  items:{
    position:'absolute',
    right:-65,
  },
  item:{
    backgroundColor:COLORS.text,
    marginBottom:5,
    borderBottomRightRadius:20,
    borderTopRightRadius:20,
    paddingVertical:6,
    paddingLeft:13
  }
})
export default styles