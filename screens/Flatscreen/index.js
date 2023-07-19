import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { Icon } from "../index";
import { useDispatch, useSelector } from "react-redux";
import {toggleFavorite} from '../../store/slices/favorite'

const FlatScreen = ({id,title,thumb,view,favorite,onPress}) => {
   const dispatch = useDispatch()
   const favoriteData = useSelector(state=>state.favorite.favorites)
   const viewedDate = useSelector(state=>state.viewed.items)
   const views = viewedDate.find(items=>items===id)
   const totalView = views ? view +1 : view
   const data = favoriteData.find(items=>(items.id===id))
   const iconFavo= data ? "ios-heart" : "ios-heart-outline"

   const handelFavorite=()=>{
    dispatch(toggleFavorite({id:id}))
   }
  return (
    <TouchableOpacity onPress={onPress} style={styles.productWrap}>
      <View style={styles.product}>
        <View style={styles.boxIMG}>
          <Image style={styles.img} source={thumb}></Image>
        </View>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.item}>
          <TouchableOpacity onPress={handelFavorite}>
          <Icon name={iconFavo} number={data?favorite+1:favorite}/>
          </TouchableOpacity>
          <TouchableOpacity>
        <Icon name="ios-eye-outline" number={totalView}/>
        </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default FlatScreen;
