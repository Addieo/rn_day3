import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';
import actions from 'reduxState/actions';

export type TabParamList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  DiscoverScreen: undefined;
  ProfileScreen: undefined;
};

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>动态</Text>
    </View>
  );
}

function NearbyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>附近</Text>
    </View>
  );
}

function DiscoverScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>发现</Text>
    </View>
  );
}

function ProfileScreen() {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>我的</Text>
      <Button title="退出登录" onPress={() => dispatch(actions.logout())} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="动态" component={HomeScreen} />
      <Tab.Screen name="附近" component={NearbyScreen} />
      <Tab.Screen name="发现" component={DiscoverScreen} />
      <Tab.Screen name="我的" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
