import { View, Text, Image, ImageBackground } from "react-native";
import styles from "./style";
import {Icon} from '../index'
import { ScrollView } from "react-native";
import { PRODUCTS } from "../../data";
import { useDispatch } from "react-redux";
import {addNewProduct} from "../../store/slices/viewed"
import { useEffect } from "react";


const ProductScreen = ({route}) => {
  const dispatch = useDispatch()
  const {productId,title}=route.params
  const {intro,view,thumb,favorite,ingredients,instructions} = PRODUCTS.find(item=>(
    item.id===productId
  ))
  useEffect(()=>{
    dispatch(addNewProduct({id:productId}))
  },[])
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/background.png")}>
          <View style={styles.boxImage}>
            <Image
              style={styles.image}
              source={thumb}
            />
             <View style={styles.item}>
            <View style={[styles.icon,styles.iconRight]}>
            <Icon  name="ios-heart" number={favorite}/>
            </View>
        <View style={[styles.icon,styles.iconLeft]}>
        <Icon  name="ios-eye-outline" number={view}/>
        </View>
          </View>
          </View>
         
        <View style={styles.product}>
      
    <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}} >
           <Text style={styles.text} >{intro}</Text>
           <View style={styles.material}>
            <View style={styles.headerMaterial}>
              <Text style={styles.title}>Nguyên liệu</Text>
            </View>
            <View style={styles.contentMaterial}>
            <Text>{ingredients}</Text>
            </View>
           </View>
          
           <View style={styles.material}>
            <View style={styles.headerMaterial}>
              <Text style={styles.title}>Cách thực hiện</Text>
            </View>
            <View style={styles.contentMaterial}>
            <Text>{instructions}</Text>
            </View>
           </View>
           </ScrollView>
        </View>
        
      </ImageBackground>
    </View>
  );
};
export default ProductScreen;
