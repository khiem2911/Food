import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen,FlatScreens,ProductScreen,CategoryScreen,SeenScreen,FavoriteScreen } from '../screens';
import { COLORS } from '../contains/colors';
const Homestack = createStackNavigator();
const  HomeStackScreen=()=>
{
  return (
    <Homestack.Navigator initialRouteName={'HomeScreen'}
    screenOptions={{
        headerStyle:{
            backgroundColor:COLORS.primary
        },
        headerTintColor:COLORS.second
    }}
    >
    <Homestack.Screen name="HomeScreen" component={HomeScreen} options={{title:"Món ăn ngon"}} />
    <Homestack.Screen name="ProductScreen" component={ProductScreen} options={({route})=>({title:route.params.title})}   />
    <Homestack.Screen name="Category" component={CategoryScreen} options={({route})=>({title:route.params.categorName})}  />
  </Homestack.Navigator>
  )
}
export default HomeStackScreen