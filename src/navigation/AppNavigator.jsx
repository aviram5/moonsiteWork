import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Article, Category, Favorites} from '../screens';
import CustomIcon from 'src/components/CustomIcon/CustomIcon';

const Tabs = createBottomTabNavigator();
const HomeNavigator = createStackNavigator();
const FavoriteNavigator = createStackNavigator();

const HomeStack = () => {
  return (
    <HomeNavigator.Navigator initialRouteName="Home">
      <HomeNavigator.Screen name="Home" component={Home} />
      <HomeNavigator.Screen name="Category" component={Category} />
      <HomeNavigator.Screen name="Article" component={Article} />
    </HomeNavigator.Navigator>
  );
};
const FavoriteStack = () => {
  return (
    <FavoriteNavigator.Navigator initialRouteName="Favorites">
      <FavoriteNavigator.Screen name="Favorites" component={Favorites} />
      <FavoriteNavigator.Screen name="Article" component={Article} />
    </FavoriteNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <CustomIcon {...{color, size, name: 'home'}} />
          ),
        }}
      />
      <Tabs.Screen
        name="FavoriteStack"
        component={FavoriteStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <CustomIcon {...{color, size, name: 'star'}} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default AppNavigator;
