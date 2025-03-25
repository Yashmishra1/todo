import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Splash from '../screens/splash';
import AddTodo from '../screens/addTodo';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='splash'
        screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="splash"
            component={Splash}
            options={{headerShown: false}}
          />
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="addTodo"
          component={AddTodo}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;