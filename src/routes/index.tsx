import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();


const Routes: React.FC = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="home" component={Home}/>
        </Stack.Navigator>
    );
}

export default Routes;