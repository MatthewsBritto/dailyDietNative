import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { ActivityIndicator, Text, View } from 'react-native';
import  theme  from '@theme/index'
import { useFonts , NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { Home } from '@screens/Home';

export default function App() {

  const [ fontsLoaded ] = useFonts({ NunitoSans_400Regular,NunitoSans_700Bold})

  return (
    <ThemeProvider theme={ theme }>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#333'}
        // translucent
      />
      { fontsLoaded ? <Home /> : <ActivityIndicator/> }
    </ThemeProvider>
  );
}