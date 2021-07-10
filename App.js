import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadScreen from './screens/ReadStory';
import WriteScreen from './screens/WriteStory';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Read: { screen: ReadScreen },
    Write: { screen: WriteScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        // console.log(routeName)
        if (routeName === 'Write') {
          return (
            <Image
              source={require('./assets/Write.png')}
              style={{ width: 40, height: 40 }}
            />
          );
        } else if (routeName === 'Read') {
          return (
            <Image
              source={require('./assets/Read.png')}
              style={{ width: 40, height: 40 }}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(TabNavigator);
