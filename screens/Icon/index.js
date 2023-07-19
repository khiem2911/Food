import { View,Text } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./style";
import { COLORS } from "../../contains/colors";
const Icon =({name,number}) =>{
    return (
     
        <View style={styles.icon}>
        <Ionicons name={name} size={30} color={COLORS.icon} ></Ionicons>
      { number ? <Text style={styles.text}>{number}</Text> : <Text></Text> }
        </View>
       
    )
}
export default Icon