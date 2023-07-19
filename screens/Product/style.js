import { StyleSheet,Dimensions } from "react-native";
import { COLORS } from "../../contains/colors";

const width=Dimensions.get('window').width
const height=Dimensions.get("window").height
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    backgroundImage:{
       width:width,
       height:height,
       position:'absolute',
       top:0,
       bottom:0,
    },
    boxImage:{
        width:"100%",
        position:'relative',
        top:0,
        height:216,
    },
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        position:'absolute',
        width:'100%',
        bottom:0
    },
    icon:{
        backgroundColor:"white",
        paddingVertical:10,
        paddingHorizontal:15
    },
    iconLeft:{
        borderTopLeftRadius:30,
        paddingLeft:25
    },
    iconRight:{
        borderTopRightRadius:30,
        paddingRight:25
    },
    image:{
        width:"100%",
        height:"100%",
    },
    product:{
       alignItems:'center',
       justifyContent:'center',
       padding:10,
       flex:1
    },
    text:{
        fontSize:14,
        fontWeight:'400',
    },
    material:{
        paddingTop:16,
        alignItems:'center'
    },
    headerMaterial:{
        backgroundColor:COLORS.background,
        paddingVertical:11,
        paddingHorizontal:36,
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    },
    contentMaterial:{
        backgroundColor:COLORS.background,
        padding:15,
    },
    title:{
        color:COLORS.title,
        fontSize:16,
        fontWeight:'bold'
    }
})
export default styles