import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from '../../consts/screenNames';
import HomeScreen from '../../screens/HomeScreen';
import CreatePhoto from '../../screens/CreatePhotoScreen';

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={SCREEN_NAMES.HOME} 
                    component={HomeScreen} 
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name={SCREEN_NAMES.CREATE_PHOTO}
                    component={CreatePhoto}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};