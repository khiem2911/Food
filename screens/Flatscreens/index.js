import { View, Text, Image, TouchableOpacity,Alert } from "react-native";
import styles from "./style";
import { Icon } from "../index";
import { useDispatch } from "react-redux";
import {handelFavorite,toggleFavorite} from "../../store/slices/favorite"
import {deleteProduct} from "../../store/slices/viewed"


const FlatScreens = ({id,onPress,thumb,title,name}) => {
  const dispatch = useDispatch()

  const deleteFavorites = () =>{
    Alert.alert('Thông báo', 'Bạn có muốn xóa hay không', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => name ? dispatch(deleteProduct({id})) : dispatch(handelFavorite({id})) },
    ]);
  }
  const addFavoriteProducts=()=>{
    dispatch(toggleFavorite({id}))
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.productWrap}>
      <View style={styles.product}>
        <View style={styles.boxIMG}>
          <Image style={styles.img} source={thumb}></Image>
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.items}>
        <TouchableOpacity onPress={deleteFavorites} style={styles.item}>
        <Icon style={styles.text} name="ios-trash"/>
        </TouchableOpacity>
        {name ?
        <TouchableOpacity onPress={addFavoriteProducts} style={styles.item}>
        <Icon name="ios-heart"/>
        </TouchableOpacity>
        :<Text/>
        }
    </View>
    </TouchableOpacity>
  );
};
export default FlatScreens;
