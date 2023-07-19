import { View, Text,TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import { Icon } from "../index";
import styles from './style'
import { useDispatch } from 'react-redux';
import { trashProducts } from '../../store/slices/favorite';
import { trashVieweds } from '../../store/slices/viewed';


export default function IconHeader({seen,data}) {
    const dispatch = useDispatch()
    const trashAllProduct =()=>{
        if(data.length!==0)
        {
            Alert.alert('Thông báo', 'Bạn có muốn xóa tất cả hay không', [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => seen ? dispatch(trashVieweds()) : dispatch(trashProducts()) },
              ]);
        }else
        {
            alert("Không có sản phẩm nào để xóa")
        }
    }

  return (
    <TouchableOpacity onPress={trashAllProduct} style={styles.container}>
    <Icon name="ios-trash"/>
    </TouchableOpacity>
    
  )
}