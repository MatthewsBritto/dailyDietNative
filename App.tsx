import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import  theme  from '@theme/index'

export default function App() {
  return (
    <ThemeProvider theme={ theme }>
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

