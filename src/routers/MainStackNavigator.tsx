import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import React from 'react';

export type MainStackParamList = {
  TabNavigator: undefined;
  PostFeedScreen: undefined;
};

const { Navigator, Screen } = createStackNavigator<MainStackParamList>();

export default function MainStackNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerBackTitle: '返回',
      }}
    >
      <Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
