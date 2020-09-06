import React from 'react';
import Home from '../pages/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WeekForecast from '../pages/WeekForecast/WeekForecast';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen options={{headerShown: false}} component={Home} name="Home"/>
                    <Stack.Screen options={{headerShown: false}} component={WeekForecast} name="WeekForecast"/>
                </Stack.Navigator>
            </NavigationContainer>
    );
};

export default Navigation;
