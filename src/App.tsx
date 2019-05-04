import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Root } from 'native-base';
import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

import Login from './container/LoginContainer';
import Home from './container/HomeContainer';
import ProfilePage from './container/ProfilePageContainer';
import Sidebar from './container/SidebarContainer';

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
  },
  {
    drawerWidth: deviceWidth - 50,
    drawerPosition: 'left',
    contentComponent: (props) => <Sidebar {...props} />,
  },
);

const App = createStackNavigator(
  {
    Login: { screen: Login },
    ProfilePage: { screen: ProfilePage },
    Drawer: { screen: Drawer },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

export default () => (
  <Root>
    <App />
  </Root>
);
