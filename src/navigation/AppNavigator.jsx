import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Article, Category, Favorites} from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomIcon = ({name, size = 30, color = '#000'}) => {
  return <Icon name={name} size={size} color={color} />;
};

const Tabs = createBottomTabNavigator();
const HomeNavigator = createStackNavigator();

const HomeStack = () => {
  return (
    <HomeNavigator.Navigator initialRouteName="Home">
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
        name="Favorites"
        component={Favorites}
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
