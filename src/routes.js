import React from 'react';

import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/styles/index';

import Category from '~/pages/Category';
import ShopCart from '~/pages/ShopCart';
import ProductDetails from '~/pages/ProductDetails';

const Home = createStackNavigator(
  {
    Category,
    ProductDetails,
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: { color: colors.primary },
    },
  },
);
const Shop = createStackNavigator(
  {
    ShopCart,
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: { color: colors.primary },
    },
  },
);

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home,
      Shop,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;

          let iconName;

          switch (routeName) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Shop':
              iconName = 'cart';
              break;
            default:
              break;
          }

          return <Icon name={iconName} size={24} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        showLabel: false,
        activeTintColor: colors.primary,
        inactiveTintColor: 'gray',
      },
    },
  ),
);

export default Routes;
