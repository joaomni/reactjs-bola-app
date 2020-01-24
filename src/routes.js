import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Profile from './pages/Profile';
import Scale from './pages/Scale';
import Login from './pages/Login';

Icon.loadFont();

const Routes = createAppContainer(
    createMaterialBottomTabNavigator({
        Login: {
            screen: Login,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                    <Icon name="rocket" size={20} color={focused ? '#fff' : '#ddd'} />
                ),
                tabBarVisible: false,
            }),
        },
        Escala: {
            screen: Scale,
            navigationOptions: () => ({
                //tabBarColor: '#7159c1',
                tabBarIcon: ({ focused }) => (
                    <Icon name="clipboard" size={20} color={focused ? '#fff' : '#ddd'} />
                ),
            }),
        },
        Perfil: {
            screen: Profile,
            navigationOptions: () => ({
                tabBarIcon: ({ focused }) => (
                    <Icon name="user" size={20} color={focused ? '#fff' : '#ddd'} />
                ),
            }),
        },
    },
    {
        //shifting: true,
        initialRouteName: 'Login',
        order: ['Escala', 'Perfil', 'Login'],
        backBehavior: 'order',
        barStyle: {
            backgroundColor: '#7d40e7',
        },
    })
);

/**
 * Colors:
 * #7d40e7
 * #7159c1
 */

export default Routes;