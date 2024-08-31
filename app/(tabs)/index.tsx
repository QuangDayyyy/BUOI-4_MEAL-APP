import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from '../../src/screens/CategoriesScreen';
import MealsOverviewScreen from '../../src/screens/MealsOverviewScreen';
import MealDetailScreen from '../../src/screens/MealDetailScreen';
import FavoritesScreen from '../../src/screens/FavoritesScreen';

type RootStackParamList = {
  Categories: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

type TabParamList = {
  Meals: undefined;
  Favorites: undefined;
};

type DrawerParamList = {
  MealsCategories: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function MealsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Meals" component={MealsNavigator} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MealsCategories" component={TabNavigator} />
    </Drawer.Navigator>
  );
}