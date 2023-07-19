import { StyleSheet, Text, View } from 'react-native';
import { SeenScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../contains/colors';
import IconHeader from '../screens/iconheader';
import { useSelector } from 'react-redux';

const Seenstack = createStackNavigator();
const  SeenStackScreen=({navigation})=>
{
  const data = useSelector(state=>state.viewed.items)

  return (
    <Seenstack.Navigator initialRouteName={'HomeScreen'}
    screenOptions={{
        headerStyle:{
            backgroundColor:COLORS.primary
        },
        headerTintColor:COLORS.second
    }}
    >
    <Seenstack.Screen name="SeenScreen" component={SeenScreen} options={{title:"Đã xem",headerRight:()=><IconHeader seen={true} data={data}/>}} />
   
  </Seenstack.Navigator>
  )
}
export default SeenStackScreen