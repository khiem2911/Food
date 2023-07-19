import { View,Text,FlatList } from "react-native"
import styles from "./style"
import CategoriesScreen from "../Categories"
import {CATEGORIES} from '../../data/index'
import { useNavigation } from "@react-navigation/native"

const HomeScreen =({navigation}) =>{
    const renderGridCategories=({item})=>{
        return (
            <CategoriesScreen 
            title={item.title} 
            thumb={item.thumb} 
            onPress={()=>navigation.push("Category",{categoryId:item.id,categorName:item.title})}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
            data={CATEGORIES}
            renderItem={renderGridCategories}
            keyExtractor={item=>item.id}
            numColumns={2}
            />
         
        </View>
    )
}
export default HomeScreen