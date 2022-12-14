import React from 'react';
import RemindersScreen from '../screens/Reminders';
import HighPriorityRemindersScreen from '../screens/HighPriorityReminders';
import LowPriorityRemindersScreen from '../screens/LowPriorityReminders';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = props => {

  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarLabelStyle: {
                flex: 1,
                fontSize: 15,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
            },
            tabBarStyle: {display: 'flex'},
            tabBarIconStyle: {display: 'none'},
        }}
    >
        <Tab.Screen name={'All'} component={RemindersScreen}/>
        <Tab.Screen name={'High'} component={HighPriorityRemindersScreen}/>
        <Tab.Screen name={'Low'} component={LowPriorityRemindersScreen}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;