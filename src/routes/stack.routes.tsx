import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BagScreen } from '../screens/BagScreen';
import { RecipeScreen } from '../screens/RecipeScreen';
import { theme } from '../global/theme';

const Stack = createStackNavigator();

export const StackRoutes: React.FC = () => {
	return (
		<Stack.Navigator
			initialRouteName='RecipeScreen'
			screenOptions={{
				headerTitleStyle: {
					fontFamily: theme.fonts.regular,
				},
				headerTitleAlign: 'center',
				cardStyle: {
					backgroundColor: theme.colors.white
				}
			}}
		>
			<Stack.Screen
				name='BagScreen'
				options={{ title: 'Sacola' }}
				component={BagScreen}
			/>
			<Stack.Screen
				name='RecipeScreen'
				options={{ title: 'Receitas' }}
				component={RecipeScreen}
			/>
		</Stack.Navigator>
	);
};