import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/global/theme';
import { LogBox } from 'react-native';

const App: React.FC = () => {
	let [fontsLoaded] = useFonts({
		'Sul-Sans-Bold': require('./assets/fonts/Bold.otf'),
		'Sul-Sans-Light': require('./assets/fonts/Light.otf'),
		'Sul-Sans-Regular': require('./assets/fonts/Regular.otf'),
	});

	LogBox.ignoreAllLogs();

	if (!fontsLoaded) {

		return <AppLoading />
	}

	return (
		<ThemeProvider theme={theme}>
			<Routes />
		</ThemeProvider>
	);
};

export default App;