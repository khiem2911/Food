import { View,Text,FlatList } from "react-native"
import styles from "./style"
import {FlatScreens} from '../index'
import { useSelector } from "react-redux"




const FavoriteScreen =({navigation}) =>{
    const favoriteData = useSelector(state=>state.favorite.favorites)
    const renderFavorites=({item})=>{
        return(
            <FlatScreens onPress={()=>navigation.navigate("ProductScreen",{productId:item.id,title:item.title})} id={item.id} thumb={item.thumb} title={item.title} />
        )
    }

    const renderEmpty = () => {
        return (
            <View style={{alignItems:'flex-start'}}>
                <Text style={{textAlign:'center'}}>Danh sách món ăn rỗng</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
            data={favoriteData}
            renderItem={renderFavorites}
            keyExtractor={item=>item.id}
            ListEmptyComponent={renderEmpty}
            />
        </View>
    )
}
export default FavoriteScreen