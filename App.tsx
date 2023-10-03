import { ThemeProvider } from 'styled-components';
import { StatusBar,ActivityIndicator } from 'react-native';
import  theme  from '@theme/index'
import { useFonts , NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Routes } from '@routes/index';

export default function App() {

  const [ fontsLoaded ] = useFonts({ NunitoSans_400Regular,NunitoSans_700Bold})

  return (
    <ThemeProvider theme={ theme }>
      <SafeAreaView style={{flex:1}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent
        />
        { fontsLoaded ? <Routes /> : <ActivityIndicator/> }
      </SafeAreaView>
    </ThemeProvider>
  );
}