import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/styles/index';

import Category from '~/pages/Category';
import ShopCart from '~/pages/ShopCart';

const Home = createStackNavigator(
  {
    Category,
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
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },
  ),
);

export default Routes;
