import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import Details from '../screens/Details'

const MainApp = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    },
    path: 'home'
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerTitle: 'Details'
    },
    path: 'details/:userId'
  }
})

const AppContainer = createAppContainer(MainApp)

export default () => {
  const prefix = 'myapp://'
  return <AppContainer uriPrefix={prefix} />
}
