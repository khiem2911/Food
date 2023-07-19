import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Navigation';
import store from './store';
import { Provider } from 'react-redux';


export default function App() {
  
  return (
    <Provider store={store}>
    <NavigationContainer>
    <MyTabs/>
    </NavigationContainer>
 </Provider>
  );
}
