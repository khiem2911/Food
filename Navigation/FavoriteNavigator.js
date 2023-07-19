import { StyleSheet, Text, View } from 'react-native';
import { FavoriteScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../contains/colors';
import IconHeader from '../screens/iconheader';
import { useSelector } from 'react-redux';

const Favoritestack = createStackNavigator();
const  FavoriteStackScreen=({navigation})=>
{
   const data = useSelector(state=>state.favorite.favorites)
  return (
    <Favoritestack.Navigator initialRouteName={'FavoriteScreen'}
    screenOptions={{
        headerStyle:{
            backgroundColor:COLORS.primary
        },
        headerTintColor:COLORS.second
    }}
    >
    <Favoritestack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{title:"Yêu thích",headerRight:()=><IconHeader data={data}/>}} />
  </Favoritestack.Navigator>
  )
}
export default FavoriteStackScreen