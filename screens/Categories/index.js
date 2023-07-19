import { View,Text,Image,TouchableOpacity } from "react-native"
import styles from './style'
const CategoriesScreen =({title,thumb,onPress}) =>{
    return (
        <TouchableOpacity onPress={onPress} style={styles.productWrap}>
        <View style={styles.product}>
        <View style={styles.boxImg}>
            <Image style={styles.img}  source={thumb}></Image>
    </View>
    <Text style={styles.text}>{title}</Text>
     </View>
     </TouchableOpacity>
    )
}
export default CategoriesScreen