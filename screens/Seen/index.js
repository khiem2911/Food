import { View,Text,FlatList } from "react-native"
import styles from "./style"
import {FlatScreens} from '../index'
import {useSelector} from "react-redux"
import { PRODUCTS } from "../../data"

const SeenScreen =({navigation}) =>{
    const data = useSelector(state=>state.viewed.items)
    const seenData = data.map(itemID=>PRODUCTS.find(items=>items.id===itemID))

    const renderSeenProducts=({item})=>{
        return (
            <FlatScreens onPress={()=>navigation.navigate("ProductScreen",{productId:item.id,title:item.title})} id={item.id} thumb={item.thumb} title={item.title} name="ios-heart"/>
        )
    }
    const renderEmptyProduct=()=>{
        return (
            <View>
                <Text>Danh sách các món ăn rỗng</Text>
            </View>
        )
    }
        return (
        <View style={styles.container}>
            <FlatList
            data={seenData}
            renderItem={renderSeenProducts}
            keyExtractor={item=>item.id}
            ListEmptyComponent={renderEmptyProduct}
            >
           </FlatList>
        </View>
    )
}
export default SeenScreen