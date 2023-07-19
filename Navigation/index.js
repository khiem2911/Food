import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../contains/colors';
import {HomeStackScreen,SeenStackScreen,FavoriteStackScreen} from './navigateScreen'


const MyTabs=()=>{
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
    initialRouteName={'Home'}
    screenOptions={({route})=>({
      tabBarIcon:({focused,color,size})=>{
        let iconname
        switch (route.name) {
          case "Home":
            iconname=focused ? 'ios-home' :"ios-home-outline"
            break;
        case "Seen":
          iconname=focused ? 'ios-timer' :"ios-timer-outline"
          break;
        case "Favorite":
          iconname=focused ? 'ios-heart' :"ios-heart-outline"
          break;
          default:
            break;
        }
        return <Ionicons name={iconname} size={size} color={color}></Ionicons>
      },
    tabBarActiveTintColor:COLORS.second,
    tabBarInactiveTintColor:COLORS.second,
    tabBarStyle:{
      backgroundColor:COLORS.primary,
      height:65,
      paddingBottom:10
    },
    tabBarLabelStyle:{
      fontSize:13
    },
    headerShown:false
    })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} options={{title:"Trang chủ"}} />
      <Tab.Screen name="Seen" component={SeenStackScreen} options={{title:"Đã xem"}} />
      <Tab.Screen name="Favorite" component={FavoriteStackScreen} options={{title:"Yêu thích"}} />
    </Tab.Navigator>
    )
}
export default MyTabs