import { StyleSheet,Dimensions } from "react-native";
import { COLORS } from "../../contains/colors";
const width=Dimensions.get('window').width-30
const styles = StyleSheet.create({
    productWrap:{
        width:width/2,
        paddingHorizontal:10
    },
    boxImg:{
        width:"100%",
        height:120,
       borderRadius:10,
       marginBottom:12
    },
    img:{
        width:"100%",
        height:"100%",
        borderRadius:10,
    },
    product:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:34
    },
    text:{
        fontWeight:'bold',
        fontSize:16,
        color:COLORS.title
    }
   
})
export default styles