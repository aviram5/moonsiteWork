import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Article, Category, Favorites} from '../screens';

const Tabs = createBottomTabNavigator();
const HomeNavigator = createStackNavigator();

const HomeStack = () => {
  return (
    <HomeNavigator.Navigator>
      <HomeNavigator.Screen name="Home" component={Home} />
      <HomeNavigator.Screen name="Category" component={Category} />
      <HomeNavigator.Screen name="Article" component={Article} />
    </HomeNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen name="HomeStack" component={HomeStack} />
      <Tabs.Screen name="Favorites" component={Favorites} />
    </Tabs.Navigator>
  );
};

export default AppNavigator;
