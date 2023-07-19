import { View, Text, FlatList ,ScrollView } from "react-native";
import {FlatScreen} from '../index'
import styles from "./style";
import {PRODUCTS} from '../../data/index'


const CategoryScreen = ({route,navigation}) => {
 const {categorName,categoryId} = route.params
 const data = PRODUCTS.filter(items=>(items.categoryId===categoryId))

 const renderGridCategories=({item})=>{
  return (
    <FlatScreen
    id={item.id}
    title = {item.title}
    thumb = {item.thumb}
    view = {item.thumb}
    favorite = {item.favorite}
    onPress={()=>navigation.push("ProductScreen",{productId:item.id,title:item.title})}
    />
  )
 }

  return (
   <View style={styles.container}>
    <FlatList
    data={data}
    renderItem={renderGridCategories}
    keyExtractor={item=>item.id}
    />
   </View>
  );
};
export default CategoryScreen;
